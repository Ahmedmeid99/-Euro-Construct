import {
  Building2,
  ClipboardCheck,
  Construction,
  FileCheck2,
  HardHat,
  Landmark,
  Layers3,
  Ruler,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react';

export const images = {
  hero: '/profile/hero-construction.jpg',
  survey: '/profile/about-cranes.jpg',
};

export const categories = ['All', 'Roads & Infrastructure', 'Surveying & Geotechnical', 'Buildings & MEP', 'Renovation', 'Master Planning & Land', 'Hajj & Holy Sites'] as const;
export type ProjectCategory = Exclude<(typeof categories)[number], 'All'>;

export type Project = {
  name: string;
  category: ProjectCategory;
  location: string;
  client: string;
  value: string;
  summary: string;
  services: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: 'Survey of New Roads at Hofuf Plant', category: 'Surveying & Geotechnical', location: 'Dammam | KSA', client: 'Euro Consult for Engineering Consultancy / Saudi Cement Company', value: '3,500,000 SAR', image: '/profile/project-01.jpg',
    summary: 'Provided topographic surveying, geotechnical investigations, and field assessment services to support the development of new roads and infrastructure within Hofuf Plant. The works addressed traffic and drainage challenges and provided technical data for future site development and infrastructure planning.',
    services: 'Topographic and engineering surveying; geotechnical investigations, borehole drilling, and soil testing; traffic, drainage, and site condition assessments; technical reporting and engineering data collection.',
  },
  {
    name: 'East Jeddah Corridor', category: 'Roads & Infrastructure', location: 'Jeddah | KSA', client: 'Euro Consult for Engineering Consultancy / Ministry of Municipal & Rural Affairs - Jeddah Municipality', value: '4,400,000 SAR', image: '/profile/project-02.jpg',
    summary: 'Executed topographic surveys, geotechnical investigations, utility mapping, and traffic data collection for the East Jeddah Corridor project, supporting a major transportation corridor and enhancing mobility, safety, and urban growth in East Jeddah.',
    services: 'Topographic surveying and land mapping; geotechnical investigations, borehole drilling, and soil testing; utility detection, infrastructure assessment, and traffic surveys; field engineering, data collection, and technical reporting.',
  },
  {
    name: 'Jeddah Port - Al Khumra Connectivity Project', category: 'Roads & Infrastructure', location: 'Jeddah | KSA', client: 'Euro Consult for Engineering Consultancy / The General Authority of Ports', value: '5,300,000 SAR', image: '/profile/project-03.jpg',
    summary: 'Executed comprehensive field investigation and survey works for a dedicated freight corridor linking Jeddah Islamic Port with the Al Khumra logistics area, supporting better freight movement, reduced congestion, and improved road connectivity.',
    services: 'Topographic surveying and route corridor mapping; geotechnical investigations, borehole drilling, and soil testing; traffic surveys, freight movement studies, and infrastructure assessments; utility detection, field data collection, and technical reporting.',
  },
  {
    name: 'Dammam Metropolitan Traffic Enhancement', category: 'Roads & Infrastructure', location: 'Dammam | KSA', client: 'Euro Consult for Engineering Consultancy / Eastern Province Municipality', value: '3,220,000 SAR', image: '/profile/project-04.jpg',
    summary: 'Executed survey and field investigation works for road rehabilitation and traffic enhancement projects across Dammam, Khobar, and Dhahran, supporting roadway upgrades, infrastructure improvements, and traffic flow optimization.',
    services: 'Topographic surveying and corridor mapping; geotechnical investigations, borehole drilling, and soil testing; traffic surveys, infrastructure assessments, and utility mapping; field data collection, site investigations, and technical reporting.',
  },
  {
    name: 'Pilgrims Flow Management at Muzdalifah Metro Stations 1, 2 & 3', category: 'Hajj & Holy Sites', location: 'Makkah | KSA', client: 'Euro Consult for Engineering Consultancy / Kidana Development Company', value: '2,600,000 SAR', image: '/profile/project-05.jpg',
    summary: 'Executed field monitoring and operational assessment activities during the Hajj season, including crowd movement observation, pedestrian flow monitoring, passenger counting, congestion identification, and operational performance assessment.',
    services: 'Crowd movement monitoring and pedestrian flow surveys; passenger counting and operational data collection; congestion analysis and movement pattern assessment; operational performance reporting and recommendations.',
  },
  {
    name: 'Transportation System Improvements in Al-Masha’ir Al-Muqaddasah', category: 'Hajj & Holy Sites', location: 'Makkah | KSA', client: 'Euro Consult for Engineering Consultancy / Kidana Development Company', value: '3,410,000 SAR', image: '/profile/project-06.jpg',
    summary: 'Provided topographic surveying, geotechnical investigation, and field data collection services supporting roads, pedestrian bridges, shuttle bus facilities, and associated infrastructure across the main pilgrimage areas.',
    services: 'Topographic and engineering surveying; geotechnical investigations, borehole drilling, and soil testing; existing conditions assessment and field data collection; technical reporting and engineering recommendations.',
  },
  {
    name: 'Survey Services for State Properties General Authority', category: 'Surveying & Geotechnical', location: 'Riyadh | KSA', client: 'Euro Consult for Engineering Consultancy / State Properties General Authority', value: '5,100,000 SAR', image: '/profile/project-07.jpg',
    summary: 'Provided comprehensive surveying services across designated Riyadh sites, including topographic, cadastral, and boundary surveys, land asset verification, mapping, and spatial data collection for property management and development.',
    services: 'Topographic and cadastral surveying; boundary verification and land asset mapping; GIS data collection and spatial analysis; survey reporting and technical documentation.',
  },
  {
    name: 'Al-Masha’ir Transportation System Improvement - Shuttle Bus', category: 'Hajj & Holy Sites', location: 'Makkah | KSA', client: 'Euro Consult for Engineering Consultancy / Kidana Development Company', value: '4,200,000 SAR', image: '/profile/project-08.jpg',
    summary: 'Provided surveying, traffic data collection, and geotechnical investigation services for roads, pedestrian bridges, shuttle bus corridors, and supporting infrastructure across the main pilgrimage areas in Makkah.',
    services: 'Topographic and engineering surveying; traffic counts, mobility studies, and field data collection; geotechnical investigations, borehole drilling, and soil testing; technical reporting and infrastructure assessment.',
  },
  {
    name: 'University of Jeddah Project', category: 'Surveying & Geotechnical', location: 'Jeddah | KSA', client: 'Euro Consult for Engineering Consultancy / Ministry of Education', value: '3,300,000 SAR', image: '/profile/project-09.jpg',
    summary: 'Provided hydrological investigations, topographic surveying, and geotechnical services for the University of Jeddah development area, supporting stormwater management, flood protection, and road infrastructure development.',
    services: 'Hydrological investigations and flood risk assessments; topographic surveying and terrain mapping; geotechnical investigations, borehole drilling, and soil testing; drainage studies, field data collection, and technical reporting.',
  },
  {
    name: 'ZATCA MEP Engineering Services Project', category: 'Buildings & MEP', location: 'Multiple Locations | KSA', client: 'Euro Consult for Engineering Consultancy / Zakat, Tax and Customs Authority', value: '2,600,000 SAR', image: '/profile/project-10.jpg',
    summary: 'Provided site investigation, engineering surveys, and field assessment services across multiple ZATCA facilities to support the development and upgrade of building services and infrastructure systems.',
    services: 'Existing conditions surveys and site assessments; utility mapping and infrastructure investigations; field data collection and technical inspections; engineering reporting and technical support.',
  },
  {
    name: 'Planning, Organization, Survey & Parcelization of MOF Plot East', category: 'Master Planning & Land', location: 'Al-Madinah | KSA', client: 'Euro Consult for Engineering Consultancy / Ministry of Finance', value: '8,200,000 SAR', image: '/profile/project-11.jpg',
    summary: 'Provided planning, topographic surveying, and land parcelization services for a Ministry of Finance site, supporting future development and land management objectives.',
    services: 'Topographic and cadastral surveying; boundary verification and land parcelization; site planning and land subdivision studies; mapping, documentation, and technical reporting.',
  },
  {
    name: 'Pilgrims Disembarkment Areas Development - Al Mashaer Al Muqadasah', category: 'Hajj & Holy Sites', location: 'Makkah | KSA', client: 'Euro Consult for Engineering Consultancy / Ministry of Hajj and Umrah', value: '2,500,000 SAR', image: '/profile/project-12.jpg',
    summary: 'Provided surveying, site planning, and field assessment services for pilgrim disembarkment areas, enhancing safety, accessibility, and operational efficiency during Hajj seasons.',
    services: 'Topographic surveying and site mapping; existing conditions assessment and field investigations; pedestrian movement and crowd flow analysis; site planning, technical reporting, and development support.',
  },
  {
    name: 'Kuday Parking Development Supervision', category: 'Hajj & Holy Sites', location: 'Makkah | KSA', client: 'Euro Consult for Engineering Consultancy / Nusuk', value: '5,000,000 SAR', image: '/profile/project-13.jpg',
    summary: 'Provided surveying, site investigation, and technical support for the Kuday Parking Development Project, supporting the planning, development, and operational enhancement of parking facilities serving pilgrims and visitors.',
    services: 'Topographic surveying and site mapping; existing conditions assessment and field investigations; infrastructure and access road evaluations; technical reporting and development support.',
  },
  {
    name: 'Euro Consult Office - Design and Renovation', category: 'Renovation', location: 'Makkah | KSA', client: 'Euro Consult for Engineering Consultancy', value: '1,750,000 SAR', image: '/profile/project-14.jpg',
    summary: 'Design and renovation of the Euro Consult office in Makkah, tailored to the company’s workforce and business scale with capacity for up to 40 employees.',
    services: 'Architectural, structural, and MEP works; interior fit-out and finishing; mechanical, electrical, and plumbing installation; project execution, testing, and commissioning.',
  },
  {
    name: 'Euro Consult Headquarters - Design and Execution', category: 'Renovation', location: 'Riyadh | KSA', client: 'Euro Consult for Engineering Consultancy', value: '1,500,000 SAR', image: '/profile/project-15.jpg',
    summary: 'Design and execution of the Euro Consult headquarters in Riyadh, tailored to the company’s workforce and business scale with capacity for up to 60 employees.',
    services: 'Architectural, structural, and MEP works; interior fit-out and finishing; mechanical, electrical, and plumbing installation; project execution, testing, and commissioning.',
  },
  {
    name: 'Euro Consult Office - Riyadh Design and Renovation', category: 'Renovation', location: 'Riyadh | KSA', client: 'Euro Consult for Engineering Consultancy', value: '2,000,000 SAR', image: '/profile/project-16.jpg',
    summary: 'Design and execution of the Euro Consult Regional Headquarters in Riyadh, tailored to the company’s workforce and business scale with capacity for up to 40 employees.',
    services: 'Architectural, structural, and MEP works; interior fit-out and finishing; mechanical, electrical, and plumbing installation; project execution, testing, and commissioning.',
  },
  {
    name: 'Administrative Building - Jeddah Industrial Zone', category: 'Buildings & MEP', location: 'Jeddah | KSA', client: 'Al Musanadah Al Eskania Co.', value: '7,638,209 SAR', image: '/profile/project-17.jpg',
    summary: 'Delivered masonry, plastering, painting, and finishing works for an administrative building, including blockwork, partitions, flooring, ceilings, doors, windows, and associated civil and MEP works.',
    services: 'Building and blockwork construction; internal and external plastering; architectural finishing and painting; flooring, wall finishes, ceilings, doors, and windows; MEP works; joinery works.',
  },
  {
    name: 'Gypsum Ceiling & Finishing Works - Al Musanadah Plaza', category: 'Renovation', location: 'Tabuk | KSA', client: 'Al Musanadah Al Eskania Co.', value: '6,982,115 SAR', image: '/profile/project-18.jpg',
    summary: 'Executed gypsum board suspended ceilings and associated finishing works, including metal framing, service openings, joint treatment, and final preparation for painting.',
    services: 'Gypsum board suspended ceilings; metal framing and suspension systems; openings for lighting, HVAC, fire protection, and other services; joint treatment, sanding, and final finishing.',
  },
  {
    name: 'Elevator Installation Works - Royal Court', category: 'Buildings & MEP', location: 'Jeddah | KSA', client: 'Orient International Ltd.', value: '10,700,000 SAR', image: '/profile/project-19.jpg',
    summary: 'Delivered the civil, structural, architectural, and electrical works required for a Royal Court elevator, including assessment, structural design, pit construction, waterproofing, steel framing, glazing, finishes, and electrical provisions.',
    services: 'Site inspection and structural assessment; structural design of the elevator steel frame; elevator pit, reinforced concrete, and waterproofing; steel structure, glazing, and architectural finishes; electrical cabling and associated works.',
  },
  {
    name: 'Escalator Civil & Structural Works - Holy Sites', category: 'Buildings & MEP', location: 'Mina | KSA', client: 'Orient International Ltd.', value: '14,300,000 SAR', image: '/profile/project-20.jpg',
    summary: 'Delivered civil and structural works for the installation of 10 escalators at the Holy Sites in Mina, including concrete pits, drainage, steel structures, canopies, finishes, handrails, and electrical control provisions.',
    services: 'Reinforced concrete escalator pits; steel structure and support installation; drainage and waterproofing; fire-resistant canopies and protective cladding; electrical control and power provisions.',
  },
  {
    name: 'Road & Asphalt Works - Workers’ Housing Project, Phase 3', category: 'Roads & Infrastructure', location: 'Jeddah | KSA', client: 'Al Musanadah Al Eskania Co.', value: '9,545,185 SAR', image: '/profile/project-21.jpg',
    summary: 'Delivered road and asphalt works for Phase 3 of the Workers’ Housing Project, including site grading, base courses, asphalt paving, drainage, and associated road works.',
    services: 'Site grading and compaction; subgrade, subbase, and aggregate base courses; prime coat, tack coat, and asphalt paving; road markings, signage, and drainage works.',
  },
];

