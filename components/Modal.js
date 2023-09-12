import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const Modal = ({ setmodal }) => {
  const [nombre, setnombre] = useState(null);
  const [telefono, settelefono] = useState(null);
  const [correo, setcorreo] = useState(null);
  const route = useRouter();

  const handlesubmit = (e) => {
    e.preventDefault();

    try {
      console.log(nombre, telefono, correo);
    } catch (error) {
      console.log(error);
    } finally {
      route.push("/");
    }
  };
  return (
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      className="fixed overlaycss top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-md max-h-full mx-auto mt-[200px]">
        <div className="relative bg-white rounded-lg shadow ">
          <button
            onClick={() => setmodal(false)}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">cerrar modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 ">
              Completa con tus datos
            </h3>
            <form className="space-y-6" onSubmit={handlesubmit}>
              <div>
                <label
                  htmlFor="nombre"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Tu nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                  placeholder="Ej: Juan Lopez"
                  required
                  onChange={(e) => setnombre(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="telefono"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Tu telefono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  id="telefono"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                  placeholder="Ej: 091 411 527"
                  required
                  onChange={(e) => settelefono(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Tu correo
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                  placeholder="juan@gmail.com"
                  required
                  onChange={(e) => setcorreo(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Solicitar tasación
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
