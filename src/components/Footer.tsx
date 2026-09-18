import React from 'react';
import { personalData } from '../data/personal';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <span className="font-bold text-zinc-900 dark:text-zinc-100">{personalData.name.toUpperCase()}</span>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">/</span>
          <span>{personalData.title}</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span>HCMC · UTC+7</span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
};
