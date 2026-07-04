interface Props {
  skill: string
}

export default function SkillBadge({ skill }: Props) {
  return (
    <span className="cursor-default rounded-lg border border-slate-700/70 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-300 transition-all duration-150 hover:border-sky-400/30 hover:text-white">
      {skill}
    </span>
  )
}
