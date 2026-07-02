import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ExperienceCard from '../components/ExperienceCard'
import { experiences } from '../data/experiences'

export default function Experience() {
  return (
    <PageTransition>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-10"
        >
          <h1 className="page-title">Experience</h1>
          <p className="page-subtitle">
            {experiences.length} roles &middot; {experiences.filter((e) => e.current).length} current
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
