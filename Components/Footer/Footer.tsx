// components/Footer.tsx
import Image from 'next/image'
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import Logo from '../../public/Images/logo.png'
import ContentSection from "@/Components/Footer/contentSection";   // adjust path as needed

export default function Footer() {
    return (
        <footer className="relative font-alex">
            <ContentSection />

            <div className="bg-gray-900 text-white px-16 py-12">
                <div className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-12">
                    {/* Left block */}
                    <div className="max-w-sm space-y-6">
                        <Image src={Logo} alt="Top Notch Accountants" width={160} height={40} />
                        <p className="text-gray-300 font-light text-sm leading-7">
                            Top Notch Accountants & Tax Agents Sydney offers you a complete peace of mind when it comes to your
                            business and personal accounting & tax services, join us and get the benefit you deserve.
                        </p>
                        <p className="text-gray-300 font-light text-sm leading-7">02 9826 1225  |  0473 676 139</p>
                        <button className="bg-blue-600 hover:bg-blue-700 transition rounded px-6 py-3 font-medium">
                            Book An Appointment
                        </button>
                    </div>

                    {/* Middle lists */}
                    <div className="flex flex-col sm:flex-row gap-28">
                        <div>
                            <h5 className="text-xl font-semibold mb-4">Taxation Services</h5>
                            <ul className="space-y-2 text-gray-300">
                                <li>Individual Tax Return</li>
                                <li>Business Tax Return</li>
                                <li>Company Tax Return</li>
                                <li className="mt-2"><a href="#" className="underline">FAQs</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-xl font-semibold mb-4">Accounting Services</h5>
                            <ul className="space-y-2 text-gray-300">
                                <li>Bookkeeping & Payroll Services</li>
                                <li>Business Registration</li>
                                <li>Financial Management & Advice</li>
                                <li>GST Preparation</li>
                                <li>STP Single Touch Payroll</li>
                            </ul>
                        </div>
                    </div>

                    {/* Social icons */}
                    <div className=" h-full flex flex-col justify-between items-center gap-6">
                            <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
                            <a href="#" aria-label="YouTube"><Youtube size={24} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
                    </div>
                </div>
            </div>

            {/* —— Bottom blue bar —— */}
            <div className="bg-blue-600 text-white py-4">
                <div className="container mx-auto px-6 lg:px-0 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div className="space-x-6 mb-2 sm:mb-0">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Use</a>
                    </div>
                    <div>© 2023 All Rights Reserved</div>
                </div>
            </div>
        </footer>
    )
}

