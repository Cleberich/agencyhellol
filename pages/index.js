import React from "react";
import Head from "next/head";

export default function landing() {
  return (
    <div className="bg-[#3E5054] min-h-screen">
      <Head>
        <title>Cleber Davila Agente Inmobiliario</title>
        <meta name="description" content="Cleber Davila agente inmobiliario" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pb-20 ">
        <div className="flex justify-center md:justify-center p-3 md:p-6 rounded-b-[30px] gap-4">
          <img
            src="/img/cleber.jpg"
            alt="Cleber agente inmobiliario"
            className="rounded-full w-32 h-32"
          />
        </div>
        <div>
          {" "}
          <h1 className="text-center text-white mx-6 text-2xl lg:text-5xl font-semibold md:font-regular my-4">
            @Cleberdavila.keymex
          </h1>
          <h2 className="font-regular text-md mx-12 md:text-2xl text-center text-white ">
            Consejos recomendaciones y tips para vender comprar o alquilar una
            propiedad
          </h2>
          <div></div>
          <div className="mt-12 flex justify-center gap-3 flex-col w-[80%] mx-auto">
            <a
              href="/index2"
              target="_blank"
              className="bg-gradient-to-b from-red-600 to-red-800 py-6    font-bold text-center rounded-xl px-6  shadow-md"
            >
              <span></span>
              <span className="text-sm text-white">
                🎁 Solicitar tasación <br></br>
                <b>GRATIS</b>
              </span>
            </a>
            <a
              href="https://wa.link/q05x37"
              target="_blank"
              className="bg-gradient-to-b from-black to-gray-900 py-6   font-bold text-center rounded-xl px-3  shadow-md"
            >
              <span></span>
              <span className="text-sm text-white">
                Garantías de Alquiler en Uruguay 2023<br></br> LA GUÍA COMPLETA
              </span>
            </a>
            <a
              href="https://wa.link/q05x37"
              target="_blank"
              className="bg-gradient-to-b from-gray-100 to-gray-200 py-6   font-bold text-center rounded-xl px-3  shadow-md"
            >
              <span></span>
              <span className="text-sm text-black">
                1️⃣0️⃣ razones para elegir una inmobiliaria
                <br></br> a la hora de vender
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
