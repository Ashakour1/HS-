import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export default function ConnectSection() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
        {/* Left Column: Image */}
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <img
            src="/cta.png"
            alt="Mobile phone showing a medical app interface"
            className="h-auto w-full max-w-md rounded-lg object-cover"
          />
        </div>

        {/* Right Column: Text Content and Buttons */}
        <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
            Connect with Our Team for Personalized Care
          </h2>
          <p className="mb-6 text-base text-neutral-600">Highly Rated by Our Patients</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button asChild className="bg-[#0902AF] text-white hover:bg-[#0DA93E] px-6 py-3 rounded-lg">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" /> Contact Us
              </Link>
            </Button>
            <Button asChild className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg">
              <Link href="/appointment">
                <Calendar className="mr-2 h-5 w-5" /> Make Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
