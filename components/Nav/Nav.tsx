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

import { useState } from "react";

import Logo from "@/public/icons/logo.svg"

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "About Me",
        "Education",
        "Experience",
        "Projects",
        "Contact"
    ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="w-full">
        <NavbarBrand className="flex items-center gap-1">
            <Logo className="h-8 w-8"/>
            <h1 className="text-lg font-medium">Taylor Burrows</h1>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex" justify="center">
                <NavbarItem>Home</NavbarItem>
                <NavbarItem>About</NavbarItem>
                <NavbarItem>Projects</NavbarItem>
                <NavbarItem>Contact</NavbarItem>
        </NavbarContent>
        <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle 
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                
            />
        </NavbarContent>
        <NavbarMenu className="">
            {menuItems.map((item, index) => (
                <NavbarMenuItem>
                    {item}
                </NavbarMenuItem>
            
            ))}
        </NavbarMenu>
    </Navbar>
  )
}

export default Nav