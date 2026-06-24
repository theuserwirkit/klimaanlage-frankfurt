"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Inventory, Product } from "@/lib/inventory";
import { getProduct } from "@/lib/inventory";
import { calculatePrice, formatPrice } from "@/lib/pricing";
import { calculateRentalDays } from "@/lib/rental";
import { inquirySchema, type InquiryFormData } from "@/lib/validation";

interface InquiryFormProps {
  inventory: Inventory;
}

const useCaseOptions = ["Büro", "Industriehalle", "Zelt", "Event", "Privat"] as const;

export default function InquiryForm({ inventory }: InquiryFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      productId: inventory.products[0]?.id ?? "",
      units: 1,
      useCase: "Büro",
    },
  });

  const productId = watch("productId");
  const startDate = watch("startDate");
  const endDate = watch("endDate");
  const units = watch("units");

  const selectedProduct: Product | undefined = getProduct(inventory, productId);

  useEffect(() => {
    if (selectedProduct && Number(units) > selectedProduct.availableUnits) {
      setValue("units", Math.max(selectedProduct.availableUnits, 1));
    }
  }, [productId, selectedProduct, units, setValue]);

  const rentalDays =
    startDate && endDate ? calculateRentalDays(startDate, endDate) : null;
  const rentalTooShort =
    rentalDays !== null && rentalDays < inventory.minRentalDays;

  const priceEstimate =
    selectedProduct && startDate && endDate && units && !rentalTooShort
      ? calculatePrice(selectedProduct, inventory, startDate, endDate, Number(units))
      : null;

  const unitsExceedAvailability =
    selectedProduct !== undefined && Number(units) > selectedProduct.availableUnits;

  async function onSubmit(data: InquiryFormData) {
    if (unitsExceedAvailability) {
      setSubmitStatus("error");
      setErrorMessage(
        `Aktuell sind nur ${selectedProduct?.availableUnits} Gerät(e) verfügbar. Bitte passen Sie die Anzahl an oder kontaktieren Sie uns direkt.`
      );
      return;
    }

    if (rentalTooShort) {
      setSubmitStatus("error");
      setErrorMessage(
        `Die Mindestmietdauer beträgt ${inventory.minRentalDays} Tage. Bitte passen Sie den Zeitraum an.`
      );
      return;
    }

    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Ein Fehler ist aufgetreten.");
        return;
      }

      setSubmitStatus("success");
      reset({
        productId: inventory.products[0]?.id ?? "",
        units: 1,
        useCase: "Büro",
      });
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Verbindungsfehler. Bitte versuchen Sie es später erneut.");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-cyan-500/20 bg-slate-800/50 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-slate-300";
  const errorClass = "mt-1 text-sm text-red-400";

  if (submitStatus === "success") {
    return (
      <section id="anfrage" className="section-padding mesh-dark text-white">
        <div className="container-max">
          <div className="mx-auto max-w-xl rounded-2xl bg-emerald-50 p-8 text-center ring-1 ring-emerald-200">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
              <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">Anfrage gesendet!</h2>
            <p className="mt-2 text-slate-600">
              Vielen Dank. Wir prüfen die Verfügbarkeit und melden uns in der Regel innerhalb
              von 24 Stunden bei Ihnen.
            </p>
            <button
              type="button"
              onClick={() => setSubmitStatus("idle")}
              className="mt-6 text-sm font-medium text-primary-700 hover:text-primary-800"
            >
              Weitere Anfrage stellen
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="anfrage" className="section-padding mesh-dark text-white">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">
            Unverbindliche <span className="text-gradient-ice">Anfrage</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Wählen Sie Klimaanlage auf Anhänger oder Spotcooler — wir erstellen Ihnen ein
            individuelles Angebot mit Lieferung aus Wehrheim bei Frankfurt.
            Mindestmietdauer: {inventory.minRentalDays} Tage.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ice-card-dark mx-auto mt-12 max-w-2xl space-y-6 p-6 sm:p-8"
        >
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input type="text" id="website" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
          </div>

          <div>
            <label htmlFor="productId" className={labelClass}>
              Gerätetyp *
            </label>
            <select id="productId" className={inputClass} {...register("productId")}>
              {inventory.products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} ({product.availableUnits} verfügbar)
                </option>
              ))}
            </select>
            {errors.productId && <p className={errorClass}>{errors.productId.message}</p>}
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>
              Firma
            </label>
            <input
              id="company"
              type="text"
              placeholder="Muster GmbH"
              className={inputClass}
              {...register("company")}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="contactName" className={labelClass}>
                Ansprechpartner *
              </label>
              <input
                id="contactName"
                type="text"
                className={inputClass}
                {...register("contactName")}
              />
              {errors.contactName && <p className={errorClass}>{errors.contactName.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Telefon *
              </label>
              <input id="phone" type="tel" className={inputClass} {...register("phone")} />
              {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              E-Mail *
            </label>
            <input id="email" type="email" className={inputClass} {...register("email")} />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="useCase" className={labelClass}>
                Einsatzbereich *
              </label>
              <select id="useCase" className={inputClass} {...register("useCase")}>
                {useCaseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.useCase && <p className={errorClass}>{errors.useCase.message}</p>}
            </div>
            <div>
              <label htmlFor="location" className={labelClass}>
                Einsatzort (PLZ + Ort) *
              </label>
              <input
                id="location"
                type="text"
                placeholder="60311 Frankfurt"
                className={inputClass}
                {...register("location")}
              />
              {errors.location && <p className={errorClass}>{errors.location.message}</p>}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <label htmlFor="startDate" className={labelClass}>
                Von *
              </label>
              <input id="startDate" type="date" className={inputClass} {...register("startDate")} />
              {errors.startDate && <p className={errorClass}>{errors.startDate.message}</p>}
            </div>
            <div>
              <label htmlFor="endDate" className={labelClass}>
                Bis *
              </label>
              <input id="endDate" type="date" className={inputClass} {...register("endDate")} />
              {errors.endDate && <p className={errorClass}>{errors.endDate.message}</p>}
              {rentalTooShort && (
                <p className={errorClass}>
                  Mindestmietdauer: {inventory.minRentalDays} Tage
                </p>
              )}
            </div>
            <div>
              <label htmlFor="units" className={labelClass}>
                Anzahl Geräte *
              </label>
              <input
                id="units"
                type="number"
                min={1}
                max={selectedProduct?.totalUnits ?? 1}
                className={inputClass}
                {...register("units", { valueAsNumber: true })}
              />
              {errors.units && <p className={errorClass}>{errors.units.message}</p>}
              {unitsExceedAvailability && (
                <p className={errorClass}>
                  Nur {selectedProduct?.availableUnits} Gerät(e) verfügbar
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Nachricht (optional)
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Besonderheiten, Zugangszeiten, gewünschte Anlieferung ..."
              className={inputClass}
              {...register("message")}
            />
          </div>

          {priceEstimate && (
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-5">
              <h3 className="text-sm font-semibold text-cyan-300">Richtpreis-Vorschau</h3>
              <div className="mt-2 space-y-1 text-sm text-cyan-100">
                <p>
                  {selectedProduct?.shortName} · {priceEstimate.rentalDays} Tag(e) ×{" "}
                  {priceEstimate.units} Gerät(e)
                </p>
                <p>Mietkosten: {formatPrice(priceEstimate.rentalCost, priceEstimate.currency)}</p>
                <p>
                  Lieferpauschale: {formatPrice(priceEstimate.deliveryFee, priceEstimate.currency)}
                </p>
                <p className="text-base font-bold">
                  Gesamt (Richtwert): {formatPrice(priceEstimate.total, priceEstimate.currency)}
                </p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="rounded-lg bg-red-500/10 p-4 text-sm text-red-300 ring-1 ring-red-400/20">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || unitsExceedAvailability || rentalTooShort}
            className="btn-glow w-full rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3 font-semibold text-white transition hover:from-cyan-400 hover:to-sky-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Wird gesendet …" : "Anfrage absenden"}
          </button>

          <p className="text-center text-xs text-slate-500">
            Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{" "}
            <a href="/datenschutz" className="text-cyan-400 underline hover:text-cyan-300">
              Datenschutzerklärung
            </a>{" "}
            zu.
          </p>
        </form>
      </div>
    </section>
  );
}
