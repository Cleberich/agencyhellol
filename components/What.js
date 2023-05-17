import React from "react";

const What = ({ animacion3 }) => {
  return (
    <div
      className="bg-[#101010] h-screen px-8 md:px-[120px] 2xl:px-[177px] py-[118px] z-40"
      id="services"
    >
      <h2 className="text-[9px] 2xl:text-[12px] font-bold uppercase  text-[#fa3636]">
        Skill
      </h2>
      <div className="flex justify-between about">
        <div className={animacion3 ? "fade-in-bottom" : "opacity-0"}>
          <h2 className="text-white font-bold text-[42.5px] 2xl:text-[63.4px] mt-[26px]">
            Desing
          </h2>
          <ul className="mt-[29px]">
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              <img src="/img/html5.png" alt="html" className="w-8 h-8" /> HTML
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              {" "}
              <img
                src="/img/css.png"
                alt="css"
                className="w-8 h-8 -mt-1 mb-1"
              />{" "}
              CSS
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px flex gap-2">
              <img src="/img/js.png" alt="javascript" className="w-8 h-8" />{" "}
              Javascript
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              <img src="/img/react.png" alt="react" className="w-8 h-8" /> React
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              <img src="/img/nextjs.png" alt="next js" className="w-8 h-8" />{" "}
              Next js
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              <img src="/img/wp.png" alt="wordpress" className="w-8 h-8" />{" "}
              Wordpress
            </li>
          </ul>
        </div>
        <div className={animacion3 ? "fade-in-bottom" : "opacity-0"}>
          <h2 className="text-white font-bold text-[42.5px] 2xl:text-[63.4px] mt-[26px]">
            Databases
          </h2>
          <ul className="mt-[29px]">
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              <img
                src="/img/firebase.png"
                alt="wordpress"
                className="w-8 h-8"
              />{" "}
              Firebase
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              <img src="/img/mongo.png" alt="mongo" className="w-8 h-8" /> Mongo
              DB
            </li>
          </ul>
        </div>
        <div className={animacion3 ? "fade-in-bottom" : "opacity-0"}>
          <h2 className="text-white font-bold text-[42.5px] 2xl:text-[63.4px] mt-[26px]">
            Styles
          </h2>
          <ul className="mt-[29px]">
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              <img
                src="/img/bootstrap.png"
                alt="bootstrap"
                className="w-8 h-8"
              />{" "}
              Bootstrap 5
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              <img src="/img/tail.png" alt="tailwind" className="w-8 h-8" />{" "}
              Tailwind
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              <img
                src="/img/styled.png"
                alt="style component"
                className="w-8 h-8"
              />{" "}
              Styled Components
            </li>
          </ul>
        </div>
        <div className={animacion3 ? "fade-in-bottom" : "opacity-0"}>
          <h2 className="text-white font-bold text-[42.5px] 2xl:text-[63.4px] mt-[26px]">
            Others
          </h2>
          <ul className="mt-[29px]">
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              <img src="/img/git.png" alt="github" className="w-8 h-8" /> GitHub
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              <img src="/img/vercel.png" alt="vercel" className="w-8 h-8" />{" "}
              Vercel
            </li>
            <li className="text-[#999999] text-[21px] font-light mt-[12px] flex gap-2">
              <img src="/img/node.png" alt="node" className="w-8 h-8" /> Node js
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default What;
