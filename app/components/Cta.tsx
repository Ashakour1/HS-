"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
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
            className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32"
        >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="mb-4 text-3xl font-bold leading-tight text-neutral-900 md:text-4xl lg:text-5xl"
            >
              Good service and better health by our specialists
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              className="mb-8 text-lg text-neutral-600 md:text-xl"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum printer took a galley of type and scrambled
              it to make a type specimen book
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.7 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            >
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Image Collage */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative flex h-[400px] items-center justify-center lg:h-[500px]"
          >
            {/* Abstract Shapes */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="absolute left-0 top-0 h-32 w-32 rounded-br-full bg-customPink opacity-70" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              className="absolute bottom-0 right-0 h-40 w-40 rounded-tl-full bg-customBlue opacity-70" 
            />

            {/* Image Collage Container */}
            <div className="relative z-10 flex h-full w-full gap-4 p-4">
              {/* Left large image */}
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
                src="/dr2.jpg"
                alt="Two female doctors looking at a tablet"
                className="h-full w-[60%] rounded-lg object-cover shadow-lg"
              />
              {/* Right side images - using a flex column */}
              <div className="flex w-[40%] flex-col gap-4">
                <motion.img
                  initial={{ opacity: 0, x: 30, y: -20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ amount: 0.6 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                  src="/drshani.jpg"
                  alt="Female doctor smiling"
                  className="h-[30%] w-full rounded-lg object-cover shadow-lg"
                />
                <motion.img
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.7 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
                  src="/drmahdi.jpg"
                  alt="Male doctor with a family, parents and child"
                  className="h-[35%] w-full rounded-lg object-cover shadow-lg"
                />
                <motion.img
                  initial={{ opacity: 0, x: 30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ amount: 0.8 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                  src="/dr1.jpg"
                  alt="Male doctor consulting a male patient"
                  className="h-[35%] w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      );
    };

    export default CallToAction;