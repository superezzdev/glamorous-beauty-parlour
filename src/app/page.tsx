import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import BrandIntro from '@/components/sections/BrandIntro'
import StatsSection from '@/components/sections/StatsSection'
import ServiceGrid from '@/components/sections/ServiceGrid'
import EditorialMoment from '@/components/sections/EditorialMoment'
import BridalTeaser from '@/components/sections/BridalTeaser'
import MakeupClassesTeaser from '@/components/sections/MakeupClassesTeaser'
import SelectedWork from '@/components/sections/SelectedWork'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import LocationBlock from '@/components/sections/LocationBlock'
import AppointmentCTA from '@/components/sections/AppointmentCTA'

export const metadata: Metadata = {
  title: 'Glamorous Makeup & Beauty Studio | Sabreen Siddiqui | Saraimeer, Azamgarh',
  description:
    'Glamorous Makeup & Beauty Studio — Saraimeer, Azamgarh. Sabreen Siddiqui ke saath bridal makeup, party glam, hair styling, aur skin care. Abhi appointment book karein.',
  alternates: {
    canonical: 'https://glamorous.in/',
  },
  openGraph: {
    title: 'Glamorous Makeup & Beauty Studio | Saraimeer, Azamgarh',
    description:
      'Sabreen Siddiqui ka boutique beauty studio — Saraimeer, Azamgarh. Bridal, party, aur occasion makeup.',
    url: 'https://glamorous.in/',
    images: [
      {
        url: '/images/hero/hero-editorial.jpg',
        width: 1200,
        height: 800,
        alt: 'Glamorous Makeup & Beauty Studio — Saraimeer, Azamgarh',
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Opening Sequence Hero */}
      <HeroSection
        variant="home"
        label="GLAMOROUS / MAKEUP & BEAUTY · SARAIMEER"
        headline={
          <>
            <div className="overflow-hidden">
              <span className="hero-line-1 block">KHOOBSURAT,</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line-2 block">BANAYEIN</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line-3 block text-gold italic font-light">HUM AAPKO.</span>
            </div>
          </>
        }
        subheadline="Sabreen Siddiqui ke saath bridal aur occasion makeup — patience, precision, aur care ke saath. Saraimeer, Azamgarh mein based."
        ctaLabel="APPOINTMENT BOOK KAREIN"
        ctaHref="/contact"
        secondaryCtaLabel="BRIDAL PACKAGES DEKHEIN"
        secondaryCtaHref="/bridal"
        locationTag="SARAIMEER · AZAMGARH"
        imageSrc="/images/hero/hero-editorial.jpg"
        imageAlt="Glamorous Makeup & Beauty Studio — Sabreen Siddiqui, Saraimeer Azamgarh"
      />

      {/* 2. Brand Introduction — Split Editorial Layout */}
      <BrandIntro />

      {/* 3. By The Numbers — Monumental Stats Section */}
      <StatsSection />

      {/* 4. Signature Services — 6 Major Categories Editorial Presentation */}
      <ServiceGrid />

      {/* 5. Editorial Image Moment — Full-Width Visual Reset */}
      <EditorialMoment
        imageSrc="/images/hero/editorial-moment.jpg"
        imageAlt="Editorial beauty moment — Glamorous studio artistry"
        tag="SABREEN KI KALAAKARI"
        headline="Har look mein patience, precision, aur care — yeh hai hamaara vaada."
      />

      {/* 6. Bridal — Commercial Showcase Centerpiece */}
      <BridalTeaser />

      {/* 7. Makeup Classes Teaser */}
      <MakeupClassesTeaser />

      {/* 9. Selected Work — Asymmetrical Editorial Gallery Preview */}
      <SelectedWork />

      {/* 10. Client Appreciation — Editorial Testimonial Carousel */}
      <TestimonialsSection />

      {/* 11. Visit — Studio Details, Map Visual & Get Directions */}
      <LocationBlock />

      {/* 12. Final CTA — Grand Closing Section */}
      <AppointmentCTA
        label="APPOINTMENT & CONSULTATION"
        body="Chahe bridal dates book karni hoon, kisi celebration ke liye taiyaari ho, ya skin care treatment chahiye — hum time lete hain taaki aapka look bilkul perfect ho."
        ctaLabel="APPOINTMENT BOOK KAREIN"
      />
    </>
  )
}
