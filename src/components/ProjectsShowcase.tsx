import React, { useState } from 'react';
import {
  CheckCircle2,
  Database,
  ExternalLink,
  GitBranch,
  Layers,
  MonitorPlay,
  Search,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectItem } from '../types/portfolio';

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
      p.problem.toLowerCase().includes(query) ||
      p.solution.toLowerCase().includes(query) ||
      p.result.toLowerCase().includes(query) ||
      p.techStack.some((s) => s.toLowerCase().includes(query));
    return matchesCat && matchesQuery;
  });

  const renderPreviewBanner = (p: ProjectItem) => {
    if (p.featured) {
      return (
        <div
          role="img"
          aria-label={p.demoMedia.alt}
          className="relative rounded-xl bg-gradient-to-br from-obsidian-950 via-obsidian-900 to-zinc-900 border border-gold-500/30 p-4 overflow-hidden group"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-[11px] font-mono text-zinc-400 truncate">
                {p.subdomain}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
              <MonitorPlay className="w-3 h-3" />
              LIVE SAAS DEMO
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 text-left">
            <div className="p-2.5 rounded-lg bg-obsidian-950/90 border border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-500 block">AGENDA HOJE</span>
              <span className="text-sm font-bold text-gold-300">24 Pacientes</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">96% confirmação</span>
            </div>
            <div className="p-2.5 rounded-lg bg-obsidian-950/90 border border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-500 block">PRONTUÁRIO</span>
              <span className="text-sm font-bold text-white">Digital Cloud</span>
              <span className="text-[10px] text-zinc-400 block mt-0.5">Odontograma 360º</span>
            </div>
            <div className="p-2.5 rounded-lg bg-obsidian-950/90 border border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-500 block">STATUS</span>
              <span className="text-sm font-bold text-emerald-400">Online 24/7</span>
              <span className="text-[10px] text-zinc-400 block mt-0.5">Vercel Edge</span>
            </div>
          </div>

          <p className="mt-2.5 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
            <span>{p.demoMedia.caption}</span>
          </p>
        </div>
      );
    }

    if (p.isDataProject) {
      return (
        <div
          role="img"
          aria-label={p.demoMedia.alt}
          className="relative rounded-xl bg-gradient-to-br from-obsidian-950 via-obsidian-900 to-zinc-900 border border-amber-500/30 p-4 overflow-hidden"
        >
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-zinc-800">
            <span className="text-[11px] font-mono text-gold-300 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-gold-400" />
              {p.subdomain}
            </span>
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
              MEDALLION LAKEHOUSE
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center font-mono">
            <div className="p-2 rounded-lg bg-amber-950/30 border border-amber-700/40">
              <span className="text-[10px] text-amber-400 font-bold block">BRONZE</span>
              <span className="text-[11px] text-zinc-300">Raw Ingestion</span>
            </div>
            <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-600/40">
              <span className="text-[10px] text-zinc-200 font-bold block">SILVER</span>
              <span className="text-[11px] text-zinc-300">PySpark Clean</span>
            </div>
            <div className="p-2 rounded-lg bg-gold-500/15 border border-gold-500/40">
              <span className="text-[10px] text-gold-300 font-bold block">GOLD</span>
              <span className="text-[11px] text-zinc-200">Delta Star SQL</span>
            </div>
          </div>
          <p className="mt-2.5 text-[11px] font-mono text-amber-300/90">{p.demoMedia.caption}</p>
        </div>
      );
    }

    return (
      <div
        role="img"
        aria-label={p.demoMedia.alt}
        className="relative rounded-xl bg-obsidian-950 border border-zinc-800 p-3.5 flex items-center justify-between gap-3"
      >
        <div className="min-w-0">
          <span className="text-[11px] font-mono text-gold-400 block truncate">{p.subdomain}</span>
          <span className="text-xs text-zinc-400 truncate block mt-0.5">{p.demoMedia.caption}</span>
        </div>
        <MonitorPlay className="w-4 h-4 text-zinc-500 shrink-0" />
      </div>
    );
  };

  return (
    <section
      id="projetos"
      aria-labelledby="projects-heading"
      className="relative py-20 sm:py-24 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            {t.projects.tag}
          </span>
          <h2
            id="projects-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            {t.projects.titleStart}{' '}
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              {t.projects.titleHighlight}
            </span>
          </h2>
          <p className="mt-2 text-zinc-400 max-w-2xl text-sm sm:text-base">{t.projects.subtitle}</p>
        </div>

        {/* Filter + Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar"
            role="tablist"
            aria-label="Filtro de categorias de projetos"
          >
            {t.projects.categories.map((cat, idx) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={categoryIdx === idx}
                onClick={() => setCategoryIdx(idx)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
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
            <Search
              className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.projects.searchPlaceholder}
              aria-label={t.projects.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-obsidian-900 border border-zinc-800 focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500/50 text-sm text-zinc-200 placeholder-zinc-500 transition"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((p) => {
              const isLiveExternal = p.liveUrl.startsWith('http');
              const isRepoExternal = p.repoUrl.startsWith('http');

              return (
                <article
                  key={p.id}
                  className={`rounded-2xl bg-obsidian-900/95 border transition-all p-6 sm:p-7 flex flex-col justify-between animate-fadeIn ${
                    p.featured
                      ? 'lg:col-span-2 border-gold-500/60 shadow-[0_0_35px_rgba(212,175,55,0.08)]'
                      : p.isDataProject
                      ? 'border-amber-500/40'
                      : 'border-zinc-800 hover:border-gold-500/40'
                  }`}
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {p.featured && (
                          <span className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950">
                            <Sparkles className="w-3.5 h-3.5" />
                            {t.projects.featuredBadge}
                          </span>
                        )}
                        <span className="text-xs font-medium text-gold-400 bg-gold-500/10 border border-gold-500/20 px-2.5 py-1 rounded-md">
                          {p.category}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                        {p.status}
                      </span>
                    </div>

                    {/* Title + Preview */}
                    <div
                      className={
                        p.featured
                          ? 'grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6'
                          : 'space-y-4 mb-5'
                      }
                    >
                      <div className={p.featured ? 'lg:col-span-7 space-y-4' : 'space-y-3'}>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">{p.name}</h3>
                          <p className="text-xs font-mono text-zinc-500 mt-0.5">{p.subdomain}</p>
                        </div>

                        {/* Problem / Solution / Result structured blocks */}
                        <div className="space-y-3 text-sm">
                          <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-zinc-800/90">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold block mb-1">
                              {t.projects.problemLabel}
                            </span>
                            <p className="text-zinc-300 leading-relaxed">{p.problem}</p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-zinc-800/90">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-gold-400 font-semibold block mb-1 flex items-center gap-1.5">
                              <Wrench className="w-3.5 h-3.5" />
                              {t.projects.solutionLabel}
                            </span>
                            <p className="text-zinc-300 leading-relaxed">{p.solution}</p>
                          </div>

                          {/* Data Engineering Specific Fields (Architecture & Data Volume) */}
                          {(p.architecture || p.dataVolume) && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {p.architecture && (
                                <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30">
                                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-semibold block mb-1 flex items-center gap-1.5">
                                    <Layers className="w-3.5 h-3.5" />
                                    {t.projects.architectureLabel}
                                  </span>
                                  <p className="text-xs text-zinc-200 leading-relaxed">
                                    {p.architecture}
                                  </p>
                                </div>
                              )}
                              {p.dataVolume && (
                                <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30">
                                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-semibold block mb-1 flex items-center gap-1.5">
                                    <Database className="w-3.5 h-3.5" />
                                    {t.projects.dataVolumeLabel}
                                  </span>
                                  <p className="text-xs text-amber-200/90 font-mono leading-relaxed">
                                    {p.dataVolume}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}

                          <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/25">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              {t.projects.resultLabel}
                            </span>
                            <p className="text-zinc-200 leading-relaxed">{p.result}</p>
                          </div>
                        </div>
                      </div>

                      <div className={p.featured ? 'lg:col-span-5' : ''}>{renderPreviewBanner(p)}</div>
                    </div>
                  </div>

                  {/* Footer: Stack + Action Links */}
                  <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
                        {t.projects.stackLabel}
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {p.techStack.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-obsidian-950 text-gold-300 border border-zinc-800"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                      <a
                        href={p.liveUrl}
                        target={isLiveExternal ? '_blank' : undefined}
                        rel={isLiveExternal ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-obsidian-950 font-bold text-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{t.projects.liveBtn}</span>
                      </a>

                      <a
                        href={p.repoUrl}
                        target={isRepoExternal ? '_blank' : undefined}
                        rel={isRepoExternal ? 'noopener noreferrer' : undefined}
                        title={
                          p.repoUrl.includes('TODO')
                            ? 'TODO: Substituir pela URL do repositório em src/data/i18n.ts'
                            : p.repoUrl
                        }
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-obsidian-950 hover:bg-obsidian-800 text-zinc-300 hover:text-gold-300 border border-zinc-700 hover:border-gold-500/40 font-semibold text-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                      >
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>{t.projects.repoBtn}</span>
                        {p.repoUrl.includes('TODO') && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                            TODO
                          </span>
                        )}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
