import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  MoveRight,
  Phone,
  Star,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import News from "./News";
import StatsSection from "./Stats";
import { DoctorsSection } from "./DoctorCom";
import ServiceDetailPage from "./Services";
import CallToAction from "./Cta";
import Testimonials from "./Testimonials";
import DirectorMessage from "./DirectorMessage";
import { FaWhatsapp } from "react-icons/fa";

export default function Others() {
  return (
    <main className="min-h-screen">
      {/* Director's Message */}
    <DirectorMessage/>

      {/* Services Grid */}
      <ServiceDetailPage />

      {/* Team Section */}

      <DoctorsSection />

      <CallToAction />
    

<Testimonials/>

      {/* News Section */}
      <News />

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/616590032"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#00A651] hover:bg-[#0E74FC] transition-all duration-300 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl z-50 hover:scale-110 animate-float group"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 group-hover:animate-wiggle transition-transform duration-300" />
        
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 rounded-full border-2 border-[#00A651] animate-pulse-ring opacity-75"></div>
        
        {/* Second pulsing ring with delay */}
        <div className="absolute inset-0 rounded-full border-2 border-[#00A651] animate-pulse-ring animation-delay-1000 opacity-50"></div>
        
        {/* Third pulsing ring with longer delay */}
        <div className="absolute inset-0 rounded-full border-2 border-[#00A651] animate-pulse-ring animation-delay-2000 opacity-25"></div>
      </Link>
    </main>
  );
}
