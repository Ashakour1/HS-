"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  GraduationCap,
  Languages,
  Search,
  Stethoscope,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchDoctors, type Doctor } from "@/lib/api";

const FALLBACK_SPECIALTIES = [
  "All",
  "General Surgery",
  "Internal Medicine",
  "Pediatrics",
  "Cardiology",
  "Orthopedics",
  "Neurology",
  "Dermatology",
  "Oncology",
  "Emergency Medicine",
];

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        setLoading(true);
        const data = await fetchDoctors();
        setDoctors(data);
        setFilteredDoctors(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch doctors");
        console.error("Error loading doctors:", err);
      } finally {
        setLoading(false);
      }
    };

    loadDoctors();
  }, []);

  const specialties = useMemo(() => {
    const fromData = Array.from(
      new Set(
        doctors
          .map((d) => d.specialist?.trim())
          .filter((s): s is string => Boolean(s))
      )
    );
    const merged = fromData.length > 0 ? fromData : FALLBACK_SPECIALTIES.slice(1);
    return ["All", ...merged];
  }, [doctors]);

  const debouncedSearch = useCallback(
    (() => {
      let timeoutId: ReturnType<typeof setTimeout>;
      return (search: string, specialty: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          let filtered = [...doctors];

          if (specialty !== "All") {
            filtered = filtered.filter(
              (doctor) =>
                doctor.specialist?.toLowerCase() === specialty.toLowerCase()
            );
          }

          if (search.trim()) {
            const searchLower = search.toLowerCase().trim();
            filtered = filtered.filter(
              (doctor) =>
                doctor.fullname.toLowerCase().includes(searchLower) ||
                doctor.specialist.toLowerCase().includes(searchLower) ||
                (doctor.bio && doctor.bio.toLowerCase().includes(searchLower))
            );
          }

          setFilteredDoctors(filtered);
        }, 250);
      };
    })(),
    [doctors]
  );

  useEffect(() => {
    debouncedSearch(searchTerm, selectedSpecialty);
  }, [searchTerm, selectedSpecialty, debouncedSearch]);

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedSpecialty("All");
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-[#0902AF]" />
          <p className="mt-4 text-sm text-slate-500">Loading doctors…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-white">
        <div className="max-w-sm text-center">
          <p className="mb-4 text-sm text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0902AF] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#07018a]"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[200px] sm:h-[200px] md:h-[150px] lg:h-[150px]">
        <Image
          src="/hero.png"
          alt="Hospital Management"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-start px-6">
          <div className="px-0 py-2 md:px-28">
            <h1 className="text-xl font-semibold text-white sm:text-4xl lg:text-xl">
              Our Doctors &amp; Specialists
            </h1>
          </div>
        </div>
      </section>

      {/* Back + intro */}
      <div className="bg-white">
        <div className="container mx-auto max-w-6xl px-4 py-6 md:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-[#0902AF]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <p className="text-sm text-body/80 sm:text-right">
              Meet our specialists — search by name or filter by department.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex flex-col gap-4 border-t border-slate-100 py-6 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative w-full md:max-w-sm">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, specialty…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full bg-gray-100 py-2.5 pl-9 pr-9 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0902AF]/30"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Result count */}
            <p className="text-sm text-slate-500">
              <span className="font-medium text-heading">
                {filteredDoctors.length}
              </span>{" "}
              {filteredDoctors.length === 1 ? "doctor" : "doctors"}
              {selectedSpecialty !== "All" && (
                <>
                  {" in "}
                  <span className="font-medium text-heading">
                    {selectedSpecialty}
                  </span>
                </>
              )}
            </p>
          </div>

          {/* Specialty chips */}
          <div className="-mx-4 overflow-x-auto pb-6 md:mx-0">
            <div className="flex min-w-max items-center gap-2 px-4 md:min-w-0 md:flex-wrap md:px-0">
              {specialties.map((specialty) => {
                const active = selectedSpecialty === specialty;
                return (
                  <button
                    key={specialty}
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                      active
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {specialty}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Doctors grid */}
      <section className="bg-slate-50/60 py-10 md:py-14">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          {filteredDoctors.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-heading">
                No doctors found
              </h3>
              <p className="mt-1.5 max-w-sm text-sm text-body/80">
                {searchTerm || selectedSpecialty !== "All"
                  ? "Try adjusting your search or pick a different specialty."
                  : "No doctors are available at the moment."}
              </p>
              {(searchTerm || selectedSpecialty !== "All") && (
                <button
                  onClick={clearSearch}
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDoctors.map((doctor) => (
                <Link
                  key={doctor.id}
                  href="/appointment"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-colors duration-300 hover:bg-slate-50"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-2xl bg-slate-100">
                    <Image
                      src={doctor.image || "/dr.jpg"}
                      alt={doctor.fullname}
                      fill
                      sizes="(min-width: 1280px) 280px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {doctor.experience ? (
                      <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-heading backdrop-blur">
                        <Award className="h-3 w-3 text-[#0DA93E]" />
                        {doctor.experience}+ yrs
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0902AF]/10 px-2.5 py-1 font-medium text-[#0902AF]">
                        <Stethoscope className="h-3 w-3" />
                        {doctor.specialist}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold leading-snug text-heading transition-colors duration-300 group-hover:text-[#0902AF]">
                      {doctor.fullname}
                    </h3>

                    {doctor.bio && (
                      <p className="line-clamp-2 text-sm leading-relaxed text-body/80">
                        {doctor.bio}
                      </p>
                    )}

                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-body/70">
                      <div className="flex items-center gap-3">
                        {doctor.languages?.length > 0 && (
                          <span className="inline-flex items-center gap-1">
                            <Languages className="h-3.5 w-3.5" />
                            {doctor.languages.length}
                          </span>
                        )}
                        {doctor.qualifications?.length > 0 && (
                          <span className="inline-flex items-center gap-1">
                            <GraduationCap className="h-3.5 w-3.5" />
                            {doctor.qualifications.length}
                          </span>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1 font-medium text-[#0902AF] transition-transform duration-300 group-hover:translate-x-0.5">
                        Book
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="rounded-2xl bg-slate-50 px-6 py-10 text-center sm:px-10 sm:py-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
              Need help choosing
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-heading sm:text-3xl">
              Can&apos;t find the right doctor?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-body/80 sm:text-base">
              Our team can help match you with the right specialist for your
              needs. Get in touch and we&apos;ll guide you from there.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#0902AF] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#07018a] sm:w-auto"
              >
                Contact us
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/appointment"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-heading transition-colors hover:bg-gray-100 sm:w-auto"
              >
                Book general appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
