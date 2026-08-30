import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import BridalStorySection from '@/components/sections/BridalStorySection'
import BridalProcessSection from '@/components/sections/BridalProcessSection'
import BridalGallerySection from '@/components/sections/BridalGallerySection'
import BridalPackagesSection from '@/components/sections/BridalPackagesSection'
import BridalFAQSection from '@/components/sections/BridalFAQSection'
import AppointmentCTA from '@/components/sections/AppointmentCTA'

export const metadata: Metadata = {
  title: 'Bridal Makeup & Styling in Sarai Meer — Glamorous Studio',
  description:
    'Sabreen Siddiqui ke saath bridal makeup Sarai Meer mein. Unhurried consultations, bridal trials, hair styling, aur long-lasting waterproof makeup aapke shaadi ke din ke liye.',
  alternates: {
    canonical: 'https://glamorous.in/bridal',
  },
  openGraph: {
    title: 'Bridal Makeup & Styling | Glamorous Studio Sarai Meer',
    description:
      'Patience aur care ke saath banayein apna dream bridal look. Long-lasting bridal makeup, hair styling, aur dupatta draping Sarai Meer mein.',
    url: 'https://glamorous.in/bridal',
    images: [
      {
        url: '/images/bridal/bridal-hero.png',
        width: 1200,
        height: 800,
        alt: 'Glamorous Bridal Makeup Studio in Sarai Meer',
      },
    ],
  },
}

export default function BridalPage() {
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
        name: 'Bridal Experience',
        item: 'https://glamorous.in/bridal',
      },
    ],
  }

  const bridalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Bridal Makeup and Styling',
    provider: {
      '@type': 'BeautySalon',
      name: 'Glamorous Makeup & Beauty Studio',
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
    areaServed: {
      '@type': 'Place',
      name: 'Sarai Meer, Azamgarh, Uttar Pradesh',
    },
    description:
      'Comprehensive bridal beauty and makeup services including consultations, trial sessions, HD waterproof makeup, bridal hair styling, dupatta setting, and multi-day packages.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bridalServiceSchema) }}
      />

      {/* 1. HERO — Large Cinematic Bridal Hero */}
      <HeroSection
        variant="bridal"
        label="THE BRIDAL EXPERIENCE"
        headline={
          <>
            <span className="block">AAPKA KHAAS DIN.</span>
            <span className="block">AAPKA APNA LOOK.</span>
            <span className="block text-gold italic font-light">AAPKA SHANDAAR MOMENT.</span>
          </>
        }
        subheadline="Bina kisi jaldi ke bespoke bridal beauty experience — aapki pasand, aapki skin, aur aapki shaadi ke din ki khushi ke liye poore dhyan se tayyar."
        ctaLabel="APPOINTMENT BOOK KAREIN"
        ctaHref="/contact?service=bridal"
        secondaryCtaLabel="PACKAGES DEKHEIN"
        secondaryCtaHref="#packages"
        locationTag="SARAI MEER · BRIDAL STUDIO"
        imageSrc="/images/bridal/bridal-hero.png"
        imageAlt="Glamorous bridal makeup artistry in Sarai Meer"
      />

      {/* 2. STORY SECTION — The Bridal Moment & Approach */}
      <BridalStorySection />

      {/* 3. PROCESS — 01 CONSULT, 02 PREPARE, 03 CREATE, 04 REVEAL */}
      <BridalProcessSection />

      {/* 4. BRIDAL GALLERY — Large Immersive Showcase */}
      <BridalGallerySection />

      {/* 5. OPTIONAL PACKAGES — Editable Package UI */}
      <BridalPackagesSection />

      {/* 6. FAQ — Accordion for 5 Key Bridal Questions */}
      <BridalFAQSection />

      {/* 7. FINAL CTA — Emotional Closing Action */}
      <AppointmentCTA
        label="BRIDAL RESERVATIONS"
        headline={
          <>
            AAPKA PERFECT<br />
            BRIDAL LOOK<br />
            YAHAN SHURU HOTA HAI.
          </>
        }
        body="Wedding season mein dates bohot jaldi book ho jaati hain. Sabreen Siddiqui ke saath Sarai Meer mein apna bridal consultation aaj hi reserve karein aur apna shaadi ka look plan karein."
        ctaLabel="APPOINTMENT BOOK KAREIN"
        ctaHref="/contact?service=bridal"
      />
    </>
  )
}
