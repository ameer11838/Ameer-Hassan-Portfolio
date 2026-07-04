import { motion } from 'framer-motion'
import { GitBranch, ExternalLink, Trophy, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { projects } from '../data/projects'
import type { Project } from '../types'

const inView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

function isReal(url: string) {
  return !!url && !url.startsWith('TODO_')
}

// ═════════════════════════════════════════════════════════
//  Featured Hero — the award-winner gets full editorial treatment
// ═════════════════════════════════════════════════════════
function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      {...inView}
      className="relative overflow-hidden rounded-3xl mb-8"
      style={{ background: '#0A0A0F', border: '1px solid rgba(244,114,182,0.15)' }}
    >
      {/* Award ribbon */}
      <div className="absolute top-8 left-8 z-10 flex items-center gap-2">
        <span
          className="marker rounded-full px-2.5 py-1"
          style={{
            background: 'rgba(251,191,36,0.12)',
            color: '#FCD34D',
            border: '1px solid rgba(251,191,36,0.35)',
            letterSpacing: '0.12em',
          }}
        >
          <Trophy size={10} className="inline mr-1" strokeWidth={2.5} />
          Award-winner
        </span>
        <span className="marker" style={{ color: 'var(--text-3)' }}>
          Featured · {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Full-bleed thumbnail */}
      <div className="relative aspect-[21/9] overflow-hidden group">
        <img
          src={project.imageSrc}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 40%, rgba(10,10,15,0.95) 100%)',
          }}
        />

        {/* Award callout on image */}
        {project.award && (
          <div className="absolute bottom-8 left-8 right-8 max-w-3xl">
            <p className="serif italic text-[14px] mb-2" style={{ color: '#FCD34D' }}>
              {project.award}
            </p>
            <h2
              className="text-white font-black tracking-tight leading-[0.95]"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '-0.02em' }}
            >
              {project.name}
            </h2>
          </div>
        )}
      </div>

      {/* Content strip below */}
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 p-8 sm:p-12">
        <div>
          <p className="marker mb-3" style={{ color: '#F472B6' }}>
            {project.category}
          </p>
          <p className="text-[17px] leading-[1.65]" style={{ color: 'var(--text)' }}>
            {project.description}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="marker mb-3" style={{ color: 'var(--text-3)' }}>Built with</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {isReal(project.githubUrl) ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline !py-2 !text-[13px]">
                <GitBranch size={13} /> Code
              </a>
            ) : (
              <span className="btn-outline !py-2 !text-[13px] opacity-40 cursor-default">
                <GitBranch size={13} /> Code
              </span>
            )}
            {isReal(project.demoUrl) ? (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline !py-2 !text-[13px]">
                <ExternalLink size={13} /> Live
              </a>
            ) : (
              <span className="btn-outline !py-2 !text-[13px] opacity-40 cursor-default">
                <ExternalLink size={13} /> Live
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

// ═════════════════════════════════════════════════════════
//  Split Row — image-left, text-right (or reversed)
// ═════════════════════════════════════════════════════════
function SplitProject({
  project,
  reverse = false,
  accentColor,
}: {
  project: Project
  reverse?: boolean
  accentColor: string
}) {
  return (
    <motion.article
      {...inView}
      className="grid md:grid-cols-2 gap-8 mb-16 items-center"
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-2xl group ${reverse ? 'md:order-2' : ''}`}
        style={{ aspectRatio: '4/3' }}
      >
        <img
          src={project.imageSrc}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>

      {/* Content */}
      <div className={reverse ? 'md:order-1' : ''}>
        <div className="flex items-center gap-3 mb-4">
          <span className="marker" style={{ color: accentColor }}>{project.category}</span>
          {project.award && (
            <span
              className="marker rounded-full px-2 py-0.5"
              style={{
                background: 'rgba(251,191,36,0.1)',
                color: '#FCD34D',
                border: '1px solid rgba(251,191,36,0.25)',
              }}
            >
              <Trophy size={9} className="inline mr-0.5" /> Award
            </span>
          )}
        </div>

        <h3
          className="text-white font-black mb-4 tracking-tight leading-[1]"
          style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
        >
          {project.name}
        </h3>

        <p className="text-[16px] leading-[1.65] mb-6" style={{ color: 'var(--text-2)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="flex gap-2 items-center text-[13px]">
          {isReal(project.githubUrl) ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="editorial-link inline-flex items-center gap-1 hover:text-blue-400">
              <GitBranch size={12} /> Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 opacity-30">
              <GitBranch size={12} /> Code
            </span>
          )}
          <span style={{ color: 'var(--text-4)' }}>·</span>
          {isReal(project.demoUrl) ? (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="editorial-link inline-flex items-center gap-1 hover:text-blue-400">
              <ExternalLink size={12} /> Live demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 opacity-30">
              <ExternalLink size={12} /> Live demo
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

// ═════════════════════════════════════════════════════════
//  Compact Row — small, list-style entry
// ═════════════════════════════════════════════════════════
function CompactRow({ project, accentColor }: { project: Project; accentColor: string }) {
  return (
    <motion.article
      {...inView}
      className="grid md:grid-cols-[240px_1fr_auto] gap-6 items-center py-6 group"
      style={{ borderTop: '1px solid var(--hairline)' }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '16/10' }}>
        <img
          src={project.imageSrc}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>

      {/* Content */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="marker" style={{ color: accentColor }}>{project.category}</span>
          {project.award && (
            <span className="marker" style={{ color: '#FCD34D' }}>
              <Trophy size={9} className="inline mr-0.5" /> {project.award}
            </span>
          )}
        </div>
        <h3 className="text-white font-bold text-[20px] mb-2 leading-tight group-hover:text-blue-300 transition-colors duration-200">
          {project.name}
        </h3>
        <p className="text-[14px] leading-relaxed mb-3 line-clamp-2" style={{ color: 'var(--text-2)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          {project.tech.length > 5 && (
            <span className="tag" style={{ opacity: 0.6 }}>+{project.tech.length - 5}</span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex md:flex-col gap-2 shrink-0">
        {isReal(project.githubUrl) ? (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-icon">
            <GitBranch size={14} />
          </a>
        ) : (
          <span className="btn-icon opacity-30 cursor-default">
            <GitBranch size={14} />
          </span>
        )}
        {isReal(project.demoUrl) ? (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-icon">
            <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="btn-icon opacity-30 cursor-default">
            <ArrowUpRight size={14} />
          </span>
        )}
      </div>
    </motion.article>
  )
}

// ═════════════════════════════════════════════════════════
//  PAGE
// ═════════════════════════════════════════════════════════
const CATEGORY_COLORS: Record<string, string> = {
  'AI/ML':      '#A78BFA',
  'FinTech':    '#34D399',
  'Web Apps':   '#60A5FA',
  'Research':   '#FCA5A5',
  'Hackathons': '#F472B6',
}

export default function Projects() {
  const featured  = projects.find((p) => p.id === 'recova')          // 1st place hackathon
  const splitOne  = projects.find((p) => p.id === 'transparency-lens') // other award-winner
  const splitTwo  = projects.find((p) => p.id === 'ai-code-editor')  // ai/ml
  const rest      = projects.filter(
    (p) => !['recova', 'transparency-lens', 'ai-code-editor'].includes(p.id),
  )

  return (
    <PageTransition>
      <div className="mx-auto max-w-[1240px] px-6 pt-20 pb-24">

        {/* ── Editorial header ────────────────────────── */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 pt-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="marker">Selected Works</span>
            <div className="h-px flex-1 max-w-[240px]" style={{ background: 'var(--hairline)' }} />
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end mb-6">
            <h1 className="display text-white" style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}>
              Projects
            </h1>
            <div className="flex flex-col md:items-end gap-1 pb-4">
              <span className="marker" style={{ color: 'var(--text-3)' }}>
                {projects.length} works · {projects.filter((p) => p.award).length} award-winners
              </span>
              <span className="serif italic text-[14px]" style={{ color: 'var(--text-3)' }}>
                — from hackathon builds to research pipelines
              </span>
            </div>
          </div>

          <p className="serif italic text-[20px] leading-relaxed max-w-3xl" style={{ color: 'var(--text-2)' }}>
            A curated set of the things I've built — some shipped to real users, others born in
            hackathon caffeine spirals, all of them things I'd still want to show a stranger.
          </p>
        </motion.header>

        {/* ── Featured hero ───────────────────────────── */}
        {featured && (
          <>
            <div className="section-divider mb-4">
              <span className="marker" style={{ color: '#FCD34D' }}>◇ Feature</span>
              <div className="h-px flex-1" style={{ background: 'var(--hairline)' }} />
            </div>
            <FeaturedProject project={featured} index={0} />
          </>
        )}

        {/* ── Two split rows ──────────────────────────── */}
        <div className="mt-16 mb-4">
          <span className="marker" style={{ color: 'var(--text-3)' }}>Two more chapters</span>
        </div>

        {splitOne && (
          <SplitProject
            project={splitOne}
            accentColor={CATEGORY_COLORS[splitOne.category] ?? 'var(--blue-2)'}
          />
        )}
        {splitTwo && (
          <SplitProject
            project={splitTwo}
            reverse
            accentColor={CATEGORY_COLORS[splitTwo.category] ?? 'var(--blue-2)'}
          />
        )}

        {/* ── Rest as compact rows ────────────────────── */}
        <div className="mt-16">
          <div className="section-divider mb-2">
            <span className="marker">The Rest</span>
            <div className="h-px flex-1" style={{ background: 'var(--hairline)' }} />
            <span className="marker" style={{ color: 'var(--text-4)' }}>
              {String(rest.length).padStart(2, '0')}
            </span>
          </div>
          {rest.map((p) => (
            <CompactRow
              key={p.id}
              project={p}
              accentColor={CATEGORY_COLORS[p.category] ?? 'var(--blue-2)'}
            />
          ))}
        </div>

        {/* ── Footer note ─────────────────────────────── */}
        <motion.div
          {...inView}
          className="mt-20 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--hairline)' }}
        >
          <p className="serif italic text-[16px]" style={{ color: 'var(--text-3)' }}>
            — more shipping soon.
          </p>
          <a href="/contact" className="editorial-link text-[13px]" style={{ color: 'var(--text)' }}>
            Get in touch →
          </a>
        </motion.div>

      </div>
    </PageTransition>
  )
}
