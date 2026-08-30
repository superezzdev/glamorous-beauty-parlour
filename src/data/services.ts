/**
 * GLAMOROUS MAKEUP & BEAUTY STUDIO — Services Data
 * Sabreen Siddiqui | Saraimeer, Azamgarh
 * Single source of truth for all service categories and individual offerings.
 */

export interface ServiceItem {
  id: string
  name: string
  shortDescription: string
  duration: string
  price: string
  tagline?: string
  description?: string
  highlights?: string[]
  priceRange?: string | null
  pricingNote?: string
  isSignature?: boolean
  imageUrl?: string
  imageAlt?: string
  categoryNumber: string
  categorySlug: string
}

export interface ServiceCategory {
  id: string
  number: string
  name: string
  navLabel: string
  slug: string
  tagline: string
  description: string
  icon?: string
  heroImage?: string
  services: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'makeup',
    number: '01',
    name: 'Makeup Artistry',
    navLabel: 'MAKEUP',
    slug: 'makeup',
    tagline: 'Har occasion ke liye glowing aur elegant makeup',
    description:
      'Flawless makeup jo aapki skin tone, facial features, aur personal style ke hisaab se customize kiya jaata hai.',
    icon: 'sparkles',
    heroImage: '/images/services/party-makeup.png',
    services: [
      {
        id: 'party-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Party Makeup',
        shortDescription: 'High-definition party makeup jo poori celebration tak fresh aur glowing rahe.',
        duration: '60–75 min',
        price: '₹2,500',
        tagline: 'Har party aur celebration mein sabse khaas dikhein — HD makeup ke saath.',
        description: 'High-definition makeup jo aapko har celebration mein stunning aur confident look deta hai. Sweat-proof aur long-lasting formula.',
        isSignature: true,
        imageUrl: '/images/services/party-makeup.png',
        imageAlt: 'Party makeup by Sabreen Siddiqui — Glamorous Studio Saraimeer',
      },
      {
        id: 'indian-bridal-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Indian Bridal Makeup',
        shortDescription: 'Traditional Indian bridal look — waterproof, long-lasting, aur camera-ready.',
        duration: '150–180 min',
        price: '₹10,000',
        tagline: 'Aapki shaadi ka din ho unforgettable — complete Indian bridal look ke saath.',
        description: 'Complete Indian bridal transformation jisme long-lasting bridal base, waterproof formulas, aapke features ke hisaab se eye design, aur lehenga/saree ke matching colors shamil hain.',
        isSignature: true,
        imageUrl: '/images/bridal/bridal-hero.png',
        imageAlt: 'Indian bridal makeup by Sabreen — Glamorous Studio Azamgarh',
      },
      {
        id: 'pakistani-bridal-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Pakistani Bridal Makeup',
        shortDescription: 'Royal Pakistani bridal look — bold eyes, flawless base, aur royal finish.',
        duration: '150–180 min',
        price: '₹10,000',
        tagline: 'Pakistani bridal look jo aapko banaye behad khubsurat aur royal.',
        description: 'Bold aur dramatic Pakistani bridal makeup jisme heavy contouring, defined smokey/cut-crease eyes, aur flawless radiant finish milti hai jo photos mein lajawab lagti hai.',
        isSignature: false,
        imageUrl: '/images/bridal/bridal-1.png',
        imageAlt: 'Pakistani bridal makeup by Sabreen Siddiqui — Glamorous Studio',
      },
      {
        id: 'haldi-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Haldi Makeup',
        shortDescription: 'Soft aur natural haldi look — dewy skin aur light makeup is pyari rasam ke liye.',
        duration: '45–60 min',
        price: '₹2,500',
        tagline: 'Haldi rasam mein glowing aur natural andaz paayein.',
        description: 'Soft, glowing aur light makeup jo Haldi ceremony ke liye best hai — natural dewy base, gentle eye look aur soft lips.',
        isSignature: false,
        imageUrl: '/images/services/haldi.png',
        imageAlt: 'Haldi makeup look — Glamorous Beauty Studio Saraimeer',
      },
      {
        id: 'engagement-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Engagement Makeup',
        shortDescription: 'Camera-ready engagement look jo ring ceremony se evening celebration tak perfect rahe.',
        duration: '75–90 min',
        price: '₹6,000',
        tagline: 'Ring ceremony se banquet tak fresh aur flawless — engagement look.',
        description: 'Camera-ready makeup jo ring ceremony se lekar poore evening function tak flawless bana rahe. Aapke outfit aur jewellery se perfectly matched.',
        isSignature: false,
        imageUrl: '/images/services/party-1.png',
        imageAlt: 'Engagement makeup by Sabreen Siddiqui — Azamgarh',
      },
      {
        id: 'reception-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Reception Makeup',
        shortDescription: 'Bold aur glamorous reception look — evening lights mein aur bhi glowing dikhein.',
        duration: '75–90 min',
        price: '₹10,000',
        tagline: 'Reception ki shaam mein full glam aur stunning andaz.',
        description: 'Defined smoky eyes, perfectly sculpted skin, aur bold lips jo evening reception lights mein glowing dikhte hain. Full glam look jo poori raat tikti hai.',
        isSignature: false,
        imageUrl: '/images/services/party-2.png',
        imageAlt: 'Reception evening makeup — Glamorous Makeup Studio Saraimeer',
      },
      {
        id: 'occasion-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Occasion Makeup',
        shortDescription: 'Mehendi, sangeet ya kisi bhi family function ke liye custom tailored look.',
        duration: '60–75 min',
        price: '₹2,500',
        tagline: 'Har khaas function mein best version of yourself.',
        description: 'Kisi bhi special function ke liye tailored makeup — mehendi, sangeet, family get-togethers ya graduation ceremonies ke liye perfect.',
        isSignature: false,
        imageUrl: '/images/services/mehndi-makeup.png',
        imageAlt: 'Occasion makeup — Glamorous Beauty Studio Azamgarh',
      },
      {
        id: 'home-service-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Home Service Makeup',
        shortDescription: 'Aapke ghar par professional makeup service — poore comfort aur convenience ke saath.',
        duration: 'As per service',
        price: 'Service charge + Travel extra',
        pricingNote: 'Home visit ke liye location ke hisaab se extra travel charge applicable hoga.',
        tagline: 'Aapke ghar par aayein hum — aap tension-free ready ho jaayein.',
        description: 'Aapke ghar par complete professional makeup setup. Bridal, party aur festive looks ke liye available. Location ke hisaab se travel charges shamil hote hain.',
        isSignature: false,
        imageUrl: '/images/services/party-makeup.png',
        imageAlt: 'Home service makeup by Sabreen — Saraimeer Azamgarh',
      },
    ],
  },
  {
    id: 'hair',
    number: '02',
    name: 'Hair Services',
    navLabel: 'HAIR',
    slug: 'hair',
    tagline: 'Party hairstyles, traditional bridal updos, aur professional hair care',
    description:
      'Beautiful hairstyles, secure bridal buns, hair spa aur nourishing treatments — sab kuch aapke balon ke liye.',
    icon: 'scissors',
    heroImage: '/images/services/hair-transform.png',
    services: [
      {
        id: 'hair-styling',
        categoryNumber: '02',
        categorySlug: 'hair',
        name: 'Hair Styling',
        shortDescription: 'Blow-dry, soft waves, curls, aur modern party hairstyles.',
        duration: '45–60 min',
        price: '₹1,000',
        tagline: 'Har occasion ke liye stylish aur perfect hairstyle.',
        description: 'Blow-dry, soft waves, curls aur modern party upstyles jo functions aur celebrations ke liye perfect hold dete hain.',
        isSignature: true,
        imageUrl: '/images/services/hair-transform.png',
        imageAlt: 'Hair styling — Glamorous Beauty Studio Saraimeer',
      },
      {
        id: 'hair-spa',
        categoryNumber: '02',
        categorySlug: 'hair',
        name: 'Hair Spa',
        shortDescription: 'Deep conditioning hair spa jo balon ko nourish, repair aur shiny banaye.',
        duration: '60–75 min',
        price: '₹1,500',
        tagline: 'Silky, soft aur healthy baal — rejuvenating hair spa ke baad.',
        description: 'Deep conditioning spa treatment jo damage repair karta hai, moisture lock karta hai aur natural shine deta hai. Relaxing scalp massage ke saath.',
        isSignature: false,
        imageUrl: '/images/services/hair-transform.png',
        imageAlt: 'Hair spa treatment — Glamorous Studio Azamgarh',
      },
      {
        id: 'hair-treatment',
        categoryNumber: '02',
        categorySlug: 'hair',
        name: 'Hair Treatment',
        shortDescription: 'Advanced hair treatment — damage repair, smoothing, keratin aur strengthening.',
        duration: 'Consultation required',
        price: '₹5,000 onwards',
        pricingNote: 'Price baalon ki length aur condition ke hisaab se vary karti hai.',
        tagline: 'Strong, healthy aur smooth baal — professional treatment se.',
        description: 'Keratin, smoothing aur deep repair treatment starting ₹5,000 se. Baalon ki length aur texture ke according custom plan.',
        isSignature: false,
        imageUrl: '/images/services/hair-transform.png',
        imageAlt: 'Hair treatment — Glamorous Makeup & Beauty Studio',
      },
      {
        id: 'bridal-hair',
        categoryNumber: '02',
        categorySlug: 'hair',
        name: 'Bridal Hair Styling',
        shortDescription: 'Traditional bridal buns aur updos jo heavy matha patti aur dupatta setting ke liye 100% secure hain.',
        duration: '90–120 min',
        price: 'Package mein included',
        tagline: 'Bridal updo aur dupatta setting jo poore din comfortable hold kare.',
        description: 'Heavy matha patti, maang tikka aur dupatta setting ke liye perfectly pinned bridal buns aur hairstyles. Poore din bina kisi pareshani ke set rehta hai.',
        isSignature: false,
        imageUrl: '/images/bridal/bridal-2.png',
        imageAlt: 'Bridal hair styling — Glamorous Beauty Studio Saraimeer',
      },
    ],
  },
  {
    id: 'skin',
    number: '03',
    name: 'Skin & Beauty',
    navLabel: 'SKIN',
    slug: 'skin',
    tagline: 'Nourishing facials, deep cleanup, aur beauty rituals',
    description:
      'Rejuvenating rituals jo skin ko deeply hydrate, cleanse aur naturally glowing banate hain.',
    icon: 'leaf',
    heroImage: '/images/services/skin-care.png',
    services: [
      {
        id: 'facial',
        categoryNumber: '03',
        categorySlug: 'skin',
        name: 'Facial',
        shortDescription: 'Deep hydration, gentle exfoliation, aur cooling mask glowing skin ke liye.',
        duration: '60 min',
        price: '₹1,000',
        tagline: 'Natural glow ka raaz — professional skin facial.',
        description: 'Deep hydration, dead skin exfoliation aur refreshing cooling treatment jo skin ko radiant aur glowing banata hai. Sabhi skin types ke liye suitable.',
        isSignature: true,
        imageUrl: '/images/services/skin-care.png',
        imageAlt: 'Facial treatment — Glamorous Beauty Studio Azamgarh',
      },
      {
        id: 'cleanup',
        categoryNumber: '03',
        categorySlug: 'skin',
        name: 'Cleanup',
        shortDescription: 'Deep facial cleanup jo pores saaf kare aur skin ko instant freshness de.',
        duration: '40 min',
        price: '₹500',
        tagline: 'Fresh aur clear skin — quick deep cleanup ke baad.',
        description: 'Gentle pore extraction, cleansing aur soothing mask jo skin se dirt aur excess oil hata kar instant fresh feel deta hai.',
        isSignature: false,
        imageUrl: '/images/services/skin-care.png',
        imageAlt: 'Facial cleanup — Glamorous Studio Saraimeer',
      },
      {
        id: 'waxing',
        categoryNumber: '03',
        categorySlug: 'skin',
        name: 'Waxing',
        shortDescription: 'Smooth aur hair-free skin ke liye gentle, professional waxing.',
        duration: 'As per area',
        price: '₹500 onwards',
        tagline: 'Silky smooth skin — gentle waxing service se.',
        description: 'Arms, legs, full body aur facial areas ke liye hygienic aur gentle waxing service. Smooth aur clean finish.',
        isSignature: false,
        imageUrl: '/images/services/skin-care.png',
        imageAlt: 'Waxing service — Glamorous Beauty Studio',
      },
      {
        id: 'manicure',
        categoryNumber: '03',
        categorySlug: 'skin',
        name: 'Manicure',
        shortDescription: 'Relaxing hand care — cuticle treatment, exfoliating scrub, aur clean nail polish.',
        duration: '45 min',
        price: '₹1,000',
        tagline: 'Khubsurat aur groomed haath — soothing manicure ke saath.',
        description: 'Warm hand soak, cuticle care, gentle scrub aur clean nail polish application jo haathon ko soft aur beautiful banata hai.',
        isSignature: false,
        imageUrl: '/images/services/mehndi-makeup.png',
        imageAlt: 'Manicure — Glamorous Makeup Studio Azamgarh',
      },
      {
        id: 'pedicure',
        categoryNumber: '03',
        categorySlug: 'skin',
        name: 'Pedicure',
        shortDescription: 'Complete foot care — relaxing soak, scrub, foot massage, aur nail care.',
        duration: '60 min',
        price: '₹1,000',
        tagline: 'Soft aur relaxed pair — therapeutic pedicure ke saath.',
        description: 'Warm foot soak, dead skin removal scrub, soothing foot massage aur nail care jo pairon ko soft aur healthy banata hai.',
        isSignature: false,
        imageUrl: '/images/services/skin-care.png',
        imageAlt: 'Pedicure — Glamorous Beauty Studio Saraimeer',
      },
    ],
  },
]

/** Backward compatibility alias */
export type Service = ServiceItem

/** Convenience helper: signature services */
export const signatureServices: ServiceItem[] = serviceCategories
  .flatMap((cat) => cat.services.filter((s) => s.isSignature))
