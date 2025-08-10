import { SmileIcon as Tooth, Stethoscope, Heart, Syringe, MoonIcon as Venus, Bone, type LucideIcon } from "lucide-react"

interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
  fullDescription: string
  keyFeatures: string[]
}

export const services: Service[] = [
  {
    id: "dentist",
    icon: Tooth,
    title: "Dentist",
    description: "Offering expert dental care for routine check-ups, cleanings, and advanced treatments.",
    fullDescription:
      "Our dental department provides comprehensive oral healthcare, from preventive care to advanced restorative and cosmetic procedures. We focus on maintaining your oral health and enhancing your smile with the latest techniques and compassionate care.",
    keyFeatures: [
      "Routine Check-ups & Cleanings",
      "Cosmetic Dentistry (Whitening, Veneers)",
      "Restorative Procedures (Fillings, Crowns)",
      "Emergency Dental Care",
    ],
  },
  {
    id: "pediatrics",
    icon: Stethoscope,
    title: "Pediatrics",
    description: "Comprehensive healthcare for children, from newborns to adolescents, ensuring healthy growth.",
    fullDescription:
      "Our pediatric specialists are dedicated to the health and well-being of children from infancy through adolescence. We provide a full range of services, including routine check-ups, vaccinations, and management of childhood illnesses, all in a child-friendly environment.",
    keyFeatures: [
      "Well-Child Visits & Vaccinations",
      "Acute & Chronic Illness Management",
      "Developmental Screenings",
      "Adolescent Health Services",
    ],
  },
  {
    id: "cardiology",
    icon: Heart,
    title: "Cardiology",
    description: "Specialized heart care, providing diagnosis and treatment for cardiovascular conditions.",
    fullDescription:
      "The cardiology department offers advanced diagnostic and treatment options for a wide range of heart conditions. Our team of expert cardiologists uses state-of-the-art technology to provide personalized care, focusing on prevention, management, and rehabilitation.",
    keyFeatures: [
      "Cardiac Diagnostics (ECG, Stress Tests)",
      "Hypertension & Cholesterol Management",
      "Coronary Artery Disease Treatment",
      "Heart Failure Management",
    ],
  },
  {
    id: "dermatology",
    icon: Syringe,
    title: "Dermatology",
    description: "Expert skin care services for conditions like acne, eczema, and skin cancer screenings.",
    fullDescription:
      "Our dermatology department provides comprehensive care for skin, hair, and nail conditions. From common skin issues like acne and eczema to complex dermatological diseases and skin cancer screenings, our specialists offer effective treatments and personalized skincare advice.",
    keyFeatures: [
      "Acne & Rosacea Treatment",
      "Eczema & Psoriasis Management",
      "Skin Cancer Screening & Treatment",
      "Cosmetic Dermatology Procedures",
    ],
  },
  {
    id: "gynecology",
    icon: Venus,
    title: "Gynecology",
    description: "Dedicated women's health services, including reproductive health, pregnancy care, and more.",
    fullDescription:
      "Our gynecology department is committed to providing comprehensive healthcare for women at all stages of life. We offer a full spectrum of services, including routine gynecological exams, family planning, prenatal care, and menopause management, with a focus on compassionate and respectful care.",
    keyFeatures: [
      "Routine Gynecological Exams",
      "Family Planning & Contraception",
      "Prenatal & Postnatal Care",
      "Menopause Management",
    ],
  },
  {
    id: "orthopedics",
    icon: Bone,
    title: "Orthopedics",
    description: "Focused on bone joint care, providing treatments for fractures, arthritis, and sports injuries.",
    fullDescription:
      "The orthopedics department specializes in the diagnosis and treatment of musculoskeletal conditions, including bones, joints, ligaments, tendons, and muscles. Our orthopedic surgeons and specialists provide comprehensive care for injuries, chronic conditions, and rehabilitation, helping you regain mobility and improve your quality of life.",
    keyFeatures: [
      "Fracture Care & Trauma",
      "Arthritis Management",
      "Sports Medicine & Injury Rehabilitation",
      "Joint Replacement Surgery",
    ],
  },
]
