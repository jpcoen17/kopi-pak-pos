'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useReveal } from './useReveal'

const galleryItems = [
  {
    id: 1,
    src: '/images/gallery-1.png',
    label: 'Interior Vintage',
    tag: 'ambience',
    desc: 'Suasana dalam cafe penuh ornamen heritage Pos Indonesia',
    col: 'col-span-2', row: 'row-span-2',
  },
  {
    id: 2,
    src: '/images/gallery-5.png',
    label: 'Eksterior Malam',
    tag: 'outdoor',
    desc: 'Kopi Pakpos di malam hari — hangat dan mengundang',
    col: 'col-span-1', row: 'row-span-1',
  },
  {
    id: 3,
    src: '/images/gallery-3.png',
    label: 'Signature Drink',
    tag: 'kopi',
    desc: 'Kopi Pakpos Anno 1912 — ikon di setiap tegukan',
    col: 'col-span-1', row: 'row-span-1',
  },
  {
    id: 4,
    src: '/images/gallery-4.png',
    label: 'Sepeda Antik',
    tag: 'heritage',
    desc: 'Sepeda pos lawas — simbol sejarah Pakpos',
    col: 'col-span-1', row: 'row-span-1',
  },
  {
    id: 5,
    src: '/images/gallery-2.png',
    label: 'Pojok Buku',
    tag: 'interior',
    desc: 'Rak buku vintage dengan kamera dan kursi kayu',
    col: 'col-span-1', row: 'row-span-1',
  },
]

export default function GallerySection() {
  const { ref, visible } = useReveal(0.05)

  return (
    <section id="gallery" ref={ref} className="py-32 md:py-40 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(60,42,33,0.2) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[#C8A97E] text-xs tracking-[0.5em] uppercase mb-4">✦ Galeri</p>
          <h2 className="font-display text-5xl md:text-6xl text-[#E5E5CB] mb-4">
            Atmosfer <span className="text-gold-gradient italic">Pakpos</span>
          </h2>
          <p className="font-body text-[#8C7B6B] text-lg max-w-xl mx-auto">
            Setiap sudut Kopi Pakpos bercerita — heritage, kehangatan, dan semangat komunitas Jogja.
          </p>
        </motion.div>

        {/* Grid 3 col x 2 row */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[280px] gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`group relative overflow-hidden ${item.col} ${item.row}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B]/80 via-[#1A120B]/10 to-transparent" />
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="menu-badge">{item.tag}</span>
              </div>
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                <h3 className="font-display text-[#E5E5CB] text-lg font-medium mb-1">{item.label}</h3>
                <p className="font-body text-[#D5CEA3]/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>
              {/* Gold border hover */}
              <div className="absolute inset-0 border border-[#C8A97E]/0 group-hover:border-[#C8A97E]/30 transition-all duration-500 z-10" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://instagram.com/kopipakpos"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#C8A97E]/30 text-[#C8A97E] font-mono text-xs tracking-widest uppercase hover:border-[#C8A97E] hover:bg-[#C8A97E]/5 transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span>Lihat di Instagram</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
