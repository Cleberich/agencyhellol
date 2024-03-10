import "../styles/globals.css";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [paginaLista, setPaginaLista] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPaginaLista(true);
    }, 100);
  }, []);
  return paginaLista ? (
    <Component {...pageProps} />
  ) : (
    <>
      <div className="h-[100vh] bg-[#101010] flex   justify-center my-auto">
        {" "}
        <div className="flex justify-center   my-auto">
          <img src="/img/sample.gif" className="  " />
        </div>
      </div>
    </>
  );
}
