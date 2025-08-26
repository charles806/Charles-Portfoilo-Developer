import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      <div
        className={` fixed inset-0 ${navOpen} bg-black opacity-70 z-[9999]1`}
      ></div>

      {/* Slide-in Menu */}
      <div
        className={`text-white ${navOpen} fixed top-0 right-0 flex flex-col h-full w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[10000] p-8 transition-transform`}
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white w-fit text-xl border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.Label}
            </p>
          </Link>
        ))}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
