import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://klimaanlage-frankfurt.de"
  ),
  title: "Klimaanlage Frankfurt — Mobile Klimatisierung mieten",
  description:
    "Mobile Klimaanlagen auf Anhänger für Büros, Industriehallen, Zelte und Events in Frankfurt. Schnell verfügbar, ohne baulichen Eingriff. Jetzt unverbindlich anfragen.",
  keywords: [
    "Klimaanlage mieten Frankfurt",
    "mobile Klimaanlage",
    "Klimatisierung Büro",
    "Industrieklimaanlage",
    "Event Klimatisierung",
  ],
  openGraph: {
    title: "Klimaanlage Frankfurt — Mobile Klimatisierung mieten",
    description:
      "Professionelle mobile Klimatisierung für Unternehmen in Frankfurt und Umgebung.",
    type: "website",
    locale: "de_DE",
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: "Klimaanlage Frankfurt" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
