import Image from "next/image";
import React from "react";
import { MediumHeading, MediumSubHeading } from "~/components";

const ContactUsSection: React.FC = () => {
  return (
    <div id="contact-us">
      <Image
        src="/icons/Plane-White-Right.png"
        alt="white paper plane icon pointing right"
        width={150}
        height={150}
        className="absolute right-36 mt-8 rotate-12"
      />
      <div className="bg-black text-white flex justify-between flex-col px-36 pt-48 pb-20 text-center">
        <MediumHeading text="Let's have a chat" />
        <MediumSubHeading text="Let's start with a chat. Whether you are a candidate or employer, drop your details down below and perhaps also a brief or CV and we will get in touch with you in less than 24 hours." />
        {/* Need to add a form in; link to form submitting to company email */}
        {/* However need security; can't have people sending in junk */}
        {/* <div className="pt-12">
        <div>A FORM</div>
        </div> */}
        <p className="font-semibold py-24">hello@hiddentaro.com</p>
      </div>
    </div>
  );
};

export default ContactUsSection;
