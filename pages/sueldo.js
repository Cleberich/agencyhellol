import React from "react";
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
    <div className="bg-[#1a1a1a] w-full min-h-screen md:block hidden">
      <div className="py-12">
        <h1 className="text-center text-white font-bold text-3xl">
          Calculadora de sueldo
        </h1>
      </div>
      <div className="flex w-[700px] justify-center bg-white rounded-t-md p-8 shadow-md mx-auto ">
        <form className="">
          <main className="md:grid md:grid-cols-3 grid grid-cols-2 place-content-center gap-2 ">
            <div>
              <label className="block w-full text-black">Sueldo base</label>
              <input
                type="tel"
                className="rounded-md bg-gray-800  text-white w-[90%]"
                placeholder="Ingresa tu sueldo"
                onChange={(e) => setsu(e.target.value)}
              />
            </div>
            <div>
              <label className="block w-full text-black">Horas Extras</label>
              <input
                type="tel"
                className="rounded-md bg-gray-800  text-white w-[90%]"
                placeholder="Cantidad de horas"
                onChange={(e) => sethe(e.target.value)}
              />
            </div>
            <div>
              <label className="block w-full text-black">Faltas</label>
              <input
                type="number"
                className="rounded-md bg-gray-800  text-white w-[90%]"
                placeholder="Cantidad de faltas"
                onChange={(e) => setfa(e.target.value)}
              />
            </div>
            <div>
              <label className="block w-full text-black">
                Libres trabajados
              </label>
              <input
                type="number"
                className="rounded-md bg-gray-800  text-white w-[90%]"
                placeholder="Cantidad"
                onChange={(e) => setlt(e.target.value)}
              />
            </div>
            <div>
              <label className="block w-full text-black">Feriados</label>
              <input
                type="number"
                className="rounded-md bg-gray-800  text-white w-[90%]"
                placeholder="Feriados trabajados"
                onChange={(e) => setfe(e.target.value)}
              />
            </div>
            <div>
              {" "}
              <label className="block w-full text-black">
                Seleccione una opción
              </label>
              <select
                className="rounded-md p-2  bg-gray-800 text-gray-400"
                onChange={(e) => setpor(e.target.value)}
              >
                <option value="4.5" className="placeholder:text-[10px]">
                  Sin hijos menores
                </option>
                <option value="6">Con hijos menores</option>
              </select>
            </div>
          </main>
          {/* <div className="flex justify-end pt-6">
            <button className="rounded-md py-2 px-4 bg-indigo-800 text-white">
              Consultar
            </button>
          </div> */}
        </form>
      </div>

      <main className="grid grid-cols-2 mx-auto h-52  bg-white py-12 px-2 w-[700px] ">
        <div className="border-r border-black  ">
          <div className="flex justify-center border-b border-gray-600">
            <p className="ml-8 font-semibold">HABERES</p>{" "}
          </div>
          <div className="flex justify-between">
            <p className="ml-8">Sueldo básico</p>{" "}
            <p className="mr-8"> ${sueldoBase}</p>
          </div>
          <div className="flex justify-between">
            <p className="ml-8">Faltas</p> <p className="mr-8"> - ${faltas}</p>
          </div>
          <div className="flex justify-between">
            <p className="ml-8">Extras</p>
            <p className="mr-8">${horaExtra}</p>
          </div>
          <div className="flex justify-between">
            <p className="ml-8">Libres trabajados</p>
            <p className="mr-8">${libretrabajado}</p>
          </div>
          <div className="flex justify-between">
            <p className="ml-8">Feriados</p>{" "}
            <p className="mr-8">${feriadotrabajado}</p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center border-b border-gray-600">
            <p className="ml-8 font-semibold">DESCUENTOS</p>{" "}
          </div>
          <div className="flex justify-between">
            <p className="ml-8">Bps</p> <p className="mr-8">${bps}</p>
          </div>
          <div className="flex justify-between">
            <p className="ml-8">Fonasa</p> <p className="mr-8">${fonasa}</p>
          </div>
          <div className="flex justify-between">
            <p className="ml-8">F.R.L</p> <p className="mr-8">${frl}</p>
          </div>
        </div>
      </main>
      <main className="grid grid-cols-2 mx-auto h-20 rounded-b-md bg-white pb-12 px-2 w-[700px]">
        <div className="">
          <div className="flex justify-between mx-8">
            <h3 className=" font-semibold">Total </h3>
            <h3>${nominal}</h3>
          </div>
        </div>
        <div className="">
          <div className="block  ">
            <h2 className="text-end mr-8 font-semibold">
              Total descuentos ${descuentos}
            </h2>{" "}
            <h3 className="text-end mr-8 font-semibold">
              Total líquido ${liquido}
            </h3>{" "}
          </div>
        </div>
      </main>
    </div>
  );
}
