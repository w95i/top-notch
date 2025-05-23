import React from 'react'
import '../../public/css/hero.css'
import HeroSlogan from "@/Components/Hero/HeroSlogan";
import HeroContent from "@/Components/Hero/HeroContent";
import {HeroSection} from "@/lib/types";

interface HeroProps {
    heroData: HeroSection[];
}


const Hero= ({heroData} : HeroProps) => {

    return (
        <div className='hero-bg w-full h-36 relative overflow-hidden'>
            <HeroSlogan />
            <HeroContent heroData={heroData}/>
            <img src='/Images/arrow.png' alt='arrow' className='arrow-img'/>
        </div>
    )
}

export default Hero;
