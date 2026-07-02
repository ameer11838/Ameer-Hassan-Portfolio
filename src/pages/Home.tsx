import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, Linkedin, FileText, ChevronRight, Briefcase, GraduationCap, FlaskConical, Trophy } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const STAT_CARDS = [
  { icon: Briefcase,     label: 'SWE Intern',        sub: 'Fiserv' },
  { icon: GraduationCap, label: 'CS + Honors',        sub: 'NJIT' },
  { icon: FlaskConical,  label: 'AI/ML Research',     sub: 'NJIT Lab' },
  { icon: Trophy,        label: 'Hackathon Winner',   sub: '2× award-winning' },
]

const item = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] } },
}

const container = {
  animate: { transition: { staggerChildren: 0.07 } },
}

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-58px)] flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-14 w-full">
          <div className="grid lg:grid-cols-[1fr_340px] gap-14 items-center">

            {/* ── Left: text ── */}
            <motion.div variants={container} initial="initial" animate="animate">
              {/* Status badge */}
              <motion.div variants={item} className="mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Open to internship opportunities
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={item}
                className="text-[52px] sm:text-[64px] lg:text-[72px] font-bold text-white tracking-tight leading-[1.06] mb-4"
              >
                Ameer
                <br />
                Hassan
              </motion.h1>

              {/* Role */}
              <motion.p variants={item} className="text-neutral-300 text-[15px] font-medium mb-3">
                Software Engineer · CS @ NJIT · AI/ML + FinTech
              </motion.p>

              {/* Tagline */}
              <motion.p
                variants={item}
                className="text-neutral-500 text-[15px] leading-relaxed max-w-[440px] mb-8"
              >
                I build AI-powered software, automation tools, and data-driven systems that
                turn complex problems into useful products.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={item} className="flex flex-wrap items-center gap-2.5">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-neutral-100 transition-colors duration-150"
                >
                  View Projects <ChevronRight size={14} />
                </Link>
                <a
                  href="/Ameer_Hassan_Resume-.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/[0.12] text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-white/[0.05] hover:border-white/[0.2] transition-all duration-150"
                >
                  <FileText size={13} /> Resume
                </a>
                <a
                  href="https://github.com/ameer11838"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 flex items-center justify-center border border-white/[0.1] rounded-lg text-neutral-400 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.05] transition-all duration-150"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/ameermhassan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 flex items-center justify-center border border-white/[0.1] rounded-lg text-neutral-400 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.05] transition-all duration-150"
                >
                  <Linkedin size={16} />
                </a>
              </motion.div>
            </motion.div>

            {/* ── Right: photo + stats ── */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-3"
            >
              {/* Profile photo — no overlay gradient */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/3]">
                <img
                  src="/profile-pic-4.png"
                  alt="Ameer Hassan"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).src = '/profile-pic-3.png'
                  }}
                />
              </div>

              {/* Stat cards — uniform, no colored tints */}
              <div className="grid grid-cols-2 gap-2.5">
                {STAT_CARDS.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="card card-hover p-3.5 flex flex-col gap-2">
                    <Icon size={15} className="text-neutral-400" />
                    <div>
                      <p className="text-white text-xs font-semibold leading-tight">{label}</p>
                      <p className="text-neutral-600 text-[11px] leading-tight mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </PageTransition>
  )
}
