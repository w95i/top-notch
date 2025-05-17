"use client"
import React from 'react'
import '../../public/css/whyus.css'
import Image from "next/image";
import {motion} from 'framer-motion';
import Accordion from "@/Components/WhyUs/Accordion";
import Reasons from "@/Components/WhyUs/Reasons";

const contentVariants = {
    hidden: {y: "100%", opacity: 0},
    visible: {y: "0%", opacity: 1},
};

const WhyUs = () => {
    return (
        <>
            <div className='w-full h-[100vh] flex justify-between px-16 py-[50px] overflow-hidden'>
                <div className='w-5/12 relative'>
                    <Image src={'/Images/dots-frame.png'} alt={'dots'} width={450} height={600} className={'mx-auto'}/>
                    <motion.div
                        className='content-section flex flex-col justify-center items-center gap-6 p-4'
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                        transition={{duration: 1, ease: 'easeOut'}}
                    >
                        <h2 className='text-3xl font-bold'>Top Notch Accountants & Tax Agents</h2>
                        <p className='text-lg font-alex'>
                            Top Notch Accountants is a Sydney tax accountant and business advisor, we focus on providing
                            solutions to individuals and business owners to build wealth and increase profitability and
                            business growth. We have been servicing individuals and businesses for over 10 years with
                            all
                            Tax, accounting, financial services needs.
                        </p>
                        <Accordion/>
                    </motion.div>
                </div>
                <div className='w-6/12'>
                    <Reasons/>
                </div>
            </div>
        </>

    )
}
export default WhyUs
