import React, { useState } from 'react';
import { personalData } from '../data/personal';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-16 md:py-24 space-y-8 text-left">
      <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        06 // INITIATE CONVERSATION
      </div>

      {/* Oversized editorial closing title */}
      <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-950 dark:text-zinc-50 leading-[0.9]">
        LET'S BUILD<br />
        SOMETHING USEFUL.
      </h2>

      <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal max-w-xl text-justify">
        Actively seeking AI / Machine Learning / Data Engineering opportunities, research internships, and collaborative software projects.
      </p>

      {/* Prominent Direct Email Action */}
      <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 font-mono">
        <a
          href={`mailto:${personalData.email}`}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-sm tracking-wide transition-colors shadow-sm"
        >
          <Mail className="w-4 h-4" />
          <span>{personalData.email}</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70" />
        </a>

        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs tracking-wider uppercase transition-colors"
          title="Copy email to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-zinc-400" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      {/* Profile Links & Origin */}
      <div className="pt-8 border-t border-zinc-200/70 dark:border-zinc-800/70 flex flex-wrap items-center justify-between gap-6 font-mono text-xs">
        <div className="flex items-center gap-6">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors uppercase tracking-wider"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors uppercase tracking-wider"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <span className="text-zinc-400 dark:text-zinc-500">
          Ho Chi Minh City, Vietnam (HCMC · UTC+7)
        </span>
      </div>
    </div>
  );
};
