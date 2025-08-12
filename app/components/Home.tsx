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

export default function Others() {
  return (
    <main className="min-h-screen">
      {/* Director's Message */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content Section */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                  Director's Message
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Prof. Dr. Mohamed Amiin Abdikarim Nur
                </h2>
                <p className="text-lg text-blue-600 font-medium">
                  Executive Director & Surgeon
                </p>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to Hospital UNISO, where we are dedicated to providing
                  exceptional healthcare services. As the Executive Director, I
                  am proud to lead a team of highly skilled professionals
                  committed to excellence in patient care.
                </p>
                <p>
                  At Hospital UNISO, we believe in a patient-centered approach,
                  where your health and well-being are our top priorities. Our
                  state-of-the-art facilities and advanced medical technologies
                  enable us to offer comprehensive care from routine check-ups
                  to complex surgeries.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/dr2.jpg"
                    alt="Prof. Dr. Mohamed Amiin Abdikarim Nur - Executive Director"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServiceDetailPage />

      {/* Team Section */}

      <DoctorsSection />

      <CallToAction />
    

<Testimonials/>

      {/* News Section */}
      <News />
    </main>
  );
}
