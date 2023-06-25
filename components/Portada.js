const Portada = ({ menu, animacion, idioma }) => {
  return (
    <div className="bg-[#0F121C] h-[80vh] md:h-screen -mt-[75px] ">
      <div className="flex justify-end  z-0 videoPortada">
        <video
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="w-[80%] md:w-[100%] slide-in-bottom desktop"
          src="/videos/vid.mp4"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="w-[80%] md:w-[60%] slide-in-bottom celu"
          src="/videos/hhh-video.mp4"
        />
      </div>
      <div>
        <h1
          className={
            menu
              ? "text-transparent md:text-[97.3px]  leading-[97px] font-bold absolute top-[255px] pl-8 md:pl-[120px] swing-in-bottom-fwdd tituloDesktop z-10"
              : "text-white text-[97.3px] leading-[97px] font-bold absolute top-[255px] pl-8 md:pl-[120px] swing-in-bottom-fwdd tituloDesktop z-10"
          }
        >
          {idioma == "ingles" ? " I'm" : "Soy"} Front-end <br></br>
          <span className={animacion && "hvr-sweep-to-right"} id="title">
            Developer
          </span>
        </h1>
        <h1
          className={
            menu
              ? "text-transparent text-[42px]  leading-[40px]  font-bold absolute top-[130px]  pl-8 tituloCelu "
              : "text-white text-[42px]  leading-[40px]  font-bold absolute top-[130px]  pl-8 tituloCelu "
          }
        >
          {idioma == "ingles" ? " I'm" : "Soy"} Front-end <br></br>
          <span className={animacion && "hvr-sweep-to-right"} id="title">
            Developer
          </span>
        </h1>
      </div>
      <div>
        <nav className="inline-block  -rotate-90 text-red-500 absolute right-5 mt-12">
          <a
            href="https://www.instagram.com/cleber_developer/?hl=es-la"
            target="_blank"
            className="mx-1 text-[12px]"
          >
            IG
          </a>
          <a
            href="https://www.linkedin.com/in/cleber-desarrollador-web"
            target="_blank"
            className="mx-1 text-[12px]"
          >
            IN
          </a>
          <a
            href="https://www.linkedin.com/in/cleber-desarrollador-web"
            target="_blank"
            className="mx-1 text-[12px]"
          >
            TW
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Portada;
