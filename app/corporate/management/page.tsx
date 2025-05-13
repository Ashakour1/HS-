"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Phone, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HospitalManagementPage() {
  const hospitalName = "Central Medical Center";

  const director = {
    name: "Prof. Dr. Mohamed Amin Abdikarim Nur",
    role: "Executive Director",
    responsibilities: "Overseeing hospital operations and strategic planning.",
    description:
      "Prof. Dr. Mohamed Amiin Abdikarim Nur is a renowned Somali surgeon and medical educator with over 20 years of experience in general surgery and healthcare leadership.  He is the Director of the University of Somalia Hospital (UNISO), where he leads efforts in clinical excellence, medical training, and hospital development. Prof. Dr. Amiin is also an active researcher, with published work in international journals, including studies on bladder cancer. Through his roles in both healthcare and education, he continues to shape the future of medicine in Somalia and inspire the next generation of medical professionals.",
  };

  const doctors = [
    {
      name: "Dr. Muna Ahmed",
      role: "Medical Director",
      responsibilities:
        "Oversight of all medical staff, clinical quality, and patient safety initiatives",
      image: "/dr.jpg",
    },
    {
      name: "Dr Hussein Abshir",
      role: "Chief of Emergency",
      responsibilities:
        "Management of surgical departments and operating rooms",
      image: "/dr1.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <div>
        {/* Hero Section */}
        <section className="relative h-[200px] sm:h-[200px] md:h-[150px] lg:h-[150px]">
          <Image
            src="/hero.png"
            alt="Hospital Management"
            fill
            className="object-cover brightness-50"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-start px-6">
            {/* Overlay background box on the left */}
            <div className="px-0 md:px-28 py-2 rounded">
              <h1 className="text-xl sm:text-4xl lg:text-xl font-semibold text-white">
                Management Team
              </h1>
            </div>
          </div>
        </section>
        {/* Director Card */}
        <div className="mb-20 px-4 md:px-20">
          <DirectorCard director={director} hospitalName={hospitalName} />
        </div>

        {/* Doctor Cards */}
        <div className="container mx-auto my-8 px-4 md:px-20 ">
          <h2 className="mb-10 text-center text-2xl font-semibold text-slate-800">
            Management Team
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doctors.map((member, index) => (
              <PersonCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// Director Card Component
// Director Card Component
interface Director {
  name: string
  role: string
  responsibilities: string
  description: string
}

function DirectorCard({
  director,
  hospitalName,
}: {
  director: Director
  hospitalName: string
}) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
          <div className="relative w-full lg:w-2/5 max-w-md mx-auto lg:mx-0">
            {/* Image with decorative elements */}
            <div className="relative">
              {/* Blue background accent */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-500 rounded-lg"></div>

              {/* Main image */}
              <div className="relative z-10 border-4 border-white shadow-xl rounded-lg overflow-hidden">
                <Image src="/dr2.jpg" alt="Director Image" width={500} height={700} className="w-full object-cover" />
              </div>

              {/* Decorative pattern */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full z-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-200 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <Badge className="mb-3 bg-blue-100 text-blue-800 hover:bg-blue-200">Executive Leadership</Badge>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">{director.name}</h2>
            <p className="text-lg text-blue-600 font-medium mb-6">{director.role}</p>

            <div className="space-y-4 text-slate-700">
              <p>
                Prof. Dr. Mohamed Amiin Abdikarim Nur is a renowned Somali surgeon and medical educator with over 25
                years of experience in general surgery and healthcare leadership.
              </p>
              <p>
                He is the Director of the University of Somalia Hospital (UNISO), where he leads efforts in clinical
                excellence, medical training, and hospital development.
              </p>
              <p>
                Prof. Dr. Amiin is also an active researcher, with published work in international journals, including
                studies on bladder cancer. Through his roles in both healthcare and education, he continues to shape the
                future of medicine in Somalia and inspire the next generation of medical professionals.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center text-slate-600">
                <Phone className="w-5 h-5 mr-2 text-blue-500" />
                <span>+252 61 234 5678</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Mail className="w-5 h-5 mr-2 text-blue-500" />
                <span>director@unisohospital.so</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Person Card Component
interface Member {
  name: string
  role: string
  responsibilities: string
  image: string
}

function PersonCard({ member }: { member: Member }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-0 rounded-xl shadow">
      {/* Image container with fixed height and overlay effect */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <span className="text-white text-sm font-medium inline-flex items-center">
              View Profile <ChevronRight className="w-4 h-4 ml-1" />
            </span>
          </div>
        </div>
      </div>

      {/* Text content with improved styling */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
        <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
        <p className="text-slate-600 text-sm">{member.responsibilities}</p>
      </div>
    </Card>
  )
}
