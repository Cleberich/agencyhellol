import React from "react";

const Clientes = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3  bg-[#101010] pt-[400px] md:pt-0">
      <div>
        <img src="clientes/1.gif" />
      </div>
      <div>
        <img src="clientes/2.webp" />
      </div>
      <div>
        <img src="clientes/3.webp" />
      </div>
      <div>
        <img src="clientes/4.webp" />
      </div>
      <div>
        <img src="clientes/5.webp" />
      </div>
      <div>
        <img src="clientes/6.webp" />
      </div>
      <div>
        <img src="clientes/7.webp" />
      </div>
      <div>
        <img src="clientes/8.webp" />
      </div>
      <div>
        <img src="clientes/9.webp" />
      </div>
      <div>
        <img src="clientes/10.gif" />
      </div>
      <div>
        <img src="clientes/11.webp" />
      </div>
      <div className="bg-[#fe3e3e]">
        <h2 className="text-[28.5px] font-bold flex gap-5 pl-12 pt-12">
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
