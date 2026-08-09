import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme, meta, DEFAULT_DARK, DEFAULT_LIGHT } from '../theme'

/**
 * Dark / light switch. The icon shows the theme you'd get by clicking,
 * so it cross-fades and spins on every toggle.
 * Themes are named now, so this flips between the two defaults.
 */
export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useTheme()
  const isDark = meta(theme).mode === 'dark'
  const next = isDark ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? DEFAULT_LIGHT : DEFAULT_DARK)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={`btn-icon relative overflow-hidden ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="flex items-center justify-center"
          initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 70, scale: 0.6 }}
          transition={{ duration: 0.22, ease: [0.19, 1, 0.22, 1] }}
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
