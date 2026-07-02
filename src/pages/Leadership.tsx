import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import LeadershipCard from '../components/LeadershipCard'
import { leadership } from '../data/leadership'

export default function Leadership() {
  return (
    <PageTransition>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="section-label">Programs & Involvement</p>
          <h1 className="page-title">Leadership</h1>
          <p className="page-subtitle">
            Selective programs and organizations focused on professional development,
            technical mentorship, and community.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {leadership.map((item, i) => (
            <LeadershipCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
