import { useState, useEffect } from "react";
const Working = () => {
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
    //  Ny}
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

      // if (hora == 13) {
      //   setMvdr(1);
      // } else if (hora == 14) {
      //   setMvdr(2);
      // } else if (hora == 15) {
      //   setMvdr(3);
      // } else if (hora == 16) {
      //   setMvdr(4);
      // } else if (hora == 17) {
      //   setMvdr(5);
      // } else if (hora == 18) {
      //   setMvdr(6);
      // } else if (hora == 19) {
      //   setMvdr(7);
      // } else if (hora == 20) {
      //   setMvdr(240);
      // } else if (hora == 11) {
      //   setMvdr(9);
      // } else if (hora == 22) {
      //   setMvdr(10);
      // } else if (hora == 23) {
      //   setMvdr(11);
      // } else if (hora == 24) {
      //   setMvdr(350);
      // }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {}, [mvd]);
  return (
    <>
      <div className='bg-[url("/img/mundo.png")] bg-cover h-[200vh] md:h-screen'>
        <h2 className="text-white text-[41.8px] 2xl:text-[63px]  font-bold text-center pt-[100px] md:pt-[197px]">
          Working <br className="visible md:hidden"></br>remotely?
        </h2>
        <p className="text-[22px] 2xl:text-[33px]  text-white mt-[48px] font-[300] text-center leading-10">
          <span className="font-[500]">
            Yes, and we’ve got quite good at it.
          </span>{" "}
          Being based in Uruguay (UTC - 3)<br></br>we can seamlessly integrate
          into your local office hours.
        </p>
        <div className="flex justify-center gap-[89px] mt-[79px] reloj">
          <div>
            <img
              src="/img/clock.svg"
              style={{ transform: `rotate(${sanr}deg)` }}
            />
            <h5 className="text-[18.6px] font-[500] text-white mt-[32px]">
              San Francisco, CA
            </h5>
            <p className="text-[18.3px] text-white text-center font-light">
              {san}
            </p>
          </div>
          <div>
            <img
              src="/img/clock.svg"
              style={{ transform: `rotate(${nyr}deg)` }}
            />
            <h5 className="text-[18.6px] font-[500] text-white mt-[32px]">
              New York, NY
            </h5>
            <p className="text-[18.3px] text-white text-center font-light">
              {ny}
            </p>
          </div>
          <div>
            <img
              src="/img/clock.svg"
              style={{ transform: `rotate(${mvdr}deg)` }}
            />
            <h5 className="text-[18.6px] font-[500] text-white mt-[32px]">
              Montevideo, UY
            </h5>
            <p className="text-[18.3px] text-white text-center font-light">
              {mvd}
            </p>
          </div>
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
