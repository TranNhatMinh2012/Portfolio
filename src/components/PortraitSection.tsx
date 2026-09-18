import React from 'react';

export const PortraitSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
      {/* Corner editorial crosshair markers */}
      <span className="absolute -top-2 -left-2 text-zinc-300 dark:text-zinc-700 font-mono text-xs select-none">+</span>
      <span className="absolute -top-2 -right-2 text-zinc-300 dark:text-zinc-700 font-mono text-xs select-none">+</span>

      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: 45% Editorial Portrait Spread with Offset Architectural Frame */}
        <div className="w-full lg:col-span-5 relative group">
          {/* Subtle architectural offset frame */}
          <div className="absolute -inset-2 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 -z-10 group-hover:scale-[1.01] transition-transform duration-500" />

          <div className="relative overflow-hidden rounded-xl border border-zinc-300/80 dark:border-zinc-700/80 bg-zinc-100 dark:bg-zinc-900 shadow-md">
            {/* Top architectural metadata label */}
            <div className="absolute top-3 left-3 z-10 font-mono text-[10px] tracking-wider text-zinc-800 dark:text-zinc-200 bg-white/95 dark:bg-zinc-950/95 backdrop-blur px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
              <span>TRAN NHAT MINH / 2026</span>
            </div>

            {/* Natural Full Color Portrait (Authentic, natural tones) */}
            <img
              src="./portrait.jpg"
              alt="Portrait of Tran Nhat Minh"
              className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />

            {/* Bottom bar overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 flex items-end justify-between text-[11px] font-mono text-white">
              <span className="tracking-widest uppercase text-white/90">EXHIBITION 01</span>
              <span className="text-white/70">HCMC · UTC+7</span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-zinc-400 dark:text-zinc-500 px-1">
            <span>PORTRAIT EXHIBIT</span>
            <span>2022 — 2026</span>
          </div>
        </div>

        {/* Right: Editorial Narrative & Engineering Identity */}
        <div className="w-full lg:col-span-7 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
              <span>01 // IDENTITY EXHIBIT</span>
            </div>

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

          {/* Core Engineering Domains */}
          <div className="pt-4 border-t border-zinc-200/70 dark:border-zinc-800/70">
            <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <span>PRIMARY TECHNICAL DOMAINS</span>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-zinc-800 dark:text-zinc-200">
              {['Multimodal Deep Learning', 'Recommendation Systems', 'Sequence-to-Sequence NLP', 'Distributed Mining with PySpark'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded bg-zinc-100/90 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-blue-500/50 transition-colors"
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
