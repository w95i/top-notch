import React from 'react'
import FeaturesCard from "@/Components/Features/FeaturesCard";

const cards: Array<{
    id: number;
    title: string;
    description: string;
    icon: string;
    link: string;
}> = [
    {
        id: 1,
        title: 'Business Taxation',
        description: 'We can prepare your BAS and IAS on a timely basis ensuring you are paying the right amount with the right amount of time to plan.',
        icon: '',
        link: '',
    },
    {
        id: 2,
        title: 'Financial Statements',
        description: 'We prepare your financial statements using the latest software and including all relevant Notes so your numbers look as professional as possible.',
        icon: '',
        link: '',
    },
    {
        id: 3,
        title: 'ATO Correspondence',
        description: 'We act as the middle person with the ATO and help you navigate the sometimes-confusing landscape, private rulings requests, disputes, audits, and others.',
        icon: '',
        link: '',
    }
];

const Features = () => {
    return (
        <>
            <div className={'features-bg w-full flex flex-col gap-28 py-[90px] px-16'}>
                <div className={'w-full flex gap-1 justify-between'}>
                    <h2 className={'font-normal text-4xl max-w-6/12 p-4'}>
                        Lorem ipsum dolor sit
                        amet consectetur.</h2>
                    <p className={'font-light text-xl font-alex max-w-6/12 p-4'}>
                        Lorem ipsum dolor sit amet consectetur. Magna purus ipsum
                        viverra tincidunt vivamus amet
                        fermentum in hac. Dui mi massa dolor enim </p>
                </div>
                <div className="w-full flex gap-4">
                    <FeaturesCard cards={cards} />
                </div>
            </div>
        </>
    )
}
export default Features
