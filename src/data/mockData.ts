import {
  JobVacancy,
  WorkforceService,
  SectorItem,
  TestimonialItem,
  GalleryItem,
  PolicyDocument,
  WorkflowStep,
  DocumentItem,
  ComplianceStandard,
} from '../types';
import heroImage from '../assets/images/hero_uk_workforce_1790590906400.jpg';
import employerImage from '../assets/images/employer_workforce_solutions_1790590922449.jpg';
import galleryEventsImage from '../assets/images/gallery_recruitment_events_1790590933797.jpg';
import galleryTrainingImage from '../assets/images/gallery_workforce_training_1790590946836.jpg';
import galleryTeamImage from '../assets/images/gallery_team_community_1790590958746.jpg';

export const ASSETS = {
  hero: heroImage,
  employer: employerImage,
  galleryEvents: galleryEventsImage,
  galleryTraining: galleryTrainingImage,
  galleryTeam: galleryTeamImage,
};

export const SERVICES_DATA: WorkforceService[] = [
  {
    id: 'temporary-staffing',
    title: 'Temporary Staffing',
    tagline: 'Agile shift cover & contingent capacity',
    description:
      'Vetted, compliant personnel deployed at short notice to bridge seasonal peaks, planned leave, project surge requirements, and unexpected operational shortfalls.',
    deliverables: [
      'Pre-screened candidates available within 4 hours',
      'Real-time automated time & attendance tracking',
      'Full statutory AWR and pension management',
      '24/7 dedicated on-call staffing coordinator'
    ],
    suitableFor: 'Distribution hubs, manufacturing plants, care homes, and seasonal events requiring flexible day/night rosters.',
    turnaround: 'Under 4 Hours',
    complianceLevel: 'GLAA & REC Compliant',
    featured: true
  },
  {
    id: 'permanent-recruitment',
    title: 'Permanent Recruitment',
    tagline: 'Strategic talent acquisition for long-term growth',
    description:
      'Rigorous executive search, retained headhunting, and contingency placement for business-critical operational, managerial, and specialist technical roles.',
    deliverables: [
      'Comprehensive competitor & passive talent mapping',
      'Multi-stage competency & technical interviews',
      'Rigorous 100-day placement guarantee scheme',
      'Salary benchmarking & candidate offer negotiation'
    ],
    suitableFor: 'Mid-to-senior appointments, qualified clinical roles, project engineering leads, and departmental heads.',
    turnaround: '10–18 Working Days',
    complianceLevel: 'Full Right-to-Work & Reference Vetting'
  },
  {
    id: 'recruitment-campaigns',
    title: 'Recruitment Campaigns',
    tagline: 'High-volume programmatic hiring solutions',
    description:
      'End-to-end multi-channel hiring campaigns engineered for plant commissioning, regional site expansions, seasonal peak ramp-ups, and brand re-launches.',
    deliverables: [
      'Branded digital advertising & applicant attraction funnels',
      'Automated candidate assessment & phone screening',
      'Structured on-site assessment days and group trials',
      'Bulk induction scheduling & onboarding coordination'
    ],
    suitableFor: 'New distribution centre launches, retail peak periods, and infrastructure project scaling.',
    turnaround: 'Campaign Planning in 48 Hours',
    complianceLevel: 'Audited Equal Opportunities & GDPR'
  },
  {
    id: 'hr-recruitment-outsourcing',
    title: 'HR & Recruitment Outsourcing',
    tagline: 'Embedded talent acquisition & workforce governance',
    description:
      'Complete Managed Service Provider (MSP) and Recruitment Process Outsourcing (RPO) solutions that streamline supply chains and reduce contingent spend.',
    deliverables: [
      'Embedded on-site or virtual talent acquisition partners',
      'Second-tier vendor panel management & rate harmonisation',
      'Consolidated weekly invoicing & spend transparency',
      'Real-time compliance auditing & SLA dashboard reporting'
    ],
    suitableFor: 'Organisations spending over £500k annually on temporary agency labour seeking single-point accountability.',
    turnaround: 'Phased 30-Day Transition',
    complianceLevel: 'Master Vendor & SLA Audited'
  },
  {
    id: 'staff-deployment',
    title: 'Staff Deployment',
    tagline: 'Rapid one-off emergency crew mobilisation',
    description:
      'Fast-response mobilisation of fully equipped teams for scheduled shutdowns, urgent turnaround tasks, clean-up operations, and critical project deadlines.',
    deliverables: [
      'Transport-coordinated teams with assigned team leaders',
      'Pre-briefed task-specific safety & PPE compliance',
      'Daily site supervisor sign-off and productivity logs',
      'Single consolidated day-rate invoicing'
    ],
    suitableFor: 'Facility maintenance shutdowns, unplanned product recalls, emergency civils, and event setups.',
    turnaround: 'Immediate Dispatch / Same Day',
    complianceLevel: 'Site-Specific CSCS/IOSH/DBS Verified'
  },
  {
    id: 'training-career-development',
    title: 'Training & Career Development',
    tagline: 'Upskilling workers to match tomorrow’s skills needs',
    description:
      'Accredited vocational upskilling and career progression programs designed to bridge the UK skills gap, enhance workforce retention, and cultivate talent.',
    deliverables: [
      'NVQ / City & Guilds mapped vocational pathways',
      'Mandatory health, safety, food hygiene & manual handling',
      'Digital literacy and warehouse management system workshops',
      'Funded apprenticeship levy co-investment schemes'
    ],
    suitableFor: 'Employers looking to retain high-performing staff and candidates seeking career progression.',
    turnaround: 'Continuous Weekly Modules',
    complianceLevel: 'CPD & Sector Body Certified'
  }
];

