/**
 * GLAMOROUS MAKEUP & BEAUTY STUDIO — Makeup Classes & Academy Data
 * Sabreen Siddiqui | Saraimeer, Azamgarh
 * Professional makeup courses in authentic Hindlish for beginners to advanced artists.
 */

export interface MakeupClass {
  id: string
  number: string
  name: string
  subtitle: string
  description: string
  duration: string
  timing: string
  price: string
  priceNote?: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  levelLabel: string
  includes: string[]
  outcome: string
  isPopular?: boolean
  whatsappMessage: string
}

export const makeupClasses: MakeupClass[] = [
  {
    id: 'basic-course',
    number: '01',
    name: 'Basic Makeup Course',
    subtitle: 'Beginners ke liye — Foundation & Self-Grooming Se Shuru Karein',
    description:
      'Agar aap bilkul shuruat se apna aur family ka makeup sikhna chahti hain, toh yeh course aapke liye perfect hai. Basic skin preparation se lekar flawless everyday aur party looks tak sab kuch step-by-step sikhaya jayega.',
    duration: '7 Din (Daily 3–4 Ghante)',
    timing: 'Morning: 10:00 AM – 1:30 PM ya Afternoon: 2:30 PM – 6:00 PM',
    price: '₹3,999',
    priceNote: 'Flexible batch timing available',
    level: 'Beginner',
    levelLabel: 'BEGINNER LEVEL',
    includes: [
      'Skin Prep & CTM (Cleansing, Toning, Moisturizing)',
      'Skin Undertone Recognition & Foundation Matching',
      'Flawless Base Blending & Concealing Technique',
      'Eye Makeup: Soft Smokey, Daily Liner & Mascara',
      'Lip Shaping & Long-Lasting Lipstick Application',
      'Basic Contouring, Soft Blusher & Highlighting',
      'Everyday Natural Glow & Occasion Party Looks',
      'Pocket-Friendly Vanity & Product Guidance',
    ],
    outcome: 'Course ke baad aap apna aur apne relatives ka makeup bina kisi ki madad ke flawless tarike se kar sakengi.',
    whatsappMessage: 'Hi Sabreen! Main Basic Makeup Course (₹3,999) ke baare mein details aur seat booking jaanna chahti hoon.',
  },
  {
    id: 'advanced-course',
    number: '02',
    name: 'Advanced Bridal Masterclass',
    subtitle: 'Indian & Pakistani Pro Bridal Artistry Sikhkar Expert Banein',
    description:
      'Yeh masterclass unke liye hai jo already basic makeup jaanti hain aur bridal industry mein apna naam banana chahti hain. Isme Indian Royal Bridal, Pakistani Matte & Dewy Looks, aur Hair Styling detail mein cover hota hai.',
    duration: '15 Din (Daily 3–4 Ghante)',
    timing: 'Morning: 10:00 AM – 1:30 PM ya Afternoon: 2:30 PM – 6:00 PM',
    price: '₹7,999',
    priceNote: 'Live model practical sessions included',
    level: 'Intermediate',
    levelLabel: 'INTERMEDIATE / BRIDAL PRO',
    isPopular: true,
    includes: [
      'Traditional Indian Bridal Full Signature Look',
      'Contemporary Pakistani Bridal & Reception Look',
      'HD Waterproof & Sweat-Proof Base Techniques',
      'Cut-Crease, Glitter & Dramatic Bridal Eye Artistry',
      'Haldi, Mehendi & Engagement Fresh Aesthetic Looks',
      'Bridal Hair Styling: Traditional Buns, Curls & Waves',
      'Heavy Dupatta Setting, Saree & Lehenga Draping',
      'Client Consultation, Skin Analysis & Live Models Practice',
    ],
    outcome: 'Aap independent bridal makeup artist ke roop mein real brides ka makeup lene ke liye poori tarah ready ho jayengi.',
    whatsappMessage: 'Hi Sabreen! Main Advanced Bridal Masterclass (₹7,999) mein admission lena chahti hoon. Kripya batch dates batayein.',
  },
  {
    id: 'professional-course',
    number: '03',
    name: 'Professional Makeup Artist Diploma',
    subtitle: 'Complete Career-Ready Training — Zero Se Salon Owner Tak',
    description:
      'Makeup ko apna full-time career ya business banana chahti hain? Yeh master diploma course aapko ek professional makeup artist banata hai — complete makeup artistry, editorial styling, bridal hair, vanity setup aur business skills ke saath.',
    duration: '30 Din (Daily 3–4 Ghante)',
    timing: 'Morning: 10:00 AM – 1:30 PM ya Afternoon: 2:30 PM – 6:00 PM',
    price: '₹14,999',
    priceNote: 'Certificate + Portfolio Shoot Assistance',
    level: 'Advanced',
    levelLabel: 'COMPLETE PRO DIPLOMA',
    includes: [
      'Zero se Lekar Advanced International Makeup Artistry',
      'All Bridal Signatures: Indian, Pakistani, Reception, Haldi',
      'High-Definition (HD) & Glass Skin Base Techniques',
      'Advanced Eye Artistry: Halo Eye, Arabic Liner & 3D Glitters',
      'Full Hair Styling Mastery: Front Variations & Structured Buns',
      'Nail Art Basics & Saree/Dupatta Master Draping',
      'Master Vanity Kit Building & Budget Product Recommendations',
      'Social Media, Instagram Portfolio & Client Photography Guide',
      'Client Pricing, Booking Contracts & Salon Business Strategy',
      'Official Certificate of Completion & Multi-Model Practicals',
    ],
    outcome: 'Course completion certificate ke saath aap apna independent studio shuru kar sakti hain ya premium bridal artist ban sakti hain.',
    whatsappMessage: 'Hi Sabreen! Main Professional Makeup Artist Diploma (₹14,999) course ke syllabus aur registration ke baare mein baat karna chahti hoon.',
  },
]

export interface AcademyPillar {
  number: string
  title: string
  description: string
  badge: string
}

export const academyPillars: AcademyPillar[] = [
  {
    number: '01',
    title: 'Sabreen Ka 1-on-1 Personal Focus',
    description:
      'Hum bade bheed-bhad wale batch nahi banate. Har batch mein limited students hote hain taaki Sabreen har ek student ke hand movement aur blending technique par personally dhyan de sakein.',
    badge: 'PERSONAL ATTENTION',
  },
  {
    number: '02',
    title: 'Live Models Par Real Practicals',
    description:
      'Sirf dummy ya paper par sikhne se confidence nahi aata. Hum students ko real face, alag-alag skin types aur skin tones par complete makeup practicals karwate hain.',
    badge: 'HANDS-ON PRACTICE',
  },
  {
    number: '03',
    title: 'Color Theory & Product Science',
    description:
      'Foundation grey kyun padta hai? Base crack kyun hota hai? Hum color wheel, undertones matching aur skin preparation ki deep understanding dete hain.',
    badge: 'COLOR THEORY',
  },
  {
    number: '04',
    title: 'Certificate & Career Guidance',
    description:
      'Course complete hone par Glamorous Studio ka verified certificate, client handling tips, photoshoot lighting tricks aur freelance career roadmap milta hai.',
    badge: 'CAREER READY',
  },
]

export interface RoadmapStep {
  step: string
  title: string
  tag: string
  description: string
  highlights: string[]
}

export const roadmapSteps: RoadmapStep[] = [
  {
    step: '01',
    title: 'Skin Prep & Theory Foundation',
    tag: 'PEHLA CHARAN',
    description:
      'Skin type pehchanna, hygiene standards, skin prep (CTM), color wheel, skin undertones aur brush knowledge ki detailed theory.',
    highlights: ['Skin Type Analysis', 'Undertone Matching', 'Sanitization & Brush Kit'],
  },
  {
    step: '02',
    title: 'Sabreen Ki Live Demonstration',
    tag: 'DUSRA CHARAN',
    description:
      'Sabreen Siddiqui live model par step-by-step complete look banakar dikhayengi — product application se lekar finishing touch tak.',
    highlights: ['Base Layering Technique', 'Eye Makeup Blending', 'Real-Time Doubt Clearing'],
  },
  {
    step: '03',
    title: 'Supervised Student Practicals',
    tag: 'TEESRA CHARAN',
    description:
      'Students live models par khud look create karti hain. Sabreen har step par pass khadi hokar hand movement aur mistakes correct karwayengi.',
    highlights: ['Live Face Practicals', 'Speed & Precision Training', 'Personal Feedback'],
  },
  {
    step: '04',
    title: 'Portfolio, Certificate & Business',
    tag: 'CHAUTHA CHARAN',
    description:
      'Final bridal/party look ka professional photoshoot, official certificate presentation, aur client charge karne ki pricing strategy.',
    highlights: ['Portfolio Photoshoot', 'Academy Certificate', 'Client Booking Guidance'],
  },
]

