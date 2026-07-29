import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-950 to-black">
        <Image
          src="/images/restaurant_hero.webp"
          alt="Wnętrze Trattoria Bella"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Ornamental line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gold/50" />
          <p className="font-display italic text-gold text-base tracking-widest">
            Cucina Italiana dal 1987
          </p>
          <div className="h-px w-16 bg-gold/50" />
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl text-white tracking-wide mb-4">
          Trattoria{" "}
          <span className="italic text-gold-gradient">Bella</span>
        </h1>

        <p className="text-white/70 text-base sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-light tracking-wide px-2">
          Autentyczna kuchnia włoska w sercu Warszawy. Sezonowe menu, wina z Toskanii
          i atmosfera, która przenosi Cię prosto do Italii.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="bg-gold hover:bg-gold-light text-black px-10 py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:scale-105"
          >
            Zobacz menu
          </a>
          <a
            href="#rezerwacja"
            className="border border-white/40 hover:border-gold text-white hover:text-gold px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
          >
            Zarezerwuj stolik
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#menu"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-colors animate-bounce"
        aria-label="Przewiń w dół"
      >
        <ChevronDown size={32} />
      </a>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
