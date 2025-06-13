"use client";

import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import React, { useEffect, useRef, useState } from "react";
import AvatarModel from "./AvatarModel";
import { motion, useScroll, useTransform } from "framer-motion";

const Banner = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "-50%"]
  );
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-1000%", "0%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen h-[320dvh] flex flex-row justify-between items-start max-w-[1400px] mx-auto pt-[30px] px-[10px] relative overflow-hidden"
    >
      <div className="flex flex-col gap-[10px] w-full h-[80dvh] justif-start pt-[10dvh] sm:pt-0 sm:justify-center relative">
        <h1 className="text-4xl sm:text-8xl font-bold font-mono sm:w-6/12">
          Hi, I'm <span className="text-primary">Abdul Hannan</span>
        </h1>
        <p className="max-w-xl text-sm sm:text-lg leading-[120%]">
          A Frontend Developer for 3D & interactive websites. Working on{" "}
          <span className="text-primary">Next.js</span>,{" "}
          <span className="text-primary">React.js</span> &{" "}
          <span className="text-primary">Three.js</span>. I'm a Computer Science
          student at Emaan Institute of Management & Sciences (EIMS).
        </p>
        <p className="font-medium text-sm sm:text-lg">
          Working with javascript for almost half a{" "}
          <span className="text-primary">Decade</span>.
        </p>
        <div className="flex flex-row gap-[20px] px-[20px] py-[10px] rounded-lg bg-gradient-to-t from-foreground-dark to-foreground w-fit text-white text-2xl">
          <a
            href="https://www.linkedin.com/in/abdul-hannan-siddiqui-6563b6279/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandLinkedin />
          </a>
          <a
            href="https://github.com/AbdulHannan242001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandGithub />
          </a>
        </div>
        <motion.div
          style={{ x, y }}
          className="h-full w-full sm:w-6/12 top-[20dvh] sm:top-0 right-0 absolute"
        >
          <AvatarModel scrollProgress={scrollYProgress} />
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full sm:min-w-[1200px] transform -translate-x-1/2 left-1/2">
        <motion.h1
          style={{ y: bgY, opacity: scrollYProgress }}
          className="text-4xl sm:text-8xl overflow-hidden font-black font-sans tracking-[0.0em] text-primary uppercase text-center"
        >
          Frontend Developer
        </motion.h1>
        <p className="text-5xl sm:text-9xl overflow-hidden font-black font-mono tracking-[-0.04em] leading-none uppercase text-center">
          SASKA SOLUTIONS
        </p>
      </div>
    </div>
  );
};

export default Banner;
