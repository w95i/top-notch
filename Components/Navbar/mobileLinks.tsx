import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import links from "@/Components/Navbar/Links";

const MobileLinks = () => {
    // State to track which dropdown is open
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Toggle dropdown based on the label
    const toggleDropdown = (label: string) => {
        setOpenDropdown((prev) => (prev === label ? null : label));
    };

    return (
        <div className="flex flex-col px-4 space-y-4 mt-4">
            {links.map((link) =>
                link.dropdown ? (
                    <div key={link.label} className="flex flex-col">
                        <button
                            onClick={() => toggleDropdown(link.label)}
                            className="flex justify-between items-center w-full text-left text-gray-700 hover:text-blue-600"
                        >
                            {link.label}
                            <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                    openDropdown === link.label ? 'rotate-180' : ''
                                }`}
                            />
                        </button>
                        <AnimatePresence>
                            {openDropdown === link.label && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="ml-4 mt-2 overflow-hidden"
                                >
                                    {link.dropdown.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setOpenDropdown(null)}
                                            className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-gray-700 hover:text-blue-600"
                        onClick={() => setOpenDropdown(null)}
                    >
                        {link.label}
                    </Link>
                )
            )}
        </div>
    );
};

export default MobileLinks;
