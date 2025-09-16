"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { Label } from "@/components/ui/label";

interface Doctor {
  id: string;
  fullname: string;
  specialist: string;
  experience: number;
}

export default function AppointmentPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch doctors from API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("https://cms-hospitalunisoso-production-3ec8.up.railway.app/api/doctors");
        if (response.ok) {
          const data = await response.json();
          setDoctors(data);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const appointmentData = {
        fullname,
        email,
        phone,
        date: new Date(date).toISOString(),
        time,
        reason,
        doctorId,
      };

      const response = await fetch("https://cms-hospitalunisoso-production-3ec8.up.railway.app/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        // Send WhatsApp message
        const selectedDoctor = doctors.find(d => d.id === doctorId);
        const doctorName = selectedDoctor ? `Dr. ${selectedDoctor.fullname} (${selectedDoctor.specialist})` : 'Selected Doctor';
        
        const whatsappMessage = `*New Appointment Request* 

 *Patient Details:*
 Name: ${fullname}
 Email: ${email}
 Phone: ${phone}

*Doctor:* ${doctorName}

 *Appointment Details:*
• Date: ${new Date(date).toLocaleDateString()}
• Time: ${time}
• Reason: ${reason}

Please confirm this appointment.`;

        const whatsappUrl = `https://wa.me/252618332419?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Success - show success message and reset form
        alert("Appointment request submitted successfully! WhatsApp message sent. We will contact you soon.");
        resetForm();
      } else {
        // Error handling
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Failed to submit appointment"}`);
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
      alert("Failed to submit appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFullname("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setReason("");
    setDoctorId("");
  };

  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    setDoctorId(selectedId);
  };

  return (
    <div className="min-h-screen bg-white">
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
              Appointment Request
            </h1>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-20" id="appointment-form">
        <div className="max-w-[1500px] mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left Column - Form */}
              <div className="lg:col-span-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Request Your Appointment
                  </h2>
                  <div className="w-20 h-1 bg-[#0E74FC] rounded-full mb-6"></div>
                  <p className="text-gray-600">
                    Fill out the form below to schedule your appointment. Our
                    team will contact you shortly to confirm.
                  </p>
                </div>

                <Card className="border-none shadow-lg overflow-hidden rounded-xl">
                  <CardContent className="p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="fullname"
                            className="text-gray-700 font-medium"
                          >
                            Full Name
                          </Label>
                          <Input
                            id="fullname"
                            placeholder="Enter your full name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className="rounded-lg border-gray-200 h-12 focus-visible:ring-[#00A651] focus-visible:border-[#00A651]"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-gray-700 font-medium"
                          >
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-lg border-gray-200 h-12 focus-visible:ring-[#00A651] focus-visible:border-[#00A651]"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-gray-700 font-medium"
                          >
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="rounded-lg border-gray-200 h-12 focus-visible:ring-[#00A651] focus-visible:border-[#00A651]"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="doctorId"
                            className="text-gray-700 font-medium"
                          >
                            Select Doctor
                          </Label>
                          <select
                            id="doctorId"
                            className="w-full rounded-lg pl-2 border border-gray-200 h-12 focus:ring-[#00A651] focus:border-[#00A651]"
                            value={doctorId}
                            onChange={handleDoctorChange}
                            required
                          >
                            <option value="" disabled>
                              {isLoading ? "Loading doctors..." : "Select a doctor"}
                            </option>
                            {doctors.map((doctor) => (
                              <option key={doctor.id} value={doctor.id}>
                                Dr. {doctor.fullname} - {doctor.specialist}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>


                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="date"
                            className="text-gray-700 font-medium"
                          >
                            Preferred Date
                          </Label>
                          <Input
                            id="date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="rounded-lg border-gray-200 h-12 focus-visible:ring-[#00A651] focus-visible:border-[#00A651]"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="time"
                            className="text-gray-700 font-medium"
                          >
                            Preferred Time
                          </Label>
                          <Input
                            id="time"
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="rounded-lg border-gray-200 h-12 focus-visible:ring-[#00A651] focus-visible:border-[#00A651]"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="reason"
                          className="text-gray-700 font-medium"
                        >
                          Reason for Appointment
                        </Label>
                        <Textarea
                          id="reason"
                          placeholder="Please describe the reason for your appointment"
                          value={reason}
                          onChange={(e) => setReason(e.target.value)}
                          className="rounded-lg border-gray-200 focus-visible:ring-[#00A651] focus-visible:border-[#00A651] min-h-[120px]"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#00A651] hover:bg-[#008c44] text-white py-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <span>Submit Appointment Request</span>
                            <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Contact Info & Schedule */}
              <div className="lg:col-span-4 space-y-8">
                {/* Contact Info Card */}
                <Card className="border-none shadow-lg overflow-hidden rounded-xl">
                  <div className="bg-[#0E74FC] px-6 py-4">
                    <h3 className="text-xl font-bold text-white">
                      Contact Information
                    </h3>
                  </div>
                  <CardContent className="p-0">
                    {[
                      {
                        title: "Emergency",
                        content: "252618332419",
                        icon: Phone,
                      },
                      {
                        title: "Location",
                        content: "Holwadaag, Banaadir Somalia",
                        icon: MapPin,
                      },
                      {
                        title: "Email",
                        content: "info@hospitaluniso.com",
                        icon: Mail,
                      },
                      {
                        title: "Working Hours",
                        content: "Sat-Fri: 9AM-5PM",
                        icon: Clock,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-4 p-5 ${
                          index !== 3 ? "border-b border-gray-100" : ""
                        }`}
                      >
                        <div className="bg-[#00A651]/10 rounded-full p-3">
                          <item.icon className="w-5 h-5 text-[#00A651]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-gray-600">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Schedule Hours Card */}
                <Card className="border-none shadow-lg overflow-hidden rounded-xl">
                  <div className="bg-[#0E74FC] px-6 py-4">
                    <h3 className="text-xl font-bold text-white">
                      Schedule Hours
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {[
                        { day: "Monday", hours: "08:00 - 5:00" },
                        { day: "Tuesday", hours: "08:00 - 5:00" },
                        { day: "Wednesday", hours: "08:00 - 5:00" },
                        { day: "Thursday", hours: "08:00 - 5:00" },
                        { day: "Friday", hours: "08:00 - 5:00" },
                        { day: "Saturday", hours: "08:00 - 5:00" },
                        { day: "Sunday", hours: "8:00 - 5:00" },
                      ].map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                        >
                          <span className="font-medium text-gray-800">
                            {schedule.day}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              schedule.hours === "Emergency Only"
                                ? "bg-red-100 text-red-700"
                                : "bg-[#00A651]/10 text-[#00A651]"
                            }`}
                          >
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
                        <div className="bg-red-100 rounded-full p-2">
                          <Phone className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-red-700">
                            Emergency Services:
                          </h4>
                          <p className="text-gray-700">Available 24/7</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-[#00A651] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide exceptional healthcare services with a focus on patient
              comfort and advanced medical treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Expert Doctors",
                description:
                  "Our team consists of highly qualified medical professionals with years of experience.",
                icon: CheckCircle,
              },
              {
                title: "24/7 Support",
                description:
                  "We offer round-the-clock emergency services to ensure you get care when you need it most.",
                icon: Phone,
              },
              {
                title: "Modern Facilities",
                description:
                  "Our hospital is equipped with state-of-the-art technology for accurate diagnosis and treatment.",
                icon: CheckCircle,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="bg-[#00A651]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#00A651]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
