import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-12 w-full ">
      <header className="flex justify-between pb-90 px-16">
        <h1 className="text-3xl">Company Title</h1>
        <div className="flex w-800 justify-between">
          <p className="pr-10">About</p>
          <p>Contact</p>
        </div>
      </header>
      <div className="flex justify-between flex-col px-36 mt-24">
        <h2 className="text-8xl pb-8">Building exceptional product teams</h2>
        <p className="text-lg max-w-xl">
          We help ambitious tech companies build pioneering product teams with
          world-class product talent.
        </p>
      </div>
    </main>
  );
}
