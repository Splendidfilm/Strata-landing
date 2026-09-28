import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, Briefcase, Users, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenEmployerModal: (serviceId?: string) => void;
  onNavigateToJobs: () => void;
  onOpenCandidateRegister: () => void;
  onOpenDocumentsModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEmployerModal,
  onNavigateToJobs,
  onOpenCandidateRegister,
  onOpenDocumentsModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Find a Job', href: '#jobs', onClick: onNavigateToJobs },
    { label: 'For Employers', href: '#employers' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#workflow' },
    { label: 'Documents & RTW', href: '#compliance', onClick: onOpenDocumentsModal },
    { label: 'Sectors', href: '#sectors' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single element wordmark per Top Bar Contract */}
          <a
            href="#"
            className="text-2xl font-extrabold tracking-tight text-slate-950 font-display flex items-center gap-2 group"
          >
            <span className="w-2.5 h-6 bg-slate-950 rounded-xs group-hover:bg-blue-600 transition-colors inline-block" />
            <span>STRATA<span className="text-slate-500 font-semibold ml-1.5">WORKFORCE</span></span>
          </a>

          {/* Zone 2: Nav links with refined legible typography */}
          <nav className="hidden xl:flex items-center gap-6 text-[14px] font-semibold text-slate-700">
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
                className="hover:text-slate-950 transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-slate-950 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions with clear hierarchy */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenCandidateRegister}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors whitespace-nowrap"
            >
              Register CV
            </button>
            <button
              type="button"
              onClick={() => onOpenEmployerModal()}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 hover:bg-blue-100 hover:text-blue-900 border border-blue-200/80 rounded-xl transition-colors whitespace-nowrap"
            >
              Hire Staff
            </button>
            <button
              type="button"
              onClick={onNavigateToJobs}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-800 rounded-xl shadow-xs hover:shadow transition-all whitespace-nowrap flex items-center gap-1.5 group"
            >
              <span>Find a Job</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-200 bg-white px-5 pt-4 pb-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 pb-4 border-b border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToJobs();
              }}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-950 text-white text-sm font-bold uppercase tracking-wider"
            >
              <Briefcase className="w-4 h-4" />
              <span>Find a Job</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmployerModal();
              }}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-slate-300 text-slate-900 text-sm font-bold uppercase tracking-wider hover:bg-slate-50"
            >
              <Users className="w-4 h-4" />
              <span>Hire Staff</span>
            </button>
          </div>

          <div className="pb-3 border-b border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCandidateRegister();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider"
            >
              <FileText className="w-4 h-4" />
              <span>Register Candidate CV (Zero Fees)</span>
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
                className="py-2.5 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 text-sm text-slate-600 flex items-center justify-between font-medium">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-800" />
              0800 246 8900
            </span>
            <span>UK Nationwide</span>
          </div>
        </div>
      )}
    </header>
  );
};
