import React from "react";
import ContactLogo from "./ContactLogo";
import Image from "next/image";
import LogoApp from "./LogoApp";

const informations = [
  {
    icon: "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728979794/epwv6q4hgk5ih4tokalq.svg",
    text: "support@spinel.finance",
  },
  {
    icon: "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728979794/dariswszaa7ruglhdgvg.svg",
    text: "Spinel Labs Pte.Ltd",
  },
  {
    icon: "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728979793/vygk4tanskmgnp2pdiqk.svg",
    text: "20A Tanjong Pagar Road, Singapore",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#151521] lg:px-16">
      <div className="px-4 py-6 lg:px-0">
        <div className="flex flex-col gap-3">
          <p className="text-xs leading-4 font-medium">
            For more information, partnership and press inquiries:
          </p>
          {informations.map((item, idx) => (
            <div key={idx} className="flex gap-2">
              <Image src={item.icon} alt="icon" height={24} width={24} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <ContactLogo center={false} />
        <div className="h-[1px] bg-zinc-700 my-6" />
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <LogoApp />
          <p className="text-sm leading-5 font-semibold">
            Copyright © 2022 Spinel Labs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
