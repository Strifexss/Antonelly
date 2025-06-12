import TextBox from "@/Components/TextBox";

export default function Sobre() {
  return (
    <main
      id="sobre"
      className="w-screen min-h-screen flex flex-col gap-4 px-6 py-12 bg-gradient-to-b from-rose-100 via-white to-pink-100 text-zinc-800"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Um pouco sobre o que eu sinto...</h2>

      <TextBox text="✨ Seu sorriso tem um efeito estranho... me acalma, me alegra, me faz sentir em casa." />
      <TextBox text="🌷 Você é minha paz depois de um dia difícil, e minha euforia nos dias bons." />
      <TextBox text="🎁 Você é aquele presente que a gente nem sabe como teve a sorte de ganhar." />
      <TextBox text="💞 Com você, eu não preciso fingir força. Só ser eu." />
      <TextBox text="🏡 Você virou meu lugar favorito no mundo — não importa onde a gente esteja." />
      <TextBox text="🌟 Tudo ganhou mais sentido desde que você chegou... até o silêncio." />
      <TextBox text="❤️ Eu me pego te admirando em momentos aleatórios... e sorrindo sem perceber." />
      <TextBox text="🫶 Tem dias que eu olho pra você e penso: 'É isso. Era isso que eu tanto procurava.'" />
      <TextBox text="🕊️ Sua companhia acalma meus medos e me lembra que tá tudo bem sentir." />
      <TextBox text="🎶 Seu riso me salva de jeitos que você nem imagina." />
      <TextBox text="🌈 Às vezes, só de encostar em você, parece que o mundo desacelera." />
      <TextBox text="🧸 A gente se entende até no silêncio..." />
      <TextBox text="🔥 Você me inspira a cada dia ser melhor" />
      <TextBox text="🗺️ Eu não sei o futuro, mas sei com quem quero dividir ele." />
      <TextBox text="🎇 Você me mudou para melhor sem nem fazer esforço" />
      <TextBox text="👀 Só de te olhar já sou feliz" />
      <TextBox text="🕰️ Cada lembrança com você mora num lugar especial do meu peito." />
      <TextBox text="🪄 Você tem esse dom de transformar qualquer dia comum num momento que eu nunca esqueço." />
      <TextBox text="🌌 Amar você me fez entender um monte de coisas que antes eu nem sabia sentir." />
      <TextBox text="💬 Com você, tudo é leve. Até as conversas difíceis ficam boas." />

      {/* MENSAGEM DESTACADA */}
      <div className="mt-6 p-4 border-2 border-rose-400 rounded-xl bg-white/80 shadow-lg text-center text-rose-700 font-semibold text-lg sm:text-xl animate-pulse">
        💗 E se eu tivesse que escolher de novo... <br className="hidden sm:inline" />
        escolheria você. Mil vezes. Sem pensar.
      </div>
    </main>
  );
}
