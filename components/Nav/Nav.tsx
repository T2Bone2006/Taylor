"use client";

import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/react";
import { SanityTypes } from "@/sanity/types";

import { useEffect, useState } from "react";

import Logo from "@/public/icons/logo.svg"
import { client } from "@/sanity/sanity-utils";

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const [menuItems, setMenuItems] = useState<SanityTypes[]>([])
    useEffect(() => {
        const query = '*[_type == "menuItems"]';
        client.fetch(query).then((data: SanityTypes[]) => {
            setMenuItems(data);
        });
    }, []);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" shouldHideOnScroll>
        <NavbarBrand className="flex items-center gap-1">
            <Logo className="h-8 w-8"/>
            <h1 className="text-lg font-medium">Taylor Burrows</h1>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex" justify="center">
            {menuItems.map((menuItems) => (
                <NavbarItem className="text-sm border-2 border-mainBlue border-solid rounded-full py-2 px-4">{menuItems.title}</NavbarItem>
            ))}
        </NavbarContent>
        <NavbarContent className="md:hidden" justify="end">
            <NavbarMenuToggle 
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                
            />
        </NavbarContent>
        <NavbarMenu >
                    {menuItems.map((menuItems) => (
                        <NavbarMenuItem>
                            {menuItems.title}
                        </NavbarMenuItem>
                    ))}
        </NavbarMenu>
    </Navbar>
  )
}

export default Nav