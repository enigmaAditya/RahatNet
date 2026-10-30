import React from "react";
import Link from "next/link";
import { CategoryConfig } from "@/config/site";
import { CategoryIcon } from "./CategoryIcon";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  category: CategoryConfig;
  count?: number;
}

export function CategoryCard({ category, count }: CategoryCardProps) {
  return (
    <Link
      href={`/${category.id}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        borderTopWidth: "4px",
        borderTopColor: category.accentColor,
      }}
    >
      <div>
        <div className="flex items-center justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl"
            style={{
              backgroundColor: `${category.accentColor}18`,
              color: category.accentColor,
            }}
          >
            <CategoryIcon name={category.iconName} className="h-6 w-6" aria-hidden="true" />
          </div>

          {typeof count === "number" && (
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              {count} {count === 1 ? "Guide" : "Guides"}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400 transition-colors">
          {category.label}
        </h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {category.shortDescription}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 pt-3 border-t border-slate-100 dark:border-slate-800">
        <span>Browse resources</span>
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
  );
}
