import React from 'react';

interface VisualMomentProps {
  phrase: string[];
  subtext?: string;
  tag?: string;
  variant?: 'large' | 'medium';
}

export const VisualMoment: React.FC<VisualMomentProps> = ({
  phrase,
  subtext,
  tag = "// ENGINEERING ETHOS",
  variant = 'large'
}) => {
  return (
    <div className="py-20 md:py-32 border-y border-zinc-200/80 dark:border-zinc-800/80 my-16 md:my-24 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block mb-4">
            {tag}
          </span>
          <div className="space-y-1">
            {phrase.map((line, idx) => (
              <div
                key={idx}
                className={`font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 ${
                  variant === 'large'
                    ? 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl'
                    : 'text-3xl sm:text-5xl md:text-6xl'
                }`}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {subtext && (
          <div className="max-w-xs font-mono text-xs text-zinc-500 dark:text-zinc-400 border-l border-zinc-200 dark:border-zinc-800 pl-4 py-1">
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};
