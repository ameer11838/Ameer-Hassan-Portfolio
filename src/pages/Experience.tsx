import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { experiences } from '../data/experiences'
import { leadership } from '../data/leadership'
import { logos } from '../data/assets'
import type { LeadershipItem } from '../types'

const rise = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.85, ease: [0.19, 1, 0.22, 1] },
}

// ── Reusable atoms ─────────────────────────────────────
function DateStamp({ children }: { children: React.ReactNode }) {
  return (
    <p className="italic-serif text-[14px] tracking-[0.02em]" style={{ color: 'var(--text-3)' }}>
      {children}
    </p>
  )
}

function Wordmark({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-white font-semibold"
      style={{
        fontSize: 'clamp(30px, 4vw, 46px)',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        lineHeight: 1,
      }}
    >
      {children}
    </h2>
  )
}

function LogoPlate({
  src,
  alt,
  ratio = '4/3',
  contain = 0.62,
}: {
  src: string
  alt: string
  ratio?: string
  contain?: number
}) {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        aspectRatio: ratio,
        background: '#F4F4F5',
        borderRadius: 4,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="object-contain"
        style={{ width: `${contain * 100}%`, height: `${contain * 100}%` }}
      />
    </div>
  )
}

function VerticalRule() {
  return (
    <div
      aria-hidden
      className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-px"
      style={{ width: 1, background: 'var(--hairline)' }}
    />
  )
}

