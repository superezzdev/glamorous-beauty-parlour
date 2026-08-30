/**
 * GLAMOROUS — Gallery Image Manifest
 * Art-directed exhibition catalog of studio artistry and bridal work in Sarai Meer.
 */

export type GalleryCategory = 'all' | 'bridal' | 'makeup' | 'hair' | 'beauty' | 'details'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  title: string
  category: 'bridal' | 'makeup' | 'hair' | 'beauty' | 'details'
  aspectRatio: string
  isFeature?: boolean
  description?: string
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'SABHI (ALL)' },
  { id: 'bridal', label: 'BRIDAL' },
  { id: 'makeup', label: 'PARTY MAKEUP' },
  { id: 'hair', label: 'HAIR STYLING' },
  { id: 'beauty', label: 'SKIN & CARE' },
  { id: 'details', label: 'DETAILS & NAILS' },
]

export const galleryImages: GalleryImage[] = [
  // ── Bridal ────────────────────────────────────────────────────
  {
    id: 'g-bridal-01',
    src: '/images/bridal/bridal-hero.png',
    alt: 'Traditional crimson red lehenga aur kundan jewelry mein royal Indian bride look Sarai Meer',
    title: 'Heritage Crimson Dulhan',
    category: 'bridal',
    aspectRatio: '3/4',
    isFeature: true,
    description: 'High-definition bridal base, traditional red lip aur heavy gold jewellery setting ke saath timeless dulhan look.',
  },
  {
    id: 'g-bridal-02',
    src: '/images/bridal/bridal-1.png',
    alt: 'Close-up gold shimmer eye makeup aur maang tikka detailing Sarai Meer',
    title: 'Gilded Eye Art & Maang Tikka',
    category: 'bridal',
    aspectRatio: '4/5',
    description: 'Delicate gold shadow gradation, sharp micro-winged liner aur pearl maang tikka setting.',
  },
  {
    id: 'g-bridal-03',
    src: '/images/bridal/bridal-2.png',
    alt: 'Champagne embroidered dupatta aur soft contour ke saath contemporary pastel bride',
    title: 'Champagne Veil Modern Dulhan',
    category: 'bridal',
    aspectRatio: '16/9',
    isFeature: true,
    description: 'Contemporary pastel bridal lehenga aur sheer embroidered veil ke saath subtle modern glow.',
  },
  {
    id: 'g-bridal-04',
    src: '/images/before-after/after-img-a1.png',
    alt: 'Sarai Meer studio mein glowing bridal portrait aur natural skin finish',
    title: 'Radiant Royal Bridal Transformation',
    category: 'bridal',
    aspectRatio: '3/4',
    description: 'Camera lights aur wedding reception ke liye flawless HD complexion jo natural warmth ko highlight kare.',
  },
  {
    id: 'g-bridal-05',
    src: '/images/before-after/after-img-a3.png',
    alt: 'Deep maroon lehenga aur matha patti ke saath classic Indian bride look',
    title: 'Maroon Elegance Dulhan',
    category: 'bridal',
    aspectRatio: '2/3',
    description: 'Custom dupatta draping aur sculpted features ke saath classic traditional bridal beauty.',
  },

  // ── Makeup ────────────────────────────────────────────────────
  {
    id: 'g-makeup-01',
    src: '/images/services/party-makeup.png',
    alt: 'Bronze undertones aur glossy nude lip ke saath evening party makeup',
    title: 'Glowing Bronze Party Glam',
    category: 'makeup',
    aspectRatio: '16/9',
    isFeature: true,
    description: 'Warm golden hues, seamless blending aur satin finish ke saath reception aur party-ready look.',
  },
  {
    id: 'g-makeup-02',
    src: '/images/services/party-1.png',
    alt: 'Bold eyeliner aur sculpted cheekbones ke saath high-glam makeup',
    title: 'Dimensional Engagement Glam',
    category: 'makeup',
    aspectRatio: '1/1',
    description: 'Night parties aur reception lighting ke liye bold smokey eye makeup aur sharp contouring.',
  },
  {
    id: 'g-makeup-03',
    src: '/images/services/party-2.png',
    alt: 'Coral blush aur shimmer lid ke saath festive celebration makeup',
    title: 'Festive Coral Radiance',
    category: 'makeup',
    aspectRatio: '3/4',
    description: 'Fresh, breathable event makeup jo aapki natural skin glow aur features ko enhance kare.',
  },
  {
    id: 'g-makeup-04',
    src: '/images/before-after/after-img-a2.png',
    alt: 'Royal kundan glam makeup transformation portrait',
    title: 'Royal Kundan Glamour',
    category: 'makeup',
    aspectRatio: '4/5',
    description: 'Flawless camera-ready makeup base with glowing highlights and defined brows.',
  },

  // ── Hair ──────────────────────────────────────────────────────
  {
    id: 'g-hair-01',
    src: '/images/services/hair-transform.png',
    alt: 'Bridal floral hairstyle aur hair transformation in Sarai Meer',
    title: 'Floral Romance Bridal Styling',
    category: 'hair',
    aspectRatio: '4/5',
    isFeature: true,
    description: 'Textured bridal hairstyle jo heavy dupatta ka weight aasaani aur comfort ke saath sambhale.',
  },
  {
    id: 'g-hair-02',
    src: '/images/before-after/after-img-a4.png',
    alt: 'Celebration hair and festive makeup transformation',
    title: 'Celebration Styling & Hold',
    category: 'hair',
    aspectRatio: '3/4',
    description: 'Long-lasting textured hair styling and fresh makeup for weddings and events.',
  },

  // ── Beauty & Skin ─────────────────────────────────────────────
  {
    id: 'g-beauty-01',
    src: '/images/services/skin-care.png',
    alt: 'Hydrating facial treatment ke baad glowing glass skin',
    title: 'Glass Skin Facial Glow',
    category: 'beauty',
    aspectRatio: '1/1',
    description: 'Deep hydration aur relaxing treatment ke baad clean, luminous aur radiant skin complexion.',
  },
  {
    id: 'g-beauty-02',
    src: '/images/services/haldi.png',
    alt: 'Haldi celebration makeup and radiant skin glow',
    title: 'Haldi Celebration Glow',
    category: 'beauty',
    aspectRatio: '3/4',
    description: 'Fresh, vibrant, dewy haldi ceremony look customized for wedding rituals.',
  },
  {
    id: 'g-beauty-03',
    src: '/images/before-after/after-img-a5.png',
    alt: 'Nourishing skin detox aur facial treatment at Glamorous Studio',
    title: 'Nourishing Skin Detox Treatment',
    category: 'beauty',
    aspectRatio: '4/5',
    description: 'Skin detox aur hydrating serum facial jo skin ko andar se healthy aur glowing banaye.',
  },

  // ── Details & Ornamentation ───────────────────────────────────
  {
    id: 'g-details-01',
    src: '/images/services/mehndi-makeup.png',
    alt: 'Intricate bridal mehendi patterns aur traditional gold ornaments',
    title: 'Bridal Mehendi & Heritage Details',
    category: 'details',
    aspectRatio: '1/1',
    isFeature: true,
    description: 'Bareek henna artistry aur traditional bridal adornments ka timeless close-up.',
  },
  {
    id: 'g-details-02',
    src: '/images/before-after/after-img-a6.png',
    alt: 'Signature studio glow finish and bridal details',
    title: 'Signature Studio Finish',
    category: 'details',
    aspectRatio: '1/1',
    description: 'Hand-crafted bridal details and glowing finish tailored for every bride.',
  },
]
