import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#FB3D3D] h-screen w-full fixed bottom-0 z-[-1]">
      <h2 className="text-[42px] md:text-[97.7px] text-[#101010] text-center pt-[200px] md:pt-[0px] mt-[25%] font-bold leading-[77px] tracking-[-1px]">
        hi@hellohello.is
      </h2>
      <p className="text-center mt-8 text-xl">
        Let's make something with <span className="text-white">love</span>,
        that's not a 👶🏻
      </p>
    </div>
  );
};

export default Footer;
