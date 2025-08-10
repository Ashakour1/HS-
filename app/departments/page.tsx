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
      color: "bg-emerald-600", // Changed to a more direct green
      text: "text-white",
    },
    {
      title: "Location",
      content: "Howlwadaag Street, Mogadishu",
      icon: MapPin,
      color: "bg-blue-50", // Lighter blue for contrast
      text: "text-gray-800",
    },
    {
      title: "Email",
      content: "info@hospital.com",
      icon: Mail,
      color: "bg-blue-50",
      text: "text-gray-800",
    },
    {
      title: "Working Hours",
      content: "Mon-Fri: 9AM - 5PM",
      icon: Clock,
      color: "bg-blue-50",
      text: "text-gray-800",
    },
  ];

  const features = [
    {
      title: "Modern Equipment",
      description: "Advanced tools for accurate diagnosis and treatment.",
      icon: Stethoscope, // Example icon
    },
    {
      title: "Trusted Doctors",
      description: "Highly skilled and experienced medical professionals.",
      icon: HeartPulse, // Example icon
    },
    {
      title: "Patient First",
      description: "Our services revolve around your comfort and care.",
      icon: FlaskConical, // Example icon
    },
    {
      title: "24/7 Access",
      description: "We are here for you anytime, day or night.",
      icon: Ambulance, // Example icon
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {departmentList.map((department, index: number) => (
            <motion.div
              key={department.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className="text-left shadow-sm rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6 flex flex-col items-start">
                  <div className="w-12 h-12 mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <department.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {department.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {department.description.split("\n")[0]}...
                  </p>{" "}
                  {/* Display first line of description */}
                  <Link
                    href={`/centers/${department.href}`}
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                    aria-label={`Learn more about ${department.name}`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </CardContent>
              </Card>
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

        {/* Quality & Accreditation */}
        <section className=" py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12 text-gray-900">
              Get In Touch
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contacts.map((item, i) => (
                <Card
                  key={i}
                  className={`text-center p-6 rounded-lg shadow-sm ${item.color} ${item.text} hover:shadow-md transition-all duration-300`}
                >
                  <item.icon
                    className={`w-10 h-10 mx-auto mb-4 ${item.text}`}
                  />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm">{item.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12 text-gray-900">
              Why Choose Us
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <Card
                  key={idx}
                  className="text-center p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                    {feature.icon && <feature.icon className="w-8 h-8" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
      </div>
      <section className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Emergency Care?
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-lg">
            Our dedicated emergency team is always ready to assist you in urgent
            situations, 24/7.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-emerald-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all hover:shadow-lg text-lg"
          >
            Contact Emergency
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
