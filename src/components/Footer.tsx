import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="mt-20 px-6 pt-14 pb-10"
      style={{ borderTop: '1px solid var(--hairline)' }}
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          {/* Signoff */}
          <div>
            <p className="serif italic text-[24px] leading-tight mb-3" style={{ color: 'var(--text)' }}>
              Thanks for reading.
            </p>
            <p className="text-[13px] max-w-xs" style={{ color: 'var(--text-3)' }}>
              This portfolio was designed and built by hand — React, TypeScript, Framer Motion,
              a lot of iterations, and a healthy amount of Inter and Playfair Display.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="marker mb-4" style={{ color: 'var(--text-4)' }}>Contents</p>
            <ul className="space-y-2 text-[13px]">
              <li><Link to="/" className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-2)' }}>Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-2)' }}>About</Link></li>
              <li><Link to="/experience" className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-2)' }}>Experience</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-2)' }}>Projects</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-2)' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <p className="marker mb-4" style={{ color: 'var(--text-4)' }}>Elsewhere</p>
            <ul className="space-y-2 text-[13px]">
              <li><a href="https://github.com/ameer11838" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-2)' }}>GitHub ↗</a></li>
              <li><a href="https://linkedin.com/in/ameermhassan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-2)' }}>LinkedIn ↗</a></li>
              <li><a href="mailto:ameer.hassan726@gmail.com" className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-2)' }}>Email ↗</a></li>
              <li><a href="/Ameer_Hassan_Resume-.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" style={{ color: 'var(--text-2)' }}>Résumé ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-baseline justify-between gap-2" style={{ borderTop: '1px solid var(--hairline)' }}>
          <p className="marker" style={{ color: 'var(--text-4)' }}>
            © {new Date().getFullYear()} Ameer Hassan · Vol. 01 · Newark, NJ
          </p>
          <p className="serif italic text-[13px]" style={{ color: 'var(--text-4)' }}>
            — end of file
          </p>
        </div>
      </div>
    </footer>
  )
}
