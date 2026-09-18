import React from 'react';
import { personalData } from '../data/personal';
import { Github, ArrowDown, FileText, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenCommandPalette?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="pt-24 pb-16 md:pt-36 md:pb-24">
      {/* Editorial Top Identity Ticker */}
      <div className="flex items-center justify-between border-b border-zinc-200/70 dark:border-zinc-800/70 pb-4 mb-10 md:mb-16 text-xs font-mono">
        <div className="flex items-center gap-2.5 text-zinc-500 dark:text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">
            {personalData.name}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">/</span>
          <span className="text-zinc-500 dark:text-zinc-400">{personalData.vietnameseName}</span>
        </div>

        <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
          <span>HCMC · UTC+7</span>
        </div>
      </div>

      {/* Main Hero: Massive Name Typography & Razor-Sharp Role */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        {/* Left Column: Massive Name Typography (Immediate 5-Second Brand Recognition) */}
        <div className="w-full lg:col-span-8">
          <h1 className="text-7xl sm:text-9xl md:text-[11rem] lg:text-[12rem] font-black tracking-tighter text-zinc-950 dark:text-zinc-50 leading-[0.80] select-none">
            <span className="block">TRAN</span>
            <span className="block">NHAT</span>
            <span className="block text-zinc-400/80 dark:text-zinc-600/80">MINH</span>
          </h1>
        </div>

        {/* Right Column: Direction & Concise Justified Statement */}
        <div className="w-full lg:col-span-4 flex flex-col justify-end space-y-6 pb-2">
          <div className="space-y-1.5 border-l-2 border-zinc-900 dark:border-zinc-100 pl-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block font-medium">
              DIRECTION
            </span>
            <h2 className="text-sm font-mono font-bold tracking-tight text-zinc-900 dark:text-zinc-100 uppercase">
              {personalData.title}
            </h2>
          </div>

          <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal text-justify">
            {personalData.bio}
          </p>
        </div>
      </div>

      {/* Primary Actions */}
      <div className="mt-12 md:mt-20 pt-8 border-t border-zinc-200/70 dark:border-zinc-800/70 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>View Selected Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-mono uppercase tracking-wider transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>

          <a
            href="./CV_Tran_Nhat_Minh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 hover:border-zinc-400 dark:hover:border-zinc-600 text-xs font-mono uppercase tracking-wider transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae (PDF)</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        </div>

        <div className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
          [ 01 // IDENTITY ]
        </div>
      </div>
    </section>
  );
};
