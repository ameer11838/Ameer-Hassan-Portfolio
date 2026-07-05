import type { LeadershipItem } from '../types'
import { logos } from './assets'

export const leadership: LeadershipItem[] = [
  // ── PROGRAMS / FELLOWSHIPS ────────────────────────────────
  {
    id: 'btt',
    title: 'AI/ML Fellow',
    organization: 'Break Through Tech AI',
    type: 'Cornell Tech · Apprenticeship',
    period: 'Mar 2026 – Present',
    logoSrc: logos.btt,
    description:
      "Selected from 4,500+ applicants for Cornell Tech's Break Through Tech AI program. I'm finishing a Machine Learning Foundations course and building an AI Studio project with a cohort of ML Fellows, partnering with sponsors like Google and Salesforce on real AI challenges, with mentorship and career support the whole way through.",
    category: 'programs',
  },
  {
    id: 'bny',
    title: 'Sophomore Summit · Pre-Internship',
    organization: 'BNY',
    type: 'Apprenticeship',
    period: 'Mar 2026 – Jul 2026',
    logoSrc: logos.bny,
    description:
      "Invite-only finance and technology program for high-potential undergrads. A real look inside BNY's engineering and trading floor, and how a global bank actually runs its tech.",
    category: 'programs',
  },
  {
    id: 'any',
    title: 'FirstGenU Fellow',
    organization: 'America Needs You',
    type: 'Career Fellowship · Remote',
    period: 'Sep 2025 – Dec 2025',
    logoSrc: logos.any,
    description:
      "A competitive four-month program for first-generation, low-income college students. I built professional skills through one-on-one mentorship and career workshops focused on turning ambition into an actual plan.",
    category: 'programs',
  },
  {
    id: 'codepath',
    title: 'Tech Fellow · Interview Prep',
    organization: 'CodePath',
    type: 'Nationwide Program · Remote',
    period: 'Aug 2025 – Dec 2025',
    logoSrc: logos.codepath,
    description:
      "A competitive nationwide interview-prep program. I've worked through 100+ LeetCode-style problems, done weekly mock interviews with peer and mentor feedback, and drilled arrays, trees, graphs, recursion, and DP, all mentored by engineers from Google, Meta, and Microsoft.",
    category: 'programs',
  },
  // ── LEADERSHIP ROLES ────────────────────────────────────────
  {
    id: 'shpe',
    title: 'Pre-College Committee Officer',
    organization: 'SHPE · NJIT Chapter',
    type: 'Society of Hispanic Professional Engineers',
    period: 'Nov 2025 – Present',
    logoSrc: logos.shpe,
    description:
      "I help run SHPE's Pre-College Committee, doing bilingual STEM outreach that gets K-12 students and their families excited about engineering. I design hands-on demos and help prep signature events like Día de Ciencias and Equipando Padres.",
    category: 'leadership',
  },
  {
    id: 'icpc',
    title: 'Youth Committee Member',
    organization: 'Islamic Center of Passaic County',
    type: 'Community · Paterson, NJ',
    period: 'Apr 2025 – Present',
    logoSrc: logos.icpc,
    description:
      "I work with the board to plan and run youth events for kids in the local Muslim community. It's the kind of programming that keeps people connected and gives younger kids something to show up for.",
    category: 'leadership',
  },
  {
    id: 'isotope',
    title: 'ISOTOPE Ambassador',
    organization: 'NJIT ISOTOPE',
    type: 'AANAPI Student Community',
    period: 'Sep 2025 – Present',
    logoSrc: logos.njit,
    description:
      "I support students in the AANAPI community through mentorship and events built around cultural identity and student success, and I help first-year students settle into campus, academically and socially.",
    category: 'leadership',
  },
]
