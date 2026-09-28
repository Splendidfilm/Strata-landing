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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-20 border-b border-slate-200/80 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-slate-800" />
            <div>
              <h2 className="text-lg font-bold text-slate-950 font-display">
                {policy.title}
              </h2>
              <div className="text-[11px] text-slate-500 font-mono">
                {policy.code} · {policy.effectiveDate}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">Executive Summary: </span>
            {policy.summary}
          </div>

          <div className="space-y-6">
            {policy.sections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-sm font-bold text-slate-950 font-display">
                  {section.heading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <div>
              Strata Workforce Statutory Governance & Compliance Board
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 text-xs font-semibold"
            >
              Close Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
