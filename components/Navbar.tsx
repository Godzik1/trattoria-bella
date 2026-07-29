"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#o-nas", label: "O nas" },
  { href: "#galeria", label: "Galeria" },
  { href: "#rezerwacja", label: "Rezerwacja" },
  { href: "#kontakt", label: "Kontakt" },
];

// Godziny otwarcia
const HOURS: Record<number, [number, number]> = {
  0: [13 * 60, 21 * 60], // Niedziela 13:00-21:00
  1: [12 * 60, 22 * 60], // Pon-Czw 12:00-22:00
  2: [12 * 60, 22 * 60],
  3: [12 * 60, 22 * 60],
  4: [12 * 60, 22 * 60],
  5: [12 * 60, 23 * 60], // Pt-Sob 12:00-23:00
  6: [12 * 60, 23 * 60],
};

function useIsOpen() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const check = () => {
      const now = new Date();
      const mins = now.getHours() * 60 + now.getMinutes();
      const [from, to] = HOURS[now.getDay()];
      setOpen(mins >= from && mins < to);
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);
  return open;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isOpen = useIsOpen();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blokuj scroll strony gdy mobile menu jest otwarte
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-resto-bg/95 backdrop-blur-md border-b border-resto-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-tight">
            <span className="font-display text-2xl text-gold tracking-widest italic">
              Trattoria
            </span>
            <span className="text-white/50 text-xs tracking-[0.35em] uppercase">
              Bella · Warszawa
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-gold transition-colors text-sm tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Open/closed indicator */}
            <div className="flex items-center gap-2 text-sm">
              <span
                className={`w-2 h-2 rounded-full ${
                  isOpen ? "bg-green-400 animate-pulse" : "bg-red-400"
                }`}
              />
              <span className={isOpen ? "text-green-400" : "text-red-400"}>
                {isOpen ? "Otwarte" : "Zamknięte"}
              </span>
            </div>

            <a
              href="#rezerwacja"
              className="border border-gold text-gold hover:bg-gold hover:text-black px-5 py-2 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Rezerwacja
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white/70 hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - fullscreen overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-resto-bg/99 backdrop-blur-md border-t border-resto-border z-40 overflow-y-auto">
          <div className="px-6 py-8 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm mb-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  isOpen ? "bg-green-400 animate-pulse" : "bg-red-400"
                }`}
              />
              <span className={isOpen ? "text-green-400" : "text-red-400"}>
                {isOpen ? "Teraz otwarte" : "Teraz zamknięte"}
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-gold transition-colors text-lg tracking-widest uppercase border-b border-resto-border pb-4"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#rezerwacja"
              className="bg-gold hover:bg-gold-light text-black px-5 py-4 text-sm tracking-widest uppercase font-semibold transition-all text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Zarezerwuj stolik
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
