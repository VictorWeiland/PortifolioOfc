import React, { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#sobre', label: t.nav.about },
    { href: '#experiencia', label: t.nav.experience },
    { href: '#certificacoes', label: t.nav.certifications },
    { href: '#vitrine', label: t.nav.projects },
    { href: '#recrutadores', label: t.nav.recruiters },
    { href: '#contato', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-zinc-800 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Minimalist Personal Name */}
          <a href="#inicio" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center group-hover:border-gold-400 transition">
              <span className="font-display font-bold text-xs text-gold-400">VF</span>
            </div>
            <span className="font-display font-bold text-base tracking-wider text-white group-hover:text-gold-300 transition">
              VICTOR FERNANDES
            </span>
          </a>

          {/* Clean Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-sm font-medium text-zinc-300 hover:text-gold-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher (PT / EN) & Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div
              className="flex items-center p-1 rounded-xl bg-obsidian-900 border border-zinc-800"
              role="group"
              aria-label="Language Switcher"
            >
              <button
                type="button"
                onClick={() => setLang('pt')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  lang === 'pt' ? 'lang-btn-active' : 'text-zinc-400 hover:text-gold-300'
                }`}
                title="Português"
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  lang === 'en' ? 'lang-btn-active' : 'text-zinc-400 hover:text-gold-300'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-obsidian-950 font-semibold text-sm transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>{t.nav.resumeBtn}</span>
            </button>
          </div>

          {/* Mobile Language Switcher + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center p-0.5 rounded-lg bg-obsidian-900 border border-zinc-800">
              <button
                type="button"
                onClick={() => setLang('pt')}
                className={`px-2.5 py-1 rounded-md text-xs font-mono ${
                  lang === 'pt' ? 'lang-btn-active' : 'text-zinc-400'
                }`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md text-xs font-mono ${
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
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-obsidian-900/95 border border-zinc-800 backdrop-blur-xl space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2 text-sm font-medium">
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
            <div className="pt-3 border-t border-zinc-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 font-bold text-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>{t.nav.resumeBtn}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
