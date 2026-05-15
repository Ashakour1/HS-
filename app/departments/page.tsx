"use client";

import React from "react";
import {
  Heart,
  Baby,
  Stethoscope,
  Brain,
  Bone,
  Eye,
  Ear,
  Pill,
  Activity,
  Users,
  Phone,
  MapPin,
  Mail,
  Clock,
  FlaskConical,
  Ambulance,
  HeartPulse,
  ArrowRight,
  Star,
  Calendar,
  CheckCircle,
  Award,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { departments } from "@/data/departments"; // Import departments data
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
const Services = () => {
  const contacts = [
    {
      title: "Emergency",
      content: "+1 234 567 890",
      icon: Phone,
      tile: "bg-rose-500/10",
      iconText: "text-rose-600",
    },
    {
      title: "Location",
      content: "Howlwadaag Street, Mogadishu",
      icon: MapPin,
      tile: "bg-[#0902AF]/10",
      iconText: "text-[#0902AF]",
    },
    {
      title: "Email",
      content: "info@hospital.com",
      icon: Mail,
      tile: "bg-emerald-500/10",
      iconText: "text-emerald-600",
    },
    {
      title: "Working Hours",
      content: "Mon-Fri: 9AM - 5PM",
      icon: Clock,
      tile: "bg-amber-500/10",
      iconText: "text-amber-600",
    },
  ];

  const features = [
    {
      title: "Modern Equipment",
      description: "Advanced tools for accurate diagnosis and treatment.",
      icon: Stethoscope,
      tile: "bg-blue-500/10",
      iconText: "text-blue-600",
    },
    {
      title: "Trusted Doctors",
      description: "Highly skilled and experienced medical professionals.",
      icon: HeartPulse,
      tile: "bg-rose-500/10",
      iconText: "text-rose-600",
    },
    {
      title: "Patient First",
      description: "Our services revolve around your comfort and care.",
      icon: FlaskConical,
      tile: "bg-emerald-500/10",
      iconText: "text-emerald-600",
    },
    {
      title: "24/7 Access",
      description: "We are here for you anytime, day or night.",
      icon: Ambulance,
      tile: "bg-amber-500/10",
      iconText: "text-amber-600",
    },
  ];

  const departmentList = Object.values(departments);

  const emergencyServices = [
    "Level I Trauma Center",
    "Stroke Center Certification",
    "Chest Pain Center",
    "Emergency Surgery",
    "Critical Care Unit",
    "Helicopter Transport",
  ];
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Patient",
      content: "The cardiology department saved my life. The doctors were incredibly skilled and caring throughout my treatment.",
      rating: 5,
      department: "Cardiology"
    },
    {
      name: "Fatima Ali",
      role: "Patient",
      content: "Excellent care in the pediatric department. My child received the best treatment possible.",
      rating: 5,
      department: "Pediatrics"
    },
    {
      name: "Omar Mohamed",
      role: "Patient",
      content: "The neurology team provided exceptional care. Professional, compassionate, and highly skilled.",
      rating: 5,
      department: "Neurology"
    }
  ];

  const medicalSpecialties = [
    {
      title: "Minimally Invasive Surgery",
      description: "Advanced surgical techniques for faster recovery and less pain",
      icon: Stethoscope,
      tile: "bg-blue-500/10",
      iconText: "text-blue-600",
    },
    {
      title: "Interventional Radiology",
      description: "Image-guided procedures for precise diagnosis and treatment",
      icon: Brain,
      tile: "bg-purple-500/10",
      iconText: "text-purple-600",
    },
    {
      title: "Genetic Medicine",
      description: "Personalized treatment based on genetic profiling",
      icon: FlaskConical,
      tile: "bg-emerald-500/10",
      iconText: "text-emerald-600",
    },
    {
      title: "Regenerative Medicine",
      description: "Cutting-edge therapies for tissue repair and regeneration",
      icon: Heart,
      tile: "bg-rose-500/10",
      iconText: "text-rose-600",
    },
  ];

  const healthTips = [
    {
      tip: "Regular check-ups can prevent 80% of health issues",
      category: "Prevention"
    },
    {
      tip: "Stay hydrated - drink 8 glasses of water daily",
      category: "Wellness"
    },
    {
      tip: "Exercise 30 minutes daily for optimal health",
      category: "Fitness"
    },
    {
      tip: "Get 7-8 hours of quality sleep each night",
      category: "Sleep"
    }
  ];
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1], // Correct cubic bezier
      },
    },
  };
  // Animation variants for header text
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
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
              Deparments
            </h1>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        {/* Emergency Services Highlight */}
        {/* <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-12">
          <div className="flex items-center mb-4">
            <Activity className="h-6 w-6 text-red-500 mr-2" />
            <h2 className="text-2xl font-bold text-red-900">
              Emergency Services - Available 24/7
            </h2>
          </div>
          <p className="text-red-800 mb-4">
            Our emergency department is staffed around the clock with
            board-certified emergency physicians and trauma specialists.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {emergencyServices.map((service, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span className="text-red-700 text-sm">{service}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="tel:+252618332419"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center font-medium"
            >
              <Activity className="h-4 w-4 mr-2" />
              Emergency: 252618332419
            </a>
          </div>
        </div> */}

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {departmentList.map((department) => (
            <motion.div
              key={department.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Link
                href={`/centers/${department.href}`}
                aria-label={`Learn more about ${department.name}`}
                className="group flex h-full flex-col rounded-2xl bg-white p-6 transition-colors duration-300 hover:bg-slate-50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0902AF]/10 text-[#0902AF] transition-colors duration-300 group-hover:bg-[#0902AF] group-hover:text-white">
                  <department.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-heading transition-colors duration-300 group-hover:text-[#0902AF]">
                  {department.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-body/80">
                  {department.description.split("\n")[0]}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#0902AF] transition-transform duration-300 group-hover:translate-x-0.5">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* <div className=" rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Advanced Medical Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                MRI & CT Imaging
              </h3>
              <p className="text-gray-600">
                State-of-the-art imaging technology for accurate diagnosis and
                treatment planning.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Robotic Surgery
              </h3>
              <p className="text-gray-600">
                Minimally invasive robotic surgical systems for enhanced
                precision and faster recovery.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Telemedicine
              </h3>
              <p className="text-gray-600">
                Remote consultation and monitoring services for convenient
                healthcare access.
              </p>
            </div>
          </div>
        </div> */}

        {/* Medical Specialties Showcase */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={headerVariants}
              className="mx-auto mb-12 max-w-2xl text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                Specialties
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
                Advanced Medical Specialties
              </h2>
              <p className="mt-3 text-base leading-relaxed text-body/80 sm:text-lg">
                Cutting‑edge specialties that combine innovation with
                compassionate care.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {medicalSpecialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className="group flex h-full flex-col rounded-2xl bg-slate-50 p-6 transition-colors duration-300 hover:bg-slate-100"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${specialty.tile} ${specialty.iconText}`}
                  >
                    <specialty.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold leading-snug text-heading sm:text-lg">
                    {specialty.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body/80">
                    {specialty.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={headerVariants}
              className="mx-auto mb-12 max-w-2xl text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                Testimonials
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
                What our patients say
              </h2>
              <p className="mt-3 text-base leading-relaxed text-body/80 sm:text-lg">
                Real stories from patients who have experienced exceptional
                care in our departments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {testimonials.map((testimonial, index) => {
                const initials = testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase();
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    className="flex h-full flex-col rounded-2xl bg-slate-50 p-6 transition-colors duration-300 hover:bg-slate-100"
                  >
                    <div className="flex items-center gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-body/90">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-slate-200/80 pt-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0902AF]/10 text-sm font-semibold text-[#0902AF]">
                        {initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-heading">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-body/70">
                          {testimonial.role}
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-[#0902AF]">
                        {testimonial.department}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Appointment Booking Section */}
      

        {/* Quality & Accreditation */}
    

        {/* Get In Touch Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={headerVariants}
              className="mx-auto mb-12 max-w-2xl text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                Contact
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-3 text-base leading-relaxed text-body/80 sm:text-lg">
                Reach out — our team is ready to help with appointments,
                directions, or any questions you have.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {contacts.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className="flex flex-col rounded-2xl bg-slate-50 p-6 transition-colors duration-300 hover:bg-slate-100"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.tile} ${item.iconText}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-heading">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={headerVariants}
              className="mx-auto mb-12 max-w-2xl text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                Why us
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
                Why choose us
              </h2>
              <p className="mt-3 text-base leading-relaxed text-body/80 sm:text-lg">
                Trusted care, modern facilities, and an experienced team —
                every day, around the clock.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className="flex h-full flex-col rounded-2xl bg-slate-50 p-6 transition-colors duration-300 hover:bg-slate-100"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.tile} ${feature.iconText}`}
                  >
                    {feature.icon && <feature.icon className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-5 text-base font-semibold leading-snug text-heading sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body/80">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
      </div>
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#0902AF] px-6 py-12 text-center sm:px-12 sm:py-16 md:py-20">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
              24/7 Emergency
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Need emergency care?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Our dedicated emergency team is always ready to assist you in
              urgent situations — any time, day or night.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="tel:+252618332419"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0902AF] transition-colors hover:bg-gray-100 sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                Call +252 61 833 2419
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20 sm:w-auto"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
