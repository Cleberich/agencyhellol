import "../styles/globals.css";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [paginaLista, setPaginaLista] = useState(false);
  useEffect(() => {
    setPaginaLista(true);
  }, []);
  return paginaLista ? <Component {...pageProps} /> : null;
}
