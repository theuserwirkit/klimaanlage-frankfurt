import { NextRequest, NextResponse } from "next/server";
import { sendInquiryEmails } from "@/lib/email";
import { getInventory, getProduct } from "@/lib/inventory";
import { calculatePrice } from "@/lib/pricing";
import { calculateRentalDays } from "@/lib/rental";
import { isRateLimited } from "@/lib/rate-limit";
import { inquirySchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Validierungsfehler." },
      { status: 400 }
    );
  }

  const data = parsed.data;

  if (data.honeypot) {
    return NextResponse.json({ success: true });
  }

  if (new Date(data.endDate) < new Date(data.startDate)) {
    return NextResponse.json(
      { error: "Das Enddatum muss nach dem Startdatum liegen." },
      { status: 400 }
    );
  }

  const inventory = getInventory();
  const product = getProduct(inventory, data.productId);

  if (!product) {
    return NextResponse.json({ error: "Ungültiges Gerät ausgewählt." }, { status: 400 });
  }

  const rentalDays = calculateRentalDays(data.startDate, data.endDate);
  if (rentalDays < inventory.minRentalDays) {
    return NextResponse.json(
      {
        error: `Die Mindestmietdauer beträgt ${inventory.minRentalDays} Tage. Bitte passen Sie den Zeitraum an.`,
      },
      { status: 400 }
    );
  }

  if (data.units > product.availableUnits) {
    return NextResponse.json(
      {
        error: `Aktuell sind nur ${product.availableUnits} Gerät(e) vom Typ „${product.shortName}" verfügbar.`,
      },
      { status: 400 }
    );
  }

  const estimate = calculatePrice(
    product,
    inventory,
    data.startDate,
    data.endDate,
    data.units
  );

  const result = await sendInquiryEmails(
    {
      productName: product.name,
      company: data.company,
      contactName: data.contactName,
      email: data.email,
      phone: data.phone,
      useCase: data.useCase,
      location: data.location,
      startDate: data.startDate,
      endDate: data.endDate,
      units: data.units,
      message: data.message,
    },
    product,
    estimate
  );

  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
