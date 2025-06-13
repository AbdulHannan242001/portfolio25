"use client";

import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import {
  TbBrandCss3,
  TbBrandFigma,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandThreejs,
} from "react-icons/tb";
import { SiGodotengine } from "react-icons/si";
import { PiMicrosoftExcelLogo } from "react-icons/pi";

const TechStack = () => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const divSize = 120;

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const mouseY = Math.max(0, Math.min(event.clientY - rect.top, rect.height));

    x.set(mouseX - divSize / 2);
    y.set(mouseY - divSize / 2);
  };

  const stackData = [
    {
      title: "React",
      icon: <TbBrandReact />,
    },
    {
      title: "Next",
      icon: <TbBrandNextjs />,
    },
    {
      title: "Tailwind",
      icon: <TbBrandTailwind />,
    },
    {
      title: "Three Js",
      icon: <TbBrandThreejs />,
    },
    {
      title: "Vercel",
      icon: <TbBrandFigma />,
    },
    {
      title: "Python",
      icon: <TbBrandPython />,
    },
    {
      title: "Godot",
      icon: <SiGodotengine />,
    },
    {
      title: "Figma",
      icon: <TbBrandFigma />,
    },
    {
      title: "HTML",
      icon: <TbBrandHtml5 />,
    },
    {
      title: "CSS",
      icon: <TbBrandCss3 />,
    },
    {
      title: "Javascript",
      icon: <TbBrandJavascript />,
    },
    {
      title: "Excel",
      icon: <PiMicrosoftExcelLogo />,
    },
  ];

  return (
    <main className="w-full bg-gradient-to-tr from-foreground-dark to-foreground min-h-[50dvh] py-[60px]">
      <h2 className="text-6xl font-bold font-mono text-center uppercase text-white pb-[100px]">
        Tech Stack
      </h2>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className=" relative z-10 h-fit"
      >
        <div className="max-w-[1400px] p-[10px] mx-auto flex flex-1 items-center justify-center flex-wrap gap-[10px] relative h-full w-full min-h-[50dvh] overflow-hidden rounded-md shadow-2xl shadow-foreground">
          <motion.div
            className="absolute size-[120px] bg-gradient-to-tr from-neutral-50 to-neutral-100 rounded-full blur-3xl z-10 pointer-events-none"
            style={{ x, y, translateX: "-50%", translateY: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <motion.div
            className="absolute size-[120px] bg-gradient-to-tr from-primary to-sky-500 rounded-full blur-3xl z-10 pointer-events-none"
            style={{ x, y, translateX: "-50%", translateY: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          {stackData.map((item, index) => (
            <div
              key={index}
              className="max-w-[125px] sm:max-w-[200px] w-full px-[30px] flex flex-col justify-center items-center gap-[10px] hover:bg-white/20 border-3 border-white/10 rounded-lg p-[10px] z-30 bg-foreground text-white"
            >
              <div className="text-5xl sm:text-9xl">{item.icon}</div>
              <h2 className="text-sm sm:text-lg">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TechStack;
