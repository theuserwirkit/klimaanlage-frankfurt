const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://klima-mieten-frankfurt.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Klimaanlage Frankfurt — Wirkung live GmbH",
  description:
    "Mobil-Klimaanlagen auf Anhänger und Spotcooler zur Miete. Auslieferung aus 61273 Wehrheim bei Frankfurt in die gesamte Rhein-Main-Region.",
  url: siteUrl,
  email: "bp@wirkung-group.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hildegard von Bingen Str. 1",
    addressLocality: "Wehrheim",
    postalCode: "61273",
    addressRegion: "Hessen",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Frankfurt am Main" },
    { "@type": "AdministrativeArea", name: "Rhein-Main-Gebiet" },
    { "@type": "City", name: "Wehrheim" },
  ],
  priceRange: "€€",
  knowsAbout: [
    "Klimaanlage mieten",
    "Spotcooler mieten",
    "Mobile Klimatisierung",
    "Klimaanlage auf Anhänger",
  ],
};

const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mobil-Klimaanlage auf Anhänger",
    description:
      "Mobile Klimaanlage auf Kfz-Anhänger mit 6,5 kW Kühlleistung — ideal für Büros, Teilbereiche und kleinere Zelte. Zur Miete ab Wehrheim bei Frankfurt.",
    brand: { "@type": "Brand", name: "Klimaanlage Frankfurt" },
    offers: {
      "@type": "Offer",
      price: "149",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "149",
        priceCurrency: "EUR",
        unitText: "Tag",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Spotcooler",
    description:
      "Industrieller Spotcooler mit ca. 10 kW Kühlleistung und drei Kühlschläuchen für gezielte Bereichskühlung in Hallen, auf Baustellen und bei Events. Zur Miete ab Wehrheim bei Frankfurt.",
    brand: { "@type": "Brand", name: "Klimaanlage Frankfurt" },
    offers: {
      "@type": "Offer",
      price: "149",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "149",
        priceCurrency: "EUR",
        unitText: "Tag",
      },
    },
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Geräte kann ich bei Ihnen mieten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobil-Klimaanlage auf Kfz-Anhänger (6,5 kW) und industrieller Spotcooler (10 kW) — beide zur Miete ab 61273 Wehrheim bei Frankfurt.",
      },
    },
    {
      "@type": "Question",
      name: "Von wo aus liefern Sie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aus 61273 Wehrheim bei Frankfurt in die gesamte Rhein-Main-Region inkl. Frankfurt, Offenbach, Wiesbaden, Mainz und Darmstadt.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet die Miete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ab 149 € pro Tag bzw. 899 € pro Woche pro Gerät, zzgl. 80 € Lieferpauschale. Mindestmietdauer 4 Tage.",
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {productSchemas.map((schema) => (
        <script
          key={schema.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
