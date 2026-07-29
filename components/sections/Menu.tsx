"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "przystawki" | "dania" | "desery";

const categories: { id: Category; label: string }[] = [
  { id: "przystawki", label: "Przystawki" },
  { id: "dania", label: "Dania główne" },
  { id: "desery", label: "Desery" },
];

const menuItems: Record<
  Category,
  { name: string; desc: string; price: string; image?: string; badge?: string }[]
> = {
  przystawki: [
    {
      name: "Bruschetta al Pomodoro",
      desc: "Chrupiący chleb grillowany z pomidorami San Marzano, czosnkiem, bazylią i oliwą extra vergine",
      price: "28 zł",
    },
    {
      name: "Carpaccio di Manzo",
      desc: "Surowa wołowina pokrojona w cienkie plastry, płatki parmezanu Parmigiano Reggiano i rukola z kaparami",
      price: "52 zł",
      badge: "Chef's pick",
    },
    {
      name: "Burrata e Rucola",
      desc: "Kremowa burrata z Apulii na łożu rucoli, z pomidorkami confit i oliwą truflową",
      price: "48 zł",
    },
    {
      name: "Zuppa di Funghi Porcini",
      desc: "Aksamitny krem z borowików z grzankami czosnkowymi i olejem z białej trufli",
      price: "35 zł",
    },
  ],
  dania: [
    {
      name: "Tagliatelle al Tartufo",
      desc: "Świeży makaron tagliatelle z czarną truflą, parmezanem 24-miesięcznym i masłem truflowym",
      price: "89 zł",
      image: "/images/dish_pasta.webp",
      badge: "Bestseller",
    },
    {
      name: "Osso Buco alla Milanese",
      desc: "Gicz cielęca duszona przez 6 godzin z gremolata, podawana z risotto alla milanese i szafranem",
      price: "128 zł",
      badge: "Danie tygodnia",
    },
    {
      name: "Branzino al Forno",
      desc: "Okoń morski pieczony z ziołami śródziemnomorskimi, podawany z warzywami grillowanymi i sosem cytrynowym",
      price: "115 zł",
    },
    {
      name: "Pizza Margherita STG",
      desc: "Neapolitańska pizza z pieca opalanego drewnem, z pomidorami San Marzano i mozzarellą fior di latte",
      price: "58 zł",
      image: "/images/dish_pizza.webp",
    },
    {
      name: "Risotto ai Porcini",
      desc: "Kremowe risotto carnaroli z borowikami, białym winem Soave i parmezanem - gotowane na zamówienie",
      price: "78 zł",
    },
  ],
  desery: [
    {
      name: "Tiramisù della Casa",
      desc: "Klasyczny tiramisu według przepisu naszej kuchni od 1987 roku - espresso, mascarpone, savoiardi",
      price: "38 zł",
      image: "/images/dish_tiramisu.webp",
      badge: "Tradycja",
    },
    {
      name: "Panna Cotta alla Vaniglia",
      desc: "Kremowa panna cotta z laski wanilii Bourbon, z sosem z malin i pistacjami",
      price: "32 zł",
    },
    {
      name: "Cannoli Siciliani",
      desc: "Chrupiące rurki z ciasta smażonego, nadziane ricottą z Sycylii, czekoladą i skórką pomarańczową",
      price: "35 zł",
    },
    {
      name: "Selezione di Formaggi",
      desc: "Wybór włoskich serów sezonowanych z miodem truflowym, orzechami i konfiturą figową",
      price: "58 zł",
    },
  ],
};

export default function Menu() {
  const [active, setActive] = useState<Category>("dania");

  return (
    <section id="menu" className="py-24 bg-resto-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-display italic text-gold text-sm tracking-widest mb-3">
            - Il Nostro Menu -
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Nasze Menu
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Sezonowe dania przygotowywane ze składników importowanych bezpośrednio
            od włoskich producentów. Menu zmienia się co kwartał.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-0 mb-12 border border-resto-border">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex-1 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                active === cat.id
                  ? "bg-gold text-black font-semibold"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {menuItems[active].map((item) => (
            <div
              key={item.name}
              className="group flex gap-4 bg-resto-card border border-resto-border p-5 hover:border-gold/40 transition-all duration-300"
            >
              {/* Image or placeholder */}
              {item.image ? (
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-amber-900/30 to-stone-900/50 flex items-center justify-center">
                  <span className="text-2xl opacity-30">🍽</span>
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-display text-white text-base leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-gold font-semibold text-sm whitespace-nowrap flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                {item.badge && (
                  <span className="inline-block text-[10px] tracking-widest uppercase border border-gold/40 text-gold px-2 py-0.5 mb-1.5">
                    {item.badge}
                  </span>
                )}
                <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs tracking-widest mt-8 uppercase">
          Wszystkie ceny zawierają VAT · Poinformuj nas o alergiach pokarmowych
        </p>
      </div>
    </section>
  );
}
