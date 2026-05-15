import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  CheckCircle,
  HeartPulse,
  Shield,
  Users,
} from "lucide-react";

import Head from "next/head";

const coreValues = [
  {
    icon: Users,
    title: "Patient‑centered care",
    description:
      "We prioritize the needs and well‑being of our patients above all else.",
    tile: "bg-[#0902AF]/10",
    iconText: "text-[#0902AF]",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest standards in medical care, service, and innovation.",
    tile: "bg-amber-500/10",
    iconText: "text-amber-600",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description:
      "We uphold ethical practices, transparency, and accountability in all our operations.",
    tile: "bg-emerald-500/10",
    iconText: "text-emerald-600",
  },
  {
    icon: HeartPulse,
    title: "Compassion",
    description:
      "We treat every patient with empathy, dignity, and respect.",
    tile: "bg-rose-500/10",
    iconText: "text-rose-600",
  },
  {
    icon: Shield,
    title: "Social responsibility",
    description:
      "We are committed to serving our community and addressing healthcare disparities.",
    tile: "bg-blue-500/10",
    iconText: "text-blue-600",
  },
];

const responsibilityPoints = [
  "Providing affordable and accessible healthcare to all, regardless of socioeconomic status.",
  "Educating the community on preventive care and healthy living.",
  "Partnering with local organizations to address public health challenges.",
  "Reducing healthcare disparities by offering specialized care to underserved populations.",
];

const galleryImages = [
  { src: "/image-1.jpg", alt: "Hospital facility" },
  { src: "/All-2.jpg", alt: "Medical professionals" },
  { src: "/All.jpg", alt: "Patient care" },
];

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Us | Hospital UNISO</title>
        <meta
          name="description"
          content="Learn about Hospital UNISO, our mission, vision, and the values that guide us in providing exceptional healthcare services."
        />
        <meta
          property="og:image"
          content="https://www.hospitaluniso.so/uniso-logo.png"
        />
      </Head>

      <div className="min-h-screen bg-white">
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
                About Us
              </h1>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                  Our Mission
                </span>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl md:text-[2.5rem] md:leading-[1.15]">
                  Inspiring hope, improving health in{" "}
                  <span className="text-[#0902AF]">Mogadishu</span>.
                </h2>
                <p className="text-base leading-relaxed text-body/85 sm:text-lg">
                  At Hospital Uniso, our mission is to inspire hope and improve
                  the health and well‑being of our community by delivering
                  exceptional, patient‑centered care. We are committed to
                  integrating clinical excellence, education, and research to
                  provide the best possible outcomes for every patient.
                </p>
                <div className="pt-1">
                  <Link
                    href="/corporate/management"
                    className="group inline-flex items-center gap-1.5 rounded-full bg-[#0902AF] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#07018a]"
                  >
                    Meet our team
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/image-.jpg"
                  alt="Hospital Uniso facility"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Director's Message */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-12">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-100 lg:max-w-sm">
                <Image
                  src="/dr2.jpg"
                  alt="Director Image"
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                  Director&apos;s Message
                </span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
                    Prof. Dr. Mohamed Amiin Abdikarim Nur
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#0902AF]">
                    Executive Director &amp; Surgeon
                  </p>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-body/85 sm:text-[17px] sm:leading-[1.75]">
                  <p>
                    Welcome to Hospital Uniso, where we are dedicated to
                    providing exceptional healthcare services. As the Executive
                    Director, I am proud to lead a team of highly skilled
                    professionals committed to excellence in patient care and
                    ensuring that every patient receives the highest quality of
                    care.
                  </p>
                  <p>
                    At Hospital Uniso, we believe in a patient‑centered
                    approach, where your health and well‑being are our top
                    priorities. Our state‑of‑the‑art facilities and advanced
                    medical technologies enable us to offer a wide range of
                    services, from routine check‑ups to complex surgeries. We
                    are dedicated to staying at the forefront of medical
                    advancements and innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                Our Vision
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
                The most trusted healthcare provider in the region.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body/85 sm:text-lg">
                Hospital Uniso aspires to become the most trusted healthcare
                provider in Mogadishu, Somalia and beyond — setting the
                standard for unparalleled patient experiences, innovative
                medical practices, and compassionate care.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                Our Values
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
                Our core values
              </h2>
              <p className="mt-3 text-base leading-relaxed text-body/80 sm:text-lg">
                Our values guide every decision we make and every action we
                take in service of our patients and community.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="flex h-full flex-col rounded-2xl bg-slate-50 p-6 transition-colors duration-300 hover:bg-slate-100"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${value.tile} ${value.iconText}`}
                  >
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold leading-snug text-heading sm:text-lg">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body/80">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Responsibility */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                  Community
                </span>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
                  Social responsibility
                </h2>
                <p className="text-base leading-relaxed text-body/85 sm:text-lg">
                  At Hospital Uniso, we believe that healthcare is a
                  fundamental human right. Our social responsibility
                  initiatives focus on:
                </p>
                <ul className="space-y-3">
                  {responsibilityPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0DA93E]/10 text-[#0DA93E]">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-sm leading-relaxed text-body sm:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/image-2.jpg"
                  alt="Community outreach"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-[#0902AF] px-6 py-12 text-center sm:px-12 sm:py-16 md:py-20">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                Our Commitment
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                A beacon of hope and healing for our community.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                Through our commitment to excellence, compassion, and social
                responsibility, we aim to transform healthcare in Mogadishu,
                Somalia and beyond. Together, we can build a healthier,
                brighter future for all.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/appointment"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0902AF] transition-colors hover:bg-gray-100 sm:w-auto"
                >
                  Book an appointment
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20 sm:w-auto"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
