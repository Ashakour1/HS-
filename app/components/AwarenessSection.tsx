import Image from "next/image";
import Link from "next/link";
import { ClipboardList, User, Pill, Leaf } from "lucide-react";

const AwarenessSection = () => {
  const careServices = [
    {
      icon: ClipboardList,
      title: "Cardiology",
      description: "Expert diagnosis, treatment, and ongoing care to optimize health and well-being for every patient."
    },
    {
      icon: User,
      title: "Pediatrics", 
      description: "Individualized support and attentive services to ensure comfort and well-being for every resident."
    },
    {
      icon: Pill,
      title: "Gynecology",
      description: "Personalized treatment and compassionate support for every step of the healing process."
    },
    {
      icon: Leaf,
      title: "Dermatology",
      description: "Tailored dietary plans and guidance for optimal health and wellness."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Top Section - Care Service Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {careServices.map((service, index) => (
            <div key={index} className="bg-white p-6 text-center border-b-4 border-accent hover:border-accent-green transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading mb-3">
                {service.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div> */}

        {/* Bottom Section - About Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Nurse Image */}
          <div className="relative">
            <div className="w-full h-96 lg:h-[500px] relative rounded-2xl overflow-hidden ">
              <Image 
                src="/cta_2.png" 
                alt="Healthcare Professional"
                fill
                className="object-cover"
              />
              <div className="" />
            </div>
          </div>

          {/* Right side - About Us Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-gradient-secondary text-white text-sm font-medium rounded-full">
                About Hospital Uniso
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-heading leading-tight">
                About Us
              </h2>
            </div>
            
            <p className="text-lg text-body leading-relaxed">
              Welcome to Hospital Uniso, a leading specialized private hospital in Mogadishu, Somalia, 
              dedicated to providing exceptional healthcare services with a primary focus on comprehensive care. 
              Our mission is to deliver personalized, high-quality care to our patients while fostering innovation, 
              compassion, and excellence in every aspect of our operations.
            </p>
            
            <Link 
              href="/corporate/overview"
              className="inline-block px-8 py-4 bg-gradient-primary hover:bg-gradient-to-r hover:from-[#07018a] hover:to-[#0902AF] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwarenessSection;
