import type { Project } from '../types'
import { projectImages } from './assets'

// TODO: replace these placeholders per project when the links are ready.
const TODO_GITHUB_LINK = 'TODO_ADD_GITHUB_LINK'
const TODO_DEMO_LINK = 'TODO_ADD_DEMO_LINK'
const TODO_DETAILS_LINK = 'TODO_ADD_CASE_STUDY_LINK'

export const projects: Project[] = [
  {
    id: 'discord-chat',
    name: 'Real-Time Chat & Video App',
    description:
      'A full-stack real-time communication platform with chat, video calling, reusable UI components, and support for high-concurrency interactions.',
    category: 'Web Apps',
    imageSrc: projectImages.discordChat,
    tech: ['React', 'Convex', 'WebSockets', 'WebRTC', 'Tailwind CSS'],
    githubUrl: TODO_GITHUB_LINK,
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
  },
  {
    id: 'ai-code-editor',
    name: 'AI Code Editor',
    description:
      'An AI-powered coding environment with live chat explanations, code-aware autocomplete, bug detection, and sandboxed code execution through Judge0.',
    category: 'AI/ML',
    imageSrc: projectImages.aiCodeEditor,
    tech: ['TypeScript', 'React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Judge0'],
    githubUrl: TODO_GITHUB_LINK,
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
  },
  {
    id: 'solar-physics',
    name: 'Solar Physics AI/ML Classifier',
    description:
      'A machine learning research project that analyzed NASA/SDO solar activity data to classify solar behavior into discrete risk levels.',
    category: 'Research',
    imageSrc: projectImages.solarPhysics,
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'NASA/SDO Data', 'Binder'],
    githubUrl: TODO_GITHUB_LINK,
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
  },
  {
    id: 'masjidpay',
    name: 'MasjidPay',
    description:
      'A community donation platform for mosques and nonprofits with structured donor records, transaction tracking, and a scalable backend architecture.',
    category: 'FinTech',
    imageSrc: projectImages.masjidPay,
    tech: ['Java', 'Spring Boot', 'React', 'SQL', 'REST APIs'],
    githubUrl: TODO_GITHUB_LINK,
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
  },
  {
    id: 'recova',
    name: 'Recova — AI Physical Therapy Coach',
    description:
      'An AI-powered physical therapy coach that uses real-time pose tracking to analyze movement and deliver corrective feedback via natural language.',
    category: 'Hackathons',
    imageSrc: projectImages.recova,
    tech: ['React', 'Flask', 'SQLite', 'MediaPipe', 'Claude Haiku'],
    githubUrl: TODO_GITHUB_LINK,
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
    award: '1st Place — NJIT Claude Builder Hackathon',
  },
  {
    id: 'transparency-lens',
    name: 'Transparency Lens',
    description:
      'A real-time privacy dashboard that surfaces data exchange events and explains third-party tracking in plain English using an open-source LLM.',
    category: 'Hackathons',
    imageSrc: projectImages.transparencyLens,
    tech: ['React', 'Node.js', 'MongoDB Atlas', 'Snowflake', 'WebSockets', 'Gemma'],
    githubUrl: TODO_GITHUB_LINK,
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
    award: 'Best Use of MongoDB — KeanUHackThis 2026',
  },
]

export const PROJECT_FILTERS = ['All', 'AI/ML', 'FinTech', 'Web Apps', 'Research', 'Hackathons'] as const
