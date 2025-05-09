"use client";

import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import React, { useRef } from "react";
import AvatarModel from "./AvatarModel";
import { motion, useScroll, useTransform } from "framer-motion";

const Banner = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-1000%", "0%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen h-[320dvh] flex flex-row justify-between items-start max-w-[1400px] mx-auto py-[30px] px-[10px] relative overflow-hidden"
    >
      <div className="flex flex-col gap-[10px] w-6/12 h-[80dvh] justify-center">
        <h1 className="text-8xl font-bold font-mono">
          Hi, I'm <span className="text-primary">Abdul Hannan</span>
        </h1>
        <p className="max-w-xl text-lg leading-[120%]">
          A Frontend Developer for 3D & interactive websites. Working on{" "}
          <span className="text-primary">Next.js</span>,{" "}
          <span className="text-primary">React.js</span> &{" "}
          <span className="text-primary">Three.js</span>. I'm a Computer Science
          student at Emaan Institute of Management & Sciences (EIMS).
        </p>
        <p className="font-medium text-lg">
          Working with javascript for almost half a{" "}
          <span className="text-primary">Decade</span>.
        </p>
        <div className="flex flex-row gap-[20px] px-[20px] py-[10px] rounded-lg bg-gradient-to-t from-foreground-dark to-foreground w-fit text-white text-2xl">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <TbBrandLinkedin />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <TbBrandGithub />
          </a>
        </div>
      </div>
      <motion.div
        style={{ x, y }}
        className="h-[80dvh] w-6/12 flex justify-center items-center z-50"
      >
        <AvatarModel scrollProgress={scrollYProgress} />
      </motion.div>
      <div className="absolute bottom-0 w-[1200px] transform -translate-x-1/2 left-1/2">
        <motion.h1
          style={{ y: bgY, opacity: scrollYProgress }}
          className="text-8xl overflow-hidden font-black font-sans tracking-[0.0em] text-primary uppercase text-center"
        >
          Frontend Developer
        </motion.h1>
        <p className="text-9xl overflow-hidden font-black font-mono tracking-[-0.04em] leading-none uppercase text-center">
          SASKA SOLUTIONS
        </p>
      </div>
    </div>
  );
};

export default Banner;
