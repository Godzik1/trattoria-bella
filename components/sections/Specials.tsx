"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Flame } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getNextSunday(): Date {
  const now = new Date();
  const daysUntil = now.getDay() === 0 ? 7 : 7 - now.getDay();
  const next = new Date(now);
  next.setDate(now.getDate() + daysUntil);
  next.setHours(23, 59, 59, 0);
  return next;
}

function calcTimeLeft(): TimeLeft {
  const diff = getNextSunday().getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  };
}

function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="bg-resto-bg border border-gold/30 w-16 h-16 flex items-center justify-center mb-1">
        <span className="font-display text-2xl text-gold">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p className="text-white/40 text-[10px] tracking-widest uppercase">{label}</p>
    </div>
  );
}

export default function Specials() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-0 bg-resto-card border-y border-resto-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-80 lg:h-auto bg-gradient-to-br from-amber-900/50 to-stone-900 min-h-[320px]">
            <Image
              src="/images/dish_pasta.webp"
              alt="Danie tygodnia: Tagliatelle al Tartufo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-resto-card/80 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="py-12 lg:py-16 px-4 lg:px-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gold/50 text-gold px-4 py-1.5 text-xs tracking-widest uppercase mb-6">
              <Flame className="w-3.5 h-3.5 animate-pulse" />
              Chef&apos;s Special
            </div>

            <p className="font-display italic text-gold/70 text-sm tracking-widest mb-2">
              Danie tygodnia
            </p>
            <h3 className="font-display text-3xl sm:text-4xl text-white mb-2 leading-tight">
              Osso Buco<br />
              <span className="italic text-gold">alla Milanese</span>
            </h3>

            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0">
              Gicz cielęca duszona przez 6 godzin z gremolata i ziolami, podawana
              z klasycznym risotto alla milanese z szafranem. Danie dostępne
              wyłącznie do końca tygodnia.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <span className="font-display text-3xl text-gold">128 zł</span>
              <span className="line-through text-white/30 text-lg">148 zł</span>
              <span className="bg-gold/10 border border-gold/30 text-gold text-xs px-2 py-0.5 tracking-wider">
                -14%
              </span>
            </div>

            {/* Countdown */}
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-3">
                Oferta wygasa za:
              </p>
              <div className="flex items-end gap-3">
                <CountUnit value={timeLeft.days} label="Dni" />
                <span className="text-gold/50 text-2xl font-display mb-5">:</span>
                <CountUnit value={timeLeft.hours} label="Godz" />
                <span className="text-gold/50 text-2xl font-display mb-5">:</span>
                <CountUnit value={timeLeft.minutes} label="Min" />
                <span className="text-gold/50 text-2xl font-display mb-5">:</span>
                <CountUnit value={timeLeft.seconds} label="Sek" />
              </div>
            </div>

            <a
              href="#rezerwacja"
              className="mt-8 w-full lg:w-auto text-center border border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Zarezerwuj teraz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
