import React from 'react';
import { ArrowRight, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden"
    >
      {/* Ambient Gold Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[300px] bg-gold-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Eyebrow Identification */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-zinc-800 text-zinc-300 text-xs font-mono tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{t.hero.eyebrow}</span>
        </div>

        {/* Clear Single Positioning Headline */}
        <h1
          id="hero-heading"
          className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
        >
          {t.hero.headline}{' '}
          <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
            {t.hero.headlineAccent}
          </span>
        </h1>

        {/* Concise Value Proposition (1 sentence) */}
        <p className="text-zinc-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
          {t.hero.valueProposition}
        </p>

        {/* Primary Stack vs Secondary Stack Hierarchy */}
        <div className="pt-2 space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-mono uppercase text-gold-400 mr-1">
              {t.hero.primaryStackLabel}
            </span>
            {t.hero.primaryStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/40 text-xs sm:text-sm font-semibold text-gold-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <span className="text-[11px] font-mono uppercase text-zinc-500 mr-1">
              {t.hero.secondaryStackLabel}
            </span>
            {t.hero.secondaryStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-obsidian-900 border border-zinc-800 text-xs text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Primary Conversion CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <a
            href="#projetos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-obsidian-950 font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
          >
            <span>{t.hero.ctaProjects}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-obsidian-900 hover:bg-obsidian-800 text-zinc-100 hover:text-gold-300 border border-gold-500/30 hover:border-gold-400 font-semibold text-sm sm:text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            <FileDown className="w-4 h-4 text-gold-400" />
            <span>{t.hero.ctaResume}</span>
          </button>
        </div>

        {/* Direct Quick-Contact Links Row */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-zinc-400">
          <a
            href={t.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-gold-400 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-gold-400" />
            <span>LinkedIn</span>
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={t.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-gold-400 transition-colors"
          >
            <Github className="w-4 h-4 text-gold-400" />
            <span>GitHub</span>
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={t.socials.email}
            className="inline-flex items-center gap-1.5 hover:text-gold-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-gold-400" />
            <span>E-mail</span>
          </a>
        </div>
      </div>
    </section>
  );
};
