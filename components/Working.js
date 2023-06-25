import { useState, useEffect } from "react";
const Working = ({ idioma }) => {
  const [back, setBack] = useState(100);
  const [mvd, setMvd] = useState();
  const [mvdr, setMvdr] = useState(0);
  const [san, setSan] = useState();
  const [sanr, setSanr] = useState(0);
  const [ny, setNy] = useState();
  const [nyr, setNyr] = useState(0);

  const obtener = () => {
    const hoy = new Date();
    let hora = hoy.getHours();
    if (hora == 12) {
      hora = 12;
      setMvdr(0);
    }

    if (hora == 13) {
      hora = 1;
      setMvdr(30);
      setSanr(240);
      setNyr(330);
    }
    if (hora == 14) {
      hora = 2;
      setMvdr(60);
      setSanr(270);
      setNyr(360);
    }
    if (hora == 15) {
      hora = 3;
      setMvdr(90);
      setSanr(300);
      setNyr(30);
    }
    if (hora == 16) {
      hora = 4;
      setMvdr(120);
      setSanr(330);
      setNyr(60);
    }
    if (hora == 17) {
      hora = 5;
      setMvdr(150);
      setSanr(360);
      setNyr(90);
    }
    if (hora == 18) {
      hora = 6;
      setMvdr(180);
      setSanr(30);
      setNyr(120);
    }
    if (hora == 19) {
      hora = 7;
      setMvdr(210);
      setSanr(60);
      setNyr(150);
    }
    if (hora == 20) {
      hora = 8;
      setMvdr(240);
      setSanr(90);
      setNyr(180);
    }
    if (hora == 21) {
      hora = 9;
      setMvdr(270);
      setSanr(120);
      setNyr(210);
    }
    if (hora == 22) {
      hora = 10;
      setMvdr(300);
      setSanr(150);
      setNyr(240);
    }
    if (hora == 23) {
      hora = 11;
      setMvdr(330);
      setSanr(180);
      setNyr(270);
    }
    if (hora == 24) {
      hora = 12;
      setMvdr(360);
      setSanr(210);
      setNyr(300);
    }

    const minutos = hoy.getMinutes();
    setMvd(hora + ":" + minutos);
    setNy(hora - 2 + ":" + minutos);
    setSan(hora - 5 + ":" + minutos);
  };

  useEffect(() => {
    const handleScroll = () => {
      const div = document.getElementById("fondo");

      const { y } = div.getBoundingClientRect();
      const dato = y / 100;
      setBack(dato);
      obtener();
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {}, [mvd]);
  return (
    <>
      <div className='bg-[url("/img/mundo.png")] bg-cover h-[50vh] md:h-screen'>
        <h2 className="text-white text-[41.8px] 2xl:text-[63px]  font-bold text-center pt-[100px] md:pt-[197px]">
          {idioma == "ingles" ? " Actions" : "Acciones"}{" "}
          <br className="visible md:hidden"></br>
        </h2>
        <div className="flex justify-center mt-4">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/paito-601ff.appspot.com/o/Curriculum%20developer.pdf?alt=media&token=6262556d-24c6-47b4-9116-19adf27b480a"
            target="_blank"
            className="py-3 rounded-lg text-center bg-[#FC3E3F] hover:bg-black w-64 text-white"
          >
            {idioma == "ingles" ? "Download resume" : "Descargar curriculum"}
          </a>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="https://github.com/Cleberich"
            target="_blank"
            className="py-3 rounded-lg text-center bg-[#FC3E3F] hover:bg-black w-64 text-white"
          >
            {idioma == "ingles" ? "Visit Github" : "Visitar Github"}
          </a>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="https://www.linkedin.com/in/cleber-desarrollador-web/"
            target="_blank"
            className="py-3 rounded-lg bg-[#FC3E3F] text-center hover:bg-black w-64 text-white"
          >
            {idioma == "ingles" ? "  Visit Linkedin" : "Visitar Linkedin"}
          </a>
        </div>
      </div>

      <div
        id="fondo"
        className="h-[100vh] bg-black opacity-80"
        style={{ opacity: back < 8.9 ? back / 10 : 1 }}
      ></div>
    </>
  );
};

export default Working;
