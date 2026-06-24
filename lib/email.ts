import { Resend } from "resend";
import type { Product } from "./inventory";
import type { PriceEstimate } from "./pricing";
import { formatPrice } from "./pricing";

export interface InquiryData {
  productName: string;
  company?: string;
  contactName: string;
  email: string;
  phone: string;
  useCase: string;
  location: string;
  startDate: string;
  endDate: string;
  units: number;
  message?: string;
}

const FALLBACK_CONTACT_EMAIL = "bp@wirkung-group.de";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function buildInquiryHtml(
  data: InquiryData,
  product: Product,
  estimate: PriceEstimate
): string {
  return `
    <h2>Neue Mietanfrage — Klimaanlage Frankfurt</h2>
    <h3>Gerät</h3>
    <p><strong>${data.productName}</strong></p>
    <h3>Kontakt</h3>
    <ul>
      <li><strong>Firma:</strong> ${data.company || "—"}</li>
      <li><strong>Ansprechpartner:</strong> ${data.contactName}</li>
      <li><strong>E-Mail:</strong> ${data.email}</li>
      <li><strong>Telefon:</strong> ${data.phone}</li>
    </ul>
    <h3>Einsatz</h3>
    <ul>
      <li><strong>Einsatzbereich:</strong> ${data.useCase}</li>
      <li><strong>Einsatzort:</strong> ${data.location}</li>
      <li><strong>Zeitraum:</strong> ${data.startDate} bis ${data.endDate}</li>
      <li><strong>Anzahl Geräte:</strong> ${data.units}</li>
    </ul>
    <h3>Verfügbarkeit</h3>
    <p>${product.availableUnits} von ${product.totalUnits} Geräten verfügbar (${product.shortName})</p>
    <h3>Richtpreis</h3>
    <ul>
      <li><strong>Mietdauer:</strong> ${estimate.rentalDays} Tag(e)</li>
      <li><strong>Mietkosten:</strong> ${formatPrice(estimate.rentalCost, estimate.currency)}</li>
      <li><strong>Lieferpauschale:</strong> ${formatPrice(estimate.deliveryFee, estimate.currency)}</li>
      <li><strong>Gesamt (Richtwert):</strong> ${formatPrice(estimate.total, estimate.currency)}</li>
    </ul>
    ${data.message ? `<h3>Nachricht</h3><p>${data.message.replace(/\n/g, "<br>")}</p>` : ""}
  `;
}

function buildConfirmationHtml(data: InquiryData): string {
  return `
    <h2>Vielen Dank für Ihre Anfrage!</h2>
    <p>Guten Tag ${data.contactName},</p>
    <p>wir haben Ihre Anfrage für ${data.units} × ${data.productName} im Zeitraum ${data.startDate} bis ${data.endDate} erhalten.</p>
    <p>Wir prüfen die Verfügbarkeit und melden uns in der Regel innerhalb von 24 Stunden bei Ihnen.</p>
    <p>Mit freundlichen Grüßen<br>Ihr Team von Klimaanlage Frankfurt</p>
  `;
}

function formatResendError(context: string, error: { message: string; name: string }) {
  console.error(`Resend Fehler (${context}):`, error);

  if (error.message.includes("verify a domain") || error.message.includes("is not verified")) {
    return `E-Mail-Versand noch nicht freigeschaltet: Bei Resend muss die Absender-Domain verifiziert werden (resend.com/domains). Bitte schreiben Sie uns direkt an ${FALLBACK_CONTACT_EMAIL}.`;
  }

  if (error.message.includes("testing emails to your own email address")) {
    return `E-Mail-Versand im Resend-Testmodus: Bitte Domain bei Resend verifizieren, damit Anfragen an ${FALLBACK_CONTACT_EMAIL} zugestellt werden können.`;
  }

  return `E-Mail konnte nicht gesendet werden (${error.message}). Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt an ${FALLBACK_CONTACT_EMAIL}.`;
}

export async function sendInquiryEmails(
  data: InquiryData,
  product: Product,
  estimate: PriceEstimate
): Promise<{ success: boolean; error?: string }> {
  const resend = getResendClient();
  const toEmail = process.env.INQUIRY_EMAIL_TO;
  const fromEmail =
    process.env.INQUIRY_EMAIL_FROM || "Klimaanlage Frankfurt <onboarding@resend.dev>";

  if (!resend || !toEmail) {
    console.error("E-Mail-Versand nicht konfiguriert.", {
      hasApiKey: Boolean(process.env.RESEND_API_KEY),
      hasToEmail: Boolean(toEmail),
      nodeEnv: process.env.NODE_ENV,
    });

    if (process.env.NODE_ENV === "development") {
      console.log("Anfrage (Dev-Modus, kein Versand):", data);
      return { success: true };
    }

    return {
      success: false,
      error: `E-Mail-Versand ist nicht eingerichtet. Bitte schreiben Sie uns direkt an ${FALLBACK_CONTACT_EMAIL}.`,
    };
  }

  try {
    const inquiryResult = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `Neue Anfrage: ${data.company || data.contactName} — ${data.units} × ${product.shortName}`,
      html: buildInquiryHtml(data, product, estimate),
    });

    if (inquiryResult.error) {
      return {
        success: false,
        error: formatResendError("Anfrage an Betreiber", inquiryResult.error),
      };
    }

    const confirmationResult = await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: "Ihre Anfrage bei Klimaanlage Frankfurt",
      html: buildConfirmationHtml(data),
    });

    if (confirmationResult.error) {
      console.error(
        "Bestätigungsmail fehlgeschlagen, Anfrage-Mail wurde gesendet:",
        confirmationResult.error
      );
    }

    return { success: true };
  } catch (error) {
    console.error("E-Mail-Versand fehlgeschlagen:", error);
    return {
      success: false,
      error: `E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt an ${FALLBACK_CONTACT_EMAIL}.`,
    };
  }
}
