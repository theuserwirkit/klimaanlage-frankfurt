import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.INQUIRY_EMAIL_TO;
const fromEmail =
  process.env.INQUIRY_EMAIL_FROM || "Klimaanlage Frankfurt <onboarding@resend.dev>";

console.log("Config:", {
  hasApiKey: Boolean(apiKey),
  toEmail: toEmail || "(leer)",
  fromEmail,
});

if (!apiKey || !toEmail) {
  console.error("Fehlt: RESEND_API_KEY oder INQUIRY_EMAIL_TO");
  process.exit(1);
}

const resend = new Resend(apiKey);
const result = await resend.emails.send({
  from: fromEmail,
  to: toEmail,
  subject: "Test: Klimaanlage Frankfurt",
  html: "<p>Testversand der E-Mail-Konfiguration.</p>",
});

if (result.error) {
  console.error("FEHLER:", result.error);
  process.exit(1);
}

console.log("OK:", result.data);
