import React from 'react';

interface SectionHeadingProps {
  number?: string;
  tag?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  description,
  className = ""
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {(number || tag) && (
        <div className="flex items-center gap-2 mb-3">
          {number && (
            <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              {number}
            </span>
          )}
          {number && tag && (
            <span className="text-zinc-300 dark:text-zinc-700 font-mono text-xs">—</span>
          )}
          {tag && (
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {tag}
            </span>
          )}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
