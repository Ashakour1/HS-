"use client";

import Image from "next/image";
import { Calendar, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { doctors } from "@/data/doctors";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function DoctorCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {doctors.map((doctor, index) => (
        <motion.div // Wrap with motion.div
          key={doctor.id}
          initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
          animate={{ opacity: 1, y: 0 }} // Animate to original position and visible
          transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay
        >
          <Card className="group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg">
            {/* Image Container */}
            <div className="aspect-[3/4] h-[300px] overflow-hidden rounded-2xl">
              <Image
                src={doctor.image || "/placeholder.svg"}
                alt={`Portrait of ${doctor.name}, ${doctor.specialty}`}
                fill
                className="object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-110 h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={Number(doctor.id) <= 3} // Prioritize first 3 images for LCP
              />
              {/* Gradient Overlay - Only appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-2xl" />
              {/* Doctor Info Overlay - Only appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-xl">{doctor.name}</h3>
                <p className="text-lg font-medium opacity-90 drop-shadow-md">{doctor.specialty}</p>
              </div>
            </div>
            {/* Card Content (visible by default) */}
            <CardContent className="p-4 pt-2">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{doctor.specialty}</Badge>
                {/* Add more badges if needed, e.g., "Available" */}
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>{doctor.name.toLowerCase().replace(/\s/g, ".")}@example.com</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
