'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 8 + 2
      })
    }, 60)
    const phaseTimer1 = setTimeout(() => setPhase(1), 800)
    const phaseTimer2 = setTimeout(() => setPhase(2), 1800)
    return () => { clearInterval(interval); clearTimeout(phaseTimer1); clearTimeout(phaseTimer2) }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#1A120B' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      {/* Coffee cup SVG animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Steam */}
          <motion.path
            d="M28 18 C28 12, 34 12, 34 6 C34 0, 40 0, 40 6"
            stroke="#C8A97E"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M38 20 C38 14, 44 14, 44 8 C44 2, 50 2, 50 8"
            stroke="#C8A97E"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
          {/* Cup */}
          <motion.path
            d="M15 28 L20 68 Q20 72 24 72 L56 72 Q60 72 60 68 L65 28 Z"
            fill="none"
            stroke="#C8A97E"
            strokeWidth="2"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
          {/* Handle */}
          <motion.path
            d="M60 36 Q76 36 76 50 Q76 64 60 64"
            fill="none"
            stroke="#C8A97E"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          />
          {/* Saucer */}
          <motion.path
            d="M8 76 Q40 80 72 76"
            stroke="#C8A97E"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          />
          {/* Coffee fill */}
          <motion.ellipse
            cx="40"
            cy="32"
            rx="18"
            ry="4"
            fill="#3C2A21"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Brand name */}
      <motion.div
        className="text-center mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#C8A97E] tracking-[0.4em] text-xs uppercase font-mono mb-2">Est. Yogyakarta</p>
        <h1 className="font-display text-4xl md:text-5xl text-[#E5E5CB] font-light tracking-wide">
          Kopi Pakpos
        </h1>
        <p className="text-[#C8A97E] tracking-[0.3em] text-sm uppercase mt-1">Nol Km</p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="mt-12 w-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 2 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="h-px bg-[#3C2A21] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#3C2A21] via-[#C8A97E] to-[#E5E5CB] rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <p className="text-[#8C7B6B] text-xs tracking-widest text-center mt-3 font-mono">
          {Math.min(Math.round(progress), 100)}%
        </p>
      </motion.div>
    </motion.div>
  )
}
