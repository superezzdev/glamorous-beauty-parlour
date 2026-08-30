'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { useScrollReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './EditorialMoment.module.css'

interface GalleryStripItem {
  id: string
  label: string
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}

const STRIP_IMAGES: GalleryStripItem[] = [
  {
    id: 'strip-1',
    label: 'Champagne Bridal',
    beforeSrc: '/images/before-after/before-img-a1.png',
    afterSrc: '/images/before-after/after-img-a1.png',
    beforeAlt: 'Before — Natural look without makeup',
    afterAlt: 'After — Champagne gold bridal transformation by Sabreen Siddiqui',
  },
  {
    id: 'strip-2',
    label: 'Royal Kundan Glam',
    beforeSrc: '/images/before-after/before-img-a2.png',
    afterSrc: '/images/before-after/after-img-a2.png',
    beforeAlt: 'Before — Natural look',
    afterAlt: 'After — Radiant red bridal makeup with kundan tikka',
  },
  {
    id: 'strip-3',
    label: 'Heritage Crimson Bride',
    beforeSrc: '/images/before-after/before-img-a3.png',
    afterSrc: '/images/before-after/after-img-a3.png',
    beforeAlt: 'Before — Natural look',
    afterAlt: 'After — Classic Indian bride in deep crimson lehenga',
  },
  {
    id: 'strip-4',
    label: 'Haldi & Celebration',
    beforeSrc: '/images/before-after/before-img-a4.png',
    afterSrc: '/images/before-after/after-img-a4.png',
    beforeAlt: 'Before — Natural smiling look',
    afterAlt: 'After — Radiant glowing celebration makeup by Sabreen',
  },
  {
    id: 'strip-5',
    label: 'Party Radiance',
    beforeSrc: '/images/before-after/before-img-a5.png',
    afterSrc: '/images/before-after/after-img-a5.png',
    beforeAlt: 'Before — Natural fresh look',
    afterAlt: 'After — Luminous soft glam party makeup and styling',
  },
  {
    id: 'strip-6',
    label: 'Signature Royal Glow',
    beforeSrc: '/images/before-after/before-img-a6.png',
    afterSrc: '/images/before-after/after-img-a6.png',
    beforeAlt: 'Before — Natural look',
    afterAlt: 'After — Royal glowing bridal beauty portrait',
  },
]

interface EditorialMomentProps {
  imageSrc?: string
  imageAlt?: string
  tag?: string
  headline?: string
}

