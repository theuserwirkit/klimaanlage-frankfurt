export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 mesh-dark text-slate-400">
      <div className="container-max section-padding !py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">
              Klimaanlage <span className="text-gradient-ice">Frankfurt</span>
            </p>
            <p className="mt-2 text-sm">
              Mobil-Klimaanlage auf Anhänger und Spotcooler zur Miete — Standort
              61273 Wehrheim bei Frankfurt. Lieferung in die gesamte Rhein-Main-Region.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400/70">
              Kontakt
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Wirkung live GmbH</li>
              <li>
                Hildegard von Bingen Str. 1
                <br />
                61273 Wehrheim
              </li>
              <li>
                <a href="mailto:bp@wirkung-group.de" className="transition hover:text-cyan-300">
                  bp@wirkung-group.de
                </a>
              </li>
              <li>61273 Wehrheim bei Frankfurt</li>
              <li>Liefergebiet: Frankfurt &amp; Rhein-Main</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400/70">
              Rechtliches
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="/impressum" className="transition hover:text-cyan-300">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="transition hover:text-cyan-300">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-cyan-500/10 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Wirkung live GmbH · Klimaanlage Frankfurt. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
