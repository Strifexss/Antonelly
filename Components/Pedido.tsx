"use client";
import { useEffect, useState } from "react";

const mensagemPedido = `Meu amor,  
Hoje é o dia que eu quero pedir para você o que meu coração já sabe há muito tempo:  
Quer casar comigo e continuar essa linda história para sempre? 💍❤️`;

export default function Pedido() {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("pedido-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText("");
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(mensagemPedido.slice(0, index + 1));
      index++;
      if (index >= mensagemPedido.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      id="pedido-section"
      className="w-screen min-h-screen bg-gradient-to-br from-pink-200 via-rose-300 to-rose-400 flex flex-col justify-center items-center p-8 px-6"
      style={{ fontFamily: "inherit" }}
    >
      <div
        className="max-w-xl bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-lg p-8 text-center text-xl sm:text-2xl font-semibold whitespace-pre-wrap text-zinc-900"
      >
        {displayedText}
      </div>
    </section>
  );
}
