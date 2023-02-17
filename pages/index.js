import { useState, useEffect } from "react";

import Head from "next/head";
import Portada from "../components/Portada";
import Nav from "../components/Nav";
import About from "../components/About";
import What from "../components/What";
import Clientes from "../components/Clientes";
import Working from "../components/Working";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  const [animacion1, setAnimacion1] = useState(false);
  const [animacion2, setAnimacion2] = useState(false);
  const [animacion3, setAnimacion3] = useState(false);
  const [menu, setMenu] = useState(false);
  const [ads, setAds] = useState(false);
  const [activar, setActivar] = useState(false);

  useEffect(() => {
    const showAnimation1 = () => {
      const forthepeople = document.getElementById("people");
      const { y } = forthepeople.getBoundingClientRect();
      console.log(y);
      if (y < 350) {
        setAnimacion1(true);
      } else setAnimacion1(false);
    };
    window.addEventListener("scroll", showAnimation1);
    const showAnimation2 = () => {
      const weare = document.getElementById("weare");
      const { y } = weare.getBoundingClientRect();
      console.log(y);
      if (y < 38) {
        setAnimacion2(true);
      } else setAnimacion2(false);
    };
    window.addEventListener("scroll", showAnimation2);
    const showAnimation3 = () => {
      const whatwedo = document.getElementById("whatwedo");
      const { y } = whatwedo.getBoundingClientRect();
      console.log(y);
      if (y < 0) {
        setAnimacion3(true);
      } else setAnimacion3(false);
    };
    window.addEventListener("scroll", showAnimation3);
  }, [animacion1, animacion2, animacion3]);

  const abrir = () => {
    setTimeout(() => {
      setMenu(true);
    }, 400);
  };
  const cerrar = () => {
    setActivar(true);
    setTimeout(() => {
      setMenu(false);
      setActivar(false);
    }, 800);
  };

  setTimeout(() => {
    setAds(true);
  }, 12000);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {menu && (
        <div className="bg-[#FE3E3E] fade-in h-screen grid text-center place-items-center z-[1000]">
          <div className="absolute top-7 right-11">
            <button onClick={() => cerrar()}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="cursor-pointer">
            <div
              onClick={() => {
                {
                  cerrar(), (location.href = "#work");
                }
              }}
            >
              <h2
                className={
                  activar == false
                    ? "text-[#050505]  border-b-4 border-[#FE3E3E] text-[42px] md:text-[72px] font-bold text-center hvr-sweep-to-right swing-in-bottom-fwdd"
                    : "text-[#050505]  border-b-4 border-[#FE3E3E] text-[42px] md:text-[72px] font-bold text-center swing-out-bottom-bck"
                }
              >
                Work
              </h2>
            </div>
            <div
              onClick={() => {
                {
                  cerrar(), (location.href = "#weare");
                }
              }}
            >
              <h2
                className={
                  activar == false
                    ? "text-[#050505]  border-b-4 border-[#FE3E3E] text-[42px] md:text-[72px] font-bold text-center hvr-sweep-to-right swing-in-bottom-fwdd"
                    : "text-[#050505]  border-b-4 border-[#FE3E3E] text-[42px] md:text-[72px] font-bold text-center swing-out-bottom-bck"
                }
              >
                About
              </h2>
            </div>

            <div
              onClick={() => {
                {
                  cerrar(), (location.href = "#services");
                }
              }}
            >
              <h2
                className={
                  activar == false
                    ? "text-[#050505]  border-b-4 border-[#FE3E3E]  text-[42px] md:text-[72px] font-bold text-center hvr-sweep-to-right swing-in-bottom-fwdd"
                    : "text-[#050505]  border-b-4 border-[#FE3E3E]  text-[42px] md:text-[72px] font-bold text-center swing-out-bottom-bck"
                }
              >
                What we do
              </h2>
            </div>
            <div>
              {" "}
              <h2
                className={
                  activar == false
                    ? "text-[#050505]  border-b-4 border-[#FE3E3E] text-[42px] md:text-[72px] font-bold text-center hvr-sweep-to-right swing-in-bottom-fwdd"
                    : "text-[#050505]  border-b-4 border-[#FE3E3E] text-[42px] md:text-[72px] font-bold text-center swing-out-bottom-bck"
                }
              >
                Careers
              </h2>
            </div>
            <div
              onClick={() => {
                {
                  cerrar(), (location.href = "#contacto");
                }
              }}
            >
              <h2
                className={
                  activar == false
                    ? "text-[#050505]  border-b-4 border-[#FE3E3E] text-[42px] md:text-[72px] font-bold text-center hvr-sweep-to-right swing-in-bottom-fwdd"
                    : "text-[#050505]  border-b-4 border-[#FE3E3E] text-[42px] md:text-[72px] font-bold text-center swing-out-bottom-bck"
                }
              >
                Contact
              </h2>
            </div>
          </nav>
          <div className="absolute bottom-20 ml-[40%] md:ml-[0]">
            <nav className="inline-block  text-[#050505]  ">
              <a href="#" className="mx-1 text-[14px] font-bold">
                IG
              </a>
              <a href="#" className="mx-1 text-[14px] font-bold">
                IN
              </a>
              <a href="#" className="mx-1 text-[14px] font-bold">
                TW
              </a>
            </nav>
          </div>
        </div>
      )}
      <>
        <body>
          <Nav abrir={abrir} menu={menu} />
          <Portada menu={menu} />
          <div className="bg-[#101010] flex pl-[120px] xl:pl-[177px] gap-5 -mt-[100px] lg:-mt-[60px] show">
            <div className="bg-[#fa3636] relative w-[2px] h-[60px]"></div>
            <h2
              className="text-[9px] xl:text-[12px] uppercase font-[600] text-[#fff] "
              id="people"
            >
              Show me more
            </h2>
          </div>
          <About animacion1={animacion1} animacion2={animacion2} />
          <What animacion3={animacion3} />
          <Clientes />
          <Working />
        </body>
        <footer>
          <Footer />
        </footer>
        {ads ? (
          <div className="bg-[#000] fixed bottom-0 h-12 w-full rounded-t-xl  flex">
            <h2 className="text-white font-semibold mx-6 text-[12px] my-auto">
              👋 Thanks for visit my Design{" "}
              <a href="tel:091411527" className="text-center text-[#FB3D3D]">
                Click here for contact me
              </a>
            </h2>
          </div>
        ) : (
          <div className="bg-transparent transition-colors fixed bottom-0 h-12 w-full rounded-t-xl  flex">
            <h2 className="text-transparent font-semibold mx-6 text-[12px] my-auto">
              👋 Thanks for visit my Design{" "}
              <a href="tel:091411527" className="text-center text-transparent">
                Click here for contact me
              </a>
            </h2>
          </div>
        )}
      </>
    </>
  );
}
