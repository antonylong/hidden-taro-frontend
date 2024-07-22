import React from "react";
import { BsLinkedin } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-white px-10 pb-5">
      <div className="flex lg:flex-none lg:flex-col">
        <div className="flex">
          {/* <p className="pr-5">Terms</p> */}
          <p>Terms & conditions available on request</p>
        </div>
        <p className="absolute lg:relative left-0 right-0">
          © 2024 | Hidden Taro
        </p>
        <a
          href="https://www.linkedin.com/company/hidden-taro"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden absolute right-5"
        >
          <BsLinkedin className="mt-1" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
