export type Language = 'pt' | 'en';

export type ExperienceCategory = 'all' | 'tech' | 'management';

export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
  whatsapp: string;
}

export interface LanguageProficiency {
  name: string;
  level: string;
  dots: number;
}

export interface HardSkill {
  name: string;
  category: string;
  featured: boolean;
}

export interface SoftSkill {
  title: string;
  desc: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  period: string;
  sector: string;
  category: 'tech' | 'management';
  highlight: string;
  impactSummary: string;
  metricsPlaceholder?: string;
  responsibilities: string[];
  techStack: string[];
}

export interface CertificationItem {
  id: string;
  year: string;
  issuer: string;
  badgeLabel: string;
  title: string;
  subtitle: string;
  description: string;
  verificationUrl: string;
  highlights: string[];
}

export interface CourseItem {
  id: string;
  platform: string;
  category: string;
  title: string;
  description: string;
  verificationUrl: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  featured?: boolean;
  isDataProject?: boolean;
  name: string;
  category: string;
  subdomain: string;
  liveUrl: string;
  repoUrl: string;
  demoMedia: {
    type: 'image' | 'video' | 'preview';
    url: string;
    alt: string;
    caption: string;
  };
  status: string;
  problem: string;
  solution: string;
  architecture?: string;
  dataVolume?: string;
  result: string;
  techStack: string[];
}

export interface RecruiterCard {
  badge: string;
  title: string;
  description: string;
}

export interface PortfolioData {
  metaTitle: string;
  metaDescription: string;
  socials: SocialLinks;
  nav: {
    projects: string;
    experience: string;
    certifications: string;
    about: string;
    contact: string;
    resumeBtn: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    valueProposition: string;
    primaryStackLabel: string;
    primaryStack: string[];
    secondaryStackLabel: string;
    secondaryStack: string[];
    ctaProjects: string;
    ctaResume: string;
    cardRole: string;
  };
  about: {
    tag: string;
    titleStart: string;
    titleHighlight: string;
    bioTitle: string;
    bioText: string;
    hardSkillsTitle: string;
    softSkillsTitle: string;
    certTitle: string;
    coursesResumeTitle: string;
    langTitle: string;
    langNote: string;
    languages: LanguageProficiency[];
    hardSkills: HardSkill[];
    softSkills: SoftSkill[];
  };
  experience: {
    tag: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    filterAll: string;
    filterTech: string;
    filterManagement: string;
    impactLabel: string;
    responsibilitiesLabel: string;
    techUsedLabel: string;
    items: ExperienceItem[];
  };
  coursesSection: {
    tag: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    verifyBadgeBtn: string;
    coursesBannerTag: string;
    coursesSubheading: string;
    certifications: CertificationItem[];
    courses: CourseItem[];
  };
  projects: {
    tag: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    featuredBadge: string;
    problemLabel: string;
    solutionLabel: string;
    architectureLabel: string;
    dataVolumeLabel: string;
    resultLabel: string;
    stackLabel: string;
    liveBtn: string;
    repoBtn: string;
    demoBtn: string;
    items: ProjectItem[];
  };
  recruiterSection: {
    tag: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    cards: RecruiterCard[];
  };
  contact: {
    tag: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    whatsappLabel: string;
    resumeCta: string;
  };
  resumeModal: {
    printBtn: string;
    closeBtn: string;
    note: string;
    workExpHeading: string;
  };
  footer: {
    subtitle: string;
  };
}
