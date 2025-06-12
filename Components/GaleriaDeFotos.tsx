"use client";
import { useState } from "react";
import Image from "next/image";

export default function GaleriaDeFotos() {
  const fotos = [
    { src: "/nos/imagem2.jpg", legenda: "Cada momento com você é único." },
    { src: "/nos/imagem.jpg", legenda: "O sorriso mais lindo de todos." },
    { src: "/nos/imagem3.jpg", legenda: "Só você pra me fazer feliz." },
    { src: "/nos/imagem4.jpg", legenda: "Cada dia que se passa te amo mais" },
    { src: "/nos/imagem5.jpg", legenda: "Cada momento com você é único" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const prevPhoto = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + fotos.length) % fotos.length);
  };

  const nextPhoto = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % fotos.length);
  };

  return (
    <section className="w-full p-8 bg-gradient-to-b from-rose-100 via-white to-pink-100 text-zinc-800">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Nossa galeria de momentos inesquecíveis
      </h2>

      {/* Grid de miniaturas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {fotos.map((foto, index) => (
          <div
            key={index}
            className={`relative cursor-pointer rounded-lg overflow-hidden border-4 ${
              selectedIndex === index ? "border-rose-500 shadow-lg" : "border-transparent"
            } transition-all duration-300`}
            onClick={() => openModal(index)}
          >
            <Image
              src={foto.src}
              alt={`Foto ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-48 sm:h-40 md:h-48"
              priority={index === 0} // dá prioridade à primeira imagem
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center text-sm p-1 truncate">
              {foto.legenda}
            </div>
          </div>
        ))}
      </div>

      {/* Modal / visualizador */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-lg w-full rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fotos[selectedIndex].src}
              alt={`Foto ${selectedIndex + 1}`}
              width={600}
              height={600}
              className="object-contain rounded-lg"
            />
            <p className="absolute bottom-0 bg-rose-600 bg-opacity-80 text-white p-3 text-center text-base font-semibold w-full">
              {fotos[selectedIndex].legenda}
            </p>

            {/* Botões prev/next */}
            <button
              onClick={prevPhoto}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-rose-500 hover:bg-rose-600 text-white rounded-full p-2 shadow-lg"
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              onClick={nextPhoto}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-rose-500 hover:bg-rose-600 text-white rounded-full p-2 shadow-lg"
              aria-label="Próxima foto"
            >
              ›
            </button>

            {/* Botão fechar */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full p-2 shadow-lg"
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
