import React from "react";

const Video = () => {
  return (
    <>
      <div className="w-[90%] md:w-[720px] mx-auto my-12">
        {" "}
        {/* <iframe
          className="w-[100%] mx-auto min-h-[200px] md:min-h-[465px] h-full rounded-xl"
          src="https://www.youtube.com/watch?v=nyEw2jsfFjg"
          allow="autoplay"
          frameborder="0"
        ></iframe> */}
        <iframe
          width="951"
          height="535"
          src="https://www.youtube.com/embed/nyEw2jsfFjg"
          title="tasacion profesional"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-[100%] mx-auto min-h-[200px] md:min-h-[465px] h-full rounded-xl"
          allowfullscreen
        ></iframe>
      </div>

      <h2 className="text-[28px] md:text-[46px] font-[900] text-center mt-12 text-[#062740]">
        ¿Por qué necesito una tasación profesional?
      </h2>
      <h2 className="text-[18px] md:text-[24px] text-[#062740]  mb-4 font-bold text-center">
        hablemos de números...
      </h2>
      <div className="flex justify-center w-full">
        <img src="/img3/mapas.png" />
      </div>
    </>
  );
};

export default Video;
