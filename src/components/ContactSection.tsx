import React, { useEffect, useState } from 'react';
import { ArrowRight, MapPin, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(t.contact.subjectOptions[0]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setSubject(t.contact.subjectOptions[0]);
  }, [t.contact.subjectOptions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting =
      lang === 'pt'
        ? `Olá Victor! Meu nome é *${name.trim()}* (${email.trim()}).`
        : `Hi Victor! My name is *${name.trim()}* (${email.trim()}).`;
    const topicLine = lang === 'pt' ? `*Assunto:* ${subject}` : `*Topic:* ${subject}`;
    const detailsLine =
      lang === 'pt' ? `*Mensagem:* ${message.trim()}` : `*Message:* ${message.trim()}`;

    const text = encodeURIComponent(`${greeting}\n\n${topicLine}\n${detailsLine}`);
    window.open(`https://wa.me/5511956920083?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="relative py-20 sm:py-28 border-t border-zinc-900 bg-obsidian-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
                {t.contact.tag}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                {t.contact.titleStart}{' '}
                <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                  {t.contact.titleHighlight}
                </span>
              </h2>
              <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
                {t.contact.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-obsidian-900 border border-zinc-800/80">
                <div className="p-3 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.contact.whatsappTitle}</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    <span>{t.contact.whatsappDesc} </span>
                    <a
                      href="https://wa.me/5511956920083"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-400 hover:underline font-mono font-semibold"
                    >
                      (11) 95692-0083
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-obsidian-900 border border-zinc-800/80">
                <div className="p-3 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.contact.locationTitle}</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">{t.contact.locationDesc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-900 border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-5">{t.contact.formTitle}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-zinc-800 focus:border-gold-500 focus:outline-none text-sm text-white placeholder-zinc-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-zinc-800 focus:border-gold-500 focus:outline-none text-sm text-white placeholder-zinc-600 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    {t.contact.subjectLabel}
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-zinc-800 focus:border-gold-500 focus:outline-none text-sm text-white transition"
                  >
                    {t.contact.subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-zinc-800 focus:border-gold-500 focus:outline-none text-sm text-white placeholder-zinc-600 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-obsidian-950 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
                >
                  <span>{t.contact.submitBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
