"use client";

import type React from "react";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Clock,
  HeartPulse,
  Loader2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";

interface Doctor {
  id: string;
  fullname: string;
  specialist: string;
  experience: number;
}

const inputClass =
  "w-full rounded-lg bg-white px-4 py-3 text-sm text-heading placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0902AF]/30";

const labelClass =
  "block text-[12px] font-semibold uppercase tracking-wider text-slate-500";

const contacts = [
  {
    title: "Emergency",
    content: "+252 61 833 2419",
    icon: Phone,
    tile: "bg-rose-500/10",
    iconText: "text-rose-600",
  },
  {
    title: "Location",
    content: "Holwadaag, Banaadir Somalia",
    icon: MapPin,
    tile: "bg-[#0902AF]/10",
    iconText: "text-[#0902AF]",
  },
  {
    title: "Email",
    content: "info@hospitaluniso.com",
    icon: Mail,
    tile: "bg-emerald-500/10",
    iconText: "text-emerald-600",
  },
  {
    title: "Working Hours",
    content: "Sat–Fri: 9AM – 5PM",
    icon: Clock,
    tile: "bg-amber-500/10",
    iconText: "text-amber-600",
  },
];

const schedule = [
  { day: "Monday", hours: "08:00 – 17:00" },
  { day: "Tuesday", hours: "08:00 – 17:00" },
  { day: "Wednesday", hours: "08:00 – 17:00" },
  { day: "Thursday", hours: "08:00 – 17:00" },
  { day: "Friday", hours: "08:00 – 17:00" },
  { day: "Saturday", hours: "08:00 – 17:00" },
  { day: "Sunday", hours: "08:00 – 17:00" },
];

const features = [
  {
    title: "Expert doctors",
    description:
      "Our team consists of highly qualified medical professionals with years of experience.",
    icon: Stethoscope,
    tile: "bg-[#0902AF]/10",
    iconText: "text-[#0902AF]",
  },
  {
    title: "24/7 support",
    description:
      "Round‑the‑clock emergency services to ensure you get care when you need it most.",
    icon: HeartPulse,
    tile: "bg-rose-500/10",
    iconText: "text-rose-600",
  },
  {
    title: "Modern facilities",
    description:
      "Our hospital is equipped with state‑of‑the‑art technology for accurate diagnosis and treatment.",
    icon: ShieldCheck,
    tile: "bg-emerald-500/10",
    iconText: "text-emerald-600",
  },
];

export default function AppointmentPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://cms-hospitalunisoso-production-3ec8.up.railway.app/api/doctors"
        );
        if (response.ok) {
          const data = await response.json();
          setDoctors(data);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const appointmentData = {
        fullname,
        email,
        phone,
        date: new Date(date).toISOString(),
        time,
        reason,
        doctorId,
      };

      const response = await fetch(
        "https://cms-hospitalunisoso-production-3ec8.up.railway.app/api/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointmentData),
        }
      );

      if (response.ok) {
        const selectedDoctor = doctors.find((d) => d.id === doctorId);
        const doctorName = selectedDoctor
          ? `Dr. ${selectedDoctor.fullname} (${selectedDoctor.specialist})`
          : "Selected Doctor";

        const whatsappMessage = `*New Appointment Request* 

 *Patient Details:*
 Name: ${fullname}
 Email: ${email}
 Phone: ${phone}

*Doctor:* ${doctorName}

 *Appointment Details:*
• Date: ${new Date(date).toLocaleDateString()}
• Time: ${time}
• Reason: ${reason}

Please confirm this appointment.`;

        const whatsappUrl = `https://wa.me/252618332419?text=${encodeURIComponent(
          whatsappMessage
        )}`;

        window.open(whatsappUrl, "_blank");

        alert(
          "Appointment request submitted successfully! WhatsApp message sent. We will contact you soon."
        );
        resetForm();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Failed to submit appointment"}`);
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
      alert("Failed to submit appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFullname("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setReason("");
    setDoctorId("");
  };

  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDoctorId(e.target.value);
  };

  return (
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
              Appointment Request
            </h1>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-20" id="appointment-form">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Form */}
            <div className="lg:col-span-8">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
                  Book a visit
                </span>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
                  Request your appointment
                </h2>
                <p className="mt-3 text-base leading-relaxed text-body/80 sm:text-lg">
                  Fill out the form below to schedule your appointment. Our
                  team will reach out shortly to confirm the details.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-slate-50 p-6 sm:p-8"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="fullname" className={labelClass}>
                      Full name
                    </label>
                    <input
                      id="fullname"
                      type="text"
                      placeholder="Enter your full name"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      className={inputClass}
                      required
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className={labelClass}>
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+252 61 234 5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="doctorId" className={labelClass}>
                      Select doctor
                    </label>
                    <select
                      id="doctorId"
                      value={doctorId}
                      onChange={handleDoctorChange}
                      className={`${inputClass} appearance-none bg-[length:16px] bg-[right_0.85rem_center] bg-no-repeat pr-10`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>\")",
                      }}
                      required
                    >
                      <option value="" disabled>
                        {isLoading
                          ? "Loading doctors…"
                          : "Select a doctor"}
                      </option>
                      {doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>
                          Dr. {doctor.fullname} — {doctor.specialist}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="date" className={labelClass}>
                      Preferred date
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="time" className={labelClass}>
                      Preferred time
                    </label>
                    <input
                      id="time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div className="mt-5 space-y-1.5">
                  <label htmlFor="reason" className={labelClass}>
                    Reason for appointment
                  </label>
                  <textarea
                    id="reason"
                    rows={5}
                    placeholder="Briefly describe your symptoms or the reason for your visit…"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className={`${inputClass} min-h-[140px] resize-y`}
                    required
                  />
                </div>

                <div className="mt-7">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#0902AF] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#07018a] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Submit appointment request
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center text-xs text-body/70">
                    By submitting, you agree to be contacted via phone, email,
                    or WhatsApp regarding your appointment.
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:col-span-4">
              {/* Contact info */}
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Contact information
                </p>
                <ul className="mt-4 space-y-4">
                  {contacts.map((c) => (
                    <li key={c.title} className="flex items-start gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${c.tile} ${c.iconText}`}
                      >
                        <c.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          {c.title}
                        </p>
                        <p className="mt-0.5 break-words text-sm font-medium text-heading">
                          {c.content}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schedule hours */}
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Schedule hours
                </p>
                <ul className="mt-3 divide-y divide-slate-200/80">
                  {schedule.map((s) => (
                    <li
                      key={s.day}
                      className="flex items-center justify-between py-2.5 text-sm"
                    >
                      <span className="font-medium text-heading">{s.day}</span>
                      <span className="inline-flex items-center rounded-full bg-[#0DA93E]/10 px-2.5 py-1 text-[11px] font-medium text-[#0DA93E]">
                        {s.hours}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-3 rounded-xl bg-rose-500/10 p-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-rose-600">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-rose-700">
                      Emergency services
                    </p>
                    <p className="text-xs text-rose-700/80">
                      Available 24/7 — call anytime.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
              Why us
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
              Why choose us
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body/80 sm:text-lg">
              Exceptional healthcare with a focus on patient comfort and
              advanced medical treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex h-full flex-col rounded-2xl bg-slate-50 p-6 transition-colors duration-300 hover:bg-slate-100"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.tile} ${feature.iconText}`}
                >
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold leading-snug text-heading sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
