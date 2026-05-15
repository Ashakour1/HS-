import Image from "next/image";

interface Director {
  name: string;
  role: string;
  description: string;
}

interface Member {
  name: string;
  role: string;
  responsibilities: string;
  image: string;
}

const director: Director = {
  name: "Prof. Dr. Mohamed Amiin Abdikarim Nur",
  role: "Executive Director & Surgeon",
  description:
    "Prof. Dr. Mohamed Amiin Abdikarim Nur is a renowned Somali surgeon and medical educator with over 25 years of experience in general surgery and healthcare leadership. He is the Director of the University of Somalia Hospital (UNISO), where he leads efforts in clinical excellence, medical training, and hospital development. Prof. Dr. Amiin is also an active researcher, with published work in international journals, including studies on bladder cancer. Through his roles in both healthcare and education, he continues to shape the future of medicine in Somalia and inspire the next generation of medical professionals.",
};

const team: Member[] = [
  {
    name: "Dr. Muna Ahmed",
    role: "Medical Director",
    responsibilities:
      "Provides clinical leadership, sets strategic direction, ensures high patient care standards, oversees ethics, governance, and policy compliance.",
    image: "/dr.jpg",
  },
  {
    name: "Abukar Ahmed",
    role: "Hospital Administrator",
    responsibilities:
      "Manages hospital operations, resources, compliance, and service quality through planning, staff management, and coordination.",
    image: "/image-men.jpg",
  },
  {
    name: "Ubax",
    role: "Head Of Nursing",
    responsibilities:
      "Leads nursing staff, ensuring patient safety, staffing, professional growth, and adherence to best nursing practices.",
    image: "/image-women.png",
  },
  {
    name: "Saido",
    role: "Head of Maternity Services",
    responsibilities:
      "Supervises maternal and neonatal care, coordinating prenatal, delivery, and postnatal services with medical teams.",
    image: "/image-women.png",
  },
  {
    name: "Ahmed",
    role: "Head of Pharmacy",
    responsibilities:
      "Directs medication procurement, storage, dispensing, and safe use while supporting treatment protocols.",
    image: "/image-men.jpg",
  },
  {
    name: "Shukri",
    role: "Head of Laboratory",
    responsibilities:
      "Oversees diagnostics, ensuring accurate results, quality control, equipment management, and regulatory compliance.",
    image: "/image-women.png",
  },
  {
    name: "Isna",
    role: "Head of Emergency",
    responsibilities:
      "Leads emergency and trauma services, ensuring readiness, triage efficiency, and integration with ICU and surgical teams.",
    image: "/image-women.png",
  },
  {
    name: "Abas",
    role: "Operation Theatre Manager",
    responsibilities:
      "Manages surgical suites, equipment, and staff, ensuring safe, sterile, and efficient surgical procedures.",
    image: "/image-men.jpg",
  },
  {
    name: "Mahdi",
    role: "Head of Logistics",
    responsibilities:
      "Manages procurement, inventory, and supply chain to ensure timely, cost-effective, and quality resource availability.",
    image: "/image-men.jpg",
  },
  {
    name: "Ugas",
    role: "Head of Cleaning",
    responsibilities: "Management of hospital cleaning and sanitation.",
    image: "/image-men.jpg",
  },
  {
    name: "Naimo",
    role: "Head of Finance",
    responsibilities:
      "Oversees budgeting, accounting, reporting, and financial planning to ensure transparency, compliance, and sustainability.",
    image: "/image-women.png",
  },
];

export default function HospitalManagementPage() {
  return (
    <main className="min-h-screen bg-white">
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
              Management Team
            </h1>
          </div>
        </div>
      </section>

      {/* Executive director */}
      <DirectorSection director={director} />

      {/* Team grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
              Leadership
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
              Meet our management team
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body/80 sm:text-lg">
              The people leading every department at Hospital Uniso — bringing
              clinical excellence, operational rigour, and care to every
              corner of the hospital.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((member) => (
              <PersonCard key={member.name + member.role} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function DirectorSection({ director }: { director: Director }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-12">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-100 lg:max-w-sm">
            <Image
              src="/dr2.jpg"
              alt={director.name}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0902AF]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0902AF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0DA93E]" />
              Executive Leadership
            </span>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                {director.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-[#0902AF]">
                {director.role}
              </p>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-body/85 sm:text-[17px] sm:leading-[1.75]">
              <p>
                Prof. Dr. Mohamed Amiin Abdikarim Nur is a renowned Somali
                surgeon and medical educator with over 25 years of experience
                in general surgery and healthcare leadership.
              </p>
              <p>
                He is the Director of the University of Somalia Hospital
                (UNISO), where he leads efforts in clinical excellence,
                medical training, and hospital development.
              </p>
              <p>
                Prof. Dr. Amiin is also an active researcher, with published
                work in international journals, including studies on bladder
                cancer. Through his roles in both healthcare and education,
                he continues to shape the future of medicine in Somalia and
                inspire the next generation of medical professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonCard({ member }: { member: Member }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-slate-50 transition-colors duration-300 hover:bg-slate-100">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          sizes="(min-width: 1280px) 280px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          {member.role}
        </p>
        <h3 className="text-base font-semibold leading-snug text-heading transition-colors duration-300 group-hover:text-[#0902AF]">
          {member.name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-body/80">
          {member.responsibilities}
        </p>
      </div>
    </article>
  );
}
