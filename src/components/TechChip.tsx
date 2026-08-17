import { SKILL_META, FALLBACK_META } from '../data/skillIcons'

/**
 * The small stack pill used on Experience and Projects — same `.chip` shell as
 * before, now led by the brand mark so a row of them reads at a glance.
 * The larger About-page variant lives in `pages/About.tsx`.
 */
export default function TechChip({ label }: { label: string }) {
  const { Icon, color } = SKILL_META[label] ?? FALLBACK_META
  return (
    <span className="chip gap-1.5 pl-2">
      <Icon size={12.5} style={{ color }} className="shrink-0" aria-hidden />
      {label}
    </span>
  )
}
