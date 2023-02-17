const Portada = () => {
  return (
    <div className="bg-[#101010] h-[80vh] md:h-screen -mt-[59px]">
      <div className="flex justify-end  z-0 videoPortada">
        <video
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="w-[80%] md:w-[60%] slide-in-bottom "
          src="/videos/hh-videos.mp4"
        />
      </div>
      <div>
        <h1 className="text-white text-[42px] md:text-[97.3px] leading-[40px] md:leading-[97px] font-bold absolute top-[130px] md:top-[255px] pl-8 md:pl-[120px] swing-in-bottom-fwdd ">
          We design <br></br>
          <span>for the people</span>
        </h1>
      </div>
      <div>
        <nav className="inline-block  -rotate-90 text-red-500 absolute right-5 mt-12">
          <a href="#" className="mx-1 text-[12px]">
            IG
          </a>
          <a href="#" className="mx-1 text-[12px]">
            IN
          </a>
          <a href="#" className="mx-1 text-[12px]">
            TW
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Portada;
