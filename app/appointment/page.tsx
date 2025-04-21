"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Image from "next/image";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image
          src="/background.jpg"
          alt="Medical Appointment"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Book An Appointment</h1>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-xl mx-auto">
              Please fill out the form below to schedule your appointment. Our
              team will contact you to confirm the details.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#00A651] mb-8 text-center">
              SUBMIT A REQUEST
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              />

              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              />

              <Input
                placeholder="Enter your subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              />

              <select
                className="w-full p-3 border rounded-md text-gray-700"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a doctor
                </option>
                <option>Dr. Aamiin</option>
                <option>Dr. Muna</option>
                <option>Dr. Hussein</option>
              </select>

              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              />

              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              />

              <Textarea
                placeholder="Write your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border rounded-md min-h-[150px]"
                required
              />

              <Button
                type="submit"
                className="w-full bg-[#00A651] hover:bg-[#008c44] text-white py-6"
              >
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact and Schedule Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Emergency",
                  content: "+1 234 567 890",
                  icon: Phone,
                  color: "bg-blue-100",
                },
                {
                  title: "Location",
                  content: "123 Medical Center Dr",
                  icon: MapPin,
                  color: "bg-[#00A651]",
                },
                {
                  title: "Email",
                  content: "info@hospital.com",
                  icon: Mail,
                  color: "bg-blue-100",
                },
                {
                  title: "Working Hours",
                  content: "Mon-Fri: 9AM-5PM",
                  icon: Clock,
                  color: "bg-blue-100",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`text-center ${item.color} ${
                    index === 1 ? "text-white" : "text-gray-800"
                  }`}
                >
                  <CardContent className="p-6">
                    <item.icon
                      className={`w-8 h-8 mx-auto mb-4 ${
                        index === 1 ? "text-white" : "text-[#00A651]"
                      }`}
                    />
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Schedule Hours */}
            <Card className="bg-[#00A651] text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Schedule Hours</h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday", hours: "09:00 - 18:00" },
                    { day: "Tuesday", hours: "09:00 - 18:00" },
                    { day: "Wednesday", hours: "09:00 - 18:00" },
                    { day: "Thursday", hours: "09:00 - 18:00" },
                    { day: "Friday", hours: "09:00 - 18:00" },
                    { day: "Saturday", hours: "10:00 - 15:00" },
                    { day: "Sunday", hours: "Emergency Only" },
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span>{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <h4 className="font-bold mb-2">Emergency:</h4>
                  <p>24/7 Available</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
