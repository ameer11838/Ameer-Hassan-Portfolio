import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, GitBranch, Linkedin } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About',      to: '/about',      num: '01' },
  { label: 'Experience', to: '/experience', num: '02' },
  { label: 'Projects',   to: '/projects',   num: '03' },
  { label: 'Contact',    to: '/contact',    num: '04' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        borderBottom: scrolled ? '1px solid var(--hairline)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(5,5,6,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <nav className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-6">

        {/* Wordmark */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-baseline gap-2 shrink-0"
        >
          <span className="text-[14px] font-bold text-white transition-colors duration-200 group-hover:text-blue-400 tracking-tight">
            Ameer Hassan
          </span>
          <span
            className="marker italic-caps hidden sm:inline"
            style={{ color: 'var(--text-4)', letterSpacing: 0, textTransform: 'none' }}
          >
            — portfolio
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, to, num }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative flex items-baseline gap-1.5 rounded-md px-3 py-1.5 text-[13px] font-medium transition-all duration-200 ${
                    isActive ? 'text-white' : 'text-slate-500 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-[10px] font-mono opacity-60">{num}</span>
                    <span>{label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-[1px] h-[1.5px]"
                        style={{
                          background: 'var(--blue-2)',
                          boxShadow: '0 0 8px rgba(96,165,250,0.6)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="hidden md:flex items-center gap-1.5 shrink-0">
          <a href="https://github.com/ameer11838" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-icon !h-9 !w-9">
            <GitBranch size={14} />
          </a>
          <a href="https://linkedin.com/in/ameermhassan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn-icon !h-9 !w-9">
            <Linkedin size={14} />
          </a>
          <a
            href="/Ameer_Hassan_Resume-.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-lg px-3 py-1.5 text-[13px] font-medium text-white transition-all duration-200"
            style={{ border: '1px solid var(--hairline-2)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
          >
            Résumé ↗
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="btn-icon md:hidden !h-9 !w-9"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}
        style={{
          borderBottom: open ? '1px solid var(--hairline)' : 'none',
          background: 'rgba(5,5,6,0.98)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="px-6 pb-5 pt-3 space-y-1">
          {NAV_LINKS.map(({ label, to, num }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-baseline gap-3 rounded-md px-3 py-2.5 text-[15px] font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    : 'text-slate-400 hover:text-white'
                }`
              }
            >
              <span className="text-[11px] font-mono opacity-50">{num}</span>
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
