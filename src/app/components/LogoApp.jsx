import React from "react";
import Image from "next/image";
const LogoApp = () => {
  return (
    <div className="flex gap-3 items-center">
      <Image
        src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728960841/x7wrjpjbwc0mjiuw6s3u.svg"
        alt="white-logo"
        height={32}
        width={32}
        className="lg:w-14 lg:h-14"
      />
      <p className="text-xl leading-8 font-medium lg:text-[32px] ">Spinel</p>
    </div>
  );
};

export default LogoApp;
