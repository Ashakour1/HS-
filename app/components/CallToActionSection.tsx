"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Phone, Clock, ShieldCheck, Stethoscope } from "lucide-react";

const CallToActionSection = () => {
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
            className="relative overflow-hidden bg-gradient-to-br from-[#0B1437] via-[#16204F] to-[#0B1437] py-20 md:py-28 lg:py-32"
        >
            {/* Decorative background blobs */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 -left-24 w-[460px] h-[460px] rounded-full bg-[#0902AF]/40 blur-[120px]" />
                <div className="absolute -bottom-32 -right-24 w-[520px] h-[520px] rounded-full bg-[#0DA93E]/25 blur-[120px]" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#1a1bff]/20 blur-3xl" />
            </div>

            {/* Subtle grid pattern */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />

            <div className="relative mx-auto container max-w-6xl px-4 md:px-8 grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
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
                        className="mb-6 flex justify-center lg:justify-start"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs md:text-sm font-semibold tracking-wider uppercase rounded-full shadow-lg">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-[#0DA93E] opacity-75 animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0DA93E]" />
                            </span>
                            24/7 Availability
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white text-heading"
                    >
                        We&apos;re here for your{" "}
                        <span className="bg-gradient-to-r from-[#7CFFB0] via-[#9da3ff] to-[#7CFFB0] bg-clip-text text-transparent">
                            care &amp; consultation
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.6 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                        className="mb-8 text-base md:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 text-body"
                    >
                        Providing accessible care, responsive communication, and flexible scheduling to ensure timely assistance and support for all individuals.
                    </motion.p>

                    {/* Trust indicators */}
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.6 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
                        className="mb-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-white/85"
                    >
                        <li className="inline-flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#0DA93E]" />
                            Certified specialists
                        </li>
                        <li className="inline-flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#0DA93E]" />
                            Flexible scheduling
                        </li>
                        <li className="inline-flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#0DA93E]" />
                            Responsive support
                        </li>
                    </motion.ul>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.7 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Link
                            href="/appointment"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0902AF] to-[#1a1bff] hover:from-[#1a1bff] hover:to-[#0902AF] px-7 py-3.5 font-semibold text-white transition-all duration-300 shadow-lg shadow-[#0902AF]/30 hover:shadow-xl hover:shadow-[#0902AF]/50 hover:scale-105"
                        >
                            Book Consultation
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0B1437] hover:border-white hover:scale-105"
                        >
                            <Phone className="w-4 h-4" />
                            Contact Us
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Column: Image with halo and floating cards */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="relative flex h-[420px] md:h-[500px] items-center justify-center"
                >
                    {/* Soft halo glow behind image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#0902AF]/40 via-[#1a1bff]/20 to-[#0DA93E]/30 blur-3xl" />
                    </div>

                    {/* Decorative ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[80%] h-[80%] rounded-full border border-white/10" />
                        <div className="absolute w-[60%] h-[60%] rounded-full border border-white/5" />
                    </div>

                    <Image
                        src="/cta_2.png"
                        alt="Care consultation"
                        width={900}
                        height={500}
                        className="relative z-10 drop-shadow-2xl"
                        priority={false}
                    />

                    {/* Floating card — top right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, y: -20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
                        className="hidden md:flex absolute top-6 right-2 lg:right-0 z-20 items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/40"
                    >
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0DA93E] to-[#1dbd4f] flex items-center justify-center shadow-md">
                            <Stethoscope className="w-5 h-5 text-white" />
                        </span>
                        <div className="text-left">
                            <p className="text-xs font-medium text-slate-500 leading-none">Expert</p>
                            <p className="text-sm font-bold text-slate-900 leading-tight mt-0.5">Specialists</p>
                        </div>
                    </motion.div>

                    {/* Floating card — bottom left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 1.05 }}
                        className="hidden md:flex absolute bottom-6 left-2 lg:left-0 z-20 items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/40"
                    >
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0902AF] to-[#1a1bff] flex items-center justify-center shadow-md">
                            <Clock className="w-5 h-5 text-white" />
                        </span>
                        <div className="text-left">
                            <p className="text-xs font-medium text-slate-500 leading-none">Available</p>
                            <p className="text-sm font-bold text-slate-900 leading-tight mt-0.5">24 / 7</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CallToActionSection;
