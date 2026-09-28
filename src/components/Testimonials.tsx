import React, { useState } from 'react';
import { Quote, Building2, UserCheck, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  const [activeType, setActiveType] = useState<'employer' | 'candidate'>('employer');

  const filteredTestimonials = TESTIMONIALS_DATA.filter((t) => t.type === activeType);

  return (
    <section className="py-28 md:py-36 bg-[#fbfbfa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              <span>07 / Proven Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display text-balance leading-[1.15]">
              Trusted by organisations and candidates alike.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-3.5">
              Real testimonials from operations directors, site leads, and placed candidates across England, Scotland, and Wales.
            </p>
          </div>

          {/* Audience Toggle Tab (Segmented button with large legible text) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200/90 rounded-lg self-start lg:self-auto shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveType('employer')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                activeType === 'employer'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Employer Reviews</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveType('candidate')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                activeType === 'candidate'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Candidate Reviews</span>
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-slate-300 mb-4" />

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6 font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Concrete outcome + Author attribution with strong legibility */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                {/* Attributable Outcome */}
                <div className="p-3 bg-slate-50/90 rounded-lg border border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    Quantified Outcome
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-950 font-display">
                    {item.outcome}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-bold text-slate-950 font-display">
                    {item.author}
                  </div>
                  <div className="text-xs font-medium text-slate-700">
                    {item.role}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                    {item.organisation} · {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
