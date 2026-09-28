import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Camera, MapPin, Maximize2, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Recruitment Events', 'Training', 'Team', 'Community'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-28 md:py-36 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              <span>08 / On The Ground</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display text-balance">
              Our workforce community in action.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
              From regional hiring expos and technical training academies to back-to-work partnerships, explore our verified operational footprint across the UK.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 aspect-4/3 flex flex-col justify-end"
            >
              {/* Fallback container */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 text-center">
                <span className="text-sm text-slate-400 font-medium">{item.title}</span>
              </div>

              {/* High-Fidelity Image */}
              <img
                src={item.imagePath}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end text-white z-10">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-display">
                  {item.category}
                </div>
                <h3 className="text-base font-bold font-display text-white leading-tight mb-1.5 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              {/* Hover Affordance */}
              <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-950/60 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-slate-900">
              <img
                src={activeItem.imagePath}
                alt={activeItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/70 text-white flex items-center justify-center hover:bg-slate-950 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-2 font-display">
                {activeItem.category} · {activeItem.location}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display mb-3">
                {activeItem.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
