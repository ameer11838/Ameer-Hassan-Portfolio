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
      "I'm building an AI agent that reads Jira tickets and Confluence specs and writes the test cases for them — positive, negative, boundary, edge, and validation. It plugs into our Selenium and Cucumber setup, so engineers spend a lot less time hand-writing tests.",
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
      "I built the pipelines that pull 10-K and 10-Q filings off SEC EDGAR and use an LLM to extract the numbers that matter, then shipped the clean data to S3. The scraping was easy — making the extractions reliable enough to trust downstream was the real job.",
    tech: ['Python', 'Playwright', 'OpenAI API', 'AWS S3'],
  },
  {
    id: 'seo',
    company: 'SEO (Sponsors for Educational Opportunity)',
    role: 'Tech Developer',
    team: 'SEO Tech Developer Program',
    period: '2025 – Present',
    location: 'New York, NY',
    current: true,
    logoSrc: logos.seo,
    description:
      "Picked for SEO's Tech Developer program — an intense track built around technical interview prep, data structures and algorithms, and mock interviews meant to get you into top software firms. It's basically a gauntlet for the hardest parts of CS recruiting, plus a network of people grinding through it alongside you.",
    tech: ['Data Structures', 'Algorithms', 'System Design', 'Interview Prep'],
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
      "AI/ML research on NASA solar data. I helped build a Random Forest that sorts solar events into risk levels. Getting a model to hold up on messy scientific data is a different game than benchmarks — the ceiling is data quality, and that's where we spent our time.",
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
      "I mentor first-year CS students — Java, Python, debugging, and getting their first real projects off the ground. I also run hackathon prep workshops throughout the year.",
    tech: ['Java', 'Python', 'Debugging', 'Technical Mentorship'],
  },
]
