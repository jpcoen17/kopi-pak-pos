'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useReveal } from './useReveal'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function AboutSection() {
  const { ref, visible } = useReveal(0.1)

  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden">
      {/* BG texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 80% 0%, rgba(60,42,33,0.6) 0%, transparent 60%),
            radial-gradient(ellipse at 0% 100%, rgba(200,169,126,0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C8A97E]/20 to-transparent hidden lg:block" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left — Visual art block */}
          <motion.div variants={fadeUp} className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main photo frame */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/gallery-1.png"
                  alt="Interior Kopi Pakpos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Cinematic dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B]/60 via-transparent to-[#1A120B]/20" />

                {/* Corner ornaments */}
                {['tl','tr','bl','br'].map(pos => (
                  <div
                    key={pos}
                    className={`absolute w-8 h-8 z-10 ${pos.includes('t') ? 'top-4' : 'bottom-4'} ${pos.includes('l') ? 'left-4' : 'right-4'}`}
                    style={{
                      borderTop: pos.includes('t') ? '1.5px solid rgba(200,169,126,0.5)' : 'none',
                      borderBottom: pos.includes('b') ? '1.5px solid rgba(200,169,126,0.5)' : 'none',
                      borderLeft: pos.includes('l') ? '1.5px solid rgba(200,169,126,0.5)' : 'none',
                      borderRight: pos.includes('r') ? '1.5px solid rgba(200,169,126,0.5)' : 'none',
                    }}
                  />
                ))}

                {/* Caption bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <p className="font-display italic text-[#C8A97E] text-lg">Warung Kopi Heritage</p>
                  <p className="font-mono text-[#8C7B6B] text-xs tracking-widest mt-1">Yogyakarta, Indonesia</p>
                </div>
              </div>

              {/* Second small photo - floating */}
              <div className="absolute -bottom-8 -right-6 w-36 h-44 overflow-hidden border-2 border-[#1A120B] shadow-2xl hidden md:block">
                <Image
                  src="/images/gallery-4.png"
                  alt="Sepeda Antik Pakpos"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
                <div className="absolute inset-0 bg-[#1A120B]/20" />
              </div>

              {/* Floating year badge */}
              <div className="absolute -right-6 top-12 glass-card px-4 py-3 border border-[#C8A97E]/20">
                <p className="font-mono text-[#C8A97E] text-3xl font-light">24/7</p>
                <p className="font-mono text-[#8C7B6B] text-[0.6rem] tracking-widest uppercase">Selalu Ada</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#C8A97E]/15 rounded-full" />
            </div>
          </motion.div>

          {/* Right — Story */}
          <div className="order-1 lg:order-2">
            <motion.div variants={fadeUp} className="mb-4">
              <span className="font-mono text-[#C8A97E] text-xs tracking-[0.5em] uppercase">✦ Tentang Kami</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-[#E5E5CB] leading-tight mb-6"
            >
              Di Jantung<br />
              <span className="text-gold-gradient italic">Yogyakarta</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="divider-ornament mb-8">
              <span className="text-[#C8A97E]/30 text-xs">⁕</span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-body text-[#D5CEA3]/70 text-lg leading-relaxed mb-6"
            >
              Kopi Pakpos Nol Km lahir dari kecintaan terhadap kopi dan budaya Yogyakarta yang kaya.
              Berlokasi di kawasan bersejarah Panembahan Senopati — tak jauh dari Kraton — kami hadir
              sebagai ruang hangat untuk bertukar cerita, berkarya, dan menikmati kopi yang jujur.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-body text-[#D5CEA3]/60 text-lg leading-relaxed mb-10"
            >
              Dengan konsep <em className="text-[#C8A97E]">heritage meets modern</em>, setiap sudut Pakpos
              menceritakan sejarah Pos Indonesia yang kaya. Kamera vintage, meja kayu tua, dan aroma kopi
              berpadu menciptakan suasana yang tak terlupakan — terutama di malam hari Yogyakarta yang
              penuh dengan semangat kreativitas.
            </motion.p>

            {/* Feature pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              {['Heritage Vintage', 'Buka Hingga 01:00', 'WiFi Kencang', 'Spot Foto Aesthetic', 'Menu Lokal & Modern'].map(tag => (
                <span key={tag} className="menu-badge">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView()}
                className="group flex items-center gap-3 text-[#C8A97E] font-mono text-xs tracking-widest uppercase hover:gap-5 transition-all duration-300"
              >
                <span className="h-px w-8 bg-[#C8A97E] group-hover:w-12 transition-all duration-300" />
                Lihat Galeri
              </button>
              <button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-3 text-[#8C7B6B] font-mono text-xs tracking-widest uppercase hover:text-[#C8A97E] transition-colors"
              >
                Galeri →
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Manifesto strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
          className="mt-24 border-t border-b border-[#C8A97E]/10 py-8"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {[
              { label: 'Konsep', val: 'Heritage × Modern' },
              { label: 'Kopi', val: 'Arabika Pilihan' },
              { label: 'Suasana', val: 'Vintage Cinematic' },
              { label: 'Komunitas', val: 'Open for All' },
            ].map(item => (
              <div key={item.label}>
                <p className="font-mono text-[#C8A97E] text-xs tracking-widest uppercase mb-1">{item.label}</p>
                <p className="font-display text-[#E5E5CB] text-xl italic">{item.val}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
