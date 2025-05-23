import React from 'react'
import '../../public/css/Service.css'
import Link from "next/link";
import {AccountingService} from "@/lib/types";

interface ServiceProps {
    services : AccountingService[];
}

export const Services = ({services} : ServiceProps) => {
    const leftServices = services.slice(0, 2)
    const rightServices = services.slice(2)

    const renderItem = (svc: AccountingService) => (
        <Link key={svc.id} href={svc.url || '#'} className='cursor-pointer'>
            <div className="flex items-start gap-5 mb-8 h-36 text-white hover:bg-white hover:text-[#0B63E5] p-3 hover:rounded-sm transition-all duration-300 ease-out cursor-pointer ">
                <i className={`${svc.iconSvg} text-[32px]`}/>
                <div className=" font-alex flex flex-col h-full gap-3 ">
                    <h3 className="text-xl font-medium mb-1">{svc.title}</h3>
                    <p className="text-sm font-light leading-[1.6]">{svc.descp}</p>
                    <div className="border-b border-white/20 mt-4"/>
                </div>
            </div>
        </Link>
    )

    return (
        <section className="service-bg min-h-dvh px-8 md:px-24 py-14">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-16">
                <div className="w-full md:w-1/2">
                    <h2 className="text-white uppercase text-3xl md:text-6xl font-normal leading-7 md:leading-[60px] mb-[50px] md:mb-[100px] mt-[65px] md:mt-[130px]">
                        Explore our
                        <br/>
                        services.
                    </h2>
                    {leftServices.map(renderItem)}
                </div>
                <div className="w-full md:w-1/2">
                    {rightServices.map(renderItem)}
                </div>
            </div>
        </section>
    )
}

export default Services