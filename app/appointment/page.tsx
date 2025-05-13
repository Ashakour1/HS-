"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { Label } from "@/components/ui/label";

export default function AppointmentPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*New Appointment Request*%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Subject:* ${subject}%0A
*Doctor:* ${doctor}%0A
*Date:* ${date}%0A
*Time:* ${time}%0A
*Message:* ${message}`;

    const phone = "252616590032";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
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
        <div className="container mx-auto px-4">
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
                            htmlFor="name"
                            className="text-gray-700 font-medium"
                          >
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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

                      <div className="space-y-2">
                        <Label
                          htmlFor="subject"
                          className="text-gray-700 font-medium"
                        >
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Reason for appointment"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="rounded-lg border-gray-200 h-12 focus-visible:ring-[#00A651] focus-visible:border-[#00A651]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="doctor"
                          className="text-gray-700 font-medium"
                        >
                          Select Doctor
                        </Label>
                        <select
                          id="doctor"
                          className="w-full rounded-lg border-gray-200 h-12 focus:ring-[#00A651] focus:border-[#00A651]"
                          value={doctor}
                          onChange={(e) => setDoctor(e.target.value)}
                          required
                        >
                          <option value="" disabled>
                            Select a doctor
                          </option>
                          <option>Dr. Amiin</option>
                          <option>Dr. Muna</option>
                          <option>Dr. Hussein</option>
                        </select>
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
                          htmlFor="message"
                          className="text-gray-700 font-medium"
                        >
                          Additional Information
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide any additional details about your appointment request"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="rounded-lg border-gray-200 focus-visible:ring-[#00A651] focus-visible:border-[#00A651] min-h-[120px]"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#00A651] hover:bg-[#008c44] text-white py-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group"
                      >
                        <span>Send via WhatsApp</span>
                        <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
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
                        content: "252XXXXXXX",
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
        <div className="container mx-auto px-4">
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
                icon: Calendar,
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
