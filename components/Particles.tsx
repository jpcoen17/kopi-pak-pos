'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
  rotation: number
  rotSpeed: number
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      size: Math.random() * 3 + 1,
      speedY: Math.random() * 0.6 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.1,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
    })

    // Init particles
    for (let i = 0; i < 30; i++) {
      const p = createParticle()
      p.y = Math.random() * canvas.height
      particles.push(p)
    }

    const drawCoffeeBean = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, opacity: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity
      ctx.fillStyle = '#C8A97E'
      ctx.beginPath()
      ctx.ellipse(0, 0, size * 1.5, size, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = '#1A120B'
      ctx.lineWidth = 0.5
      ctx.globalAlpha = opacity * 0.5
      ctx.beginPath()
      ctx.moveTo(-size * 1.2, 0)
      ctx.bezierCurveTo(-size * 0.5, -size * 0.3, size * 0.5, -size * 0.3, size * 1.2, 0)
      ctx.stroke()
      ctx.restore()
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.y -= p.speedY
        p.x += p.speedX
        p.rotation += p.rotSpeed

        if (p.y < -20) particles[i] = createParticle()

        drawCoffeeBean(ctx, p.x, p.y, p.size, p.rotation, p.opacity)
      })

      if (Math.random() < 0.02 && particles.length < 40) {
        particles.push(createParticle())
      }

      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.6 }}
    />
  )
}
