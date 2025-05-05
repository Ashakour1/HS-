import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Users,
  Shield,
  CheckCircle,
  HeartPulse,
  Stethoscope,
  Baby,
  Scissors,
  Pill,
  Ambulance,
  FlaskConical,
  Microscope,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[200px] sm:h-[200px] md:h-[150px] lg:h-[150px]">
        <Image
          src="/hero.png"
          alt="Hospital Management"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="absolute inset-0 flex items-center justify-start px-6">
          {/* Overlay background box on the left */}
          <div className=" px-28 py-2 rounded">
            <h1 className="text-xl sm:text-4xl lg:text-xl font-semibold text-white">
              About Us
            </h1>
          </div>
        </div>
      </section>
      {/* Hero Section with Mission Statement */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0E74FC]/5 to-white">
        <div className="container mx-auto px-4">
          <div className="">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Inspiring Hope, Improving Health in{" "}
                  <span className="text-[#0E74FC]">Mogadishu</span>
                </h1>
                <div className="w-20 h-1 bg-[#00A651] mb-6"></div>
                <h2 className="text-xl font-medium mb-4 text-[#00A651]">
                  Our Mission
                </h2>
                <p className="text-gray-700 mb-6">
                  At HOSPITAL UNISO, our mission is to inspire hope and improve
                  the health and well-being of our community by delivering
                  exceptional, patient-centered care. We are committed to
                  integrating clinical excellence, education, and research to
                  provide the best possible outcomes for every patient.
                </p>
                <button className="bg-[#0E74FC] hover:bg-[#0E74FC]/90 text-white px-5 py-2.5 rounded-md text-sm font-medium">
                  Learn More
                </button>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/image-.jpg"
                    alt="Hospital UNISO facility"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Message */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col  lg:flex-row justify-center gap-8 items-start">
            <div className="relative w-full lg:w-1/4 max-w-xl mx-auto lg:mx-0">
              {/* Teal border frame */}
              <div className="relative border-4 border-[#0E74FC] overflow-hidden shadow-lg">
                <Image
                  src="/dr2.jpg"
                  alt="Director Image"
                  width={300}
                  height={500}
                  className="w-full object-cover rounded-lg"
                />

                {/* Yellow quote decoration */}
              </div>
            </div>

            <div className="w-full lg:w-1/2 pt-12 lg:pt-8">
              <h2 className="text-xl md:text-xl font-semibold text-[#0E74FC] mb-1">
                Director's Message
              </h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Prof. Dr. Mohamed Amiin Abdikarim Nur
              </h3>
              <p className="text-xl font-semibold text-gray-700 mb-6">
                Executive Director & Surgeon
              </p>
              <p className="text-base text-gray-600 mb-4">
                Welcome to the Hospital UNISO, where we are dedicated to
                providing exceptional healthcare services. As the Executive
                Director, I am proud to lead a team of highly skilled
                professionals committed to excellence in patient care and
                ensuring that every patient receives the highest quality of
                care.
              </p>
              <p className="text-base text-gray-600 mb-4">
                At Hospital UNISO, we believe in a patient-centered approach,
                where your health and well-being are our top priorities. Our
                state-of-the-art facilities and advanced medical technologies
                enable us to offer a wide range of services, from routine
                check-ups to complex surgeries. We are dedicated to staying at
                the forefront of medical advancements and innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className=" text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
            <div className="w-20 h-1 bg-[#0E74FC] mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              HOSPITAL UNISO aspires to become the most trusted healthcare
              provider in Mogadishu Somalia and beyond, setting the standard for
              unparalleled patient experiences, innovative medical practices,
              and compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-[#00A651] mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our values guide every decision we make and every action we take
                in service of our patients and community.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-[#0E74FC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-5 w-5 text-[#0E74FC]" />
                </div>
                <h3 className="text-lg font-medium mb-2">
                  Patient-Centered Care
                </h3>
                <p className="text-gray-600 text-sm">
                  We prioritize the needs and well-being of our patients above
                  all else.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-[#00A651]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-5 w-5 text-[#00A651]" />
                </div>
                <h3 className="text-lg font-medium mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We strive for the highest standards in medical care, service,
                  and innovation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-[#0E74FC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-5 w-5 text-[#0E74FC]" />
                </div>
                <h3 className="text-lg font-medium mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm">
                  We uphold ethical practices, transparency, and accountability
                  in all our operations.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-[#00A651]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartPulse className="h-5 w-5 text-[#00A651]" />
                </div>
                <h3 className="text-lg font-medium mb-2">Compassion</h3>
                <p className="text-gray-600 text-sm">
                  We treat every patient with empathy, dignity, and respect.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-[#0E74FC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-5 w-5 text-[#0E74FC]" />
                </div>
                <h3 className="text-lg font-medium mb-2">
                  Social Responsibility
                </h3>
                <p className="text-gray-600 text-sm">
                  We are committed to serving our community and addressing
                  healthcare disparities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Our Purpose
                </h2>
                <div className="w-20 h-1 bg-[#00A651] mb-6"></div>
                <p className="text-gray-700 mb-4">
                  HOSPITAL UNISO was founded to address the critical healthcare
                  gaps in Mogadishu, Somalia, a community that has endured
                  significant challenges due to decades of civil unrest,
                  political instability, and the collapse of essential
                  infrastructure.
                </p>
                <p className="text-gray-700 mb-4">
                  The prolonged conflict has left the healthcare system in
                  disarray, with a severe lack of trusted medical facilities
                  that meet international standards. Many existing healthcare
                  providers prioritize profit over patient care, leading to
                  inadequate treatment, misdiagnoses, and even harm to patients.
                </p>
                <p className="text-gray-700">
                  HOSPITAL UNISO was established to break this cycle by
                  providing ethical, high-quality healthcare that prioritizes
                  patient well-being.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4 text-[#0E74FC]">
                  We aim to:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      Deliver personalized, evidence-based treatments that
                      address the root causes of illnesses, not just symptoms.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      Train and empower the next generation of medical
                      professionals through education and hands-on experience.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      Uphold global medical standards and accreditations to
                      ensure the highest level of care.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                What We Do
              </h2>
              <div className="w-20 h-1 bg-[#0E74FC] mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                HOSPITAL UNISO offers a comprehensive range of medical services
                and facilities designed to meet the diverse healthcare needs of
                our community. Our specialized departments include:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0E74FC]/10 rounded-full flex items-center justify-center mt-1">
                    <Stethoscope className="h-5 w-5 text-[#0E74FC]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">
                      Inpatient Department (IPD)
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Offering high-quality inpatient care in well-equipped,
                      modern rooms designed to ensure maximum comfort and
                      promote patient recovery. With round-the-clock medical
                      supervision and a patient-centered approach.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00A651]/10 rounded-full flex items-center justify-center mt-1">
                    <Baby className="h-5 w-5 text-[#00A651]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Maternity Services</h3>
                    <p className="text-gray-600 text-sm">
                      Providing comprehensive care for expectant mothers,
                      ensuring a safe and supportive journey from pregnancy to
                      motherhood with specialized Antenatal Care (ANC) and
                      Postnatal Care (PNC).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0E74FC]/10 rounded-full flex items-center justify-center mt-1">
                    <Scissors className="h-5 w-5 text-[#0E74FC]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Operation Theater (OT)</h3>
                    <p className="text-gray-600 text-sm">
                      Equipped with state-of-the-art technology for a wide range
                      of surgical procedures, performed by skilled surgeons and
                      medical teams.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00A651]/10 rounded-full flex items-center justify-center mt-1">
                    <Pill className="h-5 w-5 text-[#00A651]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Pharmacy Services</h3>
                    <p className="text-gray-600 text-sm">
                      Ensuring access to a wide range of medications, with
                      efficient dispensing for both inpatients and outpatients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0E74FC]/10 rounded-full flex items-center justify-center mt-1">
                    <Clock className="h-5 w-5 text-[#0E74FC]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Day Care Services</h3>
                    <p className="text-gray-600 text-sm">
                      Providing specialized medical care and procedures that do
                      not require overnight hospitalization, ensuring
                      convenience and comfort for patients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00A651]/10 rounded-full flex items-center justify-center mt-1">
                    <Ambulance className="h-5 w-5 text-[#00A651]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Emergency Medicine</h3>
                    <p className="text-gray-600 text-sm">
                      Delivering 24/7 emergency care with a team of highly
                      trained professionals equipped to handle critical and
                      life-threatening conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0E74FC]/10 rounded-full flex items-center justify-center mt-1">
                    <FlaskConical className="h-5 w-5 text-[#0E74FC]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">
                      Laboratory and Diagnostic Services
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Delivering accurate and timely diagnostic testing,
                      including imaging and advanced laboratory services, to
                      support effective treatment planning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00A651]/10 rounded-full flex items-center justify-center mt-1">
                    <Microscope className="h-5 w-5 text-[#00A651]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Oncology Department</h3>
                    <p className="text-gray-600 text-sm">
                      As the first and only oncology department in the country,
                      we offer advanced cancer care, including chemotherapy and
                      palliative care, with a focus on cutting-edge treatments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-[#0E74FC] hover:bg-[#0E74FC]/90 text-white px-6 py-3 rounded-md font-medium">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/image-1.jpg"
                  alt="Hospital facility"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/All-2.jpg"
                  alt="Medical professionals"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/All.jpg"
                  alt="Patient care"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Social Responsibility
                </h2>
                <div className="w-20 h-1 bg-[#00A651] mb-6"></div>
                <p className="text-gray-700 mb-6">
                  At HOSPITAL UNISO, we believe that healthcare is a fundamental
                  human right. Our social responsibility initiatives focus on:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      Providing affordable and accessible healthcare to all,
                      regardless of socioeconomic status.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      Educating the community on preventive care and healthy
                      living.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      Partnering with local organizations to address public
                      health challenges.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      Reducing healthcare disparities by offering specialized
                      care to underserved populations.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/image-2.jpg"
                    alt="Community outreach"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies and Standards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Policies and Standards
              </h2>
              <div className="w-20 h-1 bg-[#0E74FC] mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                HOSPITAL UNISO adheres to strict policies and standards to
                ensure the highest level of care and operational excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4 text-[#0E74FC]">
                  Our policies are designed to:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      Promote consistency and quality in all aspects of patient
                      care.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      Ensure compliance with local and international healthcare
                      regulations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      Foster a culture of accountability, transparency, and
                      continuous improvement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      Provide a framework for ethical decision-making and
                      patient safety.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4 text-[#0E74FC]">
                  Growth and Profit Strategy
                </h3>
                <p className="text-gray-700 mb-4">
                  At HOSPITAL UNISO, we recognize the importance of sustainable
                  growth to fulfill our mission. Our profit strategy is built on
                  three pillars:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Enhancing Value:</strong> We focus on delivering
                      exceptional care that justifies our pricing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Optimizing Costs:</strong> We continuously
                      evaluate our operational processes to reduce
                      inefficiencies.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00A651] mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Strategic Patient Acquisition:</strong> We target
                      specific patient demographics based on data-driven
                      insights.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gradient-to-r from-[#0E74FC]/5 to-[#00A651]/5">
        <div className="container mx-auto px-4">
          <div className=" text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Commitment
            </h2>
            <div className="w-20 h-1 bg-[#0E74FC] mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
              HOSPITAL UNISO is more than just a healthcare facility; it is a
              beacon of hope and healing for our community. Through our
              commitment to excellence, compassion, and social responsibility,
              we aim to transform healthcare in Mogadishu Somalia and beyond.
              Together, we can build a healthier, brighter future for all.
            </p>
            {/* <button
           
              className="bg-[#00A651] hover:bg-[#00A651]/90 text-white px-6 py-3 rounded-md font-medium"
            >
              Book an Appointment
            </button> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="">
            <div className="bg-[#0E74FC]/10 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Need Medical Assistance?
                  </h3>
                  <p className="text-gray-700">
                    Our team of medical professionals is ready to help you.
                  </p>
                </div>
                <div className="flex gap-4">
                  <a
                    href="tel:+123456789"
                    className="flex items-center gap-2 bg-white text-[#0E74FC] px-4 py-2 rounded-md font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                  <button
                    onClick={() => (window.location.href = "/appointment")}
                    
                    className="bg-[#00A651] hover:bg-[#00A651]/90 text-white px-4 py-2 rounded-md font-medium"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
