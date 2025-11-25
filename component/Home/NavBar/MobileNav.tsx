"use client";
import React from "react";
import { navLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  const handleScroll = (target: string) => {
    const el = document.querySelector(target);
    el?.scrollIntoView({ behavior: "smooth" });
    closeNav(); // close drawer after clicking
  };

  return (
    <div>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 ${
          showNav
            ? "opacity-70 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-black z-[9998] transition-opacity`}
        onClick={closeNav}
      ></div>

      {/* Slide-in Menu */}
      <div
        className={`text-white ${navOpen} fixed top-0 right-0 flex flex-col h-full w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[10000] p-8 transition-transform duration-300`}
      >
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />

        {/* Menu Links */}
        {navLinks.map((link) => (
          <p
            key={link.id}
            onClick={() => handleScroll(link.url)}
            className="cursor-pointer text-white w-fit text-xl border-b-[1.5px] pb-1 border-white sm:text-[30px]"
          >
            {link.Label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
