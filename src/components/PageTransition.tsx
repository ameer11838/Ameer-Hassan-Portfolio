import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTransition({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.55, ease: [0.19, 1, 0.22, 1] },
      }}
      exit={{
        opacity: 0,
        y: -14,
        filter: 'blur(8px)',
        transition: { duration: 0.3, ease: [0.55, 0, 0.55, 0.2] },
      }}
    >
      {children}
    </motion.div>
  )
}
