export interface Publication {
  year: string;
  type: string;
  title: string;
  authors: string;
  venue: string;
  accent: 'violet' | 'coral' | 'cyan';
  image: string;
  imageAlt: string;
  imageFit: 'cover' | 'contain';
  bibtex: string;
  links: ContentLink[];
}

export interface Project {
  icon: 'network' | 'spark' | 'terminal';
  title: string;
  description: string;
  tags: string[];
  url: string;
}

export interface TimelineEntry {
  category: 'experience' | 'education';
  period: string;
  title: string;
  organization: string;
}

export interface ContentLink {
  label: string;
  url: string;
  icon: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface HeadlineSegment {
  text: string;
  accent: boolean;
}

export interface Profile {
  name: string;
  initials: string;
  image: string;
  cvUrl: string;
  greeting: string;
  role: string;
  affiliation: string;
  location: string;
  headline: HeadlineSegment[];
  biography: string[];
  metrics: Metric[];
  socialLinks: ContentLink[];
  contactHeading: string;
  contactText: string;
  contactLink: ContentLink;
}

export interface PortfolioContent {
  profile: Profile;
  publications: Publication[];
  projects: Project[];
  experience: TimelineEntry[];
}
