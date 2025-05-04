import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface centerType {
  name: string;
  description: string;
  image: string;
  doctors: {
    id: number;
    name: string;
    title: string;
    image: string;
    exp: string;
  }[];
}

interface CenterPageProps {
  params: {
    center: string;
  };
}

import { departments } from "../../data/departments";

const InternalMedicinePage = ({ params }: CenterPageProps) => {
  const { center } = params;
  const centerData = departments[center as keyof typeof departments];

  if (!centerData) {
    return <div>Department not found</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className=" relative h-[200px] sm:h-[200px] md:h-[150px] lg:h-[150px]">
        <Image
          src="/hero.png"
          alt="Hospital Management"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-start">
          <h1 className="px-28 text-3xl sm:text-4xl lg:text-xl font-semibold text-white text-start ">
            {centerData.name}
          </h1>
        </div>
      </section>

      {/* Center Info Section */}
      <section className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-2">
        <div className="relative w-full h-[500px] aspect-video md:aspect-square rounded-md overflow-hidden">
          <Image
            src={centerData.image}
            alt={`${centerData.name} Image`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#0E74FC]">
            {centerData.name} Department at HOSPITAL UNISO
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            {centerData.description}
          </p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="max-w-[1400px] mx-auto px-4 py-12">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-10 text-[#0E74FC] text-center">
          Meet Our {centerData.name} Specialists
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {centerData.doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group relative flex flex-col border border-[#00A651] bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-4 sm:p-5 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {doctor.name}
                    </h3>
                    <div className="text-xs text-[#00A651] font-medium">
                      {doctor.title}
                    </div>
                    <div className="text-xs text-gray-500">{doctor.exp}+</div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-xs text-blue-600 hover:text-blue-700 bg-blue-50"
                >
                  Book Appointment
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
              <div className="h-1 w-full bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InternalMedicinePage;
