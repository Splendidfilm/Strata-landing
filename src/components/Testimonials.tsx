import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';
export const Testimonials: React.FC = () => {
  const track = useRef<HTMLDivElement>(null);
  const move = (dir: number) => track.current?.scrollBy({ left: dir * track.current.clientWidth, behavior: 'smooth' });
  return <section className="section testimonial-section"><div className="section-inner"><div className="section-heading-row"><div><p className="eyebrow">Kind words</p><h2>Good work starts with trust.</h2></div><div className="carousel-controls dark-controls"><button aria-label="Previous testimonials" onClick={() => move(-1)}><ArrowLeft size={18}/></button><button aria-label="Next testimonials" onClick={() => move(1)}><ArrowRight size={18}/></button></div></div><div className="testimonial-track" ref={track}>{TESTIMONIALS_DATA.slice(0, 6).map((item) => <article className="testimonial-card" key={item.id}><Quote size={22}/><p>“{item.quote}”</p><div><strong>{item.author}</strong><span>{item.role}{item.organisation ? ` · ${item.organisation}` : ''}</span></div></article>)}</div></div></section>;
};
