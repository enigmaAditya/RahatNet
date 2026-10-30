import { z } from "zod";
import { categoryIds, CategoryId } from "@/config/site";

export const articleFrontmatterSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  slug: z
    .string()
    .min(2, "Slug must be at least 2 characters long")
    .regex(/^[a-z0-9-]+$/, "Slug must only contain lowercase alphanumeric characters and hyphens"),
  summary: z.string().min(10, "Summary must be at least 10 characters long"),
  category: z.enum(categoryIds, {
    error: `Category must be one of: ${categoryIds.join(", ")}`,
  }),
  updatedAt: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?)?$/,
      "updatedAt must be a valid ISO date or datetime string (e.g. YYYY-MM-DD)"
    ),
  tags: z
    .array(z.string().min(1, "Tag cannot be empty"))
    .min(1, "At least one tag is required"),
  readingMinutes: z
    .number()
    .int("readingMinutes must be an integer")
    .positive("readingMinutes must be positive"),
  source: z.string().min(2, "Source must be specified"),
});

export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>;

export interface Article {
  slug: string;
  category: CategoryId;
  title: string;
  summary: string;
  updatedAt: string;
  tags: string[];
  readingMinutes: number;
  source: string;
  content: string; // Markdown body
}

/**
 * Validates raw frontmatter against the schema.
 * Throws a descriptive error including the file path if validation fails,
 * ensuring invalid content files immediately fail the build.
 */
export function validateArticleFrontmatter(
  data: unknown,
  filePath: string
): ArticleFrontmatter {
  const result = articleFrontmatterSchema.safeParse(data);
  if (!result.success) {
    const errorDetails = result.error.issues
      .map((issue) => `  - [${issue.path.join(".") || "root"}]: ${issue.message}`)
      .join("\n");

    const message = `\n========================================================\n` +
      `❌ FRONTMATTER VALIDATION ERROR IN CONTENT FILE:\n` +
      `File: ${filePath}\n\n` +
      `Issues:\n${errorDetails}\n` +
      `========================================================\n`;

    throw new Error(message);
  }
  return result.data;
}
