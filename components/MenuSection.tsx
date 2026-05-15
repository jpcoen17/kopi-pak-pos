'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from './useReveal'
import { menuCategories } from '@/data/menu'

const formatPrice = (p: number) => `Rp ${(p / 1000).toFixed(0)}K`

function MenuCard({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] as const }}
      className="group relative glass-card p-5 hover:border-[#C8A97E]/40 transition-all duration-400 overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/0 to-[#C8A97E]/0 group-hover:from-[#C8A97E]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-display text-[#E5E5CB] text-lg group-hover:text-[#C8A97E] transition-colors duration-300 leading-tight">
              {item.name}
            </h3>
            {item.badge && (
              <span className="menu-badge shrink-0">{item.badge}</span>
            )}
          </div>
          <p className="font-mono text-[#8C7B6B] text-[0.6rem] tracking-widest uppercase">{item.tag}</p>
        </div>
        <div className="text-right shrink-0">
          <span className="font-display text-[#C8A97E] text-xl font-medium">
            {formatPrice(item.price)}
          </span>
          <p className="font-mono text-[#3C2A21] text-[0.55rem] tracking-wider">+PPN 10%</p>
        </div>
      </div>

      {item.desc && (
        <p className="font-body text-[#8C7B6B] text-sm leading-relaxed">{item.desc}</p>
      )}

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#C8A97E]/50 to-transparent transition-all duration-500" />
    </motion.div>
  )
}

export default function MenuSection() {
  const [activeId, setActiveId] = useState('coffee')
  const { ref, visible } = useReveal(0.05)

  const activeCategory = menuCategories.find(c => c.id === activeId)!

  return (
    <section id="menu" ref={ref} className="relative py-32 md:py-40">
      {/* BG accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(60,42,33,0.3) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="font-mono text-[#C8A97E] text-xs tracking-[0.5em] uppercase mb-4">✦ Sajian Kami</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#E5E5CB] mb-4">
            Menu <span className="text-gold-gradient italic">Pilihan</span>
          </h2>
          <p className="font-body text-[#8C7B6B] text-lg max-w-xl mx-auto">
            Dari kopi klasik hingga signature fusion — setiap sajian dibuat dengan cinta dan bahan pilihan.
          </p>
          <p className="font-mono text-[#3C2A21] text-xs mt-2 tracking-wider">*Harga belum termasuk PPN 10%</p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 border ${
                activeId === cat.id
                  ? 'bg-[#C8A97E] text-[#1A120B] border-[#C8A97E]'
                  : 'border-[#3C2A21] text-[#8C7B6B] hover:border-[#C8A97E]/40 hover:text-[#D5CEA3]'
              }`}
            >
              <span>{cat.icon}</span>
              <span className="hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Category label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId + '-header'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-3xl">{activeCategory.icon}</span>
            <div>
              <h3 className="font-display text-2xl text-[#E5E5CB]">{activeCategory.label}</h3>
              <p className="font-mono text-[#8C7B6B] text-xs tracking-widest">{activeCategory.items.length} item tersedia</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#C8A97E]/30 to-transparent ml-4" />
          </motion.div>
        </AnimatePresence>

        {/* Menu grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {activeCategory.items.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Extra oat milk note */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <span className="glass-card inline-block px-5 py-2 font-mono text-[#8C7B6B] text-xs tracking-widest">
            ☕ Extra Oat Milk +15K &nbsp;|&nbsp; Tersedia untuk semua minuman berbasis kopi
          </span>
        </motion.div>
      </div>
    </section>
  )
}
