import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import GalleryGrid from '@/components/ui/GalleryGrid'
import AppointmentCTA from '@/components/sections/AppointmentCTA'
import CompactWhatsAppStrip from '@/components/sections/CompactWhatsAppStrip'
import { galleryImages } from '@/data/gallery'

export const metadata: Metadata = {
  title: 'Portfolio & Client Gallery — Glamorous Studio Sarai Meer',
  description:
    'Hamare bridal makeup, party glam, hair styling aur beauty transformations ka portfolio dekhein. Sarai Meer mein Sabreen Siddiqui ke bespoke looks.',
  alternates: {
    canonical: 'https://glamorous.in/gallery',
  },
  openGraph: {
    title: 'Client Gallery & Portfolio | Glamorous Studio Sarai Meer',
    description:
      'Real client photos: bridal transformations, party makeup aur hair styling Sarai Meer mein.',
    url: 'https://glamorous.in/gallery',
    images: [
      {
        url: '/images/gallery/bridal/bridal-01.jpg',
        width: 1200,
        height: 800,
        alt: 'Selected Looks — Glamorous Makeup & Bridal Studio Sarai Meer',
      },
    ],
  },
}

export default function GalleryPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://glamorous.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Gallery',
        item: 'https://glamorous.in/gallery',
      },
    ],
  }

  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Glamorous Studio Artistry Portfolio',
    description: 'Sarai Meer mein Glamorous Studio ke curated bridal, party makeup, hairstyle, skin glow aur detail artistry ka portfolio.',
    image: galleryImages.map((img) => ({
      '@type': 'ImageObject',
      name: img.title || img.alt,
      description: img.description || img.alt,
      contentUrl: `https://glamorous.in${img.src}`,
      thumbnail: `https://glamorous.in${img.src}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />

      {/* 1. HERO — Cinematic Editorial Exhibition Hero */}
      <HeroSection
        variant="gallery"
        label="STUDIO PORTFOLIO / CLIENT GALLERY"
        headline={
          <>
            <span className="block">HAMARA</span>
            <span className="block">KAAM AUR</span>
            <span className="block text-gold italic font-light">KHAAS LOOKS.</span>
          </>
        }
        subheadline="Sarai Meer mein hamare bridal transformations, party makeup, hair styling aur radiant skin care looks ka curated visual collection."
        locationTag="SARAI MEER · STUDIO GALLERY"
        imageSrc="/images/bridal/bridal-hero.png"
        imageAlt="Glamorous Studio Sarai Meer mein bridal aur makeup artistry gallery"
      />

      {/* 2. GALLERY GRID — Interactive Filter Bar & Asymmetric Masonry */}
      <div id="gallery-portfolio">
        <GalleryGrid images={galleryImages} showFilters initialCategory="all" />
      </div>

      {/* 3. APPOINTMENT & CONSULTATION CTA */}
      <AppointmentCTA
        label="CUSTOM LOOKS &amp; CONSULTATIONS"
        headline={
          <>
            PASAND AAYA<br />
            KOI KHAAS LOOK?<br />
            CHALEIN PLAN KAREIN.
          </>
        }
        body="Agar aapko hamari gallery mein se koi bridal ya party look pasand aaya hai, toh screenshot humse share karein ya Sabreen Siddiqui ke saath direct consultation book karke apna bespoke look plan karein."
        ctaLabel="APPOINTMENT BOOK KAREIN"
        ctaHref="/contact?service=bridal"
      />

      {/* 4. Compact WhatsApp Action Strip */}
      <CompactWhatsAppStrip />
    </>
  )
}
