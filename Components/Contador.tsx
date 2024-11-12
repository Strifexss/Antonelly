import { useState, useEffect } from 'react';

export default function Contador() {
    const targetDate = new Date("2025-06-12T00:00:00"); // Data do dia 12 de junho de 2025
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime(); // Corrigido: .getTime() para obter o valor numérico

            if (difference <= 0) {
                clearInterval(interval); // Para o intervalo quando o tempo acabar
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000); // Atualiza a cada segundo

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-start justify-center min-h-screen bg-zinc-800 p-8 sm:px-4">
            <h1 className="text-white text-3xl font-bold mb-6">
                Contagem Regressiva
                <br />
                <span className="text-xl text-red-500">O dia mais que especial.</span>
                <br />
                Quando de fato vamos dar início aos preparativos para uma vida toda juntos.
            </h1>
            <div className="bg-zinc-700 p-6 rounded-lg shadow-xl max-w-xs w-full sm:max-w-md text-center text-white font-semibold">
                <div className="flex justify-between mb-4 text-lg sm:text-xl">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold">{timeLeft.days}</span>
                        <span className="text-sm">Dias</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold">{timeLeft.hours}</span>
                        <span className="text-sm">Horas</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold">{timeLeft.minutes}</span>
                        <span className="text-sm">Minutos</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold">{timeLeft.seconds}</span>
                        <span className="text-sm">Segundos</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
