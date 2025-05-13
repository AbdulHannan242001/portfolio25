"use client";

import React from "react";
import CustomLink from "./CustomLink";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <main className="flex flex-row gap-[30px] py-[10px] px-[10px] items-center justify-between w-full max-w-[1000px] mx-auto bg-white rounded-lg shadow-lg">
      <div className="w-[50px] h-[50px] bg-primary text-white rounded-md flex items-center justify-center">
        <p className="font-mono text-lg font-bold">AH</p>
      </div>
      <div className="flex flex-row items-center w-fit">
        <CustomLink text="Home" targetBlank={false} href="/" />
        <CustomLink text="About" targetBlank={false} href="/about" />
        <CustomButton
          text="Contact"
          onClick={() => {
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=abdulhannan242001@outlook.com",
              "_blank"
            );
          }}
        />
      </div>
    </main>
  );
};

export default Navbar;
