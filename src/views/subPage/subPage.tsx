import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { GiFist } from "react-icons/gi";
import { MdDiversity3 } from "react-icons/md";
import { PiHandHeartFill } from "react-icons/pi";
import { MediumHeading, MediumSubHeading } from "~/components";
import GetInTouchButton from "~/components/button/getInTouchButton";

const SubPage: React.FC = () => {
  const textInfo = [
    {
      icon: <FaHandsHelping size={28} />,
      title: "Exclusive",
      description:
        "Your exclusive head-hunting partner, dedicated to an in-depth, thoughtful and targeted search. By leveraging our product experience and taking the time to thoroughly understand your business and the nuances of a role we are able to deliver exceptional, hard to find candidates.",
    },
    {
      icon: <MdDiversity3 size={28} />,
      title: "Project",
      description:
        "A multiple role approach that allows you to streamline your various hiring needs exclusively with a dedicated and experienced product head-hunter. Although this option is cost effective, because of our product expertise you are guaranteed consistent high quality results.",
    },
    {
      icon: <PiHandHeartFill size={28} />,
      title: "Contract",
      description: `Efficient and flexible hiring solutions for short-term needs. We offer "ready to go" product managers who can seamlessly integrate into your projects, providing immediate expertise and impact.`,
    },
    {
      icon: <GiFist size={28} />,
      title: "Extras",
      description:
        "We create high-quality case studies that simulate real challenges your product teams encounter. We also conduct product sense interviews with your candidates on your behalf. We summerise our observations into a report, send you the recordings and have a in-depth chat with you to debrief.",
    },
  ];

  return (
    <div className="bg-white text-black pb-20">
      <div className="flex justify-between flex-col px-36 pt-48 text-center">
        <MediumHeading text="Tailored solutions for you" />
        <MediumSubHeading
          text="We believe in creating meaningful partnerships, not just being a
          resume machine. Working exclusively fosters deeper collaboration and
          delivers better results."
        />
      </div>
      <div className="flex px-20 pt-24 justify-between">
        {textInfo.map((data) => (
          <div className="px-2 w-72 hover-title-color-change" key={data.title}>
            <div>{data.icon}</div>
            <p className="text-xl py-3">{data.title}</p>
            <p className="text-sm font-light">{data.description}</p>
          </div>
        ))}
      </div>
      <div className="pt-20 flex flex-col items-center justify-center">
        <button className="bg-white text-black border-2 border-solid border-black rounded-xl h-16 px-16">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default SubPage;
