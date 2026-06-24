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

## E-Mail-Konfiguration (Resend)

1. Account bei [Resend](https://resend.com) erstellen
2. **Domain verifizieren** unter [resend.com/domains](https://resend.com/domains) — z. B. `wirkung-group.de` (DNS-Einträge setzen)
3. API-Key erstellen
4. In Vercel diese **drei** Variablen setzen:

```env
RESEND_API_KEY=re_...
INQUIRY_EMAIL_TO=bp@wirkung-digital.de
INQUIRY_EMAIL_FROM=Klimaanlage Frankfurt <anfragen@wirkung-group.de>
```

5. Nach Änderungen an Env-Variablen **neu deployen** (`vercel --prod`)

**Wichtig:** Ohne verifizierte Domain versendet Resend nur Test-Mails an die Account-E-Mail (`bp@wirkung-digital.de`), nicht an `bp@wirkung-group.de`.

Testversand lokal:

```bash
vercel env run --environment=production -- node scripts/test-email.mjs
```

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
