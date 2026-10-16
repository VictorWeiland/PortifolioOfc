import React, { useEffect } from 'react';
import { Printer, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const udemyCourses = t.coursesSection.courses.filter((c) => c.platform === 'UDEMY');

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md overflow-y-auto p-4 sm:p-8"
    >
      <div className="max-w-5xl mx-auto my-4">
        {/* Top Controls Bar (hidden when printing) */}
        <div className="no-print mb-4 p-4 rounded-2xl bg-obsidian-900 border border-gold-500/40 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <p className="text-xs sm:text-sm text-zinc-300">{t.resumeModal.note}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 rounded-xl bg-obsidian-950 border border-zinc-800">
              <button
                type="button"
                onClick={() => setLang('pt')}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono ${
                  lang === 'pt' ? 'lang-btn-active' : 'text-zinc-400'
                }`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono ${
                  lang === 'en' ? 'lang-btn-active' : 'text-zinc-400'
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 font-bold text-xs sm:text-sm shadow"
            >
              <Printer className="w-4 h-4" />
              <span>{t.resumeModal.printBtn}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-obsidian-800 hover:bg-obsidian-700 text-zinc-300 border border-zinc-700 text-xs sm:text-sm font-semibold"
            >
              <X className="w-4 h-4" />
              <span>{t.resumeModal.closeBtn}</span>
            </button>
          </div>
        </div>

        {/* Printable Curriculum Vitae Layout */}
        <div className="bg-white text-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-300 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Main Column */}
          <div className="lg:col-span-8 p-8 sm:p-10 space-y-7">
            <div className="border-b-2 border-zinc-800 pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-1">
                  CURRICULUM VITAE
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 uppercase">
                  VICTOR FERNANDES DE ALMEIDA
                </h1>
              </div>
              <p className="text-sm sm:text-base font-semibold text-zinc-600 uppercase tracking-wide">
                {t.hero.cardRole}
              </p>
            </div>

            {/* Hard Skills */}
            <div>
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-1.5 mb-3">
                {t.about.hardSkillsTitle}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-zinc-800 font-medium">
                {t.about.hardSkills.map((s) => (
                  <span key={s.name}>• {s.name}</span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-1.5 mb-3">
                {t.about.softSkillsTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-800 font-medium">
                {t.about.softSkills.map((ss) => (
                  <span key={ss.title}>• {ss.title}</span>
                ))}
              </div>
            </div>

            {/* About This Profile */}
            <div>
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-1.5 mb-3">
                {t.about.bioTitle}
              </h2>
              <p className="text-sm text-zinc-700 leading-relaxed text-justify">
                {t.about.bioText}
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-zinc-900 border-b border-zinc-400 pb-1.5 mb-4">
                {t.resumeModal.workExpHeading}
              </h2>
              <div className="space-y-6">
                {t.experience.items.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-bold text-zinc-900">
                        {exp.role} | <span className="text-zinc-700">{exp.period}</span>
                      </h3>
                    </div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">
                      {exp.sector}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mb-2">
                      {exp.summary}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-zinc-700 mb-2">
                      {exp.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                    <p className="text-xs font-semibold text-zinc-800">
                      {exp.techStack.join(' · ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Dark Sidebar */}
          <div className="lg:col-span-4 bg-[#1c2026] text-white p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-zinc-200 border-4 border-amber-500/80 flex flex-col items-center justify-center text-zinc-800 shadow-lg">
                <span className="font-display text-3xl font-extrabold tracking-wider text-zinc-900">
                  VF
                </span>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-zinc-600 pb-1.5 mb-3">
                  {t.about.certTitle}
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-200 font-semibold">
                  {t.coursesSection.certifications.map((c) => (
                    <li key={c.title}>
                      {c.year} | {c.title}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Udemy Courses */}
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-zinc-600 pb-1.5 mb-3">
                  {t.about.coursesResumeTitle}
                </h3>
                <ul className="space-y-2.5 text-xs text-zinc-200">
                  {udemyCourses.map((c) => (
                    <li key={c.title} className="leading-snug">
                      • <strong>{c.title}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-zinc-600 pb-1.5 mb-3">
                  {t.about.langTitle}
                </h3>
                <div className="space-y-3">
                  {t.about.languages.map((l) => (
                    <div key={l.name} className="flex items-center justify-between text-sm">
                      <span className="font-medium">{l.name}</span>
                      <div className="flex items-center gap-1.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`inline-block w-3 h-3 rounded-full ${
                              i < l.dots ? 'bg-white' : 'border border-zinc-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-700 text-xs text-zinc-400 space-y-1 font-mono">
              <p>Victor Fernandes de Almeida</p>
              <p>WhatsApp: +55 (11) 95692-0083</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
