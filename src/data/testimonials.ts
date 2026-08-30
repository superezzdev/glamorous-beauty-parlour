/**
 * GLAMOROUS MAKEUP & BEAUTY STUDIO — Testimonials Data
 * Sabreen Siddiqui | Saraimeer, Azamgarh
 *
 * ⚠️ PLACEHOLDER NOTICE [T01]:
 * Ye placeholder testimonials hain. Launch se pehle verified
 * Google / Instagram reviews se replace karein.
 */

export type TestimonialPlatform = 'google' | 'instagram' | 'direct'

export interface Testimonial {
  id: string
  authorName: string
  authorInitials: string
  location?: string
  service?: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
  /** ISO date string: YYYY-MM-DD */
  date: string
  platform: TestimonialPlatform
  verified: boolean
  isFeatured?: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 't01',
    authorName: 'Zainab Fatima',
    authorInitials: 'ZF',
    location: 'Saraimeer',
    service: 'Bridal Makeup',
    rating: 5,
    text: 'Meri wedding ka makeup exactly waisa tha jaisa maine sapna dekha tha. Itna lightweight tha ki pura din comfortable raha, photos mein bhi flawless laga, aur subah se raat tak lastaa raha. Sabreen ne mujhe itna calm aur confident feel karaaya — bohot shukriya!',
    date: '2026-02-14',
    platform: 'google',
    verified: true,
    isFeatured: true,
  },
  {
    id: 't02',
    authorName: 'Aiman Khan',
    authorInitials: 'AK',
    location: 'Azamgarh',
    service: 'Reception Makeup',
    rating: 5,
    text: 'Saraimeer mein sabse best makeup studio bina doubt ke — Glamorous hai. Eye makeup aur hair styling mein jo attention to detail thi, woh amazing thi. Reception mein har kisi ne meri look ki tarif ki!',
    date: '2026-01-20',
    platform: 'instagram',
    verified: true,
    isFeatured: true,
  },
  {
    id: 't03',
    authorName: 'Sana Parveen',
    authorInitials: 'SP',
    location: 'Saraimeer',
    service: 'Engagement & Party Makeup',
    rating: 5,
    text: 'Sabreen apki natural features ko enhance karti hain bina overdone kiye — yeh unki khaas baat hai. Studio ka atmosphere bohot warm aur professional hai. Sab ko highly recommend karti hoon!',
    date: '2026-02-05',
    platform: 'google',
    verified: true,
    isFeatured: true,
  },
  {
    id: 't04',
    authorName: 'Rukhsar Ansari',
    authorInitials: 'RA',
    location: 'Azamgarh',
    service: 'Haldi Makeup',
    rating: 5,
    text: 'Haldi look ke liye ayi thi — Sabreen ne itna pyara natural aur glowing look banaya. Sab photos mein amazingly aayi hoon. Puri family ne Glamorous ki tarif ki. Ab sari functions yahin se!',
    date: '2026-03-10',
    platform: 'instagram',
    verified: true,
    isFeatured: false,
  },
]
