import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'discord-chat',
    name: 'Real-Time Chat & Video App',
    description:
      'A full-stack real-time communication platform with chat, video calling, reusable UI components, and support for high-concurrency interactions.',
    category: 'Web Apps',
    tech: ['React', 'Convex', 'WebSockets', 'WebRTC', 'Tailwind CSS'],
    github: null,
    live: null,
  },
  {
    id: 'ai-code-editor',
    name: 'AI Code Editor',
    description:
      'An AI-powered coding environment with live chat explanations, code-aware autocomplete, bug detection, and sandboxed code execution through Judge0.',
    category: 'AI/ML',
    tech: ['TypeScript', 'React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Judge0'],
    github: null,
    live: null,
  },
  {
    id: 'solar-physics',
    name: 'Solar Physics AI/ML Classifier',
    description:
      'A machine learning research project that analyzed NASA/SDO solar activity data to classify solar behavior into discrete risk levels.',
    category: 'Research',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'NASA/SDO Data', 'Binder'],
    github: null,
    live: null,
  },
  {
    id: 'masjidpay',
    name: 'MasjidPay',
    description:
      'A community donation platform for mosques and nonprofits with structured donor records, transaction tracking, and a scalable backend architecture.',
    category: 'FinTech',
    tech: ['Java', 'Spring Boot', 'React', 'SQL', 'REST APIs'],
    github: null,
    live: null,
  },
  {
    id: 'recova',
    name: 'Recova — AI Physical Therapy Coach',
    description:
      'An AI-powered physical therapy coach that uses real-time pose tracking to analyze movement and deliver corrective feedback via natural language.',
    category: 'Hackathons',
    tech: ['React', 'Flask', 'SQLite', 'MediaPipe', 'Claude Haiku'],
    github: null,
    live: null,
    award: '1st Place — NJIT Claude Builder Hackathon',
  },
  {
    id: 'transparency-lens',
    name: 'Transparency Lens',
    description:
      'A real-time privacy dashboard that surfaces data exchange events and explains third-party tracking in plain English using an open-source LLM.',
    category: 'Hackathons',
    tech: ['React', 'Node.js', 'MongoDB Atlas', 'Snowflake', 'WebSockets', 'Gemma'],
    github: null,
    live: null,
    award: 'Best Use of MongoDB — KeanUHackThis 2026',
  },
]

export const PROJECT_FILTERS = ['All', 'AI/ML', 'FinTech', 'Web Apps', 'Research', 'Hackathons'] as const
