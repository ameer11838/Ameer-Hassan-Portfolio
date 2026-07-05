import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="mt-24 px-6 pt-14 pb-10"
      style={{ borderTop: '1px solid var(--hairline)' }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          {/* Signoff */}
          <div>
            <p className="text-white font-semibold text-[20px] tracking-tight mb-3" style={{ letterSpacing: '-0.02em' }}>
              Thanks for reading.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-semibold mb-4 tracking-widest uppercase" style={{ color: 'var(--text-4)' }}>Contents</p>
            <ul className="space-y-2.5 text-[13.5px]">
              <li><Link to="/" className="transition-colors" style={{ color: 'var(--text-2)' }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--blue-2)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-2)'}>Home</Link></li>
              <li><Link to="/about" className="transition-colors" style={{ color: 'var(--text-2)' }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--blue-2)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-2)'}>About</Link></li>
              <li><Link to="/experience" className="transition-colors" style={{ color: 'var(--text-2)' }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--blue-2)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-2)'}>Experience</Link></li>
              <li><Link to="/projects" className="transition-colors" style={{ color: 'var(--text-2)' }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--blue-2)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-2)'}>Work</Link></li>
              <li><Link to="/contact" className="transition-colors" style={{ color: 'var(--text-2)' }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--blue-2)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-2)'}>Contact</Link></li>
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <p className="text-[11px] font-semibold mb-4 tracking-widest uppercase" style={{ color: 'var(--text-4)' }}>Elsewhere</p>
            <ul className="space-y-2.5 text-[13.5px]">
              <li><a href="https://github.com/ameer11838" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-2)' }}>GitHub ↗</a></li>
              <li><a href="https://linkedin.com/in/ameermhassan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-2)' }}>LinkedIn ↗</a></li>
              <li><a href="mailto:ameer.hassan726@gmail.com" style={{ color: 'var(--text-2)' }}>Email ↗</a></li>
              <li><a href="/Ameer_Hassan_Resume-.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-2)' }}>Résumé ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-baseline justify-between gap-3" style={{ borderTop: '1px solid var(--hairline)' }}>
          <p className="text-[11.5px]" style={{ color: 'var(--text-4)', letterSpacing: '0.06em' }}>
            © {new Date().getFullYear()} Ameer Hassan · New York Metro Area
          </p>
          <p className="italic-serif text-[13px]" style={{ color: 'var(--text-4)' }}>
            end of file
          </p>
        </div>
      </div>
    </footer>
  )
}
