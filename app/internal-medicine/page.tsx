import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const InternalMedicinePage = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[200px]">
        <Image
          src="/hero.png"
          alt="Internal Medicine"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Internal Medicine Department
          </h1>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2 lg:gap-12 justify-between items-center container mx-auto px-4 py-16">
        <div className="h-[500px] w-full relative mr-4">
          <Image
            src="/internal.jpg"
            alt="Doctor Image"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-bold mb-4 text-[#0E74FC]">
            Internal Medicine Department AT HOSPITAL UNISO
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl">
            Our Internal Medicine department is Providing expert care for
            chronic illnesses and acute conditions, supported by advanced
            diagnostic tools and personalized treatment plans. We are dedicated
            to improving your health and well-being through comprehensive
            evaluations, preventive care, and ongoing management of complex
            medical issues. Our team of experienced internists is committed to
            delivering compassionate care tailored to your unique needs. We
            prioritize patient education and empowerment, ensuring you are
            informed and involved in your healthcare decisions. Whether you are
            seeking routine check-ups or specialized treatment, our Internal
            Medicine department is here to support you on your journey to better
            health. We look forward to partnering with you in achieving your
            health goals and enhancing your quality of life. Your health is our
          </p>
        </div>
      </section>
      {/* Department Doctors */}

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-[#0E74FC] text-center">
          Meet Our Internal Medicine Specialists
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative border border-[#00A651] bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src="/dr1.jpg"
                    alt="Dr. Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 leading-tight">
                    Dr. Hussein Abshir
                  </h3>
                  <span className="inline-block px-2 py-0.5 text-[#00A651] text-xs font-medium rounded-sm">
                    General Medicine
                  </span>
                  <span className="text-xs text-gray-500">15+ yrs</span>
                </div>
              </div>

              <div className="mt-3 flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-xs text-blue-600 hover:text-blue-700 bg-blue-50"
                >
                  Book Appointment
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
            <div className="h-1 w-full bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternalMedicinePage;
