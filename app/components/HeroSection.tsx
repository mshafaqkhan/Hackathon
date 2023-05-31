import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
    return (
        <div className='grid grid-cols-2 gap-4 px-20'>
            <div className=''>
            <Button variant="secondary" className='bg-gray-200 text-blue-700'>Sale 70 %</Button>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
                    An Industrial Take on Streetwear
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <Button className="mt-5 w-36 h-16">
                    <ShoppingCart className="mr-1 h-5 w-5" /> Start Shopping
                </Button>
            </div>
            <div className='bg-[#ffece3] rounded-full'>
            <Image src={"/HeroPic.webp"} alt="website logo" width={550} height={550} />
            </div>
        </div>
    )
}
