import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, ChevronDown } from 'lucide-react'
import type { Experience } from '../types'

interface Props {
  experience: Experience
  index: number
}

export default function ExperienceCard({ experience: exp, index }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative sm:pl-10"
    >
      {/* Timeline dot with glow */}
      <div
        className={`absolute left-0 top-7 hidden h-2.5 w-2.5 rounded-full sm:block ${
          exp.current ? 'timeline-dot' : 'timeline-dot-inactive'
        }`}
        style={{ transform: 'translateX(-4.5px)' }}
      />

      <div className="card card-hover overflow-hidden">
        {/* Main content */}
        <div className="p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            {/* Logo */}
            <div
              className="h-14 w-14 shrink-0 overflow-hidden rounded-xl transition-all duration-300 flex items-center justify-center"
              style={{
                border: '1px solid rgba(59,130,246,0.15)',
                background: 'linear-gradient(180deg, #FFFFFF, #F1F5F9)',
              }}
            >
              <img
                src={exp.logoSrc}
                alt={`${exp.company} logo`}
                className="h-full w-full object-contain p-1.5"
              />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <p className="font-semibold text-white text-[15px]">{exp.role}</p>
                  <p className="mt-0.5 text-sm font-medium" style={{ color: '#94A3B8' }}>
                    {exp.company}
                    {exp.team && <span style={{ color: '#475569' }}> · {exp.team}</span>}
                  </p>
                </div>

                <div className="flex shrink-0 flex-col gap-1 text-xs md:items-end" style={{ color: '#64748B' }}>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={11} />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                  {exp.current && (
                    <span
                      className="mt-1 w-fit rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: 'rgba(59,130,246,0.12)',
                        color: '#60A5FA',
                        border: '1px solid rgba(59,130,246,0.35)',
                        boxShadow: '0 0 12px -4px rgba(59,130,246,0.5)',
                      }}
                    >
                      Current
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
                {exp.description}
              </p>

              {/* Animated tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {exp.tech.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.08 + i * 0.03 + 0.2 }}
                    className="tag"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Expandable details toggle */}
              <button
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-150"
                style={{ color: open ? '#60A5FA' : '#64748B' }}
                onMouseEnter={(e) => { if (!open) e.currentTarget.style.color = '#94A3B8' }}
                onMouseLeave={(e) => { if (!open) e.currentTarget.style.color = '#64748B' }}
              >
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown size={13} />
                </motion.span>
                {open ? 'Hide details' : 'View details'}
              </button>
            </div>
          </div>

          {/* Expandable content */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div
                  className="mt-5 pt-5 space-y-2 text-sm leading-relaxed"
                  style={{
                    borderTop: '1px solid rgba(59,130,246,0.1)',
                    color: '#94A3B8',
                  }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#60A5FA' }}>
                    Key Impact
                  </p>
                  <ul className="space-y-2 pl-1">
                    <li className="flex gap-3">
                      <span className="text-blue-500 shrink-0 mt-0.5">▸</span>
                      <span>{exp.description}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 shrink-0 mt-0.5">▸</span>
                      <span>Delivered production-grade code using {exp.tech.slice(0, 3).join(', ')} and shipped features to real users.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 shrink-0 mt-0.5">▸</span>
                      <span>Collaborated cross-functionally within the {exp.team} team at {exp.company}.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  )
}
