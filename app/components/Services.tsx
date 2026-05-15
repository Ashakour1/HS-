"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { departments } from "@/data/departments";

export default function HealthcareServices() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const departmentList = Object.values(departments);

  // Alternating soft brand tones — flat fills, no gradients, no shadows.
  const palettes = [
    {
      iconBg: "bg-[#0902AF]/10",
      iconText: "text-[#0902AF]",
      linkText: "text-[#0902AF]",
    },
    {
      iconBg: "bg-[#0DA93E]/10",
      iconText: "text-[#0DA93E]",
      linkText: "text-[#0DA93E]",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
            Health services
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
            className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
          >
            Healthcare services for your{" "}
            <span className="text-[#0902AF]">well‑being</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
            className="mt-4 text-base leading-relaxed text-body sm:text-lg"
          >
            Comprehensive medical care across multiple specialties, delivered
            with expertise and compassion.
          </motion.p>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {departmentList.slice(0, 6).map((department, index) => {
            const palette = palettes[index % palettes.length];
            const Icon = department.icon;
            const description = department.description.split("\n")[0];

            return (
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
                  className="group flex h-full flex-col rounded-2xl bg-white p-6 transition-colors duration-300 hover:bg-white/70"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${palette.iconBg} ${palette.iconText}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold leading-snug text-heading">
                    {department.name}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-body/80">
                    {description}
                  </p>

                  <span
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${palette.linkText} transition-transform duration-300 group-hover:translate-x-0.5`}
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All */}
        <div className="mt-14 flex justify-center md:mt-16">
          <Link
            href="/departments"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0902AF] px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#07018a]"
          >
            View all departments
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
