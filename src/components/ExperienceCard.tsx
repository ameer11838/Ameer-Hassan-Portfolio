import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import type { Experience } from '../types'

interface Props {
  experience: Experience
  index: number
}

export default function ExperienceCard({ experience: exp, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="card card-hover p-6"
    >
      <div className="flex gap-4">
        {/* Company logo */}
        <div
          className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-bold"
          style={{ backgroundColor: exp.logoBg, color: exp.logoColor }}
        >
          {exp.logoText}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-white font-semibold text-[15px]">{exp.company}</h3>
                {exp.current && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wider">
                    NOW
                  </span>
                )}
              </div>
              <p className="text-indigo-400 text-sm font-medium">{exp.role}</p>
              <p className="text-neutral-500 text-xs mt-0.5">{exp.team}</p>
            </div>
            <div className="text-right space-y-1 shrink-0">
              <div className="flex items-center gap-1.5 text-neutral-500 text-xs justify-end">
                <Calendar size={11} />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-500 text-xs justify-end">
                <MapPin size={11} />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed mb-4">{exp.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
