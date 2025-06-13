"use client";

import React from "react";
import CustomButton from "./CustomButton";

const CTA = () => {
  return (
    <div className="w-full bg-white py-[60px]">
      <div className="max-w-[1400px] mx-2 sm:mx-auto rounded-lg bg-background overflow-hidden flex flex-col sm:flex-row justify-between items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="w-full sm:w-8/12 py-[60px] px-[10px] sm:px-[30px] flex flex-col gap-[30px] bg-gradient-to-t from-foreground-dark to-foreground">
          <h2 className="text-4xl sm:text-8xl font-bold font-mono text-white leading-[90%]">
            Still Not <span className="text-primary">Convinced</span> ?
          </h2>
          <p className="text-sm sm:text-lg text-neutral-200">
            Help me at getting better. <br />
            Share your feedback or contact for collaboration.
          </p>
        </div>
        <div className="w-full sm:w-4/12 py-[60px] px-[10px] sm:px-[30px] flex items-center justify-center">
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
