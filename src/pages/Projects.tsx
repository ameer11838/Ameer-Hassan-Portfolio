import { motion } from 'framer-motion'
import { GitBranch, ExternalLink, ArrowUpRight, Trophy } from 'lucide-react'
import PageTransition from '../components/PageTransition'
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

  if (kind === 'mark') {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: 'radial-gradient(120% 120% at 50% 15%, #17171b 0%, #0d0d10 70%)' }}
      >
        <img
          src={project.imageSrc}
          alt={project.name}
          className="object-contain transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          style={{ width: '42%', height: '42%', borderRadius: 12 }}
        />
      </div>
    )
  }

  return (
    <img
      src={project.imageSrc}
      alt={project.name}
      className="h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
    />
  )
}

// ══════════════════════════════════════════════════════
//  Link cluster (GitHub / Live Demo / Case Study)
// ══════════════════════════════════════════════════════
function LinkCluster({ project, compact = false }: { project: Project; compact?: boolean }) {
  const size = compact ? 'text-[13px]' : 'text-[13.5px]'

  const Item = ({
    href,
    label,
    Icon,
  }: {
    href: string
    label: string
    Icon: typeof GitBranch
  }) => {
    if (!isReal(href)) {
      return (
        <span className={`inline-flex items-center gap-1.5 font-medium opacity-30 cursor-not-allowed ${size}`}>
          <Icon size={13} />
          {label}
        </span>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group/lnk inline-flex items-center gap-1.5 font-medium transition-colors ${size}`}
        style={{ color: 'var(--text-2)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue-2)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-2)')}
      >
        <Icon size={13} />
        {label}
        <ArrowUpRight
          size={12}
          className="opacity-0 -translate-x-1 transition-all duration-200 group-hover/lnk:opacity-100 group-hover/lnk:translate-x-0"
        />
      </a>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
      <Item href={project.githubUrl}  label="GitHub"     Icon={GitBranch} />
      <Item href={project.demoUrl}    label="Live Demo"  Icon={ExternalLink} />
      <Item href={project.detailsUrl} label="Case Study" Icon={ArrowUpRight} />
    </div>
  )
}

// ══════════════════════════════════════════════════════
//  Featured — full-bleed launch card
// ══════════════════════════════════════════════════════
function FeaturedLaunch({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article {...rise} className="mb-32">
      {/* Cover */}
      <div
        className="relative overflow-hidden group mb-8"
        style={{
          aspectRatio: '16/9',
          borderRadius: 8,
          border: '1px solid var(--hairline)',
        }}
      >
        <ProjectCover project={project} />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(9,9,11,0.1) 0%, transparent 30%, transparent 60%, rgba(9,9,11,0.8) 100%)' }}
        />
        {project.award && (
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium tracking-widest uppercase"
              style={{
                background: 'rgba(9, 9, 11, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--hairline-3)',
                color: '#FCD34D',
              }}
            >
              <Trophy size={11} strokeWidth={2} />
              {project.award}
            </span>
          </div>
        )}
      </div>

      {/* Text row */}
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] items-start">
        <div>
          <p className="eyebrow mb-4">
            {String(index + 1).padStart(2, '0')} · Featured · {project.category}
          </p>
          <h2
            className="text-white font-semibold tracking-tight leading-[1.02]"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)', letterSpacing: '-0.035em' }}
          >
            {project.name}
          </h2>
        </div>
        <div>
          <p className="text-[17px] leading-[1.7] mb-6" style={{ color: 'var(--text-2)' }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <LinkCluster project={project} />
        </div>
      </div>
    </motion.article>
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
        <div
          className="relative overflow-hidden group"
          style={{
            aspectRatio: '4/3',
            borderRadius: 8,
            border: '1px solid var(--hairline)',
          }}
        >
          <ProjectCover project={project} />
        </div>

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
          {project.award && (
            <p className="mb-4 text-[13px] flex items-center gap-1.5" style={{ color: '#FCD34D' }}>
              <Trophy size={12} strokeWidth={2} /> {project.award}
            </p>
          )}
          <p className="text-[16px] leading-[1.7] mb-6" style={{ color: 'var(--text-2)' }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <LinkCluster project={project} />
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
        <div
          className="relative overflow-hidden"
          style={{
            aspectRatio: '16/10',
            borderRadius: 6,
            border: '1px solid var(--hairline)',
          }}
        >
          <ProjectCover project={project} />
        </div>
        <div>
          <p className="eyebrow mb-2">
            {String(index).padStart(2, '0')} · {project.category}
          </p>
          <h3 className="text-white font-semibold text-[22px] tracking-tight leading-tight mb-2 group-hover:text-blue-300 transition-colors">
            {project.name}
          </h3>
          <p className="text-[14.5px] leading-[1.65] max-w-2xl line-clamp-2 mb-4" style={{ color: 'var(--text-2)' }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <LinkCluster project={project} compact />
        </div>
      </div>
    </motion.article>
  )
}

// ══════════════════════════════════════════════════════
//  PAGE
// ══════════════════════════════════════════════════════
export default function Projects() {
  const featured = projects.find((p) => p.id === 'recova')!
  const splitIds = ['transparency-lens', 'ai-code-editor', 'brain-tumor']
  const splits = splitIds.map((id) => projects.find((p) => p.id === id)!)
  const rest = projects.filter(
    (p) => !['recova', ...splitIds].includes(p.id),
  )

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
            A mix of hackathon builds, research, and side projects I made because I wanted to —
            all stuff I&apos;d still be happy to show a stranger.
          </p>
        </motion.header>

        <FeaturedLaunch project={featured} index={0} />

        {splits.map((p, i) => (
          <SplitLaunch key={p.id} project={p} index={i + 2} reverse={i % 2 === 1} />
        ))}

        <div className="mt-24">
          <p className="eyebrow mb-8">Also in the archive</p>
          {rest.map((p, i) => (
            <IndexRow key={p.id} project={p} index={i + splits.length + 2} />
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
            — more shipping soon.
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
