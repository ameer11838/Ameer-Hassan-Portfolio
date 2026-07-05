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
      "I'm building an AI automation agent that helps out the QA team. It reads Jira tickets and Confluence specs and automatically writes the manual test cases QA would otherwise spend hours on, covering positive, negative, boundary, edge, and validation scenarios. It plugs into our Selenium and Cucumber setup so the team moves a lot faster.",
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
      "I built the pipelines that pull 10-K and 10-Q filings off SEC EDGAR and use an LLM to extract the numbers that matter, then shipped the clean data to S3. The scraping was the easy part. The real work was making the extractions reliable enough to trust downstream.",
    tech: ['Python', 'Playwright', 'OpenAI API', 'AWS S3'],
  },
  {
    id: 'seo',
    company: 'SEO (Sponsors for Educational Opportunity)',
    role: 'SEO Tech Developer',
    team: 'SEO Tech Developer Program · Internship',
    period: 'May 2026 – Present',
    location: 'New York, NY',
    current: true,
    logoSrc: logos.seo,
    description:
      "300+ hours of intense CS and software engineering training covering data structures, algorithms, and full-stack web development. We work in SCRUM-style teams to design, test, and ship full-stack apps with Python (Flask), MySQL, and a JavaScript, HTML, and CSS front end. It's a grind, but the kind that makes you fast.",
    tech: ['Python', 'Flask', 'MySQL', 'JavaScript', 'Data Structures', 'Algorithms'],
  },
  {
    id: 'headstarter',
    company: 'Headstarter',
    role: 'Software Engineering Resident',
    team: 'Software Engineering Residency',
    period: 'Jul 2025 – Oct 2025',
    location: 'New York, NY',
    current: false,
    logoSrc: logos.headstarter,
    description:
      "Built 14+ ML, AI engineering, and full-stack projects in fast-moving teams. That included 5+ neural networks in Python and 11 apps in TypeScript on AWS and Vercel, plus LLM chaining, hyperparameter tuning, and fine-tuning across 10+ models, mentored by engineers from Google, Two Sigma, Tesla, Figma, and Citadel.",
    tech: ['Python', 'TypeScript', 'LLMs', 'Neural Networks', 'AWS', 'Vercel'],
  },
  {
    id: 'njit-research',
    company: 'NJIT',
    role: 'AI/ML Research Assistant',
    team: 'Ying Wu College of Computing',
    period: 'June 2025 – Jan 2026',
    location: 'Newark, NJ',
    current: false,
    logoSrc: logos.yingWu,
    description:
      "AI/ML research under Prof. James Wang. I helped build models on NASA solar data, doing literature review, cleaning messy datasets, and testing predictive models in Python to support academic publications. Getting a model to hold up on real scientific data is a different game than benchmarks. The ceiling is data quality, and that's where we spent our time.",
    tech: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'NASA/SDO Data'],
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
      "I was picked to mentor first-year students in the College of Computing on study strategies, time management, and figuring out where all the resources actually are. Through the Learning Committee I help run workshops and one-on-one check-ins to keep new students engaged and on track.",
    tech: ['Mentorship', 'Java', 'Python', 'Workshops'],
  },
]
