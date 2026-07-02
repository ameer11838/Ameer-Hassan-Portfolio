import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
