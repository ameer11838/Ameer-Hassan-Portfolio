import type { LeadershipItem } from '../types'
import { logos } from './assets'

export const leadership: LeadershipItem[] = [
  // ── PROGRAMS / FELLOWSHIPS ────────────────────────────────
  {
    id: 'btt',
    title: 'AI/ML Fellow',
    organization: 'Break Through Tech AI',
    type: 'Cornell Tech Partnership',
    period: '2025 – 2026',
    logoSrc: logos.btt,
    description:
      "Selected for Cornell Tech's Break Through Tech AI fellowship — applied ML curriculum, real client projects, industry mentorship.",
    category: 'programs',
  },
  {
    id: 'bny',
    title: 'Sophomore Summit Fellow',
    organization: 'BNY Mellon',
    type: 'Pre-Internship Program',
    period: '2025',
    logoSrc: logos.bny,
    description:
      "Invite-only finance and technology program for high-potential undergraduates — exposure to BNY's tech and trading floor.",
    category: 'programs',
  },
  {
    id: 'any',
    title: 'FirstGenU Fellow',
    organization: 'America Needs You',
    type: 'Career Development Fellowship',
    period: '2024 – Present',
    logoSrc: logos.any,
    description:
      'Two-year fellowship pairing first-generation college students with professional mentors and career development coaching.',
    category: 'programs',
  },
  {
    id: 'codepath',
    title: 'Tech Fellow',
    organization: 'CodePath',
    type: 'Software Engineering Course',
    period: '2024',
    logoSrc: logos.codepath,
    description:
      "Completed CodePath's technical interview prep track — data structures, algorithms, and system design fundamentals.",
    category: 'programs',
  },
  {
    id: 'headstarter',
    title: 'AI Software Engineering Fellow',
    organization: 'Headstarter',
    type: 'AI Fellowship',
    period: '2024',
    logoSrc: logos.headstarter,
    description:
      'Built and shipped multiple AI-powered projects in a fast-paced fellowship using modern LLM APIs and full-stack tools.',
    category: 'programs',
  },
  // ── LEADERSHIP ROLES ────────────────────────────────────────
  {
    id: 'shpe',
    title: 'Pre-College Committee Officer',
    organization: 'SHPE — NJIT Chapter',
    type: 'Society of Hispanic Professional Engineers',
    period: '2024 – Present',
    logoSrc: logos.shpe,
    description:
      'Leads outreach to high school students exploring STEM careers — organizes events connecting pre-college students with engineers.',
    category: 'leadership',
  },
  {
    id: 'icpc',
    title: 'Youth Committee Member',
    organization: 'Islamic Center of Passaic County',
    type: 'Community Organization',
    period: '2022 – Present',
    logoSrc: logos.icpc,
    description:
      "Organizes youth programs and community events at one of NJ's most active Islamic centers, serving hundreds of families.",
    category: 'leadership',
  },
  {
    id: 'isotope',
    title: 'Student Ambassador',
    organization: 'NJIT ISOTOPE',
    type: 'University Ambassadors Program',
    period: '2024 – Present',
    logoSrc: logos.isotope,
    description:
      "Represents NJIT to prospective students and families — leads campus tours, information sessions, and admissions outreach events.",
    category: 'leadership',
  },
]
