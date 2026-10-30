import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ShieldAlert } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xs dark:border-slate-800 dark:bg-slate-900/95">
      {/* Top emergency broadcast strip */}
      <div className="bg-slate-900 text-white dark:bg-black py-1.5 px-4 text-xs">
        <Container className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span className="font-semibold tracking-wide">
              LOCAL INTRANET BROADCAST
            </span>
            <span className="hidden sm:inline text-slate-300">
              — Zero Internet Required
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/emergency"
              className="inline-flex items-center gap-1 font-bold text-red-400 hover:text-red-300 transition-colors"
            >
              <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" />
              <span>SOS Emergency</span>
            </Link>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-3.5">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-lg py-1 px-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            aria-label={`${siteConfig.name} - Home`}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-lg shadow-xs">
              RN
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                Disaster Offline Hub
              </span>
            </div>
          </Link>
        </div>

        <nav aria-label="Main Navigation" className="flex items-center">
          <ul className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 scrollbar-none">
            {siteConfig.categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/${cat.id}`}
                  className="inline-flex items-center rounded-lg px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {cat.label.split(" ")[0]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
