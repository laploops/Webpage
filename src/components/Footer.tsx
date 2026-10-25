import React from 'react';
import { LaploopLogo } from './LaploopLogo';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onNavigate,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white text-slate-600 border-t border-slate-200/80 pt-16 sm:pt-20 lg:pt-24 pb-12 transition-colors duration-200"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content Grid: 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 pb-12 sm:pb-16 border-b border-slate-200">
          {/* LEFT COLUMN: Brand Identity, Tagline & Purpose Statement (6 Columns on desktop) */}
          <div className="md:col-span-6 lg:col-span-6 space-y-4">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded-md text-left group"
              aria-label="Laploop Home"
            >
              <LaploopLogo size="md" variant="dark" />
            </button>

            <p className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight pt-1">
              Engineering What&apos;s Next.
            </p>

            <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed font-normal">
              Independent thinking. Advanced engineering. Meaningful innovation. Laploop explores and builds technologies for the next era of computing and intelligent systems.
            </p>
          </div>

          {/* MIDDLE COLUMN: Core Navigation (3 Columns on desktop) */}
          <nav
            aria-label="Explore Navigation"
            className="md:col-span-3 lg:col-span-3 space-y-4"
          >
            <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-900 font-semibold">
              EXPLORE
            </h2>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <button
                  onClick={() => onNavigate('#technologies')}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-150 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-xs py-0.5 inline-block"
                >
                  Technologies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#research')}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-150 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-xs py-0.5 inline-block"
                >
                  Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#ventures')}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-150 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-xs py-0.5 inline-block"
                >
                  Ventures
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#about')}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-150 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-xs py-0.5 inline-block"
                >
                  About
                </button>
              </li>
            </ul>
          </nav>

          {/* RIGHT COLUMN: Dialogue & Legal Engagement (3 Columns on desktop) */}
          <nav
            aria-label="Connect Navigation"
            className="md:col-span-3 lg:col-span-3 space-y-4"
          >
            <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-900 font-semibold">
              CONNECT
            </h2>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <button
                  onClick={() => onNavigate('#contact')}
                  className="group inline-flex items-center gap-1.5 font-medium text-slate-900 hover:text-blue-600 transition-colors duration-150 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-xs py-0.5"
                >
                  <span>Contact Laploop</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-150 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-xs py-0.5 inline-block"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-150 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-xs py-0.5 inline-block"
                >
                  Terms of Use
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* LOWER FOOTER BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} Laploop. All rights reserved.
          </div>
          <div className="tracking-widest uppercase font-medium text-slate-500">
            INDEPENDENT TECHNOLOGY COMPANY
          </div>
        </div>
      </div>
    </footer>
  );
};
