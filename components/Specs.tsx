"use client";

import { useState } from "react";
import type { Inventory } from "@/lib/inventory";

const productSpecs: Record<
  string,
  { title: string; items: { label: string; value: string }[] }[]
> = {
  "mobile-trailer": [
    {
      title: "Kühlleistung",
      items: [
        { label: "Kühlleistung", value: "6,5 kW (22.000 BTU)" },
        { label: "Leistungsbereich", value: "5,1 – 6,5 kW" },
        { label: "Geeignet für", value: "Räume bis 80 m² / 250 m³" },
        { label: "Funktionen", value: "Kühlung, Entfeuchten, Lüften" },
        { label: "Kühltemperaturbereich", value: "18 – 45 °C" },
        { label: "Luftmenge", value: "800 m³/h" },
      ],
    },
    {
      title: "Strom & Energie",
      items: [
        { label: "Anschlussspannung", value: "220 – 240 V" },
        { label: "Stromstärke", value: "12 A" },
        { label: "Stromverbrauch (Kühlung)", value: "2,2 kWh" },
        { label: "Stecker", value: "Schutzkontaktstecker (Typ F/E)" },
        { label: "Energielabel", value: "A" },
        { label: "EER / SEER", value: "2,6" },
      ],
    },
    {
      title: "Abmessungen & Gerät",
      items: [
        { label: "Höhe", value: "1.135 mm" },
        { label: "Breite", value: "638 mm" },
        { label: "Tiefe", value: "560 mm" },
        { label: "Gewicht", value: "90 kg" },
        { label: "Kältemittel", value: "R290" },
        { label: "Schalldruck", value: "65 dB" },
      ],
    },
  ],
  "spot-cooler": [
    {
      title: "Kühlleistung",
      items: [
        { label: "Kühlleistung", value: "ca. 10 kW" },
        { label: "Geeignet für", value: "Gezielte Bereichskühlung in Hallen & Events" },
        { label: "Kühlschläuche", value: "3 flexible Spot-Schläuche" },
        { label: "Funktionen", value: "Kühlung, Entfeuchten" },
        { label: "Kondenswasser", value: "Integrierter Auffangbehälter" },
        { label: "Mobilität", value: "Auf Rollen, flexibel positionierbar" },
      ],
    },
    {
      title: "Strom & Energie",
      items: [
        { label: "Anschlussspannung", value: "220 – 240 V" },
        { label: "Stromstärke", value: "16 A" },
        { label: "Abluft", value: "Flexibler Abluftschlauch nach außen" },
        { label: "Stecker", value: "Schutzkontaktstecker (Typ F/E)" },
        { label: "Einsatz", value: "Innen- und Außenaufstellung möglich" },
        { label: "Betrieb", value: "Dauerbetrieb geeignet" },
      ],
    },
    {
      title: "Abmessungen & Gerät",
      items: [
        { label: "Bauform", value: "Kompaktes Industriegehäuse" },
        { label: "Aufstellung", value: "Bodenstehend auf Rollen" },
        { label: "Schläuche", value: "3 × Spot-Kühlschlauch + Abluft" },
        { label: "Wartung", value: "Kondensatablauf / Auffangbehälter" },
        { label: "Einsatzbereich", value: "Hallen, Baustellen, Events" },
        { label: "Schalldruck", value: "ca. 68 dB" },
      ],
    },
  ],
};

interface SpecsProps {
  inventory: Inventory;
}

export default function Specs({ inventory }: SpecsProps) {
  const [activeProduct, setActiveProduct] = useState(inventory.products[0]?.id ?? "");
  const specGroups = productSpecs[activeProduct] ?? [];

  return (
    <section id="technik" className="section-padding mesh-dark text-white">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">
            <span className="text-gradient-ice">Technische Daten</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Detaillierte Spezifikationen für beide Gerätetypen — wählen Sie das passende
            Modell für Ihren Einsatz.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {inventory.products.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setActiveProduct(product.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeProduct === product.id
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "border border-cyan-400/25 bg-white/5 text-cyan-100 hover:border-cyan-400/40"
              }`}
            >
              {product.shortName}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {specGroups.map((group) => (
            <div
              key={group.title}
              className="ice-card-dark p-6 transition hover:border-cyan-400/30"
            >
              <h3 className="text-lg font-semibold text-cyan-300">{group.title}</h3>
              <dl className="mt-4 space-y-4">
                {group.items.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm text-slate-500">{item.label}</dt>
                    <dd className="mt-0.5 font-semibold text-white">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
