import React, { useState } from 'react';
import { Target, Compass, HeartHandshake, Flame, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onRequestQuote?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore, onRequestQuote }) => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'values' | 'why'>('mission');

  const charterData = {
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
    <section id="about" className="py-20 md:py-28 bg-[#fbfbfa] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Overview */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              05. Who We Are
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display mb-6 text-balance">
              More than recruitment.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              Founded in the United Kingdom, Strata Workforce was established with a singular conviction: that recruitment should be a collaborative partnership rather than a transactional numbers game.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              Headquartered with regional hubs across England, Scotland, and Wales, we bridge the gap between essential UK industries and skilled, reliable talent. We combine regional local knowledge with institutional-scale compliance to deliver seamless staffing.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-xs"
              >
                <span>About Us & Our Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Charter Tabs */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            {/* Permitted Segmented Filter Controls */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-slate-100/90 rounded-xl mb-8">
              <button
                type="button"
                onClick={() => setActiveTab('mission')}
                className={`py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'mission'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Mission
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('vision')}
                className={`py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'vision'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Vision
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('values')}
                className={`py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'values'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Values
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('why')}
                className={`py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'why'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Why We Do It
              </button>
            </div>

            {/* Tab Content Display */}
            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-slate-950 font-display mb-2">
                  {current.title}
                </h3>
                <p className="text-sm font-medium text-slate-700 mb-4">
                  {current.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {current.body}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Commitments
                </div>
                {current.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{item}</span>
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
