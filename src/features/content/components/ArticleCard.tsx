import React from "react";
import Link from "next/link";
import { Article } from "../schemas/article.schema";
import { getCategoryConfig } from "../lib/articles";
import { Clock, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  showCategoryBadge?: boolean;
}

export function ArticleCard({
  article,
  showCategoryBadge = true,
}: ArticleCardProps) {
  const categoryConfig = getCategoryConfig(article.category);
  const formattedDate = new Date(article.updatedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          {showCategoryBadge && categoryConfig && (
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryConfig.theme.badge}`}
            >
              {categoryConfig.label}
            </span>
          )}

          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{article.readingMinutes} min read</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              <time dateTime={article.updatedAt}>{formattedDate}</time>
            </span>
          </div>
        </div>

        <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400 transition-colors">
          <Link
            href={`/${article.category}/${article.slug}`}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          >
            {article.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {article.summary}
        </p>

        {article.tags && article.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
        <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium truncate max-w-[65%]">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
          <span className="truncate">{article.source}</span>
        </span>

        <Link
          href={`/${article.category}/${article.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 min-h-[44px] py-1 px-2 -mr-2 rounded focus-visible:outline-blue-600"
          aria-label={`Read guide: ${article.title}`}
        >
          <span>Read guide</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