export const FEATURED_JOBS: JobVacancy[] = [
  {
    id: 'job-01',
    title: 'Registered General Nurse (RGN) - Complex Care',
    location: 'Manchester (M13) / Greater Manchester',
    employmentType: 'Permanent',
    sector: 'Healthcare',
    salary: '£36,500 - £44,000 / annum + Enhancements',
    salaryType: 'annual',
    urgency: 'Immediate Start',
    clientType: 'NHS Trust Supply Partner',
    schedule: 'Full-Time (37.5 hrs) · Rotational Shifts',
    applicantCount: 8,
    shortDescription:
      'Leading private healthcare group seeking an experienced RGN to provide clinical leadership across an acute recovery and rehabilitation ward.',
    fullDescription:
      'We are recruiting on behalf of a prestigious regional NHS trust partner in Central Manchester. As a Senior Clinical Nurse, you will deliver evidence-based nursing interventions, mentor junior healthcare assistants, and oversee patient care planning within a purpose-built recovery facility.',
    keyResponsibilities: [
      'Coordinate and deliver bespoke nursing care plans for post-acute patients',
      'Administer controlled medications in line with NMC Code and trust guidelines',
      'Lead handovers between shift rotations and liaise with multidisciplinary teams',
      'Mentor newly registered staff and support continuing clinical audit programs'
    ],
    requirements: [
      'Valid NMC Registration with active PIN',
      'Minimum 18 months post-qualification acute or complex care experience',
      'Evidence of recent CPD and up-to-date BLS/ALS certification',
      'Enhanced DBS check (can be processed via Strata Workforce)'
    ],
    benefits: [
      'NHS pension scheme equivalent option',
      'Generous weekend and unsocial hours enhancements (up to +35%)',
      'Full funding for clinical revalidation and NMC fees',
      'Dedicated employee wellness and mental health support'
    ],
    postedDate: '26 Sep 2026',
    referenceCode: 'STR-HC-8902',
    closingDate: '24 Oct 2026'
  },
  {
    id: 'job-02',
    title: 'Senior Site Logistics Coordinator',
    location: 'Birmingham (B24) / West Midlands',
    employmentType: 'Permanent',
    sector: 'Logistics',
    salary: '£38,000 - £42,500 / annum',
    salaryType: 'annual',
    urgency: 'Actively Interviewing',
    clientType: 'Tier-1 Multimodal Hub',
    schedule: 'Mon–Fri 07:00–16:00 (On-site)',
    applicantCount: 14,
    shortDescription:
      'Manage inventory throughput, dock scheduling, and transport allocation within a state-of-the-art 320,000 sq ft multimodal distribution facility.',
    fullDescription:
      'A Tier-1 UK supply chain operator is seeking a dedicated Logistics Coordinator to oversee dispatch operations, driver check-in, and inventory reconciliation at their flagship Midlands terminal.',
    keyResponsibilities: [
      'Oversee real-time inbound container unloading and outbound trailer schedules',
      'Coordinate yard management systems (YMS) and driver induction processes',
      'Liaise with customs compliance teams on post-Brexit cross-border shipments',
      'Track OTIF (On-Time In-Full) performance metrics across 12 major retail accounts'
    ],
    requirements: [
      'Proven experience in 3PL warehousing or transport planning (3+ years)',
      'Proficiency in SAP, Manhattan, or RedPrairie WMS systems',
      'Strong leadership skills with ability to supervise shift teams of 25+ colleagues',
      'CPC National qualification desirable but not strictly required'
    ],
    benefits: [
      'Annual company performance bonus (up to 10%)',
      'Private medical insurance for employee and immediate family',
      'Free on-site parking and electric vehicle charging',
      'Cycle to work scheme and retail voucher discounts'
    ],
    postedDate: '25 Sep 2026',
    referenceCode: 'STR-LOG-4411',
    closingDate: '19 Oct 2026'
  },
  {
    id: 'job-03',
    title: 'Site Manager - Commercial Refurbishment',
    location: 'Leeds (LS1) / West Yorkshire',
    employmentType: 'Contract',
    sector: 'Construction',
    salary: '£290 - £340 / day (CIS / Umbrella)',
    salaryType: 'daily',
    urgency: 'Urgent Requirement',
    clientType: 'National Main Contractor',
    schedule: 'Mon–Fri 07:30–17:00 (9 Months)',
    applicantCount: 6,
    shortDescription:
      'Lead on-site operations for a prestigious £4.2m commercial office retrofit project in central Leeds. 9-month initial contract with extension potential.',
    fullDescription:
      'Representing an established national main contractor, you will be responsible for day-to-day site supervision, subcontractor coordination, RAMS verification, and maintaining immaculate safety records through handover.',
    keyResponsibilities: [
      'Manage daily subcontractor progress briefings and permit-to-work systems',
      'Enforce CDM 2015 regulations and zero-harm health & safety protocols',
      'Conduct weekly client site progress walks and quality assurance checks',
      'Ensure material deliveries align precisely with the tight city-centre logistics window'
    ],
    requirements: [
      'Valid SMSTS (Site Management Safety Training Scheme) certification',
      'Black CSCS Manager card and First Aid at Work (3-day)',
      'Demonstrable track record delivering high-specification office fit-outs',
      'Strong verbal communication and digital site management reporting skills'
    ],
    benefits: [
      'Prompt weekly CIS payments via verified payroll partner',
      'Direct contact with dedicated Strata Construction Account Manager',
      'Follow-on contract opportunities across Yorkshire pipeline'
    ],
    postedDate: '24 Sep 2026',
    referenceCode: 'STR-CON-3091',
    closingDate: '15 Oct 2026'
  },
  {
    id: 'job-04',
    title: 'CNC Multi-Axis Machinist & Setter',
    location: 'Bristol (BS34) / South West',
    employmentType: 'Permanent',
    sector: 'Manufacturing',
    salary: '£37,000 - £45,000 / annum + Shift Allowance',
    salaryType: 'annual',
    urgency: 'New Listing',
    clientType: 'Aerospace Precision OEM',
    schedule: 'Rotating Early / Late Shifts',
    applicantCount: 5,
    shortDescription:
      'Precision aerospace machining facility seeking a skilled 5-axis Mazak/Heidenhain setter-operator producing tight-tolerance titanium components.',
    fullDescription:
      'Join an AS9100-certified engineering partner supporting UK civil aerospace and defence platforms. You will set and operate modern multi-axis machining centres to produce precision flight-critical components.',
    keyResponsibilities: [
      'Set and program 4 and 5-axis CNC milling centres (Fanuc / Heidenhain controls)',
      'Conduct in-process dimensional inspection using CMM, micrometers, and verniers',
      'Optimise tooling feeds and speeds to minimise cycle times and wear',
      'Maintain rigorous component traceability records in line with aerospace standards'
    ],
    requirements: [
      'Time-served engineering apprenticeship or NVQ Level 3 in Machining',
      'Hands-on experience with tight-tolerance machining (±0.005mm)',
      'Ability to interpret complex engineering drawings and GD&T geometric tolerancing',
      'Familiarity with 5S Lean manufacturing methods'
    ],
    benefits: [
      'Shift allowance of 25% for rotating early/late patterns',
      '33 days annual leave including bank holidays',
      'Contributory pension scheme up to 8% employer match',
      'Subsidised on-site canteen and free tooling kit allowance'
    ],
    postedDate: '23 Sep 2026',
    referenceCode: 'STR-MFG-7108',
    closingDate: '21 Oct 2026'
  },
  {
    id: 'job-05',
    title: 'Senior Accounts & Payroll Specialist',
    location: 'London (EC2M) / Hybrid (2 Days Home)',
    employmentType: 'Permanent',
    sector: 'Administration',
    salary: '£42,000 - £48,000 / annum',
    salaryType: 'annual',
    urgency: 'Actively Interviewing',
    clientType: 'City Professional Practice',
    schedule: 'Hybrid (3 Days Office, 2 WFH)',
    applicantCount: 19,
    shortDescription:
      'City of London professional services consultancy seeks an experienced payroll & finance specialist to administer end-to-end UK payroll and management accounts.',
    fullDescription:
      'Handling payroll operations for 450+ employees alongside purchase ledger and balance sheet reconciliations, this role offers autonomous ownership within a modern, collaborative team.',
    keyResponsibilities: [
      'Process monthly PAYE, National Insurance, auto-enrolment pensions, and HMRC returns',
      'Prepare month-end journals, accruals, prepayments, and variance analyses',
      'Address employee payroll queries promptly with discretion and professionalism',
      'Assist the Financial Controller with annual statutory audit preparations'
    ],
    requirements: [
      'CIPP qualification or AAT Level 4 completed or in progress',
      'Deep knowledge of UK employment taxation, statutory sick pay, and maternity leave',
      'Advanced Excel skills (XLOOKUP, Pivot Tables, Power Query)',
      'Experience with cloud accounting platforms (Xero, Sage 50 Cloud, or Workday)'
    ],
    benefits: [
      'Flexible working hours with 2 days remote per week',
      'Private health cover with Bupa',
      'Annual season ticket loan and gym membership contribution',
      'Dedicated budget for continuing professional financial qualifications'
    ],
    postedDate: '22 Sep 2026',
    referenceCode: 'STR-ADM-1882',
    closingDate: '18 Oct 2026'
  },
  {
    id: 'job-06',
    title: 'Residential Care Support Worker (NVQ 3)',
    location: 'Glasgow (G41) / Lanarkshire',
    employmentType: 'Temporary',
    sector: 'Social Care',
    salary: '£14.20 - £17.50 / hour + Holiday Accrual',
    salaryType: 'hourly',
    urgency: 'Immediate Start',
    clientType: 'Specialist Social Care Trust',
    schedule: 'Flexible Rotas (Days / Waking Nights)',
    applicantCount: 11,
    shortDescription:
      'Provide person-centred support for young adults with learning disabilities and autism in a high-quality residential care setting.',
    fullDescription:
      'We are seeking compassionate, reliable Support Workers to join our verified social care panel in Glasgow. Flexible day and waking-night shifts available to suit your availability.',
    keyResponsibilities: [
      'Support service users with daily living activities, social outings, and meal preparation',
      'Facilitate independent living skills and positive behavioural support plans',
      'Accurately maintain daily activity logs and medication administration records',
      'Provide empathetic emotional support in accordance with SSSC standards'
    ],
    requirements: [
      'SVQ / NVQ Level 2 or 3 in Health and Social Care',
      'Minimum 6 months UK care home or supported living experience',
      'Registration with SSSC (Scottish Social Services Council) or willing to register',
      'PVG scheme membership (Protection of Vulnerable Groups)'
    ],
    benefits: [
      'Weekly pay every Friday with full holiday pay entitlement',
      'Free uniform and initial training refreshers',
      'Easy smartphone shift booking system',
      'Opportunities to transition to permanent staff roles'
    ],
    postedDate: '21 Sep 2026',
    referenceCode: 'STR-SOC-5201',
    closingDate: '30 Oct 2026'
  },
  {
    id: 'job-07',
    title: 'HGV Class 1 (C+E) Trunking Driver',
    location: 'Northampton (NN4) / East Midlands',
    employmentType: 'Temporary',
    sector: 'Logistics',
    salary: '£19.50 - £24.00 / hour (PAYE / Umbrella)',
    salaryType: 'hourly',
    urgency: 'Immediate Start',
    clientType: 'National Distribution Network',
    schedule: 'Guaranteed 50 hrs/wk · Fixed Start Times',
    applicantCount: 16,
    shortDescription:
      'Clean depot-to-depot curtain-side trunking with no handballing required. Modern Euro 6 fleet with weekly pay every Friday.',
    fullDescription:
      'We are recruiting experienced Class 1 drivers for ongoing trunking operations out of Northampton. Regular fixed start times with day and night rotas available immediately.',
    keyResponsibilities: [
      'Safely operate modern articulated commercial vehicles on scheduled inter-depot trunk runs',
      'Conduct pre-trip and post-trip vehicle defect inspections in line with DVSA standards',
      'Maintain accurate digital tachograph compliance and EU drivers hours logs',
      'Liaise with transport planners upon arrival at distribution hubs'
    ],
    requirements: [
      'Valid UK Category C+E driving licence (minimum 12 months experience)',
      'Active Driver Qualification Card (DCPC) and Digital Tachograph card',
      'Maximum 6 penalty points (no DD, DR, or IN endorsements)',
      'Proven knowledge of UK drivers hours and working time directive'
    ],
    benefits: [
      'Guaranteed 10 hours paid per shift minimum',
      'Dedicated 24/7 on-call driver support consultant',
      'Clean modern fleet equipped with telematics and air-con',
      'Accrued holiday pay and pension scheme'
    ],
    postedDate: '20 Sep 2026',
    referenceCode: 'STR-LOG-9014',
    closingDate: '28 Oct 2026'
  },
  {
    id: 'job-08',
    title: 'Special Educational Needs (SEN) Teaching Assistant',
    location: 'Leeds (LS6) / West Yorkshire',
    employmentType: 'Permanent',
    sector: 'Education',
    salary: '£22,500 - £26,800 / annum (Term-Time Pro-Rata)',
    salaryType: 'annual',
    urgency: 'New Listing',
    clientType: 'Multi-Academy Trust',
    schedule: 'Mon–Fri 08:30–15:30 (Term-Time Only)',
    applicantCount: 7,
    shortDescription:
      'Support pupils with autism spectrum conditions (ASC) and speech and language needs within a nurturing secondary school academy.',
    fullDescription:
      'A welcoming and inclusive secondary academy in Headingley is seeking an empathetic SEN Teaching Assistant to work 1:1 and in small groups supporting Key Stage 3 and 4 students.',
    keyResponsibilities: [
      'Deliver tailored 1:1 intervention sessions focusing on literacy and communication targets',
      'Support classroom teachers with differentiated lesson resources and sensory breaks',
      'Implement positive behaviour management techniques and emotion-coaching strategies',
      'Record student progress and contribute to EHCP (Education, Health and Care Plan) reviews'
    ],
    requirements: [
      'Level 2 or 3 Teaching Assistant qualification or relevant degree in Education/Psychology',
      'Experience supporting children with SEN in a school or specialist provision',
      'Enhanced child workforce DBS on the DBS Update Service (or willing to apply)',
      'Patience, resilience, and excellent interpersonal skills'
    ],
    benefits: [
      'School holidays off (13 weeks annual leave per year)',
      'Local Government Pension Scheme (LGPS)',
      'Continuous CPD in Makaton, Team-Teach, and trauma-informed practices'
    ],
    postedDate: '19 Sep 2026',
    referenceCode: 'STR-EDU-3312',
    closingDate: '22 Oct 2026'
  }
];

