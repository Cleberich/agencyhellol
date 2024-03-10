import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/img3/cleberdavila.svg" sizes="any" />
        <title>Cleber Davila - Tasaciones profesionales</title>
        <meta
          name="description"
          content="Inversiones inmobiliarias - Tasaciones profesionales "
        />
      </Head>
      <body className="">
        <Main />
        <NextScript />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
      </body>
    </Html>
  );
}
