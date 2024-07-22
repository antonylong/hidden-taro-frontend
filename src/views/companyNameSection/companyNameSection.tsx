import Image from "next/image";
import React from "react";

const CompanyNameSection: React.FC = () => {
  return (
    <>
      <Image
        src="/icons/Plane-Black-Left.png"
        alt="Black icon plane"
        width={120}
        height={120}
        className="absolute right-12 mt-12 lg:hidden"
      />
      <div className="bg-backgroundGrey text-black flex justify-between flex-col px-36 lg:px-10 py-28">
        <h1 className="text-2xl font-semibold pb-10">Our Name</h1>
        <p className="text-xl">
          Believe it or not, Taro is a root vegetable. Some of you may know it
          as a bubble tea flavour, a deep fried snack, a part of a stewed meal
          or even as a cake flavour - we think it's pretty cool. Taro grows deep
          underground, spending months developing tonnes of flavour and
          nutrients, hidden away from the world except for its green leaves
          above ground. Do you see where we are going with this? We see it as
          our responsibility to find the "hidden taros" of the world, and felt
          that the name perfectly matched who we are.
        </p>
      </div>
    </>
  );
};

export default CompanyNameSection;
