import type { NextPage } from "next";
import React from "react";
import {
  AboutFounderSection,
  MainAboutSection,
  CompanyNameSection,
} from "~/views";

const AboutPage: NextPage = () => {
  return (
    <main>
      <MainAboutSection />
      <AboutFounderSection />
      <CompanyNameSection />
    </main>
  );
};

export default AboutPage;
