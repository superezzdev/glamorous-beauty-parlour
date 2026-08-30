'use client'

import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './BridalTeaser.module.css'

export default function BridalTeaser() {
  const imageRef = useImageClipReveal<HTMLDivElement>()
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const bodyRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.15 })
  const highlightsRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.25 })
  const ctaRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.35 })

  return (
    <section className={styles.bridalTeaser} aria-labelledby="bridal-teaser-heading">
      {/* Full-bleed background media with clip-path reveal */}
      <div ref={imageRef} className={styles.media} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bridal/bridal-hero.png"
          alt="Glamorous bridal makeup and beauty artistry in Sarai Meer"
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay} />
      </div>

      {/* Commercial Content Grid */}
      <div className={`container ${styles.content}`}>
        <div className={styles.inner}>
          <div className={styles.labelWrapper}>
            <SectionLabel>BRIDAL SUITE</SectionLabel>
          </div>

          <div className="overflow-hidden">
            <EditorialHeading
              ref={headingRef}
              as="h2"
              size="xl"
              id="bridal-teaser-heading"
              className={`${styles.headline} section-heading`}
            >
              AAPKA DIN.
              <br />
              AAPKA LOOK.
              <br />
              AAPKA MOMENT.
            </EditorialHeading>
          </div>

          <p ref={bodyRef} className={`${styles.body} lead`}>
            Har dulhan ko apne sabse khaas din par sabse khoobsurat dikhna chahiye — yeh unka haq hai. Hum personalized bridal looks create karte hain poore patience aur precision ke saath, waterproof formulas use karte hain, aur aapke wedding attire, jewellery aur personal style ka poora dhyan rakhte hain.
          </p>

          {/* Bridal Feature Highlights */}
          <div ref={highlightsRef} className={styles.highlights} aria-label="Bridal highlights">
            <div className={styles.highlightItem}>
              <span className={styles.highlightDot} />
              <span>Waterproof &amp; High-Definition Finish</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightDot} />
              <span>Pre-Bridal Trial &amp; Consultation</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightDot} />
              <span>Indian, Pakistani, Haldi &amp; Engagement Looks</span>
            </div>
          </div>

          <div ref={ctaRef} className={styles.ctaWrapper}>
            <Link href="/bridal" className="btn btn-primary btn-lg">
              <span>Bridal Packages Dekhein</span>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="4" y1="10" x2="16" y2="10" />
                <polyline points="11,5 16,10 11,15" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
