import React from 'react'
import Image from "next/image";

const WhyUs = () => {
    return (
        <div className='w-full h-[100vh] flex px-16 py-[50px]'>
            <div className='w-5/12 relative'>
                <Image src={'/Images/dots-frame.png'} alt={'dots'} width={600} height={600}/>
                <div>

                </div>
            </div>
            <div className='w-5/12'></div>
        </div>
    )
}
export default WhyUs
