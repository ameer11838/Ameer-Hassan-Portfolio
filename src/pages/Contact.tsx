import { motion } from 'framer-motion'
import { Mail, Linkedin, GitBranch, FileText, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ContactForm from '../components/ContactForm'

const LINKS = [
  { icon: Mail,      label: 'Email',    value: 'ameer.hassan726@gmail.com',      href: 'mailto:ameer.hassan726@gmail.com', note: 'The best way. I reply within a day or two.' },
  { icon: Linkedin,  label: 'LinkedIn', value: 'linkedin.com/in/ameermhassan',   href: 'https://linkedin.com/in/ameermhassan', note: 'Introductions, referrals, and networking.' },
  { icon: GitBranch, label: 'GitHub',   value: 'github.com/ameer11838',          href: 'https://github.com/ameer11838', note: 'Where the code lives.' },
  { icon: FileText,  label: 'Résumé',   value: 'Ameer_Hassan_Resume.pdf',        href: '/Ameer_Hassan_Resume-.pdf', note: 'One page. Kept current for the 2027 cycle.' },
]

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
}

export default function Contact() {
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
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="display text-white mb-8" style={{ fontSize: 'clamp(56px, 9vw, 128px)' }}>
            Say hello.
          </h1>
          <p className="max-w-2xl text-[19px] leading-[1.6]" style={{ color: 'var(--text-2)' }}>
            I&apos;m up for SWE internships for Summer 2027, AI/ML research, or just talking through an
            idea you can&apos;t stop thinking about. If you&apos;re building something interesting, reach out.
          </p>
        </motion.header>

        <div className="grid gap-16 lg:grid-cols-[1fr_440px]">

          {/* Channels */}
          <motion.div {...rise}>
            <p className="eyebrow mb-8">Channels</p>

            <div>
              {LINKS.map(({ icon: Icon, label, value, href, note }, i) => (
                <motion.a
                  key={label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.06, ease: [0.19, 1, 0.22, 1] }}
                  href={href}
                  target={href.startsWith('mailto') || href.startsWith('/') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6"
                  style={{ borderTop: '1px solid var(--hairline)' }}
                >
                  <Icon size={18} style={{ color: 'var(--text-3)' }} className="transition-colors group-hover:text-white" />

                  <div>
                    <p className="text-[11.5px] mb-1" style={{ color: 'var(--text-4)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      {label}
                    </p>
                    <p className="text-[20px] font-medium text-white group-hover:text-blue-300 transition-colors leading-tight tracking-tight">
                      {value}
                    </p>
                    <p className="text-[13px] mt-1" style={{ color: 'var(--text-3)' }}>
                      {note}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    style={{ color: 'var(--blue-2)' }}
                  />
                </motion.a>
              ))}
              <div style={{ borderTop: '1px solid var(--hairline)' }} />
            </div>

            {/* Signature */}
            <div className="mt-16 max-w-md">
              <p className="text-[22px] leading-[1.45] font-medium text-white" style={{ letterSpacing: '-0.01em' }}>
                &ldquo;If you&apos;re working on something interesting, I&apos;d love to hear about it.&rdquo;
              </p>
              <p className="mt-4 text-[12.5px]" style={{ color: 'var(--text-3)' }}>
                — Ameer, Newark NJ
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            {...rise}
            className="p-8 rounded-lg"
            style={{
              background: 'var(--surface-2)',
              border: '1px solid var(--hairline)',
            }}
          >
            <div className="mb-6">
              <p className="eyebrow mb-2" style={{ color: 'var(--blue-2)' }}>Or write directly</p>
              <h2 className="text-white font-semibold text-[22px] tracking-tight">
                Send a message
              </h2>
              <p className="text-[13px] mt-1.5" style={{ color: 'var(--text-3)' }}>
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
