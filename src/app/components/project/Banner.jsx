import Image from "next/image";
import React from "react";

const Banner = ({ url}) => {
  return (
    <section className="relative flex flex-row justify-between items-start h-[80dvh] m-2 rounded-4xl overflow-hidden">
        <Image src={url} alt="banner" fill />
    </section>
  );
};

export default Banner;
