import {
  ArrowUpRight,
  Calendar,
  Check,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const inputClass =
  "w-full rounded-lg bg-white px-4 py-3 text-sm text-heading placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0902AF]/30";

const labelClass =
  "block text-[12px] font-semibold uppercase tracking-wider text-slate-500";

const quickContacts = [
  {
    title: "Call us",
    description: "Our friendly team is here to help.",
    value: "+252 61 833 2419",
    href: "tel:+252618332419",
    icon: Phone,
    tile: "bg-emerald-500/10",
    iconText: "text-emerald-600",
  },
  {
    title: "Email us",
    description: "We'll respond as soon as possible.",
    value: "info@hospitaluniso.com",
    href: "mailto:info@hospitaluniso.com",
    icon: Mail,
    tile: "bg-amber-500/10",
    iconText: "text-amber-600",
  },
  {
    title: "Visit us",
    description: "Come see us in person.",
    value: "Holwadaag, Banaadir Somalia",
    href: "#location",
    icon: MapPin,
    tile: "bg-rose-500/10",
    iconText: "text-rose-600",
  },
];

const hours = [
  { day: "Monday – Friday", hours: "9:00 AM – 5:00 PM", closed: false },
  { day: "Saturday", hours: "9:00 AM – 1:00 PM", closed: false },
  { day: "Sunday", hours: "Closed", closed: true },
];

const newsletterBenefits = [
  "Health tips from medical experts",
  "Latest medical research findings",
  "Upcoming events and seminars",
  "Special health service promotions",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Us | Hospital Uniso</title>
        <meta
          name="description"
          content="Get in touch with Hospital Uniso for inquiries, appointments, and more. Contact us via phone, email, or visit our location."
        />
        <meta
          property="og:image"
          content="https://www.hospitaluniso.so/uniso-logo.png"
        />
      </Head>

      {/* Hero */}
      <section className="relative h-[200px] sm:h-[200px] md:h-[150px] lg:h-[150px]">
        <Image
          src="/hero.png"
          alt="Hospital Uniso"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-start px-6">
          <div className="px-0 py-2 md:px-28">
            <h1 className="text-xl font-semibold text-white sm:text-4xl lg:text-xl">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Quick contact options */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
              Get in touch
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
              We&apos;re here to help.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body/80 sm:text-lg">
              Choose the option that works best for you — call, email, or
              drop by our hospital.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quickContacts.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex h-full flex-col rounded-2xl bg-slate-50 p-6 transition-colors duration-300 hover:bg-slate-100"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.tile} ${item.iconText}`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold leading-snug text-heading sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body/80">
                  {item.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-200/80 pt-4">
                  <p className="break-all text-sm font-medium text-heading">
                    {item.value}
                  </p>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#0902AF] transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Send a message + contact info */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                  Send a message
                </span>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
                  Submit your request
                </h2>
                <p className="mt-3 text-base leading-relaxed text-body/80 sm:text-lg">
                  Have a question or need to reach a specific department? Fill
                  in the form and our team will get back to you.
                </p>
              </div>

              <form className="rounded-2xl bg-slate-50 p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className={labelClass}>
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Full name"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className={labelClass}>
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mt-5 space-y-1.5">
                  <label htmlFor="subject" className={labelClass}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Briefly describe your request"
                    className={inputClass}
                  />
                </div>

                <div className="mt-5 space-y-1.5">
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="How can we help you?"
                    className={`${inputClass} min-h-[160px] resize-y`}
                  />
                </div>

                <div className="mt-7">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#0902AF] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#07018a]"
                  >
                    Send message
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact info panel */}
            <aside className="lg:col-span-5">
              <div className="flex h-full flex-col rounded-2xl bg-slate-900 p-8 text-white sm:p-10">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                  We are here for you
                </span>
                <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight">
                  Reach out anytime — we&apos;ll respond promptly.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Our dedicated team is ready to answer your questions and
                  provide the care you need.
                </p>

                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                        Phone
                      </p>
                      <p className="mt-0.5 text-sm font-medium">
                        +252 61 833 2419
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                        Email
                      </p>
                      <p className="mt-0.5 break-all text-sm font-medium">
                        info@hospitaluniso.com
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                        Address
                      </p>
                      <p className="mt-0.5 text-sm font-medium">
                        Holwadaag, Banaadir Somalia
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                        Working hours
                      </p>
                      <p className="mt-0.5 text-sm font-medium">
                        Mon – Fri: 9:00 AM – 5:00 PM
                      </p>
                      <p className="text-sm font-medium text-white/80">
                        Sat: 9:00 AM – 1:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Location + Map */}
      <section id="location" className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
              Our location
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
              Find us in Mogadishu.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body/80 sm:text-lg">
              Our facility is centrally located and easily accessible by
              public transportation.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="space-y-5 lg:col-span-1">
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Main hospital
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-heading">
                  Hospital Uniso
                  <br />
                  Holwadaag, Banaadir Somalia
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Directions
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Located in central Mogadishu, our facility is easily
                  accessible by public transport and personal vehicle.
                </p>
                <Link
                  href="https://www.google.com/maps/dir/?api=1&destination=Hospital+Uniso+Mogadishu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#0902AF] transition-colors hover:bg-gray-100"
                >
                  Get directions
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Parking
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Complimentary parking is available for all patients and
                  visitors on‑site.
                </p>
              </div>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-2xl bg-slate-100 lg:col-span-2 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Hospital Uniso location map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Working hours + appointment helpers */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
            {/* Hours */}
            <div className="rounded-2xl bg-slate-50 p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                Working hours
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-heading sm:text-3xl">
                When we&apos;re open.
              </h3>

              <ul className="mt-6 divide-y divide-slate-200/80">
                {hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <span className="font-medium text-heading">{row.day}</span>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${
                        row.closed
                          ? "bg-rose-500/10 text-rose-600"
                          : "bg-[#0DA93E]/10 text-[#0DA93E]"
                      }`}
                    >
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3 rounded-xl bg-rose-500/10 p-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-rose-600">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-rose-700">
                    Emergency services
                  </p>
                  <p className="text-xs text-rose-700/80">
                    Open 24 hours, 7 days a week.
                  </p>
                </div>
              </div>
            </div>

            {/* Appointment helpers */}
            <div className="rounded-2xl bg-slate-50 p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                Schedule a visit
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-heading sm:text-3xl">
                Book an appointment.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body/80">
                Choose how you&apos;d like to schedule — online or by phone.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4 rounded-xl bg-white p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-heading">
                      Online booking
                    </p>
                    <p className="text-xs text-body/70">Available 24/7</p>
                  </div>
                  <Link
                    href="/appointment"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#0902AF] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#07018a]"
                  >
                    Book now
                  </Link>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-white p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-heading">
                      Phone booking
                    </p>
                    <p className="text-xs text-body/70">
                      Call during business hours
                    </p>
                  </div>
                  <Link
                    href="tel:+252618332419"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-heading ring-1 ring-slate-200 transition-colors hover:bg-slate-100"
                  >
                    Call us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="overflow-hidden rounded-2xl bg-slate-50">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-10 md:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                  Newsletter
                </span>
                <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-heading sm:text-3xl">
                  Subscribe to our newsletter.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-body/80 sm:text-base">
                  Get the latest health tips, medical news, and hospital
                  updates delivered to your inbox.
                </p>
                <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`${inputClass} flex-1`}
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#0902AF] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#07018a]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="bg-slate-900 p-8 text-white sm:p-10 md:p-12">
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  Why subscribe?
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {newsletterBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-white/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
