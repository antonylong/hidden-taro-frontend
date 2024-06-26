import React from "react";

const SubPage = () => {
  const textInfo = [
    // TODO: need to add or reference the icons to the actual icons
    {
      icon: "ClaspHands",
      title: "Exclusive",
      description:
        "We are run by tech professionals who have built and grown amazing products and teams, across multiple sectors world-wide - we're here to help.",
    },
    {
      icon: "Join",
      title: "Project",
      description:
        "We really care about delivering value to companies and talent. If at any point we feel we can't provide that, you'll be the first to know, always.",
    },
    {
      icon: "Heart",
      title: "Contract",
      description:
        "As professionals we have spent years building an incredibly  meaningful and diverse network which we tap into to deliver powerful results, for you.",
    },
    {
      icon: "Fist",
      title: "Extras",
      description:
        "We respect talent. You'll never see us ghost, over-promise, give un-helpful feedback, set unrealistic expectations or waste time. This will never change.",
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
      <div className="flex px-20 pt-10 justify-between">
        {textInfo.map((data) => (
          <div className="px-2 w-56">
            {/* TODO: onHover = line colour should change to purple */}
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

export default SubPage;
