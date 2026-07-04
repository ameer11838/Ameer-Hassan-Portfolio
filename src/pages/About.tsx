import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { skillGroups } from '../data/skills'
import { logos, profilePhoto, profilePhotoFallback } from '../data/assets'

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export default function About() {
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
            <span className="marker">Colophon</span>
            <div className="h-px flex-1 max-w-[240px]" style={{ background: 'var(--hairline)' }} />
          </div>

          <h1 className="display text-white mb-6" style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}>
            About
          </h1>

          <p className="serif italic text-[20px] leading-relaxed max-w-3xl" style={{ color: 'var(--text-2)' }}>
            A short essay on who I am, how I got here, and what I'm trying to build.
          </p>
        </motion.header>

        {/* ── Image + drop cap essay ──────────────────── */}
        <div className="grid gap-14 lg:grid-cols-[300px_1fr]">

          {/* Left: sticky photo column */}
          <motion.aside
            {...inView}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div
              className="overflow-hidden mb-4"
              style={{ aspectRatio: '3/4', borderRadius: 2 }}
            >
              <img
                src={profilePhoto}
                alt="Ameer Hassan"
                className="h-full w-full object-cover object-top"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = profilePhotoFallback }}
              />
            </div>
            <p className="marker italic-caps mb-1" style={{ letterSpacing: 0, textTransform: 'none' }}>
              — Ameer Hassan
            </p>
            <p className="marker" style={{ color: 'var(--text-4)' }}>b. 2005 · Newark, NJ</p>

            {/* Facts */}
            <div className="mt-8 space-y-2.5 text-[13px]">
              {[
                ['Studying at', 'NJIT'],
                ['Working at',  'Fiserv'],
                ['Living in',   'New Jersey'],
                ['Graduating',  '2027'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-3">
                  <span className="marker shrink-0" style={{ letterSpacing: 0, textTransform: 'none', color: 'var(--text-4)' }}>
                    {k}
                  </span>
                  <span className="flex-1 h-px translate-y-[-3px]" style={{ background: 'var(--hairline)' }} />
                  <span style={{ color: 'var(--text)' }}>{v}</span>
                </div>
              ))}
            </div>
          </motion.aside>

          {/* Right: essay */}
          <motion.article {...inView} className="max-w-2xl">
            <p
              className="text-[19px] leading-[1.75] mb-6"
              style={{ color: 'var(--text)' }}
            >
              <span
                className="serif float-left text-[88px] font-black leading-[0.85] pr-3 pt-1 pb-1"
                style={{ color: 'var(--blue-2)' }}
              >
                I
              </span>
              &apos;m a Computer Science student at NJIT&apos;s{' '}
              <span className="italic-caps">Albert Dorman Honors College</span>, minoring in
              Applied Mathematics. My work sits at the intersection of software engineering,
              AI/ML, and fintech — and I care less about the stack and more about whether what
              I&apos;m building actually solves a real problem.
            </p>

            <p className="text-[17px] leading-[1.75] mb-6" style={{ color: 'var(--text-2)' }}>
              I got into this because I liked the idea of writing a few dozen lines of code that
              could quietly do the work of a hundred people. That instinct — <span className="italic-caps">automation
              as leverage</span> — is what I&apos;ve chased at Fiserv (building an AI test-case agent),
              at Arkra (SEC EDGAR pipelines with Playwright + OpenAI), and in the NJIT AI/ML lab
              (a Random Forest classifier for solar activity).
            </p>

            <p className="text-[17px] leading-[1.75] mb-6" style={{ color: 'var(--text-2)' }}>
              I&apos;ve been the beneficiary of some incredible programs — <span className="italic-caps">Break
              Through Tech AI</span> (Cornell), <span className="italic-caps">SEO Tech</span>,{' '}
              <span className="italic-caps">BNY Sophomore Summit</span>,{' '}
              <span className="italic-caps">America Needs You</span>,{' '}
              <span className="italic-caps">CodePath</span>,{' '}
              <span className="italic-caps">Headstarter</span> — and I try to pay it forward by
              mentoring first-year CS students at NJIT and organizing community events at the
              <span className="italic-caps"> Islamic Center of Passaic County</span>.
            </p>

            <p className="text-[17px] leading-[1.75] mb-10" style={{ color: 'var(--text-2)' }}>
              Outside of work: hackathons (Recova won 1st place at NJIT&apos;s Claude Builder;
              Transparency Lens took Best Use of MongoDB at KeanUHackThis), reading essays about
              design, and trying to figure out where LLMs actually belong in financial infra.
            </p>

            {/* Pull-quote */}
            <blockquote
              className="my-14 pl-6 py-2"
              style={{ borderLeft: '2px solid var(--blue-2)' }}
            >
              <p
                className="serif italic text-[26px] leading-[1.35]"
                style={{ color: 'var(--text)' }}
              >
                &ldquo;I like projects with a clear problem at the center — things that are both
                technically interesting <span style={{ color: 'var(--blue-2)' }}>and</span> genuinely useful.&rdquo;
              </p>
              <p className="mt-4 marker" style={{ color: 'var(--text-3)' }}>
                — a personal rule
              </p>
            </blockquote>

            {/* Education card — non-templated inline */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <span className="marker">Education</span>
                <div className="h-px flex-1" style={{ background: 'var(--hairline)' }} />
              </div>

              <div className="flex items-center gap-5">
                <div
                  className="h-16 w-16 shrink-0 overflow-hidden rounded-xl"
                  style={{ border: '1px solid var(--hairline)' }}
                >
                  <img src={logos.njit} alt="NJIT" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold text-[17px] tracking-tight">
                    New Jersey Institute of Technology
                  </p>
                  <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-2)' }}>
                    B.S. Computer Science · Minor in Applied Mathematics
                  </p>
                  <p className="text-[12px] mt-1 italic-caps" style={{ color: 'var(--text-3)', letterSpacing: 0, textTransform: 'none' }}>
                    Albert Dorman Honors College · Incoming Junior · Expected 2027
                  </p>
                </div>
              </div>
            </div>

            {/* Skills — as tag-cloud paragraph, not another grid */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="marker">Technical Skills</span>
                <div className="h-px flex-1" style={{ background: 'var(--hairline)' }} />
              </div>

              {skillGroups.map((group) => (
                <div key={group.category} className="mb-6">
                  <p className="marker mb-2" style={{ color: 'var(--blue-2)', letterSpacing: '0.1em' }}>
                    {group.category}
                  </p>
                  <p className="text-[15px] leading-[1.8]">
                    {group.skills.map((s, i) => (
                      <span key={s}>
                        <span className="italic-caps" style={{ color: 'var(--text)', letterSpacing: 0, textTransform: 'none' }}>
                          {s}
                        </span>
                        {i < group.skills.length - 1 && (
                          <span style={{ color: 'var(--text-4)' }}> · </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>

        {/* ── Footer note ─────────────────────────────── */}
        <motion.div
          {...inView}
          className="mt-20 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--hairline)' }}
        >
          <p className="serif italic text-[16px]" style={{ color: 'var(--text-3)' }}>
            — that&apos;s me.
          </p>
          <a href="/contact" className="editorial-link text-[13px]" style={{ color: 'var(--text)' }}>
            Get in touch →
          </a>
        </motion.div>
      </div>
    </PageTransition>
  )
}
