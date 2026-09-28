import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { WorkforceService } from '../types';
interface ServicesPreviewProps { onSelectService: (service: WorkforceService) => void; onRequestService: (serviceId: string) => void; }
const descriptions = ['Flexible cover for busy periods and changing demand.', 'Find the right person to grow your team for the long term.', 'Bring the right candidates together at scale.', 'Recruitment support that fits your organisation.', 'Reliable teams, ready to work when you need them.', 'Build skills and support lasting career progress.'];
export const ServicesPreview: React.FC<ServicesPreviewProps> = ({ onRequestService }) => {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: number) => track.current?.scrollBy({ left: direction * (track.current.clientWidth * 0.8), behavior: 'smooth' });
  return <section id="services" className="section services-section"><div className="section-inner">
    <div className="section-heading-row"><div><p className="eyebrow">What we do</p><h2>People solutions for every stage of work.</h2></div><div className="carousel-controls dark-controls"><button aria-label="Previous services" onClick={() => move(-1)}><ArrowLeft size={18}/></button><button aria-label="Next services" onClick={() => move(1)}><ArrowRight size={18}/></button></div></div>
    <div className="service-track" ref={track}>{SERVICES_DATA.map((service, i) => <article className="service-card" key={service.id}><span className="service-number">0{i + 1}</span><div><h3>{service.title}</h3><p>{descriptions[i]}</p></div><button className="text-link" onClick={() => onRequestService(service.id)}>Explore service <ArrowUpRight size={16}/></button></article>)}</div>
  </div></section>;
};
