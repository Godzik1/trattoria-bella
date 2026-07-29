import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Anna Kowalska",
    location: "Warszawa",
    rating: 5,
    text: "Najlepsza włoska restauracja w Warszawie bez żadnych wątpliwości. Tagliatelle z truflą to absolutna perfekcja - smak nie do opisania. Atmosfera przenosi Cię prosto do Toskanii.",
    dish: "Tagliatelle al Tartufo",
    date: "Październik 2024",
    initials: "AK",
  },
  {
    name: "Piotr Malinowski",
    location: "Kraków",
    rating: 5,
    text: "Byliśmy z żoną na rocznicę ślubu. Obsługa perfekcyjna, wino przepyszne, a Osso Buco roztapia się w ustach. Wracamy regularnie za każdym razem, gdy jesteśmy w Warszawie.",
    dish: "Osso Buco alla Milanese",
    date: "Wrzesień 2024",
    initials: "PM",
  },
  {
    name: "Magdalena Wiśniewska",
    location: "Wrocław",
    rating: 5,
    text: "Tiramisù jak u włoskiej noni! Przenosi Cię z każdym kęsem. Chef Marco naprawdę wie co robi. Zdjęcia nie oddają jak bardzo to miejsce jest magiczne - musicie tu przyjść.",
    dish: "Tiramisù della Casa",
    date: "Sierpień 2024",
    initials: "MW",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-resto-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-display italic text-gold text-sm tracking-widest mb-3">
            - Le Recensioni -
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Co mówią nasi goście
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
            <span className="text-white/50 text-sm ml-2">4.9 / 5 · 847 opinii</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-resto-card border border-resto-border p-7 hover:border-gold/30 transition-colors duration-300 relative flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-gold/20 mb-4 flex-shrink-0" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-white/65 text-sm leading-relaxed mb-6 flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-resto-border mb-4" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xs font-semibold">{review.initials}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{review.name}</p>
                  <p className="text-white/35 text-xs">{review.location} · {review.date}</p>
                </div>
              </div>

              {/* Ordered dish */}
              <p className="text-white/25 text-[10px] tracking-widest uppercase mt-3">
                Zamówił/a: {review.dish}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-resto-border">
          {["Google 4.9★", "TripAdvisor Certificate of Excellence", "Tripadvisor Travelers' Choice"].map(
            (badge) => (
              <p key={badge} className="text-white/30 text-xs tracking-widest uppercase">
                {badge}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
