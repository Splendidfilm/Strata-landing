export interface JobVacancy {
  id: string;
  title: string;
  location: string;
  employmentType: 'Permanent' | 'Temporary' | 'Contract' | 'Full-time';
  sector: string;
  salary: string;
  shortDescription: string;
  fullDescription: string;
  keyResponsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
  referenceCode: string;
  closingDate: string;
}

export interface WorkforceService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  suitableFor: string;
  turnaround: string;
  complianceLevel: string;
  featured?: boolean;
}

export interface SectorItem {
  id: string;
  name: string;
  description: string;
  activeVacancies: number;
  keyDisciplines: string[];
  ukDemandTrend: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  organisation: string;
  location: string;
  quote: string;
  outcome: string;
  type: 'employer' | 'candidate';
}

export interface GalleryItem {
  id: string;
  category: 'Recruitment Events' | 'Training' | 'Community' | 'Team';
  title: string;
  location: string;
  description: string;
  imagePath: string;
}

export interface PolicyDocument {
  id: string;
  title: string;
  code: string;
  effectiveDate: string;
  summary: string;
  sections: {
    heading: string;
    body: string;
  }[];
}
