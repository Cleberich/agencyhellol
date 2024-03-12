import React from "react";

const Video = () => {
  return (
    <>
      {/* <div className="w-[90%] md:w-[720px] mx-auto my-12">
        {" "}
        <iframe
          className="w-[100%] mx-auto min-h-[200px] md:min-h-[465px] h-full rounded-xl"
          src="https://www.youtube.com/embed/SnjG4Z39-e0?rel=0&amp;autoplay=1;?rel=0&amp;controls=0"
          allow=""
          frameborder="0"
        ></iframe>
      </div> */}

      <h2 className="text-[28px] md:text-[46px] font-[900] text-center -mt-4 text-[#062740]">
        ¿Por qué necesito una tasación profesional?
      </h2>
      <h2 className="text-[18px] md:text-[24px] text-[#062740] mb-4 font-bold text-center">
        hablemos de números...
      </h2>
      <div className="flex justify-center w-full">
        <img src="/img3/mapas.png" />
      </div>
    </>
  );
};

export default Video;
