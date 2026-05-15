'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Lokasi', href: '#branch' },
  { label: 'Kontak', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-scrolled py-2' : 'py-4'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.8, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav('#hero')} className="group">
            <div className={`transition-all duration-300 rounded px-2 py-1 ${scrolled ? 'bg-transparent' : 'bg-[#1A120B]/50'}`}>
              <Image
                src="/images/logo.png"
                alt="Kopi Pakpos"
                width={110}
                height={60}
                className="h-10 w-auto object-contain invert brightness-90 group-hover:brightness-110 transition-all duration-300"
                priority
              />
            </div>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="hover-underline text-[#D5CEA3] hover:text-[#C8A97E] font-body text-sm tracking-widest uppercase transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <button
            onClick={() => handleNav('#menu')}
            className="hidden md:flex items-center gap-2 px-5 py-2 border border-[#C8A97E] text-[#C8A97E] font-mono text-xs tracking-widest uppercase hover:bg-[#C8A97E] hover:text-[#1A120B] transition-all duration-300 group"
          >
            <span>Lihat Menu</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-[#C8A97E] origin-center transition-all"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-[#C8A97E]"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-[#C8A97E] origin-center transition-all"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: 'rgba(26,18,11,0.98)' }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-8 pt-20">
              <p className="text-[#C8A97E] font-mono text-xs tracking-[0.5em] uppercase mb-4">✦ Menu ✦</p>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="font-display text-3xl text-[#E5E5CB] hover:text-[#C8A97E] transition-colors tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNav('#menu')}
                className="mt-6 px-8 py-3 border border-[#C8A97E] text-[#C8A97E] font-mono text-xs tracking-widest uppercase hover:bg-[#C8A97E] hover:text-[#1A120B] transition-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                Pesan Sekarang
              </motion.button>
            </div>
            <p className="text-center text-[#3C2A21] text-xs font-mono tracking-widest pb-8">
              © 2024 Kopi Pakpos Nol Km
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
