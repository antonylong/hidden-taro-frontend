import React from "react";
import { BsLinkedin } from "react-icons/bs";

const MvpPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-16">
        <h2 className="text-8xl sm:text-4xl px-16 text-center leading-normal font-extrabold">
          Building exceptional product teams
        </h2>
        <p className="text-2xl max-w-2xl pt-4 leading-normal text-center">
          We help ambitious tech companies build pioneering product teams with
          world-class product talent.
        </p>
      </div>

      <div className="flex flex-col space-y-3 absolute bottom-10 min-w-max left-0 right-0 justify-center items-center">
        <p className="text-3xl">Let's have a chat</p>
        <p>hello@hiddentaro.com</p>
        <a
          href="https://uk.linkedin.com/in/kevin-rodriguez-ladino-464648a3"
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
