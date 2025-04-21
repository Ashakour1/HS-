"use client"; // This will make the component a Client Component

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Phone, Calendar, MapPin } from "lucide-react";

function HeroSection() {
  // Form submission handler
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const fullName = (form.elements.namedItem("fullName") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const doctor = (form.elements.namedItem("doctor") as HTMLSelectElement)
      .value;
    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
    const time = (form.elements.namedItem("time") as HTMLInputElement).value;

    if (!fullName || !email || !phone || !doctor || !date || !time) {
      alert("Please fill in all the fields.");
      return;
    }

    // Construct the WhatsApp message
    const whatsappMessage = `Hello, I would like to request a consultation. \n\nName: ${fullName} \nEmail: ${email} \nPhone: ${phone} \nDoctor: ${doctor} \nDate: ${date} \nTime: ${time}`;

    // WhatsApp URL with the message
    const whatsappUrl = `https://wa.me/+252617006650?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp chat with the message
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Top navigation bar */}

      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://www.verywellhealth.com/thmb/MOc8kb0DWRXV91nSWZ5QT2B7gXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/86510637-56a9126d5f9b58b7d0f7db0e.JPG")',
          }}
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex pt-40 items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-8">
              {/* Quick contact info */}
              <div className="flex flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-2 text-green-500">
                  <Phone className="h-4 w-4" />
                  <span className="text-white text-sm">+25261XXXXXX</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <Calendar className="h-4 w-4" />
                  <span className="text-white text-sm">Saturday-Fri: 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <MapPin className="h-4 w-4" />
                  <span className="text-white text-sm">
                    Holwadaag, Mogadisho Somalia
                  </span>
                </div>
              </div>

              {/* Main content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight">
                    Your Health, Our Promise of
                  </h2>
                  <h2 className="text-green-500 text-2xl md:text-4xl font-bold leading-tight">
                    Quality and Care.
                  </h2>
                </div>

                <div className="h-1 w-24 bg-green-500 rounded-full"></div>

                <p className="text-gray-300 text-lg max-w-xl">
                  At our clinic, we prioritize your health and well-being. Our
                  team of experienced specialists is dedicated to providing
                  personalized care and advanced medical treatments tailored to
                  your needs.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-500 hover:bg-green-500 text-black font-medium rounded-full px-8 shadow-lg shadow-green-500/20"
                  >
                    <Link href="/services" className="flex items-center gap-2">
                      View Services
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-green-500 border-white hover:bg-white/10 rounded-full px-8"
                  >
                    <Link href="/appointment">Book Appointment</Link>
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-28">
                <div className="grid grid-cols-3 gap-4 pt-14 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-green-500 text-3xl font-bold">25+</div>
                    <div className="text-white text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-500 text-3xl font-bold">
                      100k+
                    </div>
                    <div className="text-white text-sm">Patients Treated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-500 text-3xl font-bold">50+</div>
                    <div className="text-white text-sm">Specialists</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Appointment card */}
            <div className="hidden md:block md:col-span-5">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl">
                <h3 className="text-white text-xl font-medium mb-4">
                  Request a Consultation
                </h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <select
                      name="doctor"
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white/60 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select Doctor</option>
                      <option value="dr_amini">Dr. Amin</option>
                      <option value="dr_muna_ahmed">Dr. Muna Ahmed</option>
                      <option value="dr_hussein_abshir">
                        Dr. Hussein Abshir
                      </option>
                    </select>
                    <input
                      type="date"
                      name="date"
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="time"
                      name="time"
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-500 text-black font-medium">
                    Request Appointment
                  </Button>
                  <p className="text-white/70 text-xs text-center">
                    We&#39;ll contact you within 24 hours to confirm your
                    appointment
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
    </div>
  );
}

export default HeroSection;
