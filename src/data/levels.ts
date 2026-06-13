export type Level = {
  number: number;
  slug: string;
  href: string;
  name: string;
  audience: string;
  tagline: string;
  status: 'live' | 'mockup' | 'roadmap';
  statusLabel: string;
};

export const levels: Level[] = [
  {
    number: 1,
    slug: 'primary',
    href: '/primary',
    name: 'Primary School',
    audience: 'Maestre + bambini (8–11)',
    tagline: 'The Four Stations — real content from the IC Bianca pilot, AY 2025/26.',
    status: 'live',
    statusLabel: 'Real content from Phase I',
  },
  {
    number: 2,
    slug: 'secondary',
    href: '/secondary',
    name: 'Secondary School',
    audience: 'Liceali (15–18) + tutor esterno',
    tagline: 'The Teenager Circle training protocol — interactive module preview, 3A · 4E · 5A.',
    status: 'mockup',
    statusLabel: 'Interactive mockup',
  },
  {
    number: 3,
    slug: 'university',
    href: '/university',
    name: 'University & Executive Ed',
    audience: 'Università + business schools',
    tagline: 'Modules adapted for adult learners — leadership, innovation, human–AI collaboration.',
    status: 'roadmap',
    statusLabel: 'Roadmap — AY 2027/28',
  },
  {
    number: 4,
    slug: 'industry',
    href: '/industry',
    name: 'Industry',
    audience: 'Industry partners',
    tagline: 'Talent pipeline interface for the tech/telco ecosystem already in dialogue with the project.',
    status: 'roadmap',
    statusLabel: 'Roadmap — conversations in progress',
  },
];
