import { useLayoutEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * Clamps text to `clampLines` and reveals the rest with a Read more toggle.
 * The toggle only appears when the text actually overflows the clamp.
 * Supports line breaks in the source string (whitespace-pre-line).
 */
export default function ExpandableText({
  text,
  clampLines = 2,
  className = '',
}: {
  text: string
  clampLines?: number
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [overflowing, setOverflowing] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    const measure = () => {
      const el = ref.current
      if (!el || open) return
      setOverflowing(el.scrollHeight > el.clientHeight + 1)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [text, clampLines, open])

  return (
    <div>
      <p
        ref={ref}
        className={className}
        style={{
          color: 'var(--text-2)',
          whiteSpace: 'pre-line',
          ...(open
            ? {}
            : {
                display: '-webkit-box',
                WebkitLineClamp: clampLines,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }),
        }}
      >
        {text}
      </p>
      {(overflowing || open) && (
        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-2 inline-flex items-center gap-1 text-[12.5px] font-medium transition-colors"
          style={{ color: 'var(--blue-2)' }}
        >
          {open ? 'Show less' : 'Read more'}
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown size={13} />
          </motion.span>
        </button>
      )}
    </div>
  )
}
