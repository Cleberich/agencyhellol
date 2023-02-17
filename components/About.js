const About = ({ animacion1, animacion2 }) => {
  return (
    <div className="px-8 md:px-[120px] xl:px-[177px] pt-44 xl:pt-[287px] bg-[#101010] pb-[40px] z-40">
      <h2
        className="text-[9px] xl:text-[12px] font-bold uppercase  text-[#fa3636]"
        id="weare"
      >
        about us
      </h2>
      <h2
        className={
          animacion1
            ? " text-white text-[29px] md:text-[44.4px] xl:text-[66px] font-light mt-[37px] xl:leading-[108px] fade-in-bottom"
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
            ? "text-[29px] md:text-[44.4px] xl:text-[66.6px] text-white font-[650] mt-[118px] fade-in-bottom"
            : "text-[29px] md:text-[44.4px]  xl:text-[66.6px]text-transparent font-[650] mt-[118px]"
        }
      >
        We are ++hellohello.
      </h2>
      <h2
        className={
          animacion2
            ? "text-[29px] md:text-[44.4px] xl:text-[66.6px] text-[#fe3e3e] font-[300] mt-[20px] fade-in-bottom"
            : "text-[29px] md:text-[44.4px] xl:text-[66.6px] text-transparent font-[300] mt-[20px] "
        }
      >
        We design for the people.
      </h2>
      <hr className="bg-white px-[120px] mt-[90px] md:mt-[172px]"></hr>
    </div>
  );
};

export default About;