// ══════════════════════════════════════════════════════
//  01 · FISERV — Hero feature (full-bleed banner)
// ══════════════════════════════════════════════════════
function FiservHero() {
  const exp = experiences.find((e) => e.id === 'fiserv')!
  const [expanded, setExpanded] = useState(false)

  const bullets = [
    'The agent reads Jira tickets and Confluence specs, then writes Selenium + Cucumber test suites straight from them.',
    'It covers five kinds of tests — positive, negative, boundary, edge, and validation — on a Fortune 500 codebase.',
    'It hooks into our GitHub Copilot workflow, so a lot of the manual test-writing just goes away.',
    "I'm working right alongside senior engineers on the tooling their marketplace teams actually use.",
  ]

  return (
    <motion.section {...rise} className="mb-40">
      {/* Full-bleed banner */}
      <div
        className="relative overflow-hidden mb-14 group"
        style={{ aspectRatio: '21/9', borderRadius: 4 }}
      >
        <img
          src={logos.fiserv}
          alt="Fiserv"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Meta line */}
      <div className="text-center mb-6">
        <DateStamp>{exp.period}</DateStamp>
      </div>

      {/* Massive wordmark */}
      <div className="text-center mb-4">
        <h2
          className="text-white font-semibold"
          style={{
            fontSize: 'clamp(44px, 7vw, 96px)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          Fiserv
        </h2>
      </div>

      {/* Role */}
      <p className="text-center mb-16 text-[14px]" style={{ color: 'var(--text-3)' }}>
        Software Engineering Intern · Enterprise Marketplace Solutions · Berkeley Heights, NJ
      </p>

      {/* Body — two-column editorial */}
      <div className="relative grid gap-14 md:grid-cols-2">
        <VerticalRule />
        <div className="md:pr-12">
          <p className="eyebrow mb-5">The Role</p>
          <p className="text-[17px] leading-[1.75]" style={{ color: 'var(--text-2)' }}>
            I&apos;m building an AI agent that reads product specs and writes the test cases for them —
            positive, negative, boundary, edge, and validation. It saves the QA team a mountain of
            repetitive work and keeps the tests consistent across Fiserv&apos;s marketplace platform.
            Most of the challenge is trust: an auto-written test is only useful if people believe it.
          </p>
        </div>
        <div className="md:pl-12">
          <p className="eyebrow mb-5">The Stack</p>
          <div className="flex flex-wrap gap-1.5 mb-8">
            {exp.tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>

          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium transition-colors"
            style={{ color: expanded ? 'var(--blue-2)' : 'var(--text)' }}
          >
            {expanded ? 'Hide the details' : 'Read the details'}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.28 }}>
              <ChevronDown size={14} />
            </motion.span>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                className="overflow-hidden space-y-3 text-[15px] leading-[1.7]"
                style={{ color: 'var(--text-2)' }}
              >
                {bullets.map((b) => (
                  <li key={b} className="grid grid-cols-[10px_1fr] gap-3">
                    <span className="mt-[10px] h-[3px] w-[3px] rounded-full" style={{ background: 'var(--blue-2)' }} />
                    <span>{b}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <DateStamp>Current role — 2026</DateStamp>
      </div>
    </motion.section>
  )
}

// ══════════════════════════════════════════════════════
//  02 · ARKRA — Editorial split (logo LEFT, content RIGHT)
// ══════════════════════════════════════════════════════
function ArkraSpread() {
  const exp = experiences.find((e) => e.id === 'arkra')!

  return (
    <motion.section {...rise} className="mb-40" style={{ borderTop: '1px solid var(--hairline)', paddingTop: 96 }}>
      <div className="relative grid gap-16 md:grid-cols-2 items-start">
        <VerticalRule />

        {/* LEFT — date + wordmark + logo */}
        <div className="md:pr-14">
          <div className="text-center mb-6">
            <DateStamp>{exp.period}</DateStamp>
          </div>
          <div className="text-center mb-14">
            <Wordmark>Arkra</Wordmark>
          </div>
          <LogoPlate src={logos.arkra} alt="Arkra" ratio="4/3" contain={0.7} />
        </div>

        {/* RIGHT — role + body + stack */}
        <div className="md:pl-14 md:pt-2">
          <p className="text-center md:text-left text-[15px] font-semibold text-white tracking-tight mb-4">
            Software Engineering Intern
          </p>
          <p className="text-[13px] mb-10" style={{ color: 'var(--text-3)' }}>
            Data Pipelines & Market Intelligence · Newport Beach, CA
          </p>

          <p className="text-[17px] leading-[1.8] mb-10" style={{ color: 'var(--text-2)' }}>
            Built SEC EDGAR scraping and LLM extraction pipelines for 10-K and 10-Q financial filings using
            Playwright and OpenAI. Designed metadata filtering workflows before uploading structured data
            to AWS S3 — the plumbing that lets an analytics team ask real questions of a decade of filings.
            The interesting part wasn&apos;t the scraping; it was making the extractions <em>reliable enough
            to trust downstream.</em>
          </p>

          <p className="eyebrow mb-4">The Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <DateStamp>Oct 2025 — Mar 2026</DateStamp>
      </div>
    </motion.section>
  )
}

// ══════════════════════════════════════════════════════
//  03 · NJIT RESEARCH — Editorial split (content LEFT, logo RIGHT — inverse rhythm)
// ══════════════════════════════════════════════════════
function NjitResearchSpread() {
  const exp = experiences.find((e) => e.id === 'njit-research')!

  return (
    <motion.section {...rise} className="mb-40" style={{ borderTop: '1px solid var(--hairline)', paddingTop: 96 }}>
      <div className="relative grid gap-16 md:grid-cols-2 items-start">
        <VerticalRule />

        {/* LEFT — content */}
        <div className="md:pr-14 md:pt-2 md:order-1 order-2">
          <p className="text-center md:text-left text-[15px] font-semibold text-white tracking-tight mb-4">
            AI/ML Research Assistant
          </p>
          <p className="text-[13px] mb-10" style={{ color: 'var(--text-3)' }}>
            Ying Wu College of Computing · Newark, NJ
          </p>

          <p className="text-[17px] leading-[1.8] mb-10" style={{ color: 'var(--text-2)' }}>
            AI/ML research on NASA/SDO data. I helped build a Random Forest that sorts solar events
            into risk levels — real applied ML on real heliophysics data, headed toward publication.
            Getting a model to hold up on messy scientific data is a different game than getting one
            to work on benchmarks; the ceiling is data quality, and that&apos;s where we spent our time.
          </p>

          <div className="grid grid-cols-3 gap-6" style={{ borderTop: '1px solid var(--hairline)', paddingTop: 24 }}>
            <div>
              <p className="text-white font-semibold" style={{ fontSize: 26, letterSpacing: '-0.03em' }}>3</p>
              <p className="mt-1 text-[12px]" style={{ color: 'var(--text-3)' }}>Risk classes</p>
            </div>
            <div>
              <p className="text-white font-semibold" style={{ fontSize: 26, letterSpacing: '-0.03em' }}>NASA</p>
              <p className="mt-1 text-[12px]" style={{ color: 'var(--text-3)' }}>SDO dataset</p>
            </div>
            <div>
              <p className="text-white font-semibold" style={{ fontSize: 26, letterSpacing: '-0.03em' }}>Binder</p>
              <p className="mt-1 text-[12px]" style={{ color: 'var(--text-3)' }}>Reproducible env</p>
            </div>
          </div>
        </div>

        {/* RIGHT — date + wordmark + logo */}
        <div className="md:pl-14 md:order-2 order-1">
          <div className="text-center mb-6">
            <DateStamp>{exp.period}</DateStamp>
          </div>
          <div className="text-center mb-14">
            <Wordmark>NJIT · Research</Wordmark>
          </div>
          <LogoPlate src={logos.njit} alt="NJIT" ratio="4/3" contain={0.55} />
          <p className="mt-4 text-center italic-serif text-[13px]" style={{ color: 'var(--text-4)' }}>
            — the applied ML lab
          </p>
        </div>
      </div>
    </motion.section>
  )
}

// ══════════════════════════════════════════════════════
//  04 · SEO — Editorial split (logo LEFT, numbered focus RIGHT)
// ══════════════════════════════════════════════════════
function SeoSpread() {
  const exp = experiences.find((e) => e.id === 'seo')!

  const focus = [
    'Technical interview prep, week after week',
    'Data structures, algorithms & system design',
    'Mock interviews and placement at top software firms',
  ]

  return (
    <motion.section {...rise} className="mb-40" style={{ borderTop: '1px solid var(--hairline)', paddingTop: 96 }}>
      <div className="relative grid gap-16 md:grid-cols-2 items-start">
        <VerticalRule />

        {/* LEFT — date + wordmark + logo */}
        <div className="md:pr-14">
          <div className="text-center mb-6">
            <DateStamp>{exp.period}</DateStamp>
          </div>
          <div className="text-center mb-14">
            <Wordmark>SEO · Tech</Wordmark>
          </div>
          <LogoPlate src={logos.seo} alt="SEO" ratio="4/3" contain={0.62} />
        </div>

        {/* RIGHT — role + body + numbered focus */}
        <div className="md:pl-14 md:pt-2">
          <p className="text-center md:text-left text-[15px] font-semibold text-white tracking-tight mb-4">
            Tech Developer
          </p>
          <p className="text-[13px] mb-10" style={{ color: 'var(--text-3)' }}>
            Sponsors for Educational Opportunity · New York, NY
          </p>

          <p className="text-[17px] leading-[1.8] mb-10" style={{ color: 'var(--text-2)' }}>
            {exp.description}
          </p>

          <p className="eyebrow mb-6">What it&apos;s built around</p>
          <ol className="space-y-4">
            {focus.map((f, i) => (
              <li key={f} className="grid grid-cols-[28px_1fr] gap-4 items-baseline">
                <span className="italic-serif text-[15px]" style={{ color: 'var(--blue-2)' }}>
                  0{i + 1}
                </span>
                <span className="text-[15.5px] leading-[1.6]" style={{ color: 'var(--text)' }}>{f}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <DateStamp>2025 — present</DateStamp>
      </div>
    </motion.section>
  )
}

// ══════════════════════════════════════════════════════
//  05 · NJIT MENTOR — Editorial closer (quiet, single lane)
// ══════════════════════════════════════════════════════
function NjitMentorSpread() {
  const exp = experiences.find((e) => e.id === 'njit-mentor')!

  return (
    <motion.section {...rise} className="mb-40" style={{ borderTop: '1px solid var(--hairline)', paddingTop: 96 }}>
      <div className="mx-auto max-w-[720px] text-center">
        <div className="mb-4">
          <DateStamp>{exp.period}</DateStamp>
        </div>
        <div className="mb-12">
          <Wordmark>NJIT · Teaching</Wordmark>
        </div>

        <div className="mx-auto mb-12 h-24 w-24 flex items-center justify-center rounded-md overflow-hidden" style={{ background: '#F4F4F5' }}>
          <img src={logos.njit} alt="NJIT" className="h-[62%] w-[62%] object-contain" />
        </div>

        <p className="text-[15px] font-semibold text-white tracking-tight mb-2">
          Technical Peer Mentor
        </p>
        <p className="text-[13px] mb-8" style={{ color: 'var(--text-3)' }}>
          NJIT Learning Committee · Newark, NJ
        </p>

        <p className="text-[17px] leading-[1.8] max-w-[560px] mx-auto" style={{ color: 'var(--text-2)' }}>
          Mentoring first-year CS students in Java, Python, debugging, and technical project
          development. Running hackathon prep workshops and technical events throughout the year.
        </p>
      </div>
    </motion.section>
  )
}

// ══════════════════════════════════════════════════════
//  Editorial logo grid — Programs & Leadership
// ══════════════════════════════════════════════════════
function EditorialLogoTile({ item, index }: { item: LeadershipItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.19, 1, 0.22, 1] }}
      className="group"
    >
      <div className="mb-5">
        <LogoPlate src={item.logoSrc} alt={item.organization} ratio="4/3" contain={0.6} />
      </div>
      <p className="text-[11.5px] mb-2" style={{ color: 'var(--text-4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        {item.period}
      </p>
      <p className="text-white font-semibold text-[15.5px] tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
        {item.organization}
      </p>
      <p className="text-[13px] mt-1" style={{ color: 'var(--text-3)' }}>
        {item.title}
      </p>
    </motion.article>
  )
}

function ProgramsGrid() {
  const programs = leadership.filter((l) => l.category === 'programs')
  return (
    <motion.section {...rise} className="mb-32" style={{ borderTop: '1px solid var(--hairline)', paddingTop: 96 }}>
      <div className="text-center mb-16 max-w-[640px] mx-auto">
        <p className="eyebrow mb-5">Programs & Fellowships</p>
        <h2
          className="text-white font-semibold"
          style={{ fontSize: 'clamp(30px, 4vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
        >
          Where I&apos;ve been trained.
        </h2>
      </div>

      <div className="grid gap-x-8 gap-y-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {programs.map((item, i) => (
          <EditorialLogoTile key={item.id} item={item} index={i} />
        ))}
      </div>
    </motion.section>
  )
}

function LeadershipGrid() {
  const leadRoles = leadership.filter((l) => l.category === 'leadership')
  return (
    <motion.section {...rise} className="mb-24" style={{ borderTop: '1px solid var(--hairline)', paddingTop: 96 }}>
      <div className="text-center mb-16 max-w-[640px] mx-auto">
        <p className="eyebrow mb-5">Leadership</p>
        <h2
          className="text-white font-semibold"
          style={{ fontSize: 'clamp(30px, 4vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
        >
          Communities I&apos;m part of.
        </h2>
      </div>

      <div className="grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {leadRoles.map((item, i) => (
          <EditorialLogoTile key={item.id} item={item} index={i} />
        ))}
      </div>
    </motion.section>
  )
}

// ══════════════════════════════════════════════════════
//  PAGE
// ══════════════════════════════════════════════════════
export default function Experience() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-24">

        {/* Editorial masthead */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-24"
        >
          <p className="italic-serif text-[15px] mb-6" style={{ color: 'var(--text-3)' }}>
            — a chronological record
          </p>
          <h1 className="display text-white" style={{ fontSize: 'clamp(64px, 10vw, 152px)' }}>
            Experience
          </h1>
          <p className="mx-auto mt-10 max-w-[560px] text-[17px] leading-[1.7]" style={{ color: 'var(--text-2)' }}>
            Roles across fintech, AI research, teaching, and the programs that got me here — each a
            chapter in how I&apos;ve learned to build.
          </p>
        </motion.header>

        <FiservHero />
        <ArkraSpread />
        <NjitResearchSpread />
        <SeoSpread />
        <NjitMentorSpread />

        <ProgramsGrid />
        <LeadershipGrid />

        {/* Footer */}
        <motion.div
          {...rise}
          className="mt-24 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
          style={{ borderTop: '1px solid var(--hairline)' }}
        >
          <p className="italic-serif text-[17px]" style={{ color: 'var(--text-3)' }}>
            — end of experience.
          </p>
          <a href="/projects" className="inline-flex items-center gap-1.5 text-[13.5px] font-medium transition-colors" style={{ color: 'var(--text)' }}>
            Continue to selected work
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </PageTransition>
  )
}
