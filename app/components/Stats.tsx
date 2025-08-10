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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Image and Badge */}
          <div className="relative">
            <img 
              src="/dr1.jpg" 
              alt="Doctor consultation" 
              className="w-full rounded-lg shadow-lg"
            />
            
            {/* 24/7 Badge */}
            <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-600">We are available when you want</div>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-3 shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {experienceYears} Years of experience
                  </div>
                  <div className="text-xs text-gray-600">
                    We have been serving the community with excellence.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Us Content */}
          <div>
            <div className="mb-6">
              <div className="text-blue-600 font-semibold mb-2 text-sm uppercase">
                ABOUT US
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We provide finest patient's Care & Amenities
              </h2>
              <p className="text-gray-600 leading-relaxed">
                CareDoc a world of comprehensive healthcare where your well-being takes center stage. At CareDoc, we're dedicated to providing you with personalized and compassionate medical services.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            {/* More About Us Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
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
