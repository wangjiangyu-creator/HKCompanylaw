import { academicWorks, cases, lawsRules, practiceNotes } from './content';
import type { ContentRecord } from './content';

export type Catalog = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  records: ContentRecord[];
};

export const catalogs: Catalog[] = [
  {
    slug: 'laws-rules',
    title: 'Laws and Rules',
    kicker: 'Primary materials',
    description:
      'Statutes, subsidiary legislation, regulatory codes, and market rules that form the working architecture of Hong Kong company law.',
    records: lawsRules,
  },
  {
    slug: 'cases',
    title: 'Cases',
    kicker: 'Judicial materials',
    description:
      'Selected cases on derivative actions, unfair prejudice, schemes, directors’ duties, attribution, reflective loss, and shareholder governance.',
    records: cases,
  },
  {
    slug: 'academic-works',
    title: 'Academic Works',
    kicker: 'Books and scholarship',
    description:
      'Books, looseleaf commentaries, journal articles, and book chapters for doctrinal research and advanced study.',
    records: academicWorks,
  },
  {
    slug: 'practice-notes',
    title: 'Practice Notes',
    kicker: 'Practitioner analysis',
    description:
      'Official guidance, professional notes, and lawyer commentary that connect statutory doctrine to transactional and litigation practice.',
    records: practiceNotes,
  },
];

export function getCatalog(slug: string) {
  return catalogs.find((catalog) => catalog.slug === slug);
}
