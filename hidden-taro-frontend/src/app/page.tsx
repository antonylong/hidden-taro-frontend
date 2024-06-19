import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-24 pt-12 w-full">
      <header className="flex justify-between">
        <h1 className="text-3xl">Hidden Taro</h1>
        <div className="flex w-svw justify-between bg-red-500">
          <p>About</p>
          <p>Contact</p>
        </div>
      </header>
    </main>
  );
}
