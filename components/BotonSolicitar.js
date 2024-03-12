import React from "react";

const BotonSolicitar = ({ setmodal }) => {
  return (
    <div className="flex justify-center pb-44 pt-12">
      <button
        onClick={() => setmodal(true)}
        className="px-10 py-4 bg-[#FBBF0E] text-black text-[20px] font-bold uppercase rounded-xl"
      >
        Solicitar tasación
      </button>
    </div>
  );
};

export default BotonSolicitar;
