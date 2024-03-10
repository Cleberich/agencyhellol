import React from "react";

const Testimonios = () => {
  return (
    <>
      <h2 className="text-[18px] md:text-[46px] font-[900] text-center -mt-4 text-[#062740]">
        ¿Aún tienes dudas?
      </h2>
      <h2 className="text-[12px] md:text-[24px] text-[#062740] mb-4 font-semibold md:font-bold text-center px-6">
        esto dicen mis clientes y el próximo podrias ser vos...
      </h2>
      <section className=" justify-center md:flex  hidden ">
        <img src="/img3/testimonios.svg" className="md:block  hidden" />
      </section>
      <div className="flex px-6 justify-center  md:hidden">
        <img src="/img3/testimonios2.svg" className="w-full" />
      </div>
    </>
  );
};

export default Testimonios;
