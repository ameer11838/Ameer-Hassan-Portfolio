import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { experiences } from '../data/experiences'
import { leadership } from '../data/leadership'
import { logos } from '../data/assets'

// ── Reusable fade-in-when-in-view ─────────────────────────
const inView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

// ── Company brand accents (per-chapter styling) ────────────
type BrandKey = 'fiserv' | 'arkra' | 'njit-research' | 'njit-mentor'

const BRANDS: Record<
  BrandKey,
  {
    accent: string
    accentSoft: string
    bg: string
    surface: string
    logoBg: string
  }
> = {
  fiserv: {
    accent:     'var(--fiserv)',
    accentSoft: 'rgba(255,98,0,0.15)',
    bg:         'var(--fiserv-bg)',
    surface:    '#0A1F45',
    logoBg:     '#04122E',
  },
  arkra: {
    accent:     'var(--arkra)',
    accentSoft: 'rgba(255,107,0,0.12)',
    bg:         '#0D0A08',
    surface:    '#141210',
    logoBg:     '#FFFFFF',
  },
  'njit-research': {
    accent:     'var(--njit)',
    accentSoft: 'rgba(200,29,37,0.15)',
    bg:         '#150707',
    surface:    '#1E0A0A',
    logoBg:     '#C81D25',
  },
  'njit-mentor': {
    accent:     'var(--njit)',
    accentSoft: 'rgba(200,29,37,0.10)',
    bg:         'var(--surface)',
    surface:    'var(--surface-2)',
    logoBg:     '#C81D25',
  },
}

// ═════════════════════════════════════════════════════════
//  CHAPTER 01 — FISERV (full-bleed banner, current role)
// ═════════════════════════════════════════════════════════
function FiservChapter() {
  const exp = experiences.find((e) => e.id === 'fiserv')!
  const b = BRANDS.fiserv

  return (
    <motion.section {...inView} className="relative overflow-hidden rounded-3xl mb-16" style={{ background: b.bg }}>
      {/* Hex pattern overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.08] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-fiserv" x="0" y="0" width="24" height="22" patternUnits="userSpaceOnUse">
            <path d="M12 0 L24 6 L24 18 L12 24 L0 18 L0 6 Z" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-fiserv)" />
      </svg>

      {/* Radial glow accent */}
      <div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,98,0,0.25), transparent 70%)' }}
      />

      <div className="relative px-8 sm:px-14 py-14 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] items-start">
          {/* Logo side — huge Fiserv wordmark */}
          <div>
            <div className="marker mb-8" style={{ color: b.accent }}>
              Chapter 01 · Current
            </div>
            <div className="mb-6 -ml-1">
              <img
                src={logos.fiserv}
                alt="Fiserv"
                className="h-auto w-full max-w-[320px]"
                style={{ filter: 'drop-shadow(0 12px 40px rgba(255,98,0,0.35))' }}
              />
            </div>
            <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: 'rgba(255,98,0,0.15)',
                  color: b.accent,
                  border: `1px solid rgba(255,98,0,0.3)`,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: b.accent, boxShadow: `0 0 8px ${b.accent}` }}
                />
                Now
              </span>
              <span className="marker" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {exp.period}
              </span>
            </div>
          </div>

          {/* Content side */}
          <div>
            <h3 className="serif italic text-[15px] mb-2" style={{ color: b.accent }}>
              — the current chapter
            </h3>
            <h2 className="display text-white mb-4" style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}>
              Software Engineering Intern
            </h2>
            <p className="text-[15px] mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Enterprise Marketplace Solutions · Berkeley Heights, NJ
            </p>

            <p className="text-[16px] leading-[1.65] mb-6" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Building an <span className="italic-caps" style={{ color: b.accent }}>AI-powered automation agent</span> that
              generates enterprise test cases across positive, negative, boundary, edge, and validation
              scenarios — reducing manual QA effort and improving test consistency at Fortune 500 scale.
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="rounded px-2 py-0.5 text-[11px] font-mono"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

