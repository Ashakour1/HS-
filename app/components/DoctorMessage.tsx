import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HospitalDirectorSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-block bg-[#e6f7ef] px-4 py-2 rounded-md">
              <h3 className="text-[#00A651] font-medium">About Us</h3>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Hospital Director Message
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Welcome to our state-of-the-art medical facility. Our commitment
                to excellence in healthcare is reflected in every aspect of our
                operations. We combine cutting-edge technology with
                compassionate care to ensure the best possible outcomes for our
                patients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of dedicated professionals works tirelessly to maintain
                the highest standards of medical care while ensuring patient
                comfort and satisfaction remain our top priorities.
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-4 border-2 border-[#00A651] text-[#00A651] hover:bg-[#00A651] hover:text-white px-8 py-6 rounded-md bg-transparent group h-auto"
            >
              Read More
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <div className="relative w-full h-full">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Hospital Director"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Replace the placeholder with your actual image path */}
                {/* If you have the dr2.jpg image, use: src="/dr2.jpg" */}
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#00A651]/10 rounded-full -z-10"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#00A651]/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
