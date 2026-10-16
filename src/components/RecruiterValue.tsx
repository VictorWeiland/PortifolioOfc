import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const RecruiterValue: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="recrutadores"
      className="relative py-20 sm:py-28 border-t border-zinc-900 bg-obsidian-900/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            {t.recruiterSection.tag}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
            {t.recruiterSection.titleStart}{' '}
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              {t.recruiterSection.titleHighlight}
            </span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t.recruiterSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.recruiterSection.cards.map((c) => (
            <div
              key={c.badge}
              className="p-6 sm:p-7 rounded-2xl bg-obsidian-950 border border-zinc-800 hover:border-gold-500/40 transition"
            >
              <span className="text-xs font-mono text-gold-400 font-bold block mb-2">
                {c.badge}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
