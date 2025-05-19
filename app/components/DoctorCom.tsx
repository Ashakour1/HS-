"use client";

import Image from "next/image";
import { Calendar, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {doctors} from "@/data/doctors";

export default function DoctorCards() {
  

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {doctors.map((doctor) => (
        <Card
          key={doctor.id}
          className="overflow-hidden border-none rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
        >
          <div className="relative h-[420px] overflow-hidden">
            <Image
              src={doctor.image || "/dr.jpg"}
              alt={doctor.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute top-4 left-4">
              <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white border-none">
                {doctor.title}
              </Badge>
            </div>
          </div>

          <CardContent>
            <h3 className="font-bold text-xl">{doctor.name}</h3>
            <p className="text-muted-foreground mb-2">{doctor.title}</p>
            <div className="flex items-center text-sm text-muted-foreground mt-3">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Available: {doctor.availability}</span>
            </div>
          </CardContent>

          <CardFooter className="px-6 pb-6 pt-0">
            <Button
            onClick={() => window.location.href = "/appointment"}
              className="w-full bg-[#0E74FC] hover:bg-[#0A5FD3] text-white"
              size="lg"
            >
              <Phone className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
