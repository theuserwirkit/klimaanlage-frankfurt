"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Welche Geräte kann ich bei Ihnen mieten?",
    answer:
      "Wir vermieten zwei mobile Kühl-Lösungen ab unserem Standort in 61273 Wehrheim bei Frankfurt: die Mobil-Klimaanlage auf Kfz-Anhänger (6,5 kW Kühlleistung) für Büros und kleinere Bereiche sowie den industriellen Spotcooler (ca. 10 kW) mit drei flexiblen Kühlschläuchen für gezielte Bereichskühlung in Hallen, auf Baustellen und bei Events.",
  },
  {
    question: "Was ist der Unterschied zwischen Anhänger-Klimaanlage und Spotcooler?",
    answer:
      "Die Mobil-Klimaanlage auf Anhänger steht außerhalb und bläst kalte Luft über einen Schlauch ins Gebäude — ideal für Büros und Räume bis ca. 80 m². Der Spotcooler steht im oder am Gebäude und kühlt mit bis zu drei Schlauch-Auslässen gezielt einzelne Arbeitsbereiche — besonders in Hallen, auf Baustellen oder bei Events, wo punktgenaue Kühlung nötig ist.",
  },
  {
    question: "Von wo aus liefern Sie?",
    answer:
      "Unser Standort ist die Wirkung live GmbH in 61273 Wehrheim bei Frankfurt. Von dort beliefern wir Frankfurt am Main, Offenbach, Wiesbaden, Mainz, Darmstadt und die gesamte Rhein-Main-Region. Für Einsätze außerhalb erstellen wir Ihnen gerne ein individuelles Angebot.",
  },
  {
    question: "Muss ich als Arbeitgeber für angemessene Temperaturen sorgen?",
    answer:
      "Ja. Nach der ArbStättV müssen Arbeitgeber geeignete Raumtemperaturen gewährleisten. Die ASR A3.5 empfiehlt für leichte Büroarbeit im Sommer maximal 26 °C. Fällt die fest installierte Klimaanlage aus oder droht eine Hitzewelle, kann unsere mobile Lösung schnell Abhilfe schaffen — ohne auf eine Sanierung warten zu müssen.",
  },
  {
    question: "Sind das Groß-Klimaanlagen für ganze Hallen oder Venues?",
    answer:
      "Nein. Unsere Mietgeräte sind kompakte mobile Klimaanlagen: die Anhänger-Variante mit 6,5 kW für Räume bis ca. 80 m² und der Spotcooler mit 10 kW für gezielte Bereichskühlung. Für die Klimatisierung kompletter Hallen oder großer Venues sind leistungsstärkere Systeme nötig.",
  },
  {
    question: "Wie funktioniert die Kühlung mit dem Anhänger?",
    answer:
      "Die Klimaanlage steht auf einem Kfz-Anhänger und wird außerhalb positioniert. Über einen flexiblen Abluftschlauch wird kalte Luft direkt in Ihr Gebäude, Büro oder Zelt eingeblasen — ohne bauliche Eingriffe am Gebäude.",
  },
  {
    question: "Wie funktioniert der Spotcooler?",
    answer:
      "Der Spotcooler wird im oder am Gebäude aufgestellt. Bis zu drei flexible Kühlschläuche führen kalte Luft gezielt an die Stellen, wo sie gebraucht wird — z. B. an einzelne Arbeitsplätze in einer Halle oder an einen Messestand. Die warme Abluft wird über einen separaten Schlauch nach außen geführt.",
  },
  {
    question: "Welchen Stromanschluss benötige ich?",
    answer:
      "Beide Geräte benötigen einen Standard-Schutzkontaktstecker (Typ F/E) mit 220–240 V. Die Anhänger-Klimaanlage benötigt 12 A, der Spotcooler 16 A. Ein normaler Starkstromanschluss oder eine geeignete Steckdose in Reichweite reicht aus.",
  },
  {
    question: "Was kostet die Miete?",
    answer:
      "Die Tagesmiete beträgt ab 149 € pro Gerät, die Wochenmiete ab 899 € — für Mobil-Klimaanlage und Spotcooler. Zuzüglich kommt eine Lieferpauschale von 80 € aus Wehrheim. Die Mindestmietdauer beträgt 4 Tage. Den genauen Richtpreis sehen Sie im Anfrageformular.",
  },
  {
    question: "Wie schnell kann ein Gerät geliefert werden?",
    answer:
      "Je nach Verfügbarkeit ist eine Lieferung aus Wehrheim oft am selben oder nächsten Werktag in Frankfurt und Umgebung möglich. Die aktuelle Verfügbarkeit sehen Sie unter Preise & Verfügbarkeit.",
  },
  {
    question: "Kann ich mehrere Geräte gleichzeitig mieten?",
    answer:
      "Ja. Wir haben 3 Mobil-Klimaanlagen auf Anhänger und 7 Spotcooler im Bestand (aktuell 3 Spotcooler verfügbar, 4 in Dauervermietung). Im Anfrageformular geben Sie die gewünschte Anzahl an — wir prüfen die Verfügbarkeit und melden uns mit einem verbindlichen Angebot.",
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
            Antworten zu Miete, Lieferung aus Wehrheim, Einsatz und Technik — Klimaanlage
            und Spotcooler.
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
