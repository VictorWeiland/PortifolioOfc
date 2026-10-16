import React from 'react';
import { Award, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CoursesCertifications: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="certificacoes"
      aria-labelledby="certifications-heading"
      className="relative py-20 sm:py-24 bg-obsidian-900/30 border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
            {t.coursesSection.tag}
          </span>
          <h2
            id="certifications-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-white"
          >
            {t.coursesSection.titleStart}{' '}
            <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              {t.coursesSection.titleHighlight}
            </span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t.coursesSection.subtitle}
          </p>
        </div>

        {/* Official Certifications Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {t.coursesSection.certifications.map((c, idx) => {
            const isExternal = c.verificationUrl.startsWith('http');
            const isTodo = c.verificationUrl.includes('TODO');

            return (
              <article
                key={c.id}
                className={`rounded-2xl p-6 sm:p-7 bg-obsidian-900/95 border ${
                  idx === 0 ? 'border-gold-500/50' : 'border-zinc-800 hover:border-gold-500/35'
                } flex flex-col justify-between transition`}
              >
                <div>
                  {/* Visual Badge Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gold-500/10 border border-gold-500/30">
                      <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-gold-300 font-bold">
                        {c.badgeLabel}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 bg-obsidian-950 border border-zinc-800 px-2.5 py-1 rounded-lg">
                      {c.year}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-1">{c.title}</h3>
                  <p className="text-xs font-mono text-gold-400/90 mb-3">
                    {c.issuer} • {c.subtitle}
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">{c.description}</p>

                  <ul className="space-y-2 pt-4 border-t border-zinc-800/80 mb-6">
                    {c.highlights.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                        <span className="mt-0.5 p-0.5 rounded-full bg-gold-500/20 text-gold-400 shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verification Link Button */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <a
                    href={c.verificationUrl}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    title={
                      isTodo
                        ? 'TODO: Inserir link público da credencial em src/data/i18n.ts'
                        : c.verificationUrl
                    }
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-950 hover:bg-obsidian-800 text-gold-300 border border-gold-500/30 hover:border-gold-400 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  >
                    <Award className="w-4 h-4 text-gold-400" />
                    <span>{t.coursesSection.verifyBadgeBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                    {isTodo && (
                      <span className="ml-1 px-1.5 py-0.5 text-[10px] font-mono rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        TODO
                      </span>
                    )}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Udemy Courses & Technical Specializations Sub-grid */}
        <div className="pt-10 border-t border-zinc-800/80">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-wider mb-2">
              {t.coursesSection.coursesBannerTag}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {t.coursesSection.coursesSubheading}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.coursesSection.courses.map((course) => {
              const isExternal = course.verificationUrl?.startsWith('http');
              const isTodo = course.verificationUrl?.includes('TODO');

              return (
                <article
                  key={course.title}
                  className="p-6 rounded-2xl bg-obsidian-950/90 border border-zinc-800 hover:border-gold-500/40 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-gold-400 bg-gold-500/10 border border-gold-500/20 px-2.5 py-1 rounded-md">
                        {course.category}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-obsidian-900 text-zinc-300 border border-zinc-700">
                        {course.platform}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">{course.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-5">{course.description}</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-zinc-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {course.skills.map((sk) => (
                        <span
                          key={sk}
                          className="px-2.5 py-1 text-xs font-mono rounded bg-obsidian-900 text-gold-300 border border-zinc-800"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                    {course.verificationUrl && (
                      <a
                        href={course.verificationUrl}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-gold-300 transition pt-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                        <span>{t.coursesSection.verifyBadgeBtn}</span>
                        {isTodo && (
                          <span className="px-1.5 py-0.2 text-[10px] rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                            TODO
                          </span>
                        )}
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
