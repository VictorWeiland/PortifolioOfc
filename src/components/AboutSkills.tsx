import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSkills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="relative py-20 sm:py-28 border-t border-zinc-900 bg-obsidian-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            {t.about.tag}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.about.titleStart}{' '}
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              {t.about.titleHighlight}
            </span>
          </h2>
        </div>

        {/* Top Row: Bio + Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-obsidian-900/90 border border-zinc-800/90">
            <h3 className="text-base font-bold text-gold-300 mb-3">{t.about.bioTitle}</h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">{t.about.bioText}</p>
          </div>

          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-obsidian-900/90 border border-zinc-800/90 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-white mb-4">{t.about.langTitle}</h3>
              <div className="space-y-3">
                {t.about.languages.map((l) => (
                  <div
                    key={l.name}
                    className="p-3.5 rounded-xl bg-obsidian-950 border border-zinc-800 flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-sm font-bold text-white block">{l.name}</span>
                      <span className="text-xs text-zinc-400">{l.level}</span>
                    </div>
                    <div className="flex items-center gap-1.5" aria-label={`${l.dots} out of 5`}>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={`w-3 h-3 rounded-full ${
                            idx < l.dots
                              ? 'bg-gradient-to-r from-gold-300 to-gold-500'
                              : 'bg-zinc-800 border border-zinc-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-500 mt-4 pt-3 border-t border-zinc-800">{t.about.langNote}</p>
          </div>
        </div>

        {/* Bottom Row: Hard Skills + Soft Skills Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Hard Skills (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-obsidian-900/90 border border-gold-500/30">
            <div className="flex items-center justify-between gap-2 mb-5">
              <h3 className="text-lg font-bold text-white">{t.about.hardSkillsTitle}</h3>
              <span className="text-xs font-mono text-gold-400 bg-gold-500/10 border border-gold-500/20 px-2.5 py-1 rounded-md">
                TECH STACK
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.about.hardSkills.map((s) => (
                <div
                  key={s.name}
                  className={`px-3.5 py-2.5 rounded-xl bg-obsidian-950 border ${
                    s.featured ? 'border-gold-500/35' : 'border-zinc-800'
                  } flex items-center justify-between gap-2`}
                >
                  <span
                    className={`text-sm font-medium ${
                      s.featured ? 'text-gold-200' : 'text-zinc-200'
                    }`}
                  >
                    {s.name}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-obsidian-900 text-gold-400 border border-zinc-800 shrink-0">
                    {s.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-obsidian-900/90 border border-zinc-800/90">
            <div className="flex items-center justify-between gap-2 mb-5">
              <h3 className="text-lg font-bold text-white">{t.about.softSkillsTitle}</h3>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                PEOPLE &amp; AGILE
              </span>
            </div>
            <div className="space-y-3">
              {t.about.softSkills.map((ss) => (
                <div
                  key={ss.title}
                  className="p-3.5 rounded-xl bg-obsidian-950 border border-zinc-800/90 hover:border-gold-500/30 transition"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                    <h4 className="text-sm font-bold text-white">{ss.title}</h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pl-3.5">{ss.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
