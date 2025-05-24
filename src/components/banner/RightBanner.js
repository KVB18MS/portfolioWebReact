import React from "react";
import {completePHoto, completePHoto2  } from "../../assets/index";

function RightBanner() {
  return (
    <div className="w-1/3 pt-10 ml-10 flex justify-center items-center relative">
      <img src={completePHoto2} alt="bannerImg2" />
      {/* <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>     */}
    </div>
  );
}

export default RightBanner;
