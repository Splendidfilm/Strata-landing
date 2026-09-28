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
    <section id="sectors" className="py-28 md:py-36 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              <span>06 / Industry Specialisms</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display text-balance">
              Specialist expertise across key UK industries.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
              Our dedicated sector divisions are staffed by former industry practitioners who understand your compliance frameworks, certifications, and operational pressures.
            </p>
          </div>

          <div className="text-sm font-mono text-slate-600 font-medium">
            Over 900+ Active Placements Across 8 Divisions
          </div>
        </div>

        {/* Sectors Grid with clean readable cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SECTORS_DATA.map((sector) => {
            const IconComponent = getSectorIcon(sector.id);
            return (
              <div
                key={sector.id}
                onClick={() => onSelectSector(sector.name)}
                className="group relative bg-[#fbfbfa] hover:bg-white rounded-3xl p-7 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="text-xs sm:text-sm font-mono font-bold text-slate-700 bg-white px-3 py-1 rounded-lg border border-slate-200/90 shadow-2xs">
                      {sector.activeVacancies} Live Roles
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display mb-2 group-hover:text-blue-900 transition-colors">
                    {sector.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {sector.description}
                  </p>

                  {/* Typical Roles Preview */}
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-slate-200/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Typical Roles
                    </div>
                    <div className="text-sm text-slate-800 font-semibold truncate">
                      {sector.keyDisciplines.slice(0, 3).join(', ')}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                  <span className="text-xs sm:text-sm font-semibold text-slate-600">
                    {sector.ukDemandTrend}
                  </span>
                  <div className="inline-flex items-center gap-1 text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                    <span>View Roles</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
