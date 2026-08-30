/**
 * GLAMOROUS MAKEUP & BEAUTY STUDIO — Bridal Page Data
 * Sabreen Siddiqui | Saraimeer, Azamgarh
 * Bridal packages, process, gallery, and FAQs.
 */

export interface BridalStoryPoint {
  id: string
  title: string
  subtitle: string
  description: string
}

export interface BridalStep {
  number: string
  title: string
  subtitle: string
  description: string
  timeline?: string
}

export interface BridalGalleryItem {
  id: string
  src: string
  alt: string
  title: string
  category: 'portraits' | 'eyes' | 'hair' | 'jewellery' | 'looks'
  aspectRatio: string
  spanCol?: string
}

export interface BridalPackage {
  id: string
  number: string
  name: string
  subtitle?: string
  description?: string
  includes: string[]
  idealFor?: string
  price: string
  priceLabel?: string
  isSignature?: boolean
}

export interface BridalFAQ {
  id: string
  question: string
  answer: string
}

/** Story section focus points */
export const bridalStoryPoints: BridalStoryPoint[] = [
  {
    id: 'story-consult',
    title: 'Consultation & Planning',
    subtitle: 'Aapki pasand aur vision',
    description:
      'Hum aapke bridal lehenga, jewellery, skin type, aur manpasand look ke baare mein detail mein baat karte hain — bina kisi jaldi ke.',
  },
  {
    id: 'story-look',
    title: 'Custom Bridal Look',
    subtitle: 'Tradition aur modern glam ka sangam',
    description:
      'Chahe aap classic royal red bride look chahein, soft champagne glow, ya contemporary subtle glam — hum har detail aapke outfit se match karte hain.',
  },
  {
    id: 'story-artistry',
    title: 'Flawless Makeup Artistry',
    subtitle: 'Skin-first, waterproof & camera-ready',
    description:
      'Indian wedding lights aur ceremonies ke liye long-lasting, waterproof products use karte hain — lightweight breathable base jo saamne aur camera dono mein flawless lage.',
  },
  {
    id: 'story-hair',
    title: 'Hair Styling & Draping',
    subtitle: 'Bridal buns, soft waves & dupatta setting',
    description:
      'Traditional floral buns se lekar soft open curls tak — secure, balanced dupatta aur maang tikka pinning jo poore din comfortable aur set rahe.',
  },
  {
    id: 'story-finishing',
    title: 'Finishing Details & Touch-Ups',
    subtitle: 'Har ek jewel aur lash bilkul perfect jagah',
    description:
      'Final moments mein hum poora waqt lete hain — jewellery adjust karna, lipstick finish karna, aur aapko event ke liye quick touch-up tips dena.',
  },
  {
    id: 'story-confidence',
    title: 'Sukoon Aur Confidence',
    subtitle: 'Jab aap aaine mein khud ko dekhein',
    description:
      'Sirf makeup se badhkar — hamare studio par aap relax ho sakti hain, aaram se saans le sakti hain, aur apne special din ke liye fully confident feel kar sakti hain.',
  },
]

/** The 4-step bridal process */
export const bridalProcessSteps: BridalStep[] = [
  {
    number: '01',
    title: 'CONSULT',
    subtitle: 'Outfit & Style Consultation',
    description:
      'Aapke bridal lehenga ya saree, jewellery colors, event lighting, aur skin preferences ko samajhte hain — aur personalized bridal look plan karte hain.',
    timeline: '4–8 hafte pehle',
  },
  {
    number: '02',
    title: 'PREPARE',
    subtitle: 'Skin Prep & Trial Session',
    description:
      'Foundation shades, eye makeup styles, aur hairstyles test karne ke liye dedicated trial. Skin ko naturally glowing banane ke liye skin prep tips bhi share karte hain.',
    timeline: '2–4 hafte pehle',
  },
  {
    number: '03',
    title: 'CREATE',
    subtitle: 'Shaadi Ke Din Ka Final Look',
    description:
      'Wedding day par hum poore dhyan aur waqt ke saath look create karte hain — long-lasting waterproof bridal base aur aapke facial features ke hisaab se customized eye design.',
    timeline: 'Celebration Ka Din',
  },
  {
    number: '04',
    title: 'REVEAL',
    subtitle: 'Dupatta Setting & Final Look',
    description:
      'Final dupatta aur matha patti pinning, delicate finishing touches, aur woh special pal jab aap mirror mein apna complete royal look dekhti hain.',
    timeline: 'Final Reveal & Entry',
  },
]

/** Alias for backward compatibility */
export const bridalProcess = bridalProcessSteps

