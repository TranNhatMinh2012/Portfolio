import React from 'react';
import { Education } from '../types/portfolio';

interface EducationItemProps {
  item: Education;
}

export const EducationItem: React.FC<EducationItemProps> = ({ item }) => {
  return (
    <div className="py-6 border-b border-zinc-200/70 dark:border-zinc-800/70 last:border-b-0 space-y-2 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <div className="flex items-baseline gap-3">
          <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
            {item.degree}
          </h3>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            / {item.institution}
          </span>
        </div>
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          {item.period} · {item.location}
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs text-zinc-600 dark:text-zinc-400 pt-1">
        <div>
          <span>Cumulative GPA: </span>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">{item.gpa}</span>
        </div>
        <span>•</span>
        <div className="text-zinc-500">{item.focus}</div>
      </div>
    </div>
  );
};
