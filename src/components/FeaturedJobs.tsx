import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Briefcase,
  Banknote,
  Calendar,
  ArrowRight,
  Filter,
  Bookmark,
  CheckCircle2,
  Clock,
  Sparkles,
  Search,
  Building,
  Users2,
  SlidersHorizontal,
  ArrowUpDown
} from 'lucide-react';
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
  const [selectedRateType, setSelectedRateType] = useState<'all' | 'annual' | 'hourly' | 'daily'>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'salary' | 'urgent'>('recent');
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // In-section live filter inputs
  const [inlineKeyword, setInlineKeyword] = useState<string>('');
  const [inlineLocation, setInlineLocation] = useState<string>('');

  const sectorList = [
    'All',
    'Healthcare',
    'Logistics',
    'Construction',
    'Manufacturing',
    'Administration',
    'Social Care',
    'Education',
  ];

  const typeList = ['All', 'Permanent', 'Contract', 'Temporary'];

  const toggleSaveJob = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedJobIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter jobs based on all criteria
  const filteredJobs = useMemo(() => {
    let result = FEATURED_JOBS.filter((job) => {
      // Saved filter
      if (showSavedOnly && !savedJobIds.includes(job.id)) {
        return false;
      }
      // Sector filter tab
      if (selectedSector !== 'All' && job.sector !== selectedSector) {
        return false;
      }
      // Employment type tab
      if (selectedType !== 'All' && job.employmentType !== selectedType) {
        return false;
      }
      // Salary rate type
      if (selectedRateType !== 'all' && job.salaryType !== selectedRateType) {
        return false;
      }
      // Incoming Hero Search or Inline Search: Keyword
      const activeKw = (inlineKeyword || searchFilter.keyword).toLowerCase().trim();
      if (activeKw) {
        const matchesTitle = job.title.toLowerCase().includes(activeKw);
        const matchesDesc = job.shortDescription.toLowerCase().includes(activeKw);
        const matchesSector = job.sector.toLowerCase().includes(activeKw);
        const matchesRef = job.referenceCode.toLowerCase().includes(activeKw);
        if (!matchesTitle && !matchesDesc && !matchesSector && !matchesRef) return false;
      }
      // Incoming Hero Search or Inline Search: Location
      const activeLoc = (inlineLocation || searchFilter.location).toLowerCase().trim();
      if (activeLoc) {
        if (!job.location.toLowerCase().includes(activeLoc)) return false;
      }
      // Sector from Hero search if active and sector tab is All
      if (searchFilter.sector && selectedSector === 'All') {
        if (!job.sector.toLowerCase().includes(searchFilter.sector.toLowerCase())) return false;
      }
      return true;
    });

    // Sorting logic
    if (sortBy === 'urgent') {
      result.sort((a, b) => {
        if (a.urgency === 'Urgent Requirement' || a.urgency === 'Immediate Start') return -1;
        if (b.urgency === 'Urgent Requirement' || b.urgency === 'Immediate Start') return 1;
        return 0;
      });
    } else if (sortBy === 'salary') {
      result.sort((a, b) => (b.salaryType === 'annual' ? 1 : -1));
    }

    return result;
  }, [
    selectedSector,
    selectedType,
    selectedRateType,
    sortBy,
    savedJobIds,
    showSavedOnly,
    searchFilter,
    inlineKeyword,
    inlineLocation,
  ]);

  const hasActiveFilters =
    selectedSector !== 'All' ||
    selectedType !== 'All' ||
    selectedRateType !== 'all' ||
    showSavedOnly ||
    Boolean(searchFilter.keyword || searchFilter.location || searchFilter.sector || inlineKeyword || inlineLocation);

  const resetAllFilters = () => {
    setSelectedSector('All');
    setSelectedType('All');
    setSelectedRateType('all');
    setShowSavedOnly(false);
    setInlineKeyword('');
    setInlineLocation('');
    onClearFilters();
  };

  return (
    <section id="jobs" className="py-28 md:py-36 bg-[#fbfbfa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              <span>02 / Live UK Recruitment Platform</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display text-balance">
              Your next opportunity could be here.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
              Explore verified permanent and contingent vacancies with accredited UK organisations. Every position is pre-audited for right-to-work compliance, fair remuneration, and safe working conditions.
            </p>
          </div>

          {/* Quick status bar: Saved jobs & Reset */}
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              className={`px-4 py-2.5 rounded-xl border text-sm font-bold flex items-center gap-2 transition-all ${
                showSavedOnly
                  ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${showSavedOnly ? 'fill-white' : ''}`} />
              <span>Saved Roles ({savedJobIds.length})</span>
            </button>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="text-sm font-semibold text-slate-700 hover:text-slate-950 underline underline-offset-4 py-2"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* PLATFORM SEARCH & FILTER CONSOLE */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm mb-12 space-y-6">
          
          {/* Top row: Sector segmented tabs with readable text */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-100">
            {sectorList.map((sector) => {
              const count = sector === 'All'
                ? FEATURED_JOBS.length
                : FEATURED_JOBS.filter((j) => j.sector === sector).length;
              return (
                <button
                  key={sector}
                  type="button"
                  onClick={() => setSelectedSector(sector)}
                  className={`px-4 py-2.5 text-sm font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
                    selectedSector === sector
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span>{sector}</span>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                    selectedSector === sector ? 'bg-slate-800 text-slate-200' : 'bg-slate-200/80 text-slate-700'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Secondary Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pt-1">
            
            {/* Left: Employment Type & Rate Type */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl text-sm">
                {typeList.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`px-3.5 py-1.5 rounded-lg font-bold transition-colors ${
                      selectedType === type ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-sm">
                <span className="text-slate-500 font-bold mr-1 hidden sm:inline">Pay:</span>
                <button
                  type="button"
                  onClick={() => setSelectedRateType('all')}
                  className={`px-3.5 py-1.5 rounded-xl border text-sm font-semibold ${
                    selectedRateType === 'all'
                      ? 'bg-slate-950 text-white border-slate-950'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  All Pay
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRateType('annual')}
                  className={`px-3.5 py-1.5 rounded-xl border text-sm font-semibold ${
                    selectedRateType === 'annual'
                      ? 'bg-slate-950 text-white border-slate-950'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  Salaried (£/yr)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRateType('hourly')}
                  className={`px-3.5 py-1.5 rounded-xl border text-sm font-semibold ${
                    selectedRateType === 'hourly'
                      ? 'bg-slate-950 text-white border-slate-950'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  Hourly Rate (£/hr)
                </button>
              </div>
            </div>

            {/* Right: Sort Dropdown & Result Count */}
            <div className="flex items-center justify-between lg:justify-end gap-4 text-sm">
              <span className="text-slate-600 font-medium">
                Showing <strong className="text-slate-950 font-bold">{filteredJobs.length}</strong> live vacancies
              </span>

              <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-2 bg-white shadow-2xs">
                <ArrowUpDown className="w-4 h-4 text-slate-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label="Sort jobs by"
                  className="bg-transparent text-sm font-bold text-slate-900 focus:outline-none cursor-pointer"
                >
                  <option value="recent">Most Recent</option>
                  <option value="salary">Highest Compensation</option>
                  <option value="urgent">Urgent / Immediate Start</option>
                </select>
              </div>
            </div>

          </div>

        </div>

        {/* JOBS GRID (REAL RECRUITMENT PLATFORM CARDS WITH STRONG TYPOGRAPHY) */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <Briefcase className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-slate-950 font-display mb-2">
              No vacancies match your criteria
            </h3>
            <p className="text-base text-slate-600 mb-6 max-w-md mx-auto">
              We update our UK job board multiple times daily. Adjust your filters or browse all open opportunities.
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="px-7 py-3.5 bg-slate-950 text-white text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-slate-800 transition-colors shadow-xs"
            >
              Reset Filters & Show All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.slice(0, visibleCount).map((job) => {
              const isSaved = savedJobIds.includes(job.id);
              return (
                <div
                  key={job.id}
                  onClick={() => onSelectJob(job)}
                  className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative"
                >
                  <div>
                    {/* Top Status & Verification Row */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        {job.urgency && (
                          <span className={`text-xs font-bold px-3 py-1 rounded-lg ${
                            job.urgency === 'Immediate Start' || job.urgency === 'Urgent Requirement'
                              ? 'bg-rose-50 text-rose-800 border border-rose-200/80'
                              : job.urgency === 'New Listing'
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/80'
                              : 'bg-blue-50 text-blue-800 border border-blue-200/80'
                          }`}>
                            {job.urgency}
                          </span>
                        )}
                        <span className="text-sm font-bold text-slate-800">
                          {job.sector}
                        </span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-sm font-semibold text-slate-500">
                          {job.employmentType}
                        </span>
                      </div>

                      {/* Bookmark Save Button */}
                      <button
                        type="button"
                        onClick={(e) => toggleSaveJob(job.id, e)}
                        className={`p-2 rounded-xl border transition-colors ${
                          isSaved
                            ? 'bg-slate-950 text-white border-slate-950'
                            : 'bg-slate-50 text-slate-400 hover:text-slate-950 hover:bg-slate-100 border-slate-200'
                        }`}
                        title={isSaved ? 'Remove from saved' : 'Save job for later'}
                        aria-label="Save job"
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                      </button>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display mb-3 group-hover:text-blue-900 transition-colors leading-snug">
                      {job.title}
                    </h3>

                    {/* Verified Client / Organization Type */}
                    {job.clientType && (
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-5 font-semibold">
                        <Building className="w-4 h-4 text-slate-500" />
                        <span>Client: {job.clientType}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-xs font-mono text-slate-400 font-normal">{job.referenceCode}</span>
                      </div>
                    )}

                    {/* Salary Callout Bar */}
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Audited Remuneration
                        </div>
                        <div className="text-base sm:text-lg font-bold text-slate-950 font-mono mt-0.5">
                          {job.salary}
                        </div>
                      </div>

                      {job.schedule && (
                        <div className="text-xs sm:text-right font-medium text-slate-700">
                          <span className="block text-slate-400 uppercase tracking-wider text-[11px] font-bold">Schedule</span>
                          <span className="font-semibold">{job.schedule}</span>
                        </div>
                      )}
                    </div>

                    {/* Location with Icon */}
                    <div className="flex items-center gap-2 text-sm text-slate-700 mb-4 font-medium">
                      <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                      <span>{job.location}</span>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-2">
                      {job.shortDescription}
                    </p>
                  </div>

                  {/* Card Footer: Metadata + Actions */}
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Posted {job.postedDate}</span>
                      </span>
                      {job.applicantCount && (
                        <>
                          <span aria-hidden="true" className="text-slate-300">·</span>
                          <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                            <Users2 className="w-3.5 h-3.5 text-slate-500" />
                            <span>{job.applicantCount} applied</span>
                          </span>
                        </>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectJob(job);
                      }}
                      className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center gap-2 group/btn"
                    >
                      <span>View & Apply</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Vacancies Button */}
        {filteredJobs.length > 6 && visibleCount < filteredJobs.length && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-9 py-4 bg-white hover:bg-slate-50 text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl border border-slate-300 hover:border-slate-400 transition-all shadow-xs"
            >
              Load More Vacancies ({filteredJobs.length - visibleCount} remaining)
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
