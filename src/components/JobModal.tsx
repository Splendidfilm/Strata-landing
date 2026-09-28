import React, { useState } from 'react';
import { X, MapPin, Banknote, Calendar, Check, AlertCircle, Upload, CheckCircle2, ShieldCheck } from 'lucide-react';
import { JobVacancy } from '../types';

interface JobModalProps {
  job: JobVacancy | null;
  onClose: () => void;
}

export const JobModal: React.FC<JobModalProps> = ({ job, onClose }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'apply'>('details');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    hasRightToWork: false,
    cvFileName: '',
    coverNote: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!job) return null;

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name, email, and contact phone number.');
      return;
    }

    if (!formData.hasRightToWork) {
      setErrorMessage('You must confirm you possess valid right to work in the UK.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        cvFileName: e.target.files![0].name,
      }));
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white z-20 border-b border-slate-200/80 px-6 py-4 flex items-start justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-500 mb-1 flex items-center gap-2">
              <span>{job.sector}</span>
              <span aria-hidden="true">·</span>
              <span>{job.employmentType}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-slate-400">{job.referenceCode}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
              {job.title}
            </h2>
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

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 px-6 bg-slate-50/70">
          <button
            type="button"
            onClick={() => setActiveTab('details')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'details'
                ? 'border-slate-950 text-slate-950'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Role Specifications
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('apply')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'apply'
                ? 'border-slate-950 text-slate-950'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Apply Online
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {activeTab === 'details' ? (
            <div className="space-y-6">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-xs font-semibold text-slate-900 flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{job.location}</span>
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Remuneration</div>
                  <div className="text-xs font-semibold text-slate-900 flex items-center gap-1.5 mt-1">
                    <Banknote className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Application Cutoff</div>
                  <div className="text-xs font-semibold text-slate-900 flex items-center gap-1.5 mt-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{job.closingDate}</span>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Position Overview
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {job.fullDescription}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key Responsibilities
                </h3>
                <ul className="space-y-2">
                  {job.keyResponsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Requirements & Accreditations
                </h3>
                <ul className="space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Benefits & Remuneration Package
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {job.benefits.map((b, i) => (
                    <div key={i} className="p-2.5 bg-slate-50 rounded-lg text-xs text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Safe Recruitment & Fee-Free Guarantee</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('apply')}
                  className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm"
                >
                  Proceed to Application
                </button>
              </div>
            </div>
          ) : isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-950 font-display">
                Application Successfully Submitted
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your application for <span className="font-semibold text-slate-900">{job.title}</span> (Ref: {job.referenceCode}) has been received by our specialist recruiter.
              </p>
              <p className="text-xs text-slate-500">
                Our sector consultant will review your credentials and contact you within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleApplySubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="app-name" className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="app-name"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Davies"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="app-email" className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="app-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. j.davies@example.co.uk"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="app-phone" className="block text-xs font-medium text-slate-700 mb-1">
                    UK Telephone / Mobile *
                  </label>
                  <input
                    id="app-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 07123 456789"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Attach CV (Optional at this stage)
                  </label>
                  <div className="relative border border-dashed border-slate-300 rounded-lg p-2.5 flex items-center justify-between text-xs text-slate-500 hover:border-slate-400 cursor-pointer">
                    <span className="truncate">
                      {formData.cvFileName || 'Select PDF or DOCX file'}
                    </span>
                    <Upload className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="app-notes" className="block text-xs font-medium text-slate-700 mb-1">
                  Brief Cover Note or Availability (Optional)
                </label>
                <textarea
                  id="app-notes"
                  rows={3}
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  placeholder="Outline relevant certifications, notice period, or shift preferences..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                />
              </div>

              {/* Right to work confirmation */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasRightToWork}
                    onChange={(e) => setFormData({ ...formData, hasRightToWork: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                  />
                  <span className="text-xs text-slate-600 leading-normal">
                    I confirm I hold valid legal Right to Work in the United Kingdom (e.g. UK/Irish citizen, Settled Status, or valid work visa) and consent to Strata processing my details for recruitment.
                  </span>
                </label>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Back to Details
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
