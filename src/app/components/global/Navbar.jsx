import React from "react";
import CustomLink from "./CustomLink";

const Navbar = () => {
  return (
    <main className="flex flex-row gap-[30px] py-[10px] px-[10px] items-center justify-between w-full max-w-[1000px] mx-auto bg-white rounded-lg shadow-lg">
      <div className="w-[50px] h-[50px] bg-primary text-white rounded-md flex items-center justify-center">
        <p className="font-mono text-lg font-bold">AH</p>
      </div>
      <div className="flex flex-row items-center w-fit">
        <CustomLink text="Home" href="/" />
        <CustomLink text="About" href="/about" />
        <CustomLink text="Contact" href="/" />
      </div>
    </main>
  );
};

export default Navbar;
