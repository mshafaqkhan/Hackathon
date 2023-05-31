import Image from 'next/image'
import React from 'react'

export default function Promotion() {
    return (
        <div className='px-20'>
            <div className='text-center mt-12'>
                <small className=" text-blue-600 text-sm font-medium leading-none">PROMOTIONS</small>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Our Promotions Events
                </h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className='col-span-2 '>
                    <div className='bg-red-300'>
                        <Image src={"/Promo1.webp"} alt="website logo" width={550} height={550} />
                    </div>
                    <div>
                        Get 30% OFF
                    </div>

                </div>
                <div className='bg-red-400'>
                    <div>
                        <Image src={"/Promo2.webp"} alt="website logo" width={550} height={550} />
                    </div>
                </div>
                <div>
                    <Image src={"/Promo3.webp"} alt="website logo" width={550} height={550} />
                </div>
            </div>
        </div>
    )
}
