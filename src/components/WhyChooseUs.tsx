import React from 'react';
import { Sliders, ShieldAlert, Clock3, Handshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Sliders,
      title: 'Tailored Solutions',
      summary: 'No off-the-shelf compromises. Every workforce roster is engineered to your operational workflows.',
      points: [
        'Custom shift patterns, pay matrixes, and induction protocols',
        'Scalable contracts from single ad-hoc cover to 500+ site operatives',
        'Transparent rate cards with clear statutory cost breakdowns',
      ],
    },
    {
      icon: ShieldAlert,
      title: 'Compliance-Focused',
      summary: 'Total peace of mind through institutional-grade vetting and continuous statutory auditing.',
      points: [
        'Digital Home Office Right-to-Work biometric validation',
        'GLAA Licensed, REC Audited, and AWR oversight automated',
        'Enhanced DBS and SSSC/NMC clinical re-validation checks',
      ],
    },
    {
      icon: Clock3,
      title: 'Responsive Recruitment',
      summary: 'Agile turnaround that keeps production lines active and clinical wards fully staffed.',
      points: [
        'Dedicated 24/7/365 emergency on-call consultant dispatch',
        'Under 4-hour standby mobilisation for critical vacancies',
        'Average permanent shortlist delivery within 72 hours',
      ],
    },
    {
      icon: Handshake,
      title: 'Long-Term Relationships',
      summary: 'Building lasting partnerships rooted in mutual trust, integrity, and candidate care.',
      points: [
        'Dedicated account director with sector-specific expertise',
        'Fair pay and weekly prompt candidate remuneration',
        'Average client partnership longevity exceeding 6.4 years',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            04. Trust & Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display mb-6 text-balance">
            Why UK industry leaders choose Strata.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            In an employment landscape challenged by shifting regulations and skills shortages, we deliver the precision, compliance, and velocity UK organisations rely on.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#fbfbfa] rounded-2xl p-7 border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-900 mb-6 shadow-xs">
                    <IconComponent className="w-5 h-5 text-slate-900" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 font-display mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200/60">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
