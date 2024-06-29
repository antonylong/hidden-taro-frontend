import Header from "../components/header/header";
import LandingPage from "../components/landingPage/landingPage";
import MvpPage from "../components/mvpPage/mvpPage";
import SubPage from "../components/subPage/subPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-12 w-full bg-black">
      <Header />
      <MvpPage />
      {/* <LandingPage /> */}
      {/* <SubPage /> */}
    </main>
  );
}
