import React from "react";
import { AppProps } from "next/app";
import "~/styles/globals.css";
import { Header, Footer } from "~/components";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
