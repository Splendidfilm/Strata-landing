import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            01. Operational Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display mb-6 text-balance">
            Workforce solutions built around your needs.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From rapid same-day shift coverage to comprehensive managed service models, we engineer agile talent pipelines that support UK organisations through planned operations and seasonal peaks.
          </p>
        </div>

        {/* Services Grid (6 Core Solutions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const indexFormatted = String(index + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                className="group relative bg-[#fbfbfa] hover:bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header & Human Editorial Index */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {indexFormatted}.
                    </span>
                    {/* Unboxed metadata per Zero-Pill Discipline */}
                    <div className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{service.turnaround}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-2 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-500 mb-4 tracking-wide">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/60">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Compliance & Action */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                    <span>{service.complianceLevel}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRequestService(service.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors py-1 group/btn"
                  >
                    <span>Request Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold font-display text-white">
              Need a bespoke managed workforce program?
            </h4>
            <p className="text-sm text-slate-300">
              Our workforce architects consult on master vendor structures, TUPE transfers, and seasonal surge forecasting.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRequestService('hr-recruitment-outsourcing')}
            className="self-start md:self-auto px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 text-xs font-semibold tracking-wider uppercase rounded-xl transition-all whitespace-nowrap shadow-sm"
          >
            Speak to a Workforce Consultant
          </button>
        </div>
      </div>
    </section>
  );
};
