"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Stethoscope, Award, Users } from "lucide-react";

const CallToAction = () => {
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
            className="relative overflow-hidden bg-slate-50 py-16 md:py-24 lg:py-32"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:gap-16 px-4 md:px-8 lg:grid-cols-2">
                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.4 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    className="text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        className="mb-6 flex justify-center lg:justify-start"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#0902AF]/15 text-[#0902AF] text-xs md:text-sm font-semibold tracking-wider uppercase rounded-full shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0DA93E]" />
                            Trusted Specialists
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 text-heading"
                    >
                        Good service and better health by our specialists
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.6 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                        className="mb-8 text-base md:text-lg text-slate-600 leading-relaxed text-body max-w-xl mx-auto lg:mx-0"
                    >
                        Our team of highly qualified specialists is dedicated to providing exceptional healthcare services. We combine medical expertise with compassionate care to ensure the best possible outcomes for our patients.
                    </motion.p>

                    {/* Feature list */}
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.6 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
                        className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left"
                    >
                        <li className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                                <Stethoscope className="w-5 h-5 text-[#0902AF]" />
                            </span>
                            <div>
                                <p className="text-sm font-semibold text-slate-900 leading-tight">Expert Care</p>
                                <p className="text-xs text-slate-500">Across specialties</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                                <Award className="w-5 h-5 text-[#0DA93E]" />
                            </span>
                            <div>
                                <p className="text-sm font-semibold text-slate-900 leading-tight">Certified</p>
                                <p className="text-xs text-slate-500">ISO standards</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                                <Users className="w-5 h-5 text-[#0902AF]" />
                            </span>
                            <div>
                                <p className="text-sm font-semibold text-slate-900 leading-tight">Patient-First</p>
                                <p className="text-xs text-slate-500">Compassionate</p>
                            </div>
                        </li>
                    </motion.ul>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.7 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        className="flex justify-center lg:justify-start"
                    >
                        <Link
                            href="/appointment"
                            className="group inline-flex items-center gap-2 rounded-full bg-[#0902AF] hover:bg-[#07018a] px-7 py-3.5 font-semibold text-white transition-all duration-300 shadow-lg shadow-[#0902AF]/20 hover:shadow-xl hover:shadow-[#0902AF]/30 hover:scale-105"
                        >
                            Book Now
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Column: Clean Image Collage */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="relative flex h-[420px] md:h-[520px] items-center justify-center"
                >
                    <div className="relative z-10 grid h-full w-full grid-cols-5 grid-rows-6 gap-4">
                        {/* Main large image */}
                        <motion.img
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
                            src="/dr2.jpg"
                            alt="Two female doctors looking at a tablet"
                            className="col-span-3 row-span-6 h-full w-full rounded-3xl object-cover shadow-xl ring-1 ring-slate-200"
                        />

                        {/* Top right */}
                        <motion.img
                            initial={{ opacity: 0, x: 30, y: -20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ amount: 0.6 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                            src="/drshani.jpg"
                            alt="Female doctor smiling"
                            className="col-span-2 row-span-2 h-full w-full rounded-3xl object-cover shadow-xl ring-1 ring-slate-200"
                        />

                        {/* Middle right */}
                        <motion.img
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ amount: 0.7 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.85 }}
                            src="/drmahdi.jpg"
                            alt="Male doctor with family"
                            className="col-span-2 row-span-2 h-full w-full rounded-3xl object-cover shadow-xl ring-1 ring-slate-200"
                        />

                        {/* Bottom right */}
                        <motion.img
                            initial={{ opacity: 0, x: 30, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ amount: 0.7 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
                            src="/dr1.jpg"
                            alt="Male doctor consulting a patient"
                            className="col-span-2 row-span-2 h-full w-full rounded-3xl object-cover shadow-xl ring-1 ring-slate-200"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CallToAction;
