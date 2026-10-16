import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { t } = useLanguage();
  const { subtitleParts } = t.hero;

  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 overflow-hidden">
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-gold-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Subtle Role Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian-900 border border-gold-500/30 text-gold-300 text-xs font-mono tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Clean Name & Headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Victor Fernandes{' '}
          <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
            de Almeida
          </span>
        </h1>

        {/* Clear, Recruiter-Friendly Bio Subtitle */}
        <p className="text-zinc-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
          {subtitleParts.intro}
          <strong className="text-gold-300 font-semibold">{subtitleParts.highlight1}</strong>
          {subtitleParts.mid1}
          <strong className="text-gold-300 font-semibold">{subtitleParts.highlight2}</strong>
          {subtitleParts.mid2}
          <strong className="text-gold-300 font-semibold">{subtitleParts.highlight3}</strong>
          {subtitleParts.outro}
        </p>

        {/* Clean Core Skills Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {t.hero.pills.map((pill, idx) => (
            <span
              key={pill}
              className={`px-3.5 py-1.5 rounded-full bg-obsidian-900 border text-xs font-medium ${
                idx < 2
                  ? 'border-gold-500/30 text-gold-300'
                  : 'border-zinc-800 text-zinc-300'
              }`}
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Clean Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="#experiencia"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-obsidian-950 font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-obsidian-900 hover:bg-obsidian-800 text-zinc-200 hover:text-gold-300 border border-zinc-800 hover:border-gold-500/40 font-semibold text-sm sm:text-base transition-all"
          >
            <FileText className="w-4 h-4 text-gold-400" />
            <span>{t.hero.ctaSecondary}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
