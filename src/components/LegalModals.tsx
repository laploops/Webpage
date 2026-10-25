import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-500"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-cyan-50 text-cyan-600">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Privacy Policy
                </h3>
                <p className="text-xs font-mono text-slate-500">LAPLOOP LEGAL · LAST UPDATED 2026</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
              <p>
                <strong>1. Commitment to Privacy:</strong> At LAPLOOP, we respect your privacy. This website is designed to inform visitors about our engineering disciplines, research initiatives, and technological vision without intrusive surveillance.
              </p>
              <p>
                <strong>2. Data Collection:</strong> We do not deploy invasive third-party trackers, behavioral telemetry, or sell personal data. Standard access server logs may record anonymized request parameters strictly for operational security and network resilience.
              </p>
              <p>
                <strong>3. Correspondence:</strong> When you initiate correspondence with Laploop via our contact channels, your provided contact details are used solely to review and respond to your inquiry.
              </p>
              <p>
                <strong>4. Security:</strong> We implement rigorous technical and administrative standards to prevent unauthorized access or disclosure of information entrusted to us.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Terms of Use
                </h3>
                <p className="text-xs font-mono text-slate-500">LAPLOOP LEGAL · LAST UPDATED 2026</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
              <p>
                <strong>1. Intellectual Property:</strong> All trademarks, visual marks, schematics, and editorial materials published on this website are the proprietary intellectual property of LAPLOOP.
              </p>
              <p>
                <strong>2. Permitted Use:</strong> Visitors may view and review materials for informational, non-commercial purposes. Reproduction, modification, or automated scraping of content without prior written permission is prohibited.
              </p>
              <p>
                <strong>3. Forward-Looking Exploration:</strong> Materials presented herein represent technological exploration and engineering focus areas. They do not constitute commercial guarantees or warranties.
              </p>
              <p>
                <strong>4. Inquiries:</strong> For inquiries regarding rights, technology collaboration, or licensing, please contact us through official channels.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
