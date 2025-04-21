import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HealthcareServices from "./Services";

export default function Others() {
  return (
    <main className="min-h-screen">
      {/* Director's Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/dr2.jpg"
                alt="Hospital Director"
                fill
                className="object-cover object-center transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div>
              <div className="inline-block bg-[#e6f7ef] px-4 py-2 rounded-md mb-4">
                <h3 className="text-[#00A651] font-medium">About Us</h3>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Hospital Director Message
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Welcome to our state-of-the-art medical facility. Our commitment
                to excellence in healthcare is reflected in every aspect of our
                operations. We combine cutting-edge technology with
                compassionate care to ensure the best possible outcomes for our
                patients.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of dedicated professionals works tirelessly to maintain
                the highest standards of medical care while ensuring patient
                comfort and satisfaction remain our top priorities.
              </p>
              <Button className="border-2 border-[#00A651] text-[#00A651] hover:bg-[#00A651] hover:text-white px-8 py-2.5 rounded-md bg-transparent group">
                Read More
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
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
              <h3 className="text-[#00A651] font-medium">Our Team</h3>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Meet Our Specialists
            </h2>
            <p className="text-gray-600">
              Experienced healthcare professionals dedicated to providing
              exceptional care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 2,
                name: "Dr. Amiin",
                role: "Director & Surgeon",
                image: "/dr2.jpg",
              },
              {
                id: 1,
                name: "Dr. Muna",
                role: "Pediatrician",
                image: "/dr.jpg",
              },
              {
                id: 3,
                name: "Dr. Hussein",
                role: "Oncologist",
                image: "/dr1.jpg",
              },
            ].map((doctor) => (
              <Card
                key={doctor.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-[350px] overflow-hidden">
                  <Image
                    src={doctor.image || "/dr.jpg"}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center gap-3 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div
                            key={star}
                            className="w-2 h-2 rounded-full bg-[#00A651]"
                          />
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full text-white border-white hover:bg-white hover:text-gray-800"
                      >
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="text-center p-6 bg-white">
                  <div className="flex justify-center gap-2 mb-4">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className="w-2 h-2 rounded-full bg-[#00A651]"
                      />
                    ))}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-[#e6f7ef] px-4 py-2 rounded-md mb-4">
              <h3 className="text-[#00A651] font-medium">Latest Updates</h3>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Hospital News & Articles
            </h2>
            <p className="text-gray-600">
              Stay informed with the latest medical advancements and hospital
              updates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((news) => (
              <Card
                key={news}
                className="overflow-hidden bg-white border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src="/background.jpg"
                    alt="Medical News"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1 text-[#00A651]" />
                      <span>February 13, 2025</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1 text-[#00A651]" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-[#00A651] transition-colors">
                    Latest Medical Technology
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    Discover the latest advancements in medical technology and
                    how they are improving patient care and treatment outcomes.
                  </p>
                  <Link
                    href="#"
                    className="text-[#00A651] font-medium flex items-center hover:underline"
                  >
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
