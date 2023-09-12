import Head from "next/head";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function index2() {
  const [modal, setmodal] = useState(false);
  return (
    <>
      {" "}
      <Head>
        <title>Cleber Davila Agente Inmobiliario</title>
        <meta name="description" content="Cleber Davila agente inmobiliario" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {modal && <Modal setmodal={setmodal} />}
      <div className="">
        <div className="flex justify-start md:justify-center bg-red-600 p-3 md:p-6 rounded-b-[30px] gap-4">
          <img
            src="/img/cleber.jpg"
            alt="Cleber agente inmobiliario"
            className="rounded-full w-16 h-16 md:w-32 md:h-32"
          />
          <div className="flex flex-col md:hidden">
            <h2 className="font-bold text-xl mt-2 text-white">Cleber Davila</h2>
            <h2 className="font-regular text-md -mt-1 text-white">
              Agente inmobiliario
            </h2>
          </div>
        </div>
        <div>
          <h1 className="text-center mx-6 text-2xl lg:text-5xl font-regular my-4">
            Conocé el{" "}
            <span className="font-bold text-red-600">
              Mejor Valor de VENTA{" "}
            </span>
            de tu Propiedad
          </h1>
          <h2 className="font-bold text-black text-md mx-6 md:text-2xl text-center">
            Que te Permita Vender en 2 meses o antes a través de un Informe de
            Tasación Profesional SIN COSTO 🤩
          </h2>
        </div>
        <main className="flex flex-col md:grid md:grid-cols-2 py-12">
          <div>
            <video
              src="/img/video.mp4"
              className="w-[90%] mx-auto rounded-md"
              autoPlay
              onCanPlay
              loop
            ></video>
          </div>
          <div>
            {" "}
            <h3 className="text-left text-2xl font-semibold my-4 mx-4">
              ¿Qué incluye un informe de tasación profesional?
            </h3>
            <h4 className="my-6 mx-4">
              ✅ Datos de tu barrio y del mercado: Recibí información CLAVE que
              te va a permitir entender la situación inmobiliaria actual de tu
              barrio, cuál es un buen valor de venta y por qué.
            </h4>
            <h4 className="my-6 mx-4">
              ✅ Propiedades con las que competís: Para Tasar investigo a fondo
              las propiedades que compiten con vos y te coloco los links en el
              informe para que las puedas revisar.
            </h4>
            <h4 className="my-6 mx-4">
              ✅ Metodología de Comparables: Este proceso de tasación lo llevo a
              cabo por el método de comparables que es el más confiable y
              efectivo para vender al mejor valor.
            </h4>
            <h5 className="mx-4">
              Y lo mejor, conmigo, el Informe de Tasación no tiene costo.
            </h5>
            <div className="mt-12 mx-4">
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-center rounded-full py-2 px-3 w-full "
                onClick={() => setmodal(true)}
              >
                Solicitar Tasación
              </button>
            </div>
          </div>
        </main>
        <section className="bg-[#181818] py-12 ">
          <h2 className="font-bold text-white text-2xl text-center mx-4">
            ¿Por qué mis clientes logran vender su propiedad en 2 meses o antes?
          </h2>
          <main className="flex gap-3 flex-col md:flex-row mx-auto justify-center py-12">
            <div className="bg-white shadow-lg p-4 rounded-lg w-full">
              <img
                src="/img/grafico.png"
                alt="dinero"
                className="w-52 h-auto mx-auto"
              />
              <h4 className="font-bold text-left">El valor real</h4>
              <h5>
                Los precios que arrojan las Calculadoras son IRREALES porque NO
                toman en consideración todas las variables de una verdadera
                tasación. Y además, trabajan sobre promedios de valores de
                propiedades que NO se venden y con +12 meses en el mercado.
              </h5>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg w-full">
              <img
                src="/img/difusion.png"
                alt="dinero"
                className="w-52 h-auto mx-auto"
              />
              <h4 className="font-bold text-left">La máxima difusión</h4>
              <h5>
                Tu propiedad debe aparecer dónde están (redes sociales, Google y
                YouTube) y dónde buscan (portales) los potenciales compradores.
                Tu propiedad necesita una estrategia PROACTIVA que incluya
                Embudos Inmobiliarios y Campañas Publicitarias de PAGO.
              </h5>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg w-full">
              <img
                src="/img/seguimineto.png"
                alt="dinero"
                className="w-52 h-auto mx-auto"
              />
              <h4 className="font-bold text-left">Seguimiento efectivo</h4>
              <h5>
                Recibirás cada 15 días un informe con: 1) La evolución de la
                venta. 2) Cómo responde el mercado a tu propiedad para ajustar
                primero la estrategia y no solamente el valor. 3) Reportes con
                ficha de visitas para saber qué dicen los potenciales
                compradores.
              </h5>
            </div>
          </main>
        </section>
        <main className="bg-red-600 pb-12 ">
          {" "}
          <h2 className="font-bold text-white text-2xl text-center py-12">
            ¿Cuáles son los Pasos 🤝 para un Informe de Tasación Profesional
            Exitoso?
          </h2>
          <div className="bg-white w-[90%] mx-auto rounded-xl  flex flex-col md:flex-row gap-5 p-4 ">
            <div>
              <img
                src="/img/cleee.jpg"
                alt="cleber davila"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h5 className="font-bold">Paso 1️⃣: Visita a Tu Propiedad</h5>
              <p className="mb-6">
                Para relevar los datos técnicos, evaluar fortalezas de tu
                propiedad y conversar sobre tus objetivos.
              </p>
              <h5 className="font-bold">
                Paso 2️⃣: Elaboración del Informe de Tasación
              </h5>
              <p className="mb-6">
                El análisis contiene, información y métricas clave de tu barrio
                y del mercado, propiedades con las que competís, el ⚠️ valor
                máximo, ⭕️ valor de publicación y ✅ valor de venta.
              </p>
              <h5 className="font-bold">Paso 3️⃣: Presentación del Informe</h5>
              <p className="mb-6">
                Al final, te presentaré el informe para que podamos revisar los
                comparables, los valores, la estrategia comercial y el plan de
                marketing específico (máxima difusión) para tu propiedad.
              </p>
              <h2 className="font-bold">Y lo más importante...</h2>
              <h3 className="my-1">
                ⚠️ Valor Máximo: Que es el valor de venta más alto pero al que
                el mercado respondería favorablemente.
              </h3>
              <h3 className="my-1">
                ⭕️ Valor de Publicación: Este es el valor recomendado para
                vender en menos 2 meses.
              </h3>
              <h3 className="my-1">
                ✅ Valor de Venta: Que es el valor de venta en base a
                propiedades vendidas en la zona recientemente.
              </h3>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
