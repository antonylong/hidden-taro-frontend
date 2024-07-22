import Link from "next/link";
import React from "react";

const Header = () => {
  // TODO: update the company title to be Kevin's title
  return (
    <header className="flex justify-between pb-90 px-16 sm:px-10 bg-black pt-10">
      <Link href="/">
        <h1 className="text-3xl sm:text-lg">Hidden Taro</h1>
      </Link>
      <div className="flex w-800 justify-between">
        <Link href="/about" className="pr-10">
          About
        </Link>
        {/* TODO: contact brings to bottom */}
        <p>Contact</p>
      </div>
    </header>
  );
};

export default Header;
