import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ContactForm from '../components/ContactForm'

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ameer.hassan726@gmail.com',
    href: 'mailto:ameer.hassan726@gmail.com',
    note: 'Best way to reach me',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ameermhassan',
    href: 'https://linkedin.com/in/ameermhassan',
    note: "Let's connect",
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ameer11838',
    href: 'https://github.com/ameer11838',
    note: 'See what I build',
  },
]

export default function Contact() {
  return (
    <PageTransition>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="section-label">Get In Touch</p>
          <h1 className="page-title">Contact</h1>
          <p className="page-subtitle">
            Open to internship opportunities, research collaborations, and interesting projects.
            Reach out and I'll get back to you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10">
          {/* Left — contact links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.08 }}
            className="space-y-3"
          >
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href, note }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="card card-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-neutral-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm">{label}</p>
                  <p className="text-neutral-400 text-xs truncate mt-0.5">{value}</p>
                  <p className="text-neutral-600 text-xs mt-0.5">{note}</p>
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0"
                />
              </a>
            ))}

            <div className="pt-4 border-t border-white/[0.05]">
              <p className="text-neutral-500 text-sm leading-relaxed">
                I'm currently interning at Fiserv and looking ahead to future opportunities in
                software engineering, AI/ML, and fintech. If you're working on something
                interesting, I'd love to hear about it.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.14 }}
            className="card p-6"
          >
            <h2 className="text-white font-semibold text-base mb-5">Send a message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
