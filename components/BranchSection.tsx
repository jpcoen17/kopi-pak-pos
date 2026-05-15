'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from './useReveal'
import { branches } from '@/data/menu'

export default function BranchSection() {
  const [active, setActive] = useState(0)
  const { ref, visible } = useReveal(0.1)
  const branch = branches[active]

  return (
    <section id="branch" ref={ref} className="py-32 md:py-40 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 100% 50%, rgba(60,42,33,0.4) 0%, transparent 50%),
            linear-gradient(180deg, transparent 0%, rgba(60,42,33,0.1) 50%, transparent 100%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[#C8A97E] text-xs tracking-[0.5em] uppercase mb-4">✦ Lokasi</p>
          <h2 className="font-display text-5xl md:text-6xl text-[#E5E5CB] mb-4">
            Temukan <span className="text-gold-gradient italic">Kami</span>
          </h2>
          <p className="font-body text-[#8C7B6B] text-lg max-w-xl mx-auto">
            Dua lokasi strategis di jantung Yogyakarta, siap menyambut kamu kapan saja.
          </p>
        </motion.div>

        {/* Branch switcher */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {branches.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setActive(i)}
              className={`group relative px-6 py-3 border font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                active === i
                  ? 'bg-[#C8A97E] text-[#1A120B] border-[#C8A97E]'
                  : 'border-[#3C2A21] text-[#8C7B6B] hover:border-[#C8A97E]/40 hover:text-[#D5CEA3]'
              }`}
            >
              <span className="mr-2 text-[0.6rem]">{b.tag === 'Flagship' ? '★' : '◇'}</span>
              {b.name.replace('Kopi Pakpos ', '')}
            </button>
          ))}
        </motion.div>

        {/* Main content */}
        <motion.div
          key={active}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Info card */}
          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-8">
              <span className="menu-badge text-base">{branch.tag}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#C8A97E]/30 to-transparent" />
            </div>

            <h3 className="font-display text-3xl md:text-4xl text-[#E5E5CB] mb-2">{branch.name}</h3>
            <p className="font-body text-[#8C7B6B] text-lg mb-8 italic">{branch.desc}</p>

            {/* Details */}
            <div className="space-y-5">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[#C8A97E]/20 flex items-center justify-center text-[#C8A97E] shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[#C8A97E] text-xs tracking-widest uppercase mb-1">Alamat</p>
                  <p className="font-body text-[#D5CEA3] text-base">{branch.address}</p>
                  <p className="font-body text-[#8C7B6B] text-sm">{branch.city}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[#C8A97E]/20 flex items-center justify-center text-[#C8A97E] shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[#C8A97E] text-xs tracking-widest uppercase mb-1">Jam Buka</p>
                  <p className="font-display text-[#E5E5CB] text-2xl">{branch.hours}</p>
                  <p className="font-mono text-[#8C7B6B] text-xs tracking-widest uppercase mt-1">Setiap Hari</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[#C8A97E]/20 flex items-center justify-center text-[#C8A97E] shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[#C8A97E] text-xs tracking-widest uppercase mb-1">Reservasi / WhatsApp</p>
                  <p className="font-body text-[#D5CEA3] text-base">{branch.phone}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3 mt-8">
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 bg-[#C8A97E] text-[#1A120B] font-mono text-xs tracking-widest uppercase hover:bg-[#E5E5CB] transition-colors"
              >
                Buka di Maps
              </a>
              <a
                href={`https://wa.me/${branch.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 border border-[#C8A97E]/40 text-[#C8A97E] font-mono text-xs tracking-widest uppercase hover:border-[#C8A97E] hover:bg-[#C8A97E]/5 transition-all"
              >
                WhatsApp
              </a>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-[#C8A97E]/20" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-[#C8A97E]/20" />
          </div>

          {/* Map embed */}
          <div className="relative glass-card overflow-hidden min-h-[400px]">
            <div className="absolute inset-0">
              {/* Placeholder map with visual styling */}
              <div
                className="w-full h-full flex flex-col items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1A120B 0%, #2d1d13 50%, #1A120B 100%)',
                }}
              >
                {/* Decorative map grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(200,169,126,0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(200,169,126,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Pin icon */}
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <svg width="48" height="56" viewBox="0 0 48 56" fill="none">
                      <path d="M24 0C10.75 0 0 10.75 0 24C0 42 24 56 24 56C24 56 48 42 48 24C48 10.75 37.25 0 24 0Z" fill="#C8A97E"/>
                      <circle cx="24" cy="24" r="10" fill="#1A120B"/>
                      <circle cx="24" cy="24" r="5" fill="#C8A97E"/>
                    </svg>
                  </motion.div>
                  <p className="font-display text-[#E5E5CB] text-xl mt-4 mb-1">{branch.name}</p>
                  <p className="font-mono text-[#8C7B6B] text-xs tracking-widest">{branch.address}</p>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-2.5 border border-[#C8A97E]/40 text-[#C8A97E] font-mono text-xs tracking-widest uppercase hover:border-[#C8A97E] transition-all"
                  >
                    Buka Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