/** Bridal gallery showcase items */
export const bridalGalleryShowcase: BridalGalleryItem[] = [
  {
    id: 'bg-01',
    src: '/images/bridal/bridal-hero.png',
    alt: 'Regal crimson bridal portrait with ornate gold embroidery and flawless complexion in Sarai Meer',
    title: 'Regal Crimson & Kundan Bride',
    category: 'portraits',
    aspectRatio: '4/5',
  },
  {
    id: 'bg-02',
    src: '/images/bridal/bridal-1.png',
    alt: 'Glowing bridal beauty close-up featuring sculpted features and bridal maang tikka in Sarai Meer',
    title: 'Radiant Heritage Gold Look',
    category: 'portraits',
    aspectRatio: '3/4',
  },
  {
    id: 'bg-03',
    src: '/images/bridal/bridal-2.png',
    alt: 'Detailed eye makeup with soft gold shimmer and precision winged liner in Sarai Meer',
    title: 'Golden Shimmer Eye Artistry',
    category: 'eyes',
    aspectRatio: '1/1',
  },
  {
    id: 'bg-04',
    src: '/images/services/hair-transform.png',
    alt: 'Intricate bridal hair updo adorned with fresh floral baby\'s breath in Sarai Meer',
    title: 'Floral Romance Bridal Updo',
    category: 'hair',
    aspectRatio: '4/5',
  },
  {
    id: 'bg-05',
    src: '/images/services/mehndi-makeup.png',
    alt: 'Close-up of bridal mehendi details, floral accessories, and kundan bangles in Sarai Meer',
    title: 'Mehendi & Kundan Details',
    category: 'jewellery',
    aspectRatio: '1/1',
  },
  {
    id: 'bg-06',
    src: '/images/services/haldi.png',
    alt: 'Complete bridal celebration look with radiant glow in Sarai Meer',
    title: 'Haldi & Celebration Radiance',
    category: 'looks',
    aspectRatio: '16/9',
  },
]

/** Bridal package tiers */
export const bridalPackages: BridalPackage[] = [
  {
    id: 'pkg-essential',
    number: '01',
    name: 'Essential Bridal Package',
    subtitle: 'Solo ceremony makeup + basic hair styling',
    price: '₹7,999',
    includes: [
      'Main ceremony ke liye complete bridal makeup',
      'Basic bridal hair styling aur setting',
      'Premium lash application aur brow shaping',
      'Essential dupatta setting aur pinning',
    ],
    idealFor: 'Intimate weddings aur simple ceremonies ke liye',
  },
  {
    id: 'pkg-full-bridal',
    number: '02',
    name: 'Signature HD Bridal Package',
    subtitle: 'HD makeup + elaborate hair + dupatta draping',
    price: '₹9,999',
    isSignature: true,
    includes: [
      'HD waterproof bridal makeup contour & highlight ke saath',
      'Elaborate bridal hair styling flowers placement ke saath',
      'Traditional dupatta draping aur veil setting',
      'Complete jewellery aur maang tikka secure pinning',
    ],
    idealFor: 'Main wedding ceremony ke full bridal look ke liye',
  },
  {
    id: 'pkg-premium',
    number: '03',
    name: 'Royal Luxury Bridal Package',
    subtitle: 'Pre-bridal + trial + ceremony + reception',
    price: '₹10,999',
    includes: [
      'Pre-bridal skin consultation aur custom prep plan',
      'Full bridal trial session makeup aur hair ke liye',
      'Main wedding ceremony aur reception makeup',
      'Multi-event hair styling aur complete royal draping',
    ],
    idealFor: 'Complete multi-day wedding celebration ke liye',
  },
]

/** Bridal FAQ items */
export const bridalFAQs: BridalFAQ[] = [
  {
    id: 'faq-early',
    question: 'Kitne din pehle booking karni chahiye?',
    answer:
      'Hum recommend karte hain ki aap 2 se 6 mahine pehle booking kar lein — khaas taur par peak wedding season (October se March) mein. Kyunki hum ek din mein limited brides attend karte hain taaki poora dhyan de sakein, dates bohot jaldi reserve ho jaati hain.',
  },
  {
    id: 'faq-trials',
    question: 'Kya bridal trial session available hota hai?',
    answer:
      'Haan, bridal trial session zaroor recommend kiya jaata hai. Trial mein hum foundation shades match karte hain, eye makeup styles aur lipstick shades test karte hain, aur sample hairstyles banate hain — taaki shaadi ke din aap 100% satisfied aur relaxed rahein.',
  },
  {
    id: 'faq-bring',
    question: 'Consultation ke waqt humein kya saath laana chahiye?',
    answer:
      'Apne bridal lehenga/saree ki photos, jewellery sets (ya unki reference pictures), aur koi specific makeup styles jo aapko pasand hon. Agar sensitive skin ya koi allergy hai, toh pehle hi bata dein taaki hum suitable products ready rakhein.',
  },
  {
    id: 'faq-custom',
    question: 'Kya mere features ke anusaar customized look milega?',
    answer:
      'Bilkul! Har bride ka apna individual style, facial features aur comfort level hota hai. Chahe aapko soft dewy natural glow chahiye, dramatic smokey eyes, ya traditional royal bridal glam — hum har ek detail aapke mutabiq personalize karte hain.',
  },
  {
    id: 'faq-combine',
    question: 'Kya bridal ke saath doosri beauty services combine kar sakte hain?',
    answer:
      'Ji haan! Bridal makeup ke saath aap pre-bridal facials, body polishing, hair spa treatments, manicure, pedicure, aur nail art add kar sakti hain. Sath hi bridesmaids aur family members ke makeup ke liye bhi pehle se slot book kiya ja sakta hai.',
  },
]
