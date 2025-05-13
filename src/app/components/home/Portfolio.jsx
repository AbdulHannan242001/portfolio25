import React from "react";
import { PortfolioLinks } from "./PortfolioLinks";

const Portfolio = () => {
  const clientProjects = [
    {
      heading: "List Link App",
      subheading: "React based application for creating lists & sharing them.",
      imgSrc: "",
      href: "/project/1",
    },
    {
      heading: "Bethmar Website",
      subheading:
        "A modern and responsive website for a construction company based in London.",
      imgSrc: "",
      href: "/project/2",
    },
    {
      heading: "SQCommercial Website",
      subheading:
        "A modern and responsive website for a construction consultancy firm based in London.",
      imgSrc: "",
      href: "/project/3",
    },
    {
      heading: "Fusion Fillings Website",
      subheading:
        "Website for branding and ordering food products from Fusion Fillings. A Home Based Business.",
      imgSrc: "",
      href: "/project/4",
    },
    {
      heading: "TS Admin Dashboard",
      subheading:
        "A Web app for human resources management and data visualization.",
      imgSrc: "",
      href: "/project/5",
    },
  ];

  const practiceProjects = [
    {
      heading: "3D Portfolio - Three.js",
      subheading: "My old personal portfolio in Three.js.",
      imgSrc: "",
      href: "/project/6",
    },
    {
      heading: "Pet Store Website - Next.js",
      subheading:
        "A Next.js website for a pet store branding and walk-in services.",
      imgSrc: "",
      href: "/project/7",
    },
    {
      heading: "Roof Right Website - Next.js",
      subheading:
        "A Next.js website designed and developed as a sales funnel for roofing services.",
      imgSrc: "",
      href: "/project/8",
    },
    {
      heading: "Pixel Art Javascript Game",
      subheading:
        "A pixel art game made with vanilla javascript where you can color your own pixel art.",
      imgSrc: "",
      href: "/project/9",
    },
    {
      heading: "URL Blocker Script - Python",
      subheading: "A small script to block certain URLs in your browser.",
      imgSrc: "",
      href: "/project/10",
    },
    {
      heading: "UI Redesign for Web - Figma",
      subheading: "Figma web revamp design for our company website.",
      imgSrc: "",
      href: "/project/11",
    },
  ];

  const githubProjects = [
    {
      heading: "Purchase Order Generator - MERN",
      subheading: "A custom ERP system built with MERN stack .",
      imgSrc: "",
      href: "/project/12",
    },
    {
      heading: "Customizabel E-Commerce Website - React",
      subheading:
        "A customizable E-Commerce website with built-in CMS & Admin panel.",
      imgSrc: "",
      href: "/project/13",
    },
    {
      heading: "Task Tracking Application - MERN",
      subheading: "A Custom CMS for tracking tasks and project management.",
      imgSrc: "",
      href: "/project/14",
    },
    {
      heading: "Stock Inventory Application - MERN",
      subheading: "A Custom CMS for tracking stock inventory.",
      imgSrc: "",
      href: "/project/15",
    },
  ];

  const curiousProjects = [
    {
      heading: "Ping Pong - Pygame",
      subheading: "A good old ping pong game made with Pygame.",
      imgSrc: "",
      href: "/project/16",
    },
    {
      heading: "2D Platformer - Godot Game Engine",
      subheading:
        "A 2D platformer game i am still working on with the Godot Game Engine.",
      imgSrc: "",
      href: "/project/17",
    },
    {
      heading: "Components Library",
      subheading: "A library of micro interactions and scroll components.",
      imgSrc: "",
      href: "/project/18",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col gap-[100px]">
      <h2 className="text-6xl font-bold font-mono text-center uppercase">
        Portfolio
      </h2>

      <div className="flex flex-col gap-[30px] rounded-lg py-[60px] px-[30px] shadow-lg bg-white ">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <h3 className="text-6xl font-mono tracking-tighter uppercase">For Clients</h3>
            <span className="text-lg text-primary">
              Real work for real people.
            </span>
          </div>
          <p className="mt-auto max-w-md font-medium">
            Projects delivered for clients — practical, professional, and out in
            the wild.
          </p>
        </div>
        <PortfolioLinks linkData={clientProjects} btnTxt={"View Details"} />
      </div>

      <div className="flex flex-col gap-[30px] rounded-lg py-[60px] px-[30px] shadow-lg bg-foreground">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <h3 className="text-6xl font-mono tracking-tighter uppercase text-white">Practice</h3>
            <span className="text-lg text-primary">Sharpening the tools.</span>
          </div>
          <p className="mt-auto max-w-md font-medium text-white">
            Small builds to get comfy with new skills and workflows.
          </p>
        </div>
        <PortfolioLinks linkData={practiceProjects} btnTxt={"View Details"} />
      </div>

      <div className="flex flex-col gap-[30px] rounded-lg py-[60px] px-[30px] shadow-lg bg-white ">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <h3 className="text-6xl font-mono tracking-tighter uppercase">GitHub Graveyard</h3>
            <span className="text-lg text-primary">
              Learned a ton, shipped none.
            </span>
          </div>
          <p className="mt-auto max-w-md font-medium">
            Experiments and half-built ideas that taught me more than their
            final form ever could.
          </p>
        </div>
        <PortfolioLinks linkData={githubProjects} btnTxt={"View Details"} />
      </div>

      <div className="flex flex-col gap-[30px] rounded-lg py-[60px] px-[30px] shadow-lg bg-foreground">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <h3 className="text-6xl font-mono tracking-tighter uppercase text-white">
              Curiosity Satisfaction
            </h3>
            <span className="text-lg text-primary">
              Built just because I could.
            </span>
          </div>
          <p className="mt-auto max-w-md font-medium text-white">
            Fun, random builds sparked by curiosity — no deadline, just
            exploration.
          </p>
        </div>
        <PortfolioLinks linkData={curiousProjects} btnTxt={"View Details"} />
      </div>
    </div>
  );
};

export default Portfolio;
