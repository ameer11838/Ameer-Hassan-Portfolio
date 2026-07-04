import { motion } from 'framer-motion'
import { Mail, Linkedin, GitBranch, ArrowUpRight, FileText } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ContactForm from '../components/ContactForm'

const LINKS = [
  {
    icon:  Mail,
    label: 'Email',
    value: 'ameer.hassan726@gmail.com',
    href:  'mailto:ameer.hassan726@gmail.com',
    note:  'Best way to reach me — I reply within a day or two.',
  },
  {
    icon:  Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ameermhassan',
    href:  'https://linkedin.com/in/ameermhassan',
    note:  "For introductions, referrals, and networking.",
  },
  {
    icon:  GitBranch,
    label: 'GitHub',
    value: 'github.com/ameer11838',
    href:  'https://github.com/ameer11838',
    note:  'Where the code lives.',
  },
  {
    icon:  FileText,
    label: 'Résumé',
    value: 'Ameer_Hassan_Resume.pdf',
    href:  '/Ameer_Hassan_Resume-.pdf',
    note:  'One page. Updated for the 2026 cycle.',
  },
]

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export default function Contact() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-[1240px] px-6 pt-20 pb-24">

        {/* ── Editorial header ────────────────────────── */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 pt-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="marker">Correspondence</span>
            <div className="h-px flex-1 max-w-[240px]" style={{ background: 'var(--hairline)' }} />
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end mb-8">
            <h1 className="display text-white" style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}>
              Say hello.
            </h1>
            <p className="serif italic text-[16px] pb-6" style={{ color: 'var(--text-3)' }}>
              — I read every message.
            </p>
          </div>

          <p className="serif italic text-[20px] leading-relaxed max-w-3xl" style={{ color: 'var(--text-2)' }}>
            Open to <span style={{ color: 'var(--text)' }}>SWE internships</span> for
            summer 2026, <span style={{ color: 'var(--text)' }}>research collaborations</span>{' '}
            in AI/ML, and building things for people who care about craft.
          </p>
        </motion.header>

        {/* ── Contact grid ────────────────────────────── */}
        <div className="grid gap-14 lg:grid-cols-[1fr_420px]">

          {/* Left: contact channels */}
          <motion.div {...inView}>
            <div className="flex items-center gap-3 mb-6">
              <span className="marker">Channels</span>
              <div className="h-px flex-1" style={{ background: 'var(--hairline)' }} />
            </div>

            <div className="space-y-1">
              {LINKS.map(({ icon: Icon, label, value, href, note }, i) => (
                <motion.a
                  key={label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  href={href}
                  target={href.startsWith('mailto') || href.startsWith('/') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-5"
                  style={{ borderTop: '1px solid var(--hairline)' }}
                >
                  <Icon size={18} style={{ color: 'var(--text-3)' }} className="group-hover:text-blue-400 transition-colors" />

                  <div>
                    <p className="serif italic text-[15px] mb-1" style={{ color: 'var(--text-3)' }}>
                      — {label.toLowerCase()}
                    </p>
                    <p className="text-[20px] text-white group-hover:text-blue-300 transition-colors leading-tight font-bold tracking-tight">
                      {value}
                    </p>
                    <p className="text-[13px] mt-1" style={{ color: 'var(--text-3)' }}>
                      {note}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: 'var(--blue-2)' }}
                  />
                </motion.a>
              ))}
              <div style={{ borderTop: '1px solid var(--hairline)' }} />
            </div>

            {/* Personal signature */}
            <motion.div {...inView} className="mt-14 max-w-md">
              <p className="serif italic text-[24px] leading-[1.5] mb-3" style={{ color: 'var(--text)' }}>
                &ldquo;If you&apos;re working on something interesting, I&apos;d love to hear about it.&rdquo;
              </p>
              <p className="marker" style={{ color: 'var(--text-3)' }}>
                — Ameer, Newark NJ
              </p>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            {...inView}
            className="rounded-2xl p-8"
            style={{ background: 'var(--surface)', border: '1px solid var(--hairline)' }}
          >
            <div className="mb-6">
              <p className="marker mb-2" style={{ color: 'var(--blue-2)' }}>Or write directly</p>
              <h2 className="text-white font-bold text-[24px] tracking-tight">
                Send a message
              </h2>
              <p className="text-[13px] mt-1" style={{ color: 'var(--text-3)' }}>
                Opens your email client with the message pre-filled.
              </p>
            </div>
            <ContactForm />
          </motion.div>
        </div>

      </div>
    </PageTransition>
  )
}
