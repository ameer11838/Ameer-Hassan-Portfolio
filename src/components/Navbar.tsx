import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = [
  { label: 'About Me',   to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects',   to: '/projects' },
  { label: 'Contact',    to: '/contact' },
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
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px) saturate(1.2)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.2)' : 'none',
      }}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-6">

        {/* Wordmark — minimal */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="nav-pill group flex items-center gap-2 shrink-0 rounded-md px-2 py-1 -mx-2 text-[14px] font-semibold tracking-tight text-ink"
        >
          Ameer Hassan
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `nav-pill relative flex items-center rounded-md px-3 py-1.5 text-[13.5px] font-medium ${
                    isActive ? 'text-ink' : 'nav-link text-ink-3'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute left-3 right-3 -bottom-[1px] h-[2px] rounded-full"
                        style={{
                          background: 'var(--blue-2)',
                          boxShadow: '0 0 10px var(--glow-3)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a
            href="/Ameer_Hassan_Resume-.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-pill rounded-md px-3 py-1.5 text-[13px] font-medium text-ink-2"
          >
            Résumé ↗
          </a>
          <ThemeToggle className="ml-1" />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="btn-icon"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}
        style={{
          borderBottom: open ? '1px solid var(--hairline)' : 'none',
          background: 'var(--nav-bg-solid)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="px-6 pb-5 pt-3 space-y-1">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `nav-pill block rounded-md px-3 py-2.5 text-[15px] font-medium ${
                  isActive ? 'text-ink' : 'text-ink-2'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="/Ameer_Hassan_Resume-.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="nav-pill block rounded-md px-3 py-2.5 text-[15px] font-medium"
            style={{ color: 'var(--blue-2)' }}
          >
            Résumé ↗
          </a>
        </div>
      </div>
    </header>
  )
}
