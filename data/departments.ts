import { Department } from "@/type/departments";

export const departments: Record<string, Department> = {
  "internal-medicine": {
    id: 1,
    name: "Internal Medicine",
    image: "/internal.jpg",
    description:
      "Our Internal Medicine Department is committed to providing expert care for adults dealing with both chronic illnesses and acute medical conditions. Our experienced team of internists focuses on delivering personalized, evidence-based treatment that addresses the full spectrum of adult health needs.\n\nWe manage long-term conditions through careful monitoring, medication management, and lifestyle support, ensuring patients maintain the highest possible quality of life.\n\nIn addition to treating existing health issues, we emphasize preventive care and wellness management. This includes routine screenings, health risk assessments, and guidance on nutrition, exercise, and stress reduction.\n\nBy taking a proactive approach to healthcare, we aim to detect potential problems early and support our patients in making informed decisions about their health. Our goal is to build lasting relationships with our patients and guide them toward healthier, more balanced lives.",

    doctors: [
      {
        id: 1,
        name: "Dr. Hussein Abshir",
        title: "Cardiologist",
        image: "/dr1.jpg",
        exp: "10 years",
      },
      {
        id: 2,
        name: "Dr. Muna Ahmed",
        title: "Internal Medicine Specialist",
        image: "/dr.jpg",
        exp: "17 years",
      },
    ],
  },
  "general-surgery": {
    id: 2,
    name: "General Surgery",
    image: "/general-surgery.jpg",
    description:
      "The General Surgery Department performs a wide range of surgical procedures with precision, safety, and compassionate care. Our skilled surgeons are experienced in both elective and emergency surgeries, addressing conditions that affect various areas such as the digestive tract, skin, abdominal organs, and soft tissues.\n\nWe employ modern surgical techniques and advanced equipment to ensure the highest standard of care and optimal recovery for our patients.\n\nFrom initial consultation and preoperative evaluation to the surgery itself and postoperative care, our team works closely with each patient to ensure clear communication and individualized treatment plans.\n\nOur mission is to deliver safe and effective surgical interventions while prioritizing patient comfort, dignity, and long-term well-being.",

    doctors: [
      {
        id: 3,
        name: "Dr. Mohamed Amin Abdikariim Nur",
        title: "Director & General Surgeon",
        image: "/dr2.jpg",
        exp: "25 years",
      },
    ],
  },
  pediatrics: {
    id: 3,
    name: "Pediatrics",
    image: "/pediatric.jpg",
    description:
      "The Pediatrics Department specializes in the medical care of infants, children, and adolescents, offering comprehensive services tailored to the unique needs of younger patients. Our pediatricians are devoted to promoting the health and development of children in a supportive and family-friendly environment.\n\nWe provide preventive care such as routine health check-ups, vaccinations, and growth monitoring, alongside treatment for acute and chronic pediatric conditions.\n\nUnderstanding that children are not just small adults, our team ensures that every aspect of care—from diagnosis to treatment—is specifically designed with the child’s comfort and safety in mind.\n\nWe strive to create a nurturing atmosphere where both children and their parents feel heard, respected, and empowered.",
    doctors: [
      {
        id: 5,
        name: "Dr. Muna Ahmed",
        title: "Pediatrician",
        image: "/dr.jpg",
        exp: "17 years",
      },
    ],
  },
  cardiology: {
    id: 4,
    name: "Cardiology",
    image: "/All.jpg",
    description:
      "The Cardiology Department offers advanced cardiac care, from preventive screenings to diagnosis and long-term management of heart diseases. Our experienced cardiologists utilize cutting-edge technology to evaluate and treat a broad range of cardiovascular conditions.\n\nWe provide services such as echocardiograms, ECGs, cardiac catheterization, and rehabilitation programs aimed at improving heart health and reducing the risk of future cardiac events.\n\nOur approach combines expert medical care with lifestyle guidance and education to empower patients to take control of their heart health.\n\nWhether managing hypertension, coronary artery disease, arrhythmias, or heart failure, our team is dedicated to delivering compassionate, comprehensive cardiovascular care.",
    doctors: [
      {
        id: 6,
        name: "Dr. Hani omar Wehliye",
        title: "Interventional Cardiologist",
        image: "/dr3.jpg",
        exp: "12 years",
      },
    ],
  },
  oncology: {
    id: 5,
    name: "Oncology",
    image: "/All-2.jpg",
    description:
      "The Oncology Department provides comprehensive cancer care with a focus on diagnosis, treatment, and supportive therapies for patients battling cancer. We offer services including chemotherapy, targeted therapy, palliative care, and psychological support.\n\nOur team of oncologists collaborates closely with specialists from other departments to develop customized treatment plans that address both the physical and emotional aspects of cancer.\n\nWith state-of-the-art facilities and a multidisciplinary approach, we strive to deliver the highest quality of care throughout each stage of a patient’s cancer journey.\n\nWe are committed to improving patient outcomes, enhancing quality of life, and offering hope through every step of cancer treatment and recovery.",

    doctors: [
      {
        id: 7,
        name: "Dr. Muna Ahmed",
        title: "Oncologist",
        image: "/dr3.jpg",
        exp: "15 years",
      },
    ],
  },
  maternity: {
    id: 6,
    name: "Maternity Services",
    image: "/All-2.jpg",
    description:
      "Our Maternity Services Department is dedicated to providing complete care for mothers from pregnancy through childbirth and into the postnatal period. We support women at every stage with compassionate, personalized care.\n\nExpectant mothers receive prenatal screenings, regular check-ups, and access to childbirth education and nutritional counseling. During delivery, our skilled obstetric team ensures a safe and comfortable experience, whether through natural birth or cesarean section.\n\nPostnatal care includes monitoring the health of both mother and baby, providing breastfeeding support, and offering guidance on newborn care.\n\nOur goal is to make the journey into motherhood as safe, smooth, and joyful as possible.",

    doctors: [
      {
        id: 8,
        name: "Dr. Hani OMar Wehliye",
        title: "Obstetrician & Gynecologist",
        image: "/dr.jpg",
        exp: "11 years",
      },
    ],
  },
  "inpatient-department": {
    id: 7,
    name: "Inpatient Department (IPD)",
    image: "/All-2.jpg",
    description:
      "The Inpatient Department (IPD) provides high-quality, round-the-clock medical care for patients who require hospitalization. We offer a safe, clean, and comfortable environment equipped with the latest technology and staffed by a compassionate team of healthcare professionals.\n\nOur inpatient services cover a wide range of medical and surgical specialties, with care plans tailored to each patient’s condition and recovery goals.\n\nThroughout a patient's stay, we ensure continuous monitoring, timely interventions, and clear communication with families.\n\nWe aim to promote healing, reduce hospital stays, and support a smooth transition from hospital to home.",
    doctors: [
      {
        id: 9,
        name: "Dr. Muna Ahmed",
        title: "Hospitalist",
        image: "/dr.jpg",
        exp: "9 years",
      },
    ],
  },
  ot: {
    id: 8,
    name: "Operation Theater (OT)",
    image: "/All-2.jpg",
    description:
      "The Operation Theater (OT) is a state-of-the-art surgical facility equipped to perform a wide array of procedures across multiple specialties. We adhere to the highest standards of hygiene, safety, and technology to ensure optimal surgical outcomes.\n\nOur OT is staffed by skilled surgeons, anesthesiologists, nurses, and technicians who work in coordination to deliver efficient and precise surgical care.\n\nWith a focus on minimally invasive and advanced surgical techniques, we reduce patient discomfort, minimize complications, and promote faster recovery.\n\nSafety, precision, and patient comfort remain at the core of every operation we perform.",
    doctors: [
      {
        id: 10,
        name: "Dr. Muna Ahmed",
        title: "Anesthesiologist",
        image: "/dr3.jpg",
        exp: "13 years",
      },
    ],
  },
  pharmacy: {
    id: 9,
    name: "Pharmacy Services",
    image: "/All-4.jpg",
    description:
      "Our Pharmacy Services Department ensures safe and timely access to a comprehensive range of medications. We support patients with accurate prescriptions, dosage guidance, and medication counseling to enhance treatment outcomes.\n\nOur pharmacists work in collaboration with doctors and nurses to ensure the right medications are administered at the right time, minimizing risks and promoting recovery.\n\nIn addition to dispensing medications, we educate patients on proper usage, potential side effects, and interactions with other treatments.\n\nWith a commitment to patient safety and service excellence, our pharmacy plays a critical role in the overall continuum of care.",

    doctors: [
      {
        id: 11,
        name: "Dr. Amiin",
        title: "Pharmacist",
        image: "/dr2.jpg",
        exp: "8 years",
      },
    ],
  },
  daycare: {
    id: 10,
    name: "Day Care Services",
    image: "/All-3.jpg",
    description:
      "The Day Care Services Department offers medical procedures and treatments that do not require overnight hospitalization. This allows patients to receive high-quality care while returning home the same day.\n\nWe provide a range of services such as minor surgeries, infusions, diagnostic testing, and follow-up treatments in a comfortable, efficient setting.\n\nPatients benefit from reduced hospital stays, quicker recovery times, and cost-effective care without compromising quality.\n\nOur dedicated team ensures every patient receives personalized attention and clear post-treatment instructions for continued recovery at home.",
    doctors: [
      {
        id: 12,
        name: "Dr. Hussein Abshir",
        title: "Day Care Physician",
        image: "/dr3.jpg",
        exp: "6 years",
      },
    ],
  },
  emergency: {
    id: 11,
    name: "Emergency Medicine",
    image: "/All.jpg",
    description:
      "Our Emergency Medicine Department provides life-saving care 24/7 for patients experiencing medical emergencies. With a highly trained and responsive team, we are prepared to handle trauma, cardiac events, respiratory issues, and other urgent conditions at any time.\n\nWe are equipped with advanced emergency equipment and facilities that allow us to quickly stabilize, diagnose, and treat patients under critical conditions.\n\nRapid assessment, immediate intervention, and coordinated follow-up care are the pillars of our emergency services.\n\nWe strive to deliver swift, effective, and compassionate care when it matters most.",
    doctors: [
      {
        id: 13,
        name: "Dr. Amiin",
        title: "Emergency Medicine Specialist",
        image: "/dr.jpg",
        exp: "25 years",
      },
    ],
  },
  diagnostics: {
    id: 12,
    name: "Laboratory and Diagnostic Services",
    image: "/All-3.jpg",
    description:
      "The Laboratory and Diagnostic Services Department plays a vital role in early detection, diagnosis, and ongoing management of diseases. We provide a wide range of tests including blood work, pathology, radiology, ultrasound, and imaging.\n\nUsing the latest diagnostic tools and technologies, our skilled technicians and specialists ensure accurate and timely results to support clinical decisions.\n\nWhether it’s routine blood tests or advanced imaging, we prioritize precision, safety, and speed in every procedure.\n\nOur commitment to quality diagnostics enhances patient care across all departments.",

    doctors: [
      {
        id: 14,
        name: "Dr. Amiin",
        title: "Radiologist",
        image: "/dr2.jpg",
        exp: "14 years",
      },
    ],
  },
  obg: {
    id: 13,
    name: "Obstetrics and Gynecology (OBG)",
    image: "/All-4.jpg",
    description:
      "The Obstetrics and Gynecology Department offers comprehensive healthcare services for women at every stage of life. From routine gynecological exams to prenatal care and complex surgical procedures, our team provides expert, compassionate care.\n\nWe support women through pregnancy, childbirth, and postnatal recovery, while also addressing gynecological concerns such as menstrual disorders, fertility issues, and menopause.\n\nOur approach combines medical expertise with a personalized touch, ensuring every woman feels heard, respected, and well-cared-for.\n\nBy fostering trust and open communication, we aim to empower women to take control of their reproductive and overall health.",
    doctors: [
      {
        id: 15,
        name: "Dr. Muna Ahmed",
        title: "Gynecologist",
        image: "/dr.jpg",
        exp: "10 years",
      },
    ],
  },
};
