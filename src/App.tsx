import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesPreview } from './components/ServicesPreview';
import { FeaturedJobs } from './components/FeaturedJobs';
import { EmployerSection } from './components/EmployerSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { SectorsGrid } from './components/SectorsGrid';
import { Testimonials } from './components/Testimonials';
import { GallerySection } from './components/GallerySection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { JobModal } from './components/JobModal';
import { EmployerModal } from './components/EmployerModal';
import { PolicyModal } from './components/PolicyModal';
import { CandidateRegisterModal } from './components/CandidateRegisterModal';
import { DocumentsModal } from './components/DocumentsModal';
import { JobVacancy, WorkforceService } from './types';

export default function App() {
  // Modal states
  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);
  const [isEmployerModalOpen, setIsEmployerModalOpen] = useState(false);
  const [selectedServiceForEmployer, setSelectedServiceForEmployer] = useState<string | undefined>();
  const [selectedPolicyKey, setSelectedPolicyKey] = useState<string | null>(null);
  const [isCandidateRegisterOpen, setIsCandidateRegisterOpen] = useState(false);
  const [documentsModalState, setDocumentsModalState] = useState<{
    isOpen: boolean;
    tab: 'candidate' | 'employer';
  }>({
    isOpen: false,
    tab: 'candidate',
  });

  // Search and filter state for jobs
  const [jobSearchFilter, setJobSearchFilter] = useState({
    keyword: '',
    location: '',
    sector: '',
  });

  const handleClearFilters = () => {
    setJobSearchFilter({
      keyword: '',
      location: '',
      sector: '',
    });
  };

  const handleOpenEmployerModal = (serviceId?: string) => {
    setSelectedServiceForEmployer(serviceId);
    setIsEmployerModalOpen(true);
  };

  const handleNavigateToJobs = () => {
    const jobsElement = document.getElementById('jobs');
    if (jobsElement) {
      jobsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCandidateRegister = () => {
    setIsCandidateRegisterOpen(true);
  };

  const handleOpenDocumentsModal = (tab: 'candidate' | 'employer' = 'candidate') => {
    setDocumentsModalState({
      isOpen: true,
      tab,
    });
  };

  const handleSelectSector = (sectorName: string) => {
    setJobSearchFilter((prev) => ({
      ...prev,
      sector: sectorName,
    }));
    const jobsElement = document.getElementById('jobs');
    if (jobsElement) {
      jobsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: WorkforceService) => {
    handleOpenEmployerModal(service.id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfa] text-slate-800 antialiased font-sans selection:bg-slate-900 selection:text-white">
      {/* 1. NAVBAR */}
      <Navbar
        onOpenEmployerModal={() => handleOpenEmployerModal()}
        onNavigateToJobs={handleNavigateToJobs}
        onOpenCandidateRegister={handleOpenCandidateRegister}
        onOpenDocumentsModal={() => handleOpenDocumentsModal('candidate')}
      />

      <main className="flex-1">
        {/* 2. HERO */}
        <Hero
          onOpenEmployerModal={() => handleOpenEmployerModal()}
          onNavigateToJobs={handleNavigateToJobs}
        />

        {/* 3. SERVICES PREVIEW */}
        <ServicesPreview
          onSelectService={handleSelectService}
          onRequestService={(serviceId) => handleOpenEmployerModal(serviceId)}
        />

        {/* 4. FEATURED JOBS */}
        <FeaturedJobs
          onSelectJob={(job) => setSelectedJob(job)}
          searchFilter={jobSearchFilter}
          onClearFilters={handleClearFilters}
        />

        {/* EMPLOYER CTA */}
        <EmployerSection
          onRequestServices={() => handleOpenEmployerModal()}
          onOpenDocumentsModal={() => handleOpenDocumentsModal('employer')}
        />

        {/* WHY STRATA */}
        <WhyChooseUs />

        {/* ABOUT */}
        <AboutSection
          onRequestQuote={() => handleOpenEmployerModal()}
        />

        {/* SECTORS */}
        <SectorsGrid
          onSelectSector={handleSelectSector}
        />

        {/* 10. TESTIMONIALS */}
        <Testimonials />

        {/* 11. GALLERY / EVENTS */}
        <GallerySection />

        {/* 12. FINAL CTA */}
        <FinalCta
          onFindJob={handleNavigateToJobs}
          onHireStaff={() => handleOpenEmployerModal()}
        />
      </main>

      {/* 13. FOOTER */}
      <Footer
        onOpenPolicy={(policyKey) => setSelectedPolicyKey(policyKey)}
        onOpenEmployerModal={() => handleOpenEmployerModal()}
        onNavigateToJobs={handleNavigateToJobs}
        onSelectSector={handleSelectSector}
      />

      {/* MODALS */}
      <JobModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      <EmployerModal
        isOpen={isEmployerModalOpen}
        onClose={() => {
          setIsEmployerModalOpen(false);
          setSelectedServiceForEmployer(undefined);
        }}
        initialServiceId={selectedServiceForEmployer}
      />

      <CandidateRegisterModal
        isOpen={isCandidateRegisterOpen}
        onClose={() => setIsCandidateRegisterOpen(false)}
        onOpenDocumentsModal={() => {
          setIsCandidateRegisterOpen(false);
          handleOpenDocumentsModal('candidate');
        }}
      />

      <DocumentsModal
        isOpen={documentsModalState.isOpen}
        initialTab={documentsModalState.tab}
        onClose={() => setDocumentsModalState((prev) => ({ ...prev, isOpen: false }))}
        onOpenCandidateRegister={() => {
          setDocumentsModalState((prev) => ({ ...prev, isOpen: false }));
          setIsCandidateRegisterOpen(true);
        }}
        onOpenEmployerModal={() => {
          setDocumentsModalState((prev) => ({ ...prev, isOpen: false }));
          handleOpenEmployerModal();
        }}
      />

      <PolicyModal
        policyKey={selectedPolicyKey}
        onClose={() => setSelectedPolicyKey(null)}
      />
    </div>
  );
}
