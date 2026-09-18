import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortraitSection } from './components/PortraitSection';
import { SectionHeading } from './components/SectionHeading';
import { ProjectCard } from './components/ProjectCard';
import { ProjectCaseStudy } from './components/ProjectCaseStudy';
import { TechMatrix } from './components/TechMatrix';
import { ExperienceItem } from './components/ExperienceItem';
import { EducationItem } from './components/EducationItem';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CVModal } from './components/CVModal';
import { CommandPalette } from './components/CommandPalette';
import { Footer } from './components/Footer';
import { projectsData } from './data/projects';
import { experienceData } from './data/experience';
import { educationData } from './data/education';
import { Project } from './types/portfolio';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenProjectById = (projectId: string) => {
    const found = projectsData.find((p) => p.id === projectId);
    if (found) {
      setActiveCaseStudy(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#18181B] dark:bg-[#0A0A0B] dark:text-[#FAFAFA] font-sans selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-900 transition-colors duration-200">
      {/* Sticky Minimal Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCV={() => setCvModalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 01. WHO I AM: Hero Identity Statement */}
        <Hero
          onOpenCV={() => setCvModalOpen(true)}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

        {/* 01. WHO I AM: Large Editorial Portrait Spread */}
        <PortraitSection />

        {/* 02. WHAT I BUILD: Digital Exhibition of Projects (Center of the Website) */}
        <section id="projects" className="py-16 md:py-24 border-t border-zinc-200/70 dark:border-zinc-800/70">
          <SectionHeading
            number="02"
            tag="WHAT I BUILD"
            title="Projects & Research Implementations"
            description="Verified engineering implementations across multimodal deep learning, retail recommendation algorithms, sequence-to-sequence translation, and distributed text clustering."
          />

          <div className="space-y-4">
            {projectsData.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onOpenCaseStudy={(proj) => setActiveCaseStudy(proj)}
              />
            ))}
          </div>
        </section>

        {/* 03. HOW I THINK: Concise Human Narrative */}
        <section id="about" className="py-16 md:py-28 border-t border-zinc-200/70 dark:border-zinc-800/70">
          <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
            03 // HOW I THINK
          </div>
          <AboutSection />
        </section>

        {/* 04. WHAT I KNOW: Refined Technical Stack System */}
        <section id="focus" className="py-16 md:py-24 border-t border-zinc-200/70 dark:border-zinc-800/70">
          <SectionHeading
            number="04"
            tag="WHAT I KNOW"
            title="Technical Competencies & Tools"
            description="A categorical breakdown of programming languages, machine learning frameworks, and distributed big data tools."
          />
          <TechMatrix />
        </section>

        {/* 05. WHAT I'VE DONE: Teaching Experience & Academic Education */}
        <section id="experience" className="py-16 md:py-24 border-t border-zinc-200/70 dark:border-zinc-800/70">
          <SectionHeading
            number="05"
            tag="WHAT I'VE DONE"
            title="Experience & Education"
            description="Foundational teaching responsibilities at MindX and computer science degree credentials from Ton Duc Thang University."
          />

          <div className="space-y-6 max-w-4xl">
            {experienceData.map((exp, idx) => (
              <ExperienceItem key={idx} item={exp} />
            ))}
            {educationData.map((edu, idx) => (
              <EducationItem key={idx} item={edu} />
            ))}
          </div>
        </section>

        {/* 06. LET'S TALK: Direct Editorial Contact & CV */}
        <section id="contact" className="py-16 md:py-24 border-t border-zinc-200/70 dark:border-zinc-800/70">
          <ContactSection />
        </section>
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Case Study Modal */}
      <ProjectCaseStudy
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />

      {/* Printable CV Modal */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Discreet Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenCV={() => setCvModalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
        onSelectProject={handleOpenProjectById}
      />
    </div>
  );
};

export default App;
