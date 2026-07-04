import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { logos, profilePhoto, profilePhotoFallback } from '../data/assets'
import { projects } from '../data/projects'
import type { Project } from '../types'

const ROLES = [
  'Software Engineer',
  'AI/ML Builder',
  'CS @ NJIT',
  'FinTech Developer',
]

// ── Letter-by-letter reveal ─────────────────────────────
function AnimatedName({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 72, filter: 'blur(16px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.85,
            delay: delay + i * 0.05,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="inline-block"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  )
}

// ── Mini cover — matches the Projects page treatment ───
function TeaserCover({ project }: { project: Project }) {
  const kind = project.imageKind ?? 'screenshot'
  if (kind === 'text') {
    return (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.015]"
        style={{ background: 'radial-gradient(120% 120% at 50% 0%, #1a1a1f 0%, #0e0e11 60%, #0a0a0c 100%)' }}
      >
        <p className="serif text-white" style={{ fontSize: 'clamp(30px, 4vw, 44px)', letterSpacing: '-0.03em' }}>
          {project.name}
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
          style={{ width: '46%', height: '46%', borderRadius: 12 }}
        />
      </div>
    )
  }
  return (
    <img
      src={project.imageSrc}
      alt={project.name}
      className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
    />
  )
}

// ── Selected work teaser (image-first) ─────────────────
function WorkTeaser({ project, index }: { project: Project; index: number }) {
  const meta = project.award ?? project.tech.slice(0, 3).join(' · ')
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
    >
      <Link to="/projects" className="group block">
        <div
          className="relative overflow-hidden mb-5"
          style={{
            aspectRatio: '16/10',
            borderRadius: 8,
            border: '1px solid var(--hairline)',
          }}
        >
          <TeaserCover project={project} />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(9,9,11,0.5))' }}
          />
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11.5px] mb-1.5" style={{ color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {project.category}
            </p>
            <h3 className="text-[20px] font-semibold text-white tracking-tight leading-tight truncate group-hover:text-blue-300 transition-colors">
              {project.name}
            </h3>
            <p className="text-[13px] mt-1" style={{ color: 'var(--text-3)' }}>{meta}</p>
          </div>
          <ArrowUpRight
            size={18}
            className="shrink-0 mt-1 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            style={{ color: 'var(--text-3)' }}
          />
        </div>
      </Link>
    </motion.div>
  )
}

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2600)
    return () => clearInterval(id)
  }, [])

  const featured = ['recova', 'transparency-lens', 'ai-code-editor'].map(
    (id) => projects.find((x) => x.id === id)!,
  )

  return (
    <PageTransition>
      {/* ══════════════════════════════════════════════════════
          Fold 1 — Editorial hero
          ══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 pt-28 pb-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_360px] lg:items-end">

          {/* Name block */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="eyebrow mb-8"
            >
              Portfolio · 2026
            </motion.p>

            <h1
              className="display text-white"
              style={{ fontSize: 'clamp(64px, 11vw, 168px)' }}
            >
              <span className="block"><AnimatedName text="Ameer" delay={0.1} /></span>
              <span className="block" style={{ marginTop: '-0.04em' }}>
                <AnimatedName text="Hassan." delay={0.4} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="mt-10 max-w-[560px] text-[19px] leading-[1.6]"
              style={{ color: 'var(--text-2)' }}
            >
              I&apos;m a CS student at NJIT who builds software that actually ships — AI agents,
              automation, and fintech tools. I care more about whether the thing works for the
              person using it than how clever it looks.
            </motion.p>

            {/* Rotating role — quiet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.35 }}
              className="mt-8 flex items-center gap-3 text-[14px]"
              style={{ color: 'var(--text-3)' }}
            >
              <span>Currently working as</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                  transition={{ duration: 0.32 }}
                  className="cursor font-medium"
                  style={{ color: 'var(--text)' }}
                >
                  {ROLES[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.55 }}
              className="mt-12 flex flex-wrap items-center gap-3"
            >
              <Link to="/projects" className="btn-primary group">
                See selected work
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-ghost --blue">Get in touch</Link>
            </motion.div>
          </div>

          {/* Headshot — editorial portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.19, 1, 0.22, 1] }}
            className="relative mx-auto lg:mx-0 w-full max-w-[380px]"
          >
            <motion.div
              className="group relative overflow-hidden cursor-pointer"
              style={{
                aspectRatio: '4/5',
                borderRadius: 4,
                border: '1px solid var(--hairline-2)',
              }}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <img
                src={profilePhoto}
                alt="Ameer Hassan"
                className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = profilePhotoFallback }}
              />
              {/* soft shadow that deepens on hover */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ boxShadow: 'inset 0 -80px 80px -60px rgba(0,0,0,0.7)' }}
              />
            </motion.div>
            <div className="mt-3 flex items-baseline justify-between text-[11.5px]" style={{ color: 'var(--text-4)' }}>
              <span className="italic-serif" style={{ fontSize: 13 }}>Newark, NJ</span>
              <span>usually building something</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Fold 2 — Currently (personal note)
          ══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 pt-8 pb-24" style={{ borderTop: '1px solid var(--hairline)' }}>
        <div className="grid gap-16 lg:grid-cols-[220px_1fr] pt-14">
          <p className="eyebrow">Currently</p>
          <div className="max-w-3xl">
            <p className="text-[24px] leading-[1.5] font-medium tracking-tight" style={{ color: 'var(--text)' }}>
              I&apos;m building an AI QA agent at{' '}
              <Link to="/experience" className="link">Fiserv</Link>{' '}
              — it reads Jira and Confluence and writes enterprise test suites across positive,
              negative, boundary, and edge cases. On the side I&apos;m doing applied ML through{' '}
              <span className="italic-serif" style={{ color: 'var(--text)' }}>Break Through Tech</span>{' '}
              with Cornell, and building random side projects whenever an idea won&apos;t leave me alone.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Fold 3 — Selected work
          ══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 pt-8 pb-24" style={{ borderTop: '1px solid var(--hairline)' }}>
        <div className="pt-14 mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Selected Work</p>
            <h2 className="text-white font-semibold tracking-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.03em' }}>
              Recent things I&apos;ve built.
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13.5px] font-medium transition-colors"
            style={{ color: 'var(--text-2)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue-2)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-2)')}
          >
            All work
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <WorkTeaser key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Fold 4 — Logo marquee (bare, no framed tiles)
          ══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 pt-8 pb-24" style={{ borderTop: '1px solid var(--hairline)' }}>
        <div className="pt-14 mb-10 flex items-baseline gap-4">
          <p className="eyebrow">Where I&apos;ve been</p>
          <span className="italic-serif text-[14px]" style={{ color: 'var(--text-4)' }}>
            — companies, fellowships & programs
          </span>
        </div>

        <div className="overflow-hidden relative">
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap will-change-transform">
            {[
              logos.arkra, logos.njit, logos.bny, logos.seo,
              logos.btt, logos.headstarter, logos.shpe, logos.any, logos.codepath,
              logos.icpc,
              logos.arkra, logos.njit, logos.bny, logos.seo,
              logos.btt, logos.headstarter, logos.shpe, logos.any, logos.codepath,
              logos.icpc,
            ].map((logo, i) => (
              <div key={i} className="h-14 shrink-0 flex items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={logo}
                  alt=""
                  className="h-full max-w-[120px] object-contain"
                  style={{ filter: 'grayscale(100%) brightness(1.6) contrast(0.85)' }}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Fold 5 — Sign-off / CTA
          ══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 pt-8 pb-24" style={{ borderTop: '1px solid var(--hairline)' }}>
        <div className="pt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-white font-semibold tracking-tight" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '-0.035em', lineHeight: 1.02 }}>
              Have something to build? <br />
              <span style={{ color: 'var(--text-3)' }}>Let&apos;s make it.</span>
            </p>
          </div>
          <Link to="/contact" className="btn-primary group">
            Say hello
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
