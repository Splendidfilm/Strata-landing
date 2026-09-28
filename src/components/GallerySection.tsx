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
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              08. On The Ground
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display mb-4 text-balance">
              Our workforce community in action.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From regional hiring fairs and technical academies to community initiatives, explore our active presence across British industry.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-sm hover:shadow-lg transition-all border border-slate-200/80 aspect-4/3 flex flex-col justify-end"
            >
              {/* Fallback container */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 text-center">
                <span className="text-xs text-slate-400 font-medium">{item.title}</span>
              </div>

              {/* High-Fidelity Image */}
              <img
                src={item.imagePath}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white z-10">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  {item.category}
                </div>
                <h3 className="text-sm font-bold font-display text-white leading-tight mb-1 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-[11px] text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              {/* Hover Affordance */}
              <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-slate-950/60 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
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
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200"
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
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/70 text-white flex items-center justify-center hover:bg-slate-950 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                {activeItem.category} · {activeItem.location}
              </div>
              <h3 className="text-xl font-bold text-slate-950 font-display mb-2">
                {activeItem.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
