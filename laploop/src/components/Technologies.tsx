import React, { useState } from 'react';
import { Reveal, StaggerContainer, StaggerItem } from './MotionReveal';

interface TechArea {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  schematic: React.ReactNode;
}

export const Technologies: React.FC = () => {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  const areas: TechArea[] = [
    {
      id: 'ai',
      number: '01',
      title: 'Artificial Intelligence',
      description: 'Intelligent systems, applied AI, and emerging computational experiences.',
      details: [
        'Foundation model architectures & inference optimization',
        'Contextual agency & cognitive workflows',
        'Probabilistic machine learning systems',
      ],
      schematic: (
        <svg viewBox="0 0 120 80" className="w-full h-full text-slate-400 group-hover:text-cyan-500 transition-colors duration-300" fill="none">
          {/* Neural synaptic graph */}
          <line x1="20" y1="20" x2="60" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="20" y1="60" x2="60" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="60" y1="40" x2="100" y2="20" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="40" x2="100" y2="60" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="20" x2="60" y2="15" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
          <line x1="60" y1="15" x2="100" y2="20" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
          
          <circle cx="20" cy="20" r="3.5" className="fill-slate-100 group-hover:fill-cyan-50 stroke-current" strokeWidth="1.5" />
          <circle cx="20" cy="60" r="3.5" className="fill-slate-100 group-hover:fill-cyan-50 stroke-current" strokeWidth="1.5" />
          <circle cx="60" cy="15" r="2.5" className="fill-slate-100 stroke-current" strokeWidth="1.2" />
          <circle cx="60" cy="40" r="5" className="fill-slate-200 group-hover:fill-cyan-500/20 stroke-current" strokeWidth="1.75" />
          <circle cx="100" cy="20" r="3.5" className="fill-slate-100 group-hover:fill-cyan-50 stroke-current" strokeWidth="1.5" />
          <circle cx="100" cy="60" r="3.5" className="fill-slate-100 group-hover:fill-cyan-50 stroke-current" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: 'advanced-computing',
      number: '02',
      title: 'Advanced Computing',
      description: 'Computing architectures, performance engineering, and next-generation systems.',
      details: [
        'Heterogeneous parallel execution models',
        'Ultra-low-latency distributed cache fabrics',
        'Mathematical simulation & numerical precision',
      ],
      schematic: (
        <svg viewBox="0 0 120 80" className="w-full h-full text-slate-400 group-hover:text-blue-500 transition-colors duration-300" fill="none">
          {/* Parallel computing interconnect bus */}
          <rect x="15" y="24" width="90" height="32" rx="4" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="30" y1="12" x2="30" y2="68" stroke="currentColor" strokeWidth="1.5" />
          <line x1="60" y1="12" x2="60" y2="68" stroke="currentColor" strokeWidth="1.5" />
          <line x1="90" y1="12" x2="90" y2="68" stroke="currentColor" strokeWidth="1.5" />
          <rect x="25" y="34" width="10" height="12" rx="2" className="fill-slate-100 group-hover:fill-blue-50 stroke-current" strokeWidth="1.2" />
          <rect x="55" y="34" width="10" height="12" rx="2" className="fill-slate-100 group-hover:fill-blue-50 stroke-current" strokeWidth="1.2" />
          <rect x="85" y="34" width="10" height="12" rx="2" className="fill-slate-100 group-hover:fill-blue-50 stroke-current" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      id: 'cybersecurity',
      number: '03',
      title: 'Cybersecurity',
      description: 'Security engineering, digital resilience, and technologies that help protect connected systems.',
      details: [
        'Cryptographic protocol design & verification',
        'Autonomous vulnerability discovery',
        'Zero-trust hardware & network invariants',
      ],
      schematic: (
        <svg viewBox="0 0 120 80" className="w-full h-full text-slate-400 group-hover:text-cyan-500 transition-colors duration-300" fill="none">
          {/* Cryptographic key matrix & shield lattice */}
          <polygon points="60,12 94,26 94,54 60,70 26,54 26,26" stroke="currentColor" strokeWidth="1.4" />
          <polygon points="60,22 84,32 84,50 60,60 36,50 36,32" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.7" />
          <circle cx="60" cy="41" r="4" className="fill-slate-200 group-hover:fill-cyan-400 stroke-current" strokeWidth="1.2" />
          <line x1="60" y1="45" x2="60" y2="53" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: 'software-platforms',
      number: '04',
      title: 'Software & Platforms',
      description: 'Thoughtful software, developer tools, and scalable digital products.',
      details: [
        'Developer toolchains & compiler ergonomics',
        'Resilient distributed systems & state engines',
        'Human-interface engineering & ergonomics',
      ],
      schematic: (
        <svg viewBox="0 0 120 80" className="w-full h-full text-slate-400 group-hover:text-blue-500 transition-colors duration-300" fill="none">
          {/* Multi-tier modular architectural stack */}
          <rect x="20" y="16" width="80" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" className="fill-slate-50 group-hover:fill-blue-50/50" />
          <rect x="20" y="34" width="80" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" className="fill-slate-50 group-hover:fill-blue-50/50" />
          <rect x="20" y="52" width="80" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" className="fill-slate-50 group-hover:fill-blue-50/50" />
          <line x1="30" y1="28" x2="30" y2="34" stroke="currentColor" strokeWidth="1.2" />
          <line x1="90" y1="28" x2="90" y2="34" stroke="currentColor" strokeWidth="1.2" />
          <line x1="60" y1="46" x2="60" y2="52" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      id: 'robotics',
      number: '05',
      title: 'Robotics & Automation',
      description: 'Intelligent machines, automation, and the connection between digital intelligence and the physical world.',
      details: [
        'Real-time kinematic trajectory planning',
        'Sensor fusion across optical, depth & inertial systems',
        'Embodied control feedback loops',
      ],
      schematic: (
        <svg viewBox="0 0 120 80" className="w-full h-full text-slate-400 group-hover:text-cyan-500 transition-colors duration-300" fill="none">
          {/* Kinematic linkage & actuator vector */}
          <circle cx="28" cy="58" r="6" stroke="currentColor" strokeWidth="1.4" className="fill-slate-100" />
          <line x1="32" y1="54" x2="62" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="64" cy="32" r="5" stroke="currentColor" strokeWidth="1.4" className="fill-slate-100 group-hover:fill-cyan-50" />
          <line x1="68" y1="30" x2="94" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="96" cy="19" r="3.5" stroke="currentColor" strokeWidth="1.4" className="fill-cyan-500" />
          <path d="M50 48 A 12 12 0 0 1 60 40" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
        </svg>
      ),
    },
    {
      id: 'semiconductors',
      number: '06',
      title: 'Hardware & Semiconductors',
      description: 'Computing hardware, silicon technologies, and advanced engineering.',
      details: [
        'Domain-specific accelerator architectures',
        'Interconnect packaging & thermal engineering',
        'Nanoscale transistor silicon design',
      ],
      schematic: (
        <svg viewBox="0 0 120 80" className="w-full h-full text-slate-400 group-hover:text-blue-500 transition-colors duration-300" fill="none">
          {/* Silicon die grid and wire bond pins */}
          <rect x="30" y="18" width="60" height="44" rx="3" stroke="currentColor" strokeWidth="1.5" className="fill-slate-50 group-hover:fill-blue-50/30" />
          <line x1="30" y1="40" x2="90" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="60" y1="18" x2="60" y2="62" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          {/* Pins */}
          <line x1="16" y1="28" x2="30" y2="28" stroke="currentColor" strokeWidth="1.2" />
          <line x1="16" y1="52" x2="30" y2="52" stroke="currentColor" strokeWidth="1.2" />
          <line x1="90" y1="28" x2="104" y2="28" stroke="currentColor" strokeWidth="1.2" />
          <line x1="90" y1="52" x2="104" y2="52" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="60" cy="40" r="3" className="fill-cyan-500 stroke-current" strokeWidth="1" />
        </svg>
      ),
    },
  ];

  return (
    <section id="technologies" className="py-24 sm:py-32 lg:py-36 bg-[#F7F8FA] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Reveal */}
        <Reveal className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-500 uppercase font-medium">
              OUR AREAS OF FOCUS
            </p>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-slate-950 mb-6 leading-[1.12]">
            Technology without boundaries.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We explore the technologies transforming how people think, build, compute, connect, and interact with the world.
          </p>
        </Reveal>

        {/* Six Core Modules Grid with Staggered Reveal */}
        <StaggerContainer
          staggerDelay={0.09}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {areas.map((area) => (
            <StaggerItem key={area.id}>
              <div
                className="group relative h-full bg-white border border-slate-200/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-md"
                onMouseEnter={() => setActiveArea(area.id)}
                onMouseLeave={() => setActiveArea(null)}
              >
                <div>
                  {/* Header row with numbered label and schematic */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono text-xs font-semibold tracking-wider text-slate-400 group-hover:text-cyan-600 transition-colors">
                      {area.number}
                    </span>
                    <div className="w-24 h-16 shrink-0 transition-transform duration-300 group-hover:scale-105">
                      {area.schematic}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-900 tracking-[-0.02em] mb-3 group-hover:text-slate-950">
                    {area.title}
                  </h3>

                  {/* Primary Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {area.description}
                  </p>
                </div>

                {/* Focus Tracks / Sub-disciplines */}
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                    Engineering Scope
                  </p>
                  <ul className="space-y-1.5">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-start">
                        <span className="text-cyan-500 mr-2 select-none">›</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Clarifying architectural note */}
        <Reveal delay={0.2} className="mt-14 text-center">
          <p className="text-xs font-mono text-slate-400 tracking-wide">
            EXPLORATION & APPLIED RESEARCH PIPELINE · INDEPENDENT ENGINEERING DISCIPLINES
          </p>
        </Reveal>
      </div>
    </section>
  );
};
