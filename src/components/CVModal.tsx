import React, { useEffect } from 'react';
import { personalData } from '../data/personal';
import { educationData } from '../data/education';
import { experienceData } from '../data/experience';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { X, Printer, ExternalLink } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/70 backdrop-blur-sm flex justify-center items-start p-3 sm:p-6 md:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0C0C0E] border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl my-4 overflow-hidden print:border-none print:shadow-none print:my-0 print:max-w-none">
        {/* Sticky top action bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-white/95 dark:bg-[#0C0C0E]/95 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 print:hidden">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <span>CURRICULUM VITAE</span>
            <span>•</span>
            <span>TRAN NHAT MINH</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV printable sheet */}
        <div className="p-8 sm:p-12 text-zinc-900 dark:text-zinc-100 font-sans print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 id="cv-title" className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {personalData.name}
                </h1>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-1">
                  {personalData.vietnameseName} · {personalData.title}
                </p>
              </div>
              <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 sm:text-right space-y-1">
                <div>{personalData.location}</div>
                <div>
                  <a href={`mailto:${personalData.email}`} className="underline hover:text-zinc-900 dark:hover:text-zinc-100">
                    {personalData.email}
                  </a>
                </div>
                <div className="flex sm:justify-end gap-3 pt-1">
                  <a href={personalData.github} target="_blank" rel="noreferrer" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">
                    GitHub
                  </a>
                  <span>·</span>
                  <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Objective / Summary */}
          <div className="mb-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold mb-2">
              Professional Direction
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {personalData.bio}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
              Education
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start text-sm">
                <div>
                  <div className="font-semibold">{edu.degree}</div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">{edu.institution} — {edu.location}</div>
                  {edu.focus && <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">Focus: {edu.focus}</div>}
                </div>
                <div className="text-right font-mono text-xs text-zinc-600 dark:text-zinc-400 whitespace-nowrap pl-4">
                  <div>{edu.period}</div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-100">GPA: {edu.gpa}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Focus / Skills */}
          <div className="mb-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
              Technical Focus
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillsData.map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="font-mono font-medium text-zinc-500 dark:text-zinc-400 min-w-[130px]">
                    {item.category}:
                  </span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {item.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="mb-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
              Selected Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">{proj.title}</span>
                      <span className="font-mono text-[10px] text-zinc-500">[{proj.role}]</span>
                    </div>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[11px] underline text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1"
                      >
                        <span>source</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                  <div className="font-mono text-[11px] text-zinc-500 mb-1.5">
                    Stack: {proj.technologies.join(' · ')}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300">
                    {proj.highlights.slice(0, 3).map((hl, hIdx) => (
                      <li key={hIdx} className="leading-normal">
                        {hl}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
              Experience
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="text-xs">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="font-semibold text-sm">{exp.role}</span>
                    <span className="text-zinc-600 dark:text-zinc-400"> — {exp.company}</span>
                  </div>
                  <span className="font-mono text-zinc-500 whitespace-nowrap pl-4">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300 mt-1.5">
                  {exp.highlights.slice(0, 4).map((hl, hIdx) => (
                    <li key={hIdx} className="leading-normal">
                      {hl}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
