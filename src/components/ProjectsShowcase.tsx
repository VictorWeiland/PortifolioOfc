import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsShowcase: React.FC = () => {
  const { t } = useLanguage();
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedCategoryName = t.projects.categories[categoryIdx] || t.projects.categories[0];
  const query = searchQuery.trim().toLowerCase();

  const filteredProjects = t.projects.items.filter((p) => {
    const matchesCat = categoryIdx === 0 || p.category === selectedCategoryName;
    const matchesQuery =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.subdomain.toLowerCase().includes(query) ||
      p.techStack.some((s) => s.toLowerCase().includes(query));
    return matchesCat && matchesQuery;
  });

  return (
    <section id="vitrine" className="relative py-20 sm:py-28 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            {t.projects.tag}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.projects.titleStart}{' '}
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              {t.projects.titleHighlight}
            </span>
          </h2>
          <p className="mt-2 text-zinc-400 max-w-2xl text-sm sm:text-base">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter + Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {t.projects.categories.map((cat, idx) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryIdx(idx)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  categoryIdx === idx
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 font-semibold'
                    : 'bg-obsidian-900 text-zinc-400 hover:text-gold-300 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.projects.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-obsidian-900 border border-zinc-800 focus:border-gold-500/60 focus:outline-none text-sm text-zinc-200 placeholder-zinc-500 transition"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 rounded-2xl bg-obsidian-900/50 border border-zinc-800">
            <h3 className="text-base font-semibold text-white">{t.projects.emptyTitle}</h3>
            <p className="text-sm text-zinc-400 mt-1">{t.projects.emptySubtitle}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((p) => {
              const isExternal = p.url.startsWith('http');
              return (
                <div
                  key={p.id}
                  className="rounded-2xl bg-obsidian-900/90 border border-zinc-800 hover:border-gold-500/40 transition-all p-6 flex flex-col justify-between animate-fadeIn"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-medium text-gold-400 bg-gold-500/10 border border-gold-500/20 px-2.5 py-1 rounded-md">
                        {p.category}
                      </span>
                      <span className="text-xs font-mono text-emerald-400">{p.status}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">{p.name}</h3>
                    <p className="text-xs font-mono text-zinc-500 mb-3">{p.subdomain}</p>
                    <p className="text-sm text-zinc-300 leading-relaxed mb-5">{p.description}</p>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-zinc-800">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {p.techStack.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-obsidian-950 text-zinc-300 border border-zinc-800"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.url}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gold-500/15 hover:bg-gold-500 text-gold-300 hover:text-obsidian-950 font-semibold text-xs transition-all shrink-0 border border-gold-500/30"
                    >
                      <span>{isExternal ? t.projects.visitBtn : t.projects.caseBtn}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
