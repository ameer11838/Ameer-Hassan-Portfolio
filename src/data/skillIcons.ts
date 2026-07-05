import type { IconType } from 'react-icons'
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiC, SiHtml5,
  SiReact, SiNodedotjs, SiFlask, SiSpringboot, SiTensorflow, SiScikitlearn,
  SiPandas, SiNumpy, SiSelenium, SiTailwindcss, SiGit, SiGithub, SiJupyter,
  SiPostman, SiJira, SiConfluence, SiMongodb, SiPostgresql, SiMysql,
  SiSqlite, SiSnowflake, SiVercel, SiConvex, SiOpenjdk,
} from 'react-icons/si'
import { Database, Cloud, Code2, Package } from 'lucide-react'

type Meta = { Icon: IconType; color: string }

// Brand icon + a colour that reads well on near-black.
// Dark-brand marks (GitHub, Vercel, Flask) fall back to a soft neutral.
const NEUTRAL = '#C1C1C6'

export const SKILL_META: Record<string, Meta> = {
  Python:          { Icon: SiPython,      color: '#5A9FD4' },
  Java:            { Icon: SiOpenjdk,     color: '#E76F00' },
  JavaScript:      { Icon: SiJavascript,  color: '#F7DF1E' },
  TypeScript:      { Icon: SiTypescript,  color: '#3178C6' },
  SQL:             { Icon: Database,      color: NEUTRAL },
  'HTML / CSS':    { Icon: SiHtml5,       color: '#E34F26' },
  'C++':           { Icon: SiCplusplus,   color: '#00599C' },
  C:               { Icon: SiC,           color: '#A8B9CC' },

  React:           { Icon: SiReact,       color: '#61DAFB' },
  'Node.js':       { Icon: SiNodedotjs,   color: '#5FA04E' },
  Flask:           { Icon: SiFlask,       color: NEUTRAL },
  'Spring Boot':   { Icon: SiSpringboot,  color: '#6DB33F' },
  TensorFlow:      { Icon: SiTensorflow,  color: '#FF6F00' },
  'scikit-learn':  { Icon: SiScikitlearn, color: '#F7931E' },
  Pandas:          { Icon: SiPandas,      color: '#E70488' },
  NumPy:           { Icon: SiNumpy,       color: '#4DABCF' },
  Selenium:        { Icon: SiSelenium,    color: '#43B02A' },
  'Tailwind CSS':  { Icon: SiTailwindcss, color: '#06B6D4' },

  Git:             { Icon: SiGit,         color: '#F05032' },
  GitHub:          { Icon: SiGithub,      color: NEUTRAL },
  'VS Code':       { Icon: Code2,         color: '#3B82F6' },
  'Jupyter Notebook': { Icon: SiJupyter,  color: '#F37626' },
  Postman:         { Icon: SiPostman,     color: '#FF6C37' },
  Jira:            { Icon: SiJira,        color: '#2684FF' },
  Confluence:      { Icon: SiConfluence,  color: '#2684FF' },
  Binder:          { Icon: Package,       color: NEUTRAL },

  'AWS S3':        { Icon: Cloud,         color: '#FF9900' },
  'MongoDB Atlas': { Icon: SiMongodb,     color: '#47A248' },
  PostgreSQL:      { Icon: SiPostgresql,  color: '#5A8FD4' },
  MySQL:           { Icon: SiMysql,       color: '#4479A1' },
  SQLite:          { Icon: SiSqlite,      color: '#59B4D9' },
  Snowflake:       { Icon: SiSnowflake,   color: '#29B5E8' },
  Vercel:          { Icon: SiVercel,      color: NEUTRAL },
  Convex:          { Icon: SiConvex,      color: '#F3502F' },
}

export const FALLBACK_META: Meta = { Icon: Code2, color: NEUTRAL }
