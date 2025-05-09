import React, { useState, useEffect } from 'react';
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import links from "@/Components/Navbar/Links";

const NavbarLinks = () => {
    // Track the hovered dropdown label
    const [hovered, setHovered] = useState<string | null>(null);
    const [currentPath, setCurrentPath] = useState<string>('');

    useEffect(() => {
        // Check if running on client
        if (typeof window !== "undefined") {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    // Function to check if a link is active
    const isActive = (href: string) => currentPath === href;

    return (
        <div className="hidden md:flex gap-9 items-baseline relative">
            {links.map((link) =>
                link.dropdown ? (
                    <div
                        key={link.label}
                        className="relative"
                        onMouseEnter={() => setHovered(link.label)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <button className="flex text-sm text-white items-center hover:text-[#4060DB]">
                            {link.label}
                            <ChevronDown className="w-4 h-4 ml-1"/>
                        </button>

                        <AnimatePresence>
                            {hovered === link.label && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                                >
                                    {link.dropdown.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`block text-sm px-4 py-2 hover:bg-gray-100`}
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
                        className={`text-sm text-white hover:text-[#4060DB] ${
                            isActive(link.href) ? 'font-extrabold text-lg' : ''
                        }`}
                    >
                        {link.label}
                    </Link>
                )
            )}
        </div>
    );
};

export default NavbarLinks;
