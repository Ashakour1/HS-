'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoveRight, Phone, Quote, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Testimonials = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.3 });

    // Animation variants for scroll down (fade up)
    const scrollDownVariants: Variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    // Animation variants for scroll up (fade in)
    const scrollUpVariants: Variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="w-full py-16 md:py-20 bg-white">
        <motion.div 
            ref={containerRef}
            className="container mx-auto px-6 md:px-8 max-w-6xl"
            variants={scrollDownVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="text-center mb-12"
            variants={scrollUpVariants}
          >
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
              Patient Recommendations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trust and satisfaction are our greatest achievements. Read what our patients have to say about their experience at Hospital UNISO.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={itemVariants}
          >
            {/* Testimonial 1 */}
            <motion.div variants={cardVariants}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-blue-200 mb-4" />
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "The care I received at Hospital UNISO was exceptional. The doctors were professional, caring, and the facilities are world-class. I highly recommend this hospital."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold text-sm">A</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Ahmed Hassan</p>
                      <p className="text-sm text-gray-500">Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div variants={cardVariants}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-blue-200 mb-4" />
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "The medical team at UNISO Hospital is outstanding. They treated me with compassion and provided excellent medical care. I'm grateful for their expertise."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-semibold text-sm">F</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Fatima Ali</p>
                      <p className="text-sm text-gray-500">Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div variants={cardVariants}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-blue-200 mb-4" />
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "From the moment I walked in, I felt cared for. The staff is friendly, the facilities are clean, and the medical care is top-notch. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold text-sm">M</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Mohamed Omar</p>
                      <p className="text-sm text-gray-500">Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* CTA for Recommendations */}
          <motion.div 
            className="text-center"
            variants={scrollUpVariants}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Share Your Experience
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Had a great experience at Hospital UNISO? We'd love to hear from you! Your feedback helps us improve and helps others make informed decisions about their healthcare.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    <Phone className="w-4 h-4 mr-2" />
                    Call to Recommend
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                    <MoveRight className="w-4 h-4 mr-2" />
                    Visit Our Center
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    )
}

export default Testimonials;