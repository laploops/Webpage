import React from 'react';
import { HeroVisual } from './HeroVisual';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface HeroProps {
  onExploreTechnologies: () => void;
  onDiscoverLaploop: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreTechnologies,
  onDiscoverLaploop,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-white tech-grid-pattern">
      {/* Subtle ambient light gradient at the top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[380px] bg-gradient-to-b from-cyan-100/30 via-blue-50/15 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <p className="text-xs sm:text-sm font-mono tracking-[0.22em] text-slate-500 uppercase font-medium">
              INDEPENDENT TECHNOLOGY COMPANY
            </p>
          </motion.div>

          {/* Main Headline with deliberate editorial line breaks */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-semibold tracking-[-0.038em] text-slate-950 leading-[1.06] mb-6 sm:mb-8"
          >
            Engineering{' '}
            <span className="inline-block text-slate-950">What&apos;s Next.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10 text-balance"
          >
            From intelligent software to advanced computing, Laploop explores and builds technologies for the next era of innovation.
          </motion.p>

          {/* Call to Actions with refined hover transitions */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <button
              onClick={onExploreTechnologies}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-xl transition-all duration-200 shadow-sm group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
            >
              <span>Explore Our Technologies</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={onDiscoverLaploop}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300/80 rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Discover Laploop
            </button>
          </motion.div>
        </div>

        {/* The Laploop Technology Field — Architectural Computing & Systems Matrix */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-5xl mx-auto"
        >
          <HeroVisual />
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-14 sm:mt-18 text-center flex flex-col items-center justify-center"
        >
          <button
            onClick={onExploreTechnologies}
            className="group inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-slate-700 transition-colors uppercase tracking-widest focus-visible:outline-none"
            aria-label="Scroll to technologies section"
          >
            <span>DISCOVER FOCUS AREAS</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1 text-cyan-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
