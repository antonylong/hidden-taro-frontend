import ThirdPage from "~/views/thirdPage/thirdPage";
import Header from "./header";
import LandingPage from "../views/landingPage/landingPage";
import SubPage from "../views/subPage/subPage";
import { ContactPage, Footer, FourthPage } from "~/views";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col pt-10 w-full">
      <Header />
      <LandingPage />
      <SubPage />
      <ThirdPage />
      <FourthPage />
      <ContactPage />
      <Footer />
    </main>
  );
}
