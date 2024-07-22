import React from "react";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return <p className="text-lg text-center px-36 font-light lg:px-0">{text}</p>;
};

export default Paragraph;
