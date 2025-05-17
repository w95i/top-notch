import React from 'react'
import '../../public/css/Service.css'

interface Service {
    iconClass: string
    title: string
    description: string
}

const allServices: Service[] = [
    {
        iconClass: 'ri-calendar-line',
        title: 'Bookkeeping',
        description:
            'Do not let bookkeeping take you away from managing your business. Let our staff at Top Notch accountants handle all your bookkeeping.',
    },
    {
        iconClass: 'ri-wallet-line',
        title: 'Payroll',
        description:
            'Do not let payroll take you away from managing your business. Let our staff at Top Notch accountants handle all your payroll.',
    },
    {
        iconClass: 'ri-money-dollar-circle-line',
        title: 'Tax Returns',
        description:
            'At Top Notch accountants, we make sure to get the maximum refund possible for your personal and business tax return.',
    },
    {
        iconClass: 'ri-bookmark-line',
        title: 'Business Registration',
        description:
            'Thinking about starting a business? Talk to our accountants to understand your best options and tax obligations.',
    },
    {
        iconClass: 'ri-building-2-line',
        title: 'Business Management',
        description:
            'Let Top Notch accountants manage your business financials while you have more time to run your business or enjoy your personal life.',
    },
    {
        iconClass: 'ri-checkbox-circle-line',
        title: 'Single Touch Payroll',
        description:
            'Our accountants are experts in managing business payroll and single touch payroll (STP).',
    },
]

export const Services: React.FC = () => {
    const leftServices = allServices.slice(0, 2)
    const rightServices = allServices.slice(2)

    const renderItem = (svc: Service) => (
        <div key={svc.title} className="flex items-start gap-5 mb-8 h-36">
            <i className={`${svc.iconClass} text-[32px] text-white`}/>
            <div className="text-white font-alex flex flex-col h-full gap-3">
                <h3 className="text-xl font-medium mb-1">{svc.title}</h3>
                <p className="text-sm font-light leading-[1.6]">{svc.description}</p>
                <div className="border-b border-white/20 mt-4"/>
            </div>
        </div>
    )

    return (
        <section className="service-bg h-dvh px-24 py-14 overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex gap-16">
                <div className="w-1/2">
                    <h2 className="text-white uppercase text-6xl font-normal leading-[60px] mb-[100px] mt-[130px]">
                        Explore our
                        <br/>
                        services.
                    </h2>
                    {leftServices.map(renderItem)}
                </div>

                <div className="w-1/2">
                    {rightServices.map(renderItem)}
                </div>
            </div>
        </section>
    )
}

export default Services