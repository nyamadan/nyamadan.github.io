import React from "react";
import Head from "next/head";
import "../styles/global.css";
import "prismjs/themes/prism-tomorrow.css";

interface Props {
  Component: (pageProps: never) => React.ReactElement | null;
  pageProps: never;
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
