import { motion } from 'framer-motion'
import { GitBranch, ExternalLink, Trophy, BookOpen } from 'lucide-react'
import type { Project } from '../types'

interface Props {
  project: Project
  index: number
}

function isReal(url: string): boolean {
  return !!url && !url.startsWith('TODO_')
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      {/* Project thumbnail with zoom */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '16/9', background: '#050B18' }}
      >
        <img
          src={project.imageSrc}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        />

        {/* Blue overlay tint on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 40%, rgba(59,130,246,0.15) 100%)',
          }}
        />

        {/* Award badge overlay */}
        {project.award && (
          <div className="absolute top-3 left-3">
            <span
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold backdrop-blur-md"
              style={{
                background: 'rgba(251,191,36,0.15)',
                color: '#FCD34D',
                border: '1px solid rgba(251,191,36,0.3)',
              }}
            >
              <Trophy size={9} />
              {project.award}
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category */}
        <div className="mb-3">
          <span
            className="text-[11px] font-medium px-2 py-0.5 rounded"
            style={{
              background: 'rgba(59,130,246,0.06)',
              color: '#60A5FA',
              border: '1px solid rgba(59,130,246,0.15)',
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-white text-[16px] leading-snug mb-2 group-hover:text-blue-300 transition-colors duration-200">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-[13px] leading-relaxed mb-4 flex-1 line-clamp-3" style={{ color: '#94A3B8' }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="tag-neutral">{t}</span>
          ))}
        </div>

        {/* Action buttons */}
        <div
          className="flex items-center gap-2 pt-3"
          style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}
        >
          {isReal(project.githubUrl) ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-all duration-200"
              style={{ color: '#94A3B8', border: '1px solid rgba(255,255,255,0.06)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#60A5FA'
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
                e.currentTarget.style.background = 'rgba(59,130,246,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94A3B8'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <GitBranch size={12} /> Code
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs"
              style={{ color: '#334155', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <GitBranch size={12} /> Code
            </span>
          )}
          {isReal(project.demoUrl) ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-all duration-200"
              style={{ color: '#94A3B8', border: '1px solid rgba(255,255,255,0.06)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#60A5FA'
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
                e.currentTarget.style.background = 'rgba(59,130,246,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94A3B8'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs"
              style={{ color: '#334155', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <ExternalLink size={12} /> Live Demo
            </span>
          )}
          {isReal(project.detailsUrl) && (
            <a
              href={project.detailsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-all duration-200"
              style={{ color: '#94A3B8', border: '1px solid rgba(255,255,255,0.06)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#60A5FA'
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
                e.currentTarget.style.background = 'rgba(59,130,246,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94A3B8'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <BookOpen size={12} /> Details
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
