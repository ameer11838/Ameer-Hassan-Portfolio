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
            className={`relative text-sm px-3.5 py-1.5 rounded-lg font-medium transition-all duration-150 ${
              isActive
                ? 'text-white bg-white/[0.1] border border-white/[0.12]'
                : 'text-neutral-500 bg-transparent border border-transparent hover:text-neutral-200 hover:bg-white/[0.04]'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-lg bg-white/[0.07] border border-white/[0.1]"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
              />
            )}
            <span className="relative">
              {filter}
              {counts[filter] !== undefined && (
                <span className={`ml-1.5 text-[11px] ${isActive ? 'text-neutral-400' : 'text-neutral-600'}`}>
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
