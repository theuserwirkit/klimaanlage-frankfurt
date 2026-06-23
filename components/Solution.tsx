import Image from "next/image";
import ScopeNotice from "@/components/ScopeNotice";

export default function Solution() {
  return (
    <section id="loesung" className="section-padding frost-bg">
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-heading text-slate-900">
              Die Lösung:{" "}
              <span className="text-gradient-ice">Klimaanlage auf Anhänger</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Statt teurer Festinstallation oder ineffizienter Einzelgeräte bringen wir
              kompakte Kühlleistung direkt zu Ihnen. Die Anlage steht auf einem Anhänger
              und bläst über einen flexiblen Schlauch kalte Luft von außen in einzelne
              Räume oder Bereiche.
            </p>
            <ScopeNotice className="mt-6" />
            <ul className="mt-8 space-y-4">
              {[
                "Kein baulicher Eingriff am Gebäude nötig",
                "Schnelle Bereitstellung — oft am selben oder nächsten Tag",
                "Skalierbar: mehrere Geräte für größere Flächen",
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-cyan-500/10 ring-1 ring-cyan-400/20">
            <Image
              src="/images/detail.png"
              alt="Mobile Klimaanlage im Flightcase auf Anhänger mit Abluftschläuchen"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
