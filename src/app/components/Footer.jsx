import React from "react";
import ContactLogo from "./ContactLogo";
import Image from "next/image";

const informations = [
  { icon: "", text: "support@spinel.finance" },
  { icon: "", text: "Spinel Labs Pte.Ltd" },
  { icon: "", text: "20A Tanjong Pagar Road, Singapore" },
];
const Footer = () => {
  return (
    <div className="bg-[#151521]">
      <div className="px-4 py-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs leading-4 font-medium">
            For more information, partnership and press inquiries:
          </p>
          {informations.map((item, idx) => (
            <div key={idx} className="flex gap-2">
              <Image
                src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728960467/kr617tgd0jrtqqj6s1qn.svg"
                alt="icon"
                height={24}
                width={24}
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <ContactLogo center={false} />
        <div className="h-[1px] bg-zinc-700 my-6" />
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-3">
            <Image
              src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728960841/x7wrjpjbwc0mjiuw6s3u.svg"
              alt="white-logo"
              height={32}
              width={32}
            />
            <p className="text-xl leading-8 font-medium">Pinel</p>
          </div>
          <p className="text-sm leading-5 font-semibold">
            Copyright © 2022 Spinel Labs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
