import React from "react";
import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandGmail,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbPhone,
} from "react-icons/tb";

const Footer = () => {
  return (
    <div className="w-full bg-white border-t-2 border-foreground-dark">
      <div className="max-w-[1400px] mx-auto py-[60px] px-[30px] flex flex-row justify-between">
        <div className="flex flex-col gap-[10px]">
          <h4 className="text-4xl font-bold">Social Links</h4>
          <div className="flex flex-row gap-[20px] px-[20px] py-[10px] rounded-lg bg-gradient-to-t from-foreground-dark to-foreground w-fit text-white text-2xl">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <TbBrandLinkedin />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <TbBrandGithub />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <TbBrandInstagram />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <TbBrandFacebook />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] w-fit">
          <h4 className="text-4xl font-bold">Contact</h4>
          <div className="flex flex-col">
            <p className="flex flex-row gap-2 items-center">
              <TbBrandGmail size={20} />{" "}
              <span>Abdulhannan242001@outlook.com</span>
            </p>
            <p className="flex flex-row gap-2 items-center">
              <TbPhone size={20} /> <span>+92-319-3182299</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
