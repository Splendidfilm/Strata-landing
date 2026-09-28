import React from 'react';
import { ShieldCheck, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (policyKey: string) => void;
  onOpenEmployerModal: () => void;
  onNavigateToJobs: () => void;
  onSelectSector: (sectorName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPolicy,
  onOpenEmployerModal,
  onNavigateToJobs,
  onSelectSector,
}) => {
  const complianceLinks = [
    { label: 'Privacy Policy', key: 'privacy' },
    { label: 'GDPR Compliance', key: 'gdpr' },
    { label: 'Anti-Bribery Policy', key: 'anti-bribery' },
    { label: 'Gifts & Hospitality', key: 'gifts-hospitality' },
    { label: 'Environmental Policy', key: 'environmental' },
    { label: 'Ethical Policy', key: 'ethical' },
    { label: 'Modern Slavery Statement', key: 'modern-slavery' },
  ];

  return (
    <footer id="contact" className="bg-[#080e1a] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Brand & Corporate Overview (Col 1-4) */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <a
              href="#"
              className="text-xl font-extrabold tracking-tight text-white font-display flex items-center gap-2"
            >
              <span className="w-2 h-5 bg-blue-500 rounded-xs inline-block" />
              <span>STRATA<span className="text-slate-400 font-medium ml-1">WORKFORCE</span></span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Strata Workforce Group is a UK recruitment and managed staffing consultancy providing compliant, responsive workforce solutions across Healthcare, Logistics, Construction, and Engineering.
            </p>

            <div className="pt-2 space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>0800 246 8900 / +44 (0)161 820 4400</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>contact@strataworkforce.co.uk</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>One St Peter’s Square, Manchester, M2 3DE</span>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-3 text-slate-400 text-[11px]">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>REC Corporate Member #88492</span>
              </div>
              <span>·</span>
              <span>GLAA Licence #STRA004</span>
            </div>
          </div>

          {/* Company (Col 5-6) */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Company
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Our Charter</a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">National Branches</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Leadership Team</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Careers at Strata</a>
              </li>
            </ul>
          </div>

          {/* Candidates (Col 7-8) */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Candidates
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={onNavigateToJobs} className="text-left hover:text-white transition-colors">
                  Search Vacancies
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Career Pathways</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Vocational Training</a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-white transition-colors">Timesheets & Payroll</a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-white transition-colors">Candidate FAQs</a>
              </li>
            </ul>
          </div>

          {/* Employers & Services (Col 9-10) */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Employers
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenEmployerModal} className="text-left hover:text-white transition-colors">
                  Request Staff
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Temporary Staffing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Permanent Search</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Recruitment Campaigns</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">HR Outsourcing (MSP)</a>
              </li>
            </ul>
          </div>

          {/* Resources & Contact (Col 11-12) */}
          <div id="resources" className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Resources
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">UK Salary Benchmarking</a>
              </li>
              <li>
                <a href="#employers" className="hover:text-white transition-colors">AWR & IR35 Guide</a>
              </li>
              <li>
                <a href="#employers" className="hover:text-white transition-colors">GLAA Standards</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Client Rate Calculator</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Emergency On-Call</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Governance & Policies Bar */}
        <div className="pt-8 border-t border-slate-800/80 pb-6">
          <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-3">
            Statutory Governance & Compliance Policies
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-400">
            {complianceLinks.map((policy) => (
              <button
                key={policy.key}
                type="button"
                onClick={() => onOpenPolicy(policy.key)}
                className="hover:text-white transition-colors text-left py-0.5 underline underline-offset-2"
              >
                {policy.label}
              </button>
            ))}
          </div>
        </div>

        {/* Statutory Bottom Notice */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Strata Workforce Group Limited. Registered in England & Wales (No. 12948201). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Operating under the Employment Agencies Act 1973</span>
            <span>·</span>
            <span>VAT Reg: GB 384 9201 18</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
