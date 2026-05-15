'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useReveal } from './useReveal'

// 5 real photos + 4 repeated to fill 3x3 grid
const igPosts = [
  { id: 1, src: '/images/gallery-1.png', label: 'Interior Vintage', likes: '1.2K' },
  { id: 2, src: '/images/gallery-2.png', label: 'Pojok Buku', likes: '987' },
  { id: 3, src: '/images/gallery-3.png', label: 'Signature Drink', likes: '2.1K' },
  { id: 4, src: '/images/gallery-4.png', label: 'Sepeda Antik', likes: '1.5K' },
  { id: 5, src: '/images/gallery-5.png', label: 'Eksterior Malam', likes: '3.2K' },
  { id: 6, src: '/images/gallery-1.png', label: 'Cafe Ambience', likes: '843' },
  { id: 7, src: '/images/gallery-3.png', label: 'Kopi Pakpos Cup', likes: '1.8K' },
  { id: 8, src: '/images/gallery-4.png', label: 'Heritage Corner', likes: '654' },
  { id: 9, src: '/images/gallery-2.png', label: 'Reading Nook', likes: '921' },
]

export default function InstagramSection() {
  const { ref, visible } = useReveal(0.1)

  return (
    <section id="instagram" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="font-mono text-[#C8A97E] text-xs tracking-[0.5em] uppercase mb-2">✦ Instagram</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#E5E5CB]">
              @<span className="text-gold-gradient">kopipakpos</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/kopipakpos"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-7 py-3.5 border border-[#C8A97E]/30 text-[#C8A97E] font-mono text-xs tracking-widest uppercase hover:border-[#C8A97E] hover:bg-[#C8A97E]/5 transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Follow Kami
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        {/* 3x3 IG Grid */}
        <div className="grid grid-cols-3 gap-1.5 md:gap-2">
          {igPosts.map((post, i) => (
            <motion.a
              key={post.id + '-' + i}
              href="https://instagram.com/kopipakpos"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={post.src}
                alt={post.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1A120B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#C8A97E">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <p className="text-[#C8A97E] font-mono text-xs tracking-widest">{post.likes}</p>
                <p className="text-[#D5CEA3] font-body text-xs text-center leading-tight opacity-80">{post.label}</p>
              </div>
              {/* Border accent */}
              <div className="absolute inset-0 border border-[#C8A97E]/0 group-hover:border-[#C8A97E]/30 transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <motion.p
          className="text-center font-mono text-[#3C2A21] text-xs tracking-widest mt-6"
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Tag kami di Instagram @kopipakpos untuk ditampilkan di sini ✦
        </motion.p>
      </div>
    </section>
  )
}
