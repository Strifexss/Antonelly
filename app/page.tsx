"use client"
import Hero from "@/Components/hero";
import Sobre from "@/Components/Sobre";
import '@/app/globals.css';
import Contador from "@/Components/Contador";
import Musicas from "@/Components/Musicas";
import GaleriaDeFotos from "@/Components/GaleriaDeFotos";
import MensagemFinal from "@/Components/MensagemFinal"; // ajuste o caminho conforme necessário

export default function Home() {
  return (
      <main className="w-screen h-auto flex flex-col bg-zinc-800 text-white text-[0.8rem]">
            <Hero/>
            <Sobre/>
            <GaleriaDeFotos/>
            <Musicas/>
            <MensagemFinal/>
            <Contador/>
      </main>
  );
}
