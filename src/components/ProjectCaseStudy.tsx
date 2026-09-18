import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { X, ExternalLink, Github, ArrowLeft } from 'lucide-react';

interface ProjectCaseStudyProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
  project,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/60 backdrop-blur-sm flex justify-center items-start p-3 sm:p-6 md:p-10 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#FAFAF9] dark:bg-[#0E0E10] border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl my-6 overflow-hidden transition-colors">
        {/* Sticky modal header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAFAF9]/95 dark:bg-[#0E0E10]/95 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to projects</span>
          </button>
          
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block font-mono text-[11px] text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 rounded">
              ESC to close
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal content body */}
        <div className="px-6 sm:px-10 py-8 space-y-10">
          {/* Header info */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                PROJECT {project.number}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 font-medium">
                {project.category}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                ROLE: {project.role}
              </span>
            </div>
            
            <h1
              id="case-study-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight"
            >
              {project.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal text-justify">
              {project.shortDescription}
            </p>
          </div>

          {/* Quick links & technologies */}
          <div className="border-y border-zinc-200 dark:border-zinc-800/80 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase rounded border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source Code</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
              </a>
            )}
          </div>

          {/* Section: Overview */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
              01 / Overview
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed text-justify">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Section: Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
                02 / The Problem
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
                {project.caseStudy.problem}
              </p>
            </div>
            <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
                03 / The Approach
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
                {project.caseStudy.approach}
              </p>
            </div>
          </div>

          {/* Section: Technical Architecture */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
              04 / Technical Architecture
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
              End-to-end procedural pipeline representation illustrating the flow of representations from raw input to evaluated outputs.
            </p>
            <ArchitectureDiagram steps={project.caseStudy.architectureDiagram} />
          </div>

          {/* Section: Implementation */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
              05 / Implementation & Engineering Details
            </h2>
            <ul className="space-y-3">
              {project.caseStudy.implementationPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 select-none pt-0.5">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Key Takeaways */}
          <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/40 dark:bg-zinc-900/50">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-3">
              06 / Key Takeaways & Methodological Insights
            </h2>
            <div className="space-y-2.5">
              {project.caseStudy.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 pt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer source code link */}
          {project.githubUrl && (
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block">
                  SOURCE CODE REPOSITORY
                </span>
                <span className="text-sm font-mono text-zinc-700 dark:text-zinc-300 break-all">
                  {project.githubUrl}
                </span>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 transition-colors"
              >
                <span>Inspect Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
