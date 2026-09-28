import React, { useState } from 'react';
import {
  CANDIDATE_WORKFLOW,
  EMPLOYER_WORKFLOW,
  COMPLIANCE_STANDARDS,
} from '../data/mockData';
import {
  Search,
  FileCheck2,
  ShieldCheck,
  UserCheck,
  Banknote,
  TrendingUp,
  ClipboardList,
  Users,
  CheckSquare,
  Truck,
  BarChart,
  FileSpreadsheet,
  ArrowRight,
  Clock,
  CheckCircle2,
  FileText,
  BadgeCheck,
  ChevronRight,
} from 'lucide-react';

interface WorkflowsSectionProps {
  onOpenCandidateRegister: () => void;
  onOpenEmployerModal: () => void;
  onOpenDocumentsModal: (type: 'candidate' | 'employer') => void;
  onNavigateToJobs: () => void;
}

export const WorkflowsSection: React.FC<WorkflowsSectionProps> = ({
  onOpenCandidateRegister,
  onOpenEmployerModal,
  onOpenDocumentsModal,
  onNavigateToJobs,
}) => {
  const [activeTab, setActiveTab] = useState<'candidate' | 'employer'>('candidate');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'Banknote':
        return <Banknote className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'ClipboardList':
        return <ClipboardList className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5" />;
      case 'Truck':
        return <Truck className="w-5 h-5" />;
      case 'BarChart':
        return <BarChart className="w-5 h-5" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  const steps = activeTab === 'candidate' ? CANDIDATE_WORKFLOW : EMPLOYER_WORKFLOW;

  return (
    <section id="workflow" className="py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Section Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-10 border-b border-slate-100">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
              <BadgeCheck className="w-3.5 h-3.5 text-blue-600" />
              Verified Workforce Delivery Framework
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display">
              How the recruitment process works.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Transparent workflows engineered around strict UK statutory compliance, swift turnarounds, and human-centred support at every milestone.
            </p>
          </div>

          {/* Audience Selector Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 self-start md:self-auto shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('candidate')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold tracking-tight transition-all flex items-center gap-2 ${
                activeTab === 'candidate'
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              <span>For Job Seekers</span>
              <span className={`text-[11px] px-1.5 py-0.5 rounded-md ${
                activeTab === 'candidate' ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-700'
              }`}>
                6 Steps
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('employer')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold tracking-tight transition-all flex items-center gap-2 ${
                activeTab === 'employer'
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              <span>For Employers</span>
              <span className={`text-[11px] px-1.5 py-0.5 rounded-md ${
                activeTab === 'employer' ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-700'
              }`}>
                SLA Managed
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Context Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-950 shadow-xs shrink-0">
              {activeTab === 'candidate' ? (
                <UserCheck className="w-6 h-6 text-blue-600" />
              ) : (
                <ClipboardList className="w-6 h-6 text-blue-600" />
              )}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950">
                {activeTab === 'candidate'
                  ? 'Candidate Journey: Registration to Weekly Pay'
                  : 'Employer Journey: Requirements Scoping to SLA Review'}
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                {activeTab === 'candidate'
                  ? 'Zero candidate fees in accordance with the Employment Agencies Act 1973. Fast-track digital verification.'
                  : 'Guaranteed 4-hour temporary turnarounds and 100-day permanent replacement guarantee warranty.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={() => onOpenDocumentsModal(activeTab)}
              className="flex-1 md:flex-none px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>{activeTab === 'candidate' ? 'Candidate Documents Checklist' : 'Employer SLA & Terms'}</span>
            </button>
            {activeTab === 'candidate' ? (
              <button
                type="button"
                onClick={onOpenCandidateRegister}
                className="flex-1 md:flex-none px-4 py-2 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Register with CV</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onOpenEmployerModal}
                className="flex-1 md:flex-none px-4 py-2 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Request Staff</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 6-Step Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="group relative bg-[#fbfbfa] hover:bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Step indicator header */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-slate-950 text-white font-mono text-sm font-bold flex items-center justify-center shadow-xs">
                      {step.stepNumber}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Step {idx + 1} of 6
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{step.timeframe}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                    {getIcon(step.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <div className="text-xs font-semibold text-slate-500 mb-3 ml-10">
                  {step.subtitle}
                </div>

                <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Key Deliverables Checklist */}
              <div className="pt-4 border-t border-slate-200/70">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Key Deliverables:
                </div>
                <ul className="space-y-1.5">
                  {step.keyDeliverables.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Statutory Compliance Footer Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center">
            UK Regulatory & Legal Compliance Framework
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {COMPLIANCE_STANDARDS.map((std) => (
              <div
                key={std.id}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 transition-colors text-center"
              >
                <div className="text-xs font-extrabold text-slate-950 mb-0.5">{std.badge}</div>
                <div className="text-[11px] text-slate-500 font-medium">{std.body}</div>
                <div className="text-[10px] text-slate-400 mt-1">{std.statutoryRef}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
