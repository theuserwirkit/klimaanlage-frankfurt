import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden mesh-dark text-white">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/hero.png"
          alt="Mobil-Klimaanlage auf Anhänger und Spotcooler zur Miete bei Frankfurt am Main"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-midnight/95 via-midnight-850/90 to-primary-950/80" />

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="container-max relative section-padding">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-200 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            Vermietung aus 61273 Wehrheim · Frankfurt &amp; Rhein-Main
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient-ice">Klimaanlage &amp; Spotcooler</span>{" "}
            mieten — mobil und ohne Umbau
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Wir vermieten zwei mobile Kühl-Lösungen aus Wehrheim bei Frankfurt: die{" "}
            <strong className="font-semibold text-white">Mobil-Klimaanlage auf Anhänger</strong>{" "}
            (6,5&nbsp;kW) für Büros und kleinere Bereiche sowie den{" "}
            <strong className="font-semibold text-white">Spotcooler</strong> (10&nbsp;kW) mit
            drei Kühlschläuchen für gezielte Bereichskühlung in Hallen, auf Baustellen und bei
            Events. Schnell verfügbar — Lieferung in Frankfurt und das gesamte Rhein-Main-Gebiet.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#anfrage"
              className="btn-glow rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3.5 text-center font-semibold text-white transition hover:from-cyan-400 hover:to-sky-400"
            >
              Unverbindlich anfragen
            </a>
            <a
              href="#geraete"
              className="rounded-xl border border-cyan-400/25 bg-white/5 px-6 py-3.5 text-center font-semibold text-cyan-100 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              Geräte vergleichen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
