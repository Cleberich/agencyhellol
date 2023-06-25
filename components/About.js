const About = ({ animacion1, animacion2, idioma }) => {
  return (
    <div className="px-8 md:px-[120px] 2xl:px-[177px] pt-44 2xl:pt-[287px] bg-[#0F121C] pb-[40px] z-40">
      <h2
        className="text-[9px] 2xl:text-[12px] font-bold uppercase  text-[#fa3636]"
        id="weare"
      >
        {idioma == "ingles" ? "about me" : "sobre mi"}
      </h2>
      <h2
        className={
          animacion1
            ? " text-white text-[29px] md:text-[44.4px] xl:text-[50px] 2xl:text-[66px] font-light mt-[37px] 2xl:leading-[108px] fade-in-bottom"
            : "text-transparent text-[28px] md:text-[44.4px] xl:text-[50px] font-light mt-[37px] "
        }
      >
        {idioma == "ingles"
          ? "  I am  developer with experience in JavaScript, and I have expertise in frameworks React. I am a quick learner who adapts to the project and focuses on optimizing it using best practices, all while evolving as a developer in the process."
          : "Soy desarrollador con experiencia en JavaScript, y tengo experiencia en frameworks React. Aprendo rápido, me adapto al proyecto y me enfoco en optimizarlo usando las mejores prácticas, todo mientras evoluciono como desarrollador en el proceso."}
      </h2>
      <h2
        id="whatwedo"
        className={
          animacion2
            ? "text-[29px] md:text-[44.4px] xl:text-[50px] 2xl:text-[66.6px] text-white font-[650] mt-[118px] fade-in-bottom"
            : "text-[29px] md:text-[44.4px] xl:text-[50px] 2xl:text-[66.6px]text-transparent font-[650] mt-[118px]"
        }
      >
        {idioma == "ingles"
          ? " I like to develop user interfaces"
          : "Me gusta desarrollar interfaces de usuario"}
      </h2>
      <h2
        className={
          animacion2
            ? "text-[29px] md:text-[44.4px] xl:text-[50px] 2xl:text-[66.6px] text-[#fe3e3e] font-[300] mt-[20px] fade-in-bottom"
            : "text-[29px] md:text-[44.4px] xl:text-[50px] 2xl:text-[66.6px] text-transparent font-[300] mt-[20px] "
        }
      >
        {idioma == "ingles"
          ? "Websites with great user experience"
          : "Sitios web con gran experiencia de usuario"}
      </h2>
      <hr className="bg-white px-[120px] mt-[90px] md:mt-[172px]"></hr>
    </div>
  );
};

export default About;
