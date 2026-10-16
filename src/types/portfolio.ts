export type Language = 'pt' | 'en';

export type ExperienceCategory = 'all' | 'tech' | 'management';

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
  summary: string;
  responsibilities: string[];
  techStack: string[];
}

export interface CertificationItem {
  year: string;
  badgeLabel: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface CourseItem {
  platform: string;
  category: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  subdomain: string;
  url: string;
  status: string;
  uptime: string;
  latency: string;
  metrics: string;
  description: string;
  techStack: string[];
}

export interface RecruiterCard {
  badge: string;
  title: string;
  description: string;
}

export interface PortfolioData {
  metaTitle: string;
  nav: {
    about: string;
    experience: string;
    certifications: string;
    projects: string;
    recruiters: string;
    contact: string;
    resumeBtn: string;
  };
  hero: {
    badge: string;
    subtitleParts: {
      intro: string;
      highlight1: string;
      mid1: string;
      highlight2: string;
      mid2: string;
      highlight3: string;
      outro: string;
    };
    pills: string[];
    ctaPrimary: string;
    ctaSecondary: string;
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
    responsibilitiesLabel: string;
    techUsedLabel: string;
    items: ExperienceItem[];
  };
  coursesSection: {
    tag: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
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
    searchPlaceholder: string;
    visitBtn: string;
    caseBtn: string;
    emptyTitle: string;
    emptySubtitle: string;
    categories: string[];
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
    whatsappTitle: string;
    whatsappDesc: string;
    locationTitle: string;
    locationDesc: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
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
