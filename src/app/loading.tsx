import React from "react";
import { Container } from "@/components/ui/Container";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center py-16">
      <Container size="narrow" className="text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
          <Loader2 className="h-6 w-6 animate-spin" aria-hidden="true" />
        </div>
        <h2 className="mt-4 text-lg font-bold text-slate-900 dark:text-slate-100">
          Loading offline resources...
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Fetching local disaster documentation from memory.
        </p>
      </Container>
    </div>
  );
}
