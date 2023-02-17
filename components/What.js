import React from "react";

const What = ({ animacion3 }) => {
  return (
    <div
      className="bg-[#101010] h-screen px-8 md:px-[120px] 2xl:px-[177px] py-[118px] z-40"
      id="services"
    >
      <h2 className="text-[9px] 2xl:text-[12px] font-bold uppercase  text-[#fa3636]">
        what we do{" "}
      </h2>
      <div className="flex justify-between about">
        <div className={animacion3 ? "fade-in-bottom" : "opacity-0"}>
          <h2 className="text-white font-bold text-[42.5px] 2xl:text-[63.4px] mt-[26px]">
            Strategy
          </h2>
          <ul className="mt-[29px]">
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              UX Audits
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              Design Sprints
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              User Testing
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              Product Roadmapp
            </li>
          </ul>
        </div>
        <div className={animacion3 ? "fade-in-bottom" : "opacity-0"}>
          <h2 className="text-white font-bold text-[42.5px] 2xl:text-[63.4px] mt-[26px]">
            Design
          </h2>
          <ul className="mt-[29px]">
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              Product Design
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              Website Design
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              UX Design
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              UI Design
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              Brand Design
            </li>
          </ul>
        </div>
        <div className={animacion3 ? "fade-in-bottom" : "opacity-0"}>
          <h2 className="text-white font-bold text-[42.5px] 2xl:text-[63.4px] mt-[26px]">
            Development
          </h2>
          <ul className="mt-[29px]">
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              Front-end Development
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              Back-end Development
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              Mobile App Development
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              React
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px]">
              Headless CMS{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default What;
