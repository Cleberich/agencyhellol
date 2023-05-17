import React from "react";

const Clientes = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3  bg-[#0E141B] bg-center pt-[450px] md:pt-0">
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
          Show me <br></br> more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </h2>
      </div>
    </div>
  );
};

export default Clientes;
