import React from "react";
import { AppProps } from "next/app";
import "~/styles/globals.css";
import { Header, Footer } from "~/components";
import Head from "next/head";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Hidden Taro</title>
        <meta name="Hidden Taro" content="" />
        <link rel="icon" href="./../favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
