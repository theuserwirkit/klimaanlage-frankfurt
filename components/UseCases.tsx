import Image from "next/image";
import ScopeNotice from "@/components/ScopeNotice";

const useCases = [
  {
    title: "Bürogebäude",
    description:
      "Kühlen Sie einzelne Etagen oder Büroflächen während Wartungsarbeiten, Serverausfällen oder bei extremer Hitze.",
    image: "/images/office.png",
    alt: "Klimaschläuche führen von der Anlage auf dem Anhänger durch ein Bürofenster ins Gebäude",
  },
  {
    title: "Industriehallen",
    description:
      "Kühlen Sie gezielt einzelne Arbeits- oder Lagerbereiche in Hallen — nicht die gesamte Halle.",
    image: "/images/hall.png",
    alt: "Mobil-Klimaanlage auf Anhänger mit Klimaschläuchen zu einem Arbeitsbereich in einer Industriehalle",
  },
  {
    title: "Zelte & Events",
    description:
      "Für kleinere Zelte und überschaubare Veranstaltungsflächen — nicht für große Venue-Klimatisierung.",
    image: "/images/event.png",
    alt: "Mobil-Klimaanlage auf Anhänger mit Klimaschläuchen zu einem Event-Zelt im Freien",
  },
  {
    title: "Privat & Sonderfälle",
    description:
      "Auch für Privatpersonen bei temporärem Kühlbedarf — z. B. während Renovierungen oder bei defekter Klimaanlage.",
    image: "/images/privat.png",
    alt: "Mobil-Klimaanlage auf Anhänger mit Klimaschlauch durch ein Wohnungsfenster für privaten Kühlbedarf",
  },
];

export default function UseCases() {
  return (
    <section id="einsatz" className="section-padding bg-white">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading text-slate-900">
            <span className="text-gradient-ice">Einsatzbereiche</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ob B2B oder privat — unsere mobilen Klimaanlagen passen sich Ihrem Einsatzort an.
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
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
