/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Technologies } from './components/Technologies';
import { Research } from './components/Research';
import { Ventures } from './components/Ventures';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModals';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToSection = (id: string) => {
    const cleanId = id.replace('#', '');
    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-slate-950">
      {/* Refined Desktop Custom Circular Cursor */}
      <CustomCursor />

      {/* Top Navigation */}
      <Navbar onOpenContact={() => scrollToSection('#contact')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 5: Hero */}
        <Hero
          onExploreTechnologies={() => scrollToSection('#technologies')}
          onDiscoverLaploop={() => scrollToSection('#about')}
        />

        {/* Section 6: Six Core Technology Areas */}
        <Technologies />

        {/* Section 7: Research & Methodology */}
        <Research />

        {/* Section 8: Ventures & Projects Showcase */}
        <Ventures onOpenContact={() => scrollToSection('#contact')} />

        {/* Section 9: About Laploop & Guiding Principles */}
        <About />

        {/* Section 10: Contact & Direct Correspondence */}
        <Contact />
      </main>

      {/* Section 11: Footer */}
      <Footer
        onOpenPrivacy={() => setActiveLegalModal('privacy')}
        onOpenTerms={() => setActiveLegalModal('terms')}
        onNavigate={scrollToSection}
      />

      {/* Legal Dialogs (Privacy Policy & Terms of Use) */}
      <LegalModal
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
