"use client";

import { useCountUp } from "./use-count-up";

export default function StatsSection() {
  const experienceCount = useCountUp({ endValue: 30 });
  const patientsCount = useCountUp({ endValue: 20000 });
  const awardsCount = useCountUp({ endValue: 15 });
  const proceduresCount = useCountUp({ endValue: 5000 });

  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl font-bold text-blue-600" aria-live="polite">
            {experienceCount}
          </div>
          <div className="text-lg text-muted-foreground">
            Years of Experience
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl font-bold text-blue-600" aria-live="polite">
            {patientsCount.toLocaleString()}+
          </div>
          <div className="text-lg text-muted-foreground">Patients Served</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl font-bold text-blue-600" aria-live="polite">
            {awardsCount}
          </div>
          <div className="text-lg text-muted-foreground">
            Years of Collective Specialist Experience
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl font-bold text-blue-600" aria-live="polite">
            {proceduresCount.toLocaleString()}+
          </div>
          <div className="text-lg text-muted-foreground">
            Procedures Performed
          </div>
        </div>
      </div>
    </section>
  );
}
