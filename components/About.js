const About = ({ animacion1, animacion2 }) => {
  return (
    <div
      className="px-8 md:px-[120px] pt-44 bg-[#101010] pb-[40px] z-40"
      id="about"
    >
      <h2 className="text-[9px] font-bold uppercase  text-[#fa3636]" id="weare">
        about us
      </h2>
      <h2
        className={
          animacion1
            ? " text-white text-[29px] md:text-[44.4px] font-light mt-[37px] fade-in-bottom"
            : "text-transparent text-[28px] md:text-[44.4px] font-light mt-[37px] "
        }
      >
        We believe in the greater good, we believe in doing things for the
        people, we believe in making their lives easier and more enjoyable, we
        believe in businesses that keep that in mind and we help them grow, by
        making beautifully designed digital experiences, simple to use and user
        friendly.
      </h2>
      <h2
        id="whatwedo"
        className={
          animacion2
            ? "text-[29px] md:text-[44.4px] text-white font-[650] mt-[118px] fade-in-bottom"
            : "text-[29px] md:text-[44.4px] text-transparent font-[650] mt-[118px]"
        }
      >
        We are ++hellohello.
      </h2>
      <h2
        className={
          animacion2
            ? "text-[29px] md:text-[44.4px] text-[#fe3e3e] font-[300] mt-[20px] fade-in-bottom"
            : "text-[29px] md:text-[44.4px] text-transparent font-[300] mt-[20px] "
        }
      >
        We design for the people.
      </h2>
      <hr className="bg-white px-[120px] mt-[90px] md:mt-[172px]"></hr>
    </div>
  );
};

export default About;
