import React from 'react';
import { Experience } from '../types/portfolio';

interface ExperienceItemProps {
  item: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ item }) => {
  return (
    <div className="py-6 border-b border-zinc-200/70 dark:border-zinc-800/70 last:border-b-0 space-y-3 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <div className="flex items-baseline gap-3">
          <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
            {item.role}
          </h3>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            / {item.company}
          </span>
        </div>
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          {item.period} · {item.location}
        </span>
      </div>

      <ul className="space-y-1.5 font-sans text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed text-justify">
        {item.highlights.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-zinc-400 select-none font-mono text-xs pt-0.5">—</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
