# Trattoria Bella — Demo strona restauracji

Przykładowa strona demo zbudowana z **Next.js 15**, **Tailwind CSS v4** i **TypeScript**.

## Szybki start

### 1. Skopiuj zdjecia (wymagane raz)

Otwórz terminal **w tym folderze** i uruchom:

```powershell
powershell -ExecutionPolicy Bypass -File .\copy-images.ps1
```

Skopiuje wygenerowane zdjecia AI do `public/images/`.

### 2. Zainstaluj zależności

```bash
npm install
```

### 3. Uruchom serwer deweloperski

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000)

---

## Funkcje zademonstrowane na tej stronie

| Funkcja | Gdzie |
|---|---|
| Live "Otwarte/Zamknięte" indicator | Navbar |
| Interaktywne zakładki Menu | Sekcja Menu |
| Zdjecia AI jako prawdziwe fotografie | Hero, Menu, About, Galeria |
| Live countdown (danie tygodnia) | Sekcja Specials |
| Masonry-style galeria z hover | Sekcja Galeria |
| Formularz rezerwacji z walidacją | Sekcja Rezerwacja |
| Google Maps embed | Sekcja Kontakt |
| Jak dojechać (transport) | Sekcja Kontakt |
| Newsletter signup | Footer |
| Responsive mobile menu | Navbar |

## Stos technologiczny

- [Next.js 15](https://nextjs.org) — App Router, Image optimization
- [Tailwind CSS v4](https://tailwindcss.com) — custom `@theme` tokens (gold, serif)
- [Lucide React](https://lucide.dev) — ikony
- [TypeScript](https://www.typescriptlang.org)

## Struktura

```
├── app/
│   ├── globals.css       # @theme z kolorami gold + fontem display
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx        # Live open/closed + scroll effect
│   ├── Footer.tsx        # Newsletter signup
│   └── sections/
│       ├── Hero.tsx      # Fullscreen z zdjęciem + overlay
│       ├── Menu.tsx      # Interaktywne zakładki
│       ├── About.tsx     # Chef + historia + badges
│       ├── Gallery.tsx   # Masonry grid + hover
│       ├── Specials.tsx  # Countdown timer
│       ├── Testimonials.tsx
│       ├── Reservation.tsx  # Formularz rezerwacji
│       └── Contact.tsx   # Google Maps + godziny
└── public/
    └── images/           # Zdjecia AI (skopiuj przez copy-images.ps1)
```
