import Header from "./header/header";
import LandingPage from "./landingPage/landingPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-12 w-full ">
      <Header />
      <LandingPage />
    </main>
  );
}
