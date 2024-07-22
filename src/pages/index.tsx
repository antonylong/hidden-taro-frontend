import type { NextPage } from "next";
import Head from "next/head";

import {
  ContactPage,
  FourthPage,
  LandingPage,
  SubPage,
  ThirdPage,
} from "~/views";

const HomePage: NextPage = () => {
  const MainPage = () => (
    <>
      <LandingPage />
      <SubPage />
      <ThirdPage />
      <FourthPage />
      <ContactPage />
    </>
  );

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
      <main className="flex min-h-screen flex-col w-full">
        <MainPage />
      </main>
    </>
  );
};

export default HomePage;
