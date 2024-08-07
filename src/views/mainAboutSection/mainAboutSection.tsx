import React from "react";

const MainAboutSection: React.FC = () => {
  return (
    <div className="bg-black flex justify-between flex-col px-36 lg:px-10 pt-24 pb-36">
      <h2 className="text-8xl pb-24 pr-48 pt-28 lg:text-6xl lg:pr-0">
        Thoughtful product experts who care
      </h2>
      <p className="text-2xl font-semibold pb-5">Who we are</p>
      <p className="text-xl lg:text-lg">
        Hidden Taro is a head hunting team specialising in partnering with tech
        companies to provide efficient, accurate and thoughtful hiring for their
        product teams. Our headhunters are tech professionals that leverage
        their existing networks to deliver meticulously-vetted and hard to find
        candidates. Our mission is to meet hiring needs with pin-point accuracy,
        saving companies time and energy while empowering candidates with
        compelling and rewarding career opportunities.
      </p>
    </div>
  );
};

export default MainAboutSection;
