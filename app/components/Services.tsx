"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { departments } from "@/data/departments"; // Import departments data

export default function HealthcareServices() {
  // Animation variants for department cards
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

  const departmentList = Object.values(departments);

  return (
    <section className="py-20 bg-[#16204F]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-primary text-white text-sm font-medium rounded-full mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            HEALTH SERVICES
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white text-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            Healthcare services for your well-being
          </motion.h2>
          <motion.p
            className="text-lg text-white/90 max-w-2xl mx-auto text-body"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            Comprehensive medical care across multiple specialties, delivered with expertise and compassion
          </motion.p>
        </div>
        
        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentList.slice(0, 6).map((department, index: number) => {
            // Use only the two specified colors alternating
            const iconColors = [
              "bg-[#16204F]", // First color
              "bg-[#043A17]", // Second color
              "bg-[#16204F]", // First color
              "bg-[#043A17]", // Second color
              "bg-[#16204F]", // First color
              "bg-[#043A17]", // Second color
            ];

            return (
              <motion.div
                key={department.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="h-full"
              >
                <Card className="bg-transparent text-left shadow-lg rounded-2xl border border-slate-700 hover:shadow-2xl hover:-translate-y-2 hover:border-accent transition-all duration-300 h-full group">
                  <CardContent className="p-6 flex flex-col items-start h-full">
                    <div className={`w-14 h-14 mb-4 ${iconColors[index]} rounded-2xl flex items-center justify-center transition-all duration-300`}>
                      <department.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-3 text-lg group-hover:text-accent transition-colors duration-300 text-heading">
                      {department.name}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-grow leading-relaxed text-sm text-body">
                      {department.description.split("\n")[0]}...
                    </p>
                    <Link
                      href={`/centers/${department.href}`}
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-green font-medium transition-colors duration-300 mt-auto group-hover:underline"
                      aria-label={`Learn more about ${department.name}`}
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View All Departments Link */}
        <div className="mt-20 text-center">
          <Link
            href="/departments"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary hover:bg-gradient-to-r hover:from-[#07018a] hover:to-[#0902AF] text-white font-semibold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Departments
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
