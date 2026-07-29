"use client";

import { useState } from "react";
import { CheckCircle, Calendar } from "lucide-react";

const timeSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30",
];

const occasions = [
  "Bez okazji",
  "Urodziny",
  "Rocznica ślubu",
  "Zaręczyny",
  "Randka",
  "Spotkanie biznesowe",
  "Inna okazja",
];

export default function Reservation() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "Bez okazji",
    notes: "",
  });

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: Podepnij API wysyłki e-mail (Resend / Formspree / EmailJS)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("done");
  };

  const inputClass =
    "w-full bg-resto-bg border border-resto-border px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-gold/50 transition-colors text-sm";
  const labelClass = "block text-white/40 text-xs tracking-widest uppercase mb-2";

  return (
    <section id="rezerwacja" className="py-24 bg-resto-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-display italic text-gold text-sm tracking-widest mb-3">
            - Prenotazione -
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Zarezerwuj stolik
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
            Rezerwacje przyjmujemy na minimum 2 godziny przed wizytą. Dla grup powyżej
            8 osób prosimy o kontakt telefoniczny.
          </p>
        </div>

        {status === "done" ? (
          <div className="flex flex-col items-center justify-center text-center py-20 bg-resto-bg border border-resto-border">
            <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-display text-2xl text-white mb-3">
              Dziękujemy za rezerwację!
            </h3>
            <p className="text-white/50 text-sm max-w-sm">
              Potwierdzenie zostanie wysłane na podany adres e-mail. Do zobaczenia
              w Trattoria Bella!
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 text-gold/60 hover:text-gold text-xs tracking-widest uppercase transition-colors"
            >
              Złóż kolejną rezerwację
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-resto-bg border border-resto-border p-8 sm:p-10">
            {/* Row 1: Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className={labelClass}>Imię i nazwisko *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Jan Kowalski"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Telefon *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+48 600 000 000"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2: Email */}
            <div className="mb-5">
              <label className={labelClass}>Adres e-mail *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={set("email")}
                placeholder="jan@example.com"
                className={inputClass}
              />
            </div>

            {/* Row 3: Date + Time + Guests */}
            <div className="grid sm:grid-cols-3 gap-5 mb-5">
              <div>
                <label className={labelClass}>Data wizyty *</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={set("date")}
                  min={new Date().toISOString().split("T")[0]}
                  className={inputClass}
                  style={{ colorScheme: "dark" }}
                />
              </div>
              <div>
                <label className={labelClass}>Godzina *</label>
                <select
                  required
                  value={form.time}
                  onChange={set("time")}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" className="bg-slate-900">Wybierz...</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t} className="bg-slate-900">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Liczba osób *</label>
                <select
                  required
                  value={form.guests}
                  onChange={set("guests")}
                  className={`${inputClass} appearance-none`}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-slate-900">
                      {n} {n === 1 ? "osoba" : n < 5 ? "osoby" : "osób"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Occasion */}
            <div className="mb-5">
              <label className={labelClass}>Specjalna okazja</label>
              <select
                value={form.occasion}
                onChange={set("occasion")}
                className={`${inputClass} appearance-none`}
              >
                {occasions.map((o) => (
                  <option key={o} value={o} className="bg-slate-900">
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 5: Notes */}
            <div className="mb-8">
              <label className={labelClass}>Dodatkowe życzenia</label>
              <textarea
                value={form.notes}
                onChange={set("notes")}
                placeholder="Alergie pokarmowe, życzenia dotyczące stolika, dekoracje urodzinowe..."
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gold hover:bg-gold-light disabled:opacity-60 text-black font-semibold py-4 text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01]"
            >
              {status === "sending" ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Wysyłanie...
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4" />
                  Potwierdź rezerwację
                </>
              )}
            </button>

            <p className="text-white/25 text-xs text-center mt-4">
              Potwierdzenie rezerwacji zostanie wysłane e-mailem w ciągu kilku minut.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
