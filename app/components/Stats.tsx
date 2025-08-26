"use client";

import { useCountUp } from "./use-count-up";

export default function StatsSection() {
  const experienceYears = useCountUp({ endValue: 8 });

  const features = [
    { name: "Seamless Care", icon: "✓" },
    { name: "Patient-Centered Care", icon: "✓" },
    { name: "Warm and Welcoming Environment", icon: "✓" },
    { name: "Personalized Approach", icon: "✓" },
    { name: "Comprehensive Care", icon: "✓" },
    { name: "Cutting-Edge Technology", icon: "✓" },
    { name: "Expert Doctors", icon: "✓" },
    { name: "Positive Reviews", icon: "✓" }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Image and Badge */}
          <div className="relative">
            <img 
              src="/dr1.jpg" 
              alt="Doctor consultation" 
              className="w-full rounded-2xl shadow-2xl"
            />
            
            {/* 24/7 Badge */}
            <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-heading">24/7</div>
                  <div className="text-xs text-body">We are available when you want</div>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-heading">
                    {experienceYears} Years of experience
                  </div>
                  <div className="text-xs text-body">
                    We have been serving the community with excellence.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Us Content */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-primary text-white text-sm font-medium rounded-full mb-4 shadow-lg">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6 leading-tight">
                We provide finest patient's Care & Amenities
              </h2>
              <p className="text-body leading-relaxed">
                CareDoc a world of comprehensive healthcare where your well-being takes center stage. At CareDoc, we're dedicated to providing you with personalized and compassionate medical services.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-body text-sm font-medium">
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            {/* More About Us Button */}
            <button className="bg-gradient-primary hover:bg-gradient-to-r hover:from-[#07018a] hover:to-[#0902AF] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3">
              More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
