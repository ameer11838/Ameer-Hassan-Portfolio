import type { Experience } from '../types'
import { logos } from './assets'

export const experiences: Experience[] = [
  {
    id: 'fiserv',
    company: 'Fiserv',
    role: 'Software Engineering Intern',
    team: 'Enterprise Marketplace Solutions',
    period: 'June 2026 – Present',
    location: 'Berkeley Heights, NJ',
    current: true,
    logoSrc: logos.fiserv,
    description:
      'Building an AI-powered automation agent that generates enterprise test cases across positive, negative, boundary, edge case, and validation scenarios — reducing manual QA effort and improving test consistency.',
    tech: ['Java', 'Selenium', 'Cucumber', 'Jira API', 'Confluence API', 'GitHub Copilot'],
  },
  {
    id: 'arkra',
    company: 'Arkra',
    role: 'Software Engineering Intern',
    team: 'Data Pipelines & Market Intelligence',
    period: 'Oct 2025 – Mar 2026',
    location: 'Newport Beach, CA',
    current: false,
    logoSrc: logos.arkra,
    description:
      'Built SEC EDGAR scraping and LLM extraction pipelines for 10-K and 10-Q financial filings using Playwright and OpenAI, then designed metadata filtering workflows before uploading structured data to AWS S3.',
    tech: ['Python', 'Playwright', 'OpenAI API', 'AWS S3'],
  },
  {
    id: 'njit-research',
    company: 'NJIT',
    role: 'AI/ML Research Assistant',
    team: 'Ying Wu College of Computing',
    period: 'June 2025 – Jan 2026',
    location: 'Newark, NJ',
    current: false,
    logoSrc: logos.njit,
    description:
      'Worked on AI/ML-driven solar physics research using NASA/SDO datasets. Co-developed a Random Forest-based Solar Activity Classifier that categorized solar events into risk levels.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'NASA/SDO Data', 'Binder'],
  },
  {
    id: 'njit-mentor',
    company: 'NJIT',
    role: 'Technical Peer Mentor',
    team: 'Learning Committee',
    period: 'June 2025 – Present',
    location: 'Newark, NJ',
    current: true,
    logoSrc: logos.njit,
    description:
      'Mentoring first-year CS students in Java, Python, debugging, and technical project development. Supporting hackathon prep workshops and technical events throughout the year.',
    tech: ['Java', 'Python', 'Debugging', 'Technical Mentorship'],
  },
]
