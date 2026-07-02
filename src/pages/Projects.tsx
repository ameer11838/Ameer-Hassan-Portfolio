import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ProjectCard from '../components/ProjectCard'
import ProjectFilters from '../components/ProjectFilters'
import { projects, PROJECT_FILTERS } from '../data/projects'
import type { ProjectCategory } from '../types'

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500 shrink-0">
        {label}
      </span>
      <div className="flex-1 h-px bg-white/[0.05]" />
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('All')

  const isShowAll = filter === 'All'
  const awardProjects = projects.filter((p) => p.award)
  const regularProjects = projects.filter((p) => !p.award)
  const filtered = projects.filter((p) => p.category === filter)

  // Counts per filter tab
  const counts = Object.fromEntries(
    PROJECT_FILTERS.map((f) => [
      f,
      f === 'All' ? projects.length : projects.filter((p) => p.category === f).length,
    ]),
  )

  return (
    <PageTransition>
      <div className="page-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            {projects.length} projects &middot; {awardProjects.length} award-winning
          </p>

          <ProjectFilters active={filter} onChange={setFilter} counts={counts} />
        </motion.div>

        {/* All view — featured + regular sections */}
        {isShowAll && (
          <AnimatePresence mode="wait">
            <motion.div
              key="all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Award-winning */}
              <SectionDivider label="Award-Winning" />
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {awardProjects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>

              {/* Rest */}
              <SectionDivider label="Other Projects" />
              <div className="grid sm:grid-cols-2 gap-5">
                {regularProjects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Filtered view */}
        {!isShowAll && (
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.length > 0 ? (
                <motion.div layout className="grid sm:grid-cols-2 gap-5">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((project, i) => (
                      <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <p className="text-neutral-600 text-sm text-center py-20">
                  No projects in this category yet.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </PageTransition>
  )
}
