import React from 'react';
import { Project } from '../types/portfolio';
import { ProjectVisual } from './ProjectVisual';
import { Github, ArrowUpRight, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  index
}) => {
  const isEven = index % 2 === 0;

  return (
    <article className="py-16 md:py-24 border-b border-zinc-200/70 dark:border-zinc-800/70 last:border-b-0">
      {/* Editorial Header Bar: Oversized Index & Category */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
        <div className="flex items-baseline gap-4">
          <span className="text-5xl sm:text-7xl font-bold font-mono tracking-tighter text-zinc-300 dark:text-zinc-700 select-none">
            {project.number}
          </span>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              {project.category}
            </div>
            <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              ROLE: <span className="font-semibold text-zinc-800 dark:text-zinc-200">{project.role}</span>
            </div>
          </div>
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Source Code</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Main Poster Composition */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Title & Editorial Narrative */}
        <div className={`w-full lg:col-span-5 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
          <h3
            onClick={() => onOpenCaseStudy(project)}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.1] cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            {project.title}
          </h3>

          <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal text-justify">
            {project.shortDescription}
          </p>

          {/* Meaningful Implementation Points */}
          <div className="space-y-2 border-l border-zinc-900 dark:border-zinc-100 pl-4 py-1">
            <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
              Key Engineering Contributions
            </div>
            {project.highlights.slice(0, 3).map((item, idx) => (
              <p key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">
                {item}
              </p>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Trigger */}
          <div className="pt-2">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Examine Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Process-Driven Visual Demonstration */}
        <div className={`w-full lg:col-span-7 ${!isEven ? 'lg:order-1' : ''}`}>
          <ProjectVisual project={project} />
        </div>
      </div>
    </article>
  );
};
