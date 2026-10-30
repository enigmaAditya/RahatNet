import React from "react";
import { notFound } from "next/navigation";
import { categoryIds, CategoryId } from "@/config/site";
import { getCategoryConfig } from "@/features/content/lib/articles";
import { Container } from "@/components/ui/Container";
import { CategoryIcon } from "@/features/content/components";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function generateStaticParams() {
  return categoryIds.map((id) => ({
    category: id,
  }));
}

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!categoryIds.includes(category as CategoryId)) {
    notFound();
  }

  const config = getCategoryConfig(category);
  if (!config) {
    notFound();
  }

  return (
    <div>
      {/* Category Colour Band & Hero Header */}
      <div
        className="w-full border-b border-slate-200/80 py-8 sm:py-10 text-white transition-colors dark:border-slate-800"
        style={{
          backgroundColor: config.accentColor,
        }}
      >
        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-white/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3 w-3 text-white/70" />
              </li>
              <li aria-current="page" className="font-semibold text-white">
                {config.label}
              </li>
            </ol>
          </nav>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xs text-white shadow-xs">
              <CategoryIcon name={config.iconName} className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                {config.label}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
                {config.shortDescription}
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Category Body */}
      <div className="py-8 sm:py-12">{children}</div>
    </div>
  );
}