export interface StudentPerk {
  title: string
  description: string
  tag: string
}

export const studentPerks: StudentPerk[] = [
  {
    title: 'Vanity Kit Checklist (Budget & Pro)',
    description: 'Bina fizool kharch ke best affordable aur luxury products ki curated list taaki aapka vanity set aasani se ban sake.',
    tag: 'PRODUCT GUIDE',
  },
  {
    title: 'Lifetime WhatsApp Doubt Support',
    description: 'Course khatam hone ke baad bhi agar client par kaam karte waqt koi doubt aaye, toh Sabreen se direct guidance milti hai.',
    tag: 'LIFETIME HELP',
  },
  {
    title: 'Reels & Lighting Photography Tips',
    description: 'Mobile se clean HD videos aur photos kaise lein taaki Instagram par aapka bridal work professional aur attractive dikhe.',
    tag: 'SOCIAL MEDIA',
  },
  {
    title: 'Dupatta & Saree Master Draping',
    description: 'Traditional Gujarati, Bengali, aur Modern bridal dupatta setting aur pleated saree draping ki thorough training.',
    tag: 'DRAPING SKILLS',
  },
]

export interface ClassFAQ {
  id: string
  question: string
  answer: string
}

export const classFAQs: ClassFAQ[] = [
  {
    id: 'cfaq-1',
    question: 'Kya mujhe pehle se makeup aana zaroori hai?',
    answer:
      'Bilkul nahi! Hamare Basic Makeup Course aur Professional Diploma course mein hum bilkul zero level (brush pakadne aur skin preparation) se shuru karte hain. Koi bhi beginner aasaani se seekh sakti hain.',
  },
  {
    id: 'cfaq-2',
    question: 'Class ke dauran products aur makeup kit hume laana hoga?',
    answer:
      'Class ke practical session ke liye basic studio products guidance di jaati hai. Sabreen aapko best affordable aur high-end products ki verified list provide karti hain taaki aap bina galat product khareede apni customized vanity kit bana sakein.',
  },
  {
    id: 'cfaq-3',
    question: 'Kya course complete hone par certificate milega?',
    answer:
      'Haan, Advanced Bridal Masterclass aur Professional Diploma Course successfully complete karne par aapko Glamorous Makeup & Beauty Studio ka official certificate diya jata hai, jo aapke professional portfolio mein bahut madad karta hai.',
  },
  {
    id: 'cfaq-4',
    question: 'Class ki batch timings aur days kya hain?',
    answer:
      'Classes Monday se Saturday chalti hain. Hum do flexible slots offer karte hain: Morning Batch (10:00 AM – 1:30 PM) aur Afternoon Batch (2:30 PM – 6:00 PM). Aap apni suvidha ke anusaar batch select kar sakti hain.',
  },
  {
    id: 'cfaq-5',
    question: 'Live models par practice kaise hoti hai?',
    answer:
      'Sabreen har topic ki live demonstration deti hain, jiske baad har student ko live model par step-by-step practical karna hota hai. Sabreen personally paas khadi hokar blending aur contouring theek karwati hain.',
  },
  {
    id: 'cfaq-6',
    question: 'Admission lene ka tareeka kya hai aur seat kaise book karein?',
    answer:
      'Har batch mein seats limited (4–6 students) hoti hain taaki quality aur personal attention bani rahe. Aap WhatsApp (+91 70078 75415) par message karke ya studio visit karke apni seat confirm kar sakti hain.',
  },
]
