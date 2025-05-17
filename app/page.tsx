"use client";

import React, { useEffect, useState } from "react";
import Hero from "@/Components/Hero/hero";
import WhyUs from "@/Components/WhyUs/whyUs";
import LazyShow from "@/Components/Reuseable/LazyShow";
import Features from "@/Components/Features/Features";
import Services from "@/Components/Services/Services";
import BookAppointment from "@/Components/Booking/BookAppointment";
import axiosInstance from "@/lib/axios";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/HomePage")
            .then((res) => setData(res.data))
            .catch((err) => console.error("Failed to load home page data:", err));

        console.log(data)
    }, []);

    return (
        <main>
            <Hero/>

            <LazyShow yOffset={50} duration={1}>
                <WhyUs />
            </LazyShow>

            <LazyShow yOffset={50} duration={1}>
                <Features />
            </LazyShow>

            <LazyShow yOffset={50} duration={1}>
                <Services />
            </LazyShow>

            <LazyShow yOffset={50} duration={1}>
                <BookAppointment />
            </LazyShow>
        </main>
    );
}
