"use client"
import { useState } from "react";
import Image from "next/image";

export default function GaleriaDeFotos() {
    const fotos = [
        { src: "/nos/imagem2.jpg", legenda: "Cada momento com você é único." },
        { src: "/nos/imagem.jpg", legenda: "O sorriso mais lindo de todos." },
        { src: "/nos/imagem3.jpg", legenda: "Só você pra me fazer feliz." },
    ];

    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const toggleLegenda = (index: number) => {
        setClickedIndex(prevIndex => (prevIndex === index ? null : index)); // Alterna entre null e o índice da foto clicada
    };

    return (
        <section className="w-full p-8 bg-zinc-900 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {fotos.map((foto, index) => (
                    <div key={index} className="relative group">
                        <Image
                            src={foto.src}
                            alt={`Foto ${index + 1}`}
                            layout="responsive"
                            width={500}
                            height={500}
                            className="transform group-hover:scale-105 transition-all duration-300 ease-in-out rounded-lg cursor-pointer"
                            onClick={() => toggleLegenda(index)}
                        />
                        <div
                            className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-100 transition-all duration-300 ${
                                clickedIndex === index ? "opacity-0" : "opacity-100"
                            }`}
                        >
                            <p className="text-lg font-semibold text-center p-2">{foto.legenda}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
