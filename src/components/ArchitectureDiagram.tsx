import React from 'react';
import { ArchitectureStep } from '../types/portfolio';

interface ArchitectureDiagramProps {
  steps: ArchitectureStep[];
  title?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  steps,
  title = "Technical Pipeline Architecture"
}) => {
  return (
    <div className="my-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40 p-5 md:p-6">
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-5">
        <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          // {title}
        </span>
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
          linear execution flow
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center gap-2 md:gap-3">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div
              className={`flex flex-col justify-center px-3.5 py-2.5 rounded border text-left transition-colors duration-150 ${
                step.isAccent
                  ? 'border-zinc-900 dark:border-zinc-100 bg-white dark:bg-zinc-800 shadow-sm'
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/70'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className={`text-xs md:text-sm font-medium tracking-tight ${
                  step.isAccent
                    ? 'text-zinc-950 dark:text-zinc-50 font-semibold'
                    : 'text-zinc-800 dark:text-zinc-200'
                }`}>
                  {step.label}
                </span>
              </div>
              {step.detail && (
                <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 pl-5">
                  {step.detail}
                </span>
              )}
            </div>

            {idx < steps.length - 1 && (
              <div className="flex items-center justify-center py-1 md:py-0 text-zinc-300 dark:text-zinc-600 font-mono text-xs select-none">
                <span className="hidden md:inline">→</span>
                <span className="md:hidden">↓</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
