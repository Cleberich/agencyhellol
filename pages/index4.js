import { useState } from "react";

export default function index4() {
  const [nombre, setnombre] = useState("Juan");
  const [copiado, setCopiado] = useState(false);

  const copiarTexto1 = async () => {
    await navigator.clipboard
      .writeText(`Hola ${nombre} cómo estas? un gusto saludarte 
Cleber es mi nombre y te estoy contactando por la propiedad que tenes publicada en mercadolibre, te comento ${nombre} nosotros somos tienda oficial lo cual significa que tenemos un gran alcance por ser una inmobiliaria verificada y aprobada por Mercadolibre
${nombre} estoy interesado en poder hacer uso de esa y otras herramientas para poder conseguir alquilar tu propiedad lo antes posible.`);
    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };
  const copiarTexto2 = async () => {
    await navigator.clipboard.writeText(
      `Te comento un poco cómo trabajamos: Usamos fotos y videos propios, seguramente te habrá pasado con algún colega que hacen captura a tus fotos de mercadolibre y ya se ponen a publicarlo por todos lados y eso no es profesional. También nos gusta tener una instancia en la cual nos podamos ver cara a cara, es clave para poder hacer negocios ver quien está del otro lado no te parece?`
    );
    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };
  const copiarTexto3 = async () => {
    await navigator.clipboard.writeText(
      `Nosotros cómo política de empresa trabajamos en base a resultados lo cual significa que nuestros honorarios son de un mes de alquiler + IVA que *SOLO* abonas en caso de que alquilemos tu propiedad, estas de acuerdo en poder trabajar con profesionales?`
    );
    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };
  const copiarTexto4 = async () => {
    await navigator.clipboard.writeText(`  Sitio web www.keymex.com.uy 
Ubicación: Andres Puyol 1645,
Carrasco`);
    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };
  return (
    <div className="bg-red-900 h-screen text-white">
      {" "}
      <form>
        <input
          type="text"
          placeholder="Ingresa el nombre del cliente"
          className="mx-8 my-4 rounded-md placeholder:text-xs bg-gray-800 w-[calc(100%-4rem)]"
          onChange={(e) => setnombre(e.target.value)}
        />
      </form>
      <div className="flex ">
        <button onClick={() => copiarTexto1()} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
            />
          </svg>
        </button>
        <h2 className="mx-8 my-2 text-sm font-light" id="primerTexto">
          Hola {nombre} cómo estas? un gusto saludarte Cleber es mi nombre y te
          estoy contactando por la propiedad que tenes publicada en
          mercadolibre, te comento {nombre} nosotros somos tienda oficial lo
          cual significa que tenemos un gran alcance por ser una inmobiliaria
          verificada y aprobada por Mercadolibre
          {nombre} estoy interesado en poder hacer uso de esa y otras
          herramientas para poder conseguir alquilar tu propiedad lo antes
          posible.
        </h2>
      </div>
      <div className="flex ">
        <button onClick={() => copiarTexto2()} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
            />
          </svg>
        </button>
        <h2 className="mx-8 my-4 text-sm font-light">
          Te comento un poco cómo trabajamos: Usamos fotos y videos propios,
          seguramente te habrá pasado con algún colega que hacen captura a tus
          fotos de mercadolibre y ya se ponen a publicarlo por todos lados y eso
          no es profesional. También nos gusta tener una instancia en la cual
          nos podamos ver cara a cara, es clave para poder hacer negocios ver
          quien está del otro lado no te parece?
        </h2>
      </div>
      <div className="flex ">
        <button onClick={() => copiarTexto3()} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
            />
          </svg>
        </button>
        <h2 className="mx-8 my-4 text-sm font-light">
          Nosotros cómo política de empresa trabajamos en base a resultados lo
          cual significa que nuestros honorarios son de un mes de alquiler + IVA
          que *SOLO* abonas en caso de que alquilemos tu propiedad, estas de
          acuerdo en poder trabajar con profesionales?
        </h2>
      </div>
      <div className="flex ">
        <button onClick={() => copiarTexto4()} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
            />
          </svg>
        </button>
        <h2 className="mx-8 my-4 text-sm font-light">
          Sitio web www.keymex.com.uy Ubicación: Andres Puyol 1645, Carrasco
        </h2>
      </div>
      {copiado && (
        <div className="bg-green-700 flex justify-center mx-8 w-[calc(100% - 4rem)] rounded-sm py-2">
          <h2>Copiado correctamente</h2>
        </div>
      )}
    </div>
  );
}
