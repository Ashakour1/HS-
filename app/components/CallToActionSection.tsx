"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const CallToActionSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to opacity and y position for fade-in effect
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

    return (
        <motion.section 
            ref={ref}
            style={{ opacity, y }}
            className="relative overflow-hidden bg-[#16204F] py-16 md:py-24 lg:py-32"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
                {/* Left Column: Text Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.4 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    className="text-center lg:text-left"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="mb-6"
                    >
                        <span className="inline-block px-4 py-2 bg-gradient-accent text-white text-sm font-medium rounded-full mb-4 shadow-lg">
                            24/7 Availability
                        </span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl text-heading"
                    >
                        We Are Available For Care Consultation
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.6 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                        className="mb-8 text-lg text-white/90 md:text-xl text-body"
                    >
                        Providing accessible care, responsive communication, and flexible scheduling to ensure timely assistance and support for all individuals.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.7 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/appointment"
                            className="inline-flex items-center justify-center rounded-lg bg-gradient-primary hover:bg-gradient-to-r hover:from-[#07018a] hover:to-[#0902AF] px-8 py-4 font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Book Consultation
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-slate-900 transform hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Column: Image */}
                <motion.div 
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="relative flex h-[400px] items-center justify-center lg:h-[500px]"
                >
                    {/* Placeholder for the portrait image */}
                    
                    <Image src="/cta_2.png" alt="Call to Action" width={900} height={500} />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CallToActionSection;
