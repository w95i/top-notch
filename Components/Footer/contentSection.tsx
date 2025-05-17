import React from 'react'

const ContentSection = () => {
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
                        <p className="text-gray-700">9 Verge Place</p>
                        <p className="text-gray-700">West Hoston NSW 2171</p>
                    </div>
                    {/** Number **/}
                    <div>
                        <h4 className="relative inline-block text-lg font-semibold pb-2 mb-4">
                            Number
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-600"></span>
                        </h4>
                        <p className="text-gray-700">02 9826 1225</p>
                        <p className="text-gray-700">0473 676 139</p>
                    </div>
                    {/** Email **/}
                    <div>
                        <h4 className="relative inline-block text-lg font-semibold pb-2 mb-4">
                            Email Address
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-600"></span>
                        </h4>
                        <p className="text-gray-700">info@topnotchaccountants.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContentSection
