"use client"
import React, {useEffect, useState} from 'react'
import '../../public/css/whyus.css'
import Image from "next/image";
import {motion} from 'framer-motion';
import Accordion from "@/Components/WhyUs/Accordion";
import Reasons from "@/Components/WhyUs/Reasons";
import {Definition, TopNotchAccountantsInfo, WhyTopNotchAccountant} from "@/lib/types";

const contentVariants = {
    hidden: {y: "100%", opacity: 0},
    visible: {y: "0%", opacity: 1},
};

interface WhyUsProps {
    title: TopNotchAccountantsInfo;
    definitions: Definition[];
    reasons: WhyTopNotchAccountant[];
}

const WhyUs: React.FC<WhyUsProps> = ({definitions, reasons, title}) => {
    return (
        <>
                <div className='w-full min-h-dvh flex flex-col md:flex-row justify-between px-2 md:px-16 py-[50px]'>
                    <div className='w-12/12 md:w-5/12 relative'>
                        <Image src={'/Images/dots-frame.png'} alt={'dots'} width={450} height={600}
                               className={'mx-auto'}/>
                        <motion.div
                            className='content-section flex flex-col justify-center items-center gap-6 p-4'
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                            transition={{duration: 1, ease: 'easeOut'}}
                        >
                            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold'>{title?.title}</h2>
                            <p className='text-lg font-alex'>
                                {title?.descp}
                            </p>
                            <Accordion definitions={definitions}/>
                        </motion.div>
                    </div>
                    <div className='w-12/12 md:w-6/12'>
                        <Reasons reasons={reasons}/>
                    </div>
                </div>
        </>

    )
}
export default WhyUs