export const SECTORS_DATA: SectorItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Specialist clinical staffing for NHS Trusts, independent hospitals, and primary care networks.',
    activeVacancies: 142,
    keyDisciplines: ['RGN Nurses', 'Theatre Practitioners', 'Radiographers', 'Midwives', 'Clinical Leads'],
    ukDemandTrend: 'High Continuous UK Demand'
  },
  {
    id: 'social-care',
    name: 'Social Care',
    description: 'Empathetic, fully vetted support staff for residential homes, supported living, and community care.',
    activeVacancies: 98,
    keyDisciplines: ['Care Assistants', 'Support Workers', 'Registered Home Managers', 'Senior Carers'],
    ukDemandTrend: 'Growing Regional Demand'
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'CSCS-accredited trades, site managers, plant operators, and civil engineering specialists.',
    activeVacancies: 115,
    keyDisciplines: ['Site Managers', 'CSCS Labourers', 'Groundworkers', 'Electricians', 'Quantity Surveyors'],
    ukDemandTrend: 'Infrastructure Expansion'
  },
  {
    id: 'logistics',
    name: 'Logistics & Warehousing',
    description: 'Volume warehouse operatives, FLT drivers, transport planners, and freight coordinators.',
    activeVacancies: 210,
    keyDisciplines: ['Reach/Counterbalance FLT', 'Pick & Pack Operatives', 'Transport Planners', 'HGV Class 1/2'],
    ukDemandTrend: 'High Peak Surge'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Events',
    description: 'Professional front-of-house, kitchen brigade, banqueting staff, and event coordinators.',
    activeVacancies: 64,
    keyDisciplines: ['Head Chefs', 'Sous Chefs', 'Event Supervisors', 'Baristas', 'Banqueting Waiters'],
    ukDemandTrend: 'Seasonal & Weekend Peaks'
  },
  {
    id: 'administration',
    name: 'Administration & Office',
    description: 'Executive support, customer service specialists, data controllers, and operational administrators.',
    activeVacancies: 87,
    keyDisciplines: ['Office Managers', 'Payroll Specialists', 'Customer Service Reps', 'Executive Assistants'],
    ukDemandTrend: 'Steady Nationwide'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Engineering',
    description: 'Precision machinists, assembly technicians, maintenance engineers, and QA inspectors.',
    activeVacancies: 130,
    keyDisciplines: ['CNC Setters', 'Maintenance Technicians', 'Assembly Workers', 'Quality Engineers'],
    ukDemandTrend: 'Advanced Technical Demand'
  },
  {
    id: 'education',
    name: 'Education & Early Years',
    description: 'Safeguarded educators, SEN teaching assistants, and nursery practitioners for UK schools.',
    activeVacancies: 72,
    keyDisciplines: ['Cover Supervisors', 'SEN Teaching Assistants', 'Early Years Practitioners', 'Exam Invigilators'],
    ukDemandTrend: 'Term-Time Specialist Need'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-01',
    author: 'Markus H. Langford',
    role: 'Head of Supply Chain Operations',
    organisation: 'Midlands Gateway Logistics Ltd (Northampton Hub)',
    location: 'Northampton',
    quote:
      'During Black Friday peak trading, we required 180 verified warehouse operatives within 5 days across our 3-shift pattern. Strata delivered 100% headcount fulfillment with zero downtime and immaculate right-to-work compliance. Their on-site coordinator is second to none.',
    outcome: '180 Operatives Deployed with 99.2% Shift Attendance',
    type: 'employer'
  },
  {
    id: 'test-02',
    author: 'Rachel Thornton',
    role: 'Clinical Governance & Nursing Director',
    organisation: 'St. Jude Independent Healthcare Group',
    location: 'Cheshire',
    quote:
      'Finding senior nurses with specific acute recovery competencies used to consume weeks of administrative effort. Strata presented a pre-audited shortlist of 4 candidates within 8 working days. Two accepted permanent offers and both have exceeded clinical benchmarks.',
    outcome: 'Average Time-to-Hire Reduced from 42 Days to 14 Days',
    type: 'employer'
  },
  {
    id: 'test-03',
    author: 'David MacIntyre',
    role: 'Operations Project Director',
    organisation: 'Caledonian Civils & Infrastructure',
    location: 'Glasgow',
    quote:
      'Their emergency staff deployment team mobilized a certified civils squad to our rail embankment project within 6 hours following unseasonal storms. The personnel arrived with complete PPE, verified CSCS records, and direct supervisory leadership.',
    outcome: 'Critical Infrastructure Reopened 36 Hours Ahead of Target',
    type: 'employer'
  },
  {
    id: 'test-04',
    author: 'Gemma O’Connor',
    role: 'Senior Clinical Sister (Band 6 equivalent)',
    organisation: 'Placed at St. Mary Recovery Centre',
    location: 'Manchester',
    quote:
      'The healthcare team at Strata genuinely listened to my clinical career aspirations and work-life balance requirements. They handled my revalidation paperwork seamlessly and negotiated an outstanding permanent remuneration package.',
    outcome: 'Secured Permanent Ward Leadership Role with Flexible Shifts',
    type: 'candidate'
  },
  {
    id: 'test-05',
    author: 'Tariq Al-Mansoor',
    role: 'Precision 5-Axis CNC Specialist',
    organisation: 'Placed at Advanced Aerospace Components',
    location: 'Bristol',
    quote:
      'Unlike high-street agencies that treat you like a number, Strata’s engineering consultant actually understood Mazak machine languages and GD&T drawings. They briefed me thoroughly before every interview and secured a £44,000 package.',
    outcome: 'Transitioned from Zero-Hours Contract to Secure Permanent Career',
    type: 'candidate'
  },
  {
    id: 'test-06',
    author: 'Chloe Bellingham',
    role: 'Transport Logistics Administrator',
    organisation: 'Placed at Premier Freight Terminals',
    location: 'Birmingham',
    quote:
      'I started through Strata as a temporary night-shift clerk. After 4 months of consistent shifts and weekly pay on time every Friday, the client offered to take me on permanently. Strata made the entire career transition effortless.',
    outcome: 'Promoted to Full-Time Permanent Freight Coordinator',
    type: 'candidate'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-01',
    category: 'Recruitment Events',
    title: 'Manchester Careers & Skills Expo 2026',
    location: 'Manchester Central Convention Complex',
    description: 'Connecting over 850 candidates with prospective regional employers and vocational training specialists.',
    imagePath: ASSETS.galleryEvents
  },
  {
    id: 'gal-02',
    category: 'Training',
    title: 'Vocational Engineering & Automation Academy',
    location: 'Midlands Technical Training Facility',
    description: 'Hands-on practical modules preparing candidates for multi-axis CNC and automated warehouse roles.',
    imagePath: ASSETS.galleryTraining
  },
  {
    id: 'gal-03',
    category: 'Team',
    title: 'Our Regional Recruitment Consultants',
    location: 'Strata National Operations Hub, Birmingham',
    description: 'Passionate recruitment specialists dedicated to transparent, compliant, and human-centred talent matching.',
    imagePath: ASSETS.galleryTeam
  },
  {
    id: 'gal-04',
    category: 'Community',
    title: 'Local Employment & Back-to-Work Partnership',
    location: 'London & Yorkshire Community Outreach',
    description: 'Collaborating with community enterprises to offer CV workshops and interview preparation to job seekers.',
    imagePath: ASSETS.hero
  }
];

