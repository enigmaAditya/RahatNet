import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { WifiOff, ShieldCheck, Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 text-slate-600 dark:text-slate-400">
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                {siteConfig.name}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                <WifiOff className="h-3 w-3" aria-hidden="true" />
                100% Offline
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed">
              {siteConfig.tagline}. Designed for immediate deployment on local portable hardware to serve stranded citizens during disasters without internet.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Information Hubs
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {siteConfig.categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/${cat.id}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block py-1"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Emergency Direct Dial
            </h3>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {siteConfig.emergencyHelplines.map((h) => (
                <a
                  key={h.number}
                  href={`tel:${h.number}`}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold text-slate-800 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {h.label}: <span className="text-red-600 dark:text-red-400">{h.number}</span>
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {siteConfig.emergencyNotice}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} Project. Academic implementation for INT252 (ReactJS) &amp; INT257 (Next.js).
          </p>
          <p className="inline-flex items-center gap-1">
            <span>Built with local resilience</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" aria-hidden="true" />
          </p>
        </div>
      </Container>
    </footer>
  );
}
