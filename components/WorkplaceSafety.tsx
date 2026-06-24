const points = [
  {
    title: "Gesetzliche Pflicht des Arbeitgebers",
    description:
      "Nach der Arbeitsstättenverordnung (ArbStättV) müssen Arbeitgeber dafür sorgen, dass die Raumtemperatur den Gesundheitsschutz der Beschäftigten nicht gefährdet. Das gilt auch in Büros, Werkstätten und Lagerbereichen.",
  },
  {
    title: "Richtwerte bei Sommerhitze",
    description:
      "Die ASR A3.5 empfiehlt für leichte Büroarbeit im Sommer eine Raumtemperatur von maximal 26 °C. Bei höheren Werten steigen Konzentration, Leistungsfähigkeit und Wohlbefinden oft spürbar ab.",
  },
  {
    title: "Risiken bei Überhitzung",
    description:
      "Zu warme Arbeitsplätze können zu Kopfschmerzen, Erschöpfung und erhöhtem Unfallrisiko führen. Besonders bei Klimaanlagen-Ausfall, Bauphase oder Hitzewellen braucht es schnelle Abhilfe.",
  },
  {
    title: "Schnelle Lösung ohne Umbau",
    description:
      "Unsere mobilen Kühl-Lösungen — Anhänger-Klimaanlage oder Spotcooler — sind eine pragmatische Übergangslösung: schnell aus Wehrheim geliefert, ohne bauliche Eingriffe.",
  },
];

export default function WorkplaceSafety() {
  return (
    <section id="arbeitsschutz" className="section-padding mesh-dark text-white">
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Arbeitsschutz & Arbeitgeberpflicht
            </p>
            <h2 className="section-heading mt-4">
              Kühle Arbeitsbedingungen —{" "}
              <span className="text-gradient-ice">keine Kür, sondern Pflicht</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Arbeitgeber müssen angemessene Temperaturen am Arbeitsplatz gewährleisten.
              Wenn die fest installierte Klimaanlage ausfällt oder die Hitze überhandnimmt,
              bieten unsere Mobil-Klimaanlage auf Anhänger und unser Spotcooler schnelle
              Entlastung — Lieferung aus Wehrheim bei Frankfurt.
            </p>
            <a
              href="#anfrage"
              className="btn-glow mt-8 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3 font-semibold text-white transition hover:from-cyan-400 hover:to-sky-400"
            >
              Jetzt für Ihr Team anfragen
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div
                key={point.title}
                className="ice-card-dark p-5 transition hover:border-cyan-400/30"
              >
                <h3 className="font-semibold text-cyan-200">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">
          Hinweis: Keine Rechtsberatung. Die konkreten Anforderungen hängen von Tätigkeit,
          Arbeitsplatz und individueller Gefährdungsbeurteilung ab.
        </p>
      </div>
    </section>
  );
}