export const POLICIES_DATA: Record<string, PolicyDocument> = {
  privacy: {
    id: 'privacy',
    title: 'Privacy Policy',
    code: 'POL-UK-01',
    effectiveDate: 'Updated January 2026',
    summary: 'How Strata Workforce collects, securely stores, processes, and protects your personal data.',
    sections: [
      {
        heading: '1. Information We Collect',
        body: 'We collect personal identification data, contact details, employment history, CVs, references, right-to-work documentation (such as British passports, share codes, or biometric residence permits), and qualifications necessary to facilitate recruitment and employment services.'
      },
      {
        heading: '2. Lawful Basis for Processing',
        body: 'We process personal data under legitimate interests (matching candidates to employment vacancies), performance of contract (facilitating temporary or permanent placement), and compliance with legal obligations (statutory UK tax, National Minimum Wage, and right-to-work legislation).'
      },
      {
        heading: '3. Data Retention & Security',
        body: 'Your data is hosted in ISO 27001-certified UK data centres with 256-bit encryption in transit and at rest. We retain records in line with statutory requirements (typically 6 years for financial/payroll records and 2 years for candidate profiles following last contact).'
      }
    ]
  },
  gdpr: {
    id: 'gdpr',
    title: 'GDPR & Data Protection Compliance',
    code: 'POL-UK-02',
    effectiveDate: 'Updated January 2026',
    summary: 'Our commitment to the UK General Data Protection Regulation and the Data Protection Act 2018.',
    sections: [
      {
        heading: '1. Your Individual Rights',
        body: 'Under UK GDPR, you have the right to access your data, request rectification of inaccurate records, request erasure ("right to be forgotten"), restrict processing, and lodge complaints with the Information Commissioner’s Office (ICO).'
      },
      {
        heading: '2. Data Protection Officer (DPO)',
        body: 'Our appointed Data Protection Officer oversees compliance and can be contacted directly at compliance@strataworkforce.co.uk for subject access requests (SAR) or queries.'
      }
    ]
  },
  'anti-bribery': {
    id: 'anti-bribery',
    title: 'Anti-Bribery & Corruption Policy',
    code: 'POL-UK-03',
    effectiveDate: 'Updated January 2026',
    summary: 'Zero-tolerance governance under the UK Bribery Act 2010.',
    sections: [
      {
        heading: '1. Policy Statement',
        body: 'Strata Workforce conducts all business in an honest, transparent, and ethical manner. We enforce a zero-tolerance approach to bribery and corruption across all candidate placements, client contracts, and vendor tenders.'
      },
      {
        heading: '2. Prohibited Conduct',
        body: 'Employees and contractors must never offer, promise, give, request, agree to receive, or accept any bribe, kickback, or improper financial inducement to gain or retain commercial advantage.'
      }
    ]
  },
  'gifts-hospitality': {
    id: 'gifts-hospitality',
    title: 'Gifts & Hospitality Policy',
    code: 'POL-UK-04',
    effectiveDate: 'Updated January 2026',
    summary: 'Guidelines on acceptable corporate hospitality and conflict of interest disclosures.',
    sections: [
      {
        heading: '1. Standards of Acceptability',
        body: 'Modest promotional items and bona fide business hospitality (such as standard business lunches) are permitted only where reasonable, proportionate, and strictly not intended to influence any commercial recruitment decision.'
      },
      {
        heading: '2. Declaration Register',
        body: 'Any gift or hospitality with an estimated value exceeding £50 must be formally logged in the corporate Compliance Register within 5 working days.'
      }
    ]
  },
  environmental: {
    id: 'environmental',
    title: 'Environmental & Sustainability Policy',
    code: 'POL-UK-05',
    effectiveDate: 'Updated January 2026',
    summary: 'Our pathway toward Net Zero carbon emissions and sustainable operations across all UK branches.',
    sections: [
      {
        heading: '1. Carbon Footprint Reduction',
        body: 'We operate 100% paperless candidate registration and timesheet administration, reducing branch paper consumption by 98% since 2023. Our national fleet prioritises low-emission hybrid and EV vehicles.'
      },
      {
        heading: '2. Community Green Initiatives',
        body: 'We partner with accredited UK woodland rewilding initiatives, planting a native tree for every 100 temporary placement shifts completed.'
      }
    ]
  },
  ethical: {
    id: 'ethical',
    title: 'Ethical Recruitment & Equal Opportunities Policy',
    code: 'POL-UK-06',
    effectiveDate: 'Updated January 2026',
    summary: 'Commitment to fairness, diversity, non-discrimination, and ethical fees.',
    sections: [
      {
        heading: '1. Candidate Fee Transparency',
        body: 'In strict compliance with the Employment Agencies Act 1973, Strata Workforce NEVER charges candidates fees for finding work, registering, interview coaching, or job applications.'
      },
      {
        heading: '2. Diversity & Inclusion',
        body: 'We evaluate candidates strictly on competence, qualifications, and merit, actively promoting diversity across gender, ethnicity, disability, sexual orientation, age, and socioeconomic background.'
      }
    ]
  },
  'modern-slavery': {
    id: 'modern-slavery',
    title: 'Modern Slavery & Human Trafficking Statement',
    code: 'POL-UK-07',
    effectiveDate: 'Financial Year 2026',
    summary: 'Published in accordance with Section 54 of the UK Modern Slavery Act 2015.',
    sections: [
      {
        heading: '1. Due Diligence Processes',
        body: 'As a GLAA-licensed and REC-accredited organisation, we conduct stringent multi-point checks to detect signs of forced labour, debt bondage, and human trafficking. These include duplicate bank account cross-referencing, duplicate address alerts, and in-person interviews.'
      },
      {
        heading: '2. Whistleblowing & Reporting',
        body: 'All staff undergo mandatory annual anti-slavery training. Suspected exploitation is reported immediately to the Gangmasters and Labour Abuse Authority (GLAA) and the Modern Slavery Helpline (08000 121 700).'
      }
    ]
  },
  'candidate-documents': {
    id: 'candidate-documents',
    title: 'Candidate Onboarding Documentation Guide',
    code: 'DOC-UK-08',
    effectiveDate: 'Updated January 2026',
    summary: 'Statutory requirements for right-to-work compliance, identity verification, and registration documents under UK immigration and employment law.',
    sections: [
      {
        heading: '1. Right-to-Work (RTW) Verification',
        body: 'Candidates must provide either a valid original British or Irish passport, or an official Home Office share code with date of birth for digital online verification. For non-UK nationals with biometric residence permits or visas, digital status check must verify unconditional permission to undertake the relevant category of employment.'
      },
      {
        heading: '2. National Insurance & Proof of Address',
        body: 'Official proof of National Insurance number (HMRC tax notification, P45, P60, or National Insurance card) alongside an official proof of residential address issued within the last 3 months (utility bill, bank statement, or council tax bill).'
      },
      {
        heading: '3. Sector Specific Licences & DBS Certificates',
        body: 'Depending on the sector: Enhanced DBS check (Children and/or Adults Barred List) registered on the Update Service; CSCS/CPCS/NPORS cards for construction; active NMC PIN for nurses; SSSC/HCPC registrations; C+E Driver CPC and Digi Tacho cards; or RTITB/ITSSAR forklift certificates.'
      },
      {
        heading: '4. Verified Employment References',
        body: 'A minimum of two verifiable employment or character references covering the previous 24 to 36 months of employment history without unexplained gaps.'
      }
    ]
  },
  'terms-of-business': {
    id: 'terms-of-business',
    title: 'Employer Terms of Business & Service Level Agreements',
    code: 'TOS-UK-09',
    effectiveDate: 'Standard Framework 2026',
    summary: 'Commercial conditions, service response timeframes, candidate replacement guarantee, and regulatory commitments for client organisations.',
    sections: [
      {
        heading: '1. Temporary Staffing SLA & Introduction Fees',
        body: 'Standard response times guarantee candidate CV submission within 4 hours for temporary assignments. Invoicing is conducted weekly in arrears with clear breakdowns of basic hourly rates, statutory employer National Insurance, apprentice levy, and holiday pay accrual in strict accordance with the Agency Workers Regulations 2010 (AWR).'
      },
      {
        heading: '2. Permanent Placement 100-Day Replacement Guarantee',
        body: 'For all permanent placements, Strata Workforce provides a sliding scale 100-day rebate or complimentary replacement guarantee. If a candidate leaves or fails probationary standards within 100 days through no fault of client redundancy, an immediate replacement search is executed at zero additional fee.'
      },
      {
        heading: '3. Compliance & Insurance Warranties',
        body: 'Strata maintains £10,000,000 Employers Liability insurance, £10,000,000 Public Liability insurance, and £5,000,000 Professional Indemnity coverage. All personnel supplied undergo audited pre-vetting prior to arrival on client sites.'
      }
    ]
  }
};

