import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HealthcareServices from "./Services";
import DoctorCards from "./DoctorCom";

export default function Others() {
  return (
    <main className="min-h-screen">
      {/* Director's Message */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col  lg:flex-row justify-center gap-8 items-start">
            <div className="relative w-full lg:w-1/4 max-w-xl mx-auto lg:mx-0">
              {/* Teal border frame */}
              <div className="relative border-4 border-[#0E74FC] overflow-hidden shadow-lg">
                <Image
                  src="/dr2.jpg"
                  alt="Director Image"
                  width={300}
                  height={500}
                  className="w-full object-cover rounded-lg"
                />

                {/* Yellow quote decoration */}
              </div>
            </div>

            <div className="w-full lg:w-1/2 pt-12 lg:pt-8">
              <h2 className="text-xl md:text-xl font-semibold text-[#0E74FC] mb-1">
                Director's Message
              </h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Prof. Dr. Mohamed Amiin Abdikarim Nur
              </h3>
              <p className="text-xl font-semibold text-gray-700 mb-6">
                Executive Director & Surgeon
              </p>
              <p className="text-base text-gray-600 mb-4">
                Welcome to the Hospital UNISO, where we are dedicated to
                providing exceptional healthcare services. As the Executive
                Director, I am proud to lead a team of highly skilled
                professionals committed to excellence in patient care and
                ensuring that every patient receives the highest quality of
                care.
              </p>
              <p className="text-base text-gray-600 mb-4">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-[#e6f7ef] px-4 py-2 rounded-md mb-4">
              <h3 className="text-[#0E74FC] font-medium">Our Doctors</h3>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
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

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-[#e6f7ef] px-4 py-2 rounded-md mb-4">
              <h3 className="text-[#0E74FC] font-medium">Latest Updates</h3>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Hospital News & Articles
            </h2>
            <p className="text-gray-600">
              Stay informed with the latest medical advancements and hospital
              updates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Latest Medical Technology Breakthrough",
                date: "February 13, 2025",
                category: "Technology",
                image: "All-4.jpg",
              },
              {
                title: "Understanding Preventive Healthcare",
                date: "February 10, 2025",
                category: "Wellness",
                image: "All.jpg",
              },
              {
                title: "Nutrition Tips for Heart Health",
                date: "February 5, 2025",
                category: "Nutrition",
                image: "All-2.jpg",
              },
              {
                title: "Mental Health Awareness Month",
                date: "February 1, 2025",
                category: "Mental Health",
                image: "All-3.jpg",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={`/${item.image}`}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                    {item.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-[#0E74FC] mb-2">{item.date}</p>
                  <h3 className="font-medium text-lg mb-3 line-clamp-2 group-hover:text-[#0E74FC] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 hover:text-[#0E74FC] transition-colors cursor-pointer">
                    <span>Read more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
