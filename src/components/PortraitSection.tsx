import React from 'react';

export const PortraitSection: React.FC = () => {
  return (
    <section className="py-16 md:py-28 border-t border-zinc-200/70 dark:border-zinc-800/70">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left: Large Editorial Portrait Image with clean structural border */}
        <div className="w-full lg:col-span-5 relative group">
          <div className="relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-sm">
            {/* Clean top metadata pill */}
            <div className="absolute top-3 left-3 z-10 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 bg-white/90 dark:bg-zinc-950/90 backdrop-blur px-2.5 py-1 rounded border border-zinc-200/70 dark:border-zinc-800">
              TRAN NHAT MINH / 2026
            </div>

            {/* Natural Full Color Portrait (No grayscale, authentic photo) */}
            <img
              src="./portrait.jpg"
              alt="Portrait of Tran Nhat Minh"
              className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-500 ease-out group-hover:scale-[1.01]"
              loading="lazy"
            />
          </div>

          <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-zinc-400 dark:text-zinc-500 px-1">
            <span>PERSONAL ART DIRECTION</span>
            <span>HCMC · UTC+7</span>
          </div>
        </div>

        {/* Right: Editorial Typography */}
        <div className="w-full lg:col-span-7 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              ENGINEERING IDENTITY
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.05]">
              Real engineering.<br />
              Behind the code.
            </h2>
          </div>

          <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl font-normal text-justify">
            <p>
              I bridge theoretical algorithms in computer vision, sequence modeling, and distributed data mining with concrete, testable software implementations.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono text-left">
              Computer Science · Ton Duc Thang University (2022–2026) · GPA 3.33/4.00
            </p>
          </div>

          {/* Core Focus Tags */}
          <div className="pt-4 border-t border-zinc-200/70 dark:border-zinc-800/70">
            <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
              Engineering Domain
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-zinc-800 dark:text-zinc-200">
              {['Multimodal Deep Learning', 'Recommendation Systems', 'Sequence-to-Sequence NLP', 'Distributed Mining with PySpark'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded bg-zinc-100/80 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
