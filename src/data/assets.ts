/**
 * Central asset registry.
 *
 * Real logos live in `src/assets/logos/real/`.
 * Project thumbnails still live in `src/assets/projects/` (SVG placeholders).
 * The headshot is served from `/assets/headshot.jpg` via vite's `publicDir`.
 */

// ── Real Company / Organization Logos ───────────────────────────
import fiservLogo         from '../assets/logos/real/fiserv-logo.jpeg'
import arkraLogo          from '../assets/logos/real/arkra.png'
import njitLogo           from '../assets/logos/real/njit.jpeg'
import yingWuLogo         from '../assets/logos/real/ying-wu.jpeg'
import seoLogo            from '../assets/logos/real/seo.png'
import bnyLogo            from '../assets/logos/real/bny.jpeg'
import bttLogo            from '../assets/logos/real/break-through-tech.jpeg'
import shpeLogo           from '../assets/logos/real/shpe.jpeg'
import codepathLogo       from '../assets/logos/real/codepath.jpeg'
import anyLogo            from '../assets/logos/real/america-needs-you.jpeg'
import icpcLogo           from '../assets/logos/real/icpc.jpeg'
import headstarterLogo    from '../assets/logos/real/headstarter.png'
import isotopeLogo        from '../assets/logos/isotope.svg'

// ── Project Images ──────────────────────────────────────────────
// Real screenshots where they exist; product marks/logos otherwise.
import recovaImage             from '../assets/projects/recova.png'              // screenshot
import aiCodeEditorImage       from '../assets/projects/ai-code-editor.png'      // screenshot
import transparencyLensImage   from '../assets/projects/transparency-lens.png'   // screenshot
import inventoryImage          from '../assets/projects/inventory.png'           // screenshot
import brainTumorImage         from '../assets/projects/brain-tumor.png'         // mark
import masjidPayImage          from '../assets/projects/masjidpay.webp'          // mark
import discordChatImage        from '../assets/projects/discord.png'             // mark
import solarPhysicsImage       from '../assets/projects/solar.jpeg'              // mark

export const logos = {
  fiserv:       fiservLogo,
  arkra:        arkraLogo,
  njit:         njitLogo,
  yingWu:       yingWuLogo,
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
  inventory:        inventoryImage,
  brainTumor:       brainTumorImage,
}

/**
 * Headshot — real photo copied from ~/Documents/Portfolio images.
 * Served from `/headshot.jpg` via vite's `publicDir: 'assets'`.
 */
export const profilePhoto = '/headshot.jpg'
export const profilePhotoFallback = '/profile-pic-4.png'

// Personal photos.
export { default as sunsetPhoto } from '../assets/sunset.jpg'   // Home flip — back
export { default as paccPhoto }   from '../assets/pacc.jpg'      // Home flip — front
export { default as boatPhoto }   from '../assets/boat.jpg'      // About base
export { default as gradPhoto }   from '../assets/grad.jpg'      // (unused — kept available)
export { default as caliPhoto }   from '../assets/cali.jpg'      // (unused — kept available)
export { default as fiservHeadshot } from '../assets/fiserv-headshot.jpg' // About flip — back
