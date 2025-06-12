export default function Musicas() {
  const musicas = [
    {
      title: "Sunshine - Delacruz",
      url: "https://www.youtube.com/embed/FEpuC98wcXE",
      trecho: "Veja o homem que sou, alguém me abençoou quando você me encontrou.",
    },
    {
      title: "Vem Cá - Pelé Mil Flows",
      url: "https://www.youtube.com/embed/lV2plyhSRBU",
      trecho:
        "Demorei para encontrar alguém como você que soube conversar, que soube me entender, então fica perto de mim, esse amor nunca vai ter fim.",
    },
    {
      title: "Afrodite - Delacruz",
      url: "https://www.youtube.com/embed/ryigUw_Y8v0",
      trecho:
        "Para, quando estamos cara a cara\n" +
        "Eu sei que qualquer um repara\n" +
        "Esse sentimento entre a gente\n" +
        "E para, isso aqui é coisa rara\n" +
        "Quanto mais o tempo passa\n" +
        "Mais você prova que é diferente",
    },
    {
      title: "Cigana - Delacruz",
      url: "https://www.youtube.com/embed/EJMd8tSLGw4",
      trecho:
        "Ô morena, diga quando você vem Não aguento mais, preciso matar essa saudade Não me teste, você sabe do que sou capaz, eu Faço uma loucura, vou te convidar pra uma aventura Algumas coisas o tempo não cura Você não mensura o bem que você me faz",
    },
    {
      title: "Partilhar - Rubel",
      url: "https://www.youtube.com/embed/ivHE7pQEEHI",
      trecho:
        "Se for preciso, eu giro a Terra inteira\n" +
        "Até que o tempo se esqueça\n" +
        "De ir pra frente e volte atrás milhões de anos\n" +
        "Quando todos continentes se encontravam\n" +
        "Pra que eu possa caminhar até você",
    },
    {
      title: "Pausa da sua tristeza",
      url: "https://www.youtube.com/embed/OowhMq5stCU",
      trecho:
       "Me deixa ser, a pausa da sua tristeza,\n" +
       "Já que ela gosta de te visitar"
    },
  ];

  return (
    <main className="w-screen min-h-screen flex flex-col items-center p-8 bg-gradient-to-b from-rose-100 via-white to-pink-100 text-zinc-800 gap-10">
      <header className="text-4xl font-[\'Dancing_Script\',cursive] mb-8 text-center text-rose-600 drop-shadow-lg">
        Músicas que me lembram você
      </header>

      <div className="w-full max-w-5xl flex flex-col gap-10 overflow-y-auto">
        {musicas.map((musica, index) => (
          <article
            key={index}
            className="flex flex-col items-center bg-white/70 border border-rose-300 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <iframe
              className="w-full h-[20rem] rounded-lg shadow-md"
              src={musica.url}
              title={musica.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <blockquote className="mt-6 text-center italic text-rose-700 font-serif text-lg relative max-w-xl">
              <span className="absolute -left-4 -top-4 text-4xl font-bold select-none text-rose-400">
                “
              </span>
              {musica.trecho.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <span className="absolute -right-4 -bottom-4 text-4xl font-bold select-none text-rose-400">
                ”
              </span>
            </blockquote>
          </article>
        ))}
      </div>
    </main>
  );
}
