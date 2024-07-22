import Image from "next/image";
import React from "react";
import { MediumHeading, MediumSubHeading } from "~/components";
import GetInTouchButton from "~/components/button/getInTouchButton";

const ValuesSection: React.FC = () => {
  const textInfo = [
    {
      title: "Looking at the big picture",
      description:
        "Just ticking boxes is far from our goal when finding talented people. We want to understand what drives them, how they think, who they want to be, what their career goals look like and so much more.",
    },
    {
      title: "Snappy communication",
      description:
        "Whether it's a shared Slack channel, WhatsApp, email, video call, pigeon - we will make it work. You will never have to chase us or sit through weeks of silence because frankly, we hate that too.",
    },
    {
      title: "Your trusted advisor",
      description:
        "We have developed product teams and launched cool products to market. So in short - we get it. We understand the nuances of being in a product team and bring that experience to the table, guiding you towards your hiring goals.",
    },
    {
      title: "No stone unturned",
      description:
        "Being creative is something we are pretty good at. When it comes to finding your next product manager we search far and wide from using word-of-mouth, social media, in-person events, job boards and more as tools in our arsenal.",
    },
    {
      title: "Let's be nice",
      description:
        "Delivering a great experience for talented people looking for work is important to us. We refuse to let these people down and work hard to focus on coaching, delivering helpful feedback, keeping them in the loop and being more human.",
    },
    {
      title: "We don't mess around",
      description:
        "Feedback is important, even the bad stuff. Thats why we aim to be transparent and pragmatic, so if for any reason things aren't working, then we will tell you promptly and honestly. We prefer to fail-fast than to waste any precious time.",
    },
    {
      title: "Coaches, above all",
      description:
        "Over the years, we have grown a pool of product managers that we mentor, giving them constructive advice, unblocking them, hearing them out and also setting them up as amazing candidates for the future.",
    },
    {
      title: "Less is more",
      description:
        "We prioritise long-lasting partnerships over being a factory so we usually work with 2-3 clients at a time. Quality, relationships and detail matters to us greatly and that means staying focused.",
    },
  ];
  return (
    <div className="bg-backgroundGrey text-black flex justify-between flex-col px-36 pt-48 pb-20 text-center">
      <MediumHeading text="How we get things done" />
      <p className="text-xl font-light px-24">
        We've been burned before as product candidates and hiring managers, so
        we created a methodology that we think is fair, transparent, easy to
        work with and meaningful.
      </p>
      <Image
        src="/icons/Plane-Black-Left.png"
        alt="Black icon plane"
        width={120}
        height={120}
        className="absolute right-28"
      />
      <div className="grid grid-cols-2 gap-4 pt-20 text-start">
        {textInfo.map((data) => (
          <div className="pb-10" key={data.title}>
            <p className="text-l pb-1">{data.title}</p>
            <p className="text-sm font-light">{data.description}</p>
          </div>
        ))}
      </div>
      <div className="pt-20 flex flex-col items-center justify-center">
        <button className="bg-white text-black border-2 border-solid border-black rounded-xl h-16 px-16">
          <p>Get In Touch</p>
        </button>
      </div>
    </div>
  );
};

export default ValuesSection;
