import Image from "next/image";
import React from "react";

import { FaRegHandshake } from "react-icons/fa6";
import { GiBiceps, GiBrain } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { PiClockClockwiseBold } from "react-icons/pi";

const LandingPage: React.FC = () => {
  const textInfo = [
    {
      icon: <GiBrain size={24} />,
      title: "Seasoned tech pros",
      description:
        "We are run by tech professionals who have built and grown amazing products and teams, across multiple sectors world-wide - we're here to help.",
    },
    {
      icon: <PiClockClockwiseBold size={24} />,
      title: "Time is precious",
      description:
        "We really care about delivering value to companies and talent. If at any point we feel we can't provide that, you'll be the first to know, always.",
    },
    {
      icon: <IoIosPeople size={24} />,
      title: "Existing tech network",
      description:
        "As professionals we have spent years building an incredibly  meaningful and diverse network which we tap into to deliver powerful results, for you.",
    },
    {
      icon: <FaRegHandshake size={24} />,
      title: "We play fair with talent",
      description:
        "We respect talent. You'll never see us ghost, over-promise, give un-helpful feedback, set unrealistic expectations or waste time. This will never change.",
    },
    {
      icon: <GiBiceps size={24} />,
      title: "We do so much more",
      description:
        "From building your case study to running technical interviews for you. We help you with a broad range of needs, leveraging our experience in every way we can.",
    },
  ];

  return (
    <div className="flex justify-between flex-col mt-24">
      <div className="flex px-36 py-28">
        <div>
          <h2 className="text-8xl pb-12 max-w-6xl lg:text-6xl">
            Building exceptional product teams
          </h2>
          <p className="text-lg max-w-xl">
            We help ambitious tech companies build pioneering product teams with
            world-class product talent.
          </p>
        </div>
        <Image
          src="/icons/Plane-White-Right.png"
          alt="white paper plane icon pointing right"
          width={200}
          height={200}
          className="absolute right-20 mt-5 rotate-12 lg:hidden"
        />
      </div>

      <div className="flex px-20 pt-</div>10 pb-40 justify-between">
        {textInfo.map((data) => (
          <div className="px-2 w-56 hover-line-color-change" key={data.title}>
            <hr className="h-[4px]" />
            <div className="pt-12">{data.icon}</div>
            <p className="text-lg pb-5 pt-3">{data.title}</p>
            <p className="text-sm font-light">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
