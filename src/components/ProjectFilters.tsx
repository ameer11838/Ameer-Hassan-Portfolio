import { motion } from 'framer-motion'
import type { ProjectCategory } from '../types'
import { PROJECT_FILTERS } from '../data/projects'

interface Props {
  active: ProjectCategory
  onChange: (filter: ProjectCategory) => void
  counts: Record<string, number>
}

export default function ProjectFilters({ active, onChange, counts }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {PROJECT_FILTERS.map((filter) => {
        const isActive = active === filter
        return (
          <button
            key={filter}
            onClick={() => onChange(filter as ProjectCategory)}
            className="relative rounded-lg px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200"
            style={{
              color: isActive ? '#FFFFFF' : '#64748B',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.color = '#CBD5E1'
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.color = '#64748B'
            }}
          >
            {isActive && (
              <motion.span
                layoutId="project-filter-pill"
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'rgba(59,130,246,0.12)',
                  border: '1px solid rgba(59,130,246,0.35)',
                  boxShadow: '0 0 20px -6px rgba(59,130,246,0.4)',
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-2">
              {filter}
              {counts[filter] !== undefined && (
                <span
                  className="text-[10px] font-mono"
                  style={{ color: isActive ? '#93C5FD' : '#334155' }}
                >
                  {counts[filter]}
                </span>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}
