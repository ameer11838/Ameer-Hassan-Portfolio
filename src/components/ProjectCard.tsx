import { motion } from 'framer-motion'
import { Github, ExternalLink, Trophy } from 'lucide-react'
import type { Project } from '../types'

// Flat, non-gradient accent color per project — replace with real screenshot later
const ACCENT_COLORS: Record<string, string> = {
  'discord-chat': '#0a1526',
  'ai-code-editor': '#0e0820',
  'solar-physics': '#180e00',
  'masjidpay': '#001a0d',
  'recova': '#190008',
  'transparency-lens': '#001616',
}

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const accentColor = ACCENT_COLORS[project.id] ?? '#111111'
  const urlSlug = project.id.replace(/-/g, '')

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.24, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] bg-[#141414] hover:border-white/[0.13] transition-all duration-200"
    >
      {/* ── Browser window mockup ── */}
      <div className="border-b border-white/[0.06]">
        {/* Chrome bar */}
        <div className="flex items-center gap-2 px-3.5 h-[34px] bg-[#1c1c1c]">
          <div className="flex items-center gap-[5px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#3a3a3a]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#3a3a3a]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#3a3a3a]" />
          </div>
          <div className="flex-1 h-[18px] rounded-md bg-[#282828] flex items-center px-2 ml-1 max-w-[220px]">
            <span className="text-[10px] text-neutral-600 font-mono truncate">
              {urlSlug}.vercel.app
            </span>
          </div>
        </div>

        {/* Viewport — flat color + dot grid */}
        <div
          className="h-44 relative flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: accentColor }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          {/* Large muted initial — replace with <img> once you have screenshots */}
          <span
            className="relative select-none font-black text-white/[0.05]"
            style={{ fontSize: '110px', lineHeight: 1 }}
          >
            {project.name.charAt(0)}
          </span>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-indigo-500/[0.1] text-indigo-400 border border-indigo-500/20">
            {project.category}
          </span>
          {project.award && (
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-500/[0.08] text-amber-400 border border-amber-500/[0.18] flex items-center gap-1">
              <Trophy size={9} />
              {project.award}
            </span>
          )}
        </div>

        <h3 className="text-white font-semibold text-[15px] leading-snug mb-2 group-hover:text-neutral-200 transition-colors duration-150">
          {project.name}
        </h3>

        <p className="text-neutral-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-3 border-t border-white/[0.05]">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white text-xs font-medium transition-colors duration-150"
            >
              <Github size={13} /> Code
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-neutral-700 text-xs cursor-default select-none">
              <Github size={13} /> Add link
            </span>
          )}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white text-xs font-medium transition-colors duration-150"
            >
              <ExternalLink size={13} /> Live
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-neutral-700 text-xs cursor-default select-none">
              <ExternalLink size={13} /> Add demo
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
