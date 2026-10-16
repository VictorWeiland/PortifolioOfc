import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { toggleLang, t } = useLanguage();

  return (
    <footer className="bg-obsidian-950 border-t border-zinc-900 text-zinc-400 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 <strong className="text-zinc-300">Victor Fernandes de Almeida</strong> —{' '}
            <span>{t.footer.subtitle}</span>
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-lg bg-obsidian-900 border border-zinc-800 hover:border-gold-500/40 text-zinc-300 hover:text-gold-400 font-mono transition"
            >
              PT / EN
            </button>
            <a
              href="#inicio"
              className="p-2 rounded-lg bg-obsidian-900 border border-zinc-800 text-gold-400 hover:border-gold-400 transition"
              aria-label="Topo"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
