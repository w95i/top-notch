"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        title: 'Quick Tax Return',
        description: 'Top Notch Accountants Sydney offers you quick and maximum refunds for your personal and business tax returns. Get in touch with us today!',
    },
    {
        title: 'Business Accounting',
        description: 'Our team provides comprehensive accounting services for your business needs.',
    },
];

const HeroContent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className='content-hero w-8/12'>
            <div className="relative w-full h-96 overflow-hidden">
                <div className="absolute inset-0 bg-opacity-50 flex items-center justify-start text-white p-8">
                    <div className='w-full'>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-start"
                            >
                                <h1 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h1>
                                <p className="mb-6">{slides[currentSlide].description}</p>
                            </motion.div>
                        </AnimatePresence>
                        <div className='flex justify-between items-center'>
                            <div className="mt-4 flex gap-2">
                                <button onClick={prevSlide} className="text-xl cursor-pointer"><i className="ri-arrow-left-s-line"></i></button>
                                <span>{currentSlide + 1} / {slides.length}</span>
                                <button onClick={nextSlide} className="text-xl cursor-pointer"><i className="ri-arrow-right-s-line"></i></button>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-blue-600 px-4 py-2 rounded text-white">
                                    Let's work together <i className="ri-arrow-right-line"></i>
                                </button>
                                <button className="border border-white px-4 py-2 rounded text-white">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroContent;
