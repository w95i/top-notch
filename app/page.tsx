"use client";

import React, {useEffect, useState} from "react";
import Hero from "@/Components/Hero/hero";
import WhyUs from "@/Components/WhyUs/whyUs";
import LazyShow from "@/Components/Reuseable/LazyShow";
import Features from "@/Components/Features/Features";
import Services from "@/Components/Services/Services";
import BookAppointment from "@/Components/Booking/BookAppointment";
import axiosInstance from "@/lib/axios";
import {HomePageData} from "@/lib/types";

export default function Home() {
    const [data, setData] = useState<HomePageData>({
        companyProfile: {id: 0, descp: "", imageProfile: ""},
        hero: {id: 0, descp: "", imageProfile: ""},
        heroSections: [],
        topNotchAccountantsInfo: {id: 0, title: "", descp: ""},
        definitions: [],
        whyTopNotchAccountants: [],
        demoContent: {id: 0, title: "", descp: ""},
        service: [],
        accountingService: [],
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axiosInstance
            .get<HomePageData>("/HomePage")
            .then((res) => setData(res.data))
            .catch((err) => console.error("Failed to load home page data:", err))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="text-xl font-medium">Loading...</span>
            </div>
        );
    }

    return (
        <main>
            {/* Hero */}
            <LazyShow yOffset={50} duration={0.8}>
                <Hero heroData={data.heroSections}/>
            </LazyShow>

            {/* Why Us */}
            {data.definitions.length > 0 &&
                data.whyTopNotchAccountants.length > 0 && (
                    <LazyShow yOffset={50} duration={0.8}>
                        <section id='about'>
                            <WhyUs
                                title={data.topNotchAccountantsInfo}
                                definitions={data.definitions}
                                reasons={data.whyTopNotchAccountants}
                            />
                        </section>
                    </LazyShow>
                )}

            {/* Features */}
            <LazyShow yOffset={50} duration={0.8}>
                <Features features={data.service}/>
            </LazyShow>

            {/* Services */}
            <LazyShow yOffset={50} duration={0.8}>
                <Services services={data.accountingService}/>
            </LazyShow>

            {/* Booking */}
            <LazyShow yOffset={50} duration={0.8}>
                <section id='booking'>
                    <BookAppointment/>
                </section>
            </LazyShow>
        </main>
    );
}
