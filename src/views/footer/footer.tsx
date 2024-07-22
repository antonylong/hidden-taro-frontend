import React from "react";
import { BsLinkedin } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-white px-10 pb-5">
      <div className="flex justify-between">
        <div className="">
          <p className="pr-5">Terms</p>
          <p>Privacy</p>
        </div>
        <p className="left-0 right-0">
          © 2024 Hidden Taro. All Rights Reserved
        </p>
        <a
          href="https://www.linkedin.com/company/hidden-taro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="mt-4"></div>
    </footer>
  );
};

export default Footer;
