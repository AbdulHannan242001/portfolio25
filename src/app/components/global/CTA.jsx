"use client";

import React from "react";
import CustomButton from "./CustomButton";

const CTA = () => {
  return (
    <div className="w-full bg-white py-[60px]">
      <div className="max-w-[1400px] mx-auto rounded-lg bg-background overflow-hidden flex flex-row justify-between items-center">
        <div className="w-8/12 py-[60px] px-[30px] flex flex-col gap-[30px] bg-gradient-to-t from-foreground-dark to-foreground shadow-inner shadow-white">
          <h2 className="text-8xl font-bold font-mono text-white leading-[90%]">
            Still Not <span className="text-primary">Convinced</span> ?
          </h2>
          <p className="text-lg text-neutral-200">
            Help me at getting better. <br />
            Share your feedback or contact for collaboration.
          </p>
        </div>
        <div className="w-4/12 py-[60px] px-[30px] flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default CTA;
