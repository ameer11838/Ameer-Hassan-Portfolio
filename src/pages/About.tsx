import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SkillBadge from '../components/SkillBadge'
import { skillGroups } from '../data/skills'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.38, delay, ease: [0.25, 0.1, 0.25, 1] } },
})

export default function About() {
  return (
    <PageTransition>
      <div className="page-container">
        <motion.div {...fadeUp(0)}>
          <p className="section-label">Background</p>
          <h1 className="page-title">About Me</h1>
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          {/* Left — bio + skills */}
          <div className="space-y-10">
            {/* Bio */}
            <motion.div {...fadeUp(0.07)} className="space-y-4 text-neutral-400 text-[15px] leading-[1.8]">
              <p>
                I'm a Computer Science student at NJIT's Albert Dorman Honors College, minoring
                in Applied Mathematics. My interests sit at the intersection of software
                engineering, AI/ML, fintech, and automation — and I care less about the stack and
                more about whether what I'm building actually works for real people.
              </p>
              <p>
                My work spans AI-powered test automation, financial data pipelines, machine
                learning research, developer tools, and community-focused software. I like
                projects with a clear problem at the center — things that are both technically
                interesting and genuinely useful.
              </p>
              <p>
                I'm currently a Software Engineering Intern at Fiserv, building an AI automation
                agent for enterprise QA workflows. Outside of class and work, I mentor first-year
                CS students, compete at hackathons, and spend too much time thinking about how
                ML and finance intersect.
              </p>
            </motion.div>

            {/* Education card */}
            <motion.div {...fadeUp(0.12)}>
              <p className="section-label">Education</p>
              <div className="card p-5 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-[#3f0000] flex items-center justify-center text-sm font-bold text-red-400 shrink-0">
                  NJ
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px]">
                    New Jersey Institute of Technology
                  </h3>
                  <p className="text-neutral-300 text-sm mt-0.5">
                    B.S. Computer Science · Minor in Applied Mathematics
                  </p>
                  <p className="text-neutral-500 text-xs mt-1">
                    Albert Dorman Honors College · Incoming Junior
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div {...fadeUp(0.17)}>
              <p className="section-label">Skills</p>
              <div className="space-y-6">
                {skillGroups.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-neutral-500 text-xs font-medium uppercase tracking-[0.1em] mb-3">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — photo + facts */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-4 lg:sticky lg:top-24"
          >
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] aspect-[3/4]">
              <img
                src="/profile-pic-4.png"
                alt="Ameer Hassan"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).src = '/profile-pic-3.png'
                }}
              />
            </div>

            {/* Quick facts */}
            <div className="card p-5 space-y-3">
              <h3 className="text-neutral-500 text-xs font-semibold uppercase tracking-[0.1em]">
                Quick Facts
              </h3>
              {[
                ['Location', 'New Jersey, USA'],
                ['Year', 'Incoming Junior (2027)'],
                ['Focus', 'AI/ML · FinTech · SWE'],
                ['Email', 'ameer.hassan726@gmail.com'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-2 text-sm">
                  <span className="text-neutral-500">{k}</span>
                  <span className="text-neutral-300 text-right text-xs leading-relaxed">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
