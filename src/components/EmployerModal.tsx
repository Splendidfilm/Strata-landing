import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Building2, Phone, Mail, Clock, Users } from 'lucide-react';
import { SERVICES_DATA, SECTORS_DATA } from '../data/mockData';

interface EmployerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const EmployerModal: React.FC<EmployerModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    jobTitle: '',
    workEmail: '',
    phoneNumber: '',
    serviceNeeded: initialServiceId || 'temporary-staffing',
    sector: 'Logistics',
    headcount: '1-5 Staff',
    timeframe: 'Within 7 Days',
    projectBrief: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (
      !formData.companyName.trim() ||
      !formData.contactName.trim() ||
      !formData.workEmail.trim() ||
      !formData.phoneNumber.trim()
    ) {
      setErrorMessage('Please complete all required company and contact information.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="strata-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="strata-modal-panel bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-20 border-b border-slate-200/90 px-6 sm:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center shadow-xs">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                Request Recruitment & Workforce Services
              </h2>
              <p className="text-sm text-slate-600 font-medium">
                UK Nationwide Staffing · Fast Response Dispatch
              </p>
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
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                Service Request Received
              </h3>
              <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                Thank you, <span className="font-bold text-slate-900">{formData.contactName}</span> at <span className="font-bold text-slate-900">{formData.companyName}</span>. A Senior Workforce Account Manager will review your requirements and reach out within 60 minutes.
              </p>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-left text-sm space-y-2 max-w-md mx-auto">
                <div className="text-slate-500 uppercase tracking-wider font-bold text-xs">
                  Request Reference: STR-REQ-{(Math.random() * 90000 + 10000).toFixed(0)}
                </div>
                <div className="text-slate-800">
                  <span className="font-bold">Selected Service:</span>{' '}
                  {SERVICES_DATA.find((s) => s.id === formData.serviceNeeded)?.title || formData.serviceNeeded}
                </div>
                <div className="text-slate-800">
                  <span className="font-bold">Estimated Headcount:</span> {formData.headcount}
                </div>
                <div className="text-slate-800">
                  <span className="font-bold">Timeline:</span> {formData.timeframe}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 bg-slate-950 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm font-semibold rounded-xl flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="comp-name" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Organisation / Company Name *
                  </label>
                  <input
                    id="comp-name"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Logistics UK Ltd"
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-name" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Contact Name & Title *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins (Operations Director)"
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="work-email" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Business Email *
                  </label>
                  <input
                    id="work-email"
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="s.jenkins@apexlogistics.co.uk"
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Direct Telephone *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="0161 800 0000 or 07..."
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* Service & Sector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <label htmlFor="service-needed" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Required Service Solution *
                  </label>
                  <select
                    id="service-needed"
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-medium"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                    <option value="one-off-deployment">One-Off Urgent Staff Deployment</option>
                    <option value="training-career">Training & Workforce Development</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="comp-sector" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Industry Sector *
                  </label>
                  <select
                    id="comp-sector"
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-medium"
                  >
                    {SECTORS_DATA.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Other">Other UK Sector</option>
                  </select>
                </div>
              </div>

              {/* Headcount & Timeframe */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="staff-headcount" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Estimated Headcount
                  </label>
                  <select
                    id="staff-headcount"
                    value={formData.headcount}
                    onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-medium"
                  >
                    <option value="1-5 Staff">1 to 5 Staff</option>
                    <option value="6-20 Staff">6 to 20 Staff</option>
                    <option value="21-50 Staff">21 to 50 Staff</option>
                    <option value="50+ Volume Contingent">50+ Volume Contingent Team</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="staff-timeframe" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Required Deployment Timeframe
                  </label>
                  <select
                    id="staff-timeframe"
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white font-medium"
                  >
                    <option value="Immediate (< 24 Hours)">Immediate Emergency (&lt; 24 Hours)</option>
                    <option value="Within 7 Days">Within 7 Days</option>
                    <option value="Within 2-4 Weeks">Within 2–4 Weeks</option>
                    <option value="Planning / Tender Stage">Planning / Tender Stage</option>
                  </select>
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label htmlFor="project-brief" className="block text-sm font-bold text-slate-800 mb-1.5">
                  Brief Requirements / Job Roles / Site Location
                </label>
                <textarea
                  id="project-brief"
                  rows={3}
                  value={formData.projectBrief}
                  onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                  placeholder="Outline key roles, shift patterns, site postcodes, or specific certifications required (e.g. CSCS, NMC, FLT)..."
                  className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none font-medium"
                />
              </div>

              <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  Guaranteed 60-minute consultant callback
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? 'Transmitting Request...' : 'Submit Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
