"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const DirectorMessage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section 
            ref={sectionRef}
            className={`w-full py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content Section */}
            <div className={`space-y-6 order-2 lg:order-1 transition-all duration-700 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                  Director's Message
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Prof. Dr. Mohamed Amiin Abdikarim Nur
                </h2>
                <p className="text-lg text-blue-600 font-medium">
                  Executive Director & Surgeon
                </p>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to Hospital UNISO, where we are dedicated to providing
                  exceptional healthcare services. As the Executive Director, I
                  am proud to lead a team of highly skilled professionals
                  committed to excellence in patient care.
                </p>
                <p>
                  At Hospital UNISO, we believe in a patient-centered approach,
                  where your health and well-being are our top priorities. Our
                  state-of-the-art facilities and advanced medical technologies
                  enable us to offer comprehensive care from routine check-ups
                  to complex surgeries.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className={`order-1 lg:order-2 transition-all duration-700 delay-400 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/dr2.jpg"
                    alt="Prof. Dr. Mohamed Amiin Abdikarim Nur - Executive Director"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default DirectorMessage;
