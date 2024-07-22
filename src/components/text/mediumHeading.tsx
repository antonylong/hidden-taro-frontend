import React from "react";

interface MediumHeadingProps {
  text: string;
}

const MediumHeading: React.FC<MediumHeadingProps> = ({ text }) => {
  return <h2 className="text-6xl pb-8 font-bold">{text}</h2>;
};

export default MediumHeading;
