import React, { useState, useMemo } from 'react';
import { MapPin, Briefcase, Banknote, Calendar, ArrowRight, Filter, Sparkles, CheckCircle2 } from 'lucide-react';
import { FEATURED_JOBS } from '../data/mockData';
import { JobVacancy } from '../types';

interface FeaturedJobsProps {
  onSelectJob: (job: JobVacancy) => void;
  searchFilter: {
    keyword: string;
    location: string;
    sector: string;
  };
  onClearFilters: () => void;
}

export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({
  onSelectJob,
  searchFilter,
  onClearFilters,
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const sectorList = ['All', 'Healthcare', 'Logistics', 'Construction', 'Manufacturing', 'Administration', 'Social Care'];
  const typeList = ['All', 'Permanent', 'Contract', 'Temporary'];

  // Filter jobs based on sector tabs and any incoming hero search criteria
  const filteredJobs = useMemo(() => {
    return FEATURED_JOBS.filter((job) => {
      // Sector filter tab
      if (selectedSector !== 'All' && job.sector !== selectedSector) {
        return false;
      }
      // Employment type tab
      if (selectedType !== 'All' && job.employmentType !== selectedType) {
        return false;
      }
      // Search keyword
      if (searchFilter.keyword) {
        const kw = searchFilter.keyword.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(kw);
        const matchesDesc = job.shortDescription.toLowerCase().includes(kw);
        const matchesSector = job.sector.toLowerCase().includes(kw);
        if (!matchesTitle && !matchesDesc && !matchesSector) return false;
      }
      // Search location
      if (searchFilter.location) {
        const loc = searchFilter.location.toLowerCase();
        if (!job.location.toLowerCase().includes(loc)) return false;
      }
      // Search sector
      if (searchFilter.sector) {
        if (!job.sector.toLowerCase().includes(searchFilter.sector.toLowerCase())) return false;
      }
      return true;
    });
  }, [selectedSector, selectedType, searchFilter]);

  const hasActiveFilters =
    selectedSector !== 'All' ||
    selectedType !== 'All' ||
    Boolean(searchFilter.keyword || searchFilter.location || searchFilter.sector);

  return (
    <section id="jobs" className="py-20 md:py-28 bg-[#fbfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              02. Live UK Opportunities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display mb-4 text-balance">
              Your next opportunity could be here.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore handpicked vacancies with audited UK employers. Every role is verified for fair pay, statutory compliance, and genuine career development.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={() => {
                  setSelectedSector('All');
                  setSelectedType('All');
                  onClearFilters();
                }}
                className="text-xs font-medium text-slate-600 hover:text-slate-900 underline underline-offset-4 py-2"
              >
                Clear all filters
              </button>
            )}
            <div className="text-xs font-medium text-slate-500">
              Showing <span className="text-slate-900 font-semibold">{filteredJobs.length}</span> positions
            </div>
          </div>
        </div>

        {/* Interactive Filter Tabs (Permitted segmented controls per Section 1A) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200/80">
          {/* Sector Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {sectorList.map((sector) => (
              <button
                key={sector}
                type="button"
                onClick={() => setSelectedSector(sector)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedSector === sector
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Type Buttons */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-slate-400 hidden lg:inline mr-1">Type:</span>
            {typeList.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedType === type
                    ? 'bg-slate-200 text-slate-900 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/90 p-8">
            <Briefcase className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No vacancies match your current search</h3>
            <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">
              Try adjusting your keyword, resetting sector filters, or browse all live roles nationwide.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedSector('All');
                setSelectedType('All');
                onClearFilters();
              }}
              className="px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Reset Filters & View All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.slice(0, visibleCount).map((job) => (
              <div
                key={job.id}
                className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Unboxed Metadata Header per Zero-Pill Discipline */}
                  <div className="text-xs text-slate-500 mb-3 flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-slate-700">{job.sector}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>{job.employmentType}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-400 font-mono text-[11px]">{job.referenceCode}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 font-display mb-2 group-hover:text-blue-900 transition-colors leading-snug">
                    {job.title}
                  </h3>

                  {/* Location & Salary */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                      <Banknote className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {job.shortDescription}
                  </p>
                </div>

                {/* Card Action Area */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Posted {job.postedDate}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectJob(job)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors group/view"
                  >
                    <span>View Job</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-view:translate-x-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Vacancies Button */}
        {filteredJobs.length > 6 && visibleCount < filteredJobs.length && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-xs tracking-wider uppercase rounded-xl border border-slate-300 hover:border-slate-400 transition-all shadow-xs"
            >
              Load More Vacancies ({filteredJobs.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
