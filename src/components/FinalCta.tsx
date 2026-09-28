import React from 'react';
import { ArrowRight, Phone, Mail, Building2, Briefcase, MapPin } from 'lucide-react';

interface FinalCtaProps {
  onFindJob: () => void;
  onHireStaff: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onFindJob, onHireStaff }) => {
  return (
    <section className="py-28 md:py-40 bg-[#091322] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3 flex items-center justify-center gap-2 font-display">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>09 / Take The Next Step</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4 text-white text-balance leading-[1.12]">
            Ready for your next opportunity?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you are taking the next step in your professional career or seeking reliable personnel to power your operations, our dedicated UK consultants are ready to assist.
          </p>

          {/* DUAL CTAs (HIGH IMPACT) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
            <button
              type="button"
              onClick={onFindJob}
              className="w-full sm:w-auto h-11 px-7 bg-white hover:bg-slate-100 text-slate-950 text-xs font-semibold rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              <Briefcase className="w-4 h-4 text-slate-900" />
              <span>Find a Job</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={onHireStaff}
              className="w-full sm:w-auto h-11 px-7 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 text-xs font-semibold rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>Hire Staff</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Direct Communication Bar with clear legibility */}
          <div className="pt-12 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shrink-0 shadow-2xs">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Priority Line</div>
                <div className="text-lg font-bold text-white font-mono mt-0.5">0800 246 8900</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-0.5">Mon–Fri 07:30–18:30 (24/7 on-call)</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shrink-0 shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Inquiries</div>
                <div className="text-base font-bold text-white mt-0.5">enquiries@strataworkforce.co.uk</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-0.5">60-minute response guarantee</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shrink-0 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">National Branch Network</div>
                <div className="text-base font-bold text-white mt-0.5">London · Midlands · North · Scotland</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-0.5">Local teams across 12 UK hubs</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
