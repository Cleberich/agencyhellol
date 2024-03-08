import React from "react";

export default function index5() {
  return (
    <>
      <div>
        <img src="/img3/portada1.svg" alt="Cleber davila" className="w-full" />
      </div>
      <div className="bg-[#fff] h-screen -mt-16 ">
        <h2 className="text-[24px] text-[#7a7a7a] mb-4 font-bold text-center">
          Tener el valor correcto de tu propiedad marcara la diferencia entre{" "}
        </h2>
        <h2 className="text-[46px] font-extrabold text-center -mt-4 text-[#062740]">
          Vender o NO vender tu inmueble{" "}
        </h2>
        <div className="mx-64">
          <h2 className="text-[24px] text-[#0B2F49] mt-12 mb-4 font-bold ">
            Veamos algunos datos importantes
          </h2>

          <div className="flex ">
            <div>
              {" "}
              <img src="/img3/calendario.png" />
            </div>
            <div className="flex">
              <h3 className="my-3">
                El tiempo promedio para vender una inmueble que se encuentra en
                precio de mercado es{" "}
                <span className="font-bold">de 3 meses</span>
              </h3>
            </div>
          </div>
          <div>
            <h2 className="text-[24px] text-[#0B2F49] mt-12 mb-4 font-bold ">
              Análisis del mercado de ventas en Uruguay{" "}
            </h2>
            <p>
              Distribución de la demanda por departamentos. Dentro del
              territorio nacional, Montevideo es el departamento con más
              búsquedas representando el 61% de las mismas. Lo siguen Maldonado
              y Canelones con el 18% y 17% respectivamente.
            </p>
            <div className="my-6">
              <img src="/img3/mapas.png" alt="mapas de ventas" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#151616] to-[#1F2F3D] py-[115px] px-64">
          <h3 className="text-[24px] text-white font-bold mb-4">
            Hablemos de los portales inmobiliarios
          </h3>
          <h4 className="text-[20px] text-white font-regular">
            44.500 apartamentos publicados <br></br>
            23.800 casas publicadas <br></br>
            67.800 en total{" "}
          </h4>
          <h4 className="text-[20px] text-white font-regular mt-4">
            de los cuales 1300 se venden por mes esto significa que{" "}
          </h4>
          <h4 className="text-[48px] leading-[45px] text-white font-bold mt-4">
            se vende menos del 2% de lo publicado{" "}
            <span className="text-[20px] text-white font-regular ">
              y esto se debe al tener un precio incorrecto
            </span>
          </h4>
        </div>
      </div>
    </>
  );
}
