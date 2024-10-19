"use client";  
import Link from "next/link"

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header w-screen h-[10vh] fixed top-0 z-10 bg-[#1111115f] flex">
      <header className="flex justify-around w-full items-center">
        {/* Logo */}
        <Link href={"/"}>
        <div className="logo text-white text-xl sm:text-2xl font-bold cursor-pointer">
          BASHAR TECH
        </div>
            </Link> 

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 font-semibold">

            <Link href={"/"}>
            <li className="text-white hover:text-slate-400 cursor-pointer">Home</li>
            </Link> 
            <Link href={"#about"}>
             <li className="text-white hover:text-slate-400 cursor-pointer">About</li>
            </Link>
            <Link href={"#services"}>
             <li className="text-white hover:text-slate-400 cursor-pointer">Services</li>
            </Link>
            <Link href={"#contact"}>
             <li className="text-white hover:text-slate-400 cursor-pointer">Contact</li>
            </Link>

          </ul>
        </nav>

        {/* Contact Button (Desktop Only) */}
        <Link href={"#contact"}>
        <div className="hidden lg:block btn p-1 lg:w-32 rounded-3xl lg:text-center hover:bg-slate-400 bg-white text-black cursor-pointer">
          Contact us
        </div>
            </Link>
        

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleBar} className="focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Nav Menu with Smooth Transition */}
      <div
        className={`absolute top-[10vh] w-full bg-[#060505d7] text-white transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 font-semibold">
          <Link href={"/"}>
            <li className="text-white hover:text-slate-400 cursor-pointer"  onClick={closeMenu} >Home</li>
            </Link> 
            <Link href={"#about"}>
             <li className="text-white hover:text-slate-400 cursor-pointer"  onClick={closeMenu} >About</li>
            </Link>
            <Link href={"#services"}>
             <li className="text-white hover:text-slate-400 cursor-pointer"  onClick={closeMenu} >Services</li>
            </Link>
            <Link href={"#contact"}>
             <li className="text-white hover:text-slate-400 cursor-pointer"  onClick={closeMenu} >Contact</li>
            </Link>
        </ul>
      </div>
    </div>
  );
}