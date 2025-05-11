"use client";
import React from 'react';
import { motion, useInView } from 'framer-motion';
import Hero from "@/Components/Hero/hero";
import WhyUs from "@/Components/WhyUs/whyUs";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const ScrollSection = ({ children }: { children: React.ReactNode }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default function Home() {
    return (
        <>
            <ScrollSection>
                <Hero />
            </ScrollSection>
            <ScrollSection>
                <WhyUs />
            </ScrollSection>
        </>
    );
}
