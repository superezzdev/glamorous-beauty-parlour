'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './BrandIntro.module.css'

export default function BrandIntro() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const rightTextRef = useScrollReveal<HTMLDivElement>({ y: 35, delay: 0.12 })
  const imageFrameRef = useImageClipReveal<HTMLDivElement>({ delay: 0.1 })

  return (
    <section className={`${styles.brandIntro} section`} aria-labelledby="brand-intro-heading">
      <div className={styles.inner}>
        {/* Left Column — Identity, Visual Anchor & Studio Details */}
        <div className={styles.left}>
          <div className={styles.labelWrapper}>
            <SectionLabel>GLAMOROUS KA EXPERIENCE</SectionLabel>
          </div>

          {/* Studio Visual Anchor */}
          <div ref={imageFrameRef} className={styles.visualWrapper}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about/about-studio.png"
                alt="Inside Glamorous Boutique Beauty Studio in Sarai Meer"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 536px"
                className={styles.studioImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.studioInfo}>
              <span className={styles.metaBadge}>BOUTIQUE STUDIO</span>
              <div className={styles.studioName}>GLAMOROUS</div>
              <p className={styles.metaLocation}>Saraimeer, Azamgarh, UP</p>
              <div className={styles.dividerLine} aria-hidden="true" />
              <p className={styles.studioTagline}>
                Bridal &amp; Occasion Artistry &bull; Sabreen Siddiqui
              </p>
            </div>
          </div>
        </div>

        {/* Right Column — Editorial Statement, Narrative & Pillars */}
        <div className={styles.right}>
          <div className={styles.headingWrapper}>
            <EditorialHeading
              ref={headingRef}
              as="h2"
              size="lg"
              id="brand-intro-heading"
              className={styles.headline}
            >
              Makeup aapko chhupaata nahi &mdash;
              <br />
              <span className={styles.headlineHighlight}>
                yeh aapke sabse glowing self ko saamne laata hai.
              </span>
            </EditorialHeading>
          </div>

          <div ref={rightTextRef} className={styles.narrative}>
            <p className={styles.leadText}>
              Hum Saraimeer, Azamgarh mein ek boutique makeup aur beauty studio hain. Bridal makeup, party glam, hair styling, aur skin care &mdash; har kaam mein hum time lete hain taaki aapka look bilkul sahi ho. Kyunki aapka occasion isse kam ka nahi hota.
            </p>

            <p className={styles.bodyText}>
              Hamara maanna hai ki achha makeup aapki features ko chhupaata nahi &mdash; unhe enhance karta hai. Detail par dhyan, skin-friendly products, aur ek calm, welcoming environment ke saath hum ensure karte hain ki aap confident, comfortable, aur beautiful feel karein.
            </p>

            {/* 3 Core Experience Pillars */}
            <div className={styles.pillarsGrid}>
              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>01</span>
                <strong className={styles.pillarTitle}>Skin-First Prep</strong>
                <span className={styles.pillarDesc}>Hydrated base jo weightless aur all-day comfortable rahe</span>
              </div>

              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>02</span>
                <strong className={styles.pillarTitle}>Personalized Artistry</strong>
                <span className={styles.pillarDesc}>Skin tone aur outfit ke hisaab se perfect shades</span>
              </div>

              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>03</span>
                <strong className={styles.pillarTitle}>Calm Sanctuary</strong>
                <span className={styles.pillarDesc}>Aapke liye peaceful, focused studio experience</span>
              </div>
            </div>

            <div className={styles.action}>
              <Link href="/about" className={styles.exploreBtn}>
                <span>HAMARI KAHANI JAANEIN</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { BrandIntro as AboutTeaser }
