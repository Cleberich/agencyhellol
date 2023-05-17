import React from "react";

const Clientes = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3  bg-[#101010] bg-center pt-[400px] md:pt-0">
      <div id="work">
        <img src="clientes/31.gif" />
      </div>
      <div>
        <img src="clientes/22.gif" />
      </div>
      <div>
        <img src="clientes/25.gif" />
      </div>
      <div>
        <img src="clientes/24.gif" />
      </div>
      <div>
        <img src="clientes/23.gif" />
      </div>
      <div>
        <img src="clientes/26.gif" />
      </div>
      <div>
        <img src="clientes/27.gif" />
      </div>
      <div>
        <img src="clientes/28.gif" />
      </div>
      <div>
        <img src="clientes/29.gif" />
      </div>
      <div>
        <img src="clientes/30.gif" />
      </div>
      <div>
        <img src="clientes/31.gif" />
      </div>
      <div className="bg-[#fe3e3e]">
        <h2 className="text-[28.5px] font-bold flex gap-5 pl-4 md:pl-12 pt-4 md:pt-12">
          See More <br></br> Work{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.7}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </h2>
      </div>
    </div>
  );
};

export default Clientes;
