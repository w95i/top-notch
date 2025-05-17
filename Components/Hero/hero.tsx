import React from 'react'
import '../../public/css/hero.css'
import HeroSlogan from "@/Components/Hero/HeroSlogan";
import HeroContent from "@/Components/Hero/HeroContent";


const Hero = () => {

    return (
        <div className='hero-bg w-full h-36 relative overflow-hidden'>
            <HeroSlogan />
            <HeroContent/>
            <img src='/Images/arrow.png' alt='arrow' className='arrow-img'/>
        </div>
    )
}

export default Hero;
