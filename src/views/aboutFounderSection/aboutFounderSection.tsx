import Image from "next/image";
import React from "react";
import { BsLinkedin } from "react-icons/bs";

const AboutFounderSection: React.FC = () => {
  return (
    <div className="bg-white text-black flex justify-between gap-28 px-36 py-28">
      <div className="flex-col">
        <h1 className="text-2xl pb-5">Our Founder</h1>
        <div className="flex">
          <p className="text-4xl font-light pr-5 pb-6 text-hiddenPurple">
            Kevin Rodriguez Ladino
          </p>
          <a
            href="https://www.linkedin.com/in/kevin-rodriguez-ladino-464648a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="w-[34px] h-[34px]" />
          </a>
        </div>
        <p className="text-xl">
          Having spent years working in tech, Kevin has launched all kinds of
          products to market, all the while building and coaching
          high-performing product teams.
          <br />
          <br />
          With a great curiosity and a need to solve a problem Kevin launched
          Hidden Taro to help founders, teams and leaders find awesome people
          and create meaningful impact in the product community.
        </p>
      </div>
      <div>
        <Image
          src="/images/kevin-portrait.jpg"
          width={720}
          height={720}
          alt="Portrait of the founder smiling"
          className="mt-10"
        />
      </div>
    </div>
  );
};

export default AboutFounderSection;
