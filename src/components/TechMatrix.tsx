import React from 'react';
import { skillsData } from '../data/skills';

export const TechMatrix: React.FC = () => {
  return (
    <div className="border-t border-zinc-200/70 dark:border-zinc-800/70 divide-y divide-zinc-200/70 dark:divide-zinc-800/70 font-mono text-xs">
      {skillsData.map((group) => {
        const isAdditional = group.category.includes('ADDITIONAL');
        return (
          <div
            key={group.category}
            className={`py-4 sm:py-5 flex flex-col md:flex-row md:items-baseline justify-between gap-3 md:gap-8 transition-colors ${
              isAdditional ? 'opacity-80 pt-6' : ''
            }`}
          >
            {/* Category Label */}
            <div className="w-full md:w-52 flex items-center gap-2 flex-shrink-0">
              <span className={`w-1.5 h-1.5 rounded-full ${isAdditional ? 'bg-zinc-300 dark:bg-zinc-700' : 'bg-zinc-900 dark:bg-zinc-100'}`} />
              <span className={`uppercase tracking-widest font-semibold ${
                isAdditional ? 'text-zinc-500 text-[11px]' : 'text-zinc-900 dark:text-zinc-100 text-xs'
              }`}>
                {group.category}
              </span>
            </div>

            {/* Technical Map Items */}
            <div className="flex-1 flex flex-wrap items-center gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-2.5 py-1 rounded border transition-colors ${
                    isAdditional
                      ? 'bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-zinc-200/60 dark:border-zinc-800 text-[11px]'
                      : 'bg-zinc-100/90 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border-zinc-200/80 dark:border-zinc-800 font-medium'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
