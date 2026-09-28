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
import { JobVacancy, WorkforceService } from './types';

export default function App() {
  // Modal states
  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);
  const [isEmployerModalOpen, setIsEmployerModalOpen] = useState(false);
  const [selectedServiceForEmployer, setSelectedServiceForEmployer] = useState<string | undefined>();
  const [selectedPolicyKey, setSelectedPolicyKey] = useState<string | null>(null);

  // Search and filter state for jobs
  const [jobSearchFilter, setJobSearchFilter] = useState({
    keyword: '',
    location: '',
    sector: '',
  });

  const handleSearch = (keyword: string, location: string, sector: string) => {
    setJobSearchFilter({ keyword, location, sector });
    const jobsElement = document.getElementById('jobs');
    if (jobsElement) {
      jobsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      />

      <main className="flex-1">
        {/* 2. HERO */}
        <Hero
          onSearch={handleSearch}
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

        {/* 5. EMPLOYER CTA */}
        <EmployerSection
          onRequestServices={() => handleOpenEmployerModal()}
        />

        {/* 6. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 7. ABOUT SECTION */}
        <AboutSection
          onRequestQuote={() => handleOpenEmployerModal()}
        />

        {/* 8. SECTORS */}
        <SectorsGrid
          onSelectSector={handleSelectSector}
        />

        {/* 9. TESTIMONIALS */}
        <Testimonials />

        {/* 10. GALLERY / EVENTS */}
        <GallerySection />

        {/* 11. FINAL CTA */}
        <FinalCta
          onFindJob={handleNavigateToJobs}
          onHireStaff={() => handleOpenEmployerModal()}
        />
      </main>

      {/* 12. FOOTER */}
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

      <PolicyModal
        policyKey={selectedPolicyKey}
        onClose={() => setSelectedPolicyKey(null)}
      />
    </div>
  );
}
