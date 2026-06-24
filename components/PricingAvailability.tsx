import type { Inventory } from "@/lib/inventory";
import { getAvailabilityLabel, getAvailabilityStatus } from "@/lib/inventory";
import { formatPrice } from "@/lib/pricing";

interface PricingAvailabilityProps {
  inventory: Inventory;
}

const statusStyles = {
  available: {
    dot: "bg-emerald-400 shadow-emerald-400/50",
    bg: "bg-emerald-500/10",
    text: "text-emerald-300",
    ring: "ring-emerald-400/30",
  },
  limited: {
    dot: "bg-amber-400 shadow-amber-400/50",
    bg: "bg-amber-500/10",
    text: "text-amber-300",
    ring: "ring-amber-400/30",
  },
  unavailable: {
    dot: "bg-red-400 shadow-red-400/50",
    bg: "bg-red-500/10",
    text: "text-red-300",
    ring: "ring-red-400/30",
  },
};

export default function PricingAvailability({ inventory }: PricingAvailabilityProps) {
  return (
    <section id="preise" className="section-padding frost-bg">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading text-slate-900">
            Preise & <span className="text-gradient-ice">Verfügbarkeit</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Transparente Mietpreise für Klimaanlage auf Anhänger und Spotcooler —
            Verfügbarkeit in Echtzeit. Lieferung aus 61273 Wehrheim bei Frankfurt.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {inventory.products.map((product) => {
            const status = getAvailabilityStatus(product.availableUnits, product.totalUnits);
            const styles = statusStyles[status];

            return (
              <div key={product.id} className="ice-card p-8">
                <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>

                <div
                  className={`mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 ring-1 ${styles.bg} ${styles.text} ${styles.ring}`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full shadow-sm ${styles.dot}`} />
                  <span className="text-sm font-semibold">{getAvailabilityLabel(status)}</span>
                </div>

                <p className="mt-4 text-2xl font-bold text-slate-900">
                  {product.availableUnits}{" "}
                  <span className="text-base font-normal text-slate-500">
                    von {product.totalUnits} Geräten
                  </span>
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-slate-500">Tagesmiete</p>
                    <p className="text-3xl font-bold text-gradient-ice">
                      {formatPrice(product.pricePerDay, inventory.currency)}
                    </p>
                    <p className="text-xs text-slate-500">pro Gerät / Tag</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Wochenmiete</p>
                    <p className="text-3xl font-bold text-gradient-ice">
                      {formatPrice(product.pricePerWeek, inventory.currency)}
                    </p>
                    <p className="text-xs text-slate-500">pro Gerät / 7 Tage</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="ice-card mx-auto mt-8 max-w-2xl p-6 text-center">
          <ul className="space-y-1 text-sm text-slate-600">
            <li>Mindestmietdauer: {inventory.minRentalDays} Tage</li>
            <li>Lieferpauschale aus Wehrheim: {formatPrice(inventory.deliveryFee, inventory.currency)}</li>
            <li>
              Stand: {new Date(inventory.lastUpdated).toLocaleDateString("de-DE")}
            </li>
          </ul>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Alle Preise verstehen sich als Netto-Richtwerte zzgl. MwSt. Das verbindliche
          Angebot erhalten Sie nach Prüfung Ihrer Anfrage.
        </p>
      </div>
    </section>
  );
}
