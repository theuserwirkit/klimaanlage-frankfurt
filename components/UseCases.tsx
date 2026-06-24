import Image from "next/image";
import ScopeNotice from "@/components/ScopeNotice";

const useCases = [
  {
    title: "Bürogebäude",
    product: "Mobil-Klimaanlage auf Anhänger",
    description:
      "Kühlen Sie einzelne Etagen oder Büroflächen während Wartungsarbeiten, Serverausfällen oder bei extremer Hitze — mit der mobilen Klimaanlage auf Anhänger.",
    image: "/images/office.png",
    alt: "Klimaanlage auf Anhänger mieten — Klimaschlauch führt ins Bürofenster in Frankfurt",
  },
  {
    title: "Industriehallen & Baustellen",
    product: "Spotcooler",
    description:
      "Mit dem Spotcooler kühlen Sie gezielt einzelne Arbeits- oder Lagerbereiche — drei flexible Schlauch-Auslässe für punktgenaue Bereichskühlung.",
    image: "/images/hall.png",
    alt: "Spotcooler mieten für gezielte Bereichskühlung in Industriehallen bei Frankfurt",
  },
  {
    title: "Zelte & Events",
    product: "Mobil-Klimaanlage auf Anhänger",
    description:
      "Für kleinere Zelte und überschaubare Veranstaltungsflächen im Rhein-Main-Gebiet — die Anlage auf Anhänger liefert zuverlässig kalte Luft.",
    image: "/images/event.png",
    alt: "Mobile Klimatisierung für Event-Zelte — Klimaanlage auf Anhänger mieten Frankfurt",
  },
  {
    title: "Privat & Sonderfälle",
    product: "Beide Geräte",
    description:
      "Auch für Privatpersonen bei temporärem Kühlbedarf — z. B. während Renovierungen, bei defekter Klimaanlage oder in der Hitzewelle.",
    image: "/images/privat.png",
    alt: "Klimaanlage oder Spotcooler mieten für privaten Kühlbedarf in Frankfurt und Umgebung",
  },
];

export default function UseCases() {
  return (
    <section id="einsatz" className="section-padding bg-white">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading text-slate-900">
            <span className="text-gradient-ice">Einsatzbereiche</span> in Frankfurt &amp; Rhein-Main
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ob Büro, Halle, Baustelle oder Event — wir liefern die passende mobile Kühlung aus
            Wehrheim direkt zu Ihnen.
          </p>
        </div>

        <ScopeNotice className="mx-auto mt-8 max-w-3xl" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="ice-card group overflow-hidden transition hover:border-cyan-400/40 hover:shadow-cyan-500/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                  Empfohlen: {item.product}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
