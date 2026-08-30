'use client'

import { useState } from 'react'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './ServicesFAQ.module.css'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Appointment ya consultation kaise book karein?',
    answer:
      'Aap upar diye gaye kisi bhi service par "Book Karein" click kar sakte hain, Contact page par jaakar form bhar sakte hain, ya WhatsApp (+91 70078 75415) par direct message bhej sakte hain. Hum turant aapki date aur time slot confirm kar denge.',
  },
  {
    question: 'Kya shaadi ya event se pehle trial session available hai?',
    answer:
      'Haan! Hum full bridal consultation & trial session offer karte hain (₹500, jo aapke final bridal booking mein adjust ho jaata hai). Isme hum skin tone ke hisaab se base shades, eye looks aur hairstyles test karte hain taaki aapke special day par sab kuch perfect ho.',
  },
  {
    question: 'Studio mein kaunse makeup aur skin care brands use hote hain?',
    answer:
      'Hum strictly 100% authentic, premium brands use karte hain jaise MAC, Huda Beauty, Kryolan, PAC aur sensitive Indian skin ke liye dermatologist-tested hypoallergenic products.',
  },
  {
    question: 'Kya bride, bridesmaids aur family ke liye group booking ho sakti hai?',
    answer:
      'Ji haan! Shaadi aur family celebrations ke liye hum bride, unki sisters aur mother ke liye customized group packages provide karte hain. Advance mein guest count bata kar private studio slots book kar sakte hain.',
  },
  {
    question: 'Glamorous Studio Sarai Meer mein kahan situated hai?',
    answer:
      'Humara studio 1st Floor, Mumtaz Bangle Store, Sabji Mandi Road, Sarai Meer, Uttar Pradesh mein hai. Yahan clients ke liye ek safe, clean, aur private boutique environment banaya gaya hai.',
  },
]

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const listRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.15 })

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className={styles.faqSection} aria-labelledby="services-faq-heading">
      <div className={`container ${styles.faqContainer}`}>
        <div className={styles.faqHeader}>
          <div className={styles.labelWrapper}>
            <SectionLabel>SERVICES KE SAARE SAWAAL</SectionLabel>
          </div>
          <div className="overflow-hidden">
            <EditorialHeading
              ref={headingRef}
              as="h2"
              size="lg"
              id="services-faq-heading"
              className={`${styles.faqHeading} section-heading`}
            >
              Aksar Pooche Jaane Wale Sawaal
            </EditorialHeading>
          </div>
          <p className={styles.faqSubhead}>
            Appointments, consultations aur studio standards ke baare mein zaroori jankari.
          </p>
        </div>

        <div ref={listRef} className={styles.faqList}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className={styles.faqItem} data-open={isOpen}>
                <button
                  type="button"
                  className={styles.faqButton}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={styles.faqIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                {isOpen && (
                  <div id={`faq-answer-${idx}`} className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
