// Shared timing for the welcome/preloader so the hero can start after it.
export const INTRO_MS = 2000
export const INTRO_KEY = 'ah-welcomed'

export function hasWelcomed() {
  try { return sessionStorage.getItem(INTRO_KEY) === '1' } catch { return false }
}
export function markWelcomed() {
  try { sessionStorage.setItem(INTRO_KEY, '1') } catch { /* ignore */ }
}
