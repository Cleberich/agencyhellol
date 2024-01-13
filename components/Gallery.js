import React from "react";
import { useState } from "react";

const Gallery = () => {
  const [mostrar, setmostrar] = useState("/img2/premio.jpg");

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-[150px] pb-[100px]">
      {" "}
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/7.jpg"
          alt=""
        />
      </div>{" "}
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/8.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/3.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/4.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/6.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/5.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/9.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
