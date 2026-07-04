import { motion } from 'framer-motion'
import type { LeadershipItem } from '../types'

interface Props {
  item: LeadershipItem
  index: number
}

export default function LeadershipCard({ item, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
      className="card card-hover group flex flex-col p-5"
    >
      {/* Logo + period */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div
          className="h-14 w-14 shrink-0 overflow-hidden rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          style={{
            border: '1px solid rgba(59,130,246,0.15)',
            background: 'linear-gradient(180deg, #FFFFFF, #F1F5F9)',
          }}
        >
          <img
            src={item.logoSrc}
            alt={item.organization}
            className="h-full w-full object-contain p-1.5"
          />
        </div>
        <span
          className="shrink-0 rounded-md px-2 py-0.5 text-[11px] font-mono font-medium"
          style={{
            background: 'rgba(59,130,246,0.06)',
            color: '#60A5FA',
            border: '1px solid rgba(59,130,246,0.15)',
          }}
        >
          {item.period}
        </span>
      </div>

      {/* Info */}
      <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-200">
        {item.title}
      </p>
      <p className="mt-0.5 text-[13px]" style={{ color: '#94A3B8' }}>
        {item.organization}
      </p>
      <p className="mt-1 text-xs" style={{ color: '#475569' }}>
        {item.type}
      </p>

      {/* Description */}
      <p
        className="mt-3 flex-1 text-[13px] leading-relaxed line-clamp-3"
        style={{ color: '#64748B' }}
      >
        {item.description}
      </p>
    </motion.div>
  )
}
