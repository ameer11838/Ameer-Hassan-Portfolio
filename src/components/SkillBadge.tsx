interface Props {
  skill: string
}

export default function SkillBadge({ skill }: Props) {
  return (
    <span className="px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-white/[0.07] text-neutral-300 text-sm hover:border-white/[0.16] hover:text-white transition-all duration-150 cursor-default">
      {skill}
    </span>
  )
}
