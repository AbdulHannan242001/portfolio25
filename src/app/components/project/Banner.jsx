"use client";

import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Banner = ({ url }) => {
  const bannerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["center start", "end start"], // Track when banner enters and leaves viewport
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <motion.section
      ref={bannerRef}
      style={{ scale }}
      className="relative flex flex-row justify-between items-start h-[40dvh] sm:h-[90dvh] m-2 rounded-4xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
    >
      <div className="absolute inset-0">
        <Image
          src={url}
          alt="banner"
          fill
          className="h-full object-cover object-center bg-black"
          priority
        />
      </div>
    </motion.section>
  );
};

export default Banner;
