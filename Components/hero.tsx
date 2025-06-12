export default function Hero() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-start px-6 py-10 md:px-16 gap-6 bg-gradient-to-b from-pink-100 via-white to-rose-100 text-zinc-800">

      {/* Saudação inicial */}
      <section className="text-base sm:text-lg">
        <span>Oi, meu amor 💖</span>
      </section>

      {/* Frase principal */}
      <section className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug">
        <span>
          Cada segundo ao seu lado é um presente que eu nunca imaginei ganhar. <br />
          Hoje não é só mais um dia... é um daqueles dias que iremos lembrar para sempre.
        </span>
      </section>

      {/* Frase complementar */}
      <section className="text-sm sm:text-base max-w-md sm:max-w-xl leading-relaxed">
        <p>
          Desde que você entrou na minha vida, tudo ganhou mais cor e significado. Seu sorriso virou meu lugar favorito, e ouvir sua voz é o que me acalma nos dias difíceis. Cada instante com você é uma história que eu quero contar pra sempre.
        </p>
        <p className="mt-4">
          Hoje, nessa nova etapa que estamos começando, só quero que você saiba o quanto sou grato por ter você aqui, comigo, de verdade.
        </p>
        <p className="mt-4 italic">
          Te amo mais do que qualquer palavra poderia explicar.
        </p>
      </section>

      {/* Botão de navegação */}
      <a href="#sobre">
        <button className="mt-6 px-6 py-2 border-2 border-rose-400 text-rose-600 rounded-full font-semibold hover:bg-rose-400 hover:text-white transition duration-300 text-sm sm:text-base">
          Continue lendo
        </button>
      </a>
    </main>
  );
}
