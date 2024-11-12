
export default function Hero() {
    return (
        <main className="w-screen h-screen flex flex-col justify-center items-start p-16 text-left gap-6">
            <section className="text-left">
                <span>Oiii meu amor</span>
            </section>
            <section className="text-[2.2rem] font-bold">
                <span>Cada momento ao seu lado é um presente.</span>
            </section>
            <section className="text-left">
                <span>Você é minha razão de sorrir todos os dias. Te amo, hoje e sempre.</span>
            </section>
            <a href="#sobre">
                <button className="p-2 border-zinc-300 border-2 text-[1rem]">
                    Sobre Você
                </button>
            </a>
        </main>
    );
}
