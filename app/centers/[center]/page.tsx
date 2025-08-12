"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Users, Award, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { departments } from "@/data/departments";
import { notFound } from "next/navigation";

const InternalMedicinePage = () => {
  const params = useParams();
  const center = params.center as string;
  const centerData = departments[center as keyof typeof departments];

  if (!centerData) {
    return notFound();
  }

  console.log(centerData);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-[250px] overflow-hidden">
        <Image
          src="/hero.png"
          alt="Hospital Management"
          fill
          className="object-cover"
          priority
        />
        
        {/* Simple overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 w-full">
            <div className="max-w-3xl">
              {/* Enhanced text design */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                {centerData.name}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl font-medium leading-relaxed drop-shadow-md">
                Excellence in healthcare, delivered with compassion and expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Center Info Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={centerData.image ? centerData.image : "/hero.png"}
                alt={
                  centerData.image
                    ? `${centerData.name} Image`
                    : "Hospital Management"
                }
                fill
                className="object-cover"
                priority
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{centerData.doctors.length}</p>
                  <p className="text-sm text-gray-600">Specialists</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="h-4 w-4" />
              Premier Department
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {centerData.name} Department at HOSPITAL UNISO
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {centerData.description}
            </p>
            
            {/* Enhanced features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">24/7 Care</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-gray-700 font-medium">Modern Facility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Doctors Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our {centerData.name} Specialists
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of experienced professionals is dedicated to providing exceptional care with the latest medical advancements
          </p>
        </div>
        
        <div className="flex flex-row flex-nowrap justify-start gap-6 overflow-x-auto">
          {centerData.doctors.map((doctor: any) => (
            <div
              key={doctor.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-80"
            >
              {/* Doctor image with proper height to show full face */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  <div className="text-green-600 font-semibold text-lg mb-2">
                    {doctor.title}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">{doctor.exp} experience</span>
                  </div>
                </div>

                {/* CTA button with redirect to appointment */}
                <Button
                  onClick={() => window.location.href = '/appointment'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
                >
                  Book Appointment
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Simple accent bar */}
              <div className="h-1 w-full bg-blue-600"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InternalMedicinePage;
