"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const features = [
  {
    icon: Stethoscope,
    title: "Specialist‑led care",
    description:
      "Multidisciplinary doctors across cardiology, oncology, pediatrics, surgery and more.",
  },
  {
    icon: ShieldCheck,
    title: "Safety first",
    description:
      "International protocols and continuous training keep every patient interaction safe.",
  },
  {
    icon: HeartPulse,
    title: "Patient‑centered",
    description:
      "Personalised treatment plans with emotional and clinical support at every step.",
  },
];

const AwarenessSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/cta_2.png"
                alt="Healthcare professional at Hospital Uniso"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
                priority
              />
            </div>

            {/* Floating accreditation card */}
            <div className="absolute bottom-4 left-4 max-w-[220px] rounded-2xl bg-white p-4 ring-1 ring-slate-100 sm:left-6 sm:bottom-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0902AF]/10 text-[#0902AF]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Accredited
                  </p>
                  <p className="text-sm font-semibold text-heading">
                    Trusted hospital
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                About Hospital Uniso
              </span>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl md:text-[2.5rem] md:leading-[1.15]">
                Compassionate, specialist‑led care in the heart of Mogadishu.
              </h2>
              <p className="text-base leading-relaxed text-body sm:text-lg">
                Hospital Uniso is a leading private hospital in Somalia,
                delivering exceptional healthcare across multiple specialties.
                We blend clinical excellence with empathy — putting every
                patient and family at the center of our care.
              </p>
            </div>

            {/* Feature list */}
            <ul className="space-y-4">
              {features.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-3.5">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0DA93E]/10 text-[#0DA93E]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-heading">{title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-body/80">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div>
              <Link
                href="/corporate/overview"
                className="group inline-flex items-center gap-1.5 rounded-full bg-[#0902AF] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#07018a]"
              >
                Read more about us
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwarenessSection;
