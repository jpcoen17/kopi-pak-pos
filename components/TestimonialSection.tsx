'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from './useReveal'
import { testimonials } from '@/data/menu'

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#C8A97E">
          <path d="M6 1L7.54 4.13L11 4.64L8.5 7.08L9.09 10.52L6 8.9L2.91 10.52L3.5 7.08L1 4.64L4.46 4.13L6 1Z"/>
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t, featured = false }: { t: typeof testimonials[0]; featured?: boolean }) {
  return (
    <div
      className={`glass-card p-6 md:p-8 relative flex-shrink-0 ${featured ? 'w-80 md:w-96' : 'w-72 md:w-80'}`}
    >
      {/* Quote mark */}
      <div className="absolute top-4 right-6 font-display text-6xl text-[#C8A97E]/10 leading-none select-none">"</div>

      <StarRating count={t.rating} />
      <p className="font-body text-[#D5CEA3]/80 text-base md:text-lg leading-relaxed my-5 italic">
        "{t.text}"
      </p>

      <div className="flex items-center gap-3 border-t border-[#C8A97E]/10 pt-4">
        {/* Avatar initial */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#3C2A21] to-[#C8A97E]/20 border border-[#C8A97E]/20 flex items-center justify-center">
          <span className="font-display text-[#C8A97E] text-sm font-semibold">{t.name[0]}</span>
        </div>
        <div>
          <p className="font-display text-[#E5E5CB] text-sm font-medium">{t.name}</p>
          <p className="font-mono text-[#8C7B6B] text-xs tracking-widest">{t.role}</p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C8A97E]/20 to-transparent" />
    </div>
  )
}

export default function TestimonialSection() {
  const { ref, visible } = useReveal(0.1)
  const trackRef = useRef<HTMLDivElement>(null)

  // Auto-scroll marquee
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0
    let animId: number
    const step = () => {
      pos += 0.5
      const maxScroll = track.scrollWidth / 2
      if (pos >= maxScroll) pos = 0
      track.style.transform = `translateX(-${pos}px)`
      animId = requestAnimationFrame(step)
    }
    animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [])

  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="testimonial" ref={ref} className="py-32 md:py-40 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 100%, rgba(60,42,33,0.3) 0%, transparent 60%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[#C8A97E] text-xs tracking-[0.5em] uppercase mb-4">✦ Kata Mereka</p>
          <h2 className="font-display text-5xl md:text-6xl text-[#E5E5CB] mb-4">
            Cerita dari <span className="text-gold-gradient italic">Pengunjung</span>
          </h2>
          <p className="font-body text-[#8C7B6B] text-lg max-w-xl mx-auto">
            Ribuan pelanggan setia telah menjadikan Pakpos rumah kedua mereka di Jogja.
          </p>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="16" height="16" viewBox="0 0 12 12" fill="#C8A97E">
                  <path d="M6 1L7.54 4.13L11 4.64L8.5 7.08L9.09 10.52L6 8.9L2.91 10.52L3.5 7.08L1 4.64L4.46 4.13L6 1Z"/>
                </svg>
              ))}
            </div>
            <span className="font-display text-[#C8A97E] text-2xl">4.9</span>
            <span className="font-mono text-[#8C7B6B] text-xs tracking-widest">/ 5.0 · Google Reviews</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A120B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A120B] to-transparent z-10 pointer-events-none" />

        <div ref={trackRef} className="flex gap-4 px-4 pb-4" style={{ width: 'max-content' }}>
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} featured={i % 3 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
