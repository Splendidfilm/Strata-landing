import React, { useState } from 'react';
import { Quote, Building2, UserCheck, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  const [activeType, setActiveType] = useState<'employer' | 'candidate'>('employer');

  const filteredTestimonials = TESTIMONIALS_DATA.filter((t) => t.type === activeType);

  return (
    <section className="py-20 md:py-28 bg-[#fbfbfa] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              07. Proven Impact
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display mb-4 text-balance">
              Trusted by organisations and candidates alike.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Read how our responsive service and rigorous compliance support UK operations and advance individual professional careers.
            </p>
          </div>

          {/* Audience Toggle Tab (Segmented button per Section 1A) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-xl self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveType('employer')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-2 ${
                activeType === 'employer'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>For Employers</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveType('candidate')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-2 ${
                activeType === 'candidate'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>For Candidates</span>
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-slate-300 mb-4" />

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Concrete outcome + Author attribution */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                {/* Attributable Outcome */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    Verified Outcome
                  </div>
                  <div className="text-xs font-bold text-slate-900 font-display">
                    {item.outcome}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-bold text-slate-950 font-display">
                    {item.author}
                  </div>
                  <div className="text-xs text-slate-600">
                    {item.role}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
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
