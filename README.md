# Klimaanlage Frankfurt

One-Pager-Webseite für mobile Klimaanlagen-Vermietung (B2B-Fokus).

## Entwicklung

```bash
npm install
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000).

## Bestand & Preise aktualisieren

Bearbeiten Sie [`data/inventory.json`](data/inventory.json) und deployen Sie neu.

## E-Mail-Konfiguration

1. Account bei [Resend](https://resend.com) erstellen
2. Domain verifizieren
3. `.env.local` anlegen (siehe `.env.example`):

```env
RESEND_API_KEY=re_...
INQUIRY_EMAIL_TO=info@ihre-domain.de
INQUIRY_EMAIL_FROM=Klimaanlage Frankfurt <anfragen@ihre-domain.de>
```

Ohne Konfiguration werden Anfragen in der Server-Konsole geloggt (für lokale Tests).

## Deployment (Vercel)

1. Repository auf GitHub pushen
2. In Vercel importieren
3. Umgebungsvariablen setzen
4. Optional: eigene Domain verknüpfen

## Vor Go-Live

- [ ] Impressum mit echten Daten füllen (`app/impressum/page.tsx`)
- [ ] Datenschutzerklärung prüfen lassen (`app/datenschutz/page.tsx`)
- [ ] Technische Daten in `components/Specs.tsx` anpassen
- [ ] Preise in `data/inventory.json` finalisieren
- [ ] Resend-Domain verifizieren
