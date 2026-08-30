'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './ServiceGrid.module.css'

interface ServiceItem {
  number: string
  id: string
  name: string
  slug: string
  description: string
  image: string
  alt: string
}

const servicesList: ServiceItem[] = [
  {
    number: '01',
    id: 'bridal-artistry',
    name: 'Bridal Makeup',
    slug: 'bridal',
    description: 'Indian & Pakistani bridal makeup — waterproof, long-lasting, aur camera-ready.',
    image: '/images/bridal/bridal-hero.png',
    alt: 'Indian Bridal Makeup by Sabreen Siddiqui',
  },
  {
    number: '02',
    id: 'party-occasion',
    name: 'Party & Occasion Makeup',
    slug: 'makeup',
    description: 'Glowing, elegant glamour for parties, engagements, aur family functions.',
    image: '/images/services/party-makeup.png',
    alt: 'Glowing Party & Occasion Makeup by Sabreen',
  },
  {
    number: '03',
    id: 'haldi-makeup',
    name: 'Haldi & Festive Makeup',
    slug: 'makeup',
    description: 'Soft, natural Haldi look aur vibrant festive makeup for mehendi, sangeet.',
    image: '/images/services/haldi.png',
    alt: 'Haldi & Festive Makeup look',
  },
  {
    number: '04',
    id: 'hair-services',
    name: 'Hair Services',
    slug: 'hair',
    description: 'Hair styling, spa, treatment, aur bridal buns — sab kuch ek jagah.',
    image: '/images/services/hair-transform.png',
    alt: 'Professional Hair Styling & Bridal Hairdo',
  },
  {
    number: '05',
    id: 'skin-beauty',
    name: 'Skin & Beauty',
    slug: 'skin',
    description: 'Facial, cleanup, waxing, manicure, pedicure — glowing skin ke liye.',
    image: '/images/services/skin-care.png',
    alt: 'Glowing Skin & Beauty Treatment Results',
  },
  {
    number: '06',
    id: 'makeup-classes',
    name: 'Makeup Classes',
    slug: 'makeup-classes',
    description: 'Professional makeup sikhein — basic se bridal artist tak course available.',
    image: '/images/services/mehndi-makeup.png',
    alt: 'Professional Makeup Masterclass Finished Look',
  },
]

export default function ServiceGrid() {
  const [activeService, setActiveService] = useState<number>(0)

  const imagePanelRevealRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0 })
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const rightColRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.15 })

  return (
    <section className={styles.servicesSection} aria-labelledby="services-preview-heading">
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          {/* ─── Left Column: Dynamic Visual Panel (60% width, desktop) ─── */}
          <div
            ref={imagePanelRevealRef}
            className={styles.leftCol}
          >
            {servicesList.map((service, index) => {
              const isActive = activeService === index

              return (
                <div
                  key={service.id}
                  className={`${styles.imageWrapper} ${
                    isActive ? styles.imageActive : ''
                  }`}
                  aria-hidden={!isActive}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.alt}
                    className={styles.image}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
                  />
                </div>
              )
            })}

            {/* Ambient Shadow Overlay */}
            <div className={styles.imageOverlay} />

            {/* Bottom Service Identifier Badge */}
            <div className={styles.imageBadge}>
              <span className={styles.badgeNumber}>
                {servicesList[activeService].number} / 06
              </span>
              <span className={styles.badgeDot} />
              <span className={styles.badgeName}>
                {servicesList[activeService].name}
              </span>
            </div>
          </div>

          {/* ─── Right Column: Accordion-Style Content (40% width, desktop) ─── */}
          <div ref={rightColRef} className={styles.rightCol}>
            <span className={styles.eyebrow}>HUM KYA KARTE HAIN</span>

            <div className="overflow-hidden">
              <h2
                ref={headingRef}
                id="services-preview-heading"
                className={styles.heading}
              >
                {'Chhah services,\neck standard.'}
              </h2>
            </div>

            {/* Interactive Accordion Rows */}
            <div className={styles.serviceList} role="list">
              {servicesList.map((service, index) => {
                const isActive = activeService === index
                const href = service.slug === 'makeup-classes'
                  ? '/makeup-classes'
                  : `/services#${service.slug}`

                return (
                  <Link
                    key={service.id}
                    href={href}
                    className={`${styles.rowItem} ${isActive ? styles.rowActive : ''}`}
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                    role="listitem"
                    aria-label={`${service.number} ${service.name}`}
                  >
                    <div className={styles.rowHeader}>
                      {/* Left: Number */}
                      <span className={styles.rowNumber}>{service.number}</span>

                      {/* Center: Name & Expanding 1-Line Description */}
                      <div className={styles.rowContent}>
                        <h3 className={styles.rowName}>{service.name}</h3>
                        <p className={styles.description}>{service.description}</p>
                      </div>

                      {/* Right: Arrow */}
                      <span className={styles.rowArrow} aria-hidden="true">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Bottom Explore Link */}
            <div className={styles.footerLinkWrapper}>
              <Link href="/services" className={styles.exploreLink}>
                <span>Poora menu dekhein</span>
                <span className={styles.exploreArrow} aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ServiceGrid as ServicesPreview }
