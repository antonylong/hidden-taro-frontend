import React from "react";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return (
    <p className="text-lg text-center font-light px-64 lg:px-0 lg:px-0 lg:w-auto">
      {text}
    </p>
  );
};

export default Paragraph;
