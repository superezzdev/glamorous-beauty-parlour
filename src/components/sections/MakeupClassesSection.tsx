'use client'

import { useState } from 'react'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import {
  makeupClasses,
  academyPillars,
  roadmapSteps,
  studentPerks,
  classFAQs,
} from '@/data/makeupClasses'
import { salon } from '@/data/salon'
import styles from './MakeupClassesSection.module.css'

export default function MakeupClassesSection() {
  const pillarsHeadingRef = useHeadingReveal<HTMLHeadingElement>()
  const pillarsGridRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.1 })

  const coursesHeadingRef = useHeadingReveal<HTMLHeadingElement>()
  const coursesGridRef = useScrollReveal<HTMLDivElement>({ y: 35, delay: 0.15 })

  const roadmapHeadingRef = useHeadingReveal<HTMLHeadingElement>()
  const roadmapGridRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.1 })

  const perksHeadingRef = useHeadingReveal<HTMLHeadingElement>()
  const perksGridRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.1 })

  const faqRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.1 })

  const [openFaq, setOpenFaq] = useState<string | null>(classFAQs[0]?.id || null)

  return (
    <>
      {/* ── 1. ACADEMY HIGHLIGHTS / PILLARS ── */}
      <section className={styles.academyBlock} aria-labelledby="academy-pillars-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <SectionLabel>GLAMOROUS ACADEMY / KHAS BAATEIN</SectionLabel>
            <div className="overflow-hidden">
              <EditorialHeading
                ref={pillarsHeadingRef}
                as="h2"
                size="lg"
                id="academy-pillars-heading"
                className={styles.heading}
              >
                Sabreen Siddiqui Se Hi<br />
                <span className={styles.headingHighlight}>Kyun Seekhein?</span>
              </EditorialHeading>
            </div>
            <p className={styles.leadText}>
              Saraimeer mein personal makeup aur bridal training ka authentic mahaul — jahan har student ko step-by-step master banaya jata hai.
            </p>
          </div>

          <div ref={pillarsGridRef} className={styles.pillarsGrid}>
            {academyPillars.map((pillar) => (
              <div key={pillar.number} className={styles.pillarCard}>
                <div className={styles.pillarTop}>
                  <span className={styles.pillarNumber}>{pillar.number}</span>
                  <span className={styles.pillarBadge}>{pillar.badge}</span>
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. COURSES & SYLLABUS SECTION ── */}
      <section id="courses" className={styles.academyBlockSurface} aria-labelledby="courses-grid-heading">
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <SectionLabel>COURSE OPTIONS / SYLLABUS &amp; FEES</SectionLabel>
            <div className="overflow-hidden">
              <EditorialHeading
                ref={coursesHeadingRef}
                as="h2"
                size="lg"
                id="courses-grid-heading"
                className={styles.heading}
              >
                Har Level Ke Liye<br />
                <span className={styles.headingHighlight}>Structured Training</span>
              </EditorialHeading>
            </div>
            <p className={styles.leadText}>
              Aapki zarurat aur goal ke mutabiq 3 curated courses — zero experience se lekar high-earning bridal artist tak.
            </p>
          </div>

          <div ref={coursesGridRef} className={styles.cardsGrid}>
            {makeupClasses.map((cls) => {
              const levelStyle =
                cls.level === 'Beginner'
                  ? styles.levelBeginner
                  : cls.level === 'Intermediate'
                  ? styles.levelIntermediate
                  : styles.levelAdvanced

              const whatsappUrl = `https://wa.me/${salon.phoneRaw}?text=${encodeURIComponent(cls.whatsappMessage)}`

              return (
                <article
                  key={cls.id}
                  className={`${styles.card} ${cls.isPopular ? styles.cardPopular : ''}`}
                >
                  {cls.isPopular && (
                    <div className={styles.popularRibbon}>⭐ Sabse Popular Choice</div>
                  )}

                  <div className={styles.cardHeader}>
                    <span className={styles.cardNumber}>{cls.number}</span>
                    <span className={`${styles.levelBadge} ${levelStyle}`}>
                      {cls.levelLabel}
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>{cls.name}</h3>
                  <p className={styles.cardSubtitle}>{cls.subtitle}</p>
                  <p className={styles.cardDesc}>{cls.description}</p>

                  {/* Pricing & Duration Metadata */}
                  <div className={styles.cardMetaBox}>
                    <div className={styles.cardPriceRow}>
                      <span className={styles.cardPrice}>{cls.price}</span>
                      <span className={styles.durationBadge}>{cls.duration}</span>
                    </div>
                    <div className={styles.cardTiming}>
                      <span aria-hidden="true">⏰</span>
                      <span>{cls.timing}</span>
                    </div>
                    {cls.priceNote && (
                      <div className={styles.cardPriceNote}>✦ {cls.priceNote}</div>
                    )}
                  </div>

                  {/* Course Syllabus Checklist */}
                  <div className={styles.includesList}>
                    <div className={styles.includesHeading}>Is course mein shamil hai:</div>
                    <ul>
                      {cls.includes.map((item, i) => (
                        <li key={i} className={styles.includeItem}>
                          <span className={styles.includeDot} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome Highlight */}
                  {cls.outcome && (
                    <div className={styles.outcomeBox}>
                      <span className={styles.outcomeStar} aria-hidden="true">✦</span>
                      <p className={styles.outcomeText}>
                        <strong>Kya fayda hoga:</strong> {cls.outcome}
                      </p>
                    </div>
                  )}

                  {/* Direct WhatsApp Action */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-primary ${styles.cardCta}`}
                    aria-label={`Enquire about ${cls.name} on WhatsApp`}
                  >
                    <span>WhatsApp Par Seat Book Karein</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 3. LEARNING ROADMAP (HOW WE TEACH) ── */}
      <section className={styles.academyBlock} aria-labelledby="roadmap-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <SectionLabel>HOW WE TEACH / LEARNING ROADMAP</SectionLabel>
            <div className="overflow-hidden">
              <EditorialHeading
                ref={roadmapHeadingRef}
                as="h2"
                size="lg"
                id="roadmap-heading"
                className={styles.heading}
              >
                Zero Se Expert Tak Ka<br />
                <span className={styles.headingHighlight}>4-Step Safar</span>
              </EditorialHeading>
            </div>
            <p className={styles.leadText}>
              Aap bina kisi darr ke seekhein — hum har step par hand-holding support aur live guidance provide karte hain.
            </p>
          </div>

          <div ref={roadmapGridRef} className={styles.roadmapGrid}>
            {roadmapSteps.map((step) => (
              <div key={step.step} className={styles.roadmapCard}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>{step.step}</span>
                  <span className={styles.stepTag}>{step.tag}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                <div className={styles.stepChips}>
                  {step.highlights.map((h, i) => (
                    <div key={i} className={styles.stepChip}>
                      <span className={styles.chipDot} aria-hidden="true" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. STUDENT PERKS & EXTRA VALUES ── */}
      <section className={styles.academyBlockSurface} aria-labelledby="perks-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <SectionLabel>STUDENT BENEFITS / EXTRA VALUE</SectionLabel>
            <div className="overflow-hidden">
              <EditorialHeading
                ref={perksHeadingRef}
                as="h2"
                size="lg"
                id="perks-heading"
                className={styles.heading}
              >
                Sirf Class Nahi,<br />
                <span className={styles.headingHighlight}>Lifetime Support</span>
              </EditorialHeading>
            </div>
            <p className={styles.leadText}>
              Course complete karne ke baad bhi aap akele nahi hain — Glamorous Academy aapke professional safar mein hamesha saath hai.
            </p>
          </div>

          <div ref={perksGridRef} className={styles.perksGrid}>
            {studentPerks.map((perk, idx) => (
              <div key={idx} className={styles.perkCard}>
                <span className={styles.perkTag}>{perk.tag}</span>
                <h3 className={styles.perkTitle}>{perk.title}</h3>
                <p className={styles.perkDesc}>{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. INTERACTIVE FAQ ACCORDION ── */}
      <section className={styles.academyBlock} aria-labelledby="classes-faq-heading">
        <div className="container">
          <div className={styles.faqInner}>
            <div className={styles.faqLeft}>
              <SectionLabel>ACADEMY FAQ / AAPKE SAWAL</SectionLabel>
              <h2 id="classes-faq-heading" className={styles.faqHeading}>
                Admission &amp; Classes Ke Baare Mein<br />
                <span className={styles.headingHighlight}>Zaroori Jankari</span>
              </h2>
              <p className={styles.faqSubtext}>
                Agar aapka koi specific sawal hai jo yahan mention nahi hai, toh Sabreen se direct WhatsApp par baat karein.
              </p>
              <a
                href={salon.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.faqWaBtn}
              >
                <span>WhatsApp Par Puchein ({salon.phoneDisplay})</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div ref={faqRef} className={styles.faqRight}>
              {classFAQs.map((faq) => {
                const isOpen = openFaq === faq.id
                return (
                  <div key={faq.id} className={styles.faqItem}>
                    <button
                      className={styles.faqQuestion}
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      aria-expanded={isOpen}
                      id={`faq-btn-${faq.id}`}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        className={styles.faqAnswer}
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${faq.id}`}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
