import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
export const GallerySection: React.FC = () => {
  const [active, setActive] = useState<GalleryItem | null>(null); const track = useRef<HTMLDivElement>(null);
  const move = (dir: number) => track.current?.scrollBy({ left: dir * track.current.clientWidth * .8, behavior: 'smooth' });
  return <section id="gallery" className="section gallery-section"><div className="section-inner"><div className="section-heading-row"><div><p className="eyebrow">Life at Strata</p><h2>People, progress and possibility.</h2></div><div className="carousel-controls dark-controls"><button aria-label="Previous images" onClick={() => move(-1)}><ArrowLeft size={18}/></button><button aria-label="Next images" onClick={() => move(1)}><ArrowRight size={18}/></button></div></div><div className="gallery-track" ref={track}>{GALLERY_ITEMS.map((item) => <button key={item.id} className="gallery-card" onClick={() => setActive(item)} aria-label={`View ${item.title}`}><img src={item.imagePath} alt={item.title}/><span>{item.title}</span></button>)}</div></div>{active && <div role="dialog" aria-modal="true" aria-label={active.title} className="gallery-lightbox" onClick={() => setActive(null)}><button aria-label="Close image" onClick={() => setActive(null)}><X/></button><img src={active.imagePath} alt={active.title}/></div>}</section>;
};