// ═════════════════════════════════════════════════════════
//  CHAPTER 02 — ARKRA (split with giant giraffe logo)
// ═════════════════════════════════════════════════════════
function ArkraChapter() {
  const exp = experiences.find((e) => e.id === 'arkra')!
  const b = BRANDS.arkra

  return (
    <motion.section {...inView} className="relative rounded-3xl overflow-hidden mb-16" style={{ background: b.bg }}>
      <div className="grid md:grid-cols-[1fr_1fr]">

        {/* Left: white space with big logo */}
        <div
          className="relative min-h-[320px] p-10 sm:p-14 flex items-center justify-center"
          style={{ background: b.logoBg }}
        >
          <img
            src={logos.arkra}
            alt="Arkra"
            className="w-full max-w-[380px] object-contain"
          />
          <div
            className="absolute bottom-5 left-5 marker italic-caps"
            style={{ color: '#C57A38', letterSpacing: 0, textTransform: 'none' }}
          >
            — fintech data infrastructure
          </div>
        </div>

        {/* Right: dark content */}
        <div className="p-10 sm:p-14">
          <div className="marker mb-6" style={{ color: b.accent }}>
            Chapter 02
          </div>
          <h2 className="display text-white mb-3" style={{ fontSize: 'clamp(28px, 3.6vw, 40px)' }}>
            Data pipelines for SEC filings.
          </h2>
          <p className="text-[15px] mb-2 font-medium" style={{ color: b.accent }}>
            Software Engineering Intern
          </p>
          <p className="text-[13px] mb-6 marker" style={{ letterSpacing: 0, textTransform: 'none' }}>
            Data Pipelines & Market Intelligence · Newport Beach, CA · {exp.period}
          </p>
          <p className="text-[16px] leading-[1.65] mb-6" style={{ color: 'var(--text-2)' }}>
            Built SEC EDGAR scraping and LLM extraction pipelines for 10-K and 10-Q
            financial filings using Playwright and OpenAI. Designed metadata filtering
            workflows before uploading structured data to AWS S3.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

// ═════════════════════════════════════════════════════════
//  CHAPTER 03 — NJIT AI/ML RESEARCH (image-first, red banner)
// ═════════════════════════════════════════════════════════
function NjitResearchChapter() {
  const exp = experiences.find((e) => e.id === 'njit-research')!
  const b = BRANDS['njit-research']

  return (
    <motion.section {...inView} className="relative rounded-3xl overflow-hidden mb-16">
      {/* Full-width red banner header */}
      <div
        className="relative p-10 sm:p-14 min-h-[220px] flex items-center overflow-hidden"
        style={{ background: b.logoBg }}
      >
        {/* Solar imagery overlay */}
        <div
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,180,60,0.3), rgba(255,80,0,0.15) 40%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />

        <div className="relative flex-1 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="marker" style={{ color: 'rgba(255,255,255,0.7)' }}>Chapter 03 · Research</div>
            <span className="marker" style={{ color: 'rgba(255,255,255,0.5)' }}>{exp.period}</span>
          </div>
          <h2
            className="serif text-white mb-3 font-black"
            style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', letterSpacing: '-0.02em', lineHeight: 1 }}
          >
            Classifying solar activity with a<br />
            <span className="italic">Random Forest</span>.
          </h2>
          <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
            AI/ML Research Assistant · Ying Wu College of Computing · Newark, NJ
          </p>
        </div>

        {/* Small NJIT logo bottom-right */}
        <div className="absolute bottom-6 right-6 h-14 w-14 hidden md:block">
          <img src={logos.njit} alt="NJIT" className="h-full w-full object-contain" />
        </div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 p-10 sm:p-14" style={{ background: b.surface }}>
        <div>
          <p className="text-[16px] leading-[1.7]" style={{ color: 'var(--text-2)' }}>
            Worked on <span className="italic-caps" style={{ color: '#FCA5A5' }}>AI/ML-driven solar
            physics research</span> using NASA/SDO datasets. Co-developed a Random Forest-based
            Solar Activity Classifier that categorized solar events into risk levels — publishable
            work at the intersection of applied ML and heliophysics.
          </p>
        </div>
        <div>
          <p className="marker mb-3" style={{ color: '#FCA5A5' }}>Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

// ═════════════════════════════════════════════════════════
//  CHAPTER 04 — NJIT PEER MENTOR (compact, editorial)
// ═════════════════════════════════════════════════════════
function NjitMentorChapter() {
  const exp = experiences.find((e) => e.id === 'njit-mentor')!

  return (
    <motion.section
      {...inView}
      className="relative rounded-3xl overflow-hidden mb-16 grid md:grid-cols-[auto_1fr_auto] items-center gap-8 p-8 sm:p-10"
      style={{ background: 'var(--surface)', border: '1px solid var(--hairline)' }}
    >
      {/* Left: small NJIT tile */}
      <div className="h-20 w-20 shrink-0 rounded-xl overflow-hidden">
        <img src={logos.njit} alt="NJIT" className="h-full w-full object-cover" />
      </div>

      {/* Middle: text */}
      <div>
        <div className="marker mb-2">Chapter 04 · Teaching</div>
        <h3 className="text-white text-[22px] font-bold mb-1 tracking-tight">
          Technical Peer Mentor
        </h3>
        <p className="text-[14px] mb-3" style={{ color: 'var(--text-2)' }}>
          NJIT Learning Committee · {exp.period} · Newark, NJ
        </p>
        <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: 'var(--text-2)' }}>
          Mentoring first-year CS students in Java, Python, debugging, and technical project
          development — plus hackathon prep workshops and technical events throughout the year.
        </p>
      </div>

      {/* Right: current badge */}
      <div className="hidden md:block">
        {exp.current && (
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
            style={{
              background: 'rgba(59,130,246,0.1)',
              color: 'var(--blue-2)',
              border: '1px solid rgba(59,130,246,0.25)',
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: 'var(--blue-2)', boxShadow: '0 0 6px var(--blue-2)' }}
            />
            Ongoing
          </span>
        )}
      </div>
    </motion.section>
  )
}

// ═════════════════════════════════════════════════════════
//  LEADERSHIP & PROGRAMS — Bento-style mixed grid
// ═════════════════════════════════════════════════════════
function ProgramTile({
  item,
  size = 'normal',
  bg,
  accent,
}: {
  item: (typeof leadership)[0]
  size?: 'normal' | 'large' | 'wide'
  bg: string
  accent: string
}) {
  const sizeClass = {
    normal: 'md:col-span-1',
    large:  'md:col-span-1 md:row-span-2',
    wide:   'md:col-span-2',
  }[size]

  return (
    <motion.div
      {...inView}
      className={`relative overflow-hidden rounded-2xl p-6 flex flex-col group ${sizeClass}`}
      style={{ background: bg, minHeight: size === 'large' ? 340 : 180 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo top-left */}
      <div
        className="h-12 w-12 rounded-lg overflow-hidden mb-4 shrink-0"
        style={{ border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <img src={item.logoSrc} alt={item.organization} className="h-full w-full object-cover" />
      </div>

      {/* Period */}
      <span
        className="mb-3 marker w-fit rounded px-1.5 py-0.5"
        style={{
          background: 'rgba(255,255,255,0.04)',
          color: accent,
          border: `1px solid ${accent}25`,
        }}
      >
        {item.period}
      </span>

      <h4 className="text-white font-bold text-[15px] mb-1 leading-tight">{item.title}</h4>
      <p className="text-[13px] mb-1" style={{ color: 'var(--text-2)' }}>{item.organization}</p>
      <p className="text-[12px] italic-caps" style={{ color: 'var(--text-3)', letterSpacing: 0, textTransform: 'none' }}>
        — {item.type}
      </p>

      {size !== 'normal' && (
        <p className="mt-4 text-[13px] leading-relaxed line-clamp-4" style={{ color: 'var(--text-2)' }}>
          {item.description}
        </p>
      )}
    </motion.div>
  )
}

// Brand color per program (using their own hues)
const PROGRAM_STYLES: Record<string, { bg: string; accent: string; size?: 'normal' | 'large' | 'wide' }> = {
  btt:         { bg: '#012C3D',      accent: '#C5FF3D', size: 'large' },
  seo:         { bg: '#1F0708',      accent: '#F87171' },
  bny:         { bg: '#0A1128',      accent: '#93C5FD' },
  headstarter: { bg: '#0A1918',      accent: '#5EEAD4' },
  any:         { bg: '#12203E',      accent: '#93C5FD' },
  codepath:    { bg: '#0A1F14',      accent: '#4ADE80' },
  shpe:        { bg: '#1E0F1E',      accent: '#F9A8D4', size: 'wide' },
  icpc:        { bg: '#0A1A12',      accent: '#6EE7B7' },
  isotope:     { bg: '#1F0708',      accent: '#FCA5A5' },
}

function LeadershipBento() {
  return (
    <motion.section {...inView} className="mb-16">
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="marker mb-3">Interlude</p>
          <h2
            className="display text-white mb-3"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Programs & <span className="serif italic" style={{ color: 'var(--blue-2)' }}>Leadership</span>
          </h2>
          <p className="text-[15px] max-w-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
            The fellowships, mentorships, and communities that shaped the way I approach
            problems outside the classroom.
          </p>
        </div>
      </div>

      {/* Bento grid */}
      <div className="grid gap-4 md:grid-cols-3 auto-rows-min">
        {leadership.map((item) => {
          const style = PROGRAM_STYLES[item.id] ?? { bg: 'var(--surface)', accent: 'var(--blue-2)' }
          return (
            <ProgramTile
              key={item.id}
              item={item}
              size={style.size}
              bg={style.bg}
              accent={style.accent}
            />
          )
        })}
      </div>
    </motion.section>
  )
}

// ═════════════════════════════════════════════════════════
//  PAGE
// ═════════════════════════════════════════════════════════
export default function Experience() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-[1240px] px-6 pt-20 pb-24">

        {/* ── Editorial title ─────────────────────────── */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 pt-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="marker">Table of Contents</span>
            <div className="h-px flex-1 max-w-[240px]" style={{ background: 'var(--hairline)' }} />
          </div>

          <h1 className="display text-white mb-6" style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}>
            Experience
          </h1>

          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <p className="serif italic text-[20px] leading-relaxed max-w-2xl" style={{ color: 'var(--text-2)' }}>
              Four roles across FinTech, AI research, and teaching — plus a handful of programs
              that shaped how I build.
            </p>

            {/* Chapter jump nav */}
            <nav className="flex flex-wrap gap-x-4 gap-y-1 md:justify-end text-[13px]">
              {[
                ['#fiserv',     'Fiserv',   'var(--fiserv)'],
                ['#arkra',      'Arkra',    'var(--arkra)'],
                ['#research',   'Research', '#F87171'],
                ['#mentoring',  'Teaching', '#F87171'],
                ['#programs',   'Programs', 'var(--blue-2)'],
              ].map(([href, label, color]) => (
                <a
                  key={href}
                  href={href}
                  className="editorial-link flex items-center gap-1"
                  style={{ color: 'var(--text-2)', borderColor: 'var(--hairline)' }}
                >
                  <ChevronRight size={12} style={{ color }} />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </motion.header>

        {/* ── Chapters ────────────────────────────────── */}
        <div id="fiserv"><FiservChapter /></div>
        <div id="arkra"><ArkraChapter /></div>
        <div id="research"><NjitResearchChapter /></div>
        <div id="mentoring"><NjitMentorChapter /></div>
        <div id="programs"><LeadershipBento /></div>

        {/* ── Footer note ─────────────────────────────── */}
        <motion.div
          {...inView}
          className="mt-20 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--hairline)' }}
        >
          <p className="serif italic text-[16px]" style={{ color: 'var(--text-3)' }}>
            — end of experience.
          </p>
          <a href="/projects" className="editorial-link text-[13px]" style={{ color: 'var(--text)' }}>
            Continue to projects →
          </a>
        </motion.div>
      </div>
    </PageTransition>
  )
}
