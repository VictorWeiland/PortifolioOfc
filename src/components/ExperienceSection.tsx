import React, { useState } from 'react';
import { BarChart3, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ExperienceCategory } from '../types/portfolio';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ExperienceCategory>('all');

  const filters: { id: ExperienceCategory; label: string }[] = [
    { id: 'all', label: t.experience.filterAll },
    { id: 'tech', label: t.experience.filterTech },
    { id: 'management', label: t.experience.filterManagement },
  ];

  const filteredItems = t.experience.items.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      className="relative py-20 sm:py-24 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
              {t.experience.tag}
            </span>
            <h2
              id="experience-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
            >
              {t.experience.titleStart}{' '}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                {t.experience.titleHighlight}
              </span>
            </h2>
            <p className="mt-2 text-zinc-400 max-w-2xl text-sm sm:text-base">
              {t.experience.subtitle}
            </p>
          </div>

          {/* Experience Category Filter Buttons */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar"
            role="tablist"
            aria-label="Filtro de área de experiência"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                  filter === f.id
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 font-semibold'
                    : 'bg-obsidian-900 text-zinc-400 hover:text-gold-300 border border-zinc-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className={`rounded-2xl bg-obsidian-900/90 border ${
                index < 3 ? 'border-gold-500/35' : 'border-zinc-800'
              } p-6 sm:p-8 animate-fadeIn`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-zinc-800/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{item.role}</h3>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gold-400/90 mt-1">{item.sector}</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-obsidian-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                    {item.period}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                {item.impactSummary}
              </p>

              {/* Impact & Metrics Callout (with TODO placeholder support) */}
              <div className="mb-5 p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
                <BarChart3 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-mono text-amber-200/95 leading-relaxed">
                  {item.metricsPlaceholder}
                </p>
              </div>

              <div className="mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-gold-400 block mb-2.5">
                  {t.experience.responsibilitiesLabel}
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {item.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <span className="mt-1 p-0.5 rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 mr-1">
                  {t.experience.techUsedLabel}
                </span>
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-obsidian-950 text-gold-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
