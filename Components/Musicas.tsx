export default function Musicas() {

    const musicas = [
        {
            title: 'Sunshine - Delacruz',
            url: 'https://www.youtube.com/embed/FEpuC98wcXE',
            trecho: 'Veja o homem que sou, alguém me abençoou quando você me encontrou.',
        },
        {
            title: 'Vem Cá - Pelé Mil Flows',
            url: 'https://www.youtube.com/embed/lV2plyhSRBU',
            trecho: 'Demorei para encontrar alguém como você que soube conversar, que soube me entender, então fica perto de mim, esse amor nunca vai ter fim.',
        },
        {
            title: 'Afrodite - Delacruz',
            url: 'https://www.youtube.com/embed/ryigUw_Y8v0',
            trecho: 'Para, quando estamos cara a cara\n' +
                'Eu sei que qualquer um repara\n' +
                'Esse sentimento entre a gente\n' +
                'E para, isso aqui é coisa rara\n' +
                'Quanto mais o tempo passa\n' +
                'Mais você prova que é diferente',
        },
        {
            title: 'Cigana - Delacruz',
            url: 'https://www.youtube.com/embed/EJMd8tSLGw4',
            trecho: 'Ô morena, diga quando você vem Não aguento mais, preciso matar essa saudade Não me teste, você sabe do que sou capaz, eu Faço uma loucura, vou te convidar pra uma aventura Algumas coisas o tempo não cura Você não mensura o bem que você me faz',
        },
    ];

    return (
        <main className="w-screen h-auto flex flex-col items-center p-8 bg-zinc-800 gap-6 text-white">
            <header className="text-3xl font-bold mb-6 text-center">
                Músicas que me lembram você
            </header>
            {musicas.map((musica, index) => (
                <div
                    key={index}
                    className="w-full max-w-4xl flex flex-col items-center justify-center gap-6 bg-zinc-700 p-6 rounded-lg shadow-xl mb-8"
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
                    <span className="text-lg text-center text-zinc-300 italic mt-4">
                        "{musica.trecho}"
                    </span>
                </div>
            ))}
        </main>
    );
}
