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
            className={`w-full py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
                    {/* Text Content Section */}
                    <div className={`space-y-8 order-2 lg:order-1 transition-all duration-700 delay-200 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}>
                        <div className="space-y-4">
                            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-500/25">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Director's Message
                            </span>
                            
                            <div className="space-y-3">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                                    Prof. Dr. Mohamed Amiin{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                                        Abdikarim Nur
                                    </span>
                                </h2>
                                <p className="text-lg sm:text-xl text-blue-600 font-semibold">
                                    Executive Director & Surgeon
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
                            <p className="text-justify">
                                Welcome to Hospital UNISO, where we are dedicated to providing
                                exceptional healthcare services. As the Executive Director, I
                                am proud to lead a team of highly skilled professionals
                                committed to excellence in patient care.
                            </p>
                            <p className="text-justify">
                                At Hospital UNISO, we believe in a patient-centered approach,
                                where your health and well-being are our top priorities. Our
                                state-of-the-art facilities and advanced medical technologies
                                enable us to offer comprehensive care from routine check-ups
                                to complex surgeries.
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="pt-4">
                            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/25 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                <span>Learn More</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className={`order-1 lg:order-2 transition-all duration-700 delay-400 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}>
                        <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                            
                            {/* Main Image Container */}
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/20">
                                <Image
                                    src="/dr2.jpg"
                                    alt="Prof. Dr. Mohamed Amiin Abdikarim Nur - Executive Director"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                    priority
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                
                                {/* Floating Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-xs font-semibold text-gray-800">Available</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Experience Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-blue-900/20 p-4 border border-gray-100">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">15+</div>
                                    <div className="text-xs font-medium text-gray-600">Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DirectorMessage;
