import React from "react";

const Pasos = () => {
  return (
    <>
      <h2 className="text-[18px] md:text-[24px] font-bold text-[#151616] text-center mt-12 px-6">
        {" "}
        ¿Cuáles son los pasos obtener para un informe de tasación Profesional
        exitoso?
      </h2>
      <div className="mx-6 md:mx-44 grid grid-cols-1 md:grid-cols-3 gap-5 py-20">
        <div className="flex flex-col ">
          {" "}
          <div className="flex justify-center">
            <img src="/img3/visita.gif" className="w-40" />
          </div>
          <h2 className="text-[20px] text-center font-bold mb-4">
            Visita a la propiedad
          </h2>
          <p className="text-[14px] text-justify">
            Para hacer el relevamiento de los datos técnicos, evaluar fortalezas
            de tu propiedad y conversar sobre tus objetivos con la propiedad.
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <img src="/img3/informe.gif" className="w-40 mb-5" />
          </div>
          <h2 className="text-[20px] text-start font-bold mb-4">
            Elaboración de informe y tasación
          </h2>
          <p className="text-[14px] text-justify">
            ✅ información y métricas del mercado <br></br>✅ Propiedades con
            las que competís <br></br> ✅ El valor máximo
            <br></br>✅ Valor de publicación <br></br>✅ Valor de venta.
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <img src="/img3/entrega.gif" className="w-40" />
          </div>
          <h2 className="text-[20px] text-center font-bold mb-4">
            Entrega de informe
          </h2>
          <p className="text-[14px] text-justify">
            Al final, te presentaré el informe para que podamos revisar los
            comparables, los valores, la estrategia comercial y el plan de
            marketing específico para tu propiedad.
          </p>
        </div>
      </div>
    </>
  );
};

export default Pasos;
