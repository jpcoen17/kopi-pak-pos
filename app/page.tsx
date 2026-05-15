'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import MenuSection from '@/components/MenuSection'
import GallerySection from '@/components/GallerySection'
import BranchSection from '@/components/BranchSection'
import TestimonialSection from '@/components/TestimonialSection'
import InstagramSection from '@/components/InstagramSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Particles from '@/components/Particles'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {!loaded && <LoadingScreen />}
      <Cursor />
      <Particles />
      <main className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <BranchSection />
        <TestimonialSection />
        <InstagramSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
