import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Search, MapPin } from 'lucide-react';
import { ASSETS } from '../data/mockData';

interface HeroProps {
  onSearch: (keyword: string, location: string, sector: string) => void;
  onOpenEmployerModal: () => void;
  onNavigateToJobs: () => void;
  onOpenCandidateRegister?: () => void;
  onOpenDocumentsModal?: () => void;
}

const slides = [
  { title: 'Connecting people with opportunity.', copy: 'We help people find fulfilling work and help UK businesses build the teams they need.', image: ASSETS.hero, alt: 'Professionals working together in a modern workplace', action: 'Find a Job', audience: 'For people ready for their next step' },
  { title: 'The right people for the right roles.', copy: 'Thoughtful recruitment and dependable workforce support, shaped around your business.', image: ASSETS.employer, alt: 'Workforce professionals discussing staffing needs', action: 'Hire Staff', audience: 'For employers building stronger teams' },
  { title: 'Your next opportunity starts here.', copy: 'Explore roles across the UK, with people who take the time to understand what matters to you.', image: ASSETS.galleryTeam, alt: 'A team of colleagues at a workforce event', action: 'Explore Jobs', audience: 'A better way to move your career forward' },
];

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenEmployerModal, onNavigateToJobs }) => {
  const [active, setActive] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const startX = useRef<number | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const next = () => setActive((n) => (n + 1) % slides.length);
  const previous = () => setActive((n) => (n + slides.length - 1) % slides.length);
  const manualNext = next;
  const manualPrevious = previous;
  useEffect(() => {
    timer.current = window.setInterval(next, 6500);
    return () => window.clearInterval(timer.current);
  }, []);
  const slide = slides[active];
  const act = () => active === 1 ? onOpenEmployerModal() : onNavigateToJobs();
  return <>
    <section aria-roledescription="carousel" aria-label="Strata Workforce introduction" className="hero-carousel" onTouchStart={(e) => { startX.current = e.touches[0].clientX; }} onTouchEnd={(e) => { if (startX.current !== null) { const delta = e.changedTouches[0].clientX - startX.current; if (Math.abs(delta) > 45) delta < 0 ? manualNext() : manualPrevious(); } startX.current = null; }}>
      <div className="hero-image" key={slide.image} style={{ backgroundImage: `linear-gradient(90deg, rgba(8,24,39,.88) 0%, rgba(8,24,39,.68) 42%, rgba(8,24,39,.12) 100%), url("${slide.image}")` }} role="img" aria-label={slide.alt} />
      <div className="hero-content">
        <div className="hero-copy" key={active}>
          <p className="eyebrow light-eyebrow">UK recruitment and workforce solutions</p>
          <h1>{slide.title}</h1>
          <p className="hero-description">{slide.copy}</p>
          <div className="hero-actions">
            <button className="button button-light" onClick={act}>{slide.action}<ArrowRight size={17}/></button>
            {active !== 1 && <button className="button button-outline" onClick={onOpenEmployerModal}>For Employers<ArrowRight size={17}/></button>}
          </div>
        </div>
        <div className="hero-controls">
          <span className="hero-audience">{slide.audience}</span>
          <div className="carousel-controls">
            <button aria-label="Previous slide" onClick={manualPrevious}><ArrowLeft size={18}/></button>
            <div className="carousel-dots">{slides.map((s, i) => <button key={s.title} aria-label={`Go to slide ${i + 1}`} aria-current={active === i} onClick={() => setActive(i)} />)}</div>
            <button aria-label="Next slide" onClick={manualNext}><ArrowRight size={18}/></button>
          </div>
        </div>
      </div>
    </section>
    <section className="job-search-wrap" aria-label="Search jobs">
      <form className="job-search" onSubmit={(e) => { e.preventDefault(); onSearch(keyword, location, ''); }}>
        <label><span>Job title or keyword</span><div><Search size={18}/><input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="e.g. care assistant" /></div></label>
        <label><span>Location</span><div><MapPin size={18}/><input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Town, city or postcode" /></div></label>
        <button className="button button-primary" type="submit">Search Jobs<ArrowRight size={17}/></button>
      </form>
    </section>
  </>;
};
