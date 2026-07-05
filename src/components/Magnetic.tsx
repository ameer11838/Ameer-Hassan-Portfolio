import { useRef, type ReactNode } from 'react'
import { motion, useSpring } from 'framer-motion'

/**
 * Wraps a child so it's gently pulled toward the cursor on hover,
 * then springs back on leave. Great on buttons / CTAs.
 */
export default function Magnetic({
  children,
  strength = 0.4,
}: {
  children: ReactNode
  strength?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const x = useSpring(0, { stiffness: 260, damping: 18, mass: 0.4 })
  const y = useSpring(0, { stiffness: 260, damping: 18, mass: 0.4 })

  return (
    <motion.span
      ref={ref}
      className="inline-flex"
      style={{ x, y }}
      onMouseMove={(e) => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * strength)
        y.set((e.clientY - (r.top + r.height / 2)) * strength)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.span>
  )
}
