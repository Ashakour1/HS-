import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Languages, Stethoscope } from "lucide-react";

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  image: string;
  experience?: number;
  languages?: string[];
  consultationFee?: number;
}

export function DoctorCard({
  id,
  name,
  specialty,
  image,
  experience,
  languages,
}: DoctorCardProps) {
  return (
    <Link
      key={id}
      href="/appointment"
      aria-label={`Book an appointment with ${name}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-slate-50 transition-colors duration-300 hover:bg-slate-100"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
        <Image
          src={image || "/dr.jpg"}
          alt={name}
          fill
          sizes="(min-width: 1280px) 280px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {experience ? (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-heading backdrop-blur">
            <Award className="h-3 w-3 text-[#0DA93E]" />
            {experience}+ yrs
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0902AF]/10 px-2.5 py-1 font-medium text-[#0902AF]">
            <Stethoscope className="h-3 w-3" />
            {specialty}
          </span>
        </div>

        <h3 className="text-base font-semibold leading-snug text-heading transition-colors duration-300 group-hover:text-[#0902AF]">
          {name}
        </h3>

        <div className="mt-auto flex items-center justify-between border-t border-slate-200/80 pt-3 text-xs text-body/70">
          <div className="flex items-center gap-3">
            {languages && languages.length > 0 && (
              <span className="inline-flex items-center gap-1">
                <Languages className="h-3.5 w-3.5" />
                {languages.length}{" "}
                {languages.length === 1 ? "lang" : "langs"}
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
  );
}
