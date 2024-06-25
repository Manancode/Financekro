"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollTofeatures: () => void;

  scrollToaboutus: () => void;
  scrollTointegration: () => void;
  // Define scrollToServices function
}

const Navbar = ({
  scrollTofeatures,
  scrollTointegration,
  scrollToaboutus , 
 
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className=" text-slate-300 
             bg-clip-text text-transparent text-center
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opac" href="/">
            Financekro
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <div onClick={scrollTofeatures} className="hover:text-gray-50">
            Features
          </div>
          <div onClick={scrollTointegration} className="hover:text-gray-50">
            Integration
          </div>

          <div onClick={scrollToaboutus} className="hover:text-gray-50">
            About us
          </div>
          
          <Link href="/pricing" className="hover:text-gray-50">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-gray-50">
            Contact us
          </Link>

        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50

            "
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;