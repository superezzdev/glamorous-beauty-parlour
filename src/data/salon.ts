/**
 * GLAMOROUS MAKEUP & BEAUTY STUDIO — Business Data
 * Single source of truth for all business information.
 * Update this file to propagate changes across the entire site.
 *
 * Makeup Artist: Sabreen Siddiqui
 * Location: Saraimeer, Azamgarh
 */

export interface Address {
  line1: string
  line2: string
  city: string
  district: string
  state: string
  pincode: string
  country: string
  formatted: string
}

export interface OpeningHours {
  day: string
  hours: string
  closed?: boolean
  /** true = not yet verified with business owner */
  placeholder?: boolean
}

export interface InstagramAccount {
  name?: string
  handle: string
  url: string
  label: string
}

export interface GeoCoordinates {
  latitude: number | null
  longitude: number | null
}

export interface SalonData {
  name: string
  artistName: string
  tagline: string
  description: string
  phone: string
  phoneRaw: string
  phoneDisplay: string
  phoneSecondary: string
  phoneSecondaryDisplay: string
  whatsapp: string
  whatsappUrl: string
  instagram: InstagramAccount[]
  facebookUrl: string
  address: Address
  googleMapsUrl: string
  /** [PLACEHOLDER B03] — generate from Google Maps embed */
  googleMapsEmbedUrl: string
  hours: OpeningHours[]
  geo: GeoCoordinates
  domain: string
  email: string | null
}

export const salon: SalonData = {
  name: 'Glamorous Makeup & Beauty Studio',
  artistName: 'Sabreen Siddiqui',
  tagline: 'Bridal aur Occasion Makeup by Sabreen — Saraimeer, Azamgarh',
  description:
    'Glamorous Makeup & Beauty Studio — Saraimeer, Azamgarh mein ek boutique makeup aur beauty studio. Bridal makeup, party glam, hair styling, aur skin care mein expert — sabka kaam kiya jaata hai patience, precision, aur care ke saath.',

  phone: '+917007875415',
  phoneRaw: '917007875415',
  phoneDisplay: '+91 70078 75415',
  phoneSecondary: '+919833260461',
  phoneSecondaryDisplay: '+91 98332 60461',
  whatsapp: '+917007875415',
  whatsappUrl:
    'https://wa.me/917007875415?text=Hi%20Glamorous!%20Main%20ek%20appointment%20book%20karna%20chahti%20hoon.',

  instagram: [
    {
      name: 'SABREEN',
      handle: '@makeup_by_sabreen_786',
      url: 'https://www.instagram.com/makeup_by_sabreen_786',
      label: 'Sabreen Siddiqui',
    },
  ],

  facebookUrl: '#', // [PLACEHOLDER] — Facebook link add karein

  address: {
    line1: '1st Floor, Mumtaz Bangle Store',
    line2: 'Sabji Mandi Rd',
    city: 'Saraimeer',
    district: 'Azamgarh',
    state: 'Uttar Pradesh',
    pincode: '276305',
    country: 'India',
    formatted: '1st Floor, Mumtaz Bangle Store, Sabji Mandi Rd, Saraimeer, Azamgarh, Uttar Pradesh 276305, India',
  },

  googleMapsUrl: 'https://maps.app.goo.gl/LEeeeG6BkDa33Xdc6',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919845.5223773757!2d81.7900423566487!3d25.765721827755552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991b3f77940b285%3A0x287f57fa8f6e5c34!2sGlamorous%20(makeup%20%26%20beauty)!5e0!3m2!1sen!2sin!4v1788072712328!5m2!1sen!2sin',

  hours: [
    { day: 'Monday – Sunday', hours: '10:00 AM – 8:00 PM' },
  ],

  geo: {
    latitude: 25.7657,
    longitude: 81.7900,
  },

  domain: 'https://glamorous.in', // [PLACEHOLDER B04] — TBD by owner
  email: null, // [PLACEHOLDER B05] — verify with business owner
}