export const CANDIDATE_WORKFLOW: WorkflowStep[] = [
  {
    id: 'cand-01',
    stepNumber: '01',
    title: 'Discover & Apply',
    subtitle: 'Targeted search or CV drop',
    timeframe: 'Under 2 Minutes',
    description: 'Explore verified vacancies with transparent pay rates and clear shift schedules across the UK, or submit an open registration with your CV.',
    keyDeliverables: [
      'Filtered search by sector, location, and contract type',
      'Transparent £/hr or annual salary disclosures',
      'Instant mobile-friendly CV submission'
    ],
    audience: 'candidate',
    iconName: 'Search'
  },
  {
    id: 'cand-02',
    stepNumber: '02',
    title: 'Digital Screening',
    subtitle: 'Skills & sector matching',
    timeframe: 'Within 4 Hours',
    description: 'A dedicated recruitment consultant reviews your experience, qualifications, and shift preferences to identify matching opportunities.',
    keyDeliverables: [
      'Specialist consultant telephone or video consultation',
      'Career aspiration and salary expectation alignment',
      'Immediate vacancy shortlisting'
    ],
    audience: 'candidate',
    iconName: 'FileCheck2'
  },
  {
    id: 'cand-03',
    stepNumber: '03',
    title: 'Compliance & RTW',
    subtitle: 'Digital ID & right-to-work audit',
    timeframe: 'Same Day Check',
    description: 'Effortlessly upload statutory right-to-work documents (passport, share code, address proof) through our secure, encrypted digital portal.',
    keyDeliverables: [
      'Home Office share code / passport biometric verification',
      'DBS / CSCS / NMC / DVLA licence authenticity check',
      'Zero fee guarantee — no charges for registration'
    ],
    audience: 'candidate',
    iconName: 'ShieldCheck'
  },
  {
    id: 'cand-04',
    stepNumber: '04',
    title: 'Interview & Briefing',
    subtitle: 'Comprehensive role preparation',
    timeframe: '24–48 Hours',
    description: 'Receive in-depth client briefs, interview coaching, site travel details, and safety requirements before meeting the employer or starting shifts.',
    keyDeliverables: [
      'In-depth role specification and site culture briefing',
      'Interview guidance and competency question preparation',
      'Full shift schedule, uniform, and PPE provision'
    ],
    audience: 'candidate',
    iconName: 'UserCheck'
  },
  {
    id: 'cand-05',
    stepNumber: '05',
    title: 'Placement & Weekly Pay',
    subtitle: 'Guaranteed Friday payments',
    timeframe: 'Weekly on Friday',
    description: 'Begin your assignment with full support. Submit digital timesheets and enjoy guaranteed weekly pay with full PAYE holiday accrual and pension.',
    keyDeliverables: [
      'Digital timesheet sign-off via mobile',
      'Itemised payslip with PAYE/CIS/Umbrella transparency',
      'Dedicated 24/7 consultant on-call support'
    ],
    audience: 'candidate',
    iconName: 'Banknote'
  },
  {
    id: 'cand-06',
    stepNumber: '06',
    title: 'Growth & Progression',
    subtitle: 'CPD, temp-to-perm & upskilling',
    timeframe: 'Ongoing Development',
    description: 'Access accredited training modules, health & safety certifications, and clear pathways to transition from temporary contracts to permanent careers.',
    keyDeliverables: [
      'Funded NVQ and vocational training pathways',
      'Structured temp-to-perm conversion opportunities',
      'Priority access to high-value executive openings'
    ],
    audience: 'candidate',
    iconName: 'TrendingUp'
  }
];

