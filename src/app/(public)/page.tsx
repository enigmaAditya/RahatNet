import React from "react";
import { siteConfig } from "@/config/site";
import {
  getCategories,
  getLatestArticles,
  getArticlesByCategory,
} from "@/features/content/lib/articles";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  EmergencyCard,
  CategoryCard,
  ArticleCard,
} from "@/features/content/components";
import { WifiOff, ShieldAlert, Sparkles, BookOpen } from "lucide-react";

export default async function HomePage() {
  const [categories, latestArticles] = await Promise.all([
    getCategories(),
    getLatestArticles(4),
  ]);

  // Fetch article counts for each category tile
  const categoriesWithCount = await Promise.all(
    categories.map(async (cat) => {
      const articles = await getArticlesByCategory(cat.id);
      return {
        ...cat,
        count: articles.length,
      };
    })
  );

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Hero Section */}
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-blue-50/50 via-slate-50 to-transparent py-12 sm:py-16 dark:border-slate-800 dark:from-slate-900/60 dark:via-slate-950"
      >
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300">
              <WifiOff className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Offline Intranet Node Active</span>
            </div>

            <h1
              id="hero-title"
              className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white"
            >
              {siteConfig.name}
            </h1>

            <p className="mt-2 text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300">
              {siteConfig.tagline}
            </p>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {siteConfig.description} When commercial internet networks fail or power infrastructure goes dark, this local intranet box broadcasts essential public survival and safety guidance directly to your mobile phone.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href="/emergency" variant="emergency" size="md">
                <ShieldAlert className="mr-2 h-4 w-4" aria-hidden="true" />
                Emergency Safety Guides
              </Button>
              <Button href="#categories" variant="outline" size="md">
                <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                Explore All Sections
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* In an Emergency Section */}
      <Container>
        <EmergencyCard />
      </Container>

      {/* 4-Tile Category Grid */}
      <section id="categories" aria-labelledby="categories-heading">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-4 dark:border-slate-800">
            <div>
              <h2
                id="categories-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
              >
                Preparedness Hubs
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Choose a domain to access vetted survival guidelines and practical recovery manuals.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categoriesWithCount.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                count={category.count}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Latest Updated Articles */}
      <section aria-labelledby="latest-articles-heading">
        <Container>
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              <div>
                <h2
                  id="latest-articles-heading"
                  className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
                >
                  Latest Updated Guides
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Recently reviewed emergency advisories and practical field manuals.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {latestArticles.map((article) => (
              <ArticleCard key={`${article.category}-${article.slug}`} article={article} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
