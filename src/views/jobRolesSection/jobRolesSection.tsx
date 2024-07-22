import Link from "next/link";
import React from "react";
import { MediumHeading, MediumSubHeading } from "~/components";

const JobRolesSection: React.FC = () => {
  const jobRoles = [
    "Product Leadership",
    "Product Manager",
    "Product Owner",
    "Data Product Manager",
    "Product Marketing Manager",
    "Growth Product Manager",
    "Product Operations Manager",
    "Technical Product Manager",
  ];
  return (
    <div className="bg-black text-white flex justify-between flex-col px-36 lg:px-10 pt-48 pb-20 text-center">
      <MediumHeading text="Where we do our best work" />
      <MediumSubHeading text="Our deep sector experience allows us to help you with a range of product roles of all seniority levels from Associate all the way to CPO." />
      <div className="flex flex-wrap row pt-12 px-10 gap-x-14 gap-y-5 justify-center">
        {jobRoles.map((title) => (
          <p className="text-4xl m-2" key={title}>
            {title}
          </p>
        ))}
      </div>
      <div className="pt-20 flex flex-col items-center justify-center">
        <Link href="#contact-us">
          <button className="bg-white text-black text- border-2 border-solid border-black rounded-xl h-16 px-16">
            <p>Get In Touch</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobRolesSection;
