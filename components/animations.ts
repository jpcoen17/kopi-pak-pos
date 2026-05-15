import type { Easing } from 'framer-motion'

// Typed cubic bezier ease — fixes TS2322 in strict mode
export const ease: Easing = [0.16, 1, 0.3, 1]

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
}

export const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
