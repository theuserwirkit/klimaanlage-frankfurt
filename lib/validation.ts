import { z } from "zod";

export const inquirySchema = z.object({
  productId: z.string().min(1, "Bitte wählen Sie ein Gerät."),
  company: z.string().optional(),
  contactName: z.string().min(2, "Bitte geben Sie einen Ansprechpartner an."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z.string().min(6, "Bitte geben Sie eine Telefonnummer an."),
  useCase: z.enum(["Büro", "Industriehalle", "Zelt", "Event", "Privat"], {
    message: "Bitte wählen Sie einen Einsatzbereich.",
  }),
  location: z.string().min(3, "Bitte geben Sie den Einsatzort an."),
  startDate: z.string().min(1, "Bitte wählen Sie ein Startdatum."),
  endDate: z.string().min(1, "Bitte wählen Sie ein Enddatum."),
  units: z.number().int().min(1, "Mindestens 1 Gerät erforderlich."),
  message: z.string().optional(),
  honeypot: z.string().max(0).optional(),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
