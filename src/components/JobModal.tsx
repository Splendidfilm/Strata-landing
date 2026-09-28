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
      className="strata-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="strata-modal-panel bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white z-20 border-b border-slate-200/90 px-6 sm:px-8 py-5 flex items-start justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-600 mb-1 flex items-center gap-2">
              <span className="font-bold text-slate-800">{job.sector}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{job.employmentType}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="font-mono text-slate-400">{job.referenceCode}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
              {job.title}
            </h2>
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

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 px-6 sm:px-8 bg-slate-50/80">
          <button
            type="button"
            onClick={() => setActiveTab('details')}
            className={`py-3.5 px-5 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${
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
            className={`py-3.5 px-5 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${
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
            <div className="space-y-7">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location</div>
                  <div className="text-sm sm:text-base font-bold text-slate-950 flex items-center gap-1.5 mt-1">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>{job.location}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Remuneration</div>
                  <div className="text-sm sm:text-base font-bold text-slate-950 flex items-center gap-1.5 mt-1 font-mono">
                    <Banknote className="w-4 h-4 text-emerald-600" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Closing Date</div>
                  <div className="text-sm sm:text-base font-bold text-slate-950 flex items-center gap-1.5 mt-1">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span>{job.closingDate}</span>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-2 font-display">
                  Position Overview
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {job.fullDescription}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-3 font-display">
                  Key Responsibilities
                </h3>
                <ul className="space-y-2.5">
                  {job.keyResponsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-slate-950 shrink-0 mt-2" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-3 font-display">
                  Requirements & Accreditations
                </h3>
                <ul className="space-y-2.5">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-3 font-display">
                  Benefits & Remuneration Package
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.benefits.map((b, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-xl text-sm text-slate-800 font-medium flex items-center gap-2.5 border border-slate-100">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Safe Recruitment & Fee-Free Guarantee</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('apply')}
                  className="px-7 py-3.5 bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
                >
                  Proceed to Application
                </button>
              </div>
            </div>
          ) : isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-950 font-display">
                Application Successfully Submitted
              </h3>
              <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Your application for <span className="font-bold text-slate-900">{job.title}</span> (Ref: {job.referenceCode}) has been received by our specialist recruiter.
              </p>
              <p className="text-sm text-slate-500 font-medium">
                Our sector consultant will review your credentials and contact you within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-7 py-3 bg-slate-950 text-white text-sm font-bold rounded-xl hover:bg-slate-800"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleApplySubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm font-semibold rounded-xl flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="app-name" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="app-name"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Davies"
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="app-email" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="app-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. j.davies@example.co.uk"
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="app-phone" className="block text-sm font-bold text-slate-800 mb-1.5">
                    UK Telephone / Mobile *
                  </label>
                  <input
                    id="app-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 07123 456789"
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-1.5">
                    Attach CV (Optional at this stage)
                  </label>
                  <div className="relative border border-dashed border-slate-300 rounded-xl p-3 flex items-center justify-between text-sm text-slate-600 hover:border-slate-400 cursor-pointer">
                    <span className="truncate font-medium">
                      {formData.cvFileName || 'Select PDF or DOCX file'}
                    </span>
                    <Upload className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
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
                <label htmlFor="app-notes" className="block text-sm font-bold text-slate-800 mb-1.5">
                  Brief Cover Note or Availability (Optional)
                </label>
                <textarea
                  id="app-notes"
                  rows={3}
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  placeholder="Outline relevant certifications, notice period, or shift preferences..."
                  className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                />
              </div>

              {/* Right to work confirmation */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasRightToWork}
                    onChange={(e) => setFormData({ ...formData, hasRightToWork: e.target.checked })}
                    className="w-4 h-4 mt-1 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                  />
                  <span className="text-sm text-slate-700 leading-normal font-medium">
                    I confirm I hold valid legal Right to Work in the United Kingdom (e.g. UK/Irish citizen, Settled Status, or valid work visa) and consent to Strata processing my details for recruitment.
                  </span>
                </label>
              </div>

              <div className="pt-5 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className="text-sm font-bold text-slate-700 hover:text-slate-950"
                >
                  Back to Details
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm disabled:opacity-50"
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
