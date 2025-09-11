"use client";

import { Award, Clock, MapPin } from "lucide-react";
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

    </div>
  );
};

export default InternalMedicinePage;
