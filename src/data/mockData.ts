import {
  JobVacancy,
  WorkforceService,
  SectorItem,
  TestimonialItem,
  GalleryItem,
  PolicyDocument,
} from '../types';

export const ASSETS = {
  hero: '/src/assets/images/hero_uk_workforce_1790590906400.jpg',
  employer: '/src/assets/images/employer_workforce_solutions_1790590922449.jpg',
  galleryEvents: '/src/assets/images/gallery_recruitment_events_1790590933797.jpg',
  galleryTraining: '/src/assets/images/gallery_workforce_training_1790590946836.jpg',
  galleryTeam: '/src/assets/images/gallery_team_community_1790590958746.jpg',
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
  }
};
