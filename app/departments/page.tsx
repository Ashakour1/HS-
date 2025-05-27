"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, Clock, ArrowRight } from "lucide-react";
import Head from "next/head";

export default function ServicesPage() {
  const services = [
    {
      title: "Inpatient Department (IPD)",
      description:
        "Comprehensive care for patients requiring overnight hospital stays with 24/7 monitoring.",
      image: "/All.jpg",
      slug: "inpatient-department",
    },
    {
      title: "Maternity Services",
      description:
        "Complete prenatal, delivery, and postnatal care in a comfortable and safe environment.",
      image: "/All.jpg",
      slug: "maternity-services",
    },
    {
      title: "Operation Theater (OT)",
      description:
        "State-of-the-art surgical facilities with advanced equipment and skilled surgeons.",
      image: "/All.jpg",
      slug: "operation-theater",
    },
    {
      title: "Pharmacy Services",
      description:
        "24/7 pharmacy providing prescribed medications and health products.",
      image: "/All-2.jpg",
      slug: "pharmacy-services",
    },
    {
      title: "Day Care Services",
      description:
        "Medical procedures and treatments that don't require overnight stays.",
      image: "/All-3.jpg",
      slug: "day-care-services",
    },
    {
      title: "Emergency Medicine",
      description:
        "24/7 emergency care for urgent health conditions and accidents.",
      image: "/All-4.jpg",
      slug: "emergency-medicine",
    },
    {
      title: "Laboratory and Diagnostic Services",
      description:
        "Comprehensive testing and diagnostic services with quick and accurate results.",
      image: "/All.jpg",
      slug: "laboratory-and-diagnostic-services",
    },
    {
      title: "Oncology Department",
      description:
        "Specialized cancer care with advanced treatment options and supportive care.",
      image: "/All-2.jpg",
      slug: "oncology-department",
    },
    {
      title: "Internal Medicine",
      description:
        "Diagnosis and treatment of adult diseases by specialized physicians.",
      image: "/internal.jpg",
      slug: "internal-medicine",
    },
    {
      title: "Cardiology",
      description:
        "Heart-related diagnosis and treatments by expert cardiologists.",
      image: "/All.jpg",
      slug: "cardiology",
    },
    {
      title: "General Surgery",
      description:
        "Surgical procedures for a wide range of conditions by skilled surgeons.",
      image: "/general-surgery.jpg",
      slug: "general-surgery",
    },
    {
      title: "Obstetrics and Gynecology (OBG)",
      description:
        "Specialized care for women's reproductive health and pregnancy.",
      image: "/All-3.jpg",
      slug: "obstetrics-and-gynecology",
    },
    {
      title: "Pediatrics",
      description: "Complete child healthcare in a caring environment.",
      image: "/pediatric.jpg",
      slug: "pediatrics",
    },
  ];

  const contacts = [
    {
      title: "Emergency",
      content: "+1 234 567 890",
      icon: Phone,
      color: "bg-[#00A651]",
      text: "text-white",
    },
    {
      title: "Location",
      content: "123 Medical Center Dr",
      icon: MapPin,
      color: "bg-blue-100",
      text: "text-gray-800",
    },
    {
      title: "Email",
      content: "info@hospital.com",
      icon: Mail,
      color: "bg-blue-100",
      text: "text-gray-800",
    },
    {
      title: "Working Hours",
      content: "Mon-Fri: 9AM - 5PM",
      icon: Clock,
      color: "bg-blue-100",
      text: "text-gray-800",
    },
  ];

  const features = [
    {
      title: "Modern Equipment",
      description: "Advanced tools for accurate diagnosis and treatment.",
    },
    {
      title: "Trusted Doctors",
      description: "Highly skilled and experienced medical professionals.",
    },
    {
      title: "Patient First",
      description: "Our services revolve around your comfort and care.",
    },
    {
      title: "24/7 Access",
      description: "We are here for you anytime, day or night.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Our Services - Hospital Uniso</title>
        <meta
          name="description"
          content="Explore the various medical services offered by Hospital Uniso, designed to meet the healthcare needs of our community."
        />
      </Head>
      {/* Hero */}
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
          <div className="px-0 md:px-28 py-2 rounded">
            <h1 className="text-xl sm:text-4xl lg:text-xl font-semibold text-white">
              Our Departments
            </h1>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#0E74FC] to-[#00A651] bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href={`/centers/${service.slug}`}>
                    <p className="text-[#00A651] font-medium flex items-center hover:underline transition-all">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12 bg-gradient-to-r from-[#0E74FC] to-[#00A651] bg-clip-text text-transparent">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {contacts.map((item, i) => (
              <Card
                key={i}
                className={`text-center ${item.color} ${item.text} hover:shadow-lg transition-all`}
              >
                <CardContent className="p-6">
                  <item.icon className={`w-8 h-8 mx-auto mb-4 ${item.text}`} />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12 bg-gradient-to-r from-[#0E74FC] to-[#00A651] bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="text-center shadow-sm border hover:shadow-lg transition-all"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#0E74FC] to-[#00A651] flex items-center justify-center text-white text-2xl font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#00A651] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0E74FC] to-[#00A651] text-white py-16 text-center">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Care?</h2>
          <p className="max-w-xl mx-auto mb-6">
            Our emergency team is always ready to assist you in urgent
            situations.
          </p>
          <Link href="/contact">
            <span className="inline-block bg-white text-[#00A651] hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all hover:shadow-lg">
              Contact Emergency
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
