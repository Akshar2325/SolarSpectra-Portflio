"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png" // Ensure the path is correct
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 text-gray-300">
            Akshar Bhesaniya | SolarSpectra
          </span>
        </a>

        <div className="hidden md:flex items-center justify-between w-[500px] h-full mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src} // Ensure the path is correct
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            className="flex items-center p-2 rounded-full bg-[#0300145e] border border-[#7042f861]"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <Image src="/icons8-xbox-menu-90.png" alt="Menu" width={30} height={30} />
          </button>
          <button
            className="flex items-center p-2 rounded-full bg-[#0300145e] border border-[#7042f861]"
            onClick={() => setIsSocialOpen(!isSocialOpen)}
          >
            <Image src="/icons8-circled-menu-90.png" alt="Social" width={30} height={30} />
          </button>
        </div>
      </div>

      {isNavOpen && (
        <div className="md:hidden fixed top-[75px] right-2 w-[60%] max-w-xs bg-[#030014] text-gray-200 rounded-lg shadow-lg py-2 px-3 z-50">
          <div className="flex flex-col items-start">
            <a href="#about-me" className="py-1 w-full text-left" onClick={() => setIsNavOpen(false)}>
              About me
            </a>
            <a href="#skills" className="py-1 w-full text-left" onClick={() => setIsNavOpen(false)}>
              Skills
            </a>
            <a href="#projects" className="py-1 w-full text-left" onClick={() => setIsNavOpen(false)}>
              Projects
            </a>
          </div>
        </div>
      )}

      {isSocialOpen && (
        <div className="md:hidden fixed top-[75px] right-2 w-[60%] max-w-xs bg-[#030014] text-gray-200 rounded-lg shadow-lg py-2 px-3 z-50">
          <div className="flex flex-col items-start">
            {Socials.map((social) => (
              <a
                href={social.href}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 w-full text-left"
                onClick={() => setIsSocialOpen(false)}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
