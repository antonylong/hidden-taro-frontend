import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const GetInTouchButton: React.FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Get In Touch</button>;
};

export default GetInTouchButton;
