import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden mesh-dark text-white">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/hero.png"
          alt="Mobil-Klimaanlage auf Anhänger mit Klimaschläuchen zu einem Bürofenster in Frankfurt"
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
            Mobile Klimatisierung für Unternehmen
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient-ice">Kühle Luft</span> dort, wo Sie sie
            brauchen — ohne Umbau
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Unsere mobilen Klimaanlagen auf Kfz-Anhängern liefern kalte Luft direkt in
            Büros, Teilbereiche in Hallen oder kleinere Zelte — nicht für komplette
            Hallen oder große Venues. Schnell verfügbar, flexibel einsetzbar.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#anfrage"
              className="btn-glow rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3.5 text-center font-semibold text-white transition hover:from-cyan-400 hover:to-sky-400"
            >
              Unverbindlich anfragen
            </a>
            <a
              href="#arbeitsschutz"
              className="rounded-xl border border-cyan-400/25 bg-white/5 px-6 py-3.5 text-center font-semibold text-cyan-100 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              Arbeitsschutz & Pflichten
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
