import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Zap, Users, BarChart3 } from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface EmployerSectionProps {
  onRequestServices: () => void;
}

export const EmployerSection: React.FC<EmployerSectionProps> = ({ onRequestServices }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="employers" className="py-24 md:py-32 bg-[#0a1526] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Proposition and Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              03. For UK Employers & Operations Directors
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white leading-tight text-balance">
              The right people can change everything.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Whether you are scaling up to meet a multi-million-pound contract, navigating unpredictable seasonal demand, or recruiting executive technical leaders, Strata delivers dependable workforce solutions engineered to keep your business operating at full capacity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-4 border-y border-slate-800">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span>Temporary Staffing</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Rapid, pre-screened personnel deployed in under 4 hours for scheduled shifts or emergency cover.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Permanent Recruitment</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Comprehensive executive search and contingency placement with a 100-day guarantee.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <span>Tailored Workforce Models</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Managed service provision (MSP) and vendor-tier consolidation for high-volume accounts.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Zero-Defect Compliance</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Full Home Office Right-to-Work verification, GLAA standards, and AWR oversight.
                </p>
              </div>
            </div>

            {/* Action Area */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={onRequestServices}
                className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Request Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <div className="text-xs text-slate-400">
                Direct response within 60 minutes from a regional workforce lead.
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 aspect-4/3 bg-slate-900">
              {/* Fallback container */}
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-center p-6 text-slate-300">
                <p className="text-sm font-medium">UK Workforce Management & Operations</p>
              </div>

              <img
                src={ASSETS.employer}
                alt="UK operations director and workforce manager collaborating on logistics site"
                className={`relative z-10 w-full h-full object-cover transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                referrerPolicy="no-referrer"
              />

              {/* Bottom stats banner inside image container */}
              <div className="absolute bottom-0 inset-x-0 z-20 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent p-6 sm:p-8">
                <div className="grid grid-cols-3 gap-4 border-t border-slate-700/80 pt-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                      &lt;4 hrs
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Emergency Mobilisation</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                      98.4%
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">100-Day Retention</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-blue-400 tabular-nums">
                      100%
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Audit Compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
