import { useState } from "react";
import Modal from "./Modal";

const Clientes = () => {
  const [modal, setmodal] = useState(false);
  const [hover, sethover] = useState(false);
  const efectoHover = () => {
    sethover(true);
  };
  const efectoSalir = () => {
    sethover(false);
  };
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3  bg-[#0E141B] bg-center pt-[450px] md:pt-0">
        <div id="work" onMouseOver={efectoHover} onMouseOut={efectoSalir}>
          <img
            src="clientes/xeptiva.webp"
            className="hover:scale-[1.01] hover:transition-all ease-in"
          />
          {/* <div className=" grid align-middle place-items-center py-2 px-3 rounded-md bg-white relative -mt-[40%] mx-[30%]">
            <button>See more</button>
          </div> */}
        </div>
        <div>
          <img
            src="clientes/daniel.webp"
            className="hover:scale-[1.01] hover:transition-all ease-in"
          />
        </div>
        <div>
          <img
            src="clientes/ecommerce.webp"
            className="hover:scale-[1.01] hover:transition-all ease-in"
          />
        </div>
        <div>
          <img
            src="clientes/shop.webp"
            className="hover:scale-[1.01] hover:transition-all ease-in"
          />
        </div>
        <div>
          <img
            src="clientes/paito.webp"
            className="hover:scale-[1.01] hover:transition-all ease-in"
          />
        </div>
        <div>
          <img
            src="clientes/mercadolibre.webp"
            className="hover:scale-[1.01] hover:transition-all ease-in"
          />
        </div>
        <div>
          <img
            src="clientes/innovar.webp"
            className="hover:scale-[1.01] hover:transition-all ease-in"
          />
        </div>
        <div>
          <img
            src="clientes/actitud.webp"
            className="hover:scale-[1.01] hover:transition-all ease-in"
          />
        </div>
        <div>
          <img
            src="clientes/ciber.webp"
            className="hover:scale-[1.01] hover:transition-all ease-in"
          />
        </div>
        {/* <div>
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
      </div> */}
        <Modal setmodal={setmodal} />
      </div>
    </>
  );
};

export default Clientes;
