import React from "react";

const Mobile = ({ setactivado, setborde, borde }) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 flex justify-center  md:hidden">
      <ul className="flex justify-center -mb-px">
        <li className="me-2">
          <button
            onClick={() => {
              setactivado("sobremi"), setborde("activo");
            }}
            className={
              borde == "activo"
                ? "inline-block p-4 border-b-2 border-red-600 rounded-t-lg hover:text-gray-600 hover:border-red-300 text-[20px] text-black font-extrabold"
                : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-red-300 text-[20px] font-extrabold"
            }
          >
            Sobre mi
          </button>
        </li>
        <li className="me-2">
          <button
            onClick={() => {
              setactivado("servicios"), setborde("activo2");
            }}
            className={
              borde == "activo2"
                ? "inline-block p-4 border-b-2 border-red-600 rounded-t-lg hover:text-gray-600 hover:border-red-300 text-[20px] text-black font-extrabold"
                : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-red-300 text-[20px] font-extrabold"
            }
            aria-current="page"
          >
            Servicios
          </button>
        </li>
        <li className="me-2">
          <button
            onClick={() => {
              setactivado("inversion"), setborde("activo3");
            }}
            className={
              borde == "activo3"
                ? "inline-block p-4 border-b-2 border-red-600 rounded-t-lg hover:text-gray-600 hover:border-red-300 text-[20px] text-black font-extrabold"
                : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-red-300 text-[20px] font-extrabold"
            }
          >
            Inversión
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Mobile;
