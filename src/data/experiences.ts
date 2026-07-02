import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: 'fiserv',
    company: 'Fiserv',
    role: 'Software Engineering Intern',
    team: 'Enterprise Marketplace Solutions',
    period: 'June 2026 – Present',
    location: 'Berkeley Heights, NJ',
    current: true,
    description:
      'Building an AI-powered automation agent that generates enterprise test cases across positive, negative, boundary, edge case, and validation scenarios — reducing manual QA effort and improving test consistency.',
    tech: ['Java', 'Selenium', 'Cucumber', 'Jira API', 'Confluence API', 'GitHub Copilot'],
    logoText: 'Fi',
    logoBg: '#3d1a00',
    logoColor: '#fb923c',
  },
  {
    id: 'arkra',
    company: 'Arkra',
    role: 'Software Engineering Intern',
    team: 'Data Pipelines & Market Intelligence',
    period: 'Oct 2025 – Mar 2026',
    location: 'Newport Beach, CA',
    current: false,
    description:
      'Built SEC EDGAR scraping and LLM extraction pipelines for 10-K and 10-Q financial filings using Playwright and OpenAI, then designed metadata filtering workflows before uploading structured data to AWS S3.',
    tech: ['Python', 'Playwright', 'OpenAI API', 'AWS S3'],
    logoText: 'Ar',
    logoBg: '#0f172a',
    logoColor: '#60a5fa',
  },
  {
    id: 'njit-research',
    company: 'NJIT Ying Wu College of Computing',
    role: 'AI/ML Research Assistant',
    team: 'Solar Physics Research Lab',
    period: 'June 2025 – Jan 2026',
    location: 'Newark, NJ',
    current: false,
    description:
      'Worked on AI/ML-driven solar physics research using NASA/SDO datasets. Co-developed a Random Forest-based Solar Activity Classifier that categorized solar events into risk levels.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'NASA/SDO Data', 'Binder'],
    logoText: 'NJ',
    logoBg: '#3f0000',
    logoColor: '#f87171',
  },
  {
    id: 'njit-mentor',
    company: 'NJIT Learning Committee',
    role: 'Technical Peer Mentor',
    team: 'CS Mentorship Program',
    period: 'June 2025 – Present',
    location: 'Newark, NJ',
    current: true,
    description:
      'Mentoring first-year CS students in Java, Python, debugging, and technical project development through 1-on-1 sessions and group workshops. Supporting hackathon prep and technical events.',
    tech: ['Java', 'Python', 'Debugging', 'Technical Mentorship'],
    logoText: 'NJ',
    logoBg: '#3f0000',
    logoColor: '#f87171',
  },
]
