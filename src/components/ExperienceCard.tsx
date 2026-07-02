import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import type { Experience } from '../types'

interface Props {
  experience: Experience
  index: number
}

export default function ExperienceCard({ experience: exp, index }: Props) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="card card-hover flex flex-col overflow-hidden"
    >
      {/* ── Top bar: date + current badge ── */}
      <div className="flex items-center justify-between px-6 pt-5 pb-0">
        <span className="text-neutral-500 text-xs">{exp.period}</span>
        {exp.current && (
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wider">
            NOW
          </span>
        )}
      </div>

      {/* ── Company name ── */}
      <div className="px-6 pt-3 pb-4 text-center">
        <h3 className="text-white font-bold text-sm tracking-[0.12em] uppercase">
          {exp.company}
        </h3>
        <p className="text-neutral-500 text-xs mt-0.5">{exp.team}</p>
      </div>

      {/* ── Logo area — white background frame ── */}
      <div className="mx-6 mb-5 rounded-xl bg-white flex items-center justify-center overflow-hidden"
        style={{ height: '128px' }}>
        {!imgError ? (
          <img
            src={exp.logoUrl}
            alt={`${exp.company} logo`}
            className="max-h-[72px] max-w-[75%] object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold"
            style={{ backgroundColor: exp.logoBg, color: exp.logoColor }}
          >
            {exp.logoText}
          </div>
        )}
      </div>

      {/* ── Role + location ── */}
      <div className="px-6 mb-4 text-center">
        <p className="text-white font-semibold text-[13px] mb-1">{exp.role}</p>
        <div className="flex items-center justify-center gap-1 text-neutral-500 text-xs">
          <MapPin size={10} />
          <span>{exp.location}</span>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="mx-6 h-px bg-white/[0.05] mb-4" />

      {/* ── Description ── */}
      <p className="px-6 text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
        {exp.description}
      </p>

      {/* ── Tech badges ── */}
      <div className="px-6 pb-6 flex flex-wrap gap-1.5">
        {exp.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </motion.article>
  )
}
