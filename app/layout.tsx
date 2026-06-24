import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://klima-mieten-frankfurt.com"
  ),
  title: {
    default:
      "Klimaanlage & Spotcooler mieten Frankfurt | Mobil-Klima ab Wehrheim",
    template: "%s | Klimaanlage Frankfurt",
  },
  description:
    "Mobil-Klimaanlage auf Anhänger und Spotcooler zur Miete — ab 149 €/Tag. Auslieferung aus 61273 Wehrheim bei Frankfurt in die gesamte Rhein-Main-Region. Schnell verfügbar, ohne baulichen Eingriff.",
  keywords: [
    "Klimaanlage mieten Frankfurt",
    "Spotcooler mieten Frankfurt",
    "Mobil-Klimaanlage mieten",
    "Klimaanlage auf Anhänger mieten",
    "mobile Klimatisierung Rhein-Main",
    "Klimaanlage mieten Wehrheim",
    "Industrieklimaanlage mieten",
    "Büro kühlen Hitzewelle",
    "Event Klimatisierung mieten",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Klimaanlage & Spotcooler mieten — Frankfurt & Rhein-Main",
    description:
      "Mobil-Klimaanlage auf Anhänger (6,5 kW) und Spotcooler (10 kW) zur Miete. Standort 61273 Wehrheim bei Frankfurt — Lieferung in die gesamte Region.",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Mobil-Klimaanlage auf Anhänger und Spotcooler zur Miete bei Frankfurt",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${outfit.variable} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
