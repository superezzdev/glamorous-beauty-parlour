'use client'

import { salon } from '@/data/salon'
import styles from './CompactWhatsAppStrip.module.css'

export default function CompactWhatsAppStrip() {
  const whatsappMessage = encodeURIComponent(
    'Hi Glamorous! Mujhe aapki services aur appointments ke baare mein poochhna hai.'
  )
  const whatsappUrl = `https://wa.me/${salon.phone.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`

  return (
    <section className={styles.strip} aria-label="WhatsApp quick inquiry">
      <div className="container">
        <div className={styles.inner}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`Koi sawaal hai? WhatsApp par baat karein: ${salon.phoneDisplay}`}
          >
            <span>Koi sawaal hai? WhatsApp par baat karein:</span>
            <span className={styles.phone}>{salon.phoneDisplay}</span>
            <span className={styles.arrow} aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
