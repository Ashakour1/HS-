"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export const carouselItems = [
  {
    id: 1,
    title: "Somalia First Private University Hospital",
    description:
      "Our state-of-the-art facilities and expert medical team are dedicated to providing exceptional healthcare.",
    buttonText: "Book an Appointment",
    image:
      "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/appointment",
  },
  {
    id: 2,
    title: "Personalized Medical Care",
    description:
      "We believe in patient-centered care tailored to your unique health needs and goals.",
    buttonText: "Our Services",
    image:
      "https://media4.manhattan-institute.org/sites/default/files/iStock-600071976.jpg",
    link: "/departments",
  },

  {
    id: 3,
    title: "Cutting-Edge Medical Technology",
    description:
      "Utilizing the latest innovations to deliver precise diagnoses and effective treatments.",
    buttonText: "Learn More",
    image:
      "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/corporate/overview",
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  }, [isTransitioning]);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative min-h-screen sm:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Carousel Slides */}
      <div className="absolute inset-0">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Image with overlay */}
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            </div>

            {/* Content */}
            <div className="max-w-[1300px] mx-auto relative h-full flex items-center justify-start px-4">
              <div className="max-w-2xl text-left">
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fadeInUp"
                  style={{
                    animationDelay: "0.3s",
                    animationFillMode: "forwards",
                  }}
                >
                  {item.title}
                </h1>
                <p
                  className="text-lg sm:text-xl text-white/90 mb-6 animate-fadeInUp"
                  style={{
                    animationDelay: "0.5s",
                    animationFillMode: "forwards",
                  }}
                >
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 text-lg animate-fadeInUp"
                  style={{
                    animationDelay: "0.7s",
                    animationFillMode: "forwards",
                  }}
                >
                  {item.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full transition-colors duration-200 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full transition-colors duration-200 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button> */}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
