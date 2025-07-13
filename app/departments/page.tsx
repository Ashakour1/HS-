import React from "react";
import {
  Heart,
  Baby,
  Stethoscope,
  Brain,
  Bone,
  Eye,
  Ear,
  Pill,
  Activity,
  Users,
  Phone,
  MapPin,
  Mail,
  Clock,
  FlaskConical,
  Ambulance,
  HeartPulse,
  Link,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const contacts = [
    {
      title: "Emergency",
      content: "+1 234 567 890",
      icon: Phone,
      color: "bg-emerald-600", // Changed to a more direct green
      text: "text-white",
    },
    {
      title: "Location",
      content: "Howlwadaag Street, Mogadishu",
      icon: MapPin,
      color: "bg-blue-50", // Lighter blue for contrast
      text: "text-gray-800",
    },
    {
      title: "Email",
      content: "info@hospital.com",
      icon: Mail,
      color: "bg-blue-50",
      text: "text-gray-800",
    },
    {
      title: "Working Hours",
      content: "Mon-Fri: 9AM - 5PM",
      icon: Clock,
      color: "bg-blue-50",
      text: "text-gray-800",
    },
  ];

  const features = [
    {
      title: "Modern Equipment",
      description: "Advanced tools for accurate diagnosis and treatment.",
      icon: Stethoscope, // Example icon
    },
    {
      title: "Trusted Doctors",
      description: "Highly skilled and experienced medical professionals.",
      icon: HeartPulse, // Example icon
    },
    {
      title: "Patient First",
      description: "Our services revolve around your comfort and care.",
      icon: FlaskConical, // Example icon
    },
    {
      title: "24/7 Access",
      description: "We are here for you anytime, day or night.",
      icon: Ambulance, // Example icon
    },
  ];

  const services = [
    {
      icon: Heart,
      name: "Cardiology",
      description:
        "Comprehensive heart and cardiovascular care including diagnostic testing, interventional procedures, and preventive care.",
      features: [
        "Cardiac Catheterization",
        "Angioplasty & Stents",
        "Heart Surgery",
        "Preventive Care",
        "Emergency Heart Care",
      ],
      image:
        "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Brain,
      name: "Neurology",
      description:
        "Advanced neurological care for brain, spine, and nervous system disorders with cutting-edge diagnostic and treatment options.",
      features: [
        "Stroke Care",
        "Brain Surgery",
        "Spine Surgery",
        "Epilepsy Treatment",
        "Memory Disorders",
      ],
      image:
        "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Baby,
      name: "Maternity Care",
      description:
        "Complete obstetric and gynecological services with specialized care for mothers and newborns.",
      features: [
        "Prenatal Care",
        "Labor & Delivery",
        "NICU",
        "Lactation Support",
        "High-Risk Pregnancy",
      ],
      image:
        "https://images.pexels.com/photos/1464230/pexels-photo-1464230.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Bone,
      name: "Orthopedics",
      description:
        "Comprehensive musculoskeletal care including joint replacement, sports medicine, and trauma surgery.",
      features: [
        "Joint Replacement",
        "Sports Medicine",
        "Trauma Surgery",
        "Arthroscopic Surgery",
        "Physical Therapy",
      ],
      image:
        "https://images.pexels.com/photos/5473184/pexels-photo-5473184.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Activity,
      name: "Emergency Care",
      description:
        "24/7 emergency medical services with advanced trauma care and life support capabilities.",
      features: [
        "24/7 Emergency Room",
        "Trauma Center",
        "Critical Care",
        "Emergency Surgery",
        "Life Flight",
      ],
      image:
        "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Users,
      name: "Pediatrics",
      description:
        "Specialized medical care for infants, children, and adolescents with child-friendly facilities.",
      features: [
        "Well-Child Visits",
        "Vaccinations",
        "Pediatric Surgery",
        "Developmental Care",
        "Adolescent Medicine",
      ],
      image:
        "https://images.pexels.com/photos/3985244/pexels-photo-3985244.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Eye,
      name: "Ophthalmology",
      description:
        "Complete eye care services including routine exams, surgical procedures, and treatment of eye diseases.",
      features: [
        "Cataract Surgery",
        "LASIK",
        "Retinal Surgery",
        "Glaucoma Treatment",
        "Diabetic Eye Care",
      ],
      image:
        "https://images.pexels.com/photos/5473178/pexels-photo-5473178.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Stethoscope,
      name: "Internal Medicine",
      description:
        "Primary care and preventive medicine for adults with comprehensive health management.",
      features: [
        "Annual Physicals",
        "Chronic Disease Management",
        "Preventive Care",
        "Health Screenings",
        "Wellness Programs",
      ],
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Pill,
      name: "Oncology",
      description:
        "Comprehensive cancer care with advanced treatment options and supportive care services.",
      features: [
        "Chemotherapy",
        "Radiation Therapy",
        "Immunotherapy",
        "Surgical Oncology",
        "Palliative Care",
      ],
      image:
        "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const emergencyServices = [
    "Level I Trauma Center",
    "Stroke Center Certification",
    "Chest Pain Center",
    "Emergency Surgery",
    "Critical Care Unit",
    "Helicopter Transport",
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive healthcare services using state-of-the-art
            technology and a team of highly skilled medical professionals
            committed to your well-being.
          </p>
        </div>

        {/* Emergency Services Highlight */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-12">
          <div className="flex items-center mb-4">
            <Activity className="h-6 w-6 text-red-500 mr-2" />
            <h2 className="text-2xl font-bold text-red-900">
              Emergency Services - Available 24/7
            </h2>
          </div>
          <p className="text-red-800 mb-4">
            Our emergency department is staffed around the clock with
            board-certified emergency physicians and trauma specialists.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {emergencyServices.map((service, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span className="text-red-700 text-sm">{service}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="tel:+15559110000"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center font-medium"
            >
              <Activity className="h-4 w-4 mr-2" />
              Emergency: 911
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-1">
                    {service.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    {service.features.length > 3 && (
                      <p className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 3} more services
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        Technology & Equipment
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Advanced Medical Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                MRI & CT Imaging
              </h3>
              <p className="text-gray-600">
                State-of-the-art imaging technology for accurate diagnosis and
                treatment planning.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Robotic Surgery
              </h3>
              <p className="text-gray-600">
                Minimally invasive robotic surgical systems for enhanced
                precision and faster recovery.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Telemedicine
              </h3>
              <p className="text-gray-600">
                Remote consultation and monitoring services for convenient
                healthcare access.
              </p>
            </div>
          </div>
        </div>

        {/* Quality & Accreditation */}
        <section className=" py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12 text-gray-900">
              Get In Touch
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contacts.map((item, i) => (
                <Card
                  key={i}
                  className={`text-center p-6 rounded-lg shadow-sm ${item.color} ${item.text} hover:shadow-md transition-all duration-300`}
                >
                  <item.icon
                    className={`w-10 h-10 mx-auto mb-4 ${item.text}`}
                  />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm">{item.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12 text-gray-900">
              Why Choose Us
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <Card
                  key={idx}
                  className="text-center p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                    {feature.icon && <feature.icon className="w-8 h-8" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
      </div>
      <section className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Emergency Care?
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-lg">
            Our dedicated emergency team is always ready to assist you in urgent
            situations, 24/7.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-emerald-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all hover:shadow-lg text-lg"
          >
            Contact Emergency
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
