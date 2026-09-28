export interface WorkflowStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  timeframe: string;
  description: string;
  keyDeliverables: string[];
  audience: 'candidate' | 'employer';
  iconName: string;
}

export interface DocumentItem {
  id: string;
  category: string;
  name: string;
  description: string;
  mandatory: boolean;
  acceptedFormats: string;
  targetAudience: 'candidate' | 'employer';
}

export interface ComplianceStandard {
  id: string;
  name: string;
  body: string;
  badge: string;
  description: string;
  statutoryRef: string;
  keyProtections: string[];
}

export interface JobVacancy {
  id: string;
  title: string;
  location: string;
  employmentType: 'Permanent' | 'Temporary' | 'Contract' | 'Full-time';
  sector: string;
  salary: string;
  salaryType?: 'annual' | 'hourly' | 'daily';
  shortDescription: string;
  fullDescription: string;
  keyResponsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
  referenceCode: string;
  closingDate: string;
  urgency?: 'Immediate Start' | 'Actively Interviewing' | 'Urgent Requirement' | 'New Listing';
  clientType?: string;
  schedule?: string;
  applicantCount?: number;
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
