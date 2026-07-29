import Image from "next/image";
import { Award, Leaf, Wine } from "lucide-react";

const badges = [
  {
    icon: Award,
    title: "Recommended",
    subtitle: "Michelin Guide 2024",
  },
  {
    icon: Leaf,
    title: "Slow Food",
    subtitle: "Certyfikat 2023",
  },
  {
    icon: Wine,
    title: "Wine Spectator",
    subtitle: "Award of Excellence",
  },
];

export default function About() {
  return (
    <section id="o-nas" className="py-24 bg-resto-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Chef image */}
          <div className="relative">
            <div className="relative h-72 sm:h-[520px] bg-gradient-to-br from-amber-900/40 to-stone-900">
              <Image
                src="/images/restaurant_chef.webp"
                alt="Chef Marco Rossi"
                fill
                className="object-cover object-top"
              />
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/50" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/50" />
            </div>

            {/* Chef info card */}
            <div className="absolute -bottom-6 right-0 sm:-right-4 bg-resto-bg border border-resto-border p-4 shadow-2xl max-w-[180px]">
              <p className="font-display text-gold text-lg italic mb-0.5">
                Marco Rossi
              </p>
              <p className="text-white/50 text-xs tracking-widest uppercase">
                Executive Chef
              </p>
              <div className="h-px w-12 bg-gold/40 mt-3 mb-3" />
              <p className="text-white/40 text-xs leading-relaxed">
                Absolwent ALMA - La Scuola Internazionale di Cucina Italiana
              </p>
            </div>
          </div>

          {/* Right: Story */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-gold/50" />
              <p className="font-display italic text-gold text-sm tracking-widest">
                La Nostra Storia
              </p>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Pasja do{" "}
              <span className="italic text-gold">autentyczności</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-5">
              Trattoria Bella powstała w 1987 roku z marzenia Giovanniego Belliego
              - emigranta z Toskanii, który chciał przywieźć do Warszawy smak
              prawdziwej kuchni włoskiej. Przez ponad 35 lat pozostajemy wierni
              tej samej filozofii: proste składniki najwyższej jakości,
              przygotowywane z szacunkiem do tradycji.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Dzisiaj kuchnią kieruje Chef Marco Rossi - absolwent prestiżowej
              szkoły ALMA w Parmie, który co sezon wraca do Włoch po świeże
              inspriacje i produkty. Nasze truffle pochodzą z Umbrii, oliwa z
              Sycylii, a wina bezpośrednio od małych producentów w Toskanii i Piemoncie.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-4">
              {badges.map(({ icon: Icon, title, subtitle }) => (
                <div
                  key={title}
                  className="border border-resto-border p-4 text-center hover:border-gold/40 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gold mx-auto mb-2" />
                  <p className="text-white text-xs font-semibold tracking-wide">
                    {title}
                  </p>
                  <p className="text-white/40 text-[10px] tracking-wide mt-0.5">
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
