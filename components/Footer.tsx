"use client";

import { useState } from "react";
import { Instagram, Facebook } from "lucide-react";

const footerLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#o-nas", label: "O nas" },
  { href: "#galeria", label: "Galeria" },
  { href: "#rezerwacja", label: "Rezerwacja" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-resto-card border-t border-resto-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="block mb-4">
              <span className="font-display text-3xl text-gold italic tracking-widest">
                Trattoria
              </span>
              <span className="font-display text-3xl text-white italic tracking-widest ml-2">
                Bella
              </span>
              <p className="text-white/30 text-xs tracking-[0.3em] uppercase mt-1">
                Cucina Italiana · Warszawa · dal 1987
              </p>
            </a>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Autentyczna kuchnia włoska w sercu Warszawy. Sezonowe menu,
              toskańskie wina i atmosfera, która przenosi Cię do Italii.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white/40 text-xs tracking-widest uppercase mb-3">
                Newsletter - specjalne oferty
              </p>
              {subscribed ? (
                <p className="text-gold text-sm italic font-display">
                  Grazie! Zapisano do newslettera.
                </p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Twój e-mail"
                    className="flex-1 bg-resto-bg border border-resto-border px-3 py-2 text-white placeholder-white/25 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-gold hover:bg-gold-light text-black px-4 py-2 text-xs tracking-widest uppercase font-semibold transition-colors flex-shrink-0"
                  >
                    Zapisz
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white text-sm font-semibold tracking-widest uppercase mb-5">
              Nawigacja
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/45 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-sm font-semibold tracking-widest uppercase mb-5">
              Kontakt
            </p>
            <div className="space-y-3 text-sm text-white/45">
              <p>ul. Złota 44<br />00-120 Warszawa</p>
              <a href="tel:+48221234567" className="block hover:text-gold transition-colors">
                +48 22 123 45 67
              </a>
              <a
                href="mailto:rezerwacje@trattoriabella.pl"
                className="block hover:text-gold transition-colors break-all"
              >
                rezerwacje@trattoriabella.pl
              </a>
            </div>

            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-resto-border hover:border-gold/40 flex items-center justify-center text-white/40 hover:text-gold transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 border border-resto-border hover:border-gold/40 flex items-center justify-center text-white/40 hover:text-gold transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-resto-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/25 text-xs tracking-wide">
          <p>© {year} Trattoria Bella. Wszelkie prawa zastrzeżone.</p>
          <p>
            Strona wykonana przez{" "}
            <span className="text-gold/50">JK.dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
