import type { ReactNode } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import Particles from './Particles'

export default function Layout({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{ background: 'var(--bg)', color: 'var(--text)' }}
    >
      {/* Ambient particle field (behind everything) */}
      <Particles />

      {/* Scroll progress */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
        style={{ scaleX, background: 'var(--blue-2)', boxShadow: '0 0 10px rgba(96,165,250,0.7)' }}
      />
      <Navbar />
      <div className="relative z-10 flex flex-1 flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
