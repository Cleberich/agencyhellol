import BotonSolicitar from "@/components/BotonSolicitar";
import Informacion from "@/components/Informacion";
import Pasos from "@/components/Pasos";
import Testimonios from "@/components/Testimonios";
import Video from "@/components/Video";
import React from "react";

export default function index5() {
  return (
    <>
      <div className="hidden md:block">
        <img
          src="/img3/portadaditada.svg"
          alt="Cleber davila"
          className="w-full "
        />
      </div>

      <div className="block md:hidden bg-[url('/img3/portadacelular.svg')] bg-cover bg-no-repeat  pt-52">
        {" "}
        <img src="/img3/cleber.svg" alt="Cleber davila" className="w-full " />
      </div>
      <div className="bg-[#fff] h-screen mt-0 md:-mt-16 px-6">
        <h2 className="text-[16px] md:text-[24px] text-[#7a7a7a] mb-4 font-bold text-center">
          Tener el valor correcto de tu propiedad marcara la diferencia entre{" "}
        </h2>
        <h2 className="text-[28px] md:text-[46px] font-[900] text-center -mt-4 text-[#062740]">
          Vender o <span className="text-[#FBBF0E]">NO</span> vender tu inmueble{" "}
        </h2>
        <Video />
      </div>
      <Informacion />
      <Pasos />
      <Testimonios />
      <BotonSolicitar />
    </>
  );
}
