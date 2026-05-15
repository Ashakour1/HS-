"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DoctorCard } from "./DoctorCard";

interface Doctor {
  id: string;
  fullname: string;
  specialist: string;
  image: string;
  experience?: number;
  languages?: string[];
  consultationFee?: number;
}

function DoctorCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl bg-slate-50">
      <div className="aspect-[4/5] w-full animate-pulse bg-slate-100" />
      <div className="space-y-3 p-5">
        <div className="h-5 w-24 animate-pulse rounded-full bg-slate-200" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-slate-200" />
      </div>
    </div>
  );
}

export function DoctorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://cms-hospitalunisoso-production-3ec8.up.railway.app/api/doctors"
        );
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-white py-16 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
            Our doctor team
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
            Meet our expert doctors
          </h2>
          <p className="mt-3 text-base leading-relaxed text-body/80 sm:text-lg">
            A team of specialists dedicated to delivering compassionate,
            evidence‑based care for every patient.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <DoctorCardSkeleton key={`skeleton-${index}`} />
              ))
            : doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  id={doctor.id}
                  name={doctor.fullname}
                  specialty={doctor.specialist}
                  image={doctor.image}
                  experience={doctor.experience}
                  languages={doctor.languages}
                  consultationFee={doctor.consultationFee}
                />
              ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <Link
            href="/doctors"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#0902AF] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#07018a]"
          >
            View full team
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
