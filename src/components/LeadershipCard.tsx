import { motion } from 'framer-motion'
import type { LeadershipItem } from '../types'

interface Props {
  item: LeadershipItem
  index: number
}

export default function LeadershipCard({ item, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      className="card card-hover p-5 flex gap-4 items-start group"
    >
      <div
        className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-bold"
        style={{ backgroundColor: item.logoBg, color: item.logoColor }}
      >
        {item.logoText}
      </div>
      <div>
        <p className="text-white font-semibold text-sm mb-0.5">{item.title}</p>
        <p className="text-neutral-300 text-sm">{item.organization}</p>
        <p className="text-neutral-500 text-xs mt-1">{item.type}</p>
      </div>
    </motion.div>
  )
}
