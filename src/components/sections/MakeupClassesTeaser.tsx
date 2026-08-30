'use client'

import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import { makeupClasses } from '@/data/makeupClasses'
import { salon } from '@/data/salon'
import styles from './MakeupClassesTeaser.module.css'

export default function MakeupClassesTeaser() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const descRef = useScrollReveal<HTMLParagraphElement>({ y: 25, delay: 0.1 })
  const cardsRef = useScrollReveal<HTMLDivElement>({ y: 35, delay: 0.2 })
  const footerRef = useScrollReveal<HTMLDivElement>({ y: 20, delay: 0.3 })

  const previewClasses = makeupClasses.slice(0, 3)

  return (
    <section className={styles.section} aria-labelledby="classes-teaser-heading">
      <div className="container">
        {/* ── Section Header ── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <SectionLabel>GLAMOROUS ACADEMY / MAKEUP CLASSES</SectionLabel>
            <div className="overflow-hidden">
              <EditorialHeading
                ref={headingRef}
                as="h2"
                size="lg"
                id="classes-teaser-heading"
                className={styles.heading}
              >
                Makeup artist<br />
                <span className={styles.headingHighlight}>banna chahti hain?</span>
              </EditorialHeading>
            </div>
          </div>

          <div className={styles.headerRight}>
            <p ref={descRef} className={styles.leadText}>
              Sabreen Siddiqui se seekhein professional makeup ki har technique — basic self-makeup se lekar advanced bridal masterclass tak. Personal attention aur live model practice ke saath.
            </p>
            <div className={styles.headerActions}>
              <Link href="/makeup-classes" className="btn btn-primary">
                <span>Sabhi Courses Dekhein</span>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="4" y1="10" x2="16" y2="10" />
                  <polyline points="11,5 16,10 11,15" />
                </svg>
              </Link>
              <a
                href={salon.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
                aria-label="Inquire about makeup classes on WhatsApp"
              >
                <span>WhatsApp par puchein &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── 3-Course Luxury Grid ── */}
        <div ref={cardsRef} className={styles.cardsGrid}>
          {previewClasses.map((cls) => {
            const levelClass =
              cls.level === 'Beginner'
                ? styles.levelBeginner
                : cls.level === 'Intermediate'
                ? styles.levelIntermediate
                : styles.levelAdvanced

            return (
              <Link
                key={cls.id}
                href="/makeup-classes"
                className={`${styles.card} ${cls.isPopular ? styles.cardPopular : ''}`}
              >
                {cls.isPopular && (
                  <div className={styles.popularRibbon}>
                    <span>SABSE POPULAR</span>
                  </div>
                )}

                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>{cls.number}</span>
                  <span className={`${styles.levelBadge} ${levelClass}`}>
                    {cls.level}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{cls.name}</h3>
                <p className={styles.cardSubtitle}>{cls.subtitle}</p>

                {/* Key Course Highlights Preview */}
                <ul className={styles.highlightsList} aria-label="Course highlights">
                  {cls.includes.slice(0, 3).map((item, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      <span className={styles.highlightDot} aria-hidden="true" />
                      <span className={styles.highlightText}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <div className={styles.priceBlock}>
                    <span className={styles.priceLabel}>FEES</span>
                    <span className={styles.cardPrice}>{cls.price}</span>
                  </div>
                  <div className={styles.durationBlock}>
                    <span className={styles.durationLabel}>DURATION</span>
                    <span className={styles.cardDuration}>{cls.duration}</span>
                  </div>
                  <span className={styles.cardArrow} aria-hidden="true">
                    &rarr;
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* ── Bottom Academy Meta Bar ── */}
        <div ref={footerRef} className={styles.bottomBar}>
          <div className={styles.metaBadges}>
            <span className={styles.metaPill}>📍 Saraimeer, Azamgarh</span>
            <span className={styles.metaDivider}>·</span>
            <span className={styles.metaPill}>✨ Hands-on Live Practice</span>
            <span className={styles.metaDivider}>·</span>
            <span className={styles.metaPill}>📜 Certificate of Completion</span>
          </div>

          <Link href="/makeup-classes" className={styles.exploreLink}>
            <span>Poora Syllabus &amp; Batch Timings Dekhein</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
