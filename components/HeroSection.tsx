'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" ref={ref} className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Cinematic BG */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        {/* Dark rich coffee gradient as cinematic bg */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(60,42,33,0.9) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(200,169,126,0.15) 0%, transparent 50%),
              linear-gradient(160deg, #0d0804 0%, #1A120B 30%, #2a1a0f 60%, #1A120B 100%)
            `,
          }}
        />
        {/* Pseudo cinematic image overlay using CSS art */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.03) 2px,
                rgba(0,0,0,0.03) 4px
              )
            `,
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,5,2,0.85) 100%)',
          }}
        />
      </motion.div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C8A97E]/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C8A97E]/3 pointer-events-none" />

      {/* Animated light streak */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, #C8A97E, transparent)',
          opacity: 0.4,
        }}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 4, delay: 3.5, repeat: Infinity, repeatDelay: 8 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        style={{ y: textY, opacity }}
      >
        {/* Tag */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C8A97E]" />
          <span className="font-mono text-[#C8A97E] text-xs tracking-[0.5em] uppercase">
            Heritage Coffee · Yogyakarta
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C8A97E]" />
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#E5E5CB] font-light leading-none tracking-tight"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 3.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Kopi
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.div
            className="flex items-center justify-center gap-4 md:gap-6"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 3.55, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-none text-gold-gradient">
              Pakpos
            </span>
          </motion.div>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.p
            className="font-display italic text-2xl sm:text-3xl md:text-4xl text-[#C8A97E]/70 font-light"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 3.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Nol Kilometer
          </motion.p>
        </div>

        {/* Sub */}
        <motion.p
          className="font-body text-[#D5CEA3]/60 text-lg md:text-xl tracking-wider mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.9, duration: 0.8 }}
        >
          Tempat nongkrong terbaik Jogja. Heritage, hangat, dan buka hingga dini hari.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.1, duration: 0.8 }}
        >
          <button
            onClick={() => handleScroll('menu')}
            className="group relative px-8 py-4 bg-[#C8A97E] text-[#1A120B] font-mono text-xs tracking-[0.3em] uppercase overflow-hidden transition-all duration-300 hover:bg-[#E5E5CB]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Jelajahi Menu
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
          <button
            onClick={() => handleScroll('branch')}
            className="px-8 py-4 border border-[#C8A97E]/40 text-[#D5CEA3] font-mono text-xs tracking-[0.3em] uppercase hover:border-[#C8A97E] hover:text-[#C8A97E] transition-all duration-300"
          >
            Temukan Lokasi
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex items-center justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-[#C8A97E]/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.3, duration: 0.8 }}
        >
          {[
            { val: '2', label: 'Cabang' },
            { val: '50+', label: 'Menu Pilihan' },
            { val: '07:00', label: 'Buka Pagi' },
            { val: '01:00', label: 'Tutup Malam' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl text-[#C8A97E] font-medium">{stat.val}</div>
              <div className="font-mono text-[#8C7B6B] text-xs tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.8 }}
      >
        <span className="font-mono text-[#8C7B6B] text-[0.6rem] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[#C8A97E] to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
