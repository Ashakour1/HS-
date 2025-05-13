"use client";

import { X, Share2, Facebook, Twitter, Linkedin, Phone, Mail, Download } from "lucide-react";
import { FaWhatsapp as WhatsApp } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Dummy member data for testing (replace this with your actual member prop or API data)
const member = {
  name: "Dr. Amina Yusuf",
  role: "Cardiologist",
  specialty: "Cardiovascular Diseases",
  languages: "English, Swahili",
  location: "Nairobi, Kenya",
  phone: "+254 700 123456",
  email: "amina@example.com",
  image: "/doctor.jpg",
  certifications: ["MBChB - University of Nairobi", "Fellowship in Cardiology - Harvard Medical School"],
  schedule: [
    { day: "Monday", time: "9:00 AM - 4:00 PM" },
    { day: "Wednesday", time: "10:00 AM - 2:00 PM" },
    { day: "Friday", time: "8:00 AM - 1:00 PM" },
  ],
};

export default function DoctorProfilePage() {
  return (
    <div className="p-4 md:p-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="lg:w-2/3 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">{member.name}</h2>
            <p className="text-blue-600">{member.role}</p>
          </div>

          <div className="space-y-2">
            <p><strong>Specialty:</strong> {member.specialty}</p>
            <p><strong>Languages:</strong> {member.languages}</p>
            <p><strong>Location:</strong> {member.location}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Share2 className="w-5 h-5 text-slate-600" />
              <span className="text-slate-600 font-medium">Share This Profile:</span>
            </div>
            <div className="flex gap-3">
              <button className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                <Facebook className="w-5 h-5 text-blue-600" />
              </button>
              <button className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                <WhatsApp className="w-5 h-5 text-green-600" />
              </button>
              <button className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                <Twitter className="w-5 h-5 text-blue-400" />
              </button>
              <button className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                <Linkedin className="w-5 h-5 text-blue-700" />
              </button>
            </div>
          </div>

          <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black">Book an Appointment</Button>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700">{member.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700">{member.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-blue-600" />
                <a href="#" className="text-blue-600 hover:underline">Click Here to Download</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Certifications & Qualifications</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              {member.certifications?.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Clinic Schedule</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-blue-500 text-white py-3 px-4 text-left">Day</th>
                  <th className="bg-blue-500 text-white py-3 px-4 text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                {member.schedule?.map((slot, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-slate-100" : "bg-white"}>
                    <td className="py-3 px-4 border-b border-slate-200">{slot.day}</td>
                    <td className="py-3 px-4 border-b border-slate-200">{slot.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 space-y-8">
          <div className="w-full max-w-[300px] mx-auto">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={300}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="w-full bg-blue-500 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Find My Doctor</h3>
            <div className="space-y-4">
              <div className="relative">
                <select className="w-full p-3 pr-8 rounded bg-white text-slate-800 appearance-none">
                  <option>Select Specialties</option>
                  <option>General Surgery</option>
                  <option>Internal Medicine</option>
                  <option>Pediatrics</option>
                  <option>Emergency Medicine</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <input
                type="text"
                placeholder="Type Doctor Name"
                className="w-full p-3 rounded bg-white text-slate-800"
              />

              <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black">Find My Doctor</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
