'use client'

import { SectionLabel } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './AboutPhilosophy.module.css'

interface PillarItem {
  number: string
  title: string
  description: string
}

function PillarCard({ pillar, delay }: { pillar: PillarItem; delay: number }) {
  const cardRef = useScrollReveal<HTMLDivElement>({ delay, y: 35 })

  return (
    <div ref={cardRef} className={styles.pillarCard}>
      <span className={styles.pillarNumber}>{pillar.number}</span>
      <h3 className={styles.pillarTitle}>{pillar.title}</h3>
      <p className={styles.pillarDescription}>{pillar.description}</p>
    </div>
  )
}

export default function AboutPhilosophy() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const leadRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })
  const visualRef = useImageClipReveal<HTMLDivElement>()

  const pillars: PillarItem[] = [
    {
      number: '01',
      title: 'Mindful Kalaakari',
      description: 'Jaldbaazi nahi, sirf perfection. Har brushstroke aur shade aapke look ke hisaab se dhyan se chuna jaata hai.',
    },
    {
      number: '02',
      title: 'Skin-First Prep',
      description: 'Acchi tarah hydrated aur prepped skin taaki makeup poora din lightweight, fresh aur natural mehsoos ho.',
    },
    {
      number: '03',
      title: 'Timeless Khoobsurati',
      description: 'Classic aur elegant styles jo aaj ke din bhi shandaar lagein aur saalon baad albums mein bhi utne hi pyare dikhein.',
    },
  ]

  return (
    <section className={styles.philosophy} aria-labelledby="philosophy-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <SectionLabel>01 / HAMARI SOCH (PHILOSOPHY)</SectionLabel>

            <div className="overflow-hidden">
              <h2 id="philosophy-heading" ref={headingRef} className={`${styles.heading} section-heading`}>
                Khoobsurati thopi nahi jaati.
                <em>Aapke andar se nikhaari jaati hai.</em>
              </h2>
            </div>

            <p ref={leadRef} className={styles.leadText}>
              Hum har client ke saath poora waqt bitate hain. Achha makeup aapki pehchan ko badalne ke baare mein nahi hai &mdash;
              balki aapke features ko samajhna, skin ko sahi tarike se prep karna, aur ek aisa look create karna jo aapko
              confident aur dil se khoobsurat mehsoos karaye.
            </p>

            <div className={styles.pillarsGrid}>
              {pillars.map((pillar, idx) => (
                <PillarCard
                  key={pillar.number}
                  pillar={pillar}
                  delay={0.15 + idx * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Visual Frame */}
          <div ref={visualRef} className={styles.visualFrame}>
            <div className={styles.imageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bridal/bridal-2.png"
                alt="Close-up detail of mindful makeup artistry and precision brushwork"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <aside className={styles.quotePill}>
              <p className={styles.quoteText}>
                &ldquo;Achha makeup aapki natural khoobsurati ko nikharta hai &mdash; usse kabhi chhupata nahi.&rdquo;
              </p>
              <span className={styles.quoteAuthor}>Studio Creed · Sarai Meer</span>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
