import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface HeroProps {
  onSearch: (keyword: string, location: string, sector: string) => void;
  onOpenEmployerModal: () => void;
  onNavigateToJobs: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearch,
  onOpenEmployerModal,
  onNavigateToJobs,
}) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [sector, setSector] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword, location, sector);
  };

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#fbfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Headline & Intro + Hero Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-14">
          <div className="lg:col-span-7">
            {/* Trust Indicator kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>UK Recruitment & Workforce Solutions Partner</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>REC Corporate Member</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.1] mb-6 text-balance">
              Connecting people with opportunity.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              We empower ambitious individuals across the United Kingdom to discover rewarding careers, while partnering with forward-thinking organisations to build compliant, high-performing workforces that drive sustainable growth.
            </p>

            {/* Dual Audience CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                type="button"
                onClick={onNavigateToJobs}
                className="px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold tracking-wide rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
              >
                <span>Find a Job</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={onOpenEmployerModal}
                className="px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300/80 text-sm font-semibold tracking-wide rounded-xl shadow-xs hover:border-slate-400 transition-all flex items-center gap-2"
              >
                <Building2 className="w-4 h-4 text-slate-600" />
                <span>Hire Staff</span>
              </button>
            </div>

            {/* Micro credibility points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-2 border-t border-slate-200/60">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Full Right-to-Work Vetting</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>GLAA Licensed & REC Audited</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>&lt; 4-Hour Rapid Placement</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-900 aspect-16/10 border border-slate-200/60">
              {/* Fallback container with editorial gradient mesh */}
              <div className="absolute inset-0 bg-linear-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6 text-center text-white">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-slate-400">Strata Workforce UK</p>
                  <p className="text-sm font-medium text-slate-200">National Deployment & Placement Operations</p>
                </div>
              </div>

              <img
                src={ASSETS.hero}
                alt="UK professionals and skilled workers collaborating in a modern workplace"
                className={`relative z-10 w-full h-full object-cover transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                referrerPolicy="no-referrer"
              />

              {/* Scrim overlay with trust stat */}
              <div className="absolute inset-0 z-20 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Trusted Nationwide
                  </div>
                  <p className="text-sm font-medium text-slate-100">
                    Over 14,000 professional shifts & permanent appointments completed annually across England, Scotland & Wales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prominent Job Search Interface */}
        <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-lg p-4 sm:p-6 lg:p-7">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                Search Live UK Vacancies
              </span>
              <p className="text-sm text-slate-600">Explore permanent, contract, and temporary opportunities nationwide</p>
            </div>
            <div className="text-xs text-slate-500">
              Updated daily with vetted employer roles
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            {/* Keyword / Job Title */}
            <div className="md:col-span-5 relative">
              <label htmlFor="search-keyword" className="block text-xs font-medium text-slate-600 mb-1">
                Job Title / Keyword
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="search-keyword"
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="e.g. Registered Nurse, Logistics Manager, CNC Setter..."
                  className="w-full pl-10 pr-3 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all bg-slate-50/50 hover:bg-white"
                />
              </div>
            </div>

            {/* Location */}
            <div className="md:col-span-4 relative">
              <label htmlFor="search-location" className="block text-xs font-medium text-slate-600 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="search-location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Manchester, London, Leeds, Bristol, Remote..."
                  className="w-full pl-10 pr-3 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all bg-slate-50/50 hover:bg-white"
                />
              </div>
            </div>

            {/* Sector / Category Filter */}
            <div className="md:col-span-3 flex flex-col justify-end">
              <label htmlFor="search-sector" className="block text-xs font-medium text-slate-600 mb-1">
                Sector (Optional)
              </label>
              <select
                id="search-sector"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full px-3 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-800 transition-all bg-slate-50/50 hover:bg-white"
              >
                <option value="">All Sectors</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Social Care">Social Care</option>
                <option value="Construction">Construction</option>
                <option value="Logistics">Logistics & Warehousing</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Administration">Administration</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Education">Education</option>
              </select>
            </div>

            {/* Submit Bar */}
            <div className="md:col-span-12 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                <span>Popular searches:</span>
                <button
                  type="button"
                  onClick={() => { setKeyword('Nurse'); onSearch('Nurse', '', ''); }}
                  className="hover:underline text-slate-700 font-medium"
                >
                  Nurse
                </button>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={() => { setKeyword('Logistics'); onSearch('Logistics', '', ''); }}
                  className="hover:underline text-slate-700 font-medium"
                >
                  Logistics
                </button>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={() => { setKeyword('Site Manager'); onSearch('Site Manager', '', ''); }}
                  className="hover:underline text-slate-700 font-medium"
                >
                  Site Manager
                </button>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search Jobs</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
