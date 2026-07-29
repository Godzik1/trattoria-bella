import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const hours = [
  { days: "Poniedziałek – Czwartek", time: "12:00 – 22:00" },
  { days: "Piątek – Sobota", time: "12:00 – 23:00" },
  { days: "Niedziela", time: "13:00 – 21:00" },
];

function getTodayHours(): string {
  const day = new Date().getDay();
  if (day >= 1 && day <= 4) return "12:00 – 22:00";
  if (day === 5 || day === 6) return "12:00 – 23:00";
  return "13:00 – 21:00";
}

export default function Contact() {
  const todayHours = getTodayHours();

  return (
    <section id="kontakt" className="py-24 bg-resto-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-display italic text-gold text-sm tracking-widest mb-3">
            - Dove Siamo -
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Gdzie nas znajdziesz
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-resto-card border border-resto-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Adres</p>
                  <p className="text-white font-semibold">ul. Złota 44</p>
                  <p className="text-white/60">00-120 Warszawa</p>
                  <a
                    href="https://www.openstreetmap.org/?mlat=52.2290&mlon=21.0004#map=17/52.2290/21.0004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold text-xs tracking-wide mt-2 hover:text-gold-light transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Jak dojechać (OpenStreetMap)
                  </a>
                </div>
              </div>
            </div>

            {/* Phone + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-resto-card border border-resto-border p-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Telefon</p>
                    <a
                      href="tel:+48221234567"
                      className="text-white hover:text-gold transition-colors text-sm font-medium"
                    >
                      +48 22 123 45 67
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-resto-card border border-resto-border p-5">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-1">E-mail</p>
                    <a
                      href="mailto:rezerwacje@trattoriabella.pl"
                      className="text-white hover:text-gold transition-colors text-sm font-medium break-all"
                    >
                      rezerwacje@trattoriabella.pl
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-resto-card border border-resto-border p-6">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-4 h-4 text-gold" />
                <p className="text-white/40 text-xs tracking-widest uppercase">Godziny otwarcia</p>
              </div>
              <div className="space-y-3">
                {hours.map((h) => {
                  const isToday = h.time === todayHours;
                  return (
                    <div
                      key={h.days}
                      className={`flex items-center justify-between py-2 border-b border-resto-border last:border-0 ${
                        isToday ? "text-white" : "text-white/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && (
                          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                        )}
                        <span className="text-sm">{h.days}</span>
                      </div>
                      <span className={`text-sm font-medium ${isToday ? "text-gold" : ""}`}>
                        {h.time}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-white/30 text-xs mt-4 tracking-wide">
                Kuchnia zamykana 45 minut przed końcem pracy restauracji
              </p>
            </div>
          </div>

          {/* Right: Google Maps embed */}
          <div className="flex flex-col gap-4">
            <div className="relative flex-1 min-h-[400px] bg-resto-card border border-resto-border overflow-hidden">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=20.9880%2C52.2220%2C21.0120%2C52.2360&layer=mapnik&marker=52.2290%2C21.0004"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                title="Lokalizacja Trattoria Bella - ul. Złota 44, Warszawa"
              />
              {/* Gold overlay corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/50 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/50 pointer-events-none" />
            </div>

            {/* Transport info */}
            <div className="bg-resto-card border border-resto-border p-5">
              <p className="text-white/40 text-xs tracking-widest uppercase mb-3">Jak dojechać</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { icon: "🚇", label: "Metro", desc: "Rondo ONZ (M2)" },
                  { icon: "🚌", label: "Autobus", desc: "ul. Złota" },
                  { icon: "🅿️", label: "Parking", desc: "Złote Tarasy" },
                ].map((t) => (
                  <div key={t.label} className="border border-resto-border p-3">
                    <span className="text-xl block mb-1">{t.icon}</span>
                    <p className="text-white text-xs font-medium">{t.label}</p>
                    <p className="text-white/35 text-[10px]">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
