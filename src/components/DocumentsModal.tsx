import React, { useState } from 'react';
import {
  X,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Download,
  Building2,
  UserCheck,
  Printer,
  ExternalLink,
} from 'lucide-react';
import { REQUIRED_DOCUMENTS, COMPLIANCE_STANDARDS } from '../data/mockData';

interface DocumentsModalProps {
  isOpen: boolean;
  initialTab?: 'candidate' | 'employer';
  onClose: () => void;
  onOpenCandidateRegister?: () => void;
  onOpenEmployerModal?: () => void;
}

export const DocumentsModal: React.FC<DocumentsModalProps> = ({
  isOpen,
  initialTab = 'candidate',
  onClose,
  onOpenCandidateRegister,
  onOpenEmployerModal,
}) => {
  const [activeTab, setActiveTab] = useState<'candidate' | 'employer'>(initialTab);

  if (!isOpen) return null;

  const docs = REQUIRED_DOCUMENTS.filter(
    (d) => d.targetAudience === activeTab
  );

  return (
    <div role="dialog" aria-modal="true" aria-label="Candidate and employer documents" className="strata-modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="strata-modal-panel relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-slate-100 bg-[#fbfbfa] flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
              Statutory Compliance & Documentation Hub
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
              {activeTab === 'candidate'
                ? 'Candidate Onboarding Document Checklist'
                : 'Employer Service Terms & Onboarding Pack'}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {activeTab === 'candidate'
                ? 'What you must provide to be placed into work and receive weekly pay across the UK.'
                : 'Required agreements, health & safety site packs, and statutory AWR declarations.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="px-6 sm:px-8 pt-4 pb-2 border-b border-slate-100 flex items-center justify-between">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab('candidate')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'candidate'
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Candidate Documents
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('employer')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'employer'
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Employer Pack & SLA
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>GLAA & REC Audited Standards</span>
          </div>
        </div>

        {/* Content List */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {docs.map((doc, idx) => (
              <div
                key={doc.id}
                className="p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {doc.category}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      doc.mandatory
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {doc.mandatory ? 'Mandatory UK Requirement' : 'Sector Specific'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-950 mb-1.5">{doc.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-3">
                  {doc.description}
                </p>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                  <span className="font-medium">Accepted Verification:</span>
                  <span className="font-semibold text-slate-950 text-right">{doc.acceptedFormats}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs text-blue-900 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Zero Candidate Fee Commitment: </span>
              Under the Employment Agencies Act 1973 and REC Code of Conduct, Strata Workforce never charges fees for job searching, candidate registration, interview scheduling, or compliance processing.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-5 border-t border-slate-100 bg-[#fbfbfa] flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Questions on documentation? Call compliance on <strong>0800 246 8900</strong>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Close
            </button>
            {activeTab === 'candidate' && onOpenCandidateRegister ? (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCandidateRegister();
                }}
                className="px-5 py-2 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors"
              >
                Register CV Now
              </button>
            ) : onOpenEmployerModal ? (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenEmployerModal();
                }}
                className="px-5 py-2 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors"
              >
                Request Staffing SLA
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
