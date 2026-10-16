import React, { useEffect, useState } from 'react';
import { FileDown, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#projetos', label: t.nav.projects },
    { href: '#experiencia', label: t.nav.experience },
    { href: '#certificacoes', label: t.nav.certifications },
    { href: '#sobre', label: t.nav.about },
    { href: '#contato', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-obsidian-950/95 backdrop-blur-md border-b border-zinc-800/90 py-3'
          : 'bg-obsidian-950/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Brand Identity */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg"
          >
            <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center group-hover:border-gold-400 transition">
              <span className="font-display font-bold text-xs text-gold-400">VF</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base tracking-wider text-white group-hover:text-gold-300 transition leading-none">
                VICTOR FERNANDES
              </span>
              <span className="text-[10px] font-mono text-zinc-400 mt-1 hidden sm:block">
                DATA &amp; SALESFORCE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Menu principal" className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-sm font-medium text-zinc-300 hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Top Conversion Bar: Socials + Language + Resume PDF */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Direct Social Icons */}
            <div className="flex items-center gap-1 pr-2 border-r border-zinc-800">
              <a
                href={t.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Victor Fernandes"
                title="LinkedIn"
                className="p-2 rounded-lg text-zinc-300 hover:text-gold-400 hover:bg-obsidian-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={t.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Victor Fernandes"
                title="GitHub"
                className="p-2 rounded-lg text-zinc-300 hover:text-gold-400 hover:bg-obsidian-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={t.socials.email}
                aria-label="Enviar e-mail para Victor Fernandes"
                title="E-mail"
                className="p-2 rounded-lg text-zinc-300 hover:text-gold-400 hover:bg-obsidian-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Language Switcher */}
            <div
              className="flex items-center p-1 rounded-xl bg-obsidian-900 border border-zinc-800"
              role="group"
              aria-label="Alternar idioma / Switch language"
            >
              <button
                type="button"
                onClick={() => setLang('pt')}
                aria-pressed={lang === 'pt'}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  lang === 'pt' ? 'lang-btn-active' : 'text-zinc-400 hover:text-gold-300'
                }`}
                title="Português"
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  lang === 'en' ? 'lang-btn-active' : 'text-zinc-400 hover:text-gold-300'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Download Resume (PDF) CTA */}
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-obsidian-950 font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.nav.resumeBtn}</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center p-0.5 rounded-lg bg-obsidian-900 border border-zinc-800">
              <button
                type="button"
                onClick={() => setLang('pt')}
                aria-pressed={lang === 'pt'}
                className={`px-2 py-1 rounded-md text-xs font-mono ${
                  lang === 'pt' ? 'lang-btn-active' : 'text-zinc-400'
                }`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`px-2 py-1 rounded-md text-xs font-mono ${
                  lang === 'en' ? 'lang-btn-active' : 'text-zinc-400'
                }`}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg text-zinc-300 hover:text-gold-400 hover:bg-obsidian-800 transition"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir ou fechar menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-obsidian-900/95 border border-zinc-800 backdrop-blur-xl space-y-4 animate-fadeIn">
            <div className="flex flex-col space-y-1.5 text-sm font-medium">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-obsidian-800 text-zinc-200 hover:text-gold-400"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 pt-3 border-t border-zinc-800">
              <a
                href={t.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-obsidian-950 border border-zinc-800 text-zinc-200 hover:text-gold-400"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={t.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-obsidian-950 border border-zinc-800 text-zinc-200 hover:text-gold-400"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={t.socials.email}
                aria-label="E-mail"
                className="p-2.5 rounded-xl bg-obsidian-950 border border-zinc-800 text-zinc-200 hover:text-gold-400"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 font-bold text-sm flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.nav.resumeBtn}</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
