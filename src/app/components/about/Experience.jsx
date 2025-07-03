"use client";

import { useScroll } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { NotFound, SaskaSolutions } from "../../images";

const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col gap-[100px]">
      <h2 className="text-4xl sm:text-6xl font-bold font-mono text-center uppercase">
        Experience
      </h2>
      <div
        ref={containerRef}
        className="h-[300dvh] relative flex flex-col gap-[100px] m-2"
      >
        <div className="rounded-lg py-[20px] sm:py-[60px] px-[10px] sm:px-[30px] shadow-lg sticky top-14 w-full h-[80dvh] bg-white overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <h3 className="text-4xl sm:text-6xl font-mono tracking-tighter">
              FRONT END DEV
            </h3>
            <span className="text-sm md:text-lg text-primary border border-primary rounded-full px-4 py-1">Web Development</span>
          </div>
          <p className="font-bold mt-2 md:text-base text-xs">2021 - Present</p>
          <h2 className="text-4xl font-light font-mono py-[15px] text-gray-700">
            Saska Solutions
          </h2>
          <p className="text-lg max-w-xl">
            Serving as the frontend developer for SASKA Solutions. Creating
            interactive, 3D & responsive websites. Focusing on Next.js, React.js
            & Three.js.{" "}
          </p>
          <div className="ml-auto w-full sm:w-4/12 mt-[20px] sm:mt-[60px] relative">
            <Image
              src={SaskaSolutions}
              alt="Saska Logo"
              fill
              className="rounded-lg object-center object-contain p-2 w-full shadow bg-foreground min-h-[180px]"
            />
          </div>
        </div>
        <div className="rounded-lg py-[20px] sm:py-[60px] px-[10px] sm:px-[30px] shadow-lg sticky top-24 w-full h-[90dvh] bg-foreground text-white overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <h3 className="text-4xl sm:text-6xl font-mono tracking-tighter">
              BMS Operator
            </h3>
            <span className="text-sm md:text-lg text-primary border border-primary rounded-full px-4 py-1">Building Management</span>
          </div>
          <p className="font-bold mt-2 md:text-base text-xs">2021 - 2021</p>
          <h2 className="text-4xl font-light font-mono py-[15px] text-gray-300">
            JES Engineering
          </h2>
          <p className="text-lg max-w-xl">
            Served as the BMS Operator for the IBA main campus building working
            with JES. Keeping in check fire, security, electrical issues,
            machine room, maintenance & repair.{" "}
          </p>
          <div className="ml-auto w-full sm:w-4/12 mt-[20px] sm:mt-[60px] relative">
            <Image
              src={NotFound}
              alt="JES Logo"
              fill
              className="rounded-lg object-center object-cover w-full shadow min-h-[200px]"
            />
          </div>
        </div>
        <div className="rounded-lg py-[20px] sm:py-[60px] px-[10px] sm:px-[30px] shadow-lg sticky top-34 w-full h-[90dvh] bg-white overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <h3 className="text-4xl sm:text-6xl font-mono tracking-tighter">
              Field Supervisor
            </h3>
            <span className="text-sm md:text-lg text-primary border border-primary rounded-full px-4 py-1">
              Electrical Installation
            </span>
          </div>
          <p className="font-bold mt-2 md:text-base text-xs">2020 - 2021</p>
          <h2 className="text-4xl font-light font-mono py-[15px] text-gray-700">
            AK Engineering
          </h2>
          <p className="text-lg max-w-xl">
            Served as the field supervisor for AK Engineering a company that
            worked on the EMP basis in Karachi. Working with brands like GFS
            Builders, Oasis and many more.{" "}
          </p>
          <div className="ml-auto w-full sm:w-4/12 mt-[20px] sm:mt-[60px] relative">
            <Image
              src={NotFound}
              alt="AK-Engineering Logo"
              fill
              className="rounded-lg object-center object-cover w-full shadow min-h-[200px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
