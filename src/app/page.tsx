import Header from "../views/header/header";
import LandingPage from "../views/landingPage/landingPage";
import MvpPage from "../views/mvpPage/mvpPage";
import SubPage from "../views/subPage/subPage";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col pt-12 w-full bg-black">
      <Header />
      <MvpPage />
      {/* <LandingPage /> */}
      {/* <SubPage /> */}
    </main>
  );
}
