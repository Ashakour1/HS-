"use client";

import {
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  Download
} from "lucide-react";
import { FaWhatsapp as WhatsApp } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useParams, notFound } from "next/navigation";
import { doctors } from "@/data/doctors";

// Define the Doctor type
type Doctor = {
  id: string;
  name: string;
  title: string;
  image: string;
  exp: string;
  specialty: string;
  phone?: string;
  email?: string;
  certifications?: string[];
  schedule?: {
    day: string;
    time: string;
  }[];
};

export default function DoctorProfilePage() {
  const params = useParams();
  const doctorId = params.id as string;

  const member: Doctor | undefined = doctors.find((doc) => doc.id === doctorId);

  if (!member) return notFound();

  return (
    <div className="p-4 md:p-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="lg:w-2/3 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">{member.name}</h2>
            <p className="text-blue-600">{member.title}</p>
          </div>

          <div className="space-y-2">
            <p><strong>Specialty:</strong> {member.specialty}</p>
            <p><strong>Experience:</strong> {member.exp}</p>
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

          <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black">
            Book an Appointment
          </Button>

          {member.phone || member.email ? (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Contact Information</h3>
              <div className="space-y-3">
                {member.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700">{member.phone}</span>
                  </div>
                )}
                {member.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700">{member.email}</span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-blue-600" />
                  <a href="#" className="text-blue-600 hover:underline">Click Here to Download</a>
                </div>
              </div>
            </div>
          ) : null}

          {member.certifications && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Certifications & Qualifications</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                {member.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          )}

          {member.schedule && (
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
                  {member.schedule.map((slot, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-slate-100" : "bg-white"}>
                      <td className="py-3 px-4 border-b border-slate-200">{slot.day}</td>
                      <td className="py-3 px-4 border-b border-slate-200">{slot.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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
        </div>
      </div>
    </div>
  );
}
