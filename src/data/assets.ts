/**
 * Central asset registry.
 *
 * To swap in a real logo/image:
 *   1. Drop the file into `src/assets/logos/` (or `src/assets/projects/`)
 *   2. Update the import path below
 *   3. Everything else auto-updates
 */

// ── Company / Organization Logos ────────────────────────────────
import fiservLogo         from '../assets/logos/fiserv.svg'
import arkraLogo          from '../assets/logos/arkra.svg'
import njitLogo           from '../assets/logos/njit.svg'
import seoLogo            from '../assets/logos/seo.svg'
import bnyLogo            from '../assets/logos/bny.svg'
import bttLogo            from '../assets/logos/break-through-tech.svg'
import shpeLogo           from '../assets/logos/shpe.svg'
import codepathLogo       from '../assets/logos/codepath.svg'
import anyLogo            from '../assets/logos/america-needs-you.svg'
import icpcLogo           from '../assets/logos/icpc.svg'
import headstarterLogo    from '../assets/logos/headstarter.svg'
import isotopeLogo        from '../assets/logos/isotope.svg'

// ── Project Thumbnails ──────────────────────────────────────────
import discordChatImage        from '../assets/projects/discord-chat.svg'
import aiCodeEditorImage       from '../assets/projects/ai-code-editor.svg'
import solarPhysicsImage       from '../assets/projects/solar-physics.svg'
import masjidPayImage          from '../assets/projects/masjidpay.svg'
import recovaImage             from '../assets/projects/recova.svg'
import transparencyLensImage   from '../assets/projects/transparency-lens.svg'

export const logos = {
  fiserv:       fiservLogo,
  arkra:        arkraLogo,
  njit:         njitLogo,
  seo:          seoLogo,
  bny:          bnyLogo,
  btt:          bttLogo,
  shpe:         shpeLogo,
  codepath:     codepathLogo,
  any:          anyLogo,
  icpc:         icpcLogo,
  headstarter:  headstarterLogo,
  isotope:      isotopeLogo,
}

export const projectImages = {
  discordChat:      discordChatImage,
  aiCodeEditor:     aiCodeEditorImage,
  solarPhysics:     solarPhysicsImage,
  masjidPay:        masjidPayImage,
  recova:           recovaImage,
  transparencyLens: transparencyLensImage,
}

/**
 * Profile photo — served from /assets/ via vite `publicDir`.
 * Real file lives at `/assets/profile-pic-4.png`.
 */
export const profilePhoto = '/profile-pic-4.png'
export const profilePhotoFallback = '/profile-pic-3.png'
