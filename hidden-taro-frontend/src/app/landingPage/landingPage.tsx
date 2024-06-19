import React from "react";

const LandingPage = () => {
  const textInfo = [
    // TODO: need to add or reference the icons to the actual icons
    {
      icon: "Brain",
      title: "Seasoned tech pros",
      description:
        "We are run by tech professionals who have built and grown amazing products and teams, across multiple sectors world-wide - we're here to help.",
    },
    {
      icon: "Timer",
      title: "Time is precious",
      description:
        "We really care about delivering value to companies and talent. If at any point we feel we can't provide that, you'll be the first to know, always.",
    },
    {
      icon: "People",
      title: "Existing tech network",
      description:
        "As professionals we have spent years building an incredibly  meaningful and diverse network which we tap into to deliver powerful results, for you.",
    },
    {
      icon: "Handshake",
      title: "We play fair with talent",
      description:
        "We respect talent. You'll never see us ghost, over-promise, give un-helpful feedback, set unrealistic expectations or waste time. This will never change.",
    },
    {
      icon: "Bicep",
      title: "We do so much more",
      description:
        "From building your case study to running technical interviews for you. We help you with a broad range of needs, leveraging our experience in every way we can.",
    },
  ];

  return (
    <>
      <div className="flex justify-between flex-col px-36 mt-24">
        <h2 className="text-8xl pb-8">Building exceptional product teams</h2>
        <p className="text-lg max-w-xl">
          We help ambitious tech companies build pioneering product teams with
          world-class product talent.
        </p>
      </div>
      <div className="flex px-20 pt-10 justify-between justify-center ju">
        {textInfo.map((data) => (
          <div className="px-2 w-56">
            <hr />
            {/* <image>{data.icon}</image> */}
            <p className="text-lg py-5">{data.title}</p>
            <p className="text-xs">{data.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
