"use client";
import React, {useEffect} from 'react';
import {motion} from 'framer-motion';
import {WhyTopNotchAccountant} from "@/lib/types";

const containerVariants = {
    hidden: {scaleY: 0, opacity: 0, transformOrigin: 'bottom'},
    visible: {scaleY: 1, opacity: 1, transformOrigin: 'bottom'},
};

const titleVariants = {
    hidden: {opacity: 0, y: -50},
    visible: {opacity: 1, y: 0},
};

const itemVariants = {
    hidden: {opacity: 0, x: -50},
    visible: {opacity: 1, x: 0},
};

interface reasonsProps {
    reasons: WhyTopNotchAccountant[]
}

const Reasons = ({reasons}: reasonsProps) => {
    return (
        <motion.div
            className={'w-full bg-us px-6 py-12 flex flex-col gap-20'}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{duration: 1, ease: 'easeOut', delay: 3}}
            style={{overflow: 'hidden', transformOrigin: 'bottom'}}
        >
            <motion.h2
                initial="hidden"
                animate="visible"
                variants={titleVariants}
                transition={{duration: 0.8, ease: 'easeOut', delay: 4}}
                className={'text-5xl text-white w-10/12 leading-14 font-medium'}
            >
                <span className={'font-alex font-normal'}>Why</span> Top Notch Accountants <span
                className={'font-alex font-normal'}>?!</span>
            </motion.h2>
            <motion.div
                className={'flex flex-wrap gap-y-20'}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{duration: 0.6, ease: 'easeOut', delay: 3}}
            >
                {reasons.map((item: WhyTopNotchAccountant, index: number) => (
                    <motion.div key={item.id} className={'w-6/12 flex p-x-1'}>
                        <motion.div
                            className={'flex gap-2 font-alex text-white'}
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                            transition={{duration: 0.6, ease: 'easeOut', delay: 4 + 0.5 * index}}
                        >
                            <p className={'text-5xl font-black'}>{index + 1}</p>
                            <p className={'text-2xl font-normal'}>{item.point}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Reasons;
