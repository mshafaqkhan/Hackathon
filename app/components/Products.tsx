import Image from 'next/image'
import React from 'react'

export default function Products() {
    return (
        <div className='px-20'>
            <div className='text-center mt-12'>
                <small className=" text-blue-600 text-sm font-medium leading-none">Products</small>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Check What We Have
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className='bg-red-400'>
                    <Image src={"/Promo1.webp"} alt="website logo" width={550} height={550} />
                </div>
                <div className='bg-red-200'>
                    <div>
                        <Image src={"/Promo2.webp"} alt="website logo" width={550} height={550} />
                    </div>
                </div>
                <div className='bg-red-700'>
                    <Image src={"/Promo3.webp"} alt="website logo" width={550} height={550} />
                </div>
            </div>
        </div>
    )
}
