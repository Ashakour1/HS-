"use client";

import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DoctorCard } from "./DoctorCard";
import { doctors } from "@/data/doctors";

export function DoctorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.section 
      ref={ref}
      variants={isInView ? fadeUpVariants : fadeInVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.1
      }}
      className="w-full py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto  px-4 md:px-6">
        <motion.div 
          variants={fadeUpVariants}
          className="flex flex-col items-start gap-4 mb-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
              <div className="w-1 h-4 bg-blue-600 rounded-full" />
              OUR DOCTOR TEAM
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
              Meet our expert doctors
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            View Full Team
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
        <motion.div 
          variants={fadeUpVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4"
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              variants={fadeUpVariants}
              transition={{ delay: index * 0.1 }}
            >
              <DoctorCard
                name={doctor.name}
                specialty={doctor.specialty}
                image={doctor.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
