import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenEmployerModal: (serviceId?: string) => void;
  onNavigateToJobs: () => void;
  onOpenCandidateRegister?: () => void;
  onOpenDocumentsModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEmployerModal,
  onNavigateToJobs,
  onOpenCandidateRegister,
  onOpenDocumentsModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop Center Navigation Links in exact required order
  const navLinks = [
    {
      label: 'Find a Job',
      href: '#jobs',
      onClick: onNavigateToJobs,
    },
    {
      label: 'For Employers',
      href: '#employers',
    },
    {
      label: 'Services',
      href: '#services',
    },
    {
      label: 'About Us',
      href: '#about',
    },
    {
      label: 'Resources',
      href: '#workflow',
      onClick: onOpenDocumentsModal,
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)]'
          : 'bg-[#fbfbfa]/90 backdrop-blur-sm border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ================= LEFT: LOGO / WORDMARK ================= */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="flex items-center gap-2.5 focus:outline-none group"
              aria-label="Strata Workforce Homepage"
            >
              {/* Refined corporate architectural mark */}
              <span className="w-2.5 h-6 bg-slate-900 rounded-[2px] group-hover:bg-blue-600 transition-colors inline-block" />
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950 font-display">
                STRATA
                <span className="font-semibold text-slate-500 text-sm sm:text-base tracking-normal ml-1.5">
                  WORKFORCE
                </span>
              </span>
            </a>
          </div>

          {/* ================= CENTER: NAVIGATION LINKS ================= */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center justify-center gap-3.5 lg:gap-6 xl:gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="relative py-2 text-[13px] lg:text-[14px] font-medium text-slate-600 hover:text-slate-950 transition-colors duration-150 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-slate-900 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ================= RIGHT: CTAS (FIND A JOB & HIRE STAFF) ================= */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0">
            {/* Secondary / Outline Button: "Find a Job" */}
            <button
              type="button"
              onClick={onNavigateToJobs}
              className="h-9 lg:h-10 px-3 lg:px-4 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-lg transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 cursor-pointer"
            >
              Find a Job
            </button>

            {/* Primary Filled Button: "Hire Staff" */}
            <button
              type="button"
              onClick={() => onOpenEmployerModal()}
              className="h-9 lg:h-10 px-3.5 lg:px-4.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 cursor-pointer"
            >
              Hire Staff
            </button>
          </div>

          {/* ================= MOBILE: HAMBURGER BUTTON ================= */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 md:hidden" /> : <Menu className="w-6 h-6 md:hidden" />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAVIGATION PANEL ================= */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-5 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Navigation links - large and easy to tap */}
          <nav className="flex flex-col divide-y divide-slate-100 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="py-3.5 text-base font-medium text-slate-800 hover:text-slate-950 active:text-blue-600 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-300 text-sm">→</span>
              </a>
            ))}
          </nav>

          {/* Mobile Action Buttons - Prominently visible and side-by-side or stacked without awkward wrap */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToJobs();
              }}
              className="h-11 w-full text-center text-xs font-semibold text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-center whitespace-nowrap"
            >
              Find a Job
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmployerModal();
              }}
              className="h-11 w-full text-center text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center whitespace-nowrap shadow-xs"
            >
              Hire Staff
            </button>
          </div>

          {/* Quick contact information */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>24/7 Operations Desk</span>
            <a
              href="tel:08002468900"
              className="font-semibold text-slate-900 hover:text-blue-600 transition-colors"
            >
              0800 246 8900
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
