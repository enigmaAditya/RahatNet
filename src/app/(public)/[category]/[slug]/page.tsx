import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getArticle,
  getArticlesByCategory,
  getCategoryConfig,
  getAllArticleParams,
} from "@/features/content/lib/articles";
import { Container } from "@/components/ui/Container";
import { MarkdownRenderer } from "@/features/content/components";
import {
  ChevronRight,
  Clock,
  Calendar,
  ShieldCheck,
  ArrowLeft,
  BookOpen,
} from "lucide-react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const params = await getAllArticleParams();
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const article = await getArticle(category, slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  const [article, allCategoryArticles, config] = await Promise.all([
    getArticle(category, slug),
    getArticlesByCategory(category),
    getCategoryConfig(category),
  ]);

  if (!article || !config) {
    notFound();
  }

  // Filter other articles in same section for "more in this section", up to 3
  const moreArticles = allCategoryArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const formattedDate = new Date(article.updatedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container size="narrow">
      <article className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3" />
            </li>
            <li>
              <Link
                href={`/${category}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {config.label}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3" />
            </li>
            <li
              aria-current="page"
              className="font-medium text-slate-800 dark:text-slate-200 truncate max-w-[200px] sm:max-w-xs"
            >
              {article.title}
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="border-b border-slate-200 pb-6 dark:border-slate-800">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${config.theme.badge}`}
          >
            {config.label}
          </span>

          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
            {article.title}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {article.summary}
          </p>

          {/* Meta Details Box */}
          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 rounded-xl bg-slate-50 p-4 text-xs sm:text-sm text-slate-600 dark:bg-slate-800/60 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-slate-500" aria-hidden="true" />
              <span>
                Updated: <time dateTime={article.updatedAt}>{formattedDate}</time>
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-slate-500" aria-hidden="true" />
              <span>{article.readingMinutes} min read</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>
                Source: <span className="font-semibold text-slate-800 dark:text-slate-200">{article.source}</span>
              </span>
            </div>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-1.5" aria-label="Topic Tags">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Body Content */}
        <div className="mt-8">
          <MarkdownRenderer content={article.content} />
        </div>

        {/* Back Link */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800">
          <Link
            href={`/${category}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 min-h-[44px] focus-visible:outline-blue-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to {config.label}</span>
          </Link>
        </div>
      </article>

      {/* More in this section */}
      {moreArticles.length > 0 && (
        <section aria-labelledby="more-guides-heading" className="mt-12">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <h2
              id="more-guides-heading"
              className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
            >
              More in {config.label}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/${rel.category}/${rel.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-4 shadow-xs transition-all hover:border-blue-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 min-h-[44px] focus-visible:outline-blue-600"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400 line-clamp-2">
                    {rel.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {rel.summary}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  <span>Read guide</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
