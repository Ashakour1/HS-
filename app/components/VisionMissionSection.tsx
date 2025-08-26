"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const VisionMissionSection = () => {
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
            className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-16 md:py-24 lg:py-32"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
                {/* Left Column: Image */}
                <motion.div 
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="relative flex h-[400px] items-center justify-center lg:h-[400px]"
                >
                    <Image src="/vission.png" alt="Vision Mission" width={900} height={400} />
                </motion.div>

                {/* Right Column: Text Content */}
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
                        className="mb-8"
                    >
                        <span className="inline-block px-4 py-2 bg-gradient-primary text-white text-sm font-medium rounded-full mb-4 shadow-lg">
                            Hospital Vision & Mission
                        </span>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-heading mb-4">
                                Vision
                            </h2>
                            <p className="text-lg text-body leading-relaxed">
                                To be the first choice for integrated healthcare in the field of oncology in East Africa, while providing high-quality services across all departments, contributing to the health and well-being of East African communities.
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-heading mb-4">
                                Mission
                            </h2>
                            <p className="text-lg text-body leading-relaxed">
                                To provide high quality, patient centered cancer care and medical services across all departments. We follow international standards and procedures to ensure safe, reliable care, using advanced technology. We support patients and their families through every step of their healthcare journey, offering both medical and emotional support. We are committed to continuous staff development and maintaining top quality care through recognized certifications like ISO.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default VisionMissionSection;
