import Image from "next/image";
import React from "react";
import LogoApp from "./LogoApp";

const Header = () => {
  return (
    <div className="bg-[#232334] lg:px-16">
      <div className="px-4 py-3 flex justify-between lg:px-0">
        <LogoApp />
        <button className="bg-[#6966FF] rounded lg:w-44">
          <p className="text-xs leading-4 font-medium px-[10px] py-[6px] lg:text-base lg:leading-6">
            0x2b...5f7f
          </p>
        </button>
      </div>
    </div>
  );
};

export default Header;
