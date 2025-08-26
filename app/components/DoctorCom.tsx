"use client";

import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { DoctorCard } from "./DoctorCard";

// Dummy data for doctors
interface Doctor {
  id: string;
  fullname: string;
  specialist: string;
  image: string;
}

// Skeleton loading component
function DoctorCardSkeleton() {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
      <div className="w-full h-72 bg-slate-200 animate-pulse" />
      <div className="p-4">
        <div className="h-6 bg-slate-200 rounded animate-pulse mb-2" />
        <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4" />
        <div className="mt-4 h-1.5 w-1/3 bg-slate-200 rounded-full animate-pulse" />
      </div>
    </div>
  );
}

export function DoctorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://cms-hospitalunisoso-production-3ec8.up.railway.app/api/doctors`);
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

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
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div 
          variants={fadeUpVariants}
          className="text-center mb-12"
        >
          <div className="space-y-4">
            <span className="inline-block px-4 py-2 bg-gradient-primary text-white text-sm font-medium rounded-full shadow-lg">
              OUR DOCTOR TEAM
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-heading">
              Meet our expert doctors
            </h2>
          </div>
        </motion.div>
        
        <motion.div 
          variants={fadeUpVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 overflow-x-auto pb-4"
        >
          {loading ? (
            // Show skeleton loading cards
            Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                variants={fadeUpVariants}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <DoctorCardSkeleton />
              </motion.div>
            ))
          ) : (
            // Show actual doctor cards
            doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                variants={fadeUpVariants}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <DoctorCard
                  id={doctor.id}
                  name={doctor.fullname}
                  specialty={doctor.specialist}
                  image={doctor.image}
                />
              </motion.div>
            ))
          )}
        </motion.div>
        
        {/* View Full Team Link */}
        <motion.div 
          variants={fadeUpVariants}
          className="text-center mt-12"
        >
          <a
            href="/doctors"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary hover:bg-gradient-to-r hover:from-[#07018a] hover:to-[#0902AF] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View Full Team
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

