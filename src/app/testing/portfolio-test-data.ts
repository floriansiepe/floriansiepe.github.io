import { Profile, Project, Publication, TimelineEntry } from '../models/portfolio.models';

export const TEST_PROFILE: Profile = {
  name: 'Ada Lovelace',
  initials: 'AL',
  image: 'assets/images/test-profile.jpg',
  cvUrl: 'test-cv.pdf',
  greeting: 'Hello, I’m',
  role: 'Computer Scientist',
  affiliation: 'Analytical Engine Institute',
  location: 'London, United Kingdom',
  headline: [
    { text: 'Building ', accent: false },
    { text: 'thoughtful systems.', accent: true },
  ],
  biography: ['Researching reliable computing systems.'],
  metrics: [
    { value: '12', label: 'Publications' },
    { value: '900', label: 'Citations' },
  ],
  socialLinks: [
    { label: 'Email Ada', url: 'mailto:ada@example.com', icon: 'mail' },
    { label: 'GitHub profile', url: 'https://github.com/', icon: 'github' },
  ],
  contactHeading: 'Work with me',
  contactText: 'Research collaborations are welcome.',
  contactLink: {
    label: 'Connect on LinkedIn',
    url: 'https://www.linkedin.com/in/ada-lovelace/',
    icon: 'linkedin',
  },
};

export const TEST_PUBLICATIONS: Publication[] = [
  {
    year: '2026',
    type: 'Featured',
    title: 'A Configurable Research Paper',
    authors: 'Ada Lovelace',
    venue: 'Test Conference',
    accent: 'violet',
    image: 'assets/publications/test.svg',
    imageAlt: 'Test publication artwork',
    imageFit: 'cover',
    bibtex: '@article{lovelace2026configurable}',
    links: [
      { label: 'PDF', url: '/paper.pdf', icon: 'copy' },
      { label: 'Code', url: 'https://github.com/', icon: 'github' },
    ],
  },
];

export const TEST_PROJECTS: Project[] = [
  {
    icon: 'terminal',
    title: 'Research Toolkit',
    description: 'Tools for reproducible research.',
    tags: ['TypeScript', 'Open source'],
    url: 'https://github.com/example/toolkit',
  },
];

export const TEST_TIMELINE: TimelineEntry[] = [
  {
    category: 'experience',
    period: '2022 — Present',
    title: 'Research Professor',
    organization: 'Analytical Engine Institute',
  },
  {
    category: 'education',
    period: '2018 — 2022',
    title: 'PhD in Computing',
    organization: 'Analytical Engine Institute',
  },
];
