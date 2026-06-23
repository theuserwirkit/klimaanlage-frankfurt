import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Klimaanlage Frankfurt",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <Link href="/" className="text-lg font-bold text-slate-900">
            ← Klimaanlage <span className="text-primary-600">Frankfurt</span>
          </Link>
        </div>
      </header>

      <main className="container-max section-padding max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">Impressum</h1>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Angaben gemäß § 5 TMG</h2>
            <p>
              Eventpanther GmbH
              <br />
              Hildegard von Bingen Str. 1
              <br />
              61273 Wehrheim
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a href="mailto:bp@wirkung-group.de" className="text-primary-600 hover:underline">
                bp@wirkung-group.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Eventpanther GmbH
              <br />
              Hildegard von Bingen Str. 1
              <br />
              61273 Wehrheim
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Haftungsausschluss</h2>
            <h3 className="text-lg font-medium text-slate-900">Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            <h3 className="mt-4 text-lg font-medium text-slate-900">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
