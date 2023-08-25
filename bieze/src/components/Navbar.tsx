"use client";

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


export function MenuBar() {
  return (
    <Navbar className='dark:bg-[#1e1e2e]'>
      <NavbarBrand>
        <p className="text-3xl md:text-l sm:text-l font-bold text-[#1e66f5]">Bieze</p>
        <p className="text-sm mt-10 mr-5 absolute text-[#4c4f69] dark:text-[#cdd6f4]">v0.1.1</p>
      </NavbarBrand>
    </Navbar>
  );
}
