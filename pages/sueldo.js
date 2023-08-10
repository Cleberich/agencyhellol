import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function sueldo() {
  const [su, setsu] = useState(0);
  const [he, sethe] = useState(0);
  const [fa, setfa] = useState(0);
  const [lt, setlt] = useState(0);
  const [fe, setfe] = useState(0);
  const [por, setpor] = useState(4.5);
  const [mostrarRecibo, setmostrarRecibo] = useState(true);

  const sueldoBase = Number(su);
  const porDia = Math.round(sueldoBase / 30);
  const faltas = Math.round(porDia * fa);
  const hora = Math.round(porDia / 8);
  const horaExtra = Math.round(Number(hora * 2 * he));
  const libretrabajado = Math.round(porDia * lt);
  const feriadotrabajado = fe * porDia;
  const nominal =
    sueldoBase + libretrabajado + horaExtra + feriadotrabajado - faltas;
  const bps = nominal * 0.15;
  const fonasa = (nominal * por) / 100;
  const frl = Math.round((nominal * 0.1) / 100);
  const descuentos = Math.round(bps + fonasa + frl);
  const liquido = Math.ceil(nominal - descuentos);

  return (
    // <div className="bg-[#0B0A0E] w-full h-screen  ">
    //   <section className="">
    //     {" "}
    //     <div className="py-12">
    //       <h1 className="text-center text-white font-regular md:font-bold text-lg md:text-3xl">
    //         Calculadora de sueldo
    //       </h1>
    //     </div>
    //     <div className="flex w-[90%] md:w-[700px] justify-center bg-[#F7F6FC] rounded-t-lg p-8 shadow-md mx-auto ">
    //       <form className="">
    //         <main className="md:grid md:grid-cols-3 grid grid-cols-2 place-content-center gap-2 ">
    //           <div>
    //             <label className="block w-full text-gray-100">
    //               Sueldo base
    //             </label>
    //             <input
    //               type="tel"
    //               className="rounded-md bg-gray-800  text-white w-[90%]"
    //               placeholder="Ingresa tu sueldo"
    //               onChange={(e) => setsu(e.target.value)}
    //             />
    //           </div>
    //           <div>
    //             <label className="block w-full text-gray-100">
    //               Horas Extras
    //             </label>
    //             <input
    //               type="tel"
    //               className="rounded-md bg-gray-800  text-white w-[90%]"
    //               placeholder="Cantidad de horas"
    //               onChange={(e) => sethe(e.target.value)}
    //             />
    //           </div>
    //           <div>
    //             <label className="block w-full text-gray-100">Faltas</label>
    //             <input
    //               type="number"
    //               className="rounded-md bg-gray-800  text-white w-[90%]"
    //               placeholder="Cantidad de faltas"
    //               onChange={(e) => setfa(e.target.value)}
    //             />
    //           </div>
    //           <div>
    //             <label className="block w-full text-gray-100">
    //               Libres trabajados
    //             </label>
    //             <input
    //               type="number"
    //               className="rounded-md bg-gray-800  text-white w-[90%]"
    //               placeholder="Cantidad"
    //               onChange={(e) => setlt(e.target.value)}
    //             />
    //           </div>
    //           <div>
    //             <label className="block w-full text-gray-100">Feriados</label>
    //             <input
    //               type="number"
    //               className="rounded-md bg-gray-800  text-white w-[90%]"
    //               placeholder="Feriados trabajados"
    //               onChange={(e) => setfe(e.target.value)}
    //             />
    //           </div>
    //           <div>
    //             {" "}
    //             <label className="block w-full text-gray-100">
    //               Tienes hijos
    //             </label>
    //             <select
    //               className="rounded-md p-2  bg-gray-800 text-gray-400 w-[125px] md:w-[180px]"
    //               onChange={(e) => setpor(e.target.value)}
    //             >
    //               <option value="4.5" className="placeholder:text-[10px]">
    //                 Sin hijos menores
    //               </option>
    //               <option value="6">Con hijos menores</option>
    //             </select>
    //           </div>
    //         </main>
    //         {/* <div className="flex justify-end pt-6">
    //         <button className="rounded-md py-2 px-4 bg-indigo-800 text-white">
    //           Consultar
    //         </button>
    //       </div> */}
    //       </form>
    //     </div>
    //     <main className="flex overflow-x-scroll  mx-auto h-52  bg-black py-12 px-2 w-[90%] md:w-[700px] ">
    //       <div className="border-r border-black  ">
    //         <div className="flex justify-center border-b border-gray-600">
    //           <p className="ml-8 font-semibold">HABERES</p>{" "}
    //         </div>
    //         <div className="flex justify-between">
    //           <p className="ml-8">Sueldo básico</p>{" "}
    //           <p className="mr-8"> ${sueldoBase}</p>
    //         </div>
    //         <div className="flex justify-between">
    //           <p className="ml-8">Faltas</p>{" "}
    //           <p className="mr-8"> - ${faltas}</p>
    //         </div>
    //         <div className="flex justify-between">
    //           <p className="ml-8">Extras</p>
    //           <p className="mr-8">${horaExtra}</p>
    //         </div>
    //         <div className="flex justify-between">
    //           <p className="ml-8">Libres trabajados</p>
    //           <p className="mr-8">${libretrabajado}</p>
    //         </div>
    //         <div className="flex justify-between">
    //           <p className="ml-8">Feriados</p>{" "}
    //           <p className="mr-8">${feriadotrabajado}</p>
    //         </div>
    //       </div>
    //       <div className="">
    //         <div className="flex justify-center border-b border-gray-600">
    //           <p className="ml-8 font-semibold">DESCUENTOS</p>{" "}
    //         </div>
    //         <div className="flex justify-between">
    //           <p className="ml-8">Bps</p> <p className="mr-8">${bps}</p>
    //         </div>
    //         <div className="flex justify-between">
    //           <p className="ml-8">Fonasa</p> <p className="mr-8">${fonasa}</p>
    //         </div>
    //         <div className="flex justify-between">
    //           <p className="ml-8">F.R.L</p> <p className="mr-8">${frl}</p>
    //         </div>
    //       </div>
    //     </main>
    //     <main className="grid grid-cols-2 mx-auto h-20 rounded-b-md bg-black pb-12 px-2 w-[90%] md:w-[700px]">
    //       <div className="">
    //         <div className="flex justify-between mx-8">
    //           <h3 className=" font-semibold">Total </h3>
    //           <h3>${nominal}</h3>
    //         </div>
    //       </div>
    //       <div className="">
    //         <div className="block  ">
    //           <h2 className="text-end mr-8 font-semibold">
    //             Total descuentos ${descuentos}
    //           </h2>{" "}
    //           <h3 className="text-end mr-8 font-semibold">
    //             Total líquido ${liquido}
    //           </h3>{" "}
    //         </div>
    //       </div>
    //     </main>
    //   </section>
    // </div>
    <div className="bg-[#030003] h-screen w-full">
      <div className="h-[100vh]">
        <img src="/img/vec.png" className="w-52 mx-auto pt-[150px]" />
      </div>
      <div className="bg-[#FEFEFE] w-full h-[40vh] rounded-t-3xl fixed bottom-0">
        <h1 className="font-semibold text-3xl px-5 pt-12">Administrá tu</h1>
        <h1 className="font-semibold text-[#B9B9B9] text-5xl px-5">Sueldo</h1>
        <h1 className="font-semibold text-[#030003] text-xs pt-2 px-5">
          Carga tus horas y obtene el resumen de tus ingresos
        </h1>
        <div className="flex justify-between px-5 fixed bottom-5 w-full">
          {" "}
          <h1 className="font-semibold text-3xl ">Comenzar</h1>
          <Link
            href="/calcular"
            className="bg-[#030003] hover:bg-gray-800 -mt-2 p-4 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
