import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#030712', color: '#FFFFFF' }}
    >
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
