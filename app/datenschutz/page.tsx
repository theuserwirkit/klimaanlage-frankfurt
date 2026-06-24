import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — Klimaanlage Frankfurt",
};

export default function DatenschutzPage() {
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
        <h1 className="text-3xl font-bold text-slate-900">Datenschutzerklärung</h1>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Verantwortlicher</h2>
            <p>
              Wirkung live GmbH
              <br />
              Hildegard von Bingen Str. 1
              <br />
              61273 Wehrheim
              <br />
              E-Mail:{" "}
              <a href="mailto:bp@wirkung-group.de" className="text-primary-600 hover:underline">
                bp@wirkung-group.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Wenn Sie unser Anfrageformular nutzen, erheben wir folgende Daten: Firma (optional),
              Ansprechpartner, E-Mail-Adresse, Telefonnummer, Einsatzbereich, Einsatzort,
              gewünschter Zeitraum, Gerätetyp, Anzahl Geräte und optional eine Nachricht.
            </p>
            <p>
              Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und per
              E-Mail an uns übermittelt. Eine Speicherung in einer Datenbank erfolgt nicht.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. E-Mail-Versand</h2>
            <p>
              Für den Versand von Anfrage-E-Mails nutzen wir den Dienst Resend
              (Resend, Inc.). Die von Ihnen eingegebenen Daten werden an Resend übermittelt,
              um die E-Mail zuzustellen. Weitere Informationen finden Sie in der
              Datenschutzerklärung von Resend.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Rechtsgrundlage</h2>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der Beantwortung von Anfragen).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich dazu an die
              oben genannte E-Mail-Adresse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Seite werden
              technisch notwendige Daten (IP-Adresse, Zeitpunkt, aufgerufene Seite) in
              Server-Logfiles gespeichert.
            </p>
          </section>

          <p className="text-sm text-slate-500">
            Bitte lassen Sie diese Datenschutzerklärung vor dem Go-Live von einem
            Rechtsanwalt prüfen und an Ihr Unternehmen anpassen.
          </p>
        </div>
      </main>
    </div>
  );
}
