import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Leadership from './pages/Leadership'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  )
}