export const EMPLOYER_WORKFLOW: WorkflowStep[] = [
  {
    id: 'emp-01',
    stepNumber: '01',
    title: 'Needs Consultation',
    subtitle: 'Scoping workforce requirements',
    timeframe: 'Within 60 Minutes',
    description: 'Engage with our sector specialists to define headcount, required certifications, shift rotas, and SLA delivery milestones.',
    keyDeliverables: [
      'Detailed job specification & competency profiling',
      'Local market salary and hourly rate benchmarking',
      'Clear, agreed Service Level Agreement (SLA)'
    ],
    audience: 'employer',
    iconName: 'ClipboardList'
  },
  {
    id: 'emp-02',
    stepNumber: '02',
    title: 'Talent Sourcing',
    subtitle: 'Multi-channel pre-vetted search',
    timeframe: '4–24 Hours',
    description: 'We activate our proprietary database of 45,000+ pre-vetted UK workers alongside targeted headhunting and digital attraction campaigns.',
    keyDeliverables: [
      'Instant access to verified regional talent pools',
      'Automated competency testing & initial telephone interviews',
      'Elimination of unvetted applicants'
    ],
    audience: 'employer',
    iconName: 'Users'
  },
  {
    id: 'emp-03',
    stepNumber: '03',
    title: 'Audited Shortlist',
    subtitle: '100% compliant profiles presented',
    timeframe: '12–48 Hours',
    description: 'Receive an executive summary of top-ranked candidates with verified Right-to-Work, references, and relevant skill assessments.',
    keyDeliverables: [
      'Standardised candidate profiles with skill summaries',
      'Pre-checked DBS, CSCS, NMC, or driver credentials',
      'Seamless interview scheduling directly into your diary'
    ],
    audience: 'employer',
    iconName: 'CheckSquare'
  },
  {
    id: 'emp-04',
    stepNumber: '04',
    title: 'Rapid Deployment',
    subtitle: 'Site induction & mobilisation',
    timeframe: 'Under 4 Hours / Agreed Date',
    description: 'Candidates arrive pre-briefed on site policies, wearing compliant PPE, and ready for work with digital check-in protocols.',
    keyDeliverables: [
      'Comprehensive site induction and health & safety briefing',
      'Full PPE verification (hi-vis, safety boots, sector kit)',
      'On-site check-in coordinator for volume deployments'
    ],
    audience: 'employer',
    iconName: 'Truck'
  },
  {
    id: 'emp-05',
    stepNumber: '05',
    title: 'Workforce Governance',
    subtitle: 'Real-time attendance & AWR tracking',
    timeframe: 'Continuous Operational Oversight',
    description: 'Manage shifts with automated attendance tracking, replacement cover guarantees within 60 minutes, and strict AWR 12-week compliance auditing.',
    keyDeliverables: [
      'Live attendance and shift completion monitoring',
      'Immediate backfill guarantee for sickness or absence',
      'Automated AWR (Agency Workers Regulations) tenure tracking'
    ],
    audience: 'employer',
    iconName: 'BarChart'
  },
  {
    id: 'emp-06',
    stepNumber: '06',
    title: 'Billing & Account Review',
    subtitle: 'Transparent consolidated invoicing',
    timeframe: 'Weekly Invoicing & Monthly KPI Audits',
    description: 'Receive consolidated weekly invoices aligned to approved digital timesheets, accompanied by strategic quarterly workforce reviews.',
    keyDeliverables: [
      'Single consolidated weekly electronic invoice',
      'Complete spend transparency and cost-per-hire analytics',
      '100-day permanent replacement guarantee protection'
    ],
    audience: 'employer',
    iconName: 'FileSpreadsheet'
  }
];

