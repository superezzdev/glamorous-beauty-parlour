import Link from 'next/link'
import { salon } from '@/data/salon'
import { footerLinks, ctaLink } from '@/data/navigation'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        {/* ── Top Grid ─────────────────────────────────────────── */}
        <div className={styles.top}>
          {/* 1. Brand & Identity */}
          <div className={styles.brand}>
            <Link href="/" className={styles.brandHeader} aria-label="Glamorous Home">
              <span className={styles.wordmark}>{salon.name}</span>
              <span className={styles.tagline}>MAKEUP &amp; BEAUTY</span>
            </Link>
            <p className={styles.description}>
              Saraimeer, Azamgarh mein ek boutique makeup &amp; bridal studio.
              Sabreen Siddiqui ke haath se personalized, glowing looks.
            </p>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeText}>Saraimeer &middot; Azamgarh, UP</span>
            </div>
          </div>

          {/* 2. Navigation */}
          <nav className={styles.nav} aria-label="Footer navigation">
            <p className={`${styles.navHeading} label`}>Navigate</p>
            <ul className={styles.navLinks} role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    <span className={styles.linkText}>{link.label}</span>
                    <span className={styles.linkArrow} aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. Studio & Contact */}
          <div className={styles.contact}>
            <p className={`${styles.navHeading} label`}>Find Us</p>

            {/* Address */}
            <address className={styles.addressBlock}>
              <p className={styles.addressLinePrimary}>{salon.address.city}</p>
              <p className={styles.addressLineSecondary}>
                {salon.address.district}, {salon.address.state} {salon.address.pincode}
              </p>
              <a
                href={salon.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapActionLink}
                aria-label="Get directions on Google Maps"
              >
                <svg className={styles.iconSm} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>Get Directions &rarr;</span>
              </a>
            </address>

            {/* Contact details */}
            <div className={styles.contactChannels}>
              <a
                href={`tel:${salon.phone}`}
                className={styles.contactItem}
                aria-label={`Call us at ${salon.phoneDisplay}`}
              >
                <svg className={styles.iconSm} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{salon.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${salon.phoneSecondary}`}
                className={styles.contactItem}
                aria-label={`Call us at ${salon.phoneSecondaryDisplay}`}
              >
                <svg className={styles.iconSm} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{salon.phoneSecondaryDisplay}</span>
              </a>

              <a
                href={salon.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
                aria-label="Chat with us on WhatsApp"
              >
                <svg className={styles.iconSm} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>WhatsApp Karein &rarr;</span>
              </a>

              <div className={styles.socialRow}>
                {salon.instagram.map((ig) => (
                  <a
                    key={ig.handle}
                    href={ig.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialPill}
                    aria-label={`Follow ${ig.name} on Instagram`}
                  >
                    <svg className={styles.iconXs} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span>{ig.name === 'Sabreen' ? 'SABREEN' : ig.name}</span>
                  </a>
                ))}

                <a
                  href={salon.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialPill}
                  aria-label="Follow on Facebook"
                >
                  <svg className={styles.iconXs} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* 4. Reservations & Hours */}
          <div className={styles.cta}>
            <p className={`${styles.navHeading} label`}>Reservations</p>
            <p className={styles.ctaHeadline}>Aapka moment ready hai?</p>
            <p className={styles.ctaSubtext}>
              Bridal session ya parlour appointment advance mein book karein.
            </p>
            <Link href={ctaLink.href} className="btn btn-primary">
              Abhi Appointment Book Karein
            </Link>
            <div className={styles.hoursNote}>
              <span className={styles.hoursTitle}>Studio Hours</span>
              <span className={styles.hoursTime}>Mon – Sat: 10 AM – 8 PM (Sun: By Appt)</span>
            </div>
          </div>
        </div>

        {/* ── Signature Statement Brand Banner ── */}
        <div className={styles.brandBanner} aria-hidden="true">
          <span className={styles.giantWordmark}>GLAMOROUS</span>
          <span className={styles.subWordmark}>MAKEUP &amp; BEAUTY</span>
        </div>

        {/* ── Bottom ──────────────────────────────────────────── */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} {salon.name} Studio. All rights reserved.
          </p>
          <div className={styles.bottomMeta}>
            <span>Boutique Studio</span>
            <span className={styles.metaDivider}>&middot;</span>
            <span>Bridal Artistry</span>
            <span className={styles.metaDivider}>&middot;</span>
            <span>Saraimeer, Azamgarh UP</span>
          </div>
        </div>

        {/* ── Dedicated Developer Credit (Last at bottom) ──────── */}
        <div className={styles.subBottom}>
          <p className={styles.credit}>
            Build and Managed by &ndash;{' '}
            <a
              href="https://superezz.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.creditLink}
            >
              SUPEREZZ
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
