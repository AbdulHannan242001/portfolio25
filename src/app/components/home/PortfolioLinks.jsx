"use client";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import CustomButton from "../global/CustomButton";
import Image from "next/image";

export const PortfolioLinks = ({ linkData, btnTxt }) => {
  return (
    <section className="">
      <div className="mx-auto max-w-[1400px]">
        {linkData.map((link) => (
          <Link
            heading={link.heading}
            subheading={link.subheading}
            imgSrc={link.imgSrc}
            href={link.href}
            btnTxt={btnTxt}
            key={link.href}
          />
        ))}
      </div>
    </section>
  );
};

const Link = ({ heading, subheading, imgSrc, href, btnTxt }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["40%", "60%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex flex-col sm:flex-row items-center justify-between border-b-2 border-gray-500 py-2 sm:py-4 transition-colors duration-500 md:py-2"
      aria-label={`View details for ${heading} project`}
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative font-semibold z-10 block text-xl text-gray-800 transition-colors duration-500 group-hover:text-primary md:text-4xl"
        >
          {heading.split("").map((char, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
        <motion.span
          className="hidden sm:block text-lg text-gray-500 group-hover:text-primary"
          variants={{
            initial: { opacity: 0, y: 10 },
            whileHover: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          {subheading}
        </motion.span>
        <span className="text-sm sm:hidden block leading-[1.2] text-gray-700">
          {subheading}
        </span>
      </div>

      <motion.div
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        className="z-10 absolute"
      >
        <Image
          src={imgSrc || "/assets/placeholder.png"}
          alt={`Preview image for ${heading} project`}
          width={256}
          height={192}
          className="rounded-lg object-cover"
        />
      </motion.div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4 sm:block hidden"
      >
        <CustomButton text={btnTxt} />
      </motion.div>
      <div className="sm:hidden block mr-auto mt-2">
        <CustomButton text={btnTxt} />
      </div>
    </motion.a>
  );
};
