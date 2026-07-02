import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} Ameer Hassan</p>
        <div className="flex items-center gap-5 text-xs">
          <Link to="/about" className="hover:text-neutral-300 transition-colors">About</Link>
          <Link to="/projects" className="hover:text-neutral-300 transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-neutral-300 transition-colors">Contact</Link>
          <a
            href="https://github.com/ameer11838"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
