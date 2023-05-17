import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#FB3D3D] h-screen w-full fixed bottom-0 z-[-1]">
      <h2
        id="contacto"
        className="text-[42px] md:text-[97.7px] 2xl:text-[145.9px] text-[#101010] text-center pt-[200px] md:pt-[0px] mt-[25%] font-bold leading-[77px] tracking-[-1px]"
      >
        Do you have a proposal for me?
      </h2>
      <p className="text-center text-white mt-8 2xl:mt-20 text-2xl 2xl:text-[33px]">
        Contact me <br></br>
        <span className="text-white"></span>
      </p>
    </div>
  );
};

export default Footer;
