import Gallery from "@/components/Gallery";
import React from "react";

export default function index2() {
  return (
    <>
      <div className=" bg-[url('/img2/hero.png')] bg-cover h-auto bg-no-repeat w-full pb-[150px]">
        <div>
          <nav className="pt-[36px] pb-[28px]">
            <ul className="flex justify-center text-[15px] text-white gap-[55px] font-normal">
              <li>Sobre mi</li>
              <li>Servicios</li>
              <li>Inversión</li>
              <li>Contacto</li>
            </ul>
          </nav>
        </div>
        <h1 className="text-[58px] font-extrabold text-white leading-[66px] text-center mt-[14px]">
          ¿Buscas invertir <br></br>
          <span className="text-[#eb0303]">
            en apartamentos de
          </span> <br></br> obra nueva?
        </h1>
        <div className="w-full flex justify-center mt-[8px]">
          <h2 className="text-[16px]  text-center text-white max-w-[582px] ">
            Tomar una desición de inversión puede ser algo estresante por eso te
            invito a que me contactes para asesorarte y ayudarte en el proceso
          </h2>
        </div>
        <div className="mt-[55px] flex justify-center gap-[10px] pb-[100px]">
          <button className="bg-white rounded-[20px] text-[#eb0303] px-[22px] py-[10px]">
            Ver Linkedin
          </button>
          <button className="bg-[#eb0303] rounded-[20px] text-[#fff] px-[22px] py-[10px]">
            Contactar
          </button>
        </div>
      </div>
      <main className="grid grid-cols-2 mx-[200px] gap-16 my-[100px]">
        <div>
          <img src="/img2/cleber.png" className="w-full" />
        </div>
        <div className="">
          <h2 className="text-[36px] font-extrabold text-[#1D2943]">
            Sobre mi
          </h2>
          <p className="text-[16px]">
            rhoncus pharetra velit at posuere. Nam interdum massa diam. Integer
            eget justo nec ante tincidunt bibendum id in dui.rhoncus pharetra
            velit at posuere. Nam interdum massa diam. Integer eget justo nec
            ante tincidunt bibendum id in dui.rhoncus pharetra velit at posuere.
            Nam interdum massa diam. Integer eget justo nec ante tincidunt
            bibendum id in dui.rhoncus pharetra velit at posuere. Integer eget
            justo nec ante tincidunt bibendum id in dui.
          </p>
          <p className="text-[16px] mt-6">
            rhoncus pharetra velit at posuere. Nam interdum massa diam. Integer
            eget justo nec ante tincidunt bibendum id in dui. rhoncus pharetra
            velit at posuere. Nam interdum massa diam. Integer eget justo nec
            ante tincidunt bibendum id in dui. Integer eget justo nec ante
            tincidunt bibendum id in dui.
          </p>{" "}
          <button className="bg-[#eb0303] rounded-[20px] text-[#fff] px-[22px] py-[10px] mt-[20px]">
            Boton 1
          </button>
        </div>
      </main>
      <main className="bg-[#7686A1] w-full h-[90vh] pt-[66px]">
        <h3 className="text-white text-[36px]  font-bold text-center">
          ¿Cómo puedo ayudarte?
        </h3>
      </main>
      <div>
        <img src="/img2/azul.png" className="w-full" />
      </div>
      <h3 className="text-[#1C2943] text-[36px]  font-bold text-center -mt-[200px] mb-[50px]">
        Galeria
      </h3>
      <Gallery />
    </>
  );
}
