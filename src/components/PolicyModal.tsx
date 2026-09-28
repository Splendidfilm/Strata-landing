import React from 'react';
import { X, ShieldCheck, Printer } from 'lucide-react';
import { POLICIES_DATA } from '../data/mockData';

interface PolicyModalProps {
  policyKey: string | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyKey, onClose }) => {
  if (!policyKey) return null;

  const policy = POLICIES_DATA[policyKey];
  if (!policy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-20 border-b border-slate-200/90 px-6 sm:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
              <ShieldCheck className="w-5 h-5 text-slate-800" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                {policy.title}
              </h2>
              <div className="text-xs sm:text-sm text-slate-500 font-mono font-medium">
                {policy.code} · {policy.effectiveDate}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-7">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/90 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <span className="font-bold text-slate-950 font-display">Executive Summary: </span>
            {policy.summary}
          </div>

          <div className="space-y-6">
            {policy.sections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-950 font-display">
                  {section.heading}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-slate-500">
            <div className="font-medium">
              Strata Workforce Statutory Governance & Compliance Board
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-950 text-white rounded-xl hover:bg-slate-800 text-sm font-bold uppercase tracking-wider"
            >
              Close Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
