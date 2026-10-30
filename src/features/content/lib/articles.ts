import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { siteConfig, CategoryConfig, CategoryId, categoryIds } from "@/config/site";
import { Article, validateArticleFrontmatter } from "../schemas/article.schema";

const CONTENT_ROOT = path.join(process.cwd(), "content");

/**
 * Returns all configured site categories.
 * Read layer abstraction that will connect to Prisma in Phase 2.
 */
export async function getCategories(): Promise<CategoryConfig[]> {
  return siteConfig.categories;
}

/**
 * Resolves the configuration metadata for a single category ID.
 */
export function getCategoryConfig(category: string): CategoryConfig | undefined {
  return siteConfig.categories.find((c) => c.id === category);
}

/**
 * Reads and parses a markdown file from the content directory.
 * Frontmatter is rigorously validated via Zod schema, halting the build if invalid.
 */
async function loadArticleFromFile(
  categoryDir: string,
  fileName: string
): Promise<Article> {
  const fullPath = path.join(CONTENT_ROOT, categoryDir, fileName);
  const rawSource = await fs.readFile(fullPath, "utf-8");

  const parsed = matter(rawSource);
  const validatedFrontmatter = validateArticleFrontmatter(parsed.data, fullPath);

  return {
    ...validatedFrontmatter,
    content: parsed.content.trim(),
  };
}

/**
 * Retrieves all articles within a specific category, sorted by updatedAt descending.
 * Returns an empty array if the category does not exist or has no articles.
 */
export async function getArticlesByCategory(category: string): Promise<Article[]> {
  if (!categoryIds.includes(category as CategoryId)) {
    return [];
  }

  const categoryDir = path.join(CONTENT_ROOT, category);

  try {
    const entries = await fs.readdir(categoryDir, { withFileTypes: true });
    const mdFiles = entries.filter(
      (entry) => entry.isFile() && entry.name.endsWith(".md")
    );

    const articles = await Promise.all(
      mdFiles.map((file) => loadArticleFromFile(category, file.name))
    );

    // Sort by latest update date first
    return articles.sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  } catch (error: unknown) {
    // If directory doesn't exist, return empty array
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

/**
 * Retrieves a single article by category and slug.
 * Returns null if not found.
 */
export async function getArticle(
  category: string,
  slug: string
): Promise<Article | null> {
  const articles = await getArticlesByCategory(category);
  const found = articles.find((article) => article.slug === slug);
  return found ?? null;
}

/**
 * Returns parameter pairs for all statically generated article routes.
 * Used by generateStaticParams in [category]/[slug]/page.tsx.
 */
export async function getAllArticleParams(): Promise<
  { category: string; slug: string }[]
> {
  const params: { category: string; slug: string }[] = [];

  for (const catId of categoryIds) {
    const articles = await getArticlesByCategory(catId);
    for (const article of articles) {
      params.push({
        category: article.category,
        slug: article.slug,
      });
    }
  }

  return params;
}

/**
 * Returns latest articles across all categories, sorted by updatedAt descending.
 * Used on the Home page.
 */
export async function getLatestArticles(limit = 4): Promise<Article[]> {
  const allArticles: Article[] = [];

  for (const catId of categoryIds) {
    const catArticles = await getArticlesByCategory(catId);
    allArticles.push(...catArticles);
  }

  return allArticles
    .sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
    .slice(0, limit);
}
