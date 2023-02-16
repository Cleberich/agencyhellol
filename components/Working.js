import { useState, useEffect } from "react";
const Working = () => {
  const [back, setBack] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const div = document.getElementById("fondo");

      const { y } = div.getBoundingClientRect();
      const dato = y / 100;
      setBack(dato);
      console.log(dato);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className='bg-[url("/img/mundo.png")] bg-cover h-screen'>
        <h2 className="text-white text-[41.8px] font-bold text-center pt-[197px]">
          Working remotely?
        </h2>
        <p className="text-[22px] text-white mt-[48px] font-[300] text-center leading-10">
          <span className="font-[500]">
            Yes, and we’ve got quite good at it.
          </span>{" "}
          Being based in Uruguay (UTC - 3)<br></br>we can seamlessly integrate
          into your local office hours.
        </p>
        <div className="flex justify-center gap-[89px] mt-[79px]">
          <div>
            <img src="/img/clock.svg" style={{ transform: "rotate(400deg)" }} />
            <h5 className="text-[18.6px] font-[500] text-white mt-[32px]">
              San Francisco, CA
            </h5>
            <p className="text-[18.3px] text-white text-center font-light">
              1:38 PM
            </p>
          </div>
          <div>
            <img
              src="/img/clock.svg"
              style={{ transform: "rotate(496.5deg)" }}
            />
            <h5 className="text-[18.6px] font-[500] text-white mt-[32px]">
              San Francisco, CA
            </h5>
            <p className="text-[18.3px] text-white text-center font-light">
              1:38 PM
            </p>
          </div>
          <div>
            <img src="/img/clock.svg" style={{ transform: "rotate(557deg)" }} />
            <h5 className="text-[18.6px] font-[500] text-white mt-[32px]">
              San Francisco, CA
            </h5>
            <p className="text-[18.3px] text-white text-center font-light">
              1:38 PM
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
