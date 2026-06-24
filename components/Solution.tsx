import Image from "next/image";
import ScopeNotice from "@/components/ScopeNotice";

const solutions = [
  {
    title: "Mobil-Klimaanlage auf Anhänger",
    description:
      "Kompakte 6,5-kW-Kühlleistung auf einem Kfz-Anhänger. Ein flexibler Abluftschlauch führt kalte Luft direkt ins Gebäude — ideal für Büros, Teilbereiche in Hallen und kleinere Zelte. Kein baulicher Eingriff nötig.",
    image: "/images/detail.png",
    alt: "Mobil-Klimaanlage auf Kfz-Anhänger mit Abluftschlauch zur Miete bei Frankfurt",
  },
  {
    title: "Spotcooler",
    description:
      "Industrieller Spotcooler mit ca. 10 kW Kühlleistung und drei flexiblen Kühlschläuchen. Kühlt gezielt einzelne Arbeitsbereiche in Hallen, auf Baustellen oder bei Events — dort, wo die Wärme am stärksten ist.",
    image: "/images/spotcooler.png",
    alt: "Spotcooler mit Kühlschläuchen zur Miete — Bereichskühlung für Hallen und Baustellen",
  },
];

export default function Solution() {
  return (
    <section id="loesung" className="section-padding frost-bg">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading text-slate-900">
            Zwei <span className="text-gradient-ice">Miet-Lösungen</span> für jeden Einsatz
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ob Klimaanlage auf Anhänger oder Spotcooler — beide Geräte vermieten wir ab unserem
            Standort in <strong>61273 Wehrheim bei Frankfurt</strong>. Sie wählen die passende
            Kühlleistung für Ihren Einsatzort im Rhein-Main-Gebiet.
          </p>
        </div>

        <ScopeNotice className="mx-auto mt-8 max-w-3xl" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="ice-card overflow-hidden transition hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src={solution.image}
                  alt={solution.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900">{solution.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{solution.description}</p>
              </div>
            </article>
          ))}
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            "Kein baulicher Eingriff am Gebäude",
            "Lieferung aus Wehrheim in Frankfurt & Rhein-Main",
            "Oft am selben oder nächsten Werktag verfügbar",
            "Ideal bei Klimaanlagen-Ausfall, Bauphase oder Hitzewelle",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-600 ring-1 ring-cyan-400/30">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
