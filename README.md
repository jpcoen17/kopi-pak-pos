# Kopi Pakpos Nol Km — Website

Website premium untuk brand coffee shop **Kopi Pakpos Nol Km** Yogyakarta.

## Tech Stack
- **Next.js 15** — App Router
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animasi premium
- **TypeScript** — Type safety

## Fitur
- ✅ Loading screen animasi kopi SVG
- ✅ Custom cursor glow (desktop)
- ✅ Floating coffee bean particles (canvas)
- ✅ Sticky navbar blur saat scroll + mobile menu animasi
- ✅ Hero section parallax + animated headline
- ✅ About section dengan heritage story
- ✅ Menu section lengkap (6 kategori, 60+ item dari screenshot)
- ✅ Gallery masonry grid
- ✅ Branch section (2 lokasi + maps placeholder)
- ✅ Testimonial marquee auto-scroll
- ✅ Instagram feed preview
- ✅ Footer lengkap + social media
- ✅ Floating WhatsApp button
- ✅ Scroll reveal animations
- ✅ SEO optimized meta tags
- ✅ Mobile-first responsive

## Cara Run Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Deploy ke Vercel

```bash
npm install -g vercel
vercel
```

Atau push ke GitHub lalu connect ke [vercel.com](https://vercel.com).

## Folder Structure

```
/app
  layout.tsx       — Root layout + SEO metadata
  page.tsx         — Halaman utama (komponen composition)
/components
  LoadingScreen    — Animasi loading kopi
  Cursor           — Custom cursor glow
  Particles        — Floating coffee beans (canvas)
  Navbar           — Sticky nav + mobile menu
  HeroSection      — Cinematic hero + parallax
  AboutSection     — Heritage story
  MenuSection      — Menu tabs + cards (dari screenshot)
  GallerySection   — Masonry gallery art blocks
  BranchSection    — 2 lokasi + maps
  TestimonialSection — Marquee reviews
  InstagramSection — Feed preview grid
  Footer           — Complete footer
  WhatsAppButton   — Floating WA button
  useReveal        — Hook scroll reveal
/data
  menu.ts          — Semua data menu, cabang, testimonial
/styles
  globals.css      — CSS variables, custom animations, grain overlay
```

## Kustomisasi

- **Menu & harga** → edit `/data/menu.ts`
- **Nomor WhatsApp** → cari `wa.me/6281200000001` di komponen
- **Instagram handle** → cari `kopipakpos` di komponen
- **Warna** → edit CSS variables di `globals.css` dan `tailwind.config.js`
- **Konten** → edit langsung di masing-masing komponen

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Espresso | `#1A120B` | Background utama |
| Roast | `#3C2A21` | Surface/card |
| Cream | `#D5CEA3` | Body text |
| Parchment | `#E5E5CB` | Heading text |
| Gold | `#C8A97E` | Accent / CTA |
| Smoke | `#8C7B6B` | Muted text |
