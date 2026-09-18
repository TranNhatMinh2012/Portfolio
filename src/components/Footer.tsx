import React from 'react';
import { personalData } from '../data/personal';
import { Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span>© 2026 {personalData.name}</span>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
          <span className="text-zinc-600 dark:text-zinc-300">{personalData.title}</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1.5"
            aria-label="GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1.5"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
