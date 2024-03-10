import React from "react";

const Informacion = () => {
  return (
    <section className="bg-gradient-to-b from-[#151616] to-[#1F2F3D] py-24">
      {" "}
      <h2 className="text-[18px] md:text-[24px] text-[#b9b9b9] mb-4 font-bold text-center px-6 md:px-44">
        como se ve en la imágen anterior Montevideo tiene el 61% del mercado con
        67.000 avisos publicados al día de hoy en los diferentes portales
        inmobiliarios de los cuales segun el I.N.E (instituto Nacional de
        Estadística)
        <span className="text-[28px] md:text-[46px] font-[900] text-center -mt-4 text-[#ffffff]">
          {" "}
          se venden{" "}
          <span className="text-[#FBBF0E]"> 1300 porpiedades al mes,</span>
        </span>{" "}
        <span className="text-[18px] md:text-[24px] text-[#ffffff] mb-4 font-bold text-center">
          representa menos del 2% de lo publicado y esto se debe en parte al
          tener
        </span>
        <span className="text-[28px] md:text-[46px] font-[900] text-center -mt-4 text-[#ffffff]">
          <span className="text-[#FBBF0E]"> un precio incorrecto</span>
        </span>
      </h2>
    </section>
  );
};

export default Informacion;
