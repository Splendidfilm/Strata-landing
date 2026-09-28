import React, { useMemo, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { FEATURED_JOBS } from '../data/mockData';
import { JobVacancy } from '../types';
interface FeaturedJobsProps { onSelectJob: (job: JobVacancy) => void; searchFilter: { keyword: string; location: string; sector: string }; onClearFilters: () => void; }
export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ onSelectJob, searchFilter, onClearFilters }) => {
  const [showAll, setShowAll] = useState(false);
  const jobs = useMemo(() => FEATURED_JOBS.filter((job) => {
    const q = searchFilter.keyword.toLowerCase(); const loc = searchFilter.location.toLowerCase();
    return (!q || `${job.title} ${job.sector} ${job.shortDescription}`.toLowerCase().includes(q)) && (!loc || job.location.toLowerCase().includes(loc)) && (!searchFilter.sector || job.sector === searchFilter.sector);
  }), [searchFilter]);
  const visibleJobs = showAll ? jobs : jobs.slice(0, 3);
  return <section id="jobs" className="section jobs-section"><div className="section-inner"><div className="section-heading-row"><div><p className="eyebrow">Featured opportunities</p><h2>Find work that moves you forward.</h2></div><button className="text-link view-all" onClick={() => { onClearFilters(); setShowAll(true); }}>View All Vacancies <ArrowRight size={17}/></button></div>
    {searchFilter.keyword || searchFilter.location || searchFilter.sector ? <div className="results-note">Showing matching roles <button onClick={onClearFilters}>Clear search</button></div> : null}
    {visibleJobs.length ? <div className="job-grid">{visibleJobs.map((job) => <article key={job.id} className="job-card"><div className="job-tags"><span>{job.sector}</span><span>{job.employmentType}</span></div><h3>{job.title}</h3><p className="job-location"><MapPin size={16}/>{job.location}</p><div className="job-card-bottom"><span>{job.salary.split('/')[0].trim()}</span><button aria-label={`View ${job.title}`} onClick={() => onSelectJob(job)}>View Job<ArrowRight size={16}/></button></div></article>)}</div> : <div className="empty-jobs"><p>No vacancies match your search just now.</p><button className="text-link" onClick={onClearFilters}>Browse all vacancies<ArrowRight size={16}/></button></div>}
  </div></section>;
};
