import React, { useState, useEffect, useRef } from 'react';
import { personalData } from '../data/personal';
import { projectsData } from '../data/projects';
import { Search, ArrowRight, Github, Linkedin, Mail, Printer, Sun, Moon, Sparkles, FolderGit2 } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onSelectProject: (projectId: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  theme,
  toggleTheme,
  onSelectProject
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  const commands: CommandItem[] = [
    // Sections
    {
      id: 'sec-projects',
      title: 'Go to Selected Work (Projects)',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4" />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-focus',
      title: 'Go to Technical Focus (Skills Matrix)',
      category: 'Navigation',
      icon: <Sparkles className="w-4 h-4" />,
      action: () => {
        document.getElementById('focus')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-experience',
      title: 'Go to Teaching Experience',
      category: 'Navigation',
      icon: <ArrowRight className="w-4 h-4" />,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-education',
      title: 'Go to Academic Background',
      category: 'Navigation',
      icon: <ArrowRight className="w-4 h-4" />,
      action: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-about',
      title: 'Go to About Minh',
      category: 'Navigation',
      icon: <ArrowRight className="w-4 h-4" />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-contact',
      title: 'Go to Contact & Initiate Conversation',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    // Projects direct inspect
    ...projectsData.map((proj) => ({
      id: `proj-${proj.id}`,
      title: `Inspect Case Study: ${proj.title}`,
      category: 'Projects',
      icon: <FolderGit2 className="w-4 h-4" />,
      action: () => {
        onSelectProject(proj.id);
        onClose();
      }
    })),
    // Actions
    {
      id: 'action-cv',
      title: 'Open / Download Curriculum Vitae (PDF)',
      category: 'Actions',
      icon: <Printer className="w-4 h-4" />,
      action: () => {
        window.open('./CV_Tran_Nhat_Minh.pdf', '_blank');
        onClose();
      }
    },
    {
      id: 'action-theme',
      title: `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`,
      category: 'Actions',
      icon: theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />,
      action: () => {
        toggleTheme();
        onClose();
      }
    },
    {
      id: 'action-email',
      title: `Copy Email (${personalData.email})`,
      category: 'Actions',
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        navigator.clipboard.writeText(personalData.email);
        onClose();
      }
    },
    {
      id: 'action-github',
      title: 'Open GitHub Profile',
      category: 'Links',
      icon: <Github className="w-4 h-4" />,
      action: () => {
        window.open(personalData.github, '_blank');
        onClose();
      }
    },
    {
      id: 'action-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Links',
      icon: <Linkedin className="w-4 h-4" />,
      action: () => {
        window.open(personalData.linkedin, '_blank');
        onClose();
      }
    }
  ];

  const filtered = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/60 backdrop-blur-sm flex justify-center items-start pt-20 sm:pt-28 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-xl bg-white dark:bg-[#0E0E10] border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl overflow-hidden animate-fade-in font-sans">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-200 dark:border-zinc-800">
          <Search className="w-4 h-4 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or search projects..."
            className="w-full bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none font-mono"
          />
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-1.5 py-0.5 rounded">
            ESC
          </span>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-zinc-100 dark:divide-zinc-900">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-zinc-400">
              No matching commands or projects found.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={item.id}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer text-xs font-mono transition-colors ${
                  selectedIndex === idx
                    ? 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-950 dark:text-zinc-50'
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <div className="flex items-center gap-3 truncate">
                  <span className="text-zinc-400">{item.icon}</span>
                  <span className="truncate">{item.title}</span>
                </div>
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider pl-3">
                  {item.category}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Footer hints */}
        <div className="px-4 py-2 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-950/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span>↑↓ to navigate</span>
            <span>•</span>
            <span>↵ to select</span>
          </div>
          <span>TRAN NHAT MINH // OS</span>
        </div>
      </div>
    </div>
  );
};
