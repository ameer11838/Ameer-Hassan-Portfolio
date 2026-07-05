import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { INTRO_MS } from '../intro'

/**
 * Welcome screen — counts 0 → 100% while the portfolio "loads",
 * then lifts away to reveal the site. Calm, black, no gimmicks.
 */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0)

  // Lock scroll while the welcome screen is up.
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  // Ease-out ramp to 100 over INTRO_MS, then hand off.
  useEffect(() => {
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / INTRO_MS)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setPct(Math.round(eased * 100))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setTimeout(onDone, 320)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between px-8 py-10 md:px-14 md:py-14"
      style={{ background: 'var(--bg)' }}
      initial={{ opacity: 1 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Top — signature */}
      <div className="flex items-baseline justify-between">
        <span className="text-[14px] font-semibold tracking-tight text-white">
          Ameer Hassan
        </span>
        <span className="italic-serif text-[13px]" style={{ color: 'var(--text-4)' }}>New York Metro</span>
      </div>

      {/* Middle — status line */}
      <div className="flex-1 flex items-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="italic-serif"
          style={{ color: 'var(--text-3)', fontSize: 'clamp(20px, 3vw, 32px)' }}
        >
          {pct < 100 ? 'Loading the portfolio…' : 'Welcome in.'}
        </motion.p>
      </div>

      {/* Bottom — counter + progress bar */}
      <div>
        <div
          className="tabular-nums text-white font-semibold leading-none mb-6"
          style={{ fontSize: 'clamp(72px, 16vw, 220px)', letterSpacing: '-0.05em' }}
        >
          {pct}<span style={{ color: 'var(--text-4)' }}>%</span>
        </div>
        <div className="relative h-[2px] w-full overflow-hidden" style={{ background: 'var(--hairline)' }}>
          <div
            className="absolute inset-y-0 left-0"
            style={{ width: `${pct}%`, background: 'var(--blue-2)', boxShadow: '0 0 12px rgba(96,165,250,0.7)' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
