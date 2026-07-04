export interface Experience {
  id: string
  company: string
  role: string
  team: string
  period: string
  location: string
  current: boolean
  logoSrc: string
  description: string
  tech: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  category: ProjectCategory
  imageSrc: string
  tech: string[]
  githubUrl: string
  demoUrl: string
  detailsUrl: string
  award?: string
}

export type ProjectCategory = 'All' | 'AI/ML' | 'FinTech' | 'Web Apps' | 'Research' | 'Hackathons'

export type LeadershipCategory = 'leadership' | 'programs'

export interface LeadershipItem {
  id: string
  title: string
  organization: string
  type: string
  period: string
  logoSrc: string
  description: string
  category: LeadershipCategory
}

export interface SkillGroup {
  category: string
  skills: string[]
}
