"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  FlaskRoundIcon as Flask,
  Clipboard,
  Pill,
  Ambulance,
  Syringe,
  Heart,
  SmileIcon as Tooth,
} from "lucide-react";

export default function HealthcareServices() {
  const services = [
    {
      icon: <Stethoscope className="w-6 h-6 text-[#0E74FC]" />,
      title: "Emergency Care",
      description: "24/7 emergency medical services for urgent health concerns",
    },
    {
      icon: <Flask className="w-6 h-6 text-[#0E74FC]" />,
      title: "Laboratory",
      description: "Comprehensive testing and diagnostic laboratory services",
    },
    {
      icon: <Clipboard className="w-6 h-6 text-[#0E74FC]" />,
      title: "Medical Check Up",
      description: "Complete health assessments and preventive screenings",
    },
    {
      icon: <Pill className="w-6 h-6 text-[#0E74FC]" />,
      title: "Pharmacy",
      description:
        "Full-service pharmacy with prescription and OTC medications",
    },
    {
      icon: <Ambulance className="w-6 h-6 text-[#0E74FC]" />,
      title: "Ambulance",
      description: "Rapid response emergency transportation services",
    },
    {
      icon: <Syringe className="w-6 h-6 text-[#0E74FC]" />,
      title: "Vaccination",
      description: "Preventive immunizations for all age groups",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#0E74FC]" />,
      title: "Cardiology",
      description: "Specialized heart care and cardiovascular treatments",
    },
    {
      icon: <Tooth className="w-6 h-6 text-[#0E74FC]" />,
      title: "Dental Care",
      description: "Complete dental services for oral health maintenance",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-[#e6f7ef] px-4 py-2 rounded-md mb-4">
            <h3 className="text-[#0E74FC] font-medium">Our Services</h3>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-gray-600">
            We offer a wide range of medical services to meet all your
            healthcare needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-none"
            >
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#e6f7ef] rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="font-medium text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
