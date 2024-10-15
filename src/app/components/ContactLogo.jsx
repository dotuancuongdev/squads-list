import React from "react";
import Image from "next/image";
const ContactLogo = ({ center = true }) => {
  const contactLogos = [
    "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728960467/q1bbly08glsq8yltjjzf.svg",
    "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728960467/kr617tgd0jrtqqj6s1qn.svg",
    "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728960467/letwzfuahbqr4bjhrzlu.svg",
  ];
  return (
    <div
      className={`flex gap-5 mt-10 md:mt-16 ${center ? "justify-center" : ""}`}
    >
      {contactLogos.map((logo) => (
        <Image
          key={logo}
          src={logo}
          height={40}
          width={40}
          alt="logo"
          className="w-8 sm:w-10 cursor-pointer"
        />
      ))}
    </div>
  );
};

export default ContactLogo;
