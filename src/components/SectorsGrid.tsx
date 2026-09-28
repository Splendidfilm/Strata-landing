import React from 'react';
import { ArrowUpRight, Heart, Users2, HardHat, Truck, UtensilsCrossed, FileText, Factory, GraduationCap } from 'lucide-react';
import { SECTORS_DATA } from '../data/mockData';

interface SectorsGridProps {
  onSelectSector: (sectorName: string) => void;
}

export const SectorsGrid: React.FC<SectorsGridProps> = ({ onSelectSector }) => {
  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'healthcare':
        return Heart;
      case 'social-care':
        return Users2;
      case 'construction':
        return HardHat;
      case 'logistics':
        return Truck;
      case 'hospitality':
        return UtensilsCrossed;
      case 'administration':
        return FileText;
      case 'manufacturing':
        return Factory;
      case 'education':
        return GraduationCap;
      default:
        return Factory;
    }
  };

  return (
    <section id="sectors" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              06. Sector Specialisms
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display mb-4 text-balance">
              Specialist expertise across key UK industries.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our dedicated sector divisions are staffed by former industry practitioners who understand your compliance frameworks, certifications, and operational pressures.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Over 900+ active client placements across 8 distinct UK divisions
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORS_DATA.map((sector) => {
            const IconComponent = getSectorIcon(sector.id);
            return (
              <div
                key={sector.id}
                onClick={() => onSelectSector(sector.name)}
                className="group relative bg-[#fbfbfa] hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {/* Unboxed metadata per Zero-Pill Discipline */}
                    <div className="text-xs font-mono font-semibold text-slate-600">
                      {sector.activeVacancies} Roles
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 font-display mb-2 group-hover:text-blue-900 transition-colors">
                    {sector.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {sector.description}
                  </p>

                  {/* Typical Roles Preview */}
                  <div className="space-y-1 mb-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Typical Roles:
                    </div>
                    <div className="text-xs text-slate-600 truncate">
                      {sector.keyDisciplines.slice(0, 3).join(', ')}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between mt-auto">
                  <span className="text-[11px] font-medium text-slate-500">
                    {sector.ukDemandTrend}
                  </span>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    <span>View Roles</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
