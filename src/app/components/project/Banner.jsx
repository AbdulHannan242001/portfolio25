import Image from "next/image";
import React from "react";

const Banner = ({ url}) => {
  return (
    <section className="relative flex flex-row justify-between items-start h-[40dvh] sm:h-[90dvh] m-2 rounded-4xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <Image src={url} alt="banner" height={900} width={1800}  className="h-full object-cover bg-black" />
    </section>
  );
};

export default Banner;
