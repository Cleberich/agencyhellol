import { useState, useEffect } from "react";
import Gallery from "@/components/Gallery";
import Mobile from "@/components/Mobile";
import React from "react";

export default function index2() {
  const [activado, setactivado] = useState("sobremi");
  const [borde, setborde] = useState("activo");

  useEffect(() => {
    setactivado("sobremi");
  }, [100]);
  return (
    <>
      <div className="bg-[url('/img2/portadamobile.jpg')] sm:bg-[url('/img2/portadamobile.jpg')] md:bg-[url('/img2/hero3.png')] xl:bg-[url('/img2/hero3.png')] md:bg-cover xl:bg-cover h-auto 2xl:h-[105vh] bg-no-repeat w-full pb-[150px] md:bg-right">
        <div className="">
          <nav className="pt-[36px] pb-[28px] flex justify-between">
            <div className="col">
              <a href="/">
                <img
                  src="/img2/logoamarillo.png"
                  className="w-[100px] md:w-[150px]  ml-10 lg:ml-24 -mt-4"
                />
              </a>
            </div>
            <ul className="hidden lg:flex justify-center text-[15px] text-white gap-[55px] font-normal col ">
              <li>
                {" "}
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#cleber">¿Quién es Cleber Davila?</a>
              </li>
              <li>Inversión</li>
              <li>Contacto</li>
            </ul>
            <div className="col">
              {" "}
              <button className="bg-[#eb0303] rounded-[20px] text-[#fff] px-[22px] py-[10px] -mt-4 lg:mr-24 hidden md:flex">
                Contactar
              </button>
            </div>
          </nav>
        </div>
        <h1 className="text-[30px] md:text-[42px] lg:text-[58px] ml-8 lg:ml-0 font-extrabold text-white leading-[29px] md:leading-[42px] lg:leading-[66px] text-left lg:text-center mt-[14px]">
          ¿Buscas invertir <br></br>
          <span className="text-[#eb0303]">
            en apartamentos de
          </span> <br></br> obra nueva?
        </h1>
        <div className="w-full flex justify-left lg:justify-center mt-[8px]">
          <h2 className="text-[12px] md:text-[16px] text-left mx-8 lg:mx-0 md:w-[400px]  lg:text-center text-white lg:max-w-[582px] ">
            Tomar una desición de inversión puede ser algo estresante por eso te
            invito a que me contactes para asesorarte y ayudarte en el proceso
          </h2>
        </div>
        <div className="mt-[40px] md:mt-[55px] flex ml-8 lg:ml-0 flex-col md:flex-row justify-left lg:justify-center gap-[10px] pb-[100px] w-[140px] md:w-full">
          <button className="bg-white rounded-[20px] text-[#eb0303] px-[22px] py-[10px] ">
            Ver Linkedin
          </button>
          <button className="bg-[#eb0303] rounded-[20px] text-[#fff] px-[22px] py-[10px]">
            Contactar
          </button>
        </div>
      </div>
      <h2
        className="hidden lg:block text-[36px] text-center pt-12 font-extrabold text-[#1D2943] bg-white md:-mt-[64px] lg:-mt-14 xl:-mt-14 2xl:-mt-3"
        id="cleber"
      >
        Sobre mi
      </h2>
      <Mobile setactivado={setactivado} setborde={setborde} borde={borde} />
      {activado == "sobremi" && (
        <main className="flex flex-col-reverse lg:grid lg:grid-cols-2 mx-8 md:mx-[50px] 2xl:mx-[200px] gap-16 mb-[100px] mt-12 bg-white   ">
          <div>
            <img
              src="/img2/cleberdavila.jpg"
              className="w-full h-full object-cover object-left rounded-br-[20px] rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[20px]"
            />
          </div>
          <div className=" ">
            <p className="text-[16px] text-justify">
              Acompañame a conocer un poco de mi historia, durante toda mi vida,
              fui un emprendedor apasionado, siempre buscando nuevas
              oportunidades,hace algunos años, tenía un negocio físico en pleno
              funcionamiento con siete empleados trabajando incansablemente. Sin
              embargo, el estrés que experimentaba debido a la gestión de mi
              negocio empezó a pasar factura en mi salud. Empecé a perder el
              pelo, una señal evidente de que algo no estaba bien. Fue entonces
              cuando tomé una decisión difícil pero necesaria: me retiré de mi
              negocio físico para preservar mi bienestar. A partir de ese
              momento, mi vida se llenó de altos y bajos. Pero nunca dejé de
              luchar y reinventarme.
              <br></br> <br></br>Decidí que mi siguiente paso sería formarme
              como agente inmobiliario, esta decisión cambió mi vida de formas
              que nunca imaginé. <br></br> <br></br> Trabajé incansablemente,
              aprendí todos los matices del mercado y me convertí en un agente
              inmobiliario profesional. Hoy en día, formo parte del equipo de
              Keymex, una prestigiosa agencia inmobiliaria de nivel
              Internacional.
              <br></br> <br></br> Me siento orgulloso de ser parte de esta
              comunidad y de poder ayudar a las personas a encontrar su hogar.
            </p>
            <p className="text-[16px] mt-6"></p>{" "}
          </div>
        </main>
      )}
      <main className="bg-[#7686A1] w-full h-[90vh] pt-[66px]">
        <h3
          className="text-white text-[36px]  font-bold text-center"
          id="servicios"
        >
          ¿Cómo puedo ayudarte?
        </h3>
        <main className="flex justify-center gap-6 mt-12">
          <div className="col w-[322px] h-[344px] hover:shadow-lg hover:shadow-white cursor-pointer bg-[#233351] rounded-br-[20px] rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[20px] ">
            <h3 className="text-white text-[20px]  font-medium mt-4 text-center">
              Compra-venta-renta
            </h3>
            <p className="text-[14px] text-white text-center font-regular mx-6">
              Ya sea que estes buscando comprar vender o alquilar, te acompaño
              en todo el proceso{" "}
            </p>
            <img
              src="/img2/compra.png"
              alt="compra venta"
              className="mx-auto mt-8"
            />
          </div>
          <div className="col w-[322px] h-[344px] hover:shadow-lg hover:shadow-white cursor-pointer bg-[#292F3B] rounded-br-[20px] rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[20px] ">
            <h3 className="text-white text-[20px]  font-medium mt-4 text-center">
              Asesorias
            </h3>
            <p className="text-[14px] text-white text-center font-regular mx-6">
              Te ayudo a resolver todas tus dudas para tomar una mejor decision
              a la hora de invertir.
            </p>
            <img
              src="/img2/asesorias.png"
              alt="asesorias personalizadas"
              className="mx-auto mt-8"
            />
          </div>
          <div className="col w-[322px] h-[344px] hover:shadow-lg hover:shadow-white cursor-pointer bg-[#949BA5] rounded-br-[20px] rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[20px] ">
            <h3 className="text-white text-[20px]  font-medium mt-4 text-center">
              Comparativo
            </h3>
            <p className="text-[14px] text-white text-center font-regular mx-6">
              Te proporciono una tasación comparativa de tu propiedad para salir
              con el precio correcto al mercado
            </p>
            <img
              src="/img2/comparativo.png"
              alt="tasacion"
              className="mx-auto mt-8"
            />
          </div>
        </main>
      </main>
      <div>
        <img src="/img2/azul.png" className="w-full" />
      </div>
      <h3 className="text-[#1C2943] text-[36px]  font-bold text-center -mt-[300px] mb-[50px]">
        Galeria
      </h3>
      <Gallery />
    </>
  );
}
