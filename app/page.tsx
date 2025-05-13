
import React from 'react';
import Hero from "@/Components/Hero/hero";
import WhyUs from "@/Components/WhyUs/whyUs";
import LazyShow from "@/Components/Reuseable/LazyShow";
import Features from "@/Components/Features/Features";

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <LazyShow yOffset={50} duration={0.6}>
                    <WhyUs />
                </LazyShow>
                <LazyShow yOffset={50} duration={0.6}>
                    <Features />
                </LazyShow>
            </main>
        </>
    );
}
