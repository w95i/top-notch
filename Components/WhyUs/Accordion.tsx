"use client";
import React, {useEffect, useState} from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {Definition} from "@/lib/types";

interface Section extends Definition {
    id: number;
}

interface AccordionProps {
    definitions : Definition[]
}

const Accordion = ({definitions} : AccordionProps) => {
    const [sections, setSections] = useState<Definition[]>(definitions);
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
            {sections.map((section, index) => {
                const isOpen = openSection === index;
                const isClosing = closingSection === index;

                return (
                    <div key={index} className="border-b border-gray-300 bg-linear">
                        <div
                            className={`flex justify-between items-center p-4 cursor-pointer transition-all ${
                                isOpen || isClosing ? 'text-white' : 'bg-white text-black'
                            }`}
                            onClick={() => toggleSection(index)}
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
                                    key={index}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-4 text-white">
                                        <p>{section.descp}</p>
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
