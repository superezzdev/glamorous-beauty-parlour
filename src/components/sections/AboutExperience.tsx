'use client'

import { SectionLabel } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './AboutExperience.module.css'

interface ExperienceStep {
  number: string
  title: string
  description: string
}

function ExperienceStepCard({ step, delay }: { step: ExperienceStep; delay: number }) {
  const cardRef = useScrollReveal<HTMLDivElement>({ delay, y: 35 })

  return (
    <div ref={cardRef} className={styles.stepCard}>
      <span className={styles.stepNumber}>{step.number}</span>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDescription}>{step.description}</p>
    </div>
  )
}

export default function AboutExperience() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const subTextRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })
  const noteRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.2 })

  const steps: ExperienceStep[] = [
    {
      number: '01',
      title: 'Sunna Aur Planning',
      description:
        'Hum pehle aapki pasand, event ke details, lighting, outfit colors aur aapke aaraam ko acche se samajhte hain.',
    },
    {
      number: '02',
      title: 'Skin Preparation',
      description:
        'Targeted hydration, gentle skin prep aur calming care jo skin ko fresh, hydrated aur makeup-ready banata hai.',
    },
    {
      number: '03',
      title: 'Detailed Kalaakari',
      description:
        'Dhyan se layered application taaki makeup skin par lightweight rahe aur real life aur camera dono par flawless dikhe.',
    },
    {
      number: '04',
      title: 'The Final Reveal',
      description:
        'Final touchups, jewellery setting, setting spray aur woh special moment jab aap aaine mein apna complete look dekhte hain.',
    },
  ]

  return (
    <section className={styles.experience} aria-labelledby="experience-heading">
      <div className="container">
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <SectionLabel>03 / STUDIO KA EXPERIENCE</SectionLabel>
          <div className="overflow-hidden">
            <h2 id="experience-heading" ref={headingRef} className={`${styles.heading} section-heading`}>
              Aaraamdeh, shant aur personalized.
              <em>Pehle swagat se lekar aakhiri reveal tak.</em>
            </h2>
          </div>
          <p ref={subTextRef} className={styles.subText}>
            Hamara maanna hai ki aapka beauty session ekdam comfortable aur relaxing hona chahiye.
            Har appointment ko poora waqt diya jaata hai taaki aapko bilkul bhi jaldbaazi na lage.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <ExperienceStepCard
              key={idx}
              step={step}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Concierge Note */}
        <div ref={noteRef} className={styles.conciergeNote}>
          <div>
            <strong className={styles.noteTitle}>Hamara Booking Promise</strong>
            <p className={styles.noteDesc}>
              Hum bridal ya major events par kabhi double-booking nahi karte. Aapka book kiya hua slot sirf aur sirf aapke liye reserved rehta hai.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