export const REQUIRED_DOCUMENTS: DocumentItem[] = [
  {
    id: 'doc-rtw-passport',
    category: 'Right to Work',
    name: 'Valid UK / Irish Passport or Home Office Share Code',
    description: 'Original biometric passport or digital share code verifying legal entitlement to work in the United Kingdom without restrictions.',
    mandatory: true,
    acceptedFormats: 'Original document / Share Code (9 alphanumeric digits)',
    targetAudience: 'candidate'
  },
  {
    id: 'doc-proof-address',
    category: 'Identity & Address',
    name: 'Proof of Residential Address',
    description: 'Utility bill, council tax statement, or bank statement issued in your name within the last 3 calendar months.',
    mandatory: true,
    acceptedFormats: 'PDF statement or clear scan/photo showing date and address',
    targetAudience: 'candidate'
  },
  {
    id: 'doc-national-insurance',
    category: 'Tax & Compliance',
    name: 'Official Proof of National Insurance (NI)',
    description: 'HMRC tax coding notice, P45, P60, or official NI card confirming your statutory National Insurance number.',
    mandatory: true,
    acceptedFormats: 'HMRC document, P45/P60, or Government Gateway printout',
    targetAudience: 'candidate'
  },
  {
    id: 'doc-bank-details',
    category: 'Payroll',
    name: 'UK Bank Account Details',
    description: 'Account holder name, Sort Code (6 digits), and Account Number (8 digits) for weekly BACS salary payments every Friday.',
    mandatory: true,
    acceptedFormats: 'Bank statement header or bank card confirmation',
    targetAudience: 'candidate'
  },
  {
    id: 'doc-references',
    category: 'Vetting',
    name: 'Employment & Character References (2 Years)',
    description: 'Contact details (name, corporate email, phone, organisation) for two verifiable supervisory referees from the last 24 months.',
    mandatory: true,
    acceptedFormats: 'Corporate referee contact details and written reference letters',
    targetAudience: 'candidate'
  },
  {
    id: 'doc-sector-licence',
    category: 'Sector Qualifications',
    name: 'Sector Credentials & Licences',
    description: 'Enhanced DBS certificate (care/education), CSCS/CPCS card (construction), NMC PIN (nursing), C+E/CPC/Tacho (driving), or FLT licence (logistics).',
    mandatory: false,
    acceptedFormats: 'Original card, certificate, or registration number for portal check',
    targetAudience: 'candidate'
  },
  {
    id: 'doc-emp-terms',
    category: 'Commercial Agreement',
    name: 'Signed Terms of Business & Service SLA',
    description: 'Outlines standard pay rates, charge markups, 100-day replacement guarantee, payment credit terms (typically 14–30 days), and agreed staffing SLAs.',
    mandatory: true,
    acceptedFormats: 'Signed electronic Master Services Agreement (MSA)',
    targetAudience: 'employer'
  },
  {
    id: 'doc-emp-jobspec',
    category: 'Operational',
    name: 'Job Description & Shift Rota Profile',
    description: 'Defines required headcounts, skill competencies, hourly pay rate, shift timings (e.g. 4-on-4-off), site address, and designated site contact.',
    mandatory: true,
    acceptedFormats: 'Word / PDF / Online Order Form specification',
    targetAudience: 'employer'
  },
  {
    id: 'doc-emp-hs',
    category: 'Health & Safety',
    name: 'Site Health & Safety Induction & RAMS Pack',
    description: 'Site risk assessments, fire evacuation protocols, PPE requirements, and hazardous machinery guidelines for incoming temporary personnel.',
    mandatory: true,
    acceptedFormats: 'Site Induction Checklist & Risk Assessment Document',
    targetAudience: 'employer'
  },
  {
    id: 'doc-emp-awr',
    category: 'Statutory Compliance',
    name: 'AWR (Agency Workers Regulations) Comparator Details',
    description: 'Basic working and employment conditions (pay rate, overtime, holiday entitlement) applicable to permanent employees doing identical work.',
    mandatory: true,
    acceptedFormats: 'AWR Comparator Declaration Form',
    targetAudience: 'employer'
  }
];

