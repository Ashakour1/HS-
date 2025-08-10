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
import News from "./News";
import StatsSection from "./Stats";
import { DoctorsSection } from "./DoctorCom";
import ServiceDetailPage from "./Services";

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

      <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
              Good service and better health by our specialists
            </h1>
            <p className="mb-8 text-lg text-neutral-600 md:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum printer took a galley of type and scrambled
              it to make a type specimen book
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
            >
              Book Now
            </Link>
          </div>

          {/* Right Column: Image Collage */}
          <div className="relative flex h-[400px] items-center justify-center lg:h-[500px]">
            {/* Abstract Shapes */}
            <div className="absolute left-0 top-0 h-32 w-32 rounded-br-full bg-customPink opacity-70" />
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-tl-full bg-customBlue opacity-70" />

            {/* Image Collage Container */}
            <div className="relative z-10 flex h-full w-full gap-4 p-4">
              {/* Left large image */}
              <img
                src="/dr2.jpg"
                alt="Two female doctors looking at a tablet"
                className="h-full w-[60%] rounded-lg object-cover shadow-lg"
              />
              {/* Right side images - using a flex column */}
              <div className="flex w-[40%] flex-col gap-4">
                <img
                  src="/drshani.jpg"
                  alt="Female doctor smiling"
                  className="h-[30%] w-full rounded-lg object-cover shadow-lg"
                />
                <img
                  src="/drmahdi.jpg"
                  alt="Male doctor with a family, parents and child"
                  className="h-[35%] w-full rounded-lg object-cover shadow-lg"
                />
                <img
                  src="/dr1.jpg"
                  alt="Male doctor consulting a male patient"
                  className="h-[35%] w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <News />
    </main>
  );
}
