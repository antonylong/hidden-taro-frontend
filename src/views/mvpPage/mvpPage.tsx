import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BigHeading, SubHeading } from "~/components";

const MvpPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-16">
        <BigHeading text="Building exceptional products & teams" />
        <SubHeading
          text="We help ambitious startups in the creative industries build pioneering digital products and
          world-class product talent."
        />
      </div>

      <div className="flex flex-col space-y-3 pb-20 sm:pb-10 sm min-w-max left-0 right-0 justify-center items-center">
        <p className="text-lg bg-green-400 text-black px-12 py-8 font-light mb-7 sm:text-sm sm:px-8 sm:py-4">
          OUR WEBSITE IS ALMOST THERE...
        </p>
        <p className="text-3xl">Let's have a chat</p>
        <p>hello@hiddentaro.com</p>
        <a
          href="https://www.linkedin.com/company/hidden-taro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </>
  );
};

export default MvpPage;
