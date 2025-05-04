"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HospitalManagementPage() {
  const hospitalName = "Central Medical Center";

  const director = {
    name: "Prof. Dr. Mohamed Amin Abdikarim Nur",
    role: "Executive Director",
    responsibilities: "Overseeing hospital operations and strategic planning.",
    description:
      "Prof. Dr. Mohamed Amiin Abdikarim Nur is a renowned Somali surgeon and medical educator with over 20 years of experience in general surgery and healthcare leadership.  He is the Director of the University of Somalia Hospital (UNISO), where he leads efforts in clinical excellence, medical training, and hospital development. Prof. Dr. Amiin is also an active researcher, with published work in international journals, including studies on bladder cancer. Through his roles in both healthcare and education, he continues to shape the future of medicine in Somalia and inspire the next generation of medical professionals.",
  };

  const doctors = [
    {
      name: "Dr. Muna Ahmed",
      role: "Medical Director",
      responsibilities:
        "Oversight of all medical staff, clinical quality, and patient safety initiatives",
      image: "/dr.jpg",
    },
    {
      name: "Dr Hussein Abshir",
      role: "Chief of Emergency",
      responsibilities:
        "Management of surgical departments and operating rooms",
      image: "/dr1.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <div>
        {/* Hero Section */}
        <section className=" relative h-[200px] sm:h-[200px] md:h-[150px] lg:h-[150px]">
          <Image
            src="/hero.png"
            alt="Hospital Management"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-start">
            <h1 className="px-28 text-3xl sm:text-4xl lg:text-xl font-semibold text-white text-start ">
              Management Team
            </h1>
          </div>
        </section>
        {/* Director Card */}
        <div className="mb-20">
          <DirectorCard director={director} hospitalName={hospitalName} />
        </div>

        {/* Doctor Cards */}
        <div className="container mx-auto my-8 ">
          <h2 className="mb-10 text-center text-2xl font-semibold text-slate-800">
            Management Team
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doctors.map((member, index) => (
              <PersonCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// Director Card Component
interface Director {
  name: string;
  role: string;
  responsibilities: string;
  description: string;
}

function DirectorCard({
  director,
  hospitalName,
}: {
  director: Director;
  hospitalName: string;
}) {
  return (
    <section className="w-full py-12 bg-[#e1ebf7]">
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
              {director.name}
            </h2>
            <p className="text-xl text-gray-700 mb-6">{director.role}</p>
            <p className="text-base text-gray-600 mb-4">
              Prof. Dr. Mohamed Amiin Abdikarim Nur is a renowned Somali surgeon
              and medical educator with over 25 years of experience in general
              surgery and healthcare leadership.
            </p>
            <p className="text-base text-gray-600 mb-4">
              He is the Director of the University of Somalia Hospital (UNISO),
              where he leads efforts in clinical excellence, medical training,
              and hospital development. Prof. Dr. Amiin is also an active
              researcher, with published work in international journals,
              including studies on bladder cancer. Through his roles in both
              healthcare and education, he continues to shape the future of
              medicine in Somalia and inspire the next generation of medical
              professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Person Card Component
interface Member {
  name: string;
  role: string;
  responsibilities: string;
  image: string; // Added image property
}

function PersonCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col w-[330px] bg-white overflow-hidden transition-all duration-300">
      {/* Image container with fixed height */}
      <div className="relative h-[350px] w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Text content with clean styling */}
      <div className="flex flex-col items-center text-center p-6">
        <h3 className="text-xl font-bold text-teal-500 mb-1">{member.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{member.role}</p>
        <p className="text-sm text-gray-500 mb-4">{member.responsibilities}</p>
        {/* Button for more information */}
        {/* <Button
          variant="outline"
          className="border border-teal-500 text-teal-500 hover:bg-teal-50 rounded-md w-full"
        >
          View More
        </Button> */}
      </div>
    </div>
  );
}
