import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  return (
    <div className={`prose-offline ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 mb-3 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-base leading-relaxed text-slate-800 dark:text-slate-200">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-5 list-disc pl-6 space-y-2 text-base leading-relaxed text-slate-800 dark:text-slate-200">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-5 list-decimal pl-6 space-y-2 text-base leading-relaxed text-slate-800 dark:text-slate-200">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="pl-1">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="my-5 rounded-r-lg border-l-4 border-blue-500 bg-slate-50 dark:bg-slate-800/50 p-4 italic text-slate-700 dark:text-slate-300">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-slate-900 dark:text-slate-100">
              {children}
            </strong>
          ),
          hr: () => (
            <hr className="my-8 border-t border-slate-200 dark:border-slate-800" />
          ),
          table: ({ children }) => (
            <div className="my-6 w-full overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-sm text-slate-800 dark:text-slate-200">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-300">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">
              {children}
            </th>
          ),
          td: ({ children }) => <td className="px-4 py-3">{children}</td>,
          em: ({ children }) => <em className="italic">{children}</em>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
