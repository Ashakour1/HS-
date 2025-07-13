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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HealthcareServices from "./Services";
import DoctorCards from "./DoctorCom";
import News from "./News";
import StatsSection from "./Stats";

export default function Others() {
  return (
    <main className="min-h-screen">
      <StatsSection />
      {/* Director's Message */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#e8eaf4]">
        <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[1fr_2fr]">
          {/* Image Section */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            {/* Background shape for visual interest */}
            <div className="absolute -inset-2 rounded-xl bg-primary/10 transform rotate-3 translate-x-2 translate-y-2 transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0" />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-primary/30 h-[500px] ">
              <Image
                src="/dr2.jpg" // Using a new placeholder for a portrait image
                alt="Director Image"
                fill
                className="object-cover "
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-xl font-semibold text-primary md:text-2xl">
              Director's Message
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Prof. Dr. Mohamed Amiin Abdikarim Nur
            </h3>
            <p className="text-xl font-medium text-muted-foreground md:text-2xl">
              Executive Director & Surgeon
            </p>
            <div className="space-y-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Welcome to the Hospital UNISO, where we are dedicated to
                providing exceptional healthcare services. As the Executive
                Director, I am proud to lead a team of highly skilled
                professionals committed to excellence in patient care and
                ensuring that every patient receives the highest quality of
                care.
              </p>
              <p>
                At Hospital UNISO, we believe in a patient-centered approach,
                where your health and well-being are our top priorities. Our
                state-of-the-art facilities and advanced medical technologies
                enable us to offer a wide range of services, from routine
                check-ups to complex surgeries. We are dedicated to staying at
                the forefront of medical advancements and innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <HealthcareServices />

      {/* Team Section */}
      <section className="py-20 bg-[#e8eaf4]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-[#e6f7ef] px-4 py-2 rounded-md mb-4">
              <h3 className="text-[#0E74FC] font-medium">Our Doctors</h3>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Meet Our Specialist Doctors
            </h2>
            <p className=" text-[#0E74FC]">
              Experienced healthcare professionals dedicated to providing
              exceptional care
            </p>
          </div>

          <DoctorCards />
        </div>
      </section>
         <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Medical Attention?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book an appointment with our specialists or contact us for emergency care in Mogadishu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" /> Book Appointment
            </Link>
            <a
              href="tel:+25261123456"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <News />
    </main>
  );
}
