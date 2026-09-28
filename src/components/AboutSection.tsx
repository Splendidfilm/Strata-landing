import React, { useState } from 'react';
import { Target, Compass, HeartHandshake, Flame, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onRequestQuote?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore, onRequestQuote }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values' | 'why'>('mission');

  const charterData = {
    mission: {
      title: 'Our Mission',
      subtitle: 'Connecting ambition with enterprise through rigorous vetting and responsive service.',
      body: 'Our mission is twofold: to provide UK employers with compliant, productive workforce capacity precisely when and where it is needed, while guiding candidates toward rewarding jobs with supportive employers who value their dedication.',
      highlights: [
        'Deploying verified personnel with industry-leading velocity',
        'Operating with 100% statutory transparency in pay, pensions, and safety',
        'Cultivating enduring client partnerships rooted in operational excellence',
      ],
    },
    vision: {
      title: 'Our Vision',
      subtitle: 'To be the United Kingdom’s benchmark for ethical, agile, and high-impact workforce partnerships.',
      body: 'We envision a future where UK businesses never face operational paralysis due to talent shortages, and where every job seeker—regardless of background or sector—has transparent access to dignified, safe, and career-enhancing employment.',
      highlights: [
        'Setting the standard for candidate welfare and zero recruitment fees',
        'Pioneering digital compliance automation without losing the human touch',
        'Bridging the critical national skills deficit through vocational co-investment',
      ],
    },
    values: {
      title: 'Our Core Values',
      subtitle: 'Integrity, velocity, accountability, and genuine candidate care.',
      body: 'Our values guide every hiring decision, candidate briefing, and client engagement. We hold ourselves accountable to the highest ethical codes in British recruitment.',
      highlights: [
        'Total Compliance: Zero compromises on health, safety, or legal standards',
        'Human First: Empathetic communication with candidates at every step',
        'Operational Rigor: Doing what we say we will do, on time and on budget',
      ],
    },
    why: {
      title: 'Why We Do It',
      subtitle: 'Because work provides purpose, stability, and community prosperity.',
      body: 'Behind every timesheet is an individual building a life, supporting a family, or learning a trade. Behind every employer request is a project that powers Britain’s economic resilience. We do this because meaningful employment strengthens communities.',
      highlights: [
        'Empowering over 14,000 workers annually across regional UK economies',
        'Supporting essential services: NHS partners, schools, and supply chains',
        'Re-investing into local back-to-work schemes and community apprenticeships',
      ],
    },
  };

  const current = charterData[activeTab];

  return (
    <section id="about" className="py-28 md:py-36 bg-[#fbfbfa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading and Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              <span>05 / Corporate Charter</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display text-balance">
              More than recruitment.
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Founded in the United Kingdom, Strata Workforce was established with a singular conviction: that recruitment should be a collaborative partnership rather than a transactional numbers game.
            </p>
            
            <p className="text-base text-slate-600 leading-relaxed">
              Headquartered with regional hubs across England, Scotland, and Wales, we bridge the gap between essential UK industries and skilled, reliable talent. We combine regional local knowledge with institutional-scale compliance to deliver seamless staffing.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs"
              >
                <span>About Us & Regional Leadership</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Charter Tabs */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            
            {/* Segmented Filter Tabs with large clear labels */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 bg-slate-100 rounded-2xl mb-8">
              {(['mission', 'vision', 'values', 'why'] as const).map((tabKey) => {
                const labelMap = {
                  mission: 'Mission',
                  vision: 'Vision',
                  values: 'Values',
                  why: 'Why We Do It',
                };
                return (
                  <button
                    key={tabKey}
                    type="button"
                    onClick={() => setActiveTab(tabKey)}
                    className={`py-3 px-3 text-sm font-bold rounded-xl transition-all ${
                      activeTab === tabKey
                        ? 'bg-white text-slate-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {labelMap[tabKey]}
                  </button>
                );
              })}
            </div>

            {/* Tab Content Display with crisp typography */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display mb-2">
                  {current.title}
                </h3>
                <p className="text-base font-bold text-slate-800 mb-4 leading-normal">
                  {current.subtitle}
                </p>
                <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  {current.body}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3.5 pt-6 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Operational Commitments
                </div>
                {current.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
