import { Project, Publication, TimelineEntry } from '../models/portfolio.models';

export const PUBLICATIONS: Publication[] = [
  {
    year: '2025',
    type: 'Featured',
    title: 'Learning Representations that Reason Across Modalities',
    authors: 'Alex Morgan, Priya Nair, Thomas Becker',
    venue: 'NeurIPS 2025 · Oral presentation',
    accent: 'violet',
    tags: ['PDF', 'Code', 'Project'],
  },
  {
    year: '2024',
    type: 'Best paper',
    title: 'Reliable Foundation Models under Distribution Shift',
    authors: 'Mina Chen, Alex Morgan, Rafael Silva',
    venue: 'ICML 2024 · Vienna, Austria',
    accent: 'coral',
    tags: ['PDF', 'Code'],
  },
  {
    year: '2024',
    type: 'Journal',
    title: 'Human-Centered Evaluation of Generative AI Systems',
    authors: 'Alex Morgan, Elena Rossi',
    venue: 'Transactions on Machine Learning Research',
    accent: 'cyan',
    tags: ['PDF', 'Dataset'],
  },
];

export const PROJECTS: Project[] = [
  {
    icon: 'network',
    title: 'OpenGraph Lab',
    description:
      'An open-source toolkit for transparent analysis and visualization of large graph models.',
    tags: ['Python', 'PyTorch', '12k stars'],
  },
  {
    icon: 'spark',
    title: 'Responsible AI Cards',
    description:
      'Practical templates that help research teams document model behavior, risks, and limitations.',
    tags: ['Open source', 'Documentation'],
  },
  {
    icon: 'terminal',
    title: 'Tiny Research Stack',
    description:
      'A reproducible starter kit for running, tracking, and sharing machine-learning experiments.',
    tags: ['TypeScript', 'Docker'],
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    period: '2021 — Present',
    title: 'Associate Professor of Computer Science',
    organization: 'Northbridge University · Reasoning Systems Lab',
  },
  {
    period: '2018 — 2021',
    title: 'Research Scientist',
    organization: 'Atlas AI · Responsible Foundation Models',
  },
  {
    period: '2013 — 2018',
    title: 'PhD in Computer Science',
    organization: 'Stanford University · Machine Learning',
  },
  {
    period: '2009 — 2013',
    title: 'BSc in Computer Science',
    organization: 'University of Edinburgh · First Class Honours',
  },
];
