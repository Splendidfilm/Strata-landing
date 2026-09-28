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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              <span>07 / Proven Impact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display text-balance">
              Trusted by organisations and candidates alike.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
              Real testimonials from operations directors, site leads, and placed candidates across England, Scotland, and Wales.
            </p>
          </div>

          {/* Audience Toggle Tab (Segmented button with large legible text) */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-200/90 rounded-2xl self-start lg:self-auto shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveType('employer')}
              className={`px-5 py-2.5 text-sm font-bold rounded-xl transition-all flex items-center gap-2 ${
                activeType === 'employer'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Employer Reviews</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveType('candidate')}
              className={`px-5 py-2.5 text-sm font-bold rounded-xl transition-all flex items-center gap-2 ${
                activeType === 'candidate'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Candidate Reviews</span>
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-9 h-9 text-slate-300 mb-5" />

                <p className="text-base text-slate-700 leading-relaxed italic mb-8 font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Concrete outcome + Author attribution with strong legibility */}
              <div className="space-y-5 pt-6 border-t border-slate-100">
                {/* Attributable Outcome */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Quantified Outcome
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-950 font-display">
                    {item.outcome}
                  </div>
                </div>

                <div>
                  <div className="text-base font-bold text-slate-950 font-display">
                    {item.author}
                  </div>
                  <div className="text-sm font-semibold text-slate-700">
                    {item.role}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
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
