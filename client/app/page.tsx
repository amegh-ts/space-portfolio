import Encryption from "@/Components/Main/Encryption";
import Hero from "@/Components/Main/Hero";
import Skills from "@/Components/Main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
      </div>
    </main>
  );
}
