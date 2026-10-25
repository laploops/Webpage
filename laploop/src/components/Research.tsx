import React from 'react';
import { Compass, Cpu, Zap, ArrowUpRight } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './MotionReveal';

export const Research: React.FC = () => {
  const themes = [
    {
      number: '01',
      phaseLabel: 'PHASE / 01',
      category: 'THEORY & EXPLORATION',
      title: 'Research & Discovery',
      description: 'Exploring emerging ideas and technologies.',
      narrative:
        'Fundamental investigation into compute paradigms, algorithmic complexity, and new methods that challenge legacy assumptions.',
      icon: Compass,
      subtext: '01 · FIRST PRINCIPLES',
      visual: (
        <svg viewBox="0 0 160 90" className="w-full h-14 text-slate-300 group-hover:text-cyan-500 transition-colors duration-300" fill="none">
          {/* Concentric exploratory arcs & horizon ray */}
          <circle cx="80" cy="45" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="80" cy="45" r="16" stroke="currentColor" strokeWidth="1.2" />
          <line x1="20" y1="45" x2="140" y2="45" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" />
          <line x1="80" y1="10" x2="80" y2="80" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" />
          <circle cx="80" cy="45" r="3.5" className="fill-cyan-500" />
          <circle cx="112" cy="45" r="2.5" className="fill-blue-500" />
          <circle cx="56" cy="28" r="2" className="fill-slate-400 group-hover:fill-cyan-400 transition-colors" />
        </svg>
      ),
    },
    {
      number: '02',
      phaseLabel: 'PHASE / 02',
      category: 'SYSTEM VALIDATION',
      title: 'Engineering & Experimentation',
      description: 'Turning concepts into testable systems and practical prototypes.',
      narrative:
        'Rigorous physical and algorithmic testing under extreme constraints to validate mechanical, cryptographic, and computational hypotheses.',
      icon: Cpu,
      subtext: '02 · HARDWARE-ALGORITHM CO-DESIGN',
      visual: (
        <svg viewBox="0 0 160 90" className="w-full h-14 text-slate-300 group-hover:text-blue-500 transition-colors duration-300" fill="none">
          {/* Precision calibration matrix & test rails */}
          <rect x="25" y="20" width="110" height="50" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="25" y1="45" x2="135" y2="45" stroke="currentColor" strokeWidth="1" />
          <line x1="55" y1="20" x2="55" y2="70" stroke="currentColor" strokeWidth="1" />
          <line x1="105" y1="20" x2="105" y2="70" stroke="currentColor" strokeWidth="1" />
          {/* Precision test node markers */}
          <circle cx="55" cy="45" r="3" className="fill-blue-600 stroke-white" strokeWidth="1.5" />
          <circle cx="105" cy="45" r="3" className="fill-cyan-500 stroke-white" strokeWidth="1.5" />
          <path d="M55 45 Q 80 25 105 45" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '03',
      phaseLabel: 'PHASE / 03',
      category: 'PURPOSEFUL IMPACT',
      title: 'Applied Innovation',
      description: 'Finding meaningful applications for advanced technology.',
      narrative:
        'Bridging the gap between raw technological capability and scalable real-world implementations that endure over decades.',
      icon: Zap,
      subtext: '03 · PRODUCTION SCALABILITY',
      visual: (
        <svg viewBox="0 0 160 90" className="w-full h-14 text-slate-300 group-hover:text-cyan-500 transition-colors duration-300" fill="none">
          {/* Converging systems towards real-world impact */}
          <line x1="30" y1="22" x2="80" y2="45" stroke="currentColor" strokeWidth="1.2" />
          <line x1="30" y1="68" x2="80" y2="45" stroke="currentColor" strokeWidth="1.2" />
          <line x1="80" y1="45" x2="132" y2="45" stroke="currentColor" strokeWidth="1.6" />
          {/* Nodes */}
          <rect x="24" y="16" width="12" height="12" rx="2" className="fill-slate-100 group-hover:fill-blue-50 stroke-current transition-colors" strokeWidth="1.2" />
          <rect x="24" y="62" width="12" height="12" rx="2" className="fill-slate-100 group-hover:fill-blue-50 stroke-current transition-colors" strokeWidth="1.2" />
          <circle cx="80" cy="45" r="4.5" className="fill-cyan-500/20 stroke-cyan-500" strokeWidth="1.5" />
          <polygon points="134,45 124,40 124,50" className="fill-blue-600" />
        </svg>
      ),
    },
  ];

  return (
    <section id="research" className="py-24 sm:py-32 lg:py-36 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Staged Scroll Reveal */}
        <Reveal className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-500 uppercase font-medium">
              RESEARCH & METHODOLOGY
            </p>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-slate-950 mb-6 leading-[1.12]">
            Curiosity drives progress.
          </h2>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
            “The next generation of technology begins with difficult questions, rigorous experimentation, and the determination to build better solutions.”
          </p>
        </Reveal>

        {/* Three Editorial White Theme Cards in Staggered Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {themes.map((theme) => {
            const Icon = theme.icon;
            return (
              <StaggerItem key={theme.number}>
                <div className="group relative h-full bg-white border border-slate-200/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-blue-300/80 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div>
                    {/* Top Row: Phase Label + Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-semibold tracking-wider text-slate-400 group-hover:text-cyan-600 transition-colors">
                        {theme.phaseLabel}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-blue-600 group-hover:bg-blue-50/60 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Category Label */}
                    <p className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-2">
                      {theme.category}
                    </p>

                    {/* Card Title */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-950 tracking-[-0.02em] mb-3 leading-snug">
                      {theme.title}
                    </h3>

                    {/* Primary Description */}
                    <p className="text-sm font-medium text-slate-800 mb-3 leading-relaxed">
                      {theme.description}
                    </p>

                    {/* Narrative Details */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-6">
                      {theme.narrative}
                    </p>
                  </div>

                  <div>
                    {/* Custom SVG Line-based Engineering Visual */}
                    <div className="py-3 px-2 rounded-xl bg-slate-50/70 border border-slate-100 mb-6 flex items-center justify-center">
                      {theme.visual}
                    </div>

                    {/* Bottom Metadata & Directional Indicator */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-slate-700 transition-colors">
                      <span>{theme.subtext}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-600" />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Guiding Principle Banner in Refined Off-White Editorial Block */}
        <Reveal delay={0.2} className="mt-14 sm:mt-18">
          <div className="p-7 sm:p-8 rounded-2xl bg-[#F7F9FC] border border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-slate-300 transition-colors duration-200">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                GUIDING PRINCIPLE
              </p>
              <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-900 tracking-tight">
                Rigorous problem definition precedes system architecture.
              </p>
            </div>
            <div className="text-xs font-mono text-slate-500 border-l border-slate-300/80 pl-4 py-1">
              EXPERIMENTATION OVER DOGMA
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
