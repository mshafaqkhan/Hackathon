"use client";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function NavBar() {
    return (
        <div className="flex justify-between items-center h-20 px-20">
            <div>
                <Image src={"/Logo.webp"} alt="website logo" width={150} height={150} />
            </div>
            <div>
                <NavigationMenu>
                    <NavigationMenuList className="space-x-20">
                        <NavigationMenuItem>Female</NavigationMenuItem>
                        <NavigationMenuItem>Male</NavigationMenuItem>
                        <NavigationMenuItem>Kids</NavigationMenuItem>
                        <NavigationMenuItem>All Products</NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex">
                <Search className="bg-white rounded-l" />{" "}
                <input
                    type="text"
                    placeholder="What are you looking for"
                    className="rounded-r"
                ></input>
            </div>
            <div className="p-2 rounded-full bg-gray-300">
            <ShoppingCart className="relative" />
            <span className="absolute top-2 right-20 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
                    A
                </span>
            </div>
        </div>
    );
}
