"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Muss ich als Arbeitgeber für angemessene Temperaturen sorgen?",
    answer:
      "Ja. Nach der ArbStättV müssen Arbeitgeber geeignete Raumtemperaturen gewährleisten. Die ASR A3.5 empfiehlt für leichte Büroarbeit im Sommer maximal 26 °C. Fällt die fest installierte Klimaanlage aus oder droht eine Hitzewelle, kann unsere mobile Lösung schnell Abhilfe schaffen — ohne auf eine Sanierung warten zu müssen.",
  },
  {
    question: "Welche Geräte bieten Sie an?",
    answer:
      "Wir vermieten Mobil-Klimaanlagen auf Kfz-Anhänger (6,5 kW) für Büros und kleinere Bereiche sowie industrielle Spotcooler (ca. 10 kW) mit mehreren Kühlschläuchen für gezielte Bereichskühlung in Hallen, auf Baustellen oder bei Events.",
  },
  {
    question: "Sind das Groß-Klimaanlagen für ganze Hallen oder Venues?",
    answer:
      "Nein. Unsere Geräte sind kompakte mobile Klimaanlagen mit 6,5 kW Kühlleistung — geeignet für Räume bis ca. 80 m². Sie eignen sich für Büros, einzelne Bereiche in Hallen oder kleinere Zelte. Für die Klimatisierung kompletter Hallen oder großer Venues sind andere, leistungsstärkere Systeme nötig.",
  },
  {
    question: "Wie funktioniert die Kühlung mit dem Anhänger?",
    answer:
      "Die Klimaanlage steht auf einem Kfz-Anhänger und wird außerhalb positioniert. Über einen flexiblen Abluftschlauch wird kalte Luft direkt in Ihr Gebäude, Büro oder Zelt eingeblasen — ohne bauliche Eingriffe am Gebäude.",
  },
  {
    question: "Für welche Raumgröße ist ein Gerät geeignet?",
    answer:
      "Ein Gerät kühlt Räume bis ca. 80 m² bzw. 250 m³. Bei größeren Flächen oder besonders hoher Wärmebelastung empfehlen wir mehrere Geräte — sprechen Sie uns einfach an.",
  },
  {
    question: "Welchen Stromanschluss benötige ich?",
    answer:
      "Das Gerät benötigt einen Standard-Schutzkontaktstecker (Typ F/E) mit 220–240 V und 12 A. Ein normaler Starkstromanschluss im Gebäude oder eine geeignete Steckdose in Reichweite des Anhängers reicht aus.",
  },
  {
    question: "Wie laut ist das Gerät im Betrieb?",
    answer:
      "Der Schalldruck des Innengeräts beträgt ca. 65 dB. Das entspricht etwa einem normalen Gespräch. Für besonders geräuschempfindliche Umgebungen beraten wir Sie gerne zur optimalen Aufstellung.",
  },
  {
    question: "Was kostet die Miete?",
    answer:
      "Die Tagesmiete beträgt ab 149 € pro Gerät, die Wochenmiete ab 899 € — für Mobil-Klimaanlage und Spotcooler. Zuzüglich kommt eine Lieferpauschale von 80 €. Die Mindestmietdauer beträgt 4 Tage. Den genauen Richtpreis für Ihren Zeitraum sehen Sie direkt im Anfrageformular.",
  },
  {
    question: "Wie schnell kann ein Gerät geliefert werden?",
    answer:
      "Je nach Verfügbarkeit ist eine Lieferung oft am selben oder nächsten Werktag möglich. Die aktuelle Verfügbarkeit sehen Sie auf dieser Seite unter Preise & Verfügbarkeit.",
  },
  {
    question: "In welchem Gebiet liefern Sie?",
    answer:
      "Wir beliefern Frankfurt am Main und die umliegende Region. Für Einsätze außerhalb des Rhein-Main-Gebiets erstellen wir Ihnen gerne ein individuelles Angebot.",
  },
  {
    question: "Kann ich die Anfrage auch für mehrere Geräte stellen?",
    answer:
      "Ja. Im Anfrageformular können Sie die gewünschte Anzahl Geräte angeben. Wir prüfen die Verfügbarkeit und melden uns mit einem verbindlichen Angebot bei Ihnen.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading text-slate-900">
            Häufige <span className="text-gradient-ice">Fragen</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Antworten auf die wichtigsten Fragen rund um Miete, Einsatz und Technik.
          </p>
        </div>

        <div className="ice-card mx-auto mt-12 max-w-3xl divide-y divide-cyan-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-cyan-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
