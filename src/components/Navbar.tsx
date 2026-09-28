import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, Briefcase, Users } from 'lucide-react';

interface NavbarProps {
  onOpenEmployerModal: (serviceId?: string) => void;
  onNavigateToJobs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEmployerModal,
  onNavigateToJobs,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Find a Job', href: '#jobs', onClick: onNavigateToJobs },
    { label: 'For Employers', href: '#employers' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single element wordmark per Top Bar Contract */}
          <a
            href="#"
            className="text-2xl font-extrabold tracking-tight text-slate-900 font-display flex items-center gap-2 group"
          >
            <span className="w-2.5 h-6 bg-slate-900 rounded-xs group-hover:bg-blue-600 transition-colors inline-block" />
            <span>STRATA<span className="text-slate-500 font-medium ml-1">WORKFORCE</span></span>
          </a>

          {/* Zone 2: 4-7 nav links, single line text */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
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
                className="hover:text-slate-950 transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-slate-900 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenEmployerModal()}
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
            >
              Hire Staff
            </button>
            <button
              onClick={onNavigateToJobs}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Find a Job</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToJobs();
              }}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Find a Job</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmployerModal();
              }}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg border border-slate-300 text-slate-800 text-xs font-semibold uppercase tracking-wider hover:bg-slate-50"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Hire Staff</span>
            </button>
          </div>

          <div className="flex flex-col space-y-1">
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
                className="py-2.5 px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-700" />
              0800 246 8900
            </span>
            <span>UK Nationwide Coverage</span>
          </div>
        </div>
      )}
    </header>
  );
};