export const services = [
  { title: 'General Contracting', icon: Construction, text: 'Full project execution with quality and safety commitment.', image: '/profile/project-17.jpg' },
  { title: 'Construction Management', icon: ClipboardCheck, text: 'Managing site teams, resources, schedules, and progress.', image: '/profile/project-13.jpg' },
  { title: 'Site Survey', icon: Ruler, text: 'Existing site conditions and measurements.', image: '/profile/project-01.jpg' },
  { title: 'Geotechnical Investigation', icon: Layers3, text: 'Subsurface soil and foundation assessment.', image: '/profile/project-09.jpg' },
  { title: 'Renovation Works', icon: Building2, text: 'Building renovation and finishing activities, repair and upgrade works, plus interior renovation and fit-out.', image: '/profile/project-14.jpg' },
];

export type Service = (typeof services)[number];
export const getServiceSlug = (service: Service) => service.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export const getServiceBySlug = (slug: string) => services.find((service) => getServiceSlug(service) === slug);

export const capabilities = [
  { title: 'Skilled Manpower', text: 'Experienced engineers, supervisors, and site teams.', icon: Users },
  { title: 'Plant & Equipment', text: 'Resources and tools supporting efficient project execution.', icon: HardHat },
  { title: 'QA/QC Systems', text: 'Structured quality control aligned with project requirements.', icon: FileCheck2 },
  { title: 'Site Execution', text: 'Coordinated site activities with disciplined control.', icon: Target },
  { title: 'Procurement', text: 'Reliable sourcing, material flow, and delivery coordination.', icon: Landmark },
  { title: 'HSE Standards', text: 'Safe practices protecting people, sites, and communities.', icon: ShieldCheck },
];

