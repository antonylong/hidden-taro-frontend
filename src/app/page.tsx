import Header from "./header/header";
import LandingPage from "./landingPage/landingPage";
import MvpPage from "./mvpPage/mvpPage";
import SubPage from "./subPage/subPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-12 w-full ">
      <Header />
      <MvpPage />
      {/* <LandingPage /> */}
      {/* <SubPage /> */}
    </main>
  );
}