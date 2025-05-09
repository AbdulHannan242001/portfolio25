"use client";

import { useScroll } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col gap-[100px]">
      <h2 className="text-6xl font-bold font-mono text-center uppercase">
        Experience
      </h2>
      <div
        ref={containerRef}
        className="h-[300dvh] relative flex flex-col gap-[100px]"
      >
        <div className="rounded-lg py-[60px] px-[30px] shadow-lg sticky top-14 w-full h-[80dvh] bg-white">
          <div className="flex flex-row justify-between items-end">
            <h3 className="text-6xl font-mono tracking-tighter">
              FRONT END DEV
            </h3>
            <span className="text-lg text-primary">Web Development</span>
          </div>
          <p className="font-bold">2021 - Present</p>
          <h2 className="text-4xl font-bold font-mono py-[15px] text-gray-500">
            Saska Solutions
          </h2>
          <p className="text-lg max-w-xl">
            Serving as the frontend developer for SASKA Solutions. Creating
            interactive, 3D & responsive websites. Focusing on Next.js, React.js
            & Three.js.{" "}
          </p>
          <div className="ml-auto w-4/12 mt-[60px] relative">
            <Image
              src=""
              alt="Saska Logo"
              fill
              className="object-contain min-h-[200px] border"
            />
          </div>
        </div>
        <div className="rounded-lg py-[60px] px-[30px] shadow-lg sticky top-24 w-full h-[90dvh] bg-foreground text-white">
          <div className="flex flex-row justify-between items-end">
            <h3 className="text-6xl font-mono tracking-tighter">
              BMS Operator
            </h3>
            <span className="text-lg text-primary">Building Management</span>
          </div>
          <p className="font-bold">2021 - 2021</p>
          <h2 className="text-4xl font-bold font-mono py-[15px] text-gray-500">
            JES Engineering
          </h2>
          <p className="text-lg max-w-xl">
            Served as the BMS Operator for the IBA main campus building working
            with JES. Keeping in check fire, security, electrical issues,
            machine room, maintenance & repair.{" "}
          </p>
          <div className="ml-auto w-4/12 mt-[60px] relative">
            <Image
              src=""
              alt="JES Logo"
              fill
              className="object-contain min-h-[200px]"
            />
          </div>
        </div>
        <div className="rounded-lg py-[60px] px-[30px] shadow-lg sticky top-34 w-full h-[90dvh] bg-white">
          <div className="flex flex-row justify-between items-end">
            <h3 className="text-6xl font-mono tracking-tighter">
              Field Supervisor
            </h3>
            <span className="text-lg text-primary">
              Electrical Installation
            </span>
          </div>
          <p className="font-bold">2020 - 2021</p>
          <h2 className="text-4xl font-bold font-mono py-[15px] text-gray-500">
            AK Engineering
          </h2>
          <p className="text-lg max-w-xl">
            Served as the field supervisor for AK Engineering a company that
            worked on the EMP basis in Karachi. Working with brands like GFS
            Builders, Oasis and many more.{" "}
          </p>
          <div className="ml-auto w-4/12 mt-[60px] relative">
            <Image
              src=""
              alt="AK-Engineering Logo"
              fill
              className="object-contain min-h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
