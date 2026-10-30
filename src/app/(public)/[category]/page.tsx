import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categoryIds, CategoryId } from "@/config/site";
import {
  getArticlesByCategory,
  getCategoryConfig,
} from "@/features/content/lib/articles";
import { Container } from "@/components/ui/Container";
import { ArticleCard } from "@/features/content/components";
import { FileText } from "lucide-react";

export const dynamicParams = false;

export async function generateStaticParams() {
  return categoryIds.map((id) => ({
    category: id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const config = getCategoryConfig(category);

  if (!config) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: config.label,
    description: config.shortDescription,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!categoryIds.includes(category as CategoryId)) {
    notFound();
  }

  const [articles, config] = await Promise.all([
    getArticlesByCategory(category),
    getCategoryConfig(category),
  ]);

  if (!config) {
    notFound();
  }

  return (
    <Container>
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Available Guides ({articles.length})
          </h2>
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Preloaded for offline reading
        </span>
      </div>

      {articles.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-800">
          <p className="text-base text-slate-600 dark:text-slate-400">
            No guides found in this section yet.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              showCategoryBadge={false}
            />
          ))}
        </div>
      )}
    </Container>
  );
}
