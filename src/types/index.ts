export interface Experience {
  id: string
  company: string
  role: string
  team: string
  period: string
  location: string
  current: boolean
  description: string
  tech: string[]
  logoUrl: string
  logoText: string
  logoBg: string
  logoColor: string
}

export interface Project {
  id: string
  name: string
  description: string
  category: ProjectCategory
  tech: string[]
  github: string | null
  live: string | null
  award?: string
}

export type ProjectCategory = 'All' | 'AI/ML' | 'FinTech' | 'Web Apps' | 'Research' | 'Hackathons'

export interface LeadershipItem {
  id: string
  title: string
  organization: string
  type: string
  logoUrl: string
  logoText: string
  logoBg: string
  logoColor: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}
