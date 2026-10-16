import React from 'react';
import { ExternalLink, FileDown, Github, Linkedin, Mail, MapPin, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const { t } = useLanguage();

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="relative py-20 sm:py-24 border-t border-zinc-900 bg-obsidian-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-obsidian-900/95 border border-gold-500/35 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
              {t.contact.tag}
            </span>
            <h2
              id="contact-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight"
            >
              {t.contact.titleStart}{' '}
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                {t.contact.titleHighlight}
              </span>
            </h2>
            <p className="mt-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
              {t.contact.description}
            </p>
          </div>

          {/* Direct Conversion Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <a
              href={t.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-obsidian-950 border border-zinc-800 hover:border-gold-500/50 transition flex flex-col justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20">
                  <Linkedin className="w-5 h-5" />
                </span>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-gold-400 transition" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">{t.contact.linkedinLabel}</span>
                <span className="text-[11px] font-mono text-amber-300/90 block mt-0.5">
                  TODO: URL do perfil
                </span>
              </div>
            </a>

            <a
              href={t.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-obsidian-950 border border-zinc-800 hover:border-gold-500/50 transition flex flex-col justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20">
                  <Github className="w-5 h-5" />
                </span>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-gold-400 transition" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">{t.contact.githubLabel}</span>
                <span className="text-xs font-mono text-zinc-400 block mt-0.5">
                  github.com/VictorWeiland
                </span>
              </div>
            </a>

            <a
              href={`mailto:${t.socials.email}`}
              className="group p-4 rounded-2xl bg-obsidian-950 border border-zinc-800 hover:border-gold-500/50 transition flex flex-col justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20">
                  <Mail className="w-5 h-5" />
                </span>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-gold-400 transition" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">{t.contact.emailLabel}</span>
                <span className="text-[11px] font-mono text-amber-300/90 truncate block mt-0.5">
                  {t.socials.email}
                </span>
              </div>
            </a>

            <a
              href={t.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-obsidian-950 border border-zinc-800 hover:border-gold-500/50 transition flex flex-col justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MessageSquare className="w-5 h-5" />
                </span>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">{t.contact.whatsappLabel}</span>
                <span className="text-xs font-mono text-emerald-400 block mt-0.5">
                  {t.socials.whatsappDisplay}
                </span>
              </div>
            </a>
          </div>

          {/* Bottom Bar: Location + Resume PDF CTA */}
          <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-400">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <span>
                <strong className="text-zinc-200">{t.contact.locationTitle}:</strong>{' '}
                {t.contact.locationDesc}
              </span>
            </div>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-obsidian-950 font-bold text-sm transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.contact.resumeCta}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
