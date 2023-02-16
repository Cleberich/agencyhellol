const Portada = () => {
  return (
    <div className="bg-[#101010] h-screen -mt-[53px]">
      <div className="relative left-[38%]">
        <video
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="w-[130%] "
          src="/videos/hh-video.mp4"
        />
      </div>
      <div>
        <h1 className="text-white text-[86.3px] leading-[97px] font-bold absolute top-[255px] pl-[120px]">
          We design <br></br>for the peolpe
        </h1>
      </div>
    </div>
  );
};

export default Portada;
