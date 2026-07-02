import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Github, Linkedin } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/[0.06]">
      <nav className="max-w-5xl mx-auto px-6 h-[58px] flex items-center justify-between gap-4">
        {/* Name / Logo */}
        <Link
          to="/"
          className="text-white font-semibold text-sm tracking-tight shrink-0 hover:text-neutral-300 transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          Ameer Hassan
        </Link>

        {/* Desktop nav — pill-style active indicator */}
        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-150 ${
                    isActive
                      ? 'text-white bg-white/[0.08]'
                      : 'text-neutral-500 hover:text-neutral-200 hover:bg-white/[0.04]'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right — icons + resume */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a
            href="https://github.com/ameer11838"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-500 hover:text-white hover:bg-white/[0.06] transition-all duration-150"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="https://linkedin.com/in/ameermhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-500 hover:text-white hover:bg-white/[0.06] transition-all duration-150"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="/Ameer_Hassan_Resume-.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-sm font-medium text-white border border-white/[0.14] px-3 py-1.5 rounded-lg hover:bg-white/[0.06] hover:border-white/[0.22] transition-all duration-150"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-all duration-150"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#111111] border-b border-white/[0.06] ${
          mobileOpen ? 'max-h-[380px]' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-5 space-y-1">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block text-[15px] font-medium px-3 py-2 rounded-lg transition-all duration-150 ${
                  isActive
                    ? 'text-white bg-white/[0.07]'
                    : 'text-neutral-400 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center gap-3 px-3">
            <a href="https://github.com/ameer11838" target="_blank" rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors">
              <Github size={17} />
            </a>
            <a href="https://linkedin.com/in/ameermhassan" target="_blank" rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors">
              <Linkedin size={17} />
            </a>
            <a href="/Ameer_Hassan_Resume-.pdf" target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-white ml-1">
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
