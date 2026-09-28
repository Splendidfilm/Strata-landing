import React, { useState } from 'react';
import {
  X,
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  User,
  MapPin,
  Clock,
  Briefcase,
} from 'lucide-react';
import { SECTORS_DATA, REQUIRED_DOCUMENTS } from '../data/mockData';

interface CandidateRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDocumentsModal: () => void;
}

export const CandidateRegisterModal: React.FC<CandidateRegisterModalProps> = ({
  isOpen,
  onClose,
  onOpenDocumentsModal,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [sector, setSector] = useState(SECTORS_DATA[0].name);
  const [employmentType, setEmploymentType] = useState('Any (Temporary or Permanent)');
  const [rightToWork, setRightToWork] = useState(false);
  const [rightToWorkType, setRightToWorkType] = useState('UK / Irish Passport');
  const [fileName, setFileName] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!rightToWork) {
      setErrorMsg('You must confirm your legal Right to Work in the UK.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setLocation('');
    setFileName(null);
    setMessage('');
    setRightToWork(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-slate-100 bg-[#fbfbfa] flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              Fast-Track Candidate Registration
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
              Register Your CV with Strata
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Zero candidate fees. Direct access to temporary shifts, permanent careers, and accredited training.
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-950">Registration Submitted Successfully!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{fullName}</strong>. Your profile has been assigned to our {sector} team. A specialist consultant will contact you within 4 hours to verify your credentials.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 max-w-md mx-auto space-y-2">
                <div className="font-bold text-slate-900">Next Step Checklist:</div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Prepare your original Right to Work document or share code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Have your Proof of Address (dated within 3 months) ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Ensure your 2 years referee details are up to date</span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-slate-950 text-white text-sm font-bold hover:bg-slate-800 transition-colors"
                >
                  Done & Return to Jobs
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="sarah.jenkins@example.co.uk"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    UK Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="07123 456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Location / Postcode
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Manchester, M13"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Primary Sector
                  </label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                  >
                    {SECTORS_DATA.map((sec) => (
                      <option key={sec.id} value={sec.name}>
                        {sec.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Employment Type Preference
                  </label>
                  <select
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                  >
                    <option value="Any (Temporary or Permanent)">Any (Temporary or Permanent)</option>
                    <option value="Temporary / Shift Cover">Temporary / Shift Cover</option>
                    <option value="Permanent Placement">Permanent Placement</option>
                    <option value="Fixed Term Contract">Fixed Term Contract</option>
                  </select>
                </div>
              </div>

              {/* Right to Work Verification Declaration */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Statutory UK Right to Work Declaration</span>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenDocumentsModal}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 underline"
                  >
                    View Document Rules
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'UK / Irish Passport',
                    'Home Office Share Code',
                    'BRP / Settled Status',
                  ].map((docType) => (
                    <button
                      key={docType}
                      type="button"
                      onClick={() => setRightToWorkType(docType)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border text-left transition-colors ${
                        rightToWorkType === docType
                          ? 'bg-white border-slate-900 text-slate-950 shadow-xs'
                          : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white'
                      }`}
                    >
                      {docType}
                    </button>
                  ))}
                </div>

                <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={rightToWork}
                    onChange={(e) => setRightToWork(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-slate-950 focus:ring-slate-900"
                  />
                  <span className="text-xs text-slate-700 leading-snug">
                    I confirm that I possess valid, legal entitlement to work in the UK via <strong>{rightToWorkType}</strong> and agree to provide original documentation prior to my first shift.
                  </span>
                </label>
              </div>

              {/* CV Upload */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Upload CV (PDF, DOCX, or RTF)
                </label>
                <label className="border-2 border-dashed border-slate-200 hover:border-slate-400 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors bg-[#fbfbfa]">
                  <Upload className="w-6 h-6 text-slate-400 mb-1" />
                  <span className="text-xs font-semibold text-slate-700">
                    {fileName ? fileName : 'Click to select or drag and drop your CV'}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5">Maximum size 10MB</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.rtf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Optional Note */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Additional Notes (Qualifications, Licences, Shift Preferences)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Hold CSCS Black card, available for night shifts immediately..."
                  className="w-full px-4 py-2 text-sm rounded-xl border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold uppercase tracking-wider transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Registering...' : 'Submit Registration'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
