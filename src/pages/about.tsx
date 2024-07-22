import type { NextPage } from "next";
import React from "react";

const AboutPage: NextPage = () => {
  return (
    <main>
      <div className="flex justify-between flex-col px-36 mt-24 py-28">
        <h2 className="text-8xl pb-12">Thoughtful product experts who care</h2>
        <p className="text-2xl font-semibold">Who we are</p>
        <p className="text-lg max-w-xl">
          Hidden Taro is a head hunting team specialising in partnering with
          tech companies to provide efficient, accurate and thoughtful hiring
          for their product teams. Our headhunters are tech professionals that
          leverage their existing networks to deliver meticulously-vetted and
          hard to find candidates. Our mission is to meet hiring needs with
          pin-point accuracy, saving companies time and energy while empowering
          candidates with compelling and rewarding career opportunities.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
