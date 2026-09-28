import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ArrowRight, ShieldCheck, Building2, UserCheck, Clock, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface HeroProps {
  onSearch: (keyword: string, location: string, sector: string) => void;
  onOpenEmployerModal: () => void;
  onNavigateToJobs: () => void;
  onOpenCandidateRegister?: () => void;
  onOpenDocumentsModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearch,
  onOpenEmployerModal,
  onNavigateToJobs,
  onOpenCandidateRegister,
  onOpenDocumentsModal,
}) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [sector, setSector] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeAudienceMode, setActiveAudienceMode] = useState<'jobseeker' | 'employer'>('jobseeker');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword, location, sector);
  };

  const popularKeywords = [
    { label: 'Registered Nurse', sector: 'Healthcare' },
    { label: 'HGV Class 1', sector: 'Logistics' },
    { label: 'Site Manager', sector: 'Construction' },
    { label: 'CNC Machinist', sector: 'Manufacturing' },
    { label: 'Care Support', sector: 'Social Care' },
  ];

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-36 bg-[#fbfbfa] overflow-hidden border-b border-slate-200/80">
      {/* Background architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0f172a 1.2px, transparent 1.2px)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Kicker & Credibility Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-5 border-b border-slate-200/90">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>UK Recruitment & Workforce Solutions Partner</span>
            <span aria-hidden="true" className="text-slate-300 font-light">/</span>
            <span className="text-slate-600 font-medium">England · Scotland · Wales</span>
          </div>

          <div className="hidden sm:flex items-center gap-5 text-xs sm:text-sm text-slate-600 font-mono font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-slate-800" />
              <span>REC Audited #88492</span>
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>GLAA Licensed #STRA004</span>
          </div>
        </div>

        {/* Hero Grid: Typography & Pathways (Left) + Visual Asset & Telemetry (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Hero Headline & Body Prose */}
            <div className="space-y-5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.05] text-balance">
                Connecting people with opportunity.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                We empower talented people across the United Kingdom to build rewarding, sustainable careers, while partnering with leading organisations to engineer compliant, high-performing workforces that keep British industry moving.
              </p>
            </div>

            {/* DUAL AUDIENCE SPLIT PATHWAYS (IMMEDIATELY OBVIOUS) */}
            <div className="space-y-3 pt-2">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 font-display">
                Select your primary objective:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Pathway A: Job Seekers */}
                <div
                  onClick={() => {
                    setActiveAudienceMode('jobseeker');
                    onNavigateToJobs();
                  }}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                    activeAudienceMode === 'jobseeker'
                      ? 'bg-white border-slate-950 shadow-md ring-2 ring-slate-950/10'
                      : 'bg-white/90 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center shadow-xs">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-md">
                        340+ Live Roles
                      </span>
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-950 font-display group-hover:text-blue-900 transition-colors">
                        I'm Looking for Work
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">
                        Explore verified permanent, contract, and temporary vacancies across the UK with transparent remuneration.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-slate-950 group-hover:text-blue-700">
                    <span>Search Vacancies</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                  {onOpenCandidateRegister && (
                    <div className="mt-3 pt-2 border-t border-dashed border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500">Don't see your role?</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenCandidateRegister();
                        }}
                        className="font-bold text-blue-600 hover:text-blue-800 underline"
                      >
                        Fast-Track Register CV
                      </button>
                    </div>
                  )}
                </div>

                {/* Pathway B: Employers */}
                <div
                  onClick={() => {
                    setActiveAudienceMode('employer');
                    onOpenEmployerModal();
                  }}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                    activeAudienceMode === 'employer'
                      ? 'bg-slate-950 text-white border-slate-950 shadow-md ring-2 ring-slate-900/10'
                      : 'bg-white/90 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-xs ${
                        activeAudienceMode === 'employer' ? 'bg-white text-slate-950' : 'bg-slate-100 text-slate-900'
                      }`}>
                        <Building2 className="w-5 h-5" />
                      </div>
                      <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${
                        activeAudienceMode === 'employer'
                          ? 'bg-slate-900 text-blue-300 border-slate-800'
                          : 'bg-blue-50 text-blue-800 border-blue-200/60'
                      }`}>
                        &lt; 4hr Mobilisation
                      </span>
                    </div>
                    <div>
                      <h2 className={`text-lg sm:text-xl font-bold font-display transition-colors ${
                        activeAudienceMode === 'employer' ? 'text-white' : 'text-slate-950 group-hover:text-blue-900'
                      }`}>
                        I'm Looking to Hire
                      </h2>
                      <p className={`text-sm leading-relaxed mt-1 ${
                        activeAudienceMode === 'employer' ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        Deploy vetted temporary staff, execute retained executive searches, or commission managed workforce programs.
                      </p>
                    </div>
                  </div>
                  <div className={`pt-4 mt-4 border-t flex items-center justify-between text-sm font-bold ${
                    activeAudienceMode === 'employer'
                      ? 'border-slate-800 text-blue-300 group-hover:text-white'
                      : 'border-slate-100 text-slate-950 group-hover:text-blue-700'
                  }`}>
                    <span>Request Workforce Solutions</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </div>
            </div>

            {/* Quick stats trust ribbon with large legible numerals */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-950 tabular-nums">
                  14,280+
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1 font-semibold">Placements YTD</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-950 tabular-nums">
                  3.8 Days
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1 font-semibold">Avg Permanent Shortlist</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-600 tabular-nums">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1 font-semibold">Right-to-Work Vetted</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Asset (Right) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200 aspect-4/3 lg:aspect-5/4">
              
              {/* Fallback container with editorial gradient mesh */}
              <div className="absolute inset-0 bg-linear-to-tr from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-8 text-center text-white">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-widest text-slate-400 font-mono">Strata Workforce Operations</p>
                  <p className="text-lg font-bold text-slate-100 font-display">National Deployment & Clinical Network</p>
                </div>
              </div>

              <img
                src={ASSETS.hero}
                alt="UK professionals and skilled workforce collaborating in a modern British workplace"
                className={`relative z-10 w-full h-full object-cover transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                referrerPolicy="no-referrer"
              />

              {/* Bottom Scrim with Live Operations Telemetry */}
              <div className="absolute inset-0 z-20 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-100 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      Live National Dispatch
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold tracking-wide">ACTIVE DEPLOYMENT</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Deploying pre-screened nurses, warehouse operatives, plant technicians, and commercial site managers to over 480 verified UK sites daily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HIGH-PRECISION RECRUITMENT SEARCH CONSOLE */}
        <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 lg:p-9">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-slate-100">
            <div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 font-display">
                Search UK Vacancies Platform
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-950 mt-1">
                Filter across 340+ verified jobs with audited salaries and clear working patterns
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Direct employer & verified trust positions</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Keyword / Job Title */}
              <div className="md:col-span-5 relative">
                <label htmlFor="search-keyword" className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Job Title, Skill or Ref Code
                </label>
                <div className="relative">
                  <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="search-keyword"
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="e.g. Registered Nurse, Logistics Coordinator, Site Manager..."
                    className="w-full pl-12 pr-4 py-3.5 text-base rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900 placeholder-slate-400 bg-slate-50/70 hover:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="md:col-span-4 relative">
                <label htmlFor="search-location" className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                  City, Region or Postcode
                </label>
                <div className="relative">
                  <MapPin className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="search-location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Manchester, Birmingham, Leeds, London, Bristol..."
                    className="w-full pl-12 pr-4 py-3.5 text-base rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900 placeholder-slate-400 bg-slate-50/70 hover:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              {/* Sector Selector */}
              <div className="md:col-span-3">
                <label htmlFor="search-sector" className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Specialist Sector
                </label>
                <select
                  id="search-sector"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full px-4 py-3.5 text-base rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900 bg-slate-50/70 hover:bg-white transition-all font-medium"
                >
                  <option value="">All UK Sectors</option>
                  <option value="Healthcare">Healthcare & Clinical</option>
                  <option value="Social Care">Social Care & Support</option>
                  <option value="Construction">Construction & Civils</option>
                  <option value="Logistics">Logistics & Warehousing</option>
                  <option value="Manufacturing">Manufacturing & Engineering</option>
                  <option value="Administration">Administration & Finance</option>
                  <option value="Education">Education & Early Years</option>
                  <option value="Hospitality">Hospitality & Catering</option>
                </select>
              </div>
            </div>

            {/* Bottom bar: Trending tags + Action button */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                <span className="font-bold text-slate-800">Trending UK roles:</span>
                {popularKeywords.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      setKeyword(item.label);
                      setSector(item.sector);
                      onSearch(item.label, '', item.sector);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2.5"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Jobs</span>
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
