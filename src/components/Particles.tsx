import { useEffect, useRef } from 'react'

/**
 * Slow-drifting specks behind the whole site. No connecting lines.
 * Specks near the cursor gently brighten and glow blue.
 * Base opacity stays low so text is always readable.
 */
export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const GLOW_R = 170

    let w = 0
    let h = 0
    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number }
    let particles: P[] = []
    let raf = 0
    const mouse = { x: -9999, y: -9999, active: false }

    const init = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(110, Math.round((w * h) / 14000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.7 + 0.9,
        a: Math.random() * 0.4 + 0.22,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        if (!reduced) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < -20) p.x = w + 20
          if (p.x > w + 20) p.x = -20
          if (p.y < -20) p.y = h + 20
          if (p.y > h + 20) p.y = -20
        }

        // proximity glow
        let glow = 0
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const d2 = dx * dx + dy * dy
          if (d2 < GLOW_R * GLOW_R) glow = 1 - Math.sqrt(d2) / GLOW_R
        }

        if (glow > 0.05) {
          ctx.shadowBlur = 10 * glow
          ctx.shadowColor = 'rgba(96,165,250,0.9)'
          ctx.fillStyle = `rgba(120,180,255,${Math.min(1, p.a + glow * 0.55)})`
        } else {
          ctx.shadowBlur = 0
          ctx.fillStyle = `rgba(205,215,240,${p.a})`
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r + glow * 1.8, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.shadowBlur = 0
      raf = requestAnimationFrame(draw)
    }

    init()
    raf = requestAnimationFrame(draw)

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true }
    const onLeave = () => { mouse.active = false }
    const onResize = () => { cancelAnimationFrame(raf); init(); raf = requestAnimationFrame(draw) }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 h-full w-full"
      style={{ zIndex: 0 }}
    />
  )
}
