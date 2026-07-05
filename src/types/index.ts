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
  /** How to render the cover: a wide screenshot (cover-fill), a square mark
   *  (centered on charcoal), or none (typographic cover). Defaults to screenshot. */
  imageKind?: 'screenshot' | 'mark' | 'text'
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
  /** How much of the tile the logo fills (object-contain fraction). Default 0.6. */
  logoContain?: number
}

export interface SkillGroup {
  category: string
  skills: string[]
}
