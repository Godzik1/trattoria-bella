import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trattoria Bella - Autentyczna Kuchnia Włoska w Warszawie",
  description:
    "Odkryj smak autentycznych Włoch w samym sercu Warszawy. Rezerwacje stolików, menu sezonowe, wina importowane prosto z Toskanii.",
  keywords: ["restauracja włoska", "Warszawa", "rezerwacja", "trattoria", "kuchnia włoska"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body suppressHydrationWarning className="bg-resto-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}
