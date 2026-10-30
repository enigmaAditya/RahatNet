import React from "react";
import { siteConfig } from "@/config/site";
import { PhoneCall, AlertTriangle, Radio } from "lucide-react";

export function EmergencyCard({ className = "" }: { className?: string }) {
  return (
    <section
      aria-labelledby="emergency-helplines-heading"
      className={`rounded-2xl border-2 border-red-600/90 bg-red-50/70 p-5 sm:p-6 text-slate-900 shadow-sm dark:border-red-600/80 dark:bg-red-950/30 dark:text-slate-100 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-red-200 pb-4 dark:border-red-900/60">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-xs">
            <AlertTriangle className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h2
              id="emergency-helplines-heading"
              className="text-xl sm:text-2xl font-bold tracking-tight text-red-900 dark:text-red-200"
            >
              In an Emergency
            </h2>
            <p className="text-sm font-medium text-red-800 dark:text-red-300">
              Immediate India First-Responder Helplines
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800 dark:bg-red-900/50 dark:text-red-300 border border-red-300 dark:border-red-800">
          <Radio className="h-3.5 w-3.5 animate-pulse text-red-600 dark:text-red-400" aria-hidden="true" />
          <span>Toll-Free Numbers</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {siteConfig.emergencyHelplines.map((helpline) => (
          <a
            key={helpline.number}
            href={`tel:${helpline.number}`}
            aria-label={`Call ${helpline.label} on ${helpline.number}`}
            className="group flex flex-col justify-between rounded-xl border border-red-200 bg-white p-4 transition-all hover:border-red-400 hover:shadow-md active:scale-[0.99] dark:border-red-900/70 dark:bg-slate-900 min-h-[44px] focus-visible:outline-red-600"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400">
                  {helpline.label}
                </span>
                <PhoneCall className="h-4 w-4 text-red-600 transition-transform group-hover:scale-110 dark:text-red-400" aria-hidden="true" />
              </div>
              <p className="mt-1 text-2xl font-black tracking-tight text-red-600 dark:text-red-400">
                {helpline.number}
              </p>
            </div>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-snug">
              {helpline.description}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-100/70 p-3 text-xs text-red-900 dark:bg-red-950/50 dark:text-red-200 border border-red-200/80 dark:border-red-900/50">
        <span className="font-bold shrink-0">⚠️ Important Notice:</span>
        <p className="leading-relaxed">
          {siteConfig.emergencyNotice}
        </p>
      </div>
    </section>
  );
}
