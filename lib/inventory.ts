import inventoryData from "@/data/inventory.json";

export type UnitStatus = "available" | "rented" | "maintenance";

export interface Unit {
  id: string;
  status: UnitStatus;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  pricePerDay: number;
  pricePerWeek: number;
  coolingCapacityKw: number;
  totalUnits: number;
  availableUnits: number;
  units: Unit[];
}

export interface Inventory {
  minRentalDays: number;
  deliveryFee: number;
  currency: string;
  lastUpdated: string;
  products: Product[];
}

export function getInventory(): Inventory {
  return inventoryData as Inventory;
}

export function getProduct(inventory: Inventory, productId: string): Product | undefined {
  return inventory.products.find((p) => p.id === productId);
}

export function getTotalUnits(inventory: Inventory): number {
  return inventory.products.reduce((sum, p) => sum + p.totalUnits, 0);
}

export function getTotalAvailableUnits(inventory: Inventory): number {
  return inventory.products.reduce((sum, p) => sum + p.availableUnits, 0);
}

export type AvailabilityStatus = "available" | "limited" | "unavailable";

export function getAvailabilityStatus(available: number, total: number): AvailabilityStatus {
  if (available === 0) return "unavailable";
  if (available < total) return "limited";
  return "available";
}

export function getAvailabilityLabel(status: AvailabilityStatus): string {
  switch (status) {
    case "available":
      return "Verfügbar";
    case "limited":
      return "Begrenzt verfügbar";
    case "unavailable":
      return "Aktuell ausgebucht";
  }
}
