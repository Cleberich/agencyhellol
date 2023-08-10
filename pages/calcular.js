import { formatearFecha } from "@/helpers/formatearFecha";
import Head from "next/head";
import { useState } from "react";
export default function calcular() {
  const [modal, setmodal] = useState(false);
  const fechaAdaptada = new Date();
  const fecha = formatearFecha(fechaAdaptada);
  const [su, setsu] = useState(0);
  const [he, sethe] = useState(0);
  const [fa, setfa] = useState(0);
  const [lt, setlt] = useState(0);
  const [fe, setfe] = useState(0);
  const [por, setpor] = useState(4.5);
  const [hn, sethn] = useState(0);
  const [mostrarRecibo, setmostrarRecibo] = useState(true);
  const [active, setactive] = useState("Ingresos");
  const [spinner, setSpinner] = useState(false);

  const sueldoBase = Number(su);
  const porDia = Math.round(sueldoBase / 30);
  const faltas = Math.round(porDia * fa);
  const hora = Math.round(porDia / 8);
  const horaNocturna = Math.round(hn * 0.2);
  const horaExtra = Math.round(Number(hora * 2 * he));
  const libretrabajado = Math.round(porDia * lt);
  const feriadotrabajado = fe * porDia;
  const nominal =
    sueldoBase +
    libretrabajado +
    horaExtra +
    feriadotrabajado +
    horaNocturna -
    faltas;
  const bps = nominal * 0.15;
  const fonasa = (nominal * por) / 100;
  const frl = Math.round((nominal * 0.1) / 100);
  const descuentos = Math.round(bps + fonasa + frl);
  const liquido = Math.ceil(nominal - descuentos);

  const consultando = () => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
      setmodal(false);
    }, 1500);
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <div className="bg-[#FFFFFF] h-screen w-full">
        <div className="p-5">
          <h1 className="font-[500] text-md">Bienvenido</h1>
          <h1 className="font-[500] text-lg text-[#B9B9B9] -mt-2">
            a tu calculadora
          </h1>
        </div>
        <div className="w-[360px] mx-auto block md:hidden h-48 md:h-52 bg-[#0B0A0D] shadow-md rounded-3xl">
          <h2 className="font-[500] px-5 pt-5 text-md text-[#626163]">
            {fecha}
          </h2>
          <h2 className="font-[500] px-5 text-2xl text-[#ffffff]">
            Sueldo liquido a cobrar
          </h2>
          <h2 className="font-[500] px-5 text-5xl text-left text-[#ffffff] pt-12">
            ${liquido}
          </h2>
        </div>
        <main className="flex justify-start md:justify-center overflow-x-scroll gap-2 px-[11px]">
          <div className="min-w-[360px] md:min-w-[450px] mt-3 mx-auto h-48 md:h-52 bg-[#248e1d] shadow-md rounded-3xl">
            <h2 className="font-[500] px-5 pt-5 text-md text-[#626163]">
              {fecha}
            </h2>
            <h2 className="font-[500] px-5 text-2xl text-[#ffffff]">Nominal</h2>
            <h2 className="font-[500] px-5 text-5xl text-left text-[#ffffff] pt-12">
              ${nominal}
            </h2>
          </div>
          <div className="min-w-[360px] md:min-w-[450px] mt-3 mx-auto h-48 md:h-52 bg-[#c80303] shadow-md rounded-3xl">
            <h2 className="font-[500] px-5 pt-5 text-md text-[#626163]">
              {fecha}
            </h2>
            <h2 className="font-[500] px-5 text-2xl text-[#ffffff]">
              Descuentos
            </h2>
            <h2 className="font-[500] px-5 text-5xl text-left text-[#ffffff] pt-12">
              ${descuentos}
            </h2>
          </div>
          <div className="bg-[#0B0A0D] min-w-[360px] md:min-w-[450px] mt-3 mx-auto h-48 md:h-52 md:block hidden shadow-md rounded-3xl">
            <h2 className="font-[500] px-5 pt-5 text-md text-[#626163]">
              {fecha}
            </h2>
            <h2 className="font-[500] px-5 text-2xl text-[#ffffff]">
              Sueldo liquido a cobrar
            </h2>
            <h2 className="font-[500] px-5 text-5xl text-left text-[#ffffff] pt-12">
              ${liquido}
            </h2>
          </div>
        </main>

        <div className="text-xs md:text-lg font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <button
                onClick={() => setactive("Ingresos")}
                className={
                  active == "Ingresos"
                    ? "inline-block p-4 text-black border-b-2 border-black rounded-t-lg font-semibold "
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
              >
                Ingresos
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => setactive("Descuentos")}
                className={
                  active == "Descuentos"
                    ? "inline-block p-4 text-black border-b-2 border-black rounded-t-lg font-semibold "
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
              >
                Descuentos
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => setactive("A cobrar")}
                className={
                  active == "A cobrar"
                    ? "inline-block p-4 text-black border-b-2 border-black rounded-t-lg font-semibold "
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
              >
                A cobrar
              </button>
            </li>
          </ul>
        </div>

        {active == "Descuentos" && (
          <div className="relative overflow-x-auto pb-24">
            <table className="w-full text-xs md:text-lg text-left text-gray-500">
              <tbody>
                <tr className="bg-white border-b flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Bps
                  </th>
                  <td className="px-6 py-4">${bps}</td>
                </tr>
                <tr className="bg-white flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Fonasa
                  </th>
                  <td className="px-6 py-4">${fonasa}</td>
                </tr>{" "}
                <tr className="bg-white flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    F.R.L
                  </th>
                  <td className="px-6 py-4">${frl}</td>
                </tr>
                <tr className="bg-white flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Total descuentos
                  </th>
                  <td className="px-6 py-4">${descuentos}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {active == "Ingresos" && (
          <div className="relative overflow-x-auto pb-24">
            <table className="w-full text-xs md:text-lg text-left text-gray-500">
              <tbody>
                <tr className="bg-white border-b flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Sueldo base
                  </th>
                  <td className="px-6 py-4">${sueldoBase}</td>
                </tr>
                <tr className="bg-white flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Horas extras
                  </th>
                  <td className="px-6 py-4">${horaExtra}</td>
                </tr>
                <tr className="bg-white flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Libres trabajados
                  </th>
                  <td className="px-6 py-4">${libretrabajado}</td>
                </tr>
                <tr className="bg-white flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Feriados trabajados
                  </th>
                  <td className="px-6 py-4">${feriadotrabajado}</td>
                </tr>
                <tr className="bg-white flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Horas nocturnas
                  </th>
                  <td className="px-6 py-4">${horaNocturna}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {active == "A cobrar" && (
          <div className="relative overflow-x-auto pb-24">
            <table className="w-full text-xs md:text-lg text-left text-gray-500">
              <tbody>
                <tr className="bg-white border-b flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Nominal
                  </th>
                  <td className="px-6 py-4">${nominal}</td>
                </tr>
                <tr className="bg-white flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Descuentos
                  </th>
                  <td className="px-6 py-4"> - ${descuentos}</td>
                </tr>
                <tr className="bg-white flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Libres trabajados
                  </th>
                  <td className="px-6 py-4">${libretrabajado}</td>
                </tr>
                <tr className="bg-white flex justify-between">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Total
                  </th>
                  <td className="px-6 py-4">${liquido}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <div className="fixed bottom-5 right-5">
          <button
            className="bg-[#c80303] p-4 rounded-full"
            onClick={() => setmodal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      {modal && (
        <div
          id="authentication-modal"
          tabindex="-1"
          aria-hidden="true"
          className="fixed overlaycss bottom-24 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative md:mt-20 md:mx-auto w-full max-w-xl max-h-full ">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 ">
                  Carga tus horas
                </h3>
                <main className="">
                  <main className="md:grid md:grid-cols-3 grid grid-cols-1 place-content-center gap-2 ">
                    <div>
                      <label className="block mb-1 text-xs md:text-lg font-medium text-gray-900 ">
                        Sueldo base
                      </label>
                      <input
                        type="tel"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        placeholder="Ingresa tu sueldo"
                        onChange={(e) => setsu(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs md:text-lg font-medium text-gray-900 ">
                        Horas Extras
                      </label>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        placeholder="Cantidad de horas"
                        onChange={(e) => sethe(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs md:text-lg font-medium text-gray-900 ">
                        Horas Nocturnas
                      </label>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        placeholder="Cantidad de horas"
                        onChange={(e) => sethn(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs md:text-lg font-medium text-gray-900 ">
                        Faltas
                      </label>
                      <input
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        placeholder="Cantidad de faltas"
                        onChange={(e) => setfa(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs md:text-lg font-medium text-gray-900 ">
                        Libres trabajados
                      </label>
                      <input
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        placeholder="Cantidad"
                        onChange={(e) => setlt(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs md:text-lg font-medium text-gray-900 ">
                        Feriados
                      </label>
                      <input
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        placeholder="Feriados trabajados"
                        onChange={(e) => setfe(e.target.value)}
                      />
                    </div>
                    <div>
                      {" "}
                      <label className="block mb-1 text-xs md:text-lg font-medium text-gray-900 ">
                        Tienes hijos
                      </label>
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        onChange={(e) => setpor(e.target.value)}
                      >
                        <option value="4.5" className="placeholder:text-[10px]">
                          Sin hijos menores
                        </option>
                        <option value="6">Con hijos menores</option>
                      </select>
                      <div className="mt-4">
                        <button
                          onClick={() => consultando()}
                          className="bg-[#c80303] border border-[#c80303] shadow-md text-white text-xs rounded-lg block w-full p-2.5  "
                        >
                          {spinner ? (
                            <span className="flex  justify-center">
                              {" "}
                              <svg
                                aria-hidden="true"
                                role="status"
                                class="inline w-4 h-4 mr-3 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="#E5E7EB"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          ) : (
                            " Consultar"
                          )}
                        </button>
                      </div>
                    </div>
                  </main>
                </main>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
