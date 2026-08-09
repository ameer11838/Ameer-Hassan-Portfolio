import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Palette } from 'lucide-react'
import { THEMES, meta, useTheme, type Mode, type ThemeMeta } from '../theme'

const GROUPS: { label: string; mode: Mode }[] = [
  { label: 'Dark', mode: 'dark' },
  { label: 'Light', mode: 'light' },
]

/** Little preview disc: background, a text bar, an accent dot. */
function Swatch({ theme, size = 20 }: { theme: ThemeMeta; size?: number }) {
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full"
      style={{
        width: size,
        height: size,
        background: theme.bg,
        border: '1px solid var(--hairline-3)',
      }}
    >
      <span
        style={{
          width: size * 0.44,
          height: Math.max(1, size * 0.08),
          borderRadius: 99,
          background: theme.text,
          opacity: 0.8,
        }}
      />
      <span
        className="absolute"
        style={{
          right: size * 0.14,
          bottom: size * 0.16,
          width: size * 0.24,
          height: size * 0.24,
          borderRadius: 99,
          background: theme.accent,
        }}
      />
    </span>
  )
}

export default function ThemePicker({ className = '' }: { className?: string }) {
  const [current, select] = useTheme()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change color theme"
        aria-haspopup="menu"
        aria-expanded={open}
        title={`Theme: ${meta(current).name}`}
        className="btn-icon"
      >
        <Palette size={15} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: [0.19, 1, 0.22, 1] }}
            className="absolute right-0 top-[calc(100%+10px)] z-50 w-[212px] origin-top-right rounded-xl p-2"
            style={{
              background: 'var(--nav-bg-solid)',
              border: '1px solid var(--hairline-2)',
              backdropFilter: 'blur(16px) saturate(1.2)',
              WebkitBackdropFilter: 'blur(16px) saturate(1.2)',
              boxShadow: '0 24px 60px -20px var(--shadow-drop)',
            }}
          >
            {GROUPS.map(({ label, mode }) => (
              <div key={mode} className="mb-1 last:mb-0">
                <p className="eyebrow px-2 pb-1 pt-1.5 text-[10px]">{label}</p>
                {THEMES.filter((t) => t.mode === mode).map((t) => {
                  const active = t.id === current
                  return (
                    <button
                      key={t.id}
                      role="menuitemradio"
                      aria-checked={active}
                      onClick={() => {
                        select(t.id)
                        setOpen(false)
                      }}
                      className="flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-[13px] font-medium transition-colors duration-150"
                      style={{ color: active ? 'var(--text)' : 'var(--text-2)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--chip-bg)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      <Swatch theme={t} />
                      <span className="flex-1">{t.name}</span>
                      {active && <Check size={13} style={{ color: 'var(--blue-2)' }} />}
                    </button>
                  )
                })}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
