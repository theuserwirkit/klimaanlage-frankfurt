"use client";

import Image from "next/image";
import type { Inventory } from "@/lib/inventory";

interface ProductsProps {
  inventory: Inventory;
}

export default function Products({ inventory }: ProductsProps) {
  return (
    <section id="geraete" className="section-padding bg-white">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading text-slate-900">
            Unsere <span className="text-gradient-ice">Geräte</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Zwei Lösungen für unterschiedliche Einsätze — beide mobil, schnell verfügbar
            und ohne baulichen Eingriff.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {inventory.products.map((product) => (
            <article
              key={product.id}
              className="ice-card overflow-hidden transition hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{product.description}</p>
                <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-slate-500">Kühlleistung</dt>
                    <dd className="mt-0.5 font-semibold text-slate-900">
                      {product.coolingCapacityKw} kW
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Verfügbar</dt>
                    <dd className="mt-0.5 font-semibold text-slate-900">
                      {product.availableUnits} von {product.totalUnits}
                    </dd>
                  </div>
                </dl>
                <a
                  href="#anfrage"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
                >
                  Jetzt anfragen →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
