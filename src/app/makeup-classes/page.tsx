import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import MakeupClassesSection from '@/components/sections/MakeupClassesSection'
import AppointmentCTA from '@/components/sections/AppointmentCTA'
import CompactWhatsAppStrip from '@/components/sections/CompactWhatsAppStrip'
import { salon } from '@/data/salon'
import { makeupClasses } from '@/data/makeupClasses'

export const metadata: Metadata = {
  title: 'Makeup Classes & Academy in Sarai Meer — Sabreen Siddiqui | Glamorous Studio',
  description:
    'Sabreen Siddiqui ke saath professional makeup masterclasses Sarai Meer, Azamgarh mein. Basic self-grooming, pro bridal masterclass aur professional diploma courses available. Seats limited hain.',
  alternates: {
    canonical: 'https://glamorous.in/makeup-classes',
  },
  openGraph: {
    title: 'Professional Makeup Classes & Academy | Sabreen Siddiqui, Sarai Meer',
    description:
      'Basic se lekar professional bridal artist tak — 1-on-1 personal mentorship, live model practicals aur certificate ke saath classes.',
    url: 'https://glamorous.in/makeup-classes',
    images: [
      {
        url: '/images/services/makeup.jpg',
        width: 1200,
        height: 800,
        alt: 'Professional Makeup Classes by Sabreen Siddiqui in Sarai Meer',
      },
    ],
  },
}

export default function MakeupClassesPage() {
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
        name: 'Makeup Classes',
        item: 'https://glamorous.in/makeup-classes',
      },
    ],
  }

  const courseListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Glamorous Academy Makeup Courses',
    description: 'Professional makeup training courses offered by Sabreen Siddiqui at Glamorous Studio in Sarai Meer.',
    itemListElement: makeupClasses.map((cls, idx) => ({
      '@type': 'Course',
      position: idx + 1,
      name: cls.name,
      description: cls.description,
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Glamorous Makeup & Beauty Studio',
        url: 'https://glamorous.in/makeup-classes',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1st Floor, Mumtaz Bangle Store, Sabji Mandi Rd',
          addressLocality: 'Sarai Meer',
          addressRegion: 'Uttar Pradesh',
          postalCode: '276305',
          addressCountry: 'IN',
        },
        telephone: '+91 70078 75415',
      },
      offers: {
        '@type': 'Offer',
        price: cls.price.replace(/[^\d]/g, ''),
        priceCurrency: 'INR',
        category: cls.levelLabel,
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />

      {/* 1. CINEMATIC HERO — Editorial Academy Hero */}
      <HeroSection
        variant="bridal"
        label="GLAMOROUS ACADEMY / SARAIMEER"
        headline={
          <>
            <span className="block">APNA PASSION,</span>
            <span className="block">APNA CAREER.</span>
            <span className="block text-gold italic font-light">SABREEN KE SAATH.</span>
          </>
        }
        subheadline="Saraimeer mein step-by-step professional makeup aur bridal training — 1-on-1 personal mentorship, live models par practicals, aur verified certificate ke saath."
        ctaLabel="WHATSAPP PAR SEAT BOOK KAREIN"
        ctaHref={`https://wa.me/${salon.phoneRaw}?text=${encodeURIComponent('Hi Sabreen! Main Glamorous Academy ke makeup courses ke baare mein jaanna chahti hoon aur seat book karna chahti hoon.')}`}
        secondaryCtaLabel="COURSES & SYLLABUS DEKHEIN"
        secondaryCtaHref="#courses"
        locationTag="SARAI MEER · MAKEUP ACADEMY"
        imageSrc="/images/services/party-makeup.png"
        imageAlt="Professional makeup classes by Sabreen Siddiqui in Sarai Meer"
      />

      {/* 2. ACADEMY SUITE (Pillars, 3-Course Cards, 4-Step Roadmap, Perks, FAQs) */}
      <MakeupClassesSection />

      {/* 3. CLOSING CTA — Admissions & Enrolment Action */}
      <AppointmentCTA
        label="ACADEMY ADMISSIONS OPEN"
        headline={
          <>
            MAKEUP MEIN<br />
            APNA NAYA SAFAR<br />
            <span style={{ color: 'var(--color-gold)', fontStyle: 'italic', fontWeight: 300 }}>
              AAJ SHURU KAREIN.
            </span>
          </>
        }
        body={`Har batch mein limited seats (4–6 students) hoti hain taaki Sabreen har student ko personally guide kar sakein. Agle batch ki dates aur seat reservation ke liye abhi WhatsApp par connect karein: ${salon.phoneDisplay}`}
        ctaLabel="WHATSAPP PAR SEAT RESERVE KAREIN"
        ctaHref={`https://wa.me/${salon.phoneRaw}?text=${encodeURIComponent('Hi Sabreen! Main Makeup Classes ke next batch mein seat reserve karna chahti hoon.')}`}
      />

      {/* 4. FAST WHATSAPP STRIP */}
      <CompactWhatsAppStrip />
    </>
  )
}
