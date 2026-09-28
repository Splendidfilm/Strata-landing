import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Zap, Users, BarChart3, CheckCircle2, Phone, Clock } from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface EmployerSectionProps {
  onRequestServices: () => void;
  onOpenDocumentsModal?: () => void;
}

export const EmployerSection: React.FC<EmployerSectionProps> = ({
  onRequestServices,
  onOpenDocumentsModal,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="employers" className="py-28 md:py-40 bg-[#091322] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-32 w-[32rem] h-[32rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Proposition and Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>03 / For UK Employers & Operations Leads</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.08] text-balance">
                The right people can change everything.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mt-5">
                Whether you are staffing a new multimodal distribution centre, navigating unplanned clinical shift shortages, or appointing senior technical leadership, Strata provides institutional-grade workforce solutions engineered to protect your continuity.
              </p>
            </div>

            {/* 4 Core Pillars for Employers with highly legible type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-slate-800">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-white font-display">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span>Temporary Staffing</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Pre-screened personnel deployed in under 4 hours for unexpected spikes or scheduled rosters.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-white font-display">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>Permanent Recruitment</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Headhunting and competency-based search backed by our 100-day replacement guarantee.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-white font-display">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <span>Workforce Outsourcing</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Master Vendor & MSP programs consolidating tier-2 supply chains and reducing contingent spend.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-bold text-white font-display">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>Audited Compliance</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Digital Home Office Right-to-Work, GLAA licensing, and automated AWR oversight.
                </p>
              </div>
            </div>

            {/* Primary Action Button & Direct SLA Guarantee */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <button
                  type="button"
                  onClick={onRequestServices}
                  className="px-9 py-4.5 bg-white hover:bg-slate-100 text-slate-950 text-sm font-bold tracking-wider uppercase rounded-xl transition-all shadow-xl flex items-center justify-center gap-2.5 group"
                >
                  <span>Request Our Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                {onOpenDocumentsModal && (
                  <button
                    type="button"
                    onClick={onOpenDocumentsModal}
                    className="px-6 py-4.5 bg-slate-800/80 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl border border-slate-700 transition-colors"
                  >
                    View SLA & Terms
                  </button>
                )}

                <div className="flex items-center gap-2 text-sm text-slate-300 font-mono font-medium">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>24/7 Priority: 0800 246 8900</span>
                </div>
              </div>

              <p className="text-sm text-slate-400">
                Guaranteed 60-minute callback from a dedicated regional workforce director.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Performance Proof */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/70 aspect-4/3 bg-slate-900">
              
              {/* Fallback container */}
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-center p-6 text-slate-300">
                <p className="text-base font-medium">UK Workforce Management & Operations</p>
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
              <div className="absolute bottom-0 inset-x-0 z-20 bg-linear-to-t from-slate-950 via-slate-950/85 to-transparent p-6 sm:p-8">
                <div className="grid grid-cols-3 gap-4 border-t border-slate-700/80 pt-5 text-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">
                      &lt; 4 hrs
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Emergency Dispatch</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 tabular-nums">
                      98.4%
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">100-Day Retention</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400 tabular-nums">
                      100%
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Audit Compliance</div>
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
