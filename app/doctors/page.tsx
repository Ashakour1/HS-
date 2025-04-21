"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Heart,
  Mail,
  MapPin,
  Phone,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Doctor data
const doctors = [
  {
    id: 1,
    name: "Prof.Dr. Mohamed Amiin",
    specialty: "Director of Hospital & Surgeon",
    image: "/dr2.jpg",
    education: "MD, Harvard Medical School",
    experience: "15+ years",
    languages: ["English", "Arabic"],
    bio: "Dr. Mohamed Amiin is a highly skilled surgeon with over 15 years of experience in general and specialized surgical procedures. As the Director of the Hospital, he oversees all medical operations while maintaining an active surgical practice.",
    specializations: [
      "General Surgery",
      "Laparoscopic Surgery",
      "Trauma Surgery",
    ],
    availability: [
      { day: "Monday", hours: "9:00 AM - 1:00 PM" },
      { day: "Wednesday", hours: "2:00 PM - 6:00 PM" },
      { day: "Friday", hours: "10:00 AM - 3:00 PM" },
    ],
    ratings: 4.9,
    reviewCount: 127,
  },
  {
    id: 2,
    name: "Dr. Muna Ahmed",
    specialty: "Pediatrician",
    image: "/dr.jpg",
    education: "MD, Johns Hopkins University",
    experience: "10+ years",
    languages: ["English", "Somali", "Arabic"],
    bio: "Dr. Muna Ahmed is a compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence. She specializes in developmental pediatrics and preventive care.",
    specializations: [
      "General Pediatrics",
      "Developmental Pediatrics",
      "Preventive Care",
    ],
    availability: [
      { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    ],
    ratings: 4.8,
    reviewCount: 98,
  },
  {
    id: 3,
    name: "Dr. Hussein Abshir",
    specialty: "Oncologist",
    image: "/dr1.jpg",
    education: "MD, Stanford University",
    experience: "12+ years",
    languages: ["English", "Arabic"],
    bio: "Dr. Hussein Abshir is a dedicated oncologist specializing in the diagnosis and treatment of various types of cancer. He is committed to providing personalized care and innovative treatment options for his patients.",
    specializations: ["Medical Oncology", "Hematology", "Cancer Research"],
    availability: [
      { day: "Monday", hours: "1:00 PM - 6:00 PM" },
      { day: "Wednesday", hours: "9:00 AM - 1:00 PM" },
      { day: "Thursday", hours: "1:00 PM - 6:00 PM" },
    ],
    ratings: 4.7,
    reviewCount: 112,
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    text: "The doctors at this hospital are exceptional. Dr. Mohamed performed my surgery with incredible skill and care. The entire staff was supportive throughout my recovery process.",
    author: "Sarah Johnson",
    role: "Patient",
  },
  {
    id: 2,
    text: "Dr. Muna has been our family pediatrician for years. Her gentle approach and thorough care have made all the difference for my children. I couldn't recommend her more highly.",
    author: "Ahmed Hassan",
    role: "Parent",
  },
  {
    id: 3,
    text: "When I was diagnosed with cancer, Dr. Hussein guided me through every step of my treatment with compassion and expertise. His knowledge and dedication gave me hope during a difficult time.",
    author: "Maria Garcia",
    role: "Cancer Survivor",
  },
];

// News data

export default function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<
    null | (typeof doctors)[0]
  >(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const openDoctorDetails = (doctor: (typeof doctors)[0] | null) => {
    setSelectedDoctor(doctor);
  };

  const closeDoctorDetails = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-[#00A651] to-[#00A651]/80">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Doctors</h1>
          <p className="text-xl max-w-2xl text-center">
            Meet our team of experienced healthcare professionals dedicated to
            providing you with the best medical care.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        ></div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Expert Medical Professionals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our doctors are leaders in their fields with years of experience
              and a commitment to excellence in patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group"
                onClick={() => openDoctorDetails(doctor)}
              >
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={
                      doctor.image || "/placeholder.svg?height=400&width=300"
                    }
                    alt={doctor.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <Star
                      className="w-4 h-4 text-yellow-400 mr-1"
                      fill="#FACC15"
                    />
                    <span>
                      {doctor.ratings} ({doctor.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-[#00A651] font-medium mb-2">
                        {doctor.specialty}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {doctor.experience} Experience
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-gray-100 hover:bg-[#00A651] hover:text-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-[#00A651]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read testimonials from patients who have experienced our care
              firsthand.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8 md:p-12">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#00A651] rounded-full flex items-center justify-center text-white">
                  <User className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">
                    {testimonials[activeTestimonial].author}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial
                    ? "bg-[#00A651] w-6"
                    : "bg-gray-300"
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are here to help. Reach out to us through any of these
              channels.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Emergency",
                content: "+1 234 567 890",
                icon: Phone,
                color: "bg-[#00A651]",
                iconColor: "text-white",
                textColor: "text-white",
              },
              {
                title: "Location",
                content: "123 Medical Center Dr",
                icon: MapPin,
                color: "bg-white",
                iconColor: "text-[#00A651]",
                textColor: "text-gray-800",
              },
              {
                title: "Email",
                content: "info@hospital.com",
                icon: Mail,
                color: "bg-white",
                iconColor: "text-[#00A651]",
                textColor: "text-gray-800",
              },
              {
                title: "Working Hours",
                content: "Mon-Fri: 9AM-5PM",
                icon: Clock,
                color: "bg-white",
                iconColor: "text-[#00A651]",
                textColor: "text-gray-800",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`text-center ${item.color} shadow-md hover:shadow-lg transition-shadow`}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      index === 0 ? "bg-white" : "bg-[#00A651]/10"
                    }`}
                  >
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 ${item.textColor}`}>
                    {item.title}
                  </h3>
                  <p
                    className={`${item.textColor} ${
                      index === 0 ? "opacity-90" : "text-gray-600"
                    }`}
                  >
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Details Modal */}
      <Dialog open={selectedDoctor !== null} onOpenChange={closeDoctorDetails}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedDoctor && (
            <div className="flex flex-col md:flex-row">
              {/* Doctor Image - Left Side */}
              <div className="md:w-2/5 relative h-[300px] md:h-auto">
                <Image
                  src={
                    selectedDoctor.image ||
                    "/placeholder.svg?height=600&width=400"
                  }
                  alt={selectedDoctor.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Doctor Details - Right Side */}
              <div className="md:w-3/5 p-6 max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-800">
                    {selectedDoctor.name}
                  </DialogTitle>
                  <DialogDescription className="text-[#00A651] font-medium">
                    {selectedDoctor.specialty}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 space-y-6">
                  {/* Quick Info */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <Star
                        className="w-5 h-5 text-yellow-400 mr-1"
                        fill="#FACC15"
                      />
                      <span className="font-medium">
                        {selectedDoctor.ratings}
                      </span>
                      <span className="text-gray-500 ml-1">
                        ({selectedDoctor.reviewCount} reviews)
                      </span>
                    </div>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 px-3 py-1"
                    >
                      <Award className="w-4 h-4" />
                      {selectedDoctor.experience}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 px-3 py-1"
                    >
                      <BookOpen className="w-4 h-4" />
                      {selectedDoctor.education}
                    </Badge>
                  </div>

                  {/* Tabs for different sections */}
                  <Tabs defaultValue="about" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="about">About</TabsTrigger>
                      <TabsTrigger value="specializations">
                        Specializations
                      </TabsTrigger>
                      <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    </TabsList>

                    <TabsContent value="about" className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Biography
                        </h4>
                        <p className="text-gray-600">{selectedDoctor.bio}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Languages
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedDoctor.languages.map((language, index) => (
                            <Badge key={index} variant="secondary">
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="specializations" className="space-y-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Areas of Expertise
                      </h4>
                      <ul className="space-y-2">
                        {selectedDoctor.specializations.map(
                          (specialization, index) => (
                            <li key={index} className="flex items-start">
                              <Heart className="w-5 h-5 text-[#00A651] mr-2 mt-0.5" />
                              <span>{specialization}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </TabsContent>

                    <TabsContent value="schedule" className="space-y-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Available Hours
                      </h4>
                      <div className="space-y-3">
                        {selectedDoctor.availability.map((slot, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 border rounded-lg"
                          >
                            <div className="flex items-center">
                              <Calendar className="w-5 h-5 text-[#00A651] mr-2" />
                              <span className="font-medium">{slot.day}</span>
                            </div>
                            <span className="text-gray-600">{slot.hours}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Appointment Button */}
                  <div className="pt-4">
                    <Link
                      href="/appointment"
                      className="w-full px-4 py-2 rounded text-white  bg-[#00A651] hover:bg-[#008f45]"
                    >
                      Book an Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
