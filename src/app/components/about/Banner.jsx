"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale4times = useTransform(scrollYProgress, [0, 0.8], [1, 4]);
  const scale6times = useTransform(scrollYProgress, [0, 0.8], [1, 6]);
  const scale8times = useTransform(scrollYProgress, [0, 0.8], [1, 8]);
  const scale7times = useTransform(scrollYProgress, [0, 0.8], [1, 7]);
  const scale9times = useTransform(scrollYProgress, [0, 0.8], [1, 9]);
  const scale10times = useTransform(scrollYProgress, [0, 0.8], [1, 5]);

  const pictureArray = [
    {
      src: "",
      credits: "Photo by Pixabay",
      topValue: "0%",
      leftValue: "0%",
      scaleValue: scale4times,
      widthPercentage: "25vw",
      heightPercentage: "25vh",
    },
    {
      src: "",
      credits: "Photo by Sebastian Palomino",
      topValue: "30%",
      leftValue: "-25%",
      scaleValue: scale9times,
      widthPercentage: "30vw",
      heightPercentage: "30vh",
    },
    {
      src: "",
      credits: "Photo by Pedro Figueras",
      topValue: "29%",
      leftValue: "4%",
      scaleValue: scale6times,
      widthPercentage: "25vw",
      heightPercentage: "28vh",
    },
    {
      src: "",
      credits: "Photo by Jaime Reimer",
      topValue: "-32%",
      leftValue: "30%",
      scaleValue: scale8times,
      widthPercentage: "25vw",
      heightPercentage: "35vh",
    },
    {
      src: "",
      credits: "Photo by Irina Iriser",
      topValue: "-30%",
      leftValue: "1.5%",
      scaleValue: scale6times,
      widthPercentage: "28.5vw",
      heightPercentage: "30vh",
    },
    {
      src: "",
      credits: "Photo by Ricky Esquivel",
      topValue: "13%",
      leftValue: "28%",
      scaleValue: scale10times,
      widthPercentage: "20vw",
      heightPercentage: "50vh",
    },
    {
      src: "",
      credits: "Photo by Pixabay",
      topValue: "-12%",
      leftValue: "-27%",
      scaleValue: scale7times,
      widthPercentage: "25vw",
      heightPercentage: "50vh",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center min-h-screen py-[10vh] space-y-[10vh] overflow-clip">
      <div ref={containerRef} className="h-[300vh] relative w-full">
        <div className="w-full h-[100vh] sticky top-0 overflow-clip">
          {pictureArray.map(
            (
              {
                src,
                credits,
                topValue,
                leftValue,
                scaleValue,
                heightPercentage,
                widthPercentage,
              },
              index
            ) => {
              return (
                <motion.div
                  key={index}
                  style={{
                    scale: scaleValue,
                  }}
                  className={`w-[100%] h-[100%] absolute flex items-center justify-center`}
                >
                  <div
                    className={`relative`}
                    style={{
                      width: widthPercentage,
                      height: heightPercentage,
                      top: topValue,
                      left: leftValue,
                    }}
                  >
                    <Image
                      src={src}
                      alt={credits}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
