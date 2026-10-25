import React from 'react';
import { Target, Compass, ShieldCheck } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './MotionReveal';

export const About: React.FC = () => {
  const principles = [
    {
      title: 'THINK BEYOND TODAY',
      description: 'Look beyond existing limitations and explore new possibilities.',
      narrative:
        'Conventional thinking is bounded by current tools. We invert technical problems, examine first principles, and explore solutions that anticipate future architectural shifts.',
      icon: Compass,
      code: 'PRINCIPLE // 01',
    },
    {
      title: 'BUILD WITH PURPOSE',
      description: 'Create technology that solves meaningful problems.',
      narrative:
        'Engineering without utility is vanity. Every system, computational model, and software layer we explore is grounded in solving tangible, high-consequence challenges.',
      icon: Target,
      code: 'PRINCIPLE // 02',
    },
    {
      title: 'ENGINEER WITH PRECISION',
      description: 'Value reliability, thoughtful design, and technical excellence.',
      narrative:
        'From high-speed interconnects to developer interfaces, rigor and craft are non-negotiable. Precision builds dependability into complex technologies.',
      icon: ShieldCheck,
      code: 'PRINCIPLE // 03',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-[#F7F8FA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Narrative with Reveal */}
        <Reveal className="max-w-4xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-500 uppercase font-medium">
              ABOUT LAPLOOP
            </p>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-slate-950 mb-8 leading-[1.12]">
            Built for what comes next.
          </h2>

          <p className="text-xl sm:text-2xl text-slate-700 font-normal leading-relaxed mb-8">
            “Laploop is an independent technology vision built around curiosity, engineering, and the belief that meaningful innovation comes from asking better questions and building with purpose.”
          </p>

          {/* Supporting phrase highlight */}
          <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base font-mono text-cyan-800 bg-cyan-500/10 px-4 py-2.5 rounded-xl border border-cyan-500/20">
            <span className="font-medium">Independent thinking.</span>
            <span className="text-cyan-400 select-none">/</span>
            <span className="font-medium">Advanced engineering.</span>
            <span className="text-cyan-400 select-none">/</span>
            <span className="font-medium">Meaningful innovation.</span>
          </div>
        </Reveal>

        {/* The Three Guiding Principles with Staggered Scroll Reveal */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title}>
                <div className="h-full bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-9 flex flex-col justify-between shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-300 group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[11px] font-mono tracking-wider text-slate-400 group-hover:text-cyan-600 transition-colors">
                        {p.code}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:text-cyan-600 group-hover:bg-cyan-50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-3">
                      {p.title}
                    </h3>

                    <p className="text-sm font-medium text-slate-800 mb-3 leading-snug">
                      {p.description}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {p.narrative}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">
                      CORE DISCIPLINE
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-cyan-500 transition-colors" />
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Commitment Statement with Reveal */}
        <Reveal delay={0.2} className="mt-16 sm:mt-20 border-t border-slate-200/80 pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
              PHILOSOPHY OF INDEPENDENCE
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We operate independently to preserve long-term technical clarity. By focusing deeply on the foundational layers of technology, Laploop maintains the creative freedom to explore untrodden architectures and build solutions designed for longevity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/80">
            <p className="text-xs font-mono uppercase text-slate-400 mb-2">
              BRAND MESSAGE
            </p>
            <p className="text-sm font-medium text-slate-800 italic">
              “Laploop explores and builds technologies that help shape what comes next.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
