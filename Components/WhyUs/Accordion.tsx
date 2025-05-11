"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
    {
        id: 1,
        title: 'Sydney Based',
        content: 'We are a Sydney based company, more than 10 years of experience in this field',
    },
    { id: 2, title: 'Customer Service', content: 'Our customer service is available 24/7 to assist you.' },
    { id: 3, title: 'Quality Assurance', content: 'We ensure top-notch quality in every project we undertake.' },
    { id: 4, title: 'Latest Tech', content: 'Utilizing the latest technology to stay ahead in the industry.' },
];

const Accordion = () => {
    const [openSection, setOpenSection] = useState<number | null>(null);
    const [closingSection, setClosingSection] = useState<number | null>(null);

    const toggleSection = (id: number) => {
        if (openSection === id) {
            setClosingSection(id); // Start closing animation
            setTimeout(() => {
                setOpenSection(null); // Close the section after animation
                setClosingSection(null); // Reset closing state
            }, 300); // Match the animation duration (300ms)
        } else {
            setOpenSection(id);
        }
    };

    return (
        <div className="w-full font-alex">
            {sections.map((section) => {
                const isOpen = openSection === section.id;
                const isClosing = closingSection === section.id;

                return (
                    <div key={section.id} className="border-b border-gray-300 bg-linear">
                        <div
                            className={`flex justify-between items-center p-4 cursor-pointer transition-all ${
                                isOpen || isClosing ? 'text-white' : 'bg-white text-black'
                            }`}
                            onClick={() => toggleSection(section.id)}
                        >
                            <span className="text-lg font-semibold">{section.title}</span>
                            <ChevronDown
                                className={`transform transition-transform duration-300 ${
                                    isOpen ? 'rotate-180' : 'rotate-0'
                                }`}
                            />
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    key={section.id}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-4 text-white">
                                        <p>{section.content}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;
