"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Syringe,
  Baby,
  User,
  Microscope,
  Phone,
  MapPin,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "General Checkup",
      description:
        "Regular health checkups for early diagnosis and prevention.",
      icon: Stethoscope,
    },
    {
      title: "Emergency Services",
      description:
        "24/7 emergency care for urgent health conditions and accidents.",
      icon: ShieldCheck,
    },
    {
      title: "Cardiology",
      description:
        "Heart-related diagnosis and treatments by expert cardiologists.",
      icon: HeartPulse,
    },
    {
      title: "Vaccinations",
      description: "Get vaccinated safely and timely for all age groups.",
      icon: Syringe,
    },
    {
      title: "Pediatrics",
      description: "Complete child healthcare in a caring environment.",
      icon: Baby,
    },
    {
      title: "Dental Care",
      description: "Full dental services for prevention and treatment.",
      icon: User,
    },
  ];

  const contacts = [
    {
      title: "Emergency",
      content: "+1 234 567 890",
      icon: Phone,
      color: "bg-[#00A651]",
      text: "text-white",
    },
    {
      title: "Location",
      content: "123 Medical Center Dr",
      icon: MapPin,
      color: "bg-blue-100",
      text: "text-gray-800",
    },
    {
      title: "Email",
      content: "info@hospital.com",
      icon: Mail,
      color: "bg-blue-100",
      text: "text-gray-800",
    },
    {
      title: "Working Hours",
      content: "Mon-Fri: 9AM - 5PM",
      icon: Clock,
      color: "bg-blue-100",
      text: "text-gray-800",
    },
  ];

  const features = [
    {
      title: "Modern Equipment",
      description: "Advanced tools for accurate diagnosis and treatment.",
      icon: Microscope,
    },
    {
      title: "Trusted Doctors",
      description: "Highly skilled and experienced medical professionals.",
      icon: ShieldCheck,
    },
    {
      title: "Patient First",
      description: "Our services revolve around your comfort and care.",
      icon: HeartPulse,
    },
    {
      title: "24/7 Access",
      description: "We are here for you anytime, day or night.",
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="h-[300px] bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-[#00A651]">Our Services</h1>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="text-center shadow-md border-t-4 border-[#00A651]"
            >
              <CardContent className="p-6">
                <service.icon className="w-10 h-10 text-[#00A651] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#00A651] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
                <Button className="mt-4 bg-[#00A651] hover:bg-[#008c44] text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-[#00A651] mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {contacts.map((item, i) => (
              <Card
                key={i}
                className={`text-center ${item.color} ${item.text}`}
              >
                <CardContent className="p-6">
                  <item.icon className={`w-8 h-8 mx-auto mb-4 ${item.text}`} />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="text-center shadow-sm border">
              <CardContent className="p-6">
                <feature.icon className="w-8 h-8 text-[#00A651] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#00A651] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1983ed] text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Care?</h2>
          <p className="max-w-xl mx-auto mb-6">
            Our emergency team is always ready to assist you in urgent
            situations.
          </p>
          <Button className="bg-white text-[#00A651] hover:bg-gray-100 font-semibold">
            Contact Emergency
          </Button>
        </div>
      </section>
    </div>
  );
}
