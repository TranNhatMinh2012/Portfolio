import React, { useState, useEffect } from 'react';
import { personalData } from '../data/personal';
import { Github, Linkedin, Sun, Moon, Menu, X, FileText, Command, Clock } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onOpenCV: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  onOpenCV,
  onOpenCommandPalette
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [saigonTime, setSaigonTime] = useState('');

  // Live Saigon Time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to GMT+7 (Asia/Ho_Chi_Minh)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setSaigonTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Focus', href: '#focus' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAFAF9]/90 dark:bg-[#0A0A0B]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand name + Saigon Time */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-semibold tracking-wider font-mono text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity"
          >
            <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100 group-hover:scale-125 transition-transform" />
            <span>TRAN NHAT MINH</span>
          </a>

          {saigonTime && (
            <div className="hidden lg:flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 dark:text-zinc-500 border-l border-zinc-200 dark:border-zinc-800 pl-4">
              <Clock className="w-3 h-3 opacity-70" />
              <span>Saigon {saigonTime} ICT</span>
            </div>
          )}
        </div>

        {/* Right: Desktop Navigation + Command Palette Trigger */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}

          {/* Quick Command Launcher Button */}
          <button
            onClick={onOpenCommandPalette}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors text-[11px]"
            title="Open command palette (Ctrl+K)"
          >
            <Command className="w-3 h-3" />
            <span>Cmd+K</span>
          </button>

          <button
            onClick={onOpenCV}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors uppercase tracking-wider flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          <span className="w-px h-4 bg-zinc-200 dark:bg-zinc-800" />

          {/* Social icons */}
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-1 rounded text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="p-1.5 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
            aria-label="Open Command Menu"
          >
            <Command className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-[#FAFAF9]/95 dark:bg-[#0A0A0B]/95 backdrop-blur px-6 py-5 space-y-4 animate-fade-in font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCV();
            }}
            className="block w-full text-left py-1.5 uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            Curriculum Vitae (CV)
          </button>

          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-zinc-400 text-[11px]">
            <span>Saigon {saigonTime} ICT</span>
            <div className="flex items-center gap-4">
              <a href={personalData.github} target="_blank" rel="noreferrer" className="text-zinc-600 dark:text-zinc-300">
                GitHub
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="text-zinc-600 dark:text-zinc-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
