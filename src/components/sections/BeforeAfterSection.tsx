'use client'

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './BeforeAfterSection.module.css'

interface BeforeAfterItem {
  id: string
  label: string
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}

const items: BeforeAfterItem[] = [
  {
    id: 'bridal',
    label: 'Indian Bridal',
    beforeSrc: '/images/before-after/before-img-a1.png',
    afterSrc: '/images/before-after/after-img-a1.png',
    beforeAlt: 'Before — natural look',
    afterAlt: 'After — Indian Bridal Makeup by Sabreen Siddiqui',
  },
  {
    id: 'party',
    label: 'Party Makeup',
    beforeSrc: '/images/before-after/before-img-a2.png',
    afterSrc: '/images/before-after/after-img-a2.png',
    beforeAlt: 'Before — natural look',
    afterAlt: 'After — Party Makeup by Glamorous Studio',
  },
  {
    id: 'haldi',
    label: 'Haldi Look',
    beforeSrc: '/images/before-after/before-img-a4.png',
    afterSrc: '/images/before-after/after-img-a4.png',
    beforeAlt: 'Before — natural look',
    afterAlt: 'After — Haldi Makeup by Sabreen',
  },
  {
    id: 'engagement',
    label: 'Engagement',
    beforeSrc: '/images/before-after/before-img-a5.png',
    afterSrc: '/images/before-after/after-img-a5.png',
    beforeAlt: 'Before — natural look',
    afterAlt: 'After — Engagement Makeup by Glamorous Studio',
  },
]

interface SliderProps {
  item: BeforeAfterItem
}

function BeforeAfterSlider({ item }: SliderProps) {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPos((x / rect.width) * 100)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return
    updateSlider(e.clientX)
  }, [updateSlider])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX)
  }, [updateSlider])

  return (
    <div
      ref={containerRef}
      className={styles.slider}
      onMouseMove={handleMouseMove}
      onMouseDown={() => { isDragging.current = true }}
      onMouseUp={() => { isDragging.current = false }}
      onMouseLeave={() => { isDragging.current = false }}
      onTouchMove={handleTouchMove}
      role="img"
      aria-label={`Before and after: ${item.label}`}
    >
      {/* AFTER image (full width, clipped) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.afterSrc} alt={item.afterAlt} className={styles.imgAfter} loading="lazy" />

      {/* BEFORE image (revealed based on slider) */}
      <div className={styles.beforeWrapper} style={{ width: `${sliderPos}%` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.beforeSrc} alt={item.beforeAlt} className={styles.imgBefore} loading="lazy" />
      </div>

      {/* Divider Handle */}
      <div className={styles.handle} style={{ left: `${sliderPos}%` }}>
        <div className={styles.handleLine} />
        <div className={styles.handleKnob}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polyline points="15,18 9,12 15,6" />
            <polyline points="9,18 15,12 9,6" style={{ transform: 'translateX(6px)' }} />
          </svg>
        </div>
        <div className={styles.handleLine} />
      </div>

      {/* Labels */}
      <span className={`${styles.imgLabel} ${styles.imgLabelBefore}`}>BEFORE</span>
      <span className={`${styles.imgLabel} ${styles.imgLabelAfter}`}>AFTER</span>
    </div>
  )
}

export default function BeforeAfterSection() {
  const [active, setActive] = useState(0)
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const bodyRef = useScrollReveal<HTMLParagraphElement>({ y: 25, delay: 0.1 })
  const tabsRef = useScrollReveal<HTMLDivElement>({ y: 20, delay: 0.15 })
  const sliderRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.2 })

  return (
    <section className={styles.section} aria-labelledby="ba-heading">
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>BEFORE & AFTER</SectionLabel>
          <div className="overflow-hidden">
            <EditorialHeading
              ref={headingRef}
              as="h2"
              size="lg"
              id="ba-heading"
              className={styles.heading}
            >
              Transformation
              <span className={styles.headingHighlight}> dekhein</span>
            </EditorialHeading>
          </div>
          <p ref={bodyRef} className={styles.body}>
            Yeh hain hamare real client transformations — natural se shuru, aur Sabreen ke haath se flawless tak.
            Slider ko drag karein before aur after dekhne ke liye.
          </p>
        </div>

        {/* Category Tabs */}
        <div ref={tabsRef} className={styles.tabs} role="tablist" aria-label="Makeup categories">
          {items.map((item, i) => (
            <button
              key={item.id}
              className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={active === i}
              aria-controls={`ba-panel-${item.id}`}
              id={`ba-tab-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Slider Panel */}
        <div
          ref={sliderRef}
          className={styles.sliderWrapper}
          id={`ba-panel-${items[active].id}`}
          role="tabpanel"
          aria-labelledby={`ba-tab-${items[active].id}`}
        >
          <BeforeAfterSlider key={items[active].id} item={items[active]} />

          <div className={styles.placeholderNote}>
            📸 Jaldi hi real client photos aayenge — stay tuned!
          </div>
        </div>

        <div className={styles.cta}>
          <Link href="/gallery" className={styles.galleryLink}>
            <span>Poori Gallery Dekhein</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
