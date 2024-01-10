import React from "react";
import { useState } from "react";

const Gallery = () => {
  const [mostrar, setmostrar] = useState("/img2/premio.jpg");

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-[150px]">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/premio.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/evento.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/pde.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/reunion.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/reunion.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/img2/reunion.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
