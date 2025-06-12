import { useState, useEffect } from 'react';

export default function Contador() {
    const targetDate = new Date("2025-06-12T00:00:00");
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-100 via-white to-pink-100 p-8">
            <h1 className="text-zinc-800 text-3xl sm:text-4xl font-bold mb-6 text-center max-w-lg">
                Contagem regressiva para o dia mais especial
            </h1>
            <p className="text-zinc-600 text-center mb-10 max-w-md">
                O momento em que daremos início a uma vida juntos, cheia de amor e cumplicidade.
            </p>

            <div className="bg-white bg-opacity-90 p-8 rounded-3xl shadow-lg flex gap-8 w-auto w-auto justify-center text-zinc-900">
                <TimeBox label="Dias" value={timeLeft.days} />
                <TimeBox label="Horas" value={timeLeft.hours} />
                <TimeBox label="Minutos" value={timeLeft.minutes} />
                <TimeBox label="Segundos" value={timeLeft.seconds} />
            </div>
        </section>
    );
}

function TimeBox({ label, value }: { label: string; value: number }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-rose-500">{value.toString().padStart(2, '0')}</span>
            <span className="uppercase text-sm tracking-widest text-rose-300 mt-1">{label}</span>
        </div>
    );
}
