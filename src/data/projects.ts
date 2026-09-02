import type { Project } from '../types'
import { projectImages } from './assets'

// GitHub links are set per project below. Demo / case-study links still pending.
const TODO_DEMO_LINK = 'TODO_ADD_DEMO_LINK'
const TODO_DETAILS_LINK = 'TODO_ADD_CASE_STUDY_LINK'

export const projects: Project[] = [
  {
    id: 'recova',
    name: 'Recova',
    description:
      'An AI physical-therapy coach that watches you move through your webcam and tells you when your form is off. It tracks your body with pose detection and talks you through the fix out loud. Built it in a weekend and it won.',
    category: 'Hackathons',
    imageSrc: projectImages.recova,
    imageKind: 'screenshot',
    tech: ['React', 'Flask', 'SQLite', 'MediaPipe', 'Claude Haiku'],
    githubUrl: 'https://github.com/ameer11838/Recova',
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
    award: '1st Place · NJIT Claude Builder Hackathon',
  },
  {
    id: 'fareflow',
    name: 'FareFlow',
    description:
      "Why pay a flat ticket price when you only rode five stops? FareFlow charges you for the ride you actually took, not some fixed fare somebody guessed at. Plan your trip, compare routes, track what you're spending, and watch the price adjust live for transfers, discounts, fare caps, disruptions, even bailing out early. There's an AI assistant built in that'll break down exactly why you're being charged what you're being charged. I built it because I was sick of transit apps treating the price like a black box.",
    category: 'FinTech',
    imageSrc: projectImages.fareflow,
    imageKind: 'mark',
    tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'JWT', 'TomTom API'],
    githubUrl: 'https://github.com/ameer11838/FareFlow',
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
  },
  {
    id: 'transparency-lens',
    name: 'Transparency Lens',
    description:
      "A dashboard that shows you, in real time, who's grabbing your data while you browse, and explains each tracker in plain English using an open LLM. The kind of thing I wish existed for everyone, not just people who read privacy policies.",
    category: 'Hackathons',
    imageSrc: projectImages.transparencyLens,
    imageKind: 'screenshot',
    tech: ['React', 'Node.js', 'MongoDB Atlas', 'Snowflake', 'WebSockets', 'Gemma'],
    githubUrl: 'https://github.com/ameer11838/Transparency-Lens',
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
    award: 'Best Use of MongoDB · KeanUHackThis 2026',
  },
  {
    id: 'proofly',
    name: 'Proofly',
    description:
      "Drop in a GitHub username, pick the career you're aiming for, and Proofly reads the actual code in your repos to tell you how strong your portfolio really is. It ranks up to 100 repositories against 11 career paths and scores each one out of 10 across five categories, always showing the files and lines it based the score on so it's never just a number you have to trust. The part I'm proudest of is the authorship check: on a forked repo it walks every branch, works out which commits are genuinely yours, and grades only the code you actually wrote.",
    category: 'Web Apps',
    imageSrc: projectImages.proofly,
    imageKind: 'mark',
    tech: ['React', 'TypeScript', 'Express', 'Node.js', 'GitHub REST API', 'Server-Sent Events'],
    githubUrl: 'https://github.com/ameer11838/Proofly',
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
  },
  {
    id: 'brain-tumor',
    name: 'Brain Tumor Classifier',
    description:
      "A model that reads MRI scans and calls the tumor type, north of 90% accuracy. I trained custom CNNs with transfer learning in TensorFlow and Keras, then pushed the numbers up with data augmentation and regularization. I also wired in Gemini 1.5 Flash so it explains each prediction in plain English, so someone who isn't a radiologist can actually follow why it said what it said.",
    category: 'AI/ML',
    imageSrc: projectImages.brainTumor,
    imageKind: 'mark',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNNs', 'Transfer Learning', 'Gemini 1.5 Flash'],
    githubUrl: 'https://github.com/ameer11838/Brain-Tumor-Classifacation-System-',
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
  },
  {
    id: 'masjidpay',
    name: 'MasjidPay',
    description:
      "A donation platform for mosques. It keeps clean donor records, tracks every transaction, and is built to handle a whole community without falling over. I started it because giving at my local masjid was still mostly cash and a spreadsheet.",
    category: 'FinTech',
    imageSrc: projectImages.masjidPay,
    imageKind: 'mark',
    tech: ['Java', 'Spring Boot', 'React', 'SQL', 'REST APIs'],
    githubUrl: 'https://github.com/ameer11838/MasjidPay',
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
  },
  {
    id: 'inventory',
    name: 'Inventory Management',
    description:
      "A web-based inventory dashboard for small businesses. Admins log in and manage product categories and items behind a proper auth wall. Nothing flashy, just a clean tool that does exactly what it says. I built it in plain PHP and MySQL on purpose, to really understand the fundamentals before reaching for a framework.",
    category: 'Web Apps',
    imageSrc: projectImages.inventory,
    imageKind: 'screenshot',
    tech: ['PHP', 'MySQL', 'HTML / CSS', 'Auth'],
    githubUrl: 'https://github.com/ameer11838/Inventory-Managment-App',
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
  },
  {
    id: 'discord-chat',
    name: 'Real-Time Chat & Video App',
    description:
      "A Discord-style app for texting and hopping on video calls. I built the chat, the video rooms, and a set of UI pieces I could reuse everywhere. The hard part was keeping everyone's screen in sync once a room filled up.",
    category: 'Web Apps',
    imageSrc: projectImages.discordChat,
    imageKind: 'mark',
    tech: ['React', 'Convex', 'WebSockets', 'WebRTC', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ameer11838/Discord-Clone',
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
  },
  {
    id: 'solar-physics',
    name: 'Solar Physics Classifier',
    description:
      "A research project that sorts NASA solar data into risk levels. We trained a Random Forest on SDO datasets, but most of the work was cleaning messy scientific data until the model was actually worth trusting.",
    category: 'Research',
    imageSrc: projectImages.solarPhysics,
    imageKind: 'mark',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'NASA/SDO Data', 'Binder'],
    githubUrl: 'https://github.com/ameer11838/Solar-Activity-Classifer-',
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
  },
  {
    id: 'ai-code-editor',
    name: 'AI Code Editor',
    description:
      "A code editor with an AI sitting next to you. It explains what your code does, autocompletes with real context, flags bugs, and runs your code in a sandbox through Judge0. Basically the pair programmer I wanted when I was starting out.",
    category: 'AI/ML',
    imageSrc: projectImages.aiCodeEditor,
    imageKind: 'screenshot',
    tech: ['TypeScript', 'React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Judge0'],
    githubUrl: 'https://github.com/ameer11838/AI-Code-Editor',
    demoUrl: TODO_DEMO_LINK,
    detailsUrl: TODO_DETAILS_LINK,
  },
]

export const PROJECT_FILTERS = ['All', 'AI/ML', 'FinTech', 'Web Apps', 'Research', 'Hackathons'] as const
