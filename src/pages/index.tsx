import type { NextPage } from "next";

import {
  ContactUsSection,
  JobRolesSection,
  LandingPage,
  MissionSection,
  ValuesSection,
} from "~/views";

const HomePage: NextPage = () => {
  const MainPage = () => (
    <>
      <LandingPage />
      <MissionSection />
      <ValuesSection />
      <JobRolesSection />
      <ContactUsSection />
    </>
  );

  return (
    <>
      <main className="flex min-h-screen flex-col">
        <MainPage />
      </main>
    </>
  );
};

export default HomePage;