export const COMPLIANCE_STANDARDS: ComplianceStandard[] = [
  {
    id: 'glaa',
    name: 'Gangmasters and Labour Abuse Authority',
    body: 'GLAA Licensed Partner',
    badge: 'GLAA Licensed',
    description: 'Licensed under the Gangmasters (Licensing) Act 2004 to protect vulnerable workers from exploitation across agriculture, food packaging, and processing.',
    statutoryRef: 'Licence No: STR-GLAA-8820',
    keyProtections: [
      'Strict prohibition of illegal deductions or accommodation scams',
      'Mandatory living wage audit and statutory holiday pay tracking',
      'Unannounced site audits and anti-modern slavery inspections'
    ]
  },
  {
    id: 'rec',
    name: 'Recruitment & Employment Confederation',
    body: 'REC Audited Member',
    badge: 'REC Audited Gold',
    description: 'Certified to the highest professional standard in UK recruitment practice, verifying rigorous compliance, ethics, and candidate care.',
    statutoryRef: 'REC Membership No: 994218',
    keyProtections: [
      'Adherence to the REC Code of Professional Practice',
      'Full compliance with the Conduct of Employment Agencies Regulations 2003',
      'Zero candidate fees guaranteed across all sectors'
    ]
  },
  {
    id: 'modern-slavery-standard',
    name: 'Modern Slavery & Human Trafficking Prevention',
    body: 'Section 54 Modern Slavery Act 2015',
    badge: 'Anti-Slavery Certified',
    description: 'Continuous proactive safeguards to eradicate forced labour, worker exploitation, and undocumented supply chain sub-contracting.',
    statutoryRef: 'Annual Statement Registered FY26',
    keyProtections: [
      'Automated red-flagging of duplicate bank accounts and shared residential addresses',
      'Confidential whistleblowing hotline operated 24/7 (0800 246 8900)',
      'Mandatory face-to-face identity authentication prior to deployment'
    ]
  },
  {
    id: 'uk-gdpr',
    name: 'UK GDPR & Data Protection Act 2018',
    body: 'Information Commissioner’s Office (ICO)',
    badge: 'ICO Registered Z918231',
    description: 'All candidate CVs, identity documents, and employer commercial contracts are secured using 256-bit AES encryption in UK-sovereign data centres.',
    statutoryRef: 'ICO Registration No: ZB918231',
    keyProtections: [
      'Full Subject Access Request (SAR) compliance within 30 days',
      'No third-party data sharing without explicit informed consent',
      'ISO 27001-aligned data security and document shredding policies'
    ]
  }
];

