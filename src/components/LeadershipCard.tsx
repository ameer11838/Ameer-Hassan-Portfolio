import { useState } from 'react'
import { motion } from 'framer-motion'
import type { LeadershipItem } from '../types'

interface Props {
  item: LeadershipItem
  index: number
}

export default function LeadershipCard({ item, index }: Props) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      className="card card-hover flex flex-col overflow-hidden"
    >
      {/* Logo area */}
      <div className="mx-5 mt-5 mb-4 rounded-xl bg-white flex items-center justify-center overflow-hidden"
        style={{ height: '88px' }}>
        {!imgError ? (
          <img
            src={item.logoUrl}
            alt={item.organization}
            className="max-h-[52px] max-w-[70%] object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold"
            style={{ backgroundColor: item.logoBg, color: item.logoColor }}
          >
            {item.logoText}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        <p className="text-white font-semibold text-sm mb-0.5">{item.title}</p>
        <p className="text-neutral-400 text-xs leading-snug">{item.organization}</p>
        <p className="text-neutral-600 text-xs mt-1">{item.type}</p>
      </div>
    </motion.div>
  )
}
