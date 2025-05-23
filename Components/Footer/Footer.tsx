"use client"

import Image from 'next/image'
import {Facebook, Instagram, Youtube, Linkedin} from 'lucide-react'
import Logo from '../../public/Images/logo.png'
import ContentSection from "@/Components/Footer/contentSection";
import {useEffect, useState} from "react";
import axiosInstance from "@/lib/axios";
import {FooterData} from "@/lib/types";   // adjust path as needed

export default function Footer() {
    const [data, setData] = useState<FooterData>({
        CompanyProfile: {id: 0, descp: "", imageProfile: ""},
        accountingService: [],
        taxationService: [],
        contactUs: {
            id: 0,
            facebook: "",
            instagram: "",
            linkedIn: "",
            youtube: "",
            whatsApp: "",
            tikTok: "",
            x: "",
            telegram: "",
            firstPhoneNumber: "",
            secondPhoneNumber: "",
            contactInfo: "",
            address: "",
            email: "",
            lng: 0,
            lat: 0
        },
    })

    useEffect(() => {
        axiosInstance
            .get<FooterData>('/Footer')
            .then((res) => setData(res.data))
            .catch((err) => console.error('Failed to load footer data:', err))
    },[])
    return (
        <footer className="relative font-alex">
            <ContentSection contactUs={data.contactUs}/>

            <div className="bg-gray-900 text-white px-16 py-12">
                <div
                    className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-12">
                    {/* Left block */}
                    <div className="max-w-sm space-y-6">
                        <Image src={Logo} alt="Top Notch Accountants" width={160} height={40}/>
                        <p className="text-gray-300 font-light text-sm leading-7">
                            {data.contactUs.contactInfo}
                        </p>
                        <p className="text-gray-300 font-light text-sm leading-7">{data.contactUs.firstPhoneNumber} | {data.contactUs.secondPhoneNumber}</p>
                        <a href='#booking' className="bg-blue-600 hover:bg-blue-700 transition rounded px-6 py-3 font-medium cursor-pointer">
                            Book An Appointment
                        </a>
                    </div>

                    {/* Middle lists */}
                    <div className="flex flex-col sm:flex-row gap-28">
                        <div>
                            <h5 className="text-xl font-semibold mb-4">Taxation Services</h5>
                            <ul className="space-y-2 text-gray-300 flex flex-col gap-3">
                                {data.taxationService.map(item => (
                                    <li key={item.id} className={'cursor-pointer'}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-xl font-semibold mb-4">Accounting Services</h5>
                            <ul className="space-y-2 text-gray-300 flex flex-col gap-3">
                                {data.accountingService.map(item => (
                                    <li key={item.id} className={'cursor-pointer'}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Social icons */}
                    <div className=" h-full flex md:flex-col justify-between items-center gap-6">
                        <a href="#" aria-label="Facebook"><Facebook size={24}/></a>
                        <a href="#" aria-label="Instagram"><Instagram size={24}/></a>
                        <a href="#" aria-label="YouTube"><Youtube size={24}/></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={24}/></a>
                    </div>
                </div>
            </div>

            {/* —— Bottom blue bar —— */}
            <div className="bg-blue-600 text-white py-4">
                <div
                    className="container mx-auto px-12 flex flex-col sm:flex-row justify-between items-center text-sm">
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

