import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { skillGroups } from '../data/skills'
import { logos, profilePhoto, profilePhotoFallback } from '../data/assets'

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
}

export default function About() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-24">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="eyebrow mb-6">About</p>
          <h1 className="display text-white mb-8" style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}>
            Who I am,
            <br />
            <span className="italic-serif" style={{ fontWeight: 500, color: 'var(--text-2)' }}>in short.</span>
          </h1>
        </motion.header>

        {/* Portrait + Essay */}
        <div className="grid gap-16 lg:grid-cols-[340px_1fr] items-start mb-24">

          {/* Portrait */}
          <motion.aside {...rise} className="lg:sticky lg:top-24">
            <div
              className="group relative overflow-hidden mb-5"
              style={{
                aspectRatio: '4/5',
                borderRadius: 4,
                border: '1px solid var(--hairline-2)',
              }}
            >
              <img
                src={profilePhoto}
                alt="Ameer Hassan"
                className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = profilePhotoFallback }}
              />
            </div>

            <p className="italic-serif text-[15px]" style={{ color: 'var(--text-2)' }}>
              Ameer Hassan
            </p>
            <p className="text-[12.5px] mt-0.5" style={{ color: 'var(--text-4)' }}>
              b. 2005 · Newark, NJ
            </p>

            {/* Facts */}
            <dl className="mt-8 space-y-3 text-[13.5px]">
              {[
                ['Studying at',   'NJIT'],
                ['Working at',    'Fiserv'],
                ['Living in',     'New Jersey'],
                ['Graduating',    '2027'],
                ['Off the clock', 'Wrestling · hoops · space'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-3">
                  <dt className="shrink-0" style={{ color: 'var(--text-4)' }}>{k}</dt>
                  <span className="flex-1 rule translate-y-[-3px]" />
                  <dd style={{ color: 'var(--text)' }}>{v}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>

          {/* Essay */}
          <motion.article {...rise} className="max-w-2xl">
            <p className="text-[22px] leading-[1.55] font-medium tracking-tight text-white mb-8" style={{ letterSpacing: '-0.01em' }}>
              I&apos;m a Computer Science student at NJIT&apos;s Honors College, minoring in Applied Math.
              I got into this because I liked that a few lines of code could quietly do the work of a
              hundred people — that idea still drives most of what I build.
            </p>

            <p className="text-[17px] leading-[1.75] mb-6" style={{ color: 'var(--text-2)' }}>
              These days that looks like an AI test-case agent at Fiserv, SEC data pipelines at
              Arkra, and a solar-activity classifier in NJIT&apos;s ML lab. Different problems, same
              thing underneath: I care less about the stack and more about whether the thing actually
              works for the person on the other end of it.
            </p>

            <p className="text-[17px] leading-[1.75] mb-6" style={{ color: 'var(--text-2)' }}>
              When I&apos;m not coding, I&apos;m usually doing one of a few things — wrestling, playing
              pickup basketball with friends, or dragging everyone to a restaurant I&apos;ve never
              tried. And at some point most nights I end up down a rabbit hole about UFOs, deep space,
              or whatever unexplained thing the internet is arguing about that week. I&apos;m curious to
              a fault. Half my side projects start because I wanted to understand how something worked
              and couldn&apos;t let it go.
            </p>

            <p className="text-[17px] leading-[1.75] mb-6" style={{ color: 'var(--text-2)' }}>
              I&apos;ve learned a ton from programs like Break Through Tech AI at Cornell, SEO Tech,
              BNY, America Needs You, CodePath, and Headstarter — so I try to pass it on. I mentor
              first-year CS students at NJIT and help run community events at my local Islamic center.
            </p>

            <p className="text-[17px] leading-[1.75] mb-14" style={{ color: 'var(--text-2)' }}>
              The rest of my time goes to hackathons and side projects. Recova won 1st at NJIT&apos;s
              Claude Builder, Transparency Lens took Best Use of MongoDB at KeanUHackThis, and there&apos;s
              always something half-built on my laptop that I made just to see if I could.
            </p>

            {/* Pull-quote */}
            <blockquote
              className="mb-14 pl-6 py-1"
              style={{ borderLeft: '2px solid var(--blue-2)' }}
            >
              <p className="text-[22px] leading-[1.45] font-medium text-white" style={{ letterSpacing: '-0.01em' }}>
                &ldquo;Build things that are actually useful — and stay curious enough to keep asking <span style={{ color: 'var(--blue-2)' }}>why</span>.&rdquo;
              </p>
              <p className="mt-4 text-[12.5px]" style={{ color: 'var(--text-3)' }}>
                — how I try to work
              </p>
            </blockquote>

            {/* Education */}
            <div className="mb-14">
              <p className="eyebrow mb-6">Education</p>
              <div className="flex items-center gap-5">
                <div
                  className="h-16 w-16 shrink-0 rounded-md overflow-hidden flex items-center justify-center"
                  style={{ background: '#FFFFFF' }}
                >
                  <img src={logos.njit} alt="NJIT" className="h-full w-full object-contain p-1.5" />
                </div>
                <div>
                  <p className="text-white font-semibold text-[17px] tracking-tight">
                    New Jersey Institute of Technology
                  </p>
                  <p className="text-[13.5px] mt-0.5" style={{ color: 'var(--text-2)' }}>
                    B.S. Computer Science · Minor in Applied Mathematics
                  </p>
                  <p className="text-[12.5px] mt-1" style={{ color: 'var(--text-3)' }}>
                    Albert Dorman Honors College · Incoming Junior · Expected 2027
                  </p>
                </div>
              </div>
            </div>

            {/* Skills — prose, not chips */}
            <div>
              <p className="eyebrow mb-6">Toolbox</p>
              {skillGroups.map((group) => (
                <div key={group.category} className="mb-6">
                  <p className="text-[12.5px] mb-2" style={{ color: 'var(--text-3)' }}>
                    {group.category}
                  </p>
                  <p className="text-[15.5px] leading-[1.8]" style={{ color: 'var(--text)' }}>
                    {group.skills.map((s, i) => (
                      <span key={s}>
                        {s}
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

        {/* Footer */}
        <motion.div
          {...rise}
          className="mt-16 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
          style={{ borderTop: '1px solid var(--hairline)' }}
        >
          <p className="italic-serif text-[17px]" style={{ color: 'var(--text-3)' }}>
            — that&apos;s me.
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
