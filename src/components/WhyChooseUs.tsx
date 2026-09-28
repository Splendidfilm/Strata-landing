import React from 'react';
import { Sliders, ShieldCheck, Clock3, Handshake, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      num: '01',
      icon: Sliders,
      title: 'Tailored Solutions',
      tagline: 'Operational Precision',
      summary: 'No off-the-shelf compromises. Every workforce roster is engineered to your exact operational workflows and shift patterns.',
      proof: 'Custom shift patterns, pay matrices, site inductions, and scalable contracts from single ad-hoc cover to 500+ site operatives.',
    },
    {
      num: '02',
      icon: ShieldCheck,
      title: 'Compliance-Focused',
      tagline: 'Zero-Defect Standard',
      summary: 'Total peace of mind through institutional-grade candidate vetting and continuous statutory auditing.',
      proof: 'Digital Home Office Right-to-Work biometric validation, GLAA licensing, automated AWR compliance, and enhanced DBS checks.',
    },
    {
      num: '03',
      icon: Clock3,
      title: 'Responsive Recruitment',
      tagline: 'Velocity Under SLA',
      summary: 'Agile turnaround that keeps production lines running and clinical wards fully staffed without compromise.',
      proof: 'Dedicated 24/7/365 emergency on-call dispatch, under 4-hour standby mobilisation, and average permanent shortlist delivery within 72 hours.',
    },
    {
      num: '04',
      icon: Handshake,
      title: 'Long-Term Relationships',
      tagline: 'Enduring Stewardship',
      summary: 'Building lasting partnerships rooted in transparent commercial terms, candidate welfare, and operational excellence.',
      proof: 'Dedicated sector director, prompt weekly PAYE payroll, transparent rate cards, and average client partnership longevity exceeding 6.4 years.',
    },
  ];

  return (
    <section className="py-28 md:py-36 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              <span>04 / Trust & Operational Rigour</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display text-balance">
              Why UK industry leaders choose Strata.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
              In an employment landscape challenged by shifting regulatory demands and acute skills shortages, we deliver the precision, compliance, and velocity UK organisations rely on.
            </p>
          </div>

          <div className="text-sm font-mono text-slate-600 font-medium">
            6.4 Year Avg Client Partnership Longevity
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#fbfbfa] hover:bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-mono font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                      {pillar.num}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-1.5 font-display">
                    {pillar.tagline}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 font-display mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-base text-slate-600 mb-6 leading-relaxed font-normal">
                    {pillar.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Verified Standard
                  </div>
                  <p className="text-sm text-slate-800 leading-relaxed font-semibold">
                    {pillar.proof}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
