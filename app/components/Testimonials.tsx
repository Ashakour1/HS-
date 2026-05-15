"use client";

import { Button } from "@/components/ui/button";
import { MoveRight, Phone, Quote, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
    name: string;
    role: string;
    initial: string;
    quote: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Ahmed Hassan",
        role: "Patient",
        initial: "A",
        quote:
            "The care I received at Hospital UNISO was exceptional. The doctors were professional, caring, and the facilities are world-class. I highly recommend this hospital.",
    },
    {
        name: "Fatima Ali",
        role: "Patient",
        initial: "F",
        quote:
            "The medical team at UNISO Hospital is outstanding. They treated me with compassion and provided excellent medical care. I'm grateful for their expertise.",
    },
    {
        name: "Mohamed Omar",
        role: "Patient",
        initial: "M",
        quote:
            "From the moment I walked in, I felt cared for. The staff is friendly, the facilities are clean, and the medical care is top-notch. Highly recommended!",
    },
    {
        name: "Hodan Yusuf",
        role: "Patient",
        initial: "H",
        quote:
            "Excellent service and very modern facilities. The specialists explained every step of my treatment clearly and made me feel comfortable throughout.",
    },
    {
        name: "Ibrahim Noor",
        role: "Patient",
        initial: "I",
        quote:
            "Quick appointments, attentive nurses, and outstanding doctors. UNISO Hospital sets a new standard for healthcare in the region.",
    },
    {
        name: "Sahra Mahad",
        role: "Patient",
        initial: "S",
        quote:
            "I appreciate the kindness and professionalism of every team member. From reception to the consulting room, every step felt thoughtful and patient-first.",
    },
];

const Testimonials = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

    const [cardsPerView, setCardsPerView] = useState(3);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Responsive cards-per-view
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 640) setCardsPerView(1);
            else if (w < 1024) setCardsPerView(2);
            else setCardsPerView(3);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const total = testimonials.length;
    const maxIndex = Math.max(0, total - cardsPerView);

    // Clamp active index when cardsPerView changes
    useEffect(() => {
        setActiveIndex((i) => Math.min(i, maxIndex));
    }, [maxIndex]);

    // Auto-advance (right-to-left flow): new cards enter from the right, old exit to the left
    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1));
        }, 4500);
        return () => clearInterval(id);
    }, [isPaused, maxIndex]);

    const trackWidthPct = (total / cardsPerView) * 100;
    const cardWidthPct = 100 / total;
    const offsetPct = activeIndex * (100 / total);

    return (
        <section
            ref={sectionRef}
            className="w-full py-16 md:py-24 bg-slate-50"
        >
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#0DA93E]/20 text-[#0DA93E] text-xs md:text-sm font-semibold tracking-wider uppercase rounded-full shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0DA93E] animate-pulse" />
                        Patient Recommendations
                    </span>
                    <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-heading leading-tight">
                        What Our Patients Say
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-body">
                        Your trust and satisfaction are our greatest achievements. Read what our patients have to say about their experience at Hospital UNISO.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            style={{ width: `${trackWidthPct}%` }}
                            animate={{ x: `-${offsetPct}%` }}
                            transition={{ type: "spring", stiffness: 180, damping: 26 }}
                        >
                            {testimonials.map((t, idx) => (
                                <div
                                    key={idx}
                                    className="px-3"
                                    style={{ width: `${cardWidthPct}%` }}
                                >
                                    <div className="h-full bg-white rounded-2xl hover:-translate-y-1 transition-all duration-500 p-6 md:p-7 flex flex-col">
                                        <div className="flex items-center gap-1 mb-4 text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>

                                        <Quote className="w-9 h-9 mb-3 text-slate-300" />

                                        <p className="text-slate-600 leading-relaxed text-sm md:text-base text-body flex-grow">
                                            &ldquo;{t.quote}&rdquo;
                                        </p>

                                        <div className="flex items-center mt-6 pt-6 border-t border-slate-100">
                                            <div className="w-11 h-11 rounded-full flex items-center justify-center mr-3 bg-slate-100">
                                                <span className="text-slate-700 font-semibold">{t.initial}</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-900 leading-tight">{t.name}</p>
                                                <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
          
            </div>
        </section>
    );
};

export default Testimonials;
