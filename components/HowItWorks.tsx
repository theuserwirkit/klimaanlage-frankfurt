const steps = [
  {
    number: "01",
    title: "Anfrage stellen",
    description:
      "Teilen Sie uns Gerätetyp (Anhänger oder Spotcooler), Einsatzort, Zeitraum und Anzahl mit. Wir prüfen die Verfügbarkeit in Wehrheim.",
  },
  {
    number: "02",
    title: "Anlieferung & Aufbau",
    description:
      "Wir liefern aus 61273 Wehrheim bei Frankfurt zu Ihnen — Anhänger-Klimaanlage oder Spotcooler inklusive Schlauch-Anschluss und Positionierung.",
  },
  {
    number: "03",
    title: "Betrieb",
    description:
      "Das Gerät läuft während der Mietdauer. Benötigt wird ein Schutzkontaktstecker (220–240 V) und Zugang zum Einsatzort.",
  },
  {
    number: "04",
    title: "Abholung",
    description:
      "Nach Ablauf der Mietzeit holen wir das Gerät ab. Kein Rückbau, keine baulichen Spuren — einfach und unkompliziert.",
  },
];

export default function HowItWorks() {
  return (
    <section id="ablauf" className="section-padding frost-bg">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading text-slate-900">
            So mieten Sie Klimaanlage oder Spotcooler
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Von der Anfrage bis zur Abholung — in vier Schritten. Lieferung aus Wehrheim in
            Frankfurt und die gesamte Rhein-Main-Region.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="ice-card relative p-6 transition hover:border-cyan-400/40"
            >
              <span className="text-4xl font-bold text-cyan-200/80">{step.number}</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
