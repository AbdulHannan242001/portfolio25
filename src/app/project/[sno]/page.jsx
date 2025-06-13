"use client";

import React, { useRef } from "react";
import projects from "../../data";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Banner from "../../components/project/Banner";
import CTA from "../../components/global/CTA";
import CustomLink from "../../components/global/CustomLink";

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
    useTransform(scrollYProgress, [0, 1], [200, 100]), // Move 100px down
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
    <div className="pt-24" ref={containerRef}>
      <Banner url={project.banner || "/assets/placeholder.png"} />
      <div className="max-w-[1400px] mx-auto pt-[50px] sm:pt-[100px]">
        <div className="flex flex-col gap-[10px] sm:m-0 m-2">
          <div className="flex flex-row justify-between items-end">
            <h3 className="text-4xl sm:text-6xl font-mono tracking-tighter uppercase">
              {project.title}
            </h3>
            {project.link && (
              <CustomLink href={project.link} text="Visit Site" />
            )}
          </div>
          <div className="flex flex-row w-full relative">
            <p className="max-w-xl leading-tight text-sm sm:text-base tracking-wide">
              {project.desc}
            </p>
            <motion.div
              className="absolute bottom-[15%] sm:-bottom-[100%] right-0 min-h-[100px] sm:min-h-[200px] min-w-[200px] sm:min-w-[400px] will-change-transform"
              style={{ y: y1 }}
            >
              <Image
                src={project.pic1 || "/assets/placeholder.png"}
                alt={`${project.title} image 1`}
                width={400}
                height={200}
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="w-full flex flex-col gap-[10px] my-[160px] sm:my-[120px]">
            <h4 className="text-4xl font-bold">Skills</h4>
            <div className="w-full sm:w-4/12 flex flex-row gap-[10px] flex-wrap">
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
              <div className="flex flex-row w-full relative mt-[160px] sm:mt-[120px]">
                <motion.div
                  className="absolute top-[-25%] sm:-bottom-[50%] left-0 min-h-[100px] sm:min-h-[200px] min-w-[200px] sm:min-w-[400px] will-change-transform"
                  style={{ y: y2 }}
                >
                  <Image
                    src={project.pic2 || "/assets/placeholder.png"}
                    alt={`${project.title} image 2`}
                    width={400}
                    height={200}
                    className="object-cover"
                  />
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
            <div className="flex flex-row w-full relative my-[60px] sm:my-[120px]">
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
