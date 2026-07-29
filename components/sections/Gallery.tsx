"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const images = [
  {
    src: "/images/restaurant_hero.webp",
    alt: "Wnętrze restauracji",
    label: "Nasza sala",
    tall: true,
  },
  {
    src: "/images/dish_pasta.webp",
    alt: "Tagliatelle al Tartufo",
    label: "Tagliatelle al Tartufo",
    tall: false,
  },
  {
    src: "/images/restaurant_wine.webp",
    alt: "Selekcja win",
    label: "Selekcja win",
    tall: false,
  },
  {
    src: "/images/restaurant_chef.webp",
    alt: "Chef Marco Rossi",
    label: "Chef Marco Rossi",
    tall: true,
  },
  {
    src: "/images/dish_pizza.webp",
    alt: "Pizza Margherita",
    label: "Pizza Margherita STG",
    tall: false,
  },
  {
    src: "/images/dish_tiramisu.webp",
    alt: "Tiramisù della Casa",
    label: "Tiramisù della Casa",
    tall: false,
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(
    () => setSelected((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    []
  );
  const next = useCallback(
    () => setSelected((i) => (i !== null ? (i + 1) % images.length : null)),
    []
  );

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close, prev, next]);

  return (
    <section id="galeria" className="py-24 bg-resto-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-display italic text-gold text-sm tracking-widest mb-3">
            - La Galleria -
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">Galeria</h2>
          <p className="text-white/50 max-w-md mx-auto text-sm">
            Zajrzyj za kulisy Trattoria Bella - nasze wnętrze, kuchnia i dania.
            Kliknij zdjęcie, aby zobaczyć w pełnym rozmiarze.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`group relative overflow-hidden bg-gradient-to-br from-amber-900/30 to-stone-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                img.tall ? "row-span-2" : ""
              }`}
              style={{ minHeight: img.tall ? "400px" : "196px" }}
              aria-label={`Otwórz zdjęcie: ${img.label}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100" />
                <p className="text-white font-display italic text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </p>
              </div>

              {/* Gold corners on hover */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-white/30 transition-all z-10"
            onClick={close}
            aria-label="Zamknij"
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <p className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
            {selected + 1} / {images.length}
          </p>

          {/* Prev */}
          <button
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-gold/40 transition-all z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Poprzednie zdjęcie"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image container */}
          <div
            className="relative w-full max-w-4xl mx-14 sm:mx-20 px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ maxHeight: "80vh" }}>
              <Image
                src={images[selected].src}
                alt={images[selected].alt}
                width={1200}
                height={800}
                className="object-contain w-full"
                style={{ maxHeight: "75vh" }}
                priority
              />
            </div>
            <p className="text-center text-white/50 font-display italic text-sm mt-4">
              {images[selected].label}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-gold/40 transition-all z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Następne zdjęcie"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === selected ? "bg-gold w-4" : "bg-white/30"
                }`}
                aria-label={`Zdjęcie ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
