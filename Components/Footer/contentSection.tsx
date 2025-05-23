import React from 'react'
import {contactUs} from "@/lib/types";

interface ContentSectionProps {
    contactUs: contactUs;
}

const ContentSection = ({contactUs}: ContentSectionProps) => {
    return (
        <>
            <div className="content-bg py-[50px] px-16">
                <div
                    className="container mx-auto px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                    <div>
                        <p className="text-sm text-gray-500">Contact Info</p>
                        <h2 className="mt-2 text-3xl font-bold">We are always<br/>happy to assist you</h2>
                    </div>
                    {/** Address **/}
                    <div>
                        <h4 className="relative inline-block text-lg font-semibold pb-2 mb-4">
                            Address
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-600"></span>
                        </h4>
                        <p className="text-gray-700 text-wrap max-w-52">{contactUs.address}</p>
                    </div>
                    {/** Number **/}
                    <div>
                        <h4 className="relative inline-block text-lg font-semibold pb-2 mb-4">
                            Number
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-600"></span>
                        </h4>
                        <p className="text-gray-700">{contactUs.firstPhoneNumber}</p>
                        {contactUs.secondPhoneNumber ? (
                            <p className="text-gray-700 mt-1">{contactUs.secondPhoneNumber}</p>) : null}
                    </div>
                    {/** Email **/}
                    <div>
                        <h4 className="relative inline-block text-lg font-semibold pb-2 mb-4">
                            Email Address
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-600"></span>
                        </h4>
                        <p className="text-gray-700">{contactUs.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContentSection
