import React, { useState } from 'react';
import { Mail, Check, Copy, MessageSquare, Handshake, Code2, ArrowUpRight } from 'lucide-react';
import { Reveal } from './MotionReveal';

export const Contact: React.FC = () => {
  const [topic, setTopic] = useState<'general' | 'collaboration' | 'engineering'>('general');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const contactEmail = 'contact@laploop.com';

  const topics = [
    {
      id: 'general' as const,
      label: 'General Enquiries',
      description: 'Questions regarding Laploop’s vision, organization, and focus areas.',
      icon: MessageSquare,
    },
    {
      id: 'collaboration' as const,
      label: 'Collaborations',
      description: 'Academic, research, and technical joint exploration opportunities.',
      icon: Handshake,
    },
    {
      id: 'engineering' as const,
      label: 'Technology & Engineering',
      description: 'Deep technical discussions, architecture dialogues, and technical exchange.',
      icon: Code2,
    },
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name';
    if (!email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!message.trim()) errs.message = 'Please provide your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const formattedTopicTitle = topics.find((t) => t.id === topic)?.label || 'General Inquiry';
  const mailSubject = subject.trim() || `[Laploop ${formattedTopicTitle}] Message from ${name || 'Inquirer'}`;
  const mailBody = `From: ${name || 'N/A'} (${email || 'N/A'})\nCategory: ${formattedTopicTitle}\n\nMessage:\n${message}`;

  const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  const handleCopy = () => {
    const textToCopy = `To: ${contactEmail}\nSubject: ${mailSubject}\n\n${mailBody}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleOpenMailClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Reveal */}
        <Reveal className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-500 uppercase font-medium">
              CONNECT WITH LAPLOOP
            </p>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-slate-950 mb-6 leading-[1.12]">
            Let&apos;s build what comes next.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            “We welcome thoughtful conversations, ambitious ideas, and opportunities to create meaningful technology.”
          </p>
        </Reveal>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Channels & Topic Selection with Reveal */}
          <Reveal delay={0.1} className="lg:col-span-5 space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
              SELECT INQUIRY TRACK
            </p>

            <div className="space-y-3">
              {topics.map((t) => {
                const Icon = t.icon;
                const isSelected = topic === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTopic(t.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-[#F7F8FA] hover:bg-slate-100/80 text-slate-800 border-slate-200/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                        {t.label}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      )}
                    </div>
                    <p className={`text-xs leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {t.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Direct Email Address Box */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 mt-8">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-4 h-4 text-cyan-600" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Official Communication Channel
                </span>
              </div>
              <p className="text-base font-medium text-slate-900 font-mono">
                {contactEmail}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Monitored by our engineering and leadership teams. We respond to verified technical and collaborative inquiries.
              </p>
            </div>
          </Reveal>

          {/* Right Column: Direct Correspondence Composer with Reveal */}
          <Reveal delay={0.18} className="lg:col-span-7 bg-[#F7F8FA] border border-slate-200/80 rounded-2xl p-6 sm:p-8 hover:border-slate-300 transition-colors duration-300">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/80">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Prepare Correspondence
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Category: <span className="font-medium text-slate-800">{formattedTopicTitle}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-500"
                title="Copy formatted email draft to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy Draft</span>
                  </>
                )}
              </button>
            </div>

            <form onSubmit={handleOpenMailClient} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Alex Mercer"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                      errors.name ? 'border-red-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                      errors.email ? 'border-red-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-700 mb-1">
                  Subject Line <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={`Inquiry regarding ${formattedTopicTitle}`}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1">
                  Message Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your thoughts, research alignment, or proposal..."
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none ${
                    errors.message ? 'border-red-400' : 'border-slate-300'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-cyan-500"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Send via Native Email Client</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <p className="text-[11px] text-slate-500 font-mono text-center sm:text-right">
                  Opens directly with your verified draft
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
