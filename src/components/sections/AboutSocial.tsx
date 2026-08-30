'use client'

import { SectionLabel } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './AboutSocial.module.css'

export default function AboutSocial() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const subTextRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })
  const accountsRef = useScrollReveal<HTMLDivElement>({ y: 35, delay: 0.2 })
  const feedRef = useScrollReveal<HTMLDivElement>({ y: 35, delay: 0.3 })
  const ctaRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.4 })

  const accounts = [
    {
      name: 'SABREEN SIDDIQUI',
      handle: '@glamorouse_makeup_beauty',
      url: 'https://www.instagram.com/glamorouse_makeup_beauty',
      bio: 'Lead Bridal Artist & Creative Director. Behind-the-scenes transformations, bridal preparation, aur signature styling Sarai Meer mein.',
      tag: 'OFFICIAL INSTAGRAM',
    },
    {
      name: 'GLAMOROUS MAKEUP & BEAUTI',
      handle: '@makeup_by_sabreen_786',
      url: 'https://www.instagram.com/makeup_by_sabreen_786',
      bio: 'Studio portfolio jahan aapko milenge client portraits, occasion glamour, skincare rituals aur rozana ke updates.',
      tag: 'STUDIO PORTFOLIO',
    },
  ]

  const snapshots = [
    {
      src: '/images/bridal/bridal-1.png',
      alt: 'Gilded bridal makeup artistry and traditional jewellery setting',
    },
    {
      src: '/images/services/party-makeup.png',
      alt: 'Glowing bronze evening occasion makeup',
    },
    {
      src: '/images/services/hair-transform.png',
      alt: 'Romantic bridal floral hairstyle and styling',
    },
    {
      src: '/images/services/skin-care.png',
      alt: 'Glass skin facial glow and skincare nourishment',
    },
  ]

  return (
    <section className={styles.socialSection} aria-labelledby="social-heading">
      <div className="container">
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <SectionLabel>HAMARE SATH JUDEIN · SOCIAL</SectionLabel>
          <div className="overflow-hidden">
            <h2 id="social-heading" ref={headingRef} className={`${styles.heading} section-heading`}>
              Hamara living portfolio.
              <em>Instagram par hamara kaam dekhein.</em>
            </h2>
          </div>
          <p ref={subTextRef} className={styles.subText}>
            Daily bridal transformations, real client looks, aur hamare Sarai Meer studio ke
            behind-the-scenes moments dekhne ke liye humein follow karein.
          </p>
        </div>

        {/* Dual Verified Instagram Cards */}
        <div ref={accountsRef} className={styles.accountsGrid}>
          {accounts.map((acc, index) => (
            <a
              key={index}
              href={acc.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.accountCard}
              aria-label={`Open Instagram profile for ${acc.name} (${acc.handle})`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.instagramBadge} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className={styles.arrowIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>

              <div className={styles.accountDetails}>
                <h3 className={styles.accountName}>{acc.name}</h3>
                <span className={styles.accountHandle}>{acc.handle}</span>
                <p className={styles.accountBio}>{acc.bio}</p>
              </div>

              <div className={styles.cardFooter}>
                <span>{acc.tag}</span>
                <span>INSTAGRAM KHOLEIN &rarr;</span>
              </div>
            </a>
          ))}
        </div>

        {/* Curated Editorial Snapshots */}
        <div ref={feedRef} className={styles.feedVisualGrid}>
          {snapshots.map((snap, idx) => (
            <div key={idx} className={styles.feedImageFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={snap.src}
                alt={snap.alt}
                className={styles.feedImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className={styles.ctaWrapper}>
          <a
            href="https://www.instagram.com/glamorouse_makeup_beauty"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary btn-lg ${styles.journeyBtn}`}
          >
            <svg width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>HAMARA SAFAR FOLLOW KAREIN</span>
          </a>
        </div>
      </div>
    </section>
  )
}
