"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AlertOctagon, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log internal error for diagnostics on the local machine
    console.error("RahatNet Application Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center py-16">
      <Container size="narrow" className="text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 shadow-xs">
          <AlertOctagon className="h-8 w-8" aria-hidden="true" />
        </div>

        <h1 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Something went wrong
        </h1>

        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
          An unexpected error occurred while loading this local page. Your device is still connected to the RahatNet offline box.
        </p>

        {error.digest && (
          <p className="mt-2 text-xs font-mono text-slate-400 dark:text-slate-500">
            Error digest: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            onClick={() => reset()}
            variant="primary"
            className="inline-flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            <span>Try Again</span>
          </Button>

          <Button
            href="/"
            variant="outline"
            className="inline-flex items-center gap-2"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            <span>Return to Home</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
