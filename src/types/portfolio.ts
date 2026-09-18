export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  role: string;
  shortDescription: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    architectureDiagram: ArchitectureStep[];
    implementationPoints: string[];
    keyTakeaways: string[];
  };
}

export interface ArchitectureStep {
  label: string;
  detail?: string;
  isAccent?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  location: string;
  focus?: string;
}

export interface PersonalInfo {
  name: string;
  vietnameseName: string;
  title: string;
  bio: string;
  location: string;
  education: string;
  period: string;
  gpa: string;
  github: string;
  linkedin: string;
  email: string;
  currentDirection: string;
}
