import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Promotion() {
  return (
    <div className="px-20">
      <div className="text-center mt-12">
        <small className=" text-blue-600 text-sm font-medium leading-none">
          PROMOTIONS
        </small>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Our Promotions Events
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div style={{ height: '23rem' }} className="col-span-2">
          <div className="h-1/2 bg-[#d6d6d8] flex items-center justify-between p-10">
            <div>
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                GET UP TO 60%
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-0">
                For the summer Season
              </p>
            </div>

            <Image
              src={"/Promo1.webp"}
              alt="website logo"
              width={240}
              height={240}
            />
          </div>
          <div className="h-1/2 text-white bg-gray-700 flex flex-col items-center justify-center ">
            <h2 className="font-bold scroll-m-20 pb-2 text-3xl tracking-tight transition-colors first:mt-0">
              GET 30% Off
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-0">
              USE PROMO CODE
            </p>

            <Button variant="secondary" className='bg-gray-500 font-extrabold text-white'>DINE WEEKEND SALE</Button>

          </div>
        </div>
        <div style={{ height: '23rem' }} className="p-5 bg-amber-100">
          <div>
            Flex Sweatshirt
          </div>
          <div>
            $75.00
          </div>
          <div className="object-none">
            <Image
              src={"/Promo2.webp"}
              alt="website logo"
              width={230}
              height={230}
            />
          </div>
        </div>
        <div style={{ height: '23rem' }} className="p-5 bg-stone-300">
          <div>
            Flex Push Button Bomber
          </div>
          <div>
            $190.00
          </div>
          <div className="object-none">
            <Image
              src={"/Promo3.webp"}
              alt="website logo"
              width={230}
              height={230}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
