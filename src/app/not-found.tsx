import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { SearchX, Home, ArrowRight, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[65vh] items-center justify-center py-16">
      <Container size="narrow" className="text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-xs">
          <SearchX className="h-8 w-8" aria-hidden="true" />
        </div>

        <span className="mt-4 block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Error 404 • Resource Not Stored
        </span>

        <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Guide or Section Not Found
        </h1>

        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
          The requested document or category does not exist in the local storage of this RahatNet offline intranet node.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary" className="inline-flex items-center gap-2">
            <Home className="h-4 w-4" aria-hidden="true" />
            <span>Return to Home Hub</span>
          </Button>

          <Button href="/emergency" variant="emergency" className="inline-flex items-center gap-2">
            <ShieldAlert className="h-4 w-4" aria-hidden="true" />
            <span>Emergency Guidelines</span>
          </Button>
        </div>

        {/* Quick links to valid sections */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-white p-5 text-left dark:border-slate-800 dark:bg-slate-900/60 max-w-md mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Available Preloaded Sections
          </p>
          <ul className="space-y-2">
            {siteConfig.categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/${cat.id}`}
                  className="flex items-center justify-between text-sm font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 py-1"
                >
                  <span>{cat.label}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
