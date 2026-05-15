"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Eye, Target } from "lucide-react";

const VisionMissionSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

    return (
        <motion.section
            ref={ref}
            style={{ opacity, y }}
            className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:gap-16 px-4 md:px-8 lg:grid-cols-2">
                {/* Left Column: Image */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="relative flex h-[400px] items-center justify-center lg:h-[460px]"
                >
                    <Image
                        src="/vission.png"
                        alt="Vision Mission"
                        width={900}
                        height={400}
                        className="relative z-10"
                    />
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
                        className="mb-10 flex justify-center lg:justify-start"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#0902AF] text-white text-xs md:text-sm font-semibold tracking-wider uppercase rounded-full shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0DA93E]" />
                            Hospital Vision &amp; Mission
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="space-y-12"
                    >
                        {/* Vision */}
                        <div className="flex flex-col items-center lg:items-start gap-4">
                            <div className="flex items-center gap-3">
                                <span className="w-11 h-11 rounded-full bg-[#0902AF] flex items-center justify-center shadow-sm">
                                    <Eye className="w-5 h-5 text-white" />
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900 text-heading">
                                    Vision
                                </h2>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed text-body max-w-xl">
                                To be the first choice for integrated healthcare in the field of oncology in East Africa, while providing high-quality services across all departments, contributing to the health and well-being of East African communities.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="flex flex-col items-center lg:items-start gap-4">
                            <div className="flex items-center gap-3">
                                <span className="w-11 h-11 rounded-full bg-[#0DA93E] flex items-center justify-center shadow-sm">
                                    <Target className="w-5 h-5 text-white" />
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900 text-heading">
                                    Mission
                                </h2>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed text-body max-w-xl">
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
