'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import {Menu, X} from 'lucide-react'
import {motion} from 'framer-motion'
import NavbarLinks from "@/Components/Navbar/navbarLinks";
import MobileLinks from "@/Components/Navbar/mobileLinks";

export default function NavbarWithSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const [scrollAnimation, setScrollAnimation] = useState({y: 0, opacity: 1});

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 600);
        };

        const handleScrollTop = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                setScrollAnimation({y: -100, opacity: 0});
            } else if (scrollY < 600) {
                setScrollAnimation({y: 0, opacity: 1});
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrollTop);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={false}
            animate={scrolled ? {y: 0, opacity: 1} : scrollAnimation}
            transition={{duration: 1, ease: 'easeOut'}}
            className={`w-full h-24 z-10 py-1 fixed top-0 ${
                scrolled ? 'bg-black ' : 'bg-transparent'
            }`}
        >
            <div
                className="xl:max-w-10/12 lg:max-w-11/12 sm:max-w-screen-lg mx-auto py-4 flex justify-between items-center">
                    <Image src="/Images/logo.png" width={201} height={48} alt="logo"/>
                {/* Desktop Links */}
                    <NavbarLinks/>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6 text-white"/>}
                    </button>
                </div>
            </div>

            {/* Sidebar (Mobile) */}
            <div
                className={`md:hidden fixed top-0 left-0 h-full w-75 bg-white shadow-md transform transition-transform duration-300 ease-in-out z-40 ${
                    isOpen ? '-translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex justify-between items-center px-4 py-4 border-b">
                    <span className="text-lg font-semibold">Menu</span>
                    <button onClick={() => setIsOpen(false)}>
                        <X className="w-6 h-6"/>
                    </button>
                </div>
                <MobileLinks/>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-[#000000a1] bg-opacity-30 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </motion.nav>
    )
}