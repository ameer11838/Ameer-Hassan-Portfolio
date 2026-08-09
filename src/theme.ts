import { useCallback, useSyncExternalStore } from 'react'

export type ThemeId = 'midnight' | 'slate' | 'forest' | 'plum' | 'paper' | 'sand'
export type Mode = 'dark' | 'light'

export type ThemeMeta = {
  id: ThemeId
  name: string
  mode: Mode
  /** Swatch preview colors — these mirror the seeds in index.css. */
  bg: string
  accent: string
  text: string
}

/**
 * The palette menu. To add a theme: add a `:root[data-theme='…']`
 * seed block in index.css and an entry here. Everything else
 * (hairlines, glows, particles, marquee logos) derives itself.
 */
export const THEMES: ThemeMeta[] = [
  { id: 'midnight', name: 'Midnight', mode: 'dark',  bg: '#09090B', accent: '#60A5FA', text: '#FAFAFA' },
  { id: 'slate',    name: 'Slate',    mode: 'dark',  bg: '#0B1220', accent: '#38BDF8', text: '#F1F5F9' },
  { id: 'forest',   name: 'Forest',   mode: 'dark',  bg: '#08150F', accent: '#34D399', text: '#F0FAF4' },
  { id: 'plum',     name: 'Plum',     mode: 'dark',  bg: '#100D1A', accent: '#A78BFA', text: '#F6F3FF' },
  { id: 'paper',    name: 'Paper',    mode: 'light', bg: '#FAFAFA', accent: '#2563EB', text: '#0A0A0B' },
  { id: 'sand',     name: 'Sand',     mode: 'light', bg: '#F3EDE3', accent: '#C2410C', text: '#1C1710' },
]

export const DEFAULT_DARK: ThemeId = 'midnight'
export const DEFAULT_LIGHT: ThemeId = 'paper'

export const THEME_KEY = 'ah-theme'
const EVENT = 'ah-themechange'

const BY_ID = new Map(THEMES.map((t) => [t.id, t]))

/** Older builds stored 'dark' / 'light'. */
function normalize(value: string | null): ThemeId | null {
  if (!value) return null
  if (value === 'dark') return DEFAULT_DARK
  if (value === 'light') return DEFAULT_LIGHT
  return BY_ID.has(value as ThemeId) ? (value as ThemeId) : null
}

export function meta(id: ThemeId): ThemeMeta {
  return BY_ID.get(id) ?? BY_ID.get(DEFAULT_DARK)!
}

/** What the user picked last time, if anything. */
export function storedTheme(): ThemeId | null {
  try {
    return normalize(localStorage.getItem(THEME_KEY))
  } catch {
    return null
  }
}

/** What the OS prefers right now. */
export function systemTheme(): ThemeId {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? DEFAULT_LIGHT : DEFAULT_DARK
}

/** Whatever is on the page right now (index.html sets this pre-paint). */
export function currentTheme(): ThemeId {
  return normalize(document.documentElement.getAttribute('data-theme')) ?? DEFAULT_DARK
}

/** Paint a theme, remember it, and tell every listener. */
export function setTheme(id: ThemeId) {
  const theme = meta(id)
  document.documentElement.setAttribute('data-theme', theme.id)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme.bg)
  try {
    localStorage.setItem(THEME_KEY, theme.id)
  } catch {
    /* private mode — the theme still applies for this session */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: theme.id }))
}

/** Fires whenever the theme changes. Returns an unsubscribe. */
export function subscribeTheme(onChange: () => void) {
  window.addEventListener(EVENT, onChange)
  return () => window.removeEventListener(EVENT, onChange)
}

export function useTheme(): [ThemeId, (id: ThemeId) => void] {
  const id = useSyncExternalStore(subscribeTheme, currentTheme, () => DEFAULT_DARK)
  const set = useCallback((next: ThemeId) => setTheme(next), [])
  return [id, set]
}
