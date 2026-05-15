"use client";

import {
  ArrowUpRight,
  Award,
  ChevronRight,
  Clock,
  MapPin,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { departments } from "@/data/departments";

const HIGHLIGHTS = [
  {
    icon: Clock,
    label: "24/7 Care",
    description: "Around‑the‑clock support",
    tile: "bg-emerald-500/10",
    iconText: "text-emerald-600",
  },
  {
    icon: ShieldCheck,
    label: "Certified specialists",
    description: "Experienced consultants",
    tile: "bg-[#0902AF]/10",
    iconText: "text-[#0902AF]",
  },
  {
    icon: MapPin,
    label: "Modern facility",
    description: "Advanced equipment",
    tile: "bg-amber-500/10",
    iconText: "text-amber-600",
  },
  {
    icon: Award,
    label: "Trusted care",
    description: "Patient‑first approach",
    tile: "bg-rose-500/10",
    iconText: "text-rose-600",
  },
];

const CenterDetailPage = () => {
  const params = useParams();
  const center = params.center as string;
  const centerData = departments[center as keyof typeof departments];

  if (!centerData) {
    return notFound();
  }

  const paragraphs: string[] = (centerData.description || "")
    .split(/\n\s*\n/)
    .map((p: string) => p.trim())
    .filter(Boolean);

  const Icon = centerData.icon || Stethoscope;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[200px] sm:h-[200px] md:h-[150px] lg:h-[150px]">
        <Image
          src="/hero.png"
          alt={centerData.name}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-start px-6">
          <div className="px-0 py-2 md:px-28">
            <h1 className="text-xl font-semibold text-white sm:text-4xl lg:text-xl">
              {centerData.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white">
        <div className="container mx-auto max-w-6xl px-4 py-5 md:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#0902AF]"
            >
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
            <Link
              href="/departments"
              className="transition-colors hover:text-[#0902AF]"
            >
              Departments
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
            <span className="font-medium text-heading">{centerData.name}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <section className="pb-16 pt-2 md:pb-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-12">
            {/* Left column */}
            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={centerData.image ? centerData.image : "/hero.png"}
                  alt={`${centerData.name} image`}
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Highlights */}
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Highlights
                </p>
                <ul className="mt-4 space-y-4">
                  {HIGHLIGHTS.map((h) => (
                    <li key={h.label} className="flex items-start gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${h.tile} ${h.iconText}`}
                      >
                        <h.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-heading">
                          {h.label}
                        </p>
                        <p className="text-xs text-body/70">{h.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>

            {/* Right column */}
            <article className="min-w-0 space-y-6">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                  Department
                </span>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
                  {centerData.name} at Hospital Uniso
                </h2>
                <p className="text-base text-body/80 sm:text-lg">
                  Excellence in healthcare, delivered with compassion and
                  expertise.
                </p>
              </div>

              {/* Department icon callout */}
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0902AF]/10 text-[#0902AF]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Specialty
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-heading">
                    {centerData.name}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-5">
                {paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-body/90 sm:text-[17px] sm:leading-[1.75]"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Inline CTA row */}
              <div className="flex flex-col items-stretch gap-3 rounded-2xl bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-heading">
                    Have questions about {centerData.name}?
                  </p>
                  <p className="mt-0.5 text-sm text-body/80">
                    Our team is ready to help you find the right care.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0902AF] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#07018a]"
                >
                  Contact us
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CenterDetailPage;
