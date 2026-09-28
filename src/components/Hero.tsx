import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ASSETS } from '../data/mockData';
import '../index.css';

interface HeroProps {
  onOpenEmployerModal: () => void;
  onNavigateToJobs: () => void;
}

const slides = [
  {
    title: 'Connecting people with opportunity.',
    text: 'Browse open roles and apply in minutes.',
    image: ASSETS.hero,
    alt: 'Professionals working together in a modern workplace',
    action: 'Find a Job',
  },
  {
    title: 'The right people for the right roles.',
    text: 'Tell us what your team needs and we will help you find the right people.',
    image: ASSETS.employer,
    alt: 'Workforce professionals discussing staffing needs',
    action: 'Hire Staff',
  },
  {
    title: 'Your next opportunity starts here.',
    text: 'See new openings and take the next step in your career.',
    image: ASSETS.galleryTeam,
    alt: 'A team of colleagues at a workforce event',
    action: 'Explore Jobs',
  },
];

const BAND_COUNT = 5;
const AUTOPLAY_INTERVAL = 6500;
const SWIPE_THRESHOLD = 45;

const cssVars = (vars: Record<string, string | number>) => vars as React.CSSProperties;

export const Hero: React.FC<HeroProps> = ({ onOpenEmployerModal, onNavigateToJobs }) => {
  const [{ active, prev }, setPosition] = useState({ active: 0, prev: -1 });
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setPosition((current) => (current.active === index ? current : { active: index, prev: current.active }));
  }, []);

  const showNext = useCallback(() => {
    setPosition((current) => ({ active: (current.active + 1) % slides.length, prev: current.active }));
  }, []);

  const showPrevious = useCallback(() => {
    setPosition((current) => ({
      active: (current.active + slides.length - 1) % slides.length,
      prev: current.active,
    }));
  }, []);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(query.matches);

    const onChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const isPlaying = !isPaused && !prefersReducedMotion;

  useEffect(() => {
    if (!isPlaying) return;

    const timeoutId = window.setTimeout(showNext, AUTOPLAY_INTERVAL);
    return () => window.clearTimeout(timeoutId);
  }, [active, isPlaying, showNext]);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    if (deltaX < 0) {
      showNext();
    } else {
      showPrevious();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight') showNext();
    if (event.key === 'ArrowLeft') showPrevious();
  };

  const slide = slides[active];

  const handlePrimaryAction = () => {
    if (active === 1) {
      onOpenEmployerModal();
      return;
    }

    onNavigateToJobs();
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Strata Workforce introduction"
      className="hero-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Each photo is cut into horizontal strata that slide in from alternating sides */}
      <div className="hero-media" aria-hidden="true">
        {slides.map((item, index) => (
          <div
            key={item.title}
            className={`hero-slide${index === active ? ' is-active' : ''}${index === prev ? ' is-prev' : ''}`}
          >
            {Array.from({ length: BAND_COUNT }, (_, band) => (
              <div key={band} className="hero-band" style={cssVars({ '--i': band })}>
                <div className="hero-band-img" style={{ backgroundImage: `url("${item.image}")` }} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-content">
        <div
          className="hero-copy"
          key={active}
          role="group"
          aria-roledescription="slide"
          aria-label={`${active + 1} of ${slides.length}: ${slide.alt}`}
          aria-live={isPlaying ? 'off' : 'polite'}
        >
          <h1>
            {slide.title.split(' ').map((word, index) => (
              <React.Fragment key={`${word}-${index}`}>
                <span className="hero-word">
                  <span style={cssVars({ '--w': index })}>{word}</span>
                </span>{' '}
              </React.Fragment>
            ))}
          </h1>
          <p className="hero-text">{slide.text}</p>
          <div className="hero-actions">
            <button className="button button-light" type="button" onClick={handlePrimaryAction}>
              {slide.action}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            {active !== 1 && (
              <button className="button button-outline" type="button" onClick={onOpenEmployerModal}>
                For Employers
              </button>
            )}
          </div>
        </div>

        <div className="hero-nav">
          <div className="hero-layers" role="group" aria-label="Choose a slide">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`layer${index === active ? ' is-active' : ''}`}
                style={cssVars({ '--k': index })}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === active}
                onClick={() => goTo(index)}
              >
                <span
                  key={index === active ? `run-${active}` : `idle-${index}`}
                  className="layer-fill"
                  style={{
                    animationDuration: `${AUTOPLAY_INTERVAL}ms`,
                    animationPlayState: isPlaying ? 'running' : 'paused',
                  }}
                />
              </button>
            ))}
          </div>

          <div className="hero-arrows">
            <button type="button" className="hero-arrow" aria-label="Previous slide" onClick={showPrevious}>
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" className="hero-arrow" aria-label="Next slide" onClick={showNext}>
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
