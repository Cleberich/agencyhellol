import React from "react";
import Head from "next/head";

export default function gracias() {
  return (
    <div className="bg-[#3E5054] min-h-screen">
      <Head>
        <title>Cleber Davila Agente Inmobiliario</title>
        <meta name="description" content="Cleber Davila agente inmobiliario" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pb-20 ">
        <div className="flex justify-start md:justify-center bg-red-600 p-3 md:p-6 rounded-b-[30px] gap-4">
          <img
            src="/img/cleber.jpg"
            alt="Cleber agente inmobiliario"
            className="rounded-full w-16 h-16 md:w-32 md:h-32"
          />
          <div className="flex flex-col md:hidden ">
            <h2 className="font-bold text-xl mt-2 text-white">Cleber Davila</h2>
            <h2 className="font-regular text-md -mt-1 text-white">
              Agente inmobiliario
            </h2>
          </div>
        </div>
        <div>
          {" "}
          <h1 className="text-center text-white mx-6 text-2xl lg:text-5xl font-semibold md:font-regular my-4">
            ¡Muchas Gracias!{" "}
          </h1>
          <h2 className="font-regular text-md mx-6 md:text-2xl text-center text-white">
            Hemos recibido tu solicitud de Tasación Profesional de forma
            completa.
          </h2>
          <div>
            <h2 className="font-semibold text-md mx-6 md:text-2xl text-center text-white">
              Enviame un WhatsApp para una Tasación con Prioridad 👇
            </h2>
          </div>
          <div className="mt-12 flex justify-center gap-3 flex-col w-64 mx-auto">
            <a
              href="https://wa.link/q05x37"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-center rounded-full py-2 px-6  "
            >
              Contactar por Whatsapp
            </a>
            <a
              href="https://wa.link/q05x37"
              target="_blank"
              className="bg-[#A82FB6] hover:bg-[#F5009D] text-white font-bold text-center rounded-full py-2 px-6  "
            >
              Seguime en instagram
            </a>
            <a
              href="https://wa.link/q05x37"
              target="_blank"
              className="bg-black hover:bg-gray-900 text-white font-bold text-center rounded-full py-2 px-6  "
            >
              Seguime en Tik Tok
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
