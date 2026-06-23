import type { Inventory, Product } from "./inventory";
import { calculateRentalDays } from "./rental";

export interface PriceEstimate {
  rentalDays: number;
  units: number;
  rentalCost: number;
  deliveryFee: number;
  total: number;
  currency: string;
}

export function calculatePrice(
  product: Product,
  inventory: Inventory,
  startDate: string,
  endDate: string,
  units: number,
  includeDelivery = true
): PriceEstimate {
  const actualDays = calculateRentalDays(startDate, endDate);
  const rentalDays = Math.max(actualDays, inventory.minRentalDays);

  let dailyRate = product.pricePerDay;
  if (rentalDays >= 7) {
    dailyRate = product.pricePerWeek / 7;
  }

  const rentalCost = Math.round(dailyRate * rentalDays * units);
  const deliveryFee = includeDelivery ? inventory.deliveryFee : 0;

  return {
    rentalDays,
    units,
    rentalCost,
    deliveryFee,
    total: rentalCost + deliveryFee,
    currency: inventory.currency,
  };
}

export function formatPrice(amount: number, currency = "EUR"): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
