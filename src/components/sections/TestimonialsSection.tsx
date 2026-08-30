'use client'

import { useState } from 'react'
import styles from './TestimonialsSection.module.css'

interface TestimonialItem {
  name: string
  location: string
  quote: string
  image: string
}

const testimonials: TestimonialItem[] = [
  {
    name: "Zainab Fatima",
    location: "Bridal Makeup · Saraimeer",
    quote: "Mera wedding makeup bilkul waisa hi tha jaisa maine dream kiya tha — bilkul lightweight, photos mein flawless aur subah ki rasam se lekar der raat tak fresh raha.",
    image: "/images/testimonials/bride-1.jpg"
  },
  {
    name: "Aiman Khan",
    location: "Reception Glam · Azamgarh",
    quote: "Saraimeer mein sabse best makeup studio hai bina kisi doubt ke. Eye makeup aur hair styling ki detailing sach mein kamaal ki thi.",
    image: "/images/testimonials/bride-2.jpg"
  },
  {
    name: "Sana Parveen",
    location: "Engagement Makeup · Saraimeer",
    quote: "Sabreen ji natural features ko bohot khoobsurti se enhance karti hain. Studio ka mahaul bhi bohot warm, comfortable aur welcoming hai.",
    image: "/images/testimonials/bride-3.jpg"
  },
  {
    name: "Priya Verma",
    location: "Party Glam · Jaunpur",
    quote: "Sabreen ke haathon mein sach mein jaadu hai. Maine jo look manga tha unhone exactly wahi diya — balki meri expectation se bhi zyada khoobsurat.",
    image: "/images/testimonials/bride-4.jpg"
  },
  {
    name: "Meera Yadav",
    location: "Pre-Bridal Package · Azamgarh",
    quote: "Pre-bridal package ka har ek rupya worth tha. Shadi ke din meri skin glowing dikh rahi thi aur look poore event tak bilkul fresh raha.",
    image: "/images/testimonials/bride-5.jpg"
  }
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const total = testimonials.length

  const prevIndex = (active - 1 + total) % total
  const nextIndex = (active + 1) % total

  const desktopThumbnailIndices = [prevIndex, active, nextIndex]

  const current = testimonials[active]

  return (
    <section className={styles.testimonialsSection} aria-labelledby="testimonials-heading">
      <div className={styles.innerContainer}>
        {/* Section Header */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>HAMARE CLIENTS KA BHAROSA</span>
          <h2 id="testimonials-heading">
            <div style={{ overflow: 'hidden' }} className={styles.headingLine}>
              <span className={styles.h2Line1}>Dulhano ke dil se nikli baatein,</span>
            </div>
            <div style={{ overflow: 'hidden' }} className={styles.headingLine}>
              <span className={styles.h2Line2}>jo hamare liye anmol hain.</span>
            </div>
          </h2>
        </header>

        {/* ─── DESKTOP GRID (lg and above) ───────────────────── */}
        <div className={styles.desktopGrid}>
          {/* Column 1: Vertical metadata & strip */}
          <div className={styles.col1}>
            <span className={styles.counter} aria-label={`Testimonial ${active + 1} of ${total}`}>
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>

            <span className={styles.rotatedLabel} aria-hidden="true">
              REVIEWS
            </span>

            {/* Desktop 3-thumbnail strip (prev, active, next) */}
            <div className={styles.desktopThumbnails} aria-label="Testimonial navigation thumbnails">
              {desktopThumbnailIndices.map((idx, posIndex) => {
                const item = testimonials[idx]
                const isActive = idx === active
                return (
                  <button
                    key={`thumb-desktop-${idx}-${posIndex}`}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={`${styles.thumbnailBtn} ${isActive ? styles.thumbActive : styles.thumbInactive}`}
                    aria-label={`View review by ${item.name}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.thumbImg}
                      loading="lazy"
                    />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Column 2: Center portrait image */}
          <div className={styles.col2}>
            <div className={styles.portraitFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={active}
                src={current.image}
                alt={`Client portrait — ${current.name}`}
                className={styles.portraitImg}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Column 3: Text content */}
          <div className={styles.col3}>
            <p className={styles.locationLabel}>{current.location}</p>
            <h3 className={styles.clientName}>{current.name}</h3>

            <div className={styles.quoteWrapper}>
              <p key={active} className={styles.quoteText}>
                {current.quote}
              </p>
            </div>

            {/* Navigation buttons */}
            <div className={styles.navButtons}>
              <button
                type="button"
                className={styles.prevButton}
                onClick={() => setActive((active - 1 + total) % total)}
                aria-label="Previous testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                type="button"
                className={styles.nextButton}
                onClick={() => setActive((active + 1) % total)}
                aria-label="Next testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ─── MOBILE VIEW (< 1024px) ────────────────────────── */}
        <div className={styles.mobileContainer}>
          {/* Top Counter (Right aligned) */}
          <div className={styles.mobileTopBar}>
            <span className={styles.mobileCounter}>
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          {/* Portrait Image */}
          <div className={styles.mobilePortraitFrame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={`mob-${active}`}
              src={current.image}
              alt={`Client portrait — ${current.name}`}
              className={styles.portraitImg}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Details */}
          <div className={styles.mobileDetails}>
            <p className={styles.locationLabel}>{current.location}</p>
            <h3 className={styles.clientName}>{current.name}</h3>

            <div className={styles.mobileQuoteWrapper}>
              <p key={`mob-q-${active}`} className={styles.mobileQuoteText}>
                {current.quote}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className={styles.navButtons}>
              <button
                type="button"
                className={styles.prevButton}
                onClick={() => setActive((active - 1 + total) % total)}
                aria-label="Previous testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                type="button"
                className={styles.nextButton}
                onClick={() => setActive((active + 1) % total)}
                aria-label="Next testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Thumbnail Strip (All 5 circles) */}
          <div className={styles.mobileThumbnails} aria-label="Testimonial navigation thumbnails">
            {testimonials.map((item, idx) => {
              const isActive = idx === active
              return (
                <button
                  key={`thumb-mobile-${idx}`}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`${styles.mobileThumbBtn} ${isActive ? styles.mobileThumbActive : styles.mobileThumbInactive}`}
                  aria-label={`View review by ${item.name}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.mobileThumbImg}
                    loading="lazy"
                  />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export { TestimonialsSection }