export const values: [string, string][] = [
  ['Integrity', 'We act with honesty, transparency, and accountability.'],
  ['Teamwork', 'We work as one team with clients, partners, and project teams.'],
  ['Client Focus', 'We build lasting relationships based on trust and satisfaction.'],
  ['Agility', 'We respond effectively to project needs and site challenges.'],
  ['Quality & Safety', 'We deliver quality work while protecting people, equipment, and the environment.'],
  ['Improvement', 'We improve our methods to enhance project delivery.'],
  ['Sustainability', 'We apply responsible practices that support long-term value.'],
];

export function getProjectSlug(project: Project) {
  return project.name
    .normalize('NFKD')
    .replace(/[’']/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => getProjectSlug(project) === slug);
}

export const clients = [
  'Zakat, Tax and Customs Authority', 'Ministry of Education', 'Ministry of Finance',
  'Saudi Cement', 'Ministry of Hajj and Umrah', 'Kidana',
  'Euro Consult for Engineering Consultancy', 'Ministry of Municipal & Rural Affairs',
  'Nusuk Hajj', 'Jeddah Islamic Port', 'Ministry of Transport and Logistic Services',
  'State Properties General Authority',
];

export const clientLogos = [
  { name: 'Ministry of Finance', image: '/logos/ministry-of-finance-transparent.png' },
  { name: 'Zakat, Tax and Customs Authority', image: '/logos/zatca-transparent.png' },
  { name: 'Ministry of Hajj and Umrah', image: '/logos/ministry-hajj-umrah-transparent.png' },
  { name: 'Euro Consult for Engineering Consultancy', image: '/logos/euro-consult-transparent.png' },
  { name: 'Nusuk Hajj', image: '/logos/nusuk-hajj-transparent.png' },
  { name: 'Ministry of Transport and Logistic Services', image: '/logos/ministry-transport-transparent.png' },
  { name: 'Ministry of Municipal & Rural Affairs', image: '/logos/municipal-affairs-transparent.png' },
  { name: 'Kidana', image: '/logos/kidana-transparent.png' },
  { name: 'Saudi Cement', image: '/logos/saudi-cement-transparent.png' },
  { name: 'Jeddah Islamic Port', image: '/profile/clients/Picture56.png.webp' },
  { name: 'Ministry of Education', image: '/logos/ministry-of-education-transparent.png' },
  { name: 'State Properties General Authority', image: '/logos/state-properties-authority-transparent.png' },
] as const;

export const navItems = ['Home', 'About', 'Capabilities', 'Services', 'Projects', 'Clients', 'Contact'] as const;

export const navPaths = {
  Home: '/',
  About: '/about',
  Capabilities: '/capabilities',
  Services: '/services',
  Projects: '/projects',
  Clients: '/clients',
  Contact: '/contact',
} as const;
