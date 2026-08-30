'use client'

import { SectionLabel } from '@/components/ui/Primitives'
import { bridalStoryPoints } from '@/data/bridal'
import { useScrollReveal, useHeadingReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './BridalStorySection.module.css'

export default function BridalStorySection() {
  const visualRef = useImageClipReveal<HTMLDivElement>()
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const leadRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.15 })
  const pointsRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.25 })

  return (
    <section className={styles.storySection} aria-labelledby="bridal-story-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Visual Moment with Editorial Card */}
          <div ref={visualRef} className={styles.visualWrapper}>
            <div className={styles.portraitCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bridal/bridal-2.png"
                alt="Glamorous Studio bridal makeup artistry with glowing skin in Sarai Meer"
                className={styles.portraitImage}
                loading="lazy"
              />
              <div className={styles.visualBadge}>
                <span className={styles.badgeTag}>BRIDAL PHILOSOPHY</span>
                <p className={styles.badgeText}>
                  &ldquo;Ek bride ko kabhi overdone ya badla hua nahi dikhna chahiye &mdash; balki apni sabse khoobsurat aur glowing shakal mein chamakna chahiye.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Pillars */}
          <div className={styles.contentColumn}>
            <div className={styles.headerBlock}>
              <SectionLabel>THE BRIDAL APPROACH</SectionLabel>
              <div className="overflow-hidden">
                <h2 id="bridal-story-heading" ref={headingRef} className={`${styles.heading} section-heading`}>
                  Patience, Kalaakari &amp; <br />
                  <em>Har Ek Bareeki.</em>
                </h2>
              </div>
              <p ref={leadRef} className={styles.lead}>
                Shaadi ka din aapki zindagi ke sabse anmol dino mein se ek hota hai. Sarai Meer mein hamare studio par humara maanna hai ki behtareen bridal makeup waqt aur sabr maangta hai: aapki pasand sunna, rivaajon ka samman karna, aur aisa look create karna jo pehli rasm se lekar aakhiri vidai tak bilkul flawless aur fresh rahe.
              </p>
            </div>

            {/* Structured Pillars Grid */}
            <div ref={pointsRef} className={styles.pointsGrid}>
              {bridalStoryPoints.map((point, index) => (
                <div key={point.id} className={styles.pointItem}>
                  <span className={styles.pointNumber}>0{index + 1}</span>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                  <span className={styles.pointSubtitle}>{point.subtitle}</span>
                  <p className={styles.pointDesc}>{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
