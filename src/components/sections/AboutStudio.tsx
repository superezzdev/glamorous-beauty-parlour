'use client'

import { SectionLabel } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './AboutStudio.module.css'

export default function AboutStudio() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const leadRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })
  const featuresRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.2 })
  const visualRef = useImageClipReveal<HTMLDivElement>()

  return (
    <section className={styles.studio} aria-labelledby="studio-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Text Information */}
          <div className={styles.textContent}>
            <div className={styles.labelWrapper}>
              <SectionLabel>04 / HAMARA STUDIO</SectionLabel>
            </div>

            <div className="overflow-hidden">
              <h2 id="studio-heading" ref={headingRef} className={`${styles.heading} section-heading`}>
                Ek aaraamdeh aur shant jagah
                <em>Sarai Meer mein.</em>
              </h2>
            </div>

            <p ref={leadRef} className={styles.leadText}>
              Sabji Mandi Road par Mumtaz Bangle Store ke 1st Floor par sthit, Glamorous ek shant aur welcoming studio hai.
              Dedicated makeup stations aur professional lighting ke saath, hum ensure karte hain ki aap poore session ke dauran
              bilkul relaxed aur comfortable mehsoos karein.
            </p>

            <div ref={featuresRef} className={styles.featuresList}>
              <div className={styles.featureItem}>
                <strong className={styles.featureTitle}>Private Bridal Area</strong>
                <span className={styles.featureDesc}>Brides ke liye ek shant aur private space jahan bina kisi shor ya jaldbaazi ke aaraam se tayyari ho sake.</span>
              </div>

              <div className={styles.featureItem}>
                <strong className={styles.featureTitle}>Professional Studio Lighting</strong>
                <span className={styles.featureDesc}>Har station par balanced lighting taaki makeup daylight, evening party lights aur wedding photography mein flawless lage.</span>
              </div>

              <div className={styles.featureItem}>
                <strong className={styles.featureTitle}>Saaf-Suthre &amp; Sanitized Tools</strong>
                <span className={styles.featureDesc}>Sanitized makeup brushes, clean kits aur fresh disposables har client ke liye 100% hygiene ke saath.</span>
              </div>

              <div className={styles.featureItem}>
                <strong className={styles.featureTitle}>Aasan Location</strong>
                <span className={styles.featureDesc}>Sabji Mandi Road par centrally located, poore Sarai Meer aur aas-paas ke ilaqon se aana bilkul aasan.</span>
              </div>
            </div>
          </div>

          {/* Visual Frame */}
          <div ref={visualRef} className={styles.visualFrame}>
            <div className={styles.imageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/about-studio.png"
                alt="Atmospheric view of Glamorous makeup vanity and studio interior in Sarai Meer"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.locationCard}>
              <div className={styles.locationTitle}>Glamorous (makeup &amp; beauty)</div>
              <p className={styles.locationAddress}>
                1st Floor, Mumtaz Bangle Store · Sabji Mandi Rd, Sarai Meer, UP 276305
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
