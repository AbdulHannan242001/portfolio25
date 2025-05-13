"use client";

import Banner from "@/app/components/project/Banner";
import React, { useRef } from "react";
import projects from "@/app/data";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import CustomLink from "@/app/components/global/CustomLink";
import CTA from "@/app/components/global/CTA";

const Page = ({ params }) => {
  const resolvedParams = React.use(params);
  const { sno } = resolvedParams;
  const project = projects.find((project) => project.id === parseInt(sno));

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [150, 0]), // Move 100px down
    { stiffness: 100, damping: 30 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-150, 0]), // Same for pic2
    { stiffness: 100, damping: 30 }
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="space-y-32" ref={containerRef}>
      <Banner url={project.banner} />
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-row justify-between items-end">
            <h3 className="text-6xl font-mono tracking-tighter uppercase">
              {project.title}
            </h3>
            {project.link && <CustomLink href={project.link} text="Visit Site" />}
          </div>
          <div className="flex flex-row w-full relative">
            <p className="max-w-xl leading-tight tracking-wide">
              {project.desc}
            </p>
            <motion.div
              className="absolute -bottom-[100%] right-0 border min-h-[200px] min-w-[400px] will-change-transform"
              style={{ y: y1 }}
            >
              {project.pic1 ? (
                <Image
                  src={project.pic1}
                  alt={`${project.title} image 1`}
                  width={400}
                  height={200}
                  className="object-cover"
                />
              ) : (
                <div className="bg-gray-200 flex items-center justify-center min-h-[200px] min-w-[400px]">
                  No Image
                </div>
              )}
            </motion.div>
          </div>
          <div className="w-full flex flex-col gap-[10px] mt-[120px]">
            <h4 className="text-4xl font-bold">Skills</h4>
            <div className="w-4/12 flex flex-row gap-[10px] flex-wrap">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm text-white px-4 py-2 rounded-md bg-gradient-to-t from-foreground-dark to-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {project.problem && (
            <>
              <div className="flex flex-row w-full relative mt-[120px]">
                <motion.div
                  className="absolute -bottom-[50%] left-0 border min-h-[200px] min-w-[400px] will-change-transform"
                  style={{ y: y2 }}
                >
                  {project.pic2 ? (
                    <Image
                      src={project.pic2}
                      alt={`${project.title} image 2`}
                      width={400}
                      height={200}
                      className="object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 flex items-center justify-center min-h-[200px] min-w-[400px]">
                      No Image
                    </div>
                  )}
                </motion.div>
                <div className="flex flex-col gap-[10px] ml-auto w-fit">
                  <h4 className="text-4xl font-bold">Problem</h4>
                  <p className="max-w-xl leading-tight tracking-wide">
                    {project.problem}
                  </p>
                </div>
              </div>
            </>
          )}
          {project.solution && (
            <div className="flex flex-row w-full relative mt-[120px]">
              <div className="flex flex-col gap-[10px] w-fit">
                <h4 className="text-4xl font-bold">Solution</h4>
                <p className="max-w-xl leading-tight tracking-wide">
                  {project.solution}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default Page;
