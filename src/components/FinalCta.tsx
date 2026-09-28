import React from 'react';
import { ArrowRight, Phone, Mail, Building2, Briefcase, MapPin } from 'lucide-react';

interface FinalCtaProps {
  onFindJob: () => void;
  onHireStaff: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onFindJob, onHireStaff }) => {
  return (
    <section className="py-20 md:py-28 bg-[#0f172a] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
            09. Take The Next Step
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-6 text-white text-balance">
            Ready for your next opportunity?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you are taking the next step in your professional career or seeking reliable personnel to power your operations, our dedicated consultants are ready to assist.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              type="button"
              onClick={onFindJob}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <Briefcase className="w-4 h-4 text-slate-900" />
              <span>Find a Job</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={onHireStaff}
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>Hire Staff</span>
            </button>
          </div>

          {/* Direct Communication Bar */}
          <div className="pt-10 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Direct Line</div>
                <div className="text-sm font-bold text-white font-mono">0800 246 8900</div>
                <div className="text-[11px] text-slate-500">Mon–Fri 07:30–18:30 (24/7 on-call)</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Direct Inquiries</div>
                <div className="text-sm font-bold text-white">enquiries@strataworkforce.co.uk</div>
                <div className="text-[11px] text-slate-500">60-minute response guarantee</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">National Presence</div>
                <div className="text-sm font-bold text-white">London · Midlands · North · Scotland</div>
                <div className="text-[11px] text-slate-500">Local teams across 12 UK branches</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
