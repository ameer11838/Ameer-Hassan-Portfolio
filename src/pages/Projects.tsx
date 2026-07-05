import { motion } from 'framer-motion'
import { GitBranch, ArrowUpRight, Trophy } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ExpandableText from '../components/ExpandableText'
import { projects } from '../data/projects'
import type { Project } from '../types'

function isReal(url: string) {
  return !!url && !url.startsWith('TODO_')
}

const rise = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.75, ease: [0.19, 1, 0.22, 1] },
}

// ══════════════════════════════════════════════════════
//  Cover — renders the right treatment for each asset kind.
//  Expects a relative, overflow-hidden `group` parent.
//  · screenshot → fills the frame, slow zoom on hover
//  · mark       → product logo centered on charcoal
//  · text       → typographic poster (for projects without a shot yet)
// ══════════════════════════════════════════════════════
function ProjectCover({ project }: { project: Project }) {
  const kind = project.imageKind ?? 'screenshot'

  if (kind === 'text') {
    return (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.015]"
        style={{ background: 'radial-gradient(120% 120% at 50% 0%, #1a1a1f 0%, #0e0e11 55%, #0a0a0c 100%)' }}
      >
        <p className="eyebrow mb-4" style={{ color: 'var(--text-4)' }}>{project.category}</p>
        <p
          className="serif text-white leading-[0.95]"
          style={{ fontSize: 'clamp(44px, 7vw, 92px)', letterSpacing: '-0.03em' }}
        >
          {project.name}
        </p>
        <p className="mt-6 text-[12.5px]" style={{ color: 'var(--text-4)', letterSpacing: '0.04em' }}>
          {project.tech.slice(0, 4).join('  ·  ')}
        </p>
      </div>
    )
  }

  // Marks fill the frame (centered); screenshots fill from the top.
  return (
    <img
      src={project.imageSrc}
      alt={project.name}
      className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] ${
        kind === 'mark' ? 'object-center' : 'object-top'
      }`}
    />
  )
}

// ══════════════════════════════════════════════════════
//  GitHub — one prominent button, nothing else
// ══════════════════════════════════════════════════════
function GithubLink({ project }: { project: Project; compact?: boolean }) {
  if (!isReal(project.githubUrl)) return null
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group/gh inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[15px] font-medium transition-all duration-200"
      style={{ border: '1px solid var(--hairline-2)', color: 'var(--text)' }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(96,165,250,0.5)'; e.currentTarget.style.color = 'var(--blue-2)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--hairline-2)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      <GitBranch size={17} />
      View on GitHub
      <ArrowUpRight
        size={15}
        className="transition-transform duration-200 group-hover/gh:-translate-y-0.5 group-hover/gh:translate-x-0.5"
      />
    </a>
  )
}

// ══════════════════════════════════════════════════════
//  Card image — cover + cursor-follow spotlight + award badge
// ══════════════════════════════════════════════════════
function CardImage({
  project,
  ratio = '4/3',
  radius = 8,
}: {
  project: Project
  ratio?: string
  radius?: number
}) {
  return (
    <div
      className="relative overflow-hidden group"
      style={{ aspectRatio: ratio, borderRadius: radius, border: '1px solid var(--hairline)' }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
      }}
    >
      <ProjectCover project={project} />
      {/* spotlight that tracks the cursor */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'radial-gradient(260px circle at var(--mx) var(--my), rgba(96,165,250,0.16), transparent 65%)' }}
      />
      {project.award && (
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10.5px] font-medium tracking-widest uppercase"
            style={{
              background: 'rgba(9, 9, 11, 0.72)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--hairline-3)',
              color: '#FCD34D',
            }}
          >
            <Trophy size={10} strokeWidth={2} />
            {project.award}
          </span>
        </div>
      )}
    </div>
  )
}

// ══════════════════════════════════════════════════════
//  Split — alternating image / text
// ══════════════════════════════════════════════════════
function SplitLaunch({ project, index, reverse }: { project: Project; index: number; reverse: boolean }) {
  return (
    <motion.article {...rise} className="mb-28">
      <div className={`grid gap-12 md:grid-cols-2 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
        {/* Image */}
        <CardImage project={project} ratio="4/3" />

        {/* Text */}
        <div>
          <p className="eyebrow mb-4">
            {String(index).padStart(2, '0')} · {project.category}
          </p>
          <h3
            className="text-white font-semibold tracking-tight mb-4"
            style={{ fontSize: 'clamp(28px, 3.6vw, 46px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
          >
            {project.name}
          </h3>
          <ExpandableText
            text={project.description}
            clampLines={4}
            className="text-[16px] leading-[1.7] mb-6"
          />
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <GithubLink project={project} />
        </div>
      </div>
    </motion.article>
  )
}

// ══════════════════════════════════════════════════════
//  Compact index — final entries as a clean list
// ══════════════════════════════════════════════════════
function IndexRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article {...rise} className="group">
      <div
        className="grid gap-6 md:grid-cols-[300px_1fr_auto] items-center py-8"
        style={{ borderTop: '1px solid var(--hairline)' }}
      >
        <CardImage project={project} ratio="16/10" radius={6} />
        <div>
          <p className="eyebrow mb-2">
            {String(index).padStart(2, '0')} · {project.category}
          </p>
          <h3 className="text-white font-semibold text-[22px] tracking-tight leading-tight mb-2 group-hover:text-blue-300 transition-colors">
            {project.name}
          </h3>
          <div className="max-w-2xl mb-4">
            <ExpandableText text={project.description} clampLines={2} className="text-[14.5px] leading-[1.65]" />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <GithubLink project={project} />
        </div>
      </div>
    </motion.article>
  )
}

// ══════════════════════════════════════════════════════
//  PAGE
// ══════════════════════════════════════════════════════
export default function Projects() {
  const splitIds = ['recova', 'transparency-lens', 'ai-code-editor', 'brain-tumor']
  const splits = splitIds.map((id) => projects.find((p) => p.id === id)!)
  const rest = projects.filter((p) => !splitIds.includes(p.id))

  return (
    <PageTransition>
      <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-24">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="eyebrow mb-6">Selected Work</p>
          <h1 className="display text-white mb-8" style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}>
            Things I&apos;ve
            <br />
            <span className="italic-serif" style={{ fontWeight: 500, color: 'var(--text-2)' }}>shipped.</span>
          </h1>
          <p className="max-w-2xl text-[19px] leading-[1.6]" style={{ color: 'var(--text-2)' }}>
            A mix of hackathon builds, research, and side projects I made because I wanted to.
            All stuff I&apos;d still be happy to show a stranger.
          </p>
        </motion.header>

        {splits.map((p, i) => (
          <SplitLaunch key={p.id} project={p} index={i + 1} reverse={i % 2 === 1} />
        ))}

        <div className="mt-24">
          <p className="eyebrow mb-8">Also in the archive</p>
          {rest.map((p, i) => (
            <IndexRow key={p.id} project={p} index={i + splits.length + 1} />
          ))}
          <div style={{ borderTop: '1px solid var(--hairline)' }} />
        </div>

        {/* Footer */}
        <motion.div
          {...rise}
          className="mt-20 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
          style={{ borderTop: '1px solid var(--hairline)' }}
        >
          <p className="italic-serif text-[17px]" style={{ color: 'var(--text-3)' }}>
            more shipping soon.
          </p>
          <a href="/contact" className="inline-flex items-center gap-1.5 text-[13.5px] font-medium transition-colors" style={{ color: 'var(--text)' }}>
            Get in touch
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </PageTransition>
  )
}
