import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#00A651]/90 to-[#008c44]/90 text-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              We are here to help with any questions about our services,
              appointments, or medical information
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-[#00A651] hover:bg-gray-100 px-6 py-6">
                Book an Appointment
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-6"
              >
                Emergency Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#00A651]/10 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-[#00A651]" />
                </div>
                <h3 className="font-bold text-xl mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Our friendly team is here to help
                </p>
                <p className="text-[#00A651] font-medium text-lg">
                  +1 (234) 567-8900
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#00A651]/10 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-[#00A651]" />
                </div>
                <h3 className="font-bold text-xl mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  We will respond as soon as possible
                </p>
                <p className="text-[#00A651] font-medium text-lg">
                  info@hospital.com
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#00A651]/10 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-[#00A651]" />
                </div>
                <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Come see us in person</p>
                <p className="text-[#00A651] font-medium text-lg">
                  123 Medical Center Drive
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="contact" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white/80 backdrop-blur-sm">
                  <TabsTrigger value="contact" className="text-base px-6">
                    Contact Us
                  </TabsTrigger>
                  <TabsTrigger value="location" className="text-base px-6">
                    Our Location
                  </TabsTrigger>
                  <TabsTrigger value="hours" className="text-base px-6">
                    Working Hours
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="contact" className="mt-0">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="bg-white p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-[#00A651] mb-6">
                          Submit Your Request
                        </h2>
                        <form className="space-y-5">
                          <div>
                            <Input
                              placeholder="Your name"
                              className="border-gray-300 py-6 px-4 rounded-md"
                            />
                          </div>
                          <div>
                            <Input
                              type="email"
                              placeholder="Your email address"
                              className="border-gray-300 py-6 px-4 rounded-md"
                            />
                          </div>
                          <div>
                            <Input
                              placeholder="Subject"
                              className="border-gray-300 py-6 px-4 rounded-md"
                            />
                          </div>
                          <div>
                            <Textarea
                              placeholder="How can we help you?"
                              className="border-gray-300 p-4 rounded-md min-h-[180px] resize-none"
                            />
                          </div>
                          <Button className="w-full bg-[#00A651] hover:bg-[#008c44] text-white py-6 rounded-md">
                            Send Message
                          </Button>
                        </form>
                      </div>
                      <div className="bg-[#00A651] text-white p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-6">
                          We are Here For You
                        </h3>
                        <p className="mb-8 opacity-90">
                          Our dedicated team is ready to answer your questions
                          and provide the care you need.
                        </p>
                        <div className="space-y-6">
                          <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Phone</h4>
                              <p className="opacity-90">+1 (234) 567-8900</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Email</h4>
                              <p className="opacity-90">info@hospital.com</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Address</h4>
                              <p className="opacity-90">
                                123 Medical Center Drive, New York, NY 10001
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Working Hours</h4>
                              <p className="opacity-90">
                                Mon-Fri: 9:00 AM - 5:00 PM
                              </p>
                              <p className="opacity-90">
                                Sat: 9:00 AM - 1:00 PM
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="location" className="mt-0">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3">
                      <div className="bg-white p-8 md:p-12 md:col-span-1">
                        <h2 className="text-2xl font-bold text-[#00A651] mb-6">
                          Our Location
                        </h2>
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-medium text-lg mb-2">
                              Main Hospital
                            </h3>
                            <p className="text-gray-600">
                              123 Medical Center Drive
                              <br />
                              New York, NY 10001
                            </p>
                          </div>
                          <div>
                            <h3 className="font-medium text-lg mb-2">
                              Directions
                            </h3>
                            <p className="text-gray-600 mb-4">
                              Located near Central Park, our facility is easily
                              accessible by public transportation.
                            </p>
                            <Button
                              variant="outline"
                              className="border-[#00A651] text-[#00A651] hover:bg-[#00A651]/10"
                            >
                              Get Directions
                            </Button>
                          </div>
                          <div>
                            <h3 className="font-medium text-lg mb-2">
                              Parking
                            </h3>
                            <p className="text-gray-600">
                              Complimentary parking is available for all
                              patients and visitors in our underground garage.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2 h-[500px] relative">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="absolute inset-0"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hours" className="mt-0">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="bg-white p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-[#00A651] mb-6">
                          Working Hours
                        </h2>
                        <div className="space-y-6">
                          <div className="border-b pb-4">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">
                                Monday - Friday
                              </span>
                              <span>9:00 AM - 5:00 PM</span>
                            </div>
                          </div>
                          <div className="border-b pb-4">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Saturday</span>
                              <span>9:00 AM - 1:00 PM</span>
                            </div>
                          </div>
                          <div className="border-b pb-4">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Sunday</span>
                              <span className="text-red-500">Closed</span>
                            </div>
                          </div>
                          <div className="pt-4">
                            <h3 className="font-medium text-lg mb-2">
                              Emergency Services
                            </h3>
                            <p className="text-gray-600 mb-4">
                              Our emergency department is open 24 hours a day, 7
                              days a week.
                            </p>
                            <Button className="bg-[#00A651] hover:bg-[#008c44] text-white">
                              Emergency Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#00A651]/10 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-[#00A651] mb-6">
                          Schedule an Appointment
                        </h3>
                        <p className="text-gray-700 mb-6">
                          Book your appointment online or call our scheduling
                          team to find a time that works for you.
                        </p>
                        <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#00A651]/10 flex items-center justify-center">
                              <Calendar className="h-6 w-6 text-[#00A651]" />
                            </div>
                            <div>
                              <h4 className="font-medium">Online Booking</h4>
                              <p className="text-sm text-gray-600">
                                Available 24/7
                              </p>
                            </div>
                          </div>
                          <Button className="w-full bg-[#00A651] hover:bg-[#008c44] text-white">
                            Book Now
                          </Button>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#00A651]/10 flex items-center justify-center">
                              <Phone className="h-6 w-6 text-[#00A651]" />
                            </div>
                            <div>
                              <h4 className="font-medium">Phone Booking</h4>
                              <p className="text-sm text-gray-600">
                                Call during business hours
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            className="w-full border-[#00A651] text-[#00A651] hover:bg-[#00A651]/10"
                          >
                            +1 (234) 567-8900
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              BETTER INFORMATION, BETTER HEALTH
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest medical news, research findings, and
              health tips from our experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Latest Medical Technology Breakthrough",
                date: "February 13, 2025",
                category: "Technology",
              },
              {
                title: "Understanding Preventive Healthcare",
                date: "February 10, 2025",
                category: "Wellness",
              },
              {
                title: "Nutrition Tips for Heart Health",
                date: "February 5, 2025",
                category: "Nutrition",
              },
              {
                title: "Mental Health Awareness Month",
                date: "February 1, 2025",
                category: "Mental Health",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#00A651] text-white text-xs font-medium px-2 py-1 rounded">
                    {item.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-[#00A651] mb-2">{item.date}</p>
                  <h3 className="font-medium text-lg mb-3 line-clamp-2 group-hover:text-[#00A651] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 hover:text-[#00A651] transition-colors cursor-pointer">
                    <span>Read more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-12">
            <Button
              variant="outline"
              className="rounded-full w-10 h-10 p-0 border-[#00A651] text-[#00A651] hover:bg-[#00A651] hover:text-white"
            >
              1
            </Button>
            <Button
              variant="outline"
              className="rounded-full w-10 h-10 p-0 border-gray-300 text-gray-600 hover:bg-[#00A651] hover:text-white hover:border-[#00A651]"
            >
              2
            </Button>
            <Button
              variant="outline"
              className="rounded-full w-10 h-10 p-0 border-gray-300 text-gray-600 hover:bg-[#00A651] hover:text-white hover:border-[#00A651]"
            >
              3
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#00A651]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-[#00A651] mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 mb-6">
                  Get the latest health tips, medical news, and hospital updates
                  delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    placeholder="Enter your email"
                    className="flex-grow py-6 px-4 rounded-md"
                  />
                  <Button className="bg-[#00A651] hover:bg-[#008c44] text-white py-6 px-6 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="bg-[#00A651] text-white p-8 md:p-12 flex items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4">Why Subscribe?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-white/20 p-1 mt-0.5">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>Health tips from medical experts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-white/20 p-1 mt-0.5">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>Latest medical research findings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-white/20 p-1 mt-0.5">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>Upcoming events and seminars</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-white/20 p-1 mt-0.5">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>Special health service promotions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
