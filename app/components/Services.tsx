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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            className="text-sm font-semibold text-gray-500 uppercase mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            HEALTH SOLUTIONS
          </motion.p>
          <motion.h2
            className="text-4xl font-bold mb-4 text-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            Healthcare services for your well-being
          </motion.h2>
        </div>
        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentList.slice(0, 6).map((department, index: number) => (
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

        {/* View All Departments Link */}
        <div className="mt-20 text-center">
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            View All Departments
            <ArrowRight className="w-4 h-4" />
          </Link>
          </div>
      </div>
    </section>
  );
}
