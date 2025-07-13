"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Sun,
  ClipboardList,
  UserCog,
  Baby,
  ShipWheel as Wheelchair,
  Footprints as Walk,
  PlusSquare,
  Infinity,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function HealthcareServices() {
  const services = [
    {
      icon: <Sun className="w-6 h-6 text-white" />,
      title: "Emergency Care",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-white" />,
      title: "Diagnostics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <UserCog className="w-6 h-6 text-white" />,
      title: "Surgery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Baby className="w-6 h-6 text-white" />,
      title: "Maternity",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Wheelchair className="w-6 h-6 text-white" />,
      title: "Outpatient / Inpatient",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Walk className="w-6 h-6 text-white" />,
      title: "Rehabilitation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <PlusSquare className="w-6 h-6 text-white" />,
      title: "Pharmacy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Infinity className="w-6 h-6 text-white" />,
      title: "Free Checkup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  // Animation variants for service cards
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4 text-green-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            Our Healthcare Services
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            Custom designs delivered quickly with unlimited requests and
            revisions—no delays, no limits, no compromises.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className="text-left shadow-sm rounded-xl hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6 flex flex-col items-start">
                  <div className="w-14 h-14 mb-4 bg-emerald-600 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Learn More
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
