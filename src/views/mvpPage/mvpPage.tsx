import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BigHeading, SubHeading } from "~/components";

const MvpPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-16">
        <BigHeading text="Building exceptional product teams" />
        <SubHeading
          text="We help ambitious tech companies build pioneering product teams with
          world-class product talent."
        />
      </div>

      <div className="flex flex-col space-y-3 absolute bottom-20 sm:bottom-5 min-w-max left-0 right-0 justify-center items-center">
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
