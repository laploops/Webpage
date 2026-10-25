import React, { useState, useMemo } from 'react';
import { LAPLOOP_PROJECTS, PROJECT_CATEGORIES, ProjectCategory, LaploopProject } from '../data/projects';
import { Layers, ArrowUpRight } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './MotionReveal';

interface VenturesProps {
  onOpenContact?: () => void;
}

export const Ventures: React.FC<VenturesProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter projects if any are configured
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return LAPLOOP_PROJECTS;
    return LAPLOOP_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const hasConfiguredProjects = LAPLOOP_PROJECTS.length > 0;

  return (
    <section id="ventures" className="py-24 sm:py-32 lg:py-40 bg-[#F7F8FA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Reveal */}
        <Reveal className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-500 uppercase font-medium">
              VENTURES & PROJECTS
            </p>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-slate-950 mb-6 leading-[1.12]">
            Ideas deserve to become reality.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            “An evolving collection of projects, experiments, and products developed under the Laploop vision.”
          </p>
        </Reveal>

        {/* Filter Segmented Controls with Reveal */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 bg-slate-100/80 rounded-xl max-w-fit border border-slate-200/60">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                selectedCategory === 'All'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Tracks
            </button>
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project Grid OR Tasteful Architectural Staging State */}
        {hasConfiguredProjects ? (
          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <div data-cursor="card" className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 group h-full">
                  <div>
                    {/* Clean unboxed metadata row */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4">
                      <span>{project.category}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="text-cyan-700">{project.status}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2.5 group-hover:text-cyan-600 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-slate-900 hover:text-cyan-600 transition-colors group/link"
                      >
                        <span>Explore Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate-400">
                        INTERNAL STAGING
                      </span>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          /* Dignified, authentic staging state matching corporate integrity guidelines with Reveal */
          <Reveal delay={0.15}>
            <div className="bg-[#F7F8FA] border border-slate-200/80 rounded-2xl p-8 sm:p-12 lg:p-16 max-w-4xl hover:border-slate-300 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200/90 text-cyan-600 shadow-xs shrink-0">
                  <Layers className="w-8 h-8" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span>Initiatives in Staging & Prototyping</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">
                    Next-generation projects are currently under engineering.
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    In accordance with Laploop&apos;s commitment to technical authenticity, our ventures portfolio exclusively lists fully validated and disclosed systems. Multiple software platforms, advanced computing tools, and experimental prototypes are actively progressing through research and system validation phases.
                  </p>

                  {/* Staging Pipeline Architecture */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/60 mb-8">
                    <div className="p-3.5 rounded-lg bg-white border border-slate-200/60 transition-transform duration-200 hover:-translate-y-0.5">
                      <p className="text-[11px] font-mono uppercase text-slate-400 mb-1">Phase 1</p>
                      <p className="text-xs font-semibold text-slate-800">Hypothesis & Feasibility</p>
                      <p className="text-[11px] text-slate-500 mt-1">Mathematical and architectural scoping</p>
                    </div>
                    <div className="p-3.5 rounded-lg bg-white border border-slate-200/60 transition-transform duration-200 hover:-translate-y-0.5">
                      <p className="text-[11px] font-mono uppercase text-cyan-600 mb-1">Phase 2</p>
                      <p className="text-xs font-semibold text-slate-800">System Prototyping</p>
                      <p className="text-[11px] text-slate-500 mt-1">Proof-of-concept stress testing</p>
                    </div>
                    <div className="p-3.5 rounded-lg bg-white border border-slate-200/60 transition-transform duration-200 hover:-translate-y-0.5">
                      <p className="text-[11px] font-mono uppercase text-slate-400 mb-1">Phase 3</p>
                      <p className="text-xs font-semibold text-slate-800">Public Release</p>
                      <p className="text-[11px] text-slate-500 mt-1">Disclosed here once production-ready</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <button
                      onClick={onOpenContact}
                      className="group inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-cyan-500"
                    >
                      <span>Inquire About Technical Previews</span>
                      <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    <span className="text-xs text-slate-500 text-center sm:text-left font-mono">
                      Verified announcements will appear on this page as milestones are reached.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};
