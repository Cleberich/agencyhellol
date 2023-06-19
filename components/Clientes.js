import { useState } from "react";
import Modal from "./Modal";

const Clientes = () => {
  const [modal, setmodal] = useState(false);
  const [hover, sethover] = useState(true);
  const [tooltip, settooltip] = useState(true);
  const efectoHover = () => {
    sethover(true);
    settooltip(true);
  };
  const efectoSalir = () => {
    sethover(false);
    settooltip(false);
  };
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3  bg-[#0E141B] bg-center pt-[450px] md:pt-0">
        <div className="flip-card ">
          <div className="flip-card-inner w-full">
            <div className="flip-card-front">
              <img src="clientes/xeptiva.webp" className="" />
            </div>
            <div className="flip-card-back bg-blue-600 pt-12">
              <h1>Website </h1>
              <div>
                <h2>Technology</h2>
                <div className="flex justify-center gap-3 mb-3">
                  <img src="img/next.svg" width={40} />
                  <img src="img/firebase.png" width={40} />
                  <img src="img/tail.png" width={40} />
                </div>
              </div>
              <a
                href="https://www.xeptiva.com/"
                target="_blank"
                className="py-2 px-4 w-full hover:bg-pink-700 rounded-md bg-pink-600"
              >
                Visit website
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card ">
          <div className="flip-card-inner w-full">
            <div className="flip-card-front">
              <img src="clientes/daniel.webp" className="" />
            </div>
            <div className="flip-card-back bg-purple-900 pt-12">
              <h1>eCommerce</h1>
              <div>
                <h2>Technology</h2>
                <div className="flex justify-center gap-3 mb-3">
                  <img src="img/next.svg" width={40} />
                  <img src="img/firebase.png" width={40} />
                  <img src="img/tail.png" width={40} />
                </div>
              </div>
              <a
                href="https://ecommerce-dc.vercel.app/"
                target="_blank"
                className="py-2 px-4 w-full hover:bg-pink-700 rounded-md bg-pink-600"
              >
                Visit website
              </a>
            </div>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
        <div className="flip-card ">
          <div className="flip-card-inner w-full">
            <div className="flip-card-front">
              <img src="clientes/ecommerce.webp" className="" />
            </div>
            <div className="flip-card-back bg-pink-600 pt-12">
              <h1>eCommerce</h1>
              <div>
                <h2>Technology</h2>
                <div className="flex justify-center gap-3 mb-3">
                  <img src="img/react.png" width={50} />
                  <img src="img/firebase.png" width={40} />
                  <img src="img/bootstrap.png" width={40} />
                </div>
              </div>
              <a
                href="https://ecommerce-technology.vercel.app/"
                target="_blank"
                className="py-2 px-4 w-full hover:bg-blue-700 rounded-md bg-blue-600"
              >
                Visit website
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card ">
          <div className="flip-card-inner w-full">
            <div className="flip-card-front">
              <img src="clientes/shop.webp" className="" />
            </div>
            <div className="flip-card-back bg-purple-600 pt-12">
              <h1>eCommerce</h1>
              <div>
                <h2>Technology</h2>
                <div className="flex justify-center gap-3 mb-3">
                  <img src="img/js.png" width={40} />
                  <img src="img/html5.png" width={40} />
                  <img src="img/bootstrap.png" width={40} />
                </div>
              </div>
              <a
                href="https://paitoshop.netlify.app/"
                target="_blank"
                className="py-2 px-4 w-full hover:bg-red-700 rounded-md bg-red-600"
              >
                Visit website
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card ">
          <div className="flip-card-inner w-full">
            <div className="flip-card-front">
              <img src="clientes/paito.webp" className="" />
            </div>
            <div className="flip-card-back bg-gray-500 pt-12">
              <h1>Landing page</h1>
              <div>
                <h2>Technology</h2>
                <div className="flex justify-center gap-3 mb-3">
                  <img src="img/react.png" width={40} />
                  <img src="img/styled.png" width={40} />
                </div>
              </div>
              <a
                href="https://www.paito.uy/"
                target="_blank"
                className="py-2 px-4 w-full hover:bg-yellow-700 rounded-md bg-yellow-600"
              >
                Visit website
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card ">
          <div className="flip-card-inner w-full">
            <div className="flip-card-front">
              <img src="clientes/mercadolibre.webp" className="" />
            </div>
            <div className="flip-card-back bg-yellow-500 pt-12">
              <h1>App</h1>
              <div>
                <h2>Technology</h2>
                <div className="flex justify-center gap-3 mb-3">
                  <img src="img/nextjs.png" width={40} />
                  <img src="img/firebase.png" width={40} />
                  <img src="img/tail.png" width={40} />
                </div>
              </div>
              <a
                href="https://mercadolibre-nu.vercel.app/"
                target="_blank"
                className="py-2 px-4 w-full hover:bg-blue-700 rounded-md bg-blue-600"
              >
                Visit website
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card ">
          <div className="flip-card-inner w-full">
            <div className="flip-card-front">
              <img src="clientes/innovar.webp" className="" />
            </div>
            <div className="flip-card-back bg-pink-500 pt-12">
              <h1>Realstate</h1>
              <div>
                <h2>Technology</h2>
                <div className="flex justify-center gap-3 mb-3">
                  <img src="img/nextjs.png" width={40} />
                  <img src="img/firebase.png" width={40} />
                  <img src="img/node.png" width={40} />
                  <img src="img/tail.png" width={40} />
                </div>
              </div>
              <a
                href="https://innovar.vercel.app/index2"
                target="_blank"
                className="py-2 px-4 w-full hover:bg-blue-700 rounded-md bg-blue-600"
              >
                Visit website
              </a>
            </div>
          </div>
        </div>
        <div className="flip-card ">
          <div className="flip-card-inner w-full">
            <div className="flip-card-front">
              <img src="clientes/actitud.webp" className="" />
            </div>
            <div className="flip-card-back bg-orange-500 pt-12">
              <h1>Landing</h1>
              <div>
                <h2>Technology</h2>
                <div className="flex justify-center gap-3 mb-3">
                  <img src="img/nextjs.png" width={40} />
                  <img src="img/firebase.png" width={40} />
                  <img src="img/node.png" width={40} />
                  <img src="img/tail.png" width={40} />
                </div>
              </div>
              <a
                href="https://www.actitudigital.com/"
                target="_blank"
                className="py-2 px-4 w-full hover:bg-blue-700 rounded-md bg-blue-600"
              >
                Visit website
              </a>
            </div>
          </div>
        </div>

        <div className="flip-card ">
          <div className="flip-card-inner w-full">
            <div className="flip-card-front">
              <img src="clientes/ciber.webp" className="" />
            </div>
            <div className="flip-card-back bg-red-500 pt-12">
              <h1>Landing</h1>
              <div>
                <h2>Technology</h2>
                <div className="flex justify-center gap-3 mb-3">
                  <img src="img/wp.png" width={40} />
                </div>
              </div>
              <a
                href="https://www.ciberoferta.com.uy"
                target="_blank"
                className="py-2 px-4 w-full hover:bg-black rounded-md bg-black"
              >
                Visit website
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src="clientes/ciber.webp" className="invisible" />
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
        {modal && <Modal modal={modal} setmodal={setmodal} />}
      </div>
    </>
  );
};

export default Clientes;
