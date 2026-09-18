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
import { VisualMoment } from './components/VisualMoment';
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
    <div className="min-h-screen bg-[#F8F7F4] text-[#111113] dark:bg-[#0D0D0F] dark:text-[#EDEDEC] font-sans selection:bg-blue-600 selection:text-white dark:selection:bg-blue-500 dark:selection:text-zinc-950 transition-colors duration-200">
      {/* Sticky Gallery Index Navigation */}
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

        {/* 02. PERSONAL IDENTITY: Human Mindset & Narrative */}
        <section id="about" className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
          <span className="absolute -top-2 left-0 text-zinc-300 dark:text-zinc-700 font-mono text-xs select-none">+</span>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
            <span>02 // PERSONAL IDENTITY</span>
          </div>
          <AboutSection />
        </section>

        {/* 03. WHAT I BUILD: Digital Exhibition of Projects (Center of the Website) */}
        <section id="projects" className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
          <span className="absolute -top-2 left-0 text-zinc-300 dark:text-zinc-700 font-mono text-xs select-none">+</span>
          <SectionHeading
            number="03"
            tag="SELECTED WORK"
            title="Projects & Research Exhibition"
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

        {/* 04. WHAT I KNOW: Refined Technical Stack System */}
        <section id="focus" className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
          <span className="absolute -top-2 left-0 text-zinc-300 dark:text-zinc-700 font-mono text-xs select-none">+</span>
          <SectionHeading
            number="04"
            tag="TECHNICAL MAP"
            title="Competencies & System Architecture"
            description="A categorical breakdown of programming languages, machine learning frameworks, and distributed big data tools."
          />
          <TechMatrix />
        </section>

        {/* 05. WHAT I'VE DONE: Teaching Experience & Academic Education */}
        <section id="experience" className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
          <span className="absolute -top-2 left-0 text-zinc-300 dark:text-zinc-700 font-mono text-xs select-none">+</span>
          <SectionHeading
            number="05"
            tag="TRAJECTORY"
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

        {/* Visual Moment: Architectural Ethos Break */}
        <VisualMoment
          phrase={["BUILD.", "LEARN.", "ITERATE."]}
          subtext="Bridging mathematical principles with scalable software implementations."
          tag="// CORE ETHOS"
          variant="large"
        />

        {/* 06. LET'S TALK: Direct Editorial Contact & CV */}
        <section id="contact" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
          <span className="absolute -top-2 left-0 text-zinc-300 dark:text-zinc-700 font-mono text-xs select-none">+</span>
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
