import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Bold Typographic Personal Statement */}
      <div className="space-y-3">
        <h3 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-950 dark:text-zinc-50 leading-[0.95]">
          CURIOUS BY DEFAULT.<br />
          GROUNDED IN CODE.
        </h3>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal max-w-2xl pt-1">
          Computer Science graduate from Ton Duc Thang University focused on machine learning, deep learning, recommendation systems, and data processing.
        </p>
      </div>

      {/* Shortened, Punchy Narrative (35% shorter, focused on inner mechanics over black boxes) */}
      <div className="max-w-3xl text-base text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4 text-justify">
        <p>
          I care about how models actually work under the hood. Rather than treating neural networks or distributed engines as black-box APIs, I focus on the underlying mechanics—how convolutional backbones extract visual tensors, how attention weights align bilingual tokens, and how distributed partitions behave during large-scale clustering.
        </p>
        <p>
          Alongside project work, I teach programming at MindX. Guiding learners through structured debugging, clean code architecture, and Git workflows reinforces my belief that solid engineering fundamentals matter most.
        </p>
      </div>

      {/* Structured Minimalist Metadata Bar */}
      <div className="pt-6 border-t border-zinc-200/70 dark:border-zinc-800/70 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
        <div>
          <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px] block">
            01 // BACKGROUND
          </span>
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold mt-1 block">
            B.S. Computer Science (2022–2026)
          </span>
          <span className="text-zinc-500 text-[11px]">Ton Duc Thang University · GPA 3.33/4.00</span>
        </div>

        <div>
          <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px] block">
            02 // CURRENT FOCUS
          </span>
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold mt-1 block">
            AI / Machine Learning / Data
          </span>
          <span className="text-zinc-500 text-[11px]">Multimodal Vision-Language & RecSys</span>
        </div>

        <div>
          <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px] block">
            03 // ORIGIN
          </span>
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold mt-1 block">
            Ho Chi Minh City, Vietnam
          </span>
          <span className="text-zinc-500 text-[11px]">Active timezone: HCMC · UTC+7</span>
        </div>
      </div>
    </div>
  );
};
