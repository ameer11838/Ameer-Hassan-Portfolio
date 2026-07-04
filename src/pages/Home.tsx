import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, GitBranch, Linkedin, Mail } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { logos, profilePhoto, profilePhotoFallback } from '../data/assets'

const ROLES = ['Software Engineer', 'AI/ML Researcher', 'Builder']

// Letter-by-letter reveal with blur
function AnimatedName({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <PageTransition>
      <div className="mx-auto max-w-[1240px] px-6 pt-20 pb-24">

        {/* ── Editorial header ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16 pt-8"
        >
          <div className="flex items-center gap-3">
            <span className="marker">Portfolio</span>
            <span className="marker" style={{ color: 'var(--text-4)' }}>/</span>
            <span className="marker">Vol. 01 · 2026</span>
          </div>
          <div className="marker italic-caps" style={{ letterSpacing: 0, textTransform: 'none' }}>
            Newark, NJ
          </div>
        </motion.div>

        {/* ── Cover: name + photo side-by-side, staggered ────── */}
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] items-end mb-24">

          {/* Name block */}
          <div>
            {/* Massive name */}
            <h1
              className="display text-white"
              style={{ fontSize: 'clamp(72px, 12vw, 172px)' }}
            >
              <span className="block"><AnimatedName text="Ameer" delay={0.05} /></span>
              <span className="block" style={{ marginTop: '-0.05em' }}>
                <AnimatedName text="Hassan" delay={0.35} />
              </span>
            </h1>

            {/* Editorial byline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-8 max-w-[520px]"
            >
              <p className="text-[18px] leading-[1.55]" style={{ color: 'var(--text-2)' }}>
                A student at NJIT building AI-powered systems, automation tools,
                and data pipelines that solve real problems.{' '}
                <span className="serif" style={{ color: 'var(--text)' }}>
                  Currently engineering QA automation at{' '}
                  <span style={{ color: 'var(--fiserv)' }}>Fiserv</span>.
                </span>
              </p>
            </motion.div>

            {/* Rotating role tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-8 flex items-center gap-3 text-[13px]"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: 'var(--blue-2)', boxShadow: '0 0 10px var(--blue-2)' }}
              />
              <span style={{ color: 'var(--text-3)' }}>Working as</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="cursor font-medium"
                  style={{ color: 'var(--text)' }}
                >
                  {ROLES[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Photo — asymmetric portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="overflow-hidden"
              style={{
                aspectRatio: '3/4',
                borderRadius: 2,
              }}
            >
              <img
                src={profilePhoto}
                alt="Ameer Hassan"
                className="h-full w-full object-cover object-top"
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).src = profilePhotoFallback
                }}
              />
            </div>
            {/* Photo caption */}
            <div className="mt-3 flex items-baseline justify-between">
              <span className="marker italic-caps" style={{ letterSpacing: 0, textTransform: 'none' }}>
                Fig. 1 — the author
              </span>
              <span className="marker" style={{ color: 'var(--text-4)' }}>2025</span>
            </div>
          </motion.div>
        </div>

        {/* ── CTAs ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex flex-wrap items-center gap-3 mb-24"
        >
          <Link to="/experience" className="btn-primary group">
            Read the chapters
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/projects" className="btn-outline">
            View projects
          </Link>
          <div className="ml-2 flex items-center gap-1.5">
            <a href="https://github.com/ameer11838" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-icon">
              <GitBranch size={16} />
            </a>
            <a href="https://linkedin.com/in/ameermhassan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn-icon">
              <Linkedin size={16} />
            </a>
            <a href="mailto:ameer.hassan726@gmail.com" aria-label="Email" className="btn-icon">
              <Mail size={16} />
            </a>
          </div>
        </motion.div>

        {/* ── Currently: a personal notes strip ───────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 mb-24 pt-10"
          style={{ borderTop: '1px solid var(--hairline)' }}
        >
          <div>
            <p className="marker mb-3">Currently building</p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text)' }}>
              An AI test-generation agent for enterprise QA — cutting manual test-writing
              time by 60% across positive, negative, and edge cases.
            </p>
          </div>
          <div>
            <p className="marker mb-3">Studying</p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text)' }}>
              Applied ML through the Break Through Tech Cornell partnership. Also{' '}
              <span className="italic-caps">Design of Everyday Things</span> on the side.
            </p>
          </div>
          <div>
            <p className="marker mb-3">Excited about</p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text)' }}>
              The overlap between LLMs and financial data infrastructure —
              agents that reason over 10-Ks and market events in real time.
            </p>
          </div>
        </motion.section>

        {/* ── Previously — logo marquee ────────────────────────── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="pt-10"
          style={{ borderTop: '1px solid var(--hairline)' }}
        >
          <div className="flex items-baseline gap-6 mb-10">
            <p className="marker">Previously & Currently</p>
            <p className="serif italic-caps text-[15px]" style={{ color: 'var(--text-3)' }}>
              — companies, fellowships, and programs
            </p>
          </div>

          <div className="overflow-hidden relative">
            <div className="animate-marquee flex items-center gap-14 whitespace-nowrap will-change-transform">
              {[
                logos.fiserv, logos.arkra, logos.njit, logos.bny, logos.seo,
                logos.btt, logos.headstarter, logos.shpe, logos.any, logos.codepath,
                logos.icpc, logos.isotope,
                // duplicate for seamless loop
                logos.fiserv, logos.arkra, logos.njit, logos.bny, logos.seo,
                logos.btt, logos.headstarter, logos.shpe, logos.any, logos.codepath,
                logos.icpc, logos.isotope,
              ].map((logo, i) => (
                <div
                  key={i}
                  className="h-10 shrink-0 flex items-center"
                  style={{ opacity: 0.55, filter: 'grayscale(20%)' }}
                >
                  <img src={logo} alt="" className="h-full max-w-[140px] object-contain" />
                </div>
              ))}
            </div>
            {/* Fade edges */}
            <div
              className="absolute inset-y-0 left-0 w-24 pointer-events-none"
              style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }}
            />
            <div
              className="absolute inset-y-0 right-0 w-24 pointer-events-none"
              style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }}
            />
          </div>
        </motion.section>

      </div>
    </PageTransition>
  )
}
