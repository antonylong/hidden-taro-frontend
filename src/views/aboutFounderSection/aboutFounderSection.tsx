import React from "react";
import { BsLinkedin } from "react-icons/bs";

const AboutFounderSection: React.FC = () => {
  return (
    <div className="bg-white text-black flex justify-between flex-col px-36 mt-24 py-28">
      <h1 className="text-2xl font-semibold pb-5">Our Founder</h1>
      <div className="flex">
        <p className="text-2xl font-semibold pr-5 pb-5 text-hiddenPurple">
          Kevin Rodriguez Ladino
        </p>
        <a
          href="https://www.linkedin.com/company/hidden-taro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="mt-2" />
        </a>
      </div>
      <p className="text-xl">
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

export default AboutFounderSection;