export default function EditorialMoment({
  tag = 'SABREEN KI KALAAKARI',
  headline = 'Har look mein patience, precision, aur care — yeh hai hamaara vaada.',
}: EditorialMomentProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [sliderPos, setSliderPos] = useState<number>(50)
  const [mobileActive, setMobileActive] = useState<number>(0)
  const [mobileSliderPos, setMobileSliderPos] = useState<number>(50)

  const isDragging = useRef<boolean>(false)
  const isMobileDragging = useRef<boolean>(false)
  const activeStripRef = useRef<HTMLDivElement | null>(null)
  const mobileContainerRef = useRef<HTMLDivElement | null>(null)

  const mediaRef = useImageClipReveal<HTMLDivElement>()
  const badgeRef = useScrollReveal<HTMLDivElement>({ y: 40, delay: 0.15 })

  const currentActive = hoveredIndex !== null ? hoveredIndex : activeIndex

  const getFlexValue = (index: number) => {
    if (hoveredIndex === null) {
      return index === activeIndex ? 3.5 : 0.7
    }
    return hoveredIndex === index ? 3.5 : 0.7
  }

  // Update desktop slider position relative to the active strip
  const handleSliderUpdate = useCallback((clientX: number) => {
    if (!activeStripRef.current) return
    const rect = activeStripRef.current.getBoundingClientRect()
    const relativeX = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (relativeX / rect.width) * 100))
    setSliderPos(percent)
  }, [])

  const handleMobileSliderUpdate = useCallback((clientX: number) => {
    if (!mobileContainerRef.current) return
    const rect = mobileContainerRef.current.getBoundingClientRect()
    const relativeX = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (relativeX / rect.width) * 100))
    setMobileSliderPos(percent)
  }, [])

  // Desktop mouse handlers
  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    if (index !== currentActive) {
      setActiveIndex(index)
      setHoveredIndex(index)
    }
    isDragging.current = true
    handleSliderUpdate(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (index === currentActive && isDragging.current) {
      handleSliderUpdate(e.clientX)
    }
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  // Global mouseup listener for smooth drag release anywhere
  useEffect(() => {
    const onGlobalMouseUp = () => {
      isDragging.current = false
      isMobileDragging.current = false
    }
    window.addEventListener('mouseup', onGlobalMouseUp)
    window.addEventListener('touchend', onGlobalMouseUp)
    return () => {
      window.removeEventListener('mouseup', onGlobalMouseUp)
      window.removeEventListener('touchend', onGlobalMouseUp)
    }
  }, [])

  return (
    <section
      className={styles.momentSection}
      aria-label="Editorial beauty showcase and before-after transformations"
      onMouseUp={handleMouseUp}
    >
      {/* Desktop Horizontal Accordion Gallery with Before & After Slider */}
      <div
        ref={mediaRef}
        className={styles.accordionContainer}
        onMouseLeave={() => {
          setHoveredIndex(null)
          isDragging.current = false
        }}
      >
        {STRIP_IMAGES.map((strip, index) => {
          const isExpanded = currentActive === index

          return (
            <div
              key={strip.id}
              ref={isExpanded ? activeStripRef : null}
              className={`${styles.strip} ${isExpanded ? styles.stripExpanded : styles.stripCollapsed}`}
              style={{ flex: getFlexValue(index) }}
              onMouseEnter={() => {
                setHoveredIndex(index)
                setActiveIndex(index)
              }}
              onFocus={() => {
                setHoveredIndex(index)
                setActiveIndex(index)
              }}
              onMouseDown={(e) => handleMouseDown(e, index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              tabIndex={0}
              role="region"
              aria-label={`Transformation for ${strip.label}`}
            >
              {/* Layer 1: AFTER image (Full background) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={strip.afterSrc}
                alt={strip.afterAlt}
                className={styles.stripImage}
                loading="lazy"
                draggable={false}
              />

              {/* Layer 2: BEFORE image (Revealed via clip-path based on slider position) */}
              {isExpanded ? (
                <div
                  className={styles.beforeImageContainer}
                  style={{
                    clipPath: `inset(0 calc(100% - ${sliderPos}%) 0 0)`,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={strip.beforeSrc}
                    alt={strip.beforeAlt}
                    className={styles.stripImage}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ) : null}

              {/* Layer 3: Interactive Slider Handle (Visible only when strip is expanded) */}
              {isExpanded && (
                <div
                  className={styles.sliderHandle}
                  style={{ left: `${sliderPos}%` }}
                  aria-hidden="true"
                >
                  <div className={styles.handleLine} />
                  <div className={styles.handleKnob}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                      <polyline
                        points="9 18 15 12 9 6"
                        style={{ transform: 'translateX(6px)' }}
                      />
                    </svg>
                  </div>
                  <div className={styles.handleLine} />
                </div>
              )}

              {/* Layer 4: Transformation Badges & Prompt */}
              {isExpanded && (
                <div className={styles.sliderControlsOverlay} aria-hidden="true">
                  <div className={styles.badgeGroup}>
                    <span className={`${styles.compareBadge} ${styles.badgeBefore}`}>
                      BEFORE
                    </span>
                    <span className={styles.instructionPill}>
                      <span className={styles.dragDot} />
                      SLIDE TO COMPARE
                    </span>
                    <span className={`${styles.compareBadge} ${styles.badgeAfter}`}>
                      AFTER
                    </span>
                  </div>
                </div>
              )}

              {/* Subtle Label on Collapsed Strips */}
              {!isExpanded && (
                <div className={styles.collapsedLabelWrapper} aria-hidden="true">
                  <span className={styles.collapsedLabel}>{strip.label}</span>
                </div>
              )}
            </div>
          )
        })}

        {/* Dark overlay for ambient mood and contrast */}
        <div className={styles.stripOverlay} aria-hidden="true" />
      </div>

      {/* Mobile Fallback: Full Interactive Slider Card (<768px) */}
      <div className={styles.mobileMediaContainer}>
        {/* Look Selector Pills */}
        <div className={styles.mobileLookTabs} role="tablist" aria-label="Transformation Looks">
          {STRIP_IMAGES.map((item, idx) => (
            <button
              key={item.id}
              className={`${styles.mobileTabBtn} ${mobileActive === idx ? styles.mobileTabBtnActive : ''}`}
              onClick={() => {
                setMobileActive(idx)
                setMobileSliderPos(50)
              }}
              role="tab"
              aria-selected={mobileActive === idx}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* Mobile Before/After Slider Area */}
        <div
          ref={mobileContainerRef}
          className={styles.mobileSliderWrapper}
          onTouchStart={(e) => {
            isMobileDragging.current = true
            handleMobileSliderUpdate(e.touches[0].clientX)
          }}
          onTouchMove={(e) => {
            if (isMobileDragging.current) {
              handleMobileSliderUpdate(e.touches[0].clientX)
            }
          }}
          onTouchEnd={() => {
            isMobileDragging.current = false
          }}
          onClick={(e) => handleMobileSliderUpdate(e.clientX)}
        >
          {/* Base AFTER image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={STRIP_IMAGES[mobileActive].afterSrc}
            alt={STRIP_IMAGES[mobileActive].afterAlt}
            className={styles.mobileImage}
            loading="lazy"
          />

          {/* Clipped BEFORE image */}
          <div
            className={styles.mobileBeforeWrapper}
            style={{ clipPath: `inset(0 calc(100% - ${mobileSliderPos}%) 0 0)` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={STRIP_IMAGES[mobileActive].beforeSrc}
              alt={STRIP_IMAGES[mobileActive].beforeAlt}
              className={styles.mobileImage}
              loading="lazy"
            />
          </div>

          {/* Mobile Divider Handle */}
          <div
            className={styles.sliderHandle}
            style={{ left: `${mobileSliderPos}%` }}
            aria-hidden="true"
          >
            <div className={styles.handleLine} />
            <div className={styles.handleKnob}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="8 16 4 12 8 8" />
                <polyline points="16 8 20 12 16 16" />
              </svg>
            </div>
            <div className={styles.handleLine} />
          </div>

          {/* Mobile Badges — Pinned to sides so face and center are never obscured */}
          <span className={`${styles.mobileSideBadge} ${styles.mobileBadgeLeft}`} aria-hidden="true">
            BEFORE
          </span>
          <span className={`${styles.mobileSideBadge} ${styles.mobileBadgeRight}`} aria-hidden="true">
            AFTER
          </span>

          <div className={styles.mobileOverlay} />
        </div>
      </div>

      {/* Editorial Floating Text Overlay */}
      <div className={styles.contentContainer}>
        <div ref={badgeRef} className={styles.minimalBadge}>
          <div className={styles.tagWrapper}>
            <span className={styles.tag}>{tag}</span>
            <span className={styles.mobileLookTag}>
              &bull; {STRIP_IMAGES[mobileActive].label}
            </span>
          </div>
          <p className={styles.headline}>&ldquo;{headline}&rdquo;</p>
        </div>
      </div>
    </section>
  )
}
