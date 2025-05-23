"use client";

import React, {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {HeroSection} from "@/lib/types";

interface HeroContentProps {
    heroData: HeroSection[];
}

const HeroContent = ({heroData}: HeroContentProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (!heroData.length) return;
        setCurrentSlide((prev) => (prev + 1) % heroData.length);
    };
    const prevSlide = () => {
        if (!heroData.length) return;
        setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
    };

    useEffect(() => {
        setCurrentSlide(0);
    }, [heroData]);

    if (!heroData.length) return null;

    const slide = heroData[currentSlide];

    return (
        <div className="content-hero md:w-8/12 w-11/12 font-alex">
            <div className="relative w-full h-96 overflow-hidden">
                <div className="absolute inset-0 bg-opacity-50 flex items-center justify-start text-white pl-5">
                    <div className="w-full h-[200px] flex flex-col justify-between">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={slide.id}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -20}}
                                transition={{duration: 0.5}}
                                className="text-start"
                            >
                                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">{slide.title}</h1>
                                <p className="text-sm sm:text-base md:text-lg">{slide.descp}</p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex flex-col justify-between items-start md:flex-row gap-4 md:items-center">
                            <div className="mt-4 flex gap-2 items-center">
                                <button onClick={prevSlide} className="text-xl cursor-pointer">
                                    <i className="ri-arrow-left-s-line"></i>
                                </button>
                                <span>
                  {currentSlide + 1} / {heroData.length}
                </span>
                                <button onClick={nextSlide} className="text-xl cursor-pointer">
                                    <i className="ri-arrow-right-s-line"></i>
                                </button>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-blue-600 px-3 py-2 md:px-4 rounded text-white text-xs sm:text-base md:text-lg cursor-pointer">
                                    Let’s work together <i className="ri-arrow-right-line"></i>
                                </button>
                                <a href={slide.url} className="border border-white px-2 py-2 md:px-4 rounded text-white text-sm sm:text-base md:text-lg cursor-pointer">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroContent;
