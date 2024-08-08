import type { NextPage } from "next";

import {
  ContactUsSection,
  JobRolesSection,
  LandingPage,
  MissionSection,
  ValuesSection,
} from "~/views";
import MvpPage from "~/views/mvpPage/mvpPage";

const HomePage: NextPage = () => {
  const MainPage = () => (
    <>
      {/* <LandingPage />
      <MissionSection />
      <ValuesSection />
      <JobRolesSection />
      <ContactUsSection /> */}
      <MvpPage />
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
