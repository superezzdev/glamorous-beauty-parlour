# ✦ Glamorous Makeup & Beauty Studio ✦

> **Luxury Bridal, Party & Aesthetics Experience by Sabreen Siddiqui**  
> *Saraimeer, Azamgarh, Uttar Pradesh, India*

[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://turbo.build/pack)
[![Lenis Smooth Scroll](https://img.shields.io/badge/Lenis-Smooth_Scroll-FF5722?style=for-the-badge)](https://github.com/darkroomengineering/lenis)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

---

## 📖 Overview

**Glamorous Makeup & Beauty Studio** is a digital web platform and booking portal crafted for **Sabreen Siddiqui**'s boutique makeup studio in Saraimeer, Azamgarh. 

Engineered with high aesthetic standards, this application combines an editorial luxury dark-mode design with fluid micro-interactions, responsive typography, localized bilingual copy (Hindi/Hinglish & English), and an instant WhatsApp-powered booking workflow.

---

## ✨ Key Features

- **💎 Editorial Luxury Design System**: Deep obsidian backdrop (`#080808`), warm champagne gold accents (`#C9A84C`), and typography pairing (*Cormorant Garamond*, *DM Sans*, and *Space Mono*).
- **🔄 Interactive Before/After Transformation Slider**: High-performance interactive comparison tool showcasing real client artistry.
- **👰 Dedicated Bridal Suite (`/bridal`)**: Comprehensive showcase of signature Pakistani and Indian bridal makeovers, step-by-step bridal journey, packages, and preparation FAQs.
- **💄 Complete Services & Pricing Menu (`/services`)**: Categorized service listings covering Bridal & Pre-Bridal, Party Makeup, Hair Styling & Treatments, Skin Care & Facials, Waxing, Threading, and Mehendi.
- **📸 Filterable Artistry Gallery (`/gallery`)**: Dynamic, category-filtered photo gallery with smooth transitions and lightbox previews.
- **🎓 Makeup Academy & Masterclasses (`/makeup-classes`)**: Academy syllabus overview, hands-on batch information, student benefits, certification, and enrollment details.
- **📱 Instant WhatsApp & Phone Booking (`/contact`)**: Form with pre-filled WhatsApp message generation and direct calling shortcuts.
- **🗺️ Local SEO & Google Maps**: Embedded interactive map, complete address directions, and rich `LocalBusiness` JSON-LD schema for local search prominence.
- **🚀 Ultra-Fast PWA & Offline Support**: Progressive Web App with custom service worker caching, manifest, and dedicated offline experience (`/offline`).
- **⚡ Fluid Interactions**: Smooth momentum scrolling with Lenis, GSAP-driven micro-animations, and custom desktop cursor effects.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack |
| **UI Library** | [React 19](https://react.dev/) / [React DOM 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | Vanilla CSS Modules with custom design tokens & responsive units |
| **Animations** | [GSAP](https://gsap.com/) (`@gsap/react`), Lenis Smooth Scroll |
| **Typography** | `next/font/google` (*Cormorant Garamond*, *DM Sans*, *Space Mono*) |
| **PWA & Offline** | Web App Manifest + Custom Service Worker (`sw.js`) |
| **SEO & Meta** | OpenGraph, Twitter Cards, Semantic Schema.org (`LocalBusiness`, `BeautySalon`), Dynamic Sitemap & Robots |

---

## 📂 Project Structure

```
parlour-main/
├── public/                    # Static assets, icons, manifest, service worker
│   ├── icons/                 # PWA & favicon app icons
│   ├── images/                # Studio, bridal, and service imagery
│   ├── og-home.jpg            # Open Graph social preview banner
│   └── sw.js                  # Service worker for offline caching
├── src/
│   ├── app/                   # Next.js App Router pages and layouts
│   │   ├── about/             # About Sabreen Siddiqui & Studio page
│   │   ├── bridal/            # Signature Bridal collection page
│   │   ├── contact/           # Contact details, map, & booking page
│   │   ├── gallery/           # Filterable artistry showcase page
│   │   ├── makeup-classes/    # Academy courses & masterclasses page
│   │   ├── offline/           # PWA offline fallback route
│   │   ├── services/          # Full service menu & pricing page
│   │   ├── thank-you/         # Booking inquiry confirmation page
│   │   ├── layout.tsx         # Root layout with fonts, metadata, & global wrappers
│   │   ├── manifest.ts        # Dynamic Web App Manifest
│   │   ├── page.tsx           # Cinematic Studio Homepage
│   │   ├── robots.ts          # Search engine crawler directives
│   │   └── sitemap.ts         # Dynamic XML Sitemap generator
│   ├── components/
│   │   ├── global/            # Navbar, Footer, CursorEffect, ScrollProgress, PWA
│   │   ├── providers/         # Lenis smooth-scroll context provider
│   │   ├── sections/          # Page sections (Hero, BeforeAfter, ServicesGrid, etc.)
│   │   └── ui/                # Buttons, PageLoader, Cards, and Modals
│   ├── data/                  # Single source of truth (Data Layer)
│   │   ├── bridal.ts          # Bridal packages, timeline, and FAQs
│   │   ├── gallery.ts         # Gallery items and category filters
│   │   ├── makeupClasses.ts   # Academy syllabus, modules, and pricing
│   │   ├── navigation.ts      # Header and footer navigation links
│   │   ├── salon.ts           # Business info, phone, address, coordinates, hours
│   │   ├── services.ts        # Comprehensive categorized service listings
│   │   └── testimonials.ts    # Client reviews and transformations
│   ├── hooks/                 # Custom React hooks (useScrollLock, etc.)
│   ├── styles/
│   │   └── globals.css        # Global CSS variables, reset, and typography tokens
│   └── utils/
│       └── schema.ts          # JSON-LD Structured Data Schema generator
├── next.config.ts             # Next.js configuration (image formats, indicators)
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript compiler configuration
└── README.md                  # Project documentation
```

---

## ⚙️ Configuration & Data Management

All studio business details, services, pricing, and contact information are centralized in the `src/data/` directory:

- **`src/data/salon.ts`**: Update studio address, phone numbers, WhatsApp link, Instagram handles, Google Maps embed URL, and opening hours.
- **`src/data/services.ts`**: Add, edit, or adjust beauty services, categories, pricing, and descriptions.
- **`src/data/bridal.ts`**: Update bridal packages, inclusions, and bridal FAQs.
- **`src/data/makeupClasses.ts`**: Update masterclass schedules, academy course curriculum, and fees.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, `yarn`, or `bun`

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/superezzdev/glamorous-beauty-parlour.git
cd glamorous-beauty-parlour
npm install
```

### 2. Running Locally

Start the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Production Build

To verify and create an optimized production build:

```bash
npm run build
npm run start
```

### 4. Code Linting

Run ESLint to ensure code quality:

```bash
npm run lint
```

---

## 📍 Business & Location Details

- **Studio Name**: Glamorous Makeup & Beauty Studio
- **Lead Artist**: Sabreen Siddiqui
- **Address**: 1st Floor, Mumtaz Bangle Store, Sabji Mandi Rd, Saraimeer, Azamgarh, Uttar Pradesh 276305, India
- **Primary Phone / WhatsApp**: [+91 70078 75415](tel:+917007875415)
- **Secondary Phone**: [+91 98332 60461](tel:+919833260461)
- **Instagram**: [@makeup_by_sabreen_786](https://www.instagram.com/makeup_by_sabreen_786)
- **Google Maps**: [View on Google Maps](https://maps.app.goo.gl/LEeeeG6BkDa33Xdc6)

---

## 📄 License

This project is proprietary and created for **Glamorous Makeup & Beauty Studio**. All rights reserved.
