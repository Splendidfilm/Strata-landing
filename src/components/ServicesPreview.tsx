import React from 'react';
import { ArrowUpRight, Check, Clock, ShieldCheck, Zap, Users, BarChart3, Layers, UserPlus, GraduationCap } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { WorkforceService } from '../types';

interface ServicesPreviewProps {
  onSelectService: (service: WorkforceService) => void;
  onRequestService: (serviceId: string) => void;
}

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({
  onSelectService,
  onRequestService,
}) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'temporary-staffing':
        return Zap;
      case 'permanent-recruitment':
        return Users;
      case 'recruitment-campaigns':
        return BarChart3;
      case 'hr-recruitment-outsourcing':
        return Layers;
      case 'staff-deployment':
        return UserPlus;
      case 'training-career-development':
        return GraduationCap;
      default:
        return Zap;
    }
  };

  return (
    <section id="services" className="py-28 md:py-36 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous editorial spacing */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              <span>01 / Operational Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display text-balance leading-[1.15]">
              Workforce solutions built around your needs.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-3.5">
              From rapid 4-hour contingent shift coverage to full-spectrum Master Vendor and RPO governance, we engineer resilient staffing pipelines tailored to UK industry operating models.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-mono font-medium">
            REC Audited · GLAA Licensed · AWR Compliant
          </div>
        </div>

        {/* Services Grid (Refined, non-generic cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const indexFormatted = String(index + 1).padStart(2, '0');
            const IconComponent = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                className="group relative bg-[#fbfbfa] hover:bg-white rounded-xl p-7 border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Editorial Index & Turnaround SLA */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {indexFormatted}
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-md border border-slate-200/90">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{service.turnaround}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 font-display mb-1.5 group-hover:text-blue-900 transition-colors leading-snug tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 mb-3.5 tracking-wider uppercase font-display">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {service.description}
                  </p>

                  {/* Tangible Deliverables with readable typography */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Compliance & Direct Action */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.complianceLevel}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRequestService(service.id)}
                    className="h-9 px-3.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors shadow-xs flex items-center gap-1.5 group/btn"
                  >
                    <span>Request Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tailored Workforce Consultation Banner */}
        <div className="mt-12 p-7 sm:p-10 rounded-2xl bg-slate-950 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-slate-800 shadow-md">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              High-Volume & Enterprise Accounts
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
              Need a bespoke managed workforce program?
            </h4>
            <p className="text-base text-slate-300 leading-relaxed font-light">
              Our workforce architects consult on master vendor structures, agency tier rationalisation, TUPE transfers, and seasonal volume surge forecasting across the UK.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRequestService('hr-recruitment-outsourcing')}
            className="self-start lg:self-auto px-9 py-4 bg-white hover:bg-slate-100 text-slate-950 text-sm font-bold tracking-wider uppercase rounded-xl transition-all whitespace-nowrap shadow-md"
          >
            Speak to a Workforce Consultant
          </button>
        </div>

      </div>
    </section>
  );
};
