import { formatearFecha } from "@/helpers/formatearFecha";

export default function calcular() {
  const fechaAdaptada = new Date();
  const fecha = formatearFecha(fechaAdaptada);
  return (
    <>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed overlaycss top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-md max-h-full ">
          <div class="relative bg-white rounded-lg shadow ">
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900 ">
                Carga tus horas
              </h3>
              <form className="">
                <main className="md:grid md:grid-cols-3 grid grid-cols-2 place-content-center gap-2 ">
                  <div>
                    <label className="block w-full text-gray-100">
                      Sueldo base
                    </label>
                    <input
                      type="tel"
                      className="rounded-md bg-gray-800  text-white w-[90%]"
                      placeholder="Ingresa tu sueldo"
                      onChange={(e) => setsu(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block w-full text-gray-100">
                      Horas Extras
                    </label>
                    <input
                      type="tel"
                      className="rounded-md bg-gray-800  text-white w-[90%]"
                      placeholder="Cantidad de horas"
                      onChange={(e) => sethe(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block w-full text-gray-100">Faltas</label>
                    <input
                      type="number"
                      className="rounded-md bg-gray-800  text-white w-[90%]"
                      placeholder="Cantidad de faltas"
                      onChange={(e) => setfa(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block w-full text-gray-100">
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
                    <label className="block w-full text-gray-100">
                      Feriados
                    </label>
                    <input
                      type="number"
                      className="rounded-md bg-gray-800  text-white w-[90%]"
                      placeholder="Feriados trabajados"
                      onChange={(e) => setfe(e.target.value)}
                    />
                  </div>
                  <div>
                    {" "}
                    <label className="block w-full text-gray-100">
                      Tienes hijos
                    </label>
                    <select
                      className="rounded-md p-2  bg-gray-800 text-gray-400 w-[125px] md:w-[180px]"
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
              <form class="space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                  />
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      for="remember"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    href="#"
                    class="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] h-screen w-full">
        <div className="p-5">
          <h1 className="font-[500] text-md">Bienvenido</h1>
          <h1 className="font-[500] text-lg text-[#B9B9B9] -mt-2">
            a tu calculadora
          </h1>
        </div>
        <div className="w-[95%] mx-auto h-52 bg-[#0B0A0D] shadow-md rounded-3xl">
          <h2 className="font-[500] px-5 pt-5 text-md text-[#626163]">
            {fecha}
          </h2>
          <h2 className="font-[500] px-5 text-2xl text-[#ffffff]">
            Sueldo liquido a cobrar
          </h2>
          <h2 className="font-[500] px-5 text-5xl text-left text-[#ffffff] pt-12">
            $36541
          </h2>
        </div>
        <div className="w-[95%] mt-3 mx-auto h-52 bg-[#c80303] shadow-md rounded-3xl">
          <h2 className="font-[500] px-5 pt-5 text-md text-[#626163]">
            {fecha}
          </h2>
          <h2 className="font-[500] px-5 text-2xl text-[#ffffff]">
            Descuentos
          </h2>
          <h2 className="font-[500] px-5 text-5xl text-left text-[#ffffff] pt-12">
            $12541
          </h2>
        </div>

        <div className="text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Ingresos
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Descuentos
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 text-black border-b-2 border-black rounded-t-lg active "
                aria-current="page"
              >
                A cobrar
              </a>
            </li>
          </ul>
        </div>

        <div className="relative overflow-x-auto pb-24">
          <table className="w-full text-sm text-left text-gray-500">
            <tbody>
              <tr className="bg-white border-b flex justify-between">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Bps
                </th>
                <td className="px-6 py-4">$36541</td>
              </tr>
              <tr className="bg-white flex justify-between">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Fonasa
                </th>
                <td className="px-6 py-4">$1200</td>
              </tr>{" "}
              <tr className="bg-white flex justify-between">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  F.R.L
                </th>
                <td className="px-6 py-4">$1200</td>
              </tr>
              <tr className="bg-white flex justify-between">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Total descuentos
                </th>
                <td className="px-6 py-4">$1200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="relative overflow-x-auto pb-24">
          <table className="w-full text-sm text-left text-gray-500">
            <tbody>
              <tr className="bg-white border-b flex justify-between">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Sueldo base
                </th>
                <td className="px-6 py-4">$36541</td>
              </tr>
              <tr className="bg-white flex justify-between">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Horas extras
                </th>
                <td className="px-6 py-4">$1200</td>
              </tr>
              <tr className="bg-white flex justify-between">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Libres trabajados
                </th>
                <td className="px-6 py-4">$1200</td>
              </tr>
              <tr className="bg-white flex justify-between">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Feriados trabajados
                </th>
                <td className="px-6 py-4">$1200</td>
              </tr>
              <tr className="bg-white flex justify-between">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Horas nocturnas
                </th>
                <td className="px-6 py-4">$1200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="fixed bottom-5 right-5">
          <button className="bg-[#fa3636] p-4 rounded-full">
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
    </>
  );
}
