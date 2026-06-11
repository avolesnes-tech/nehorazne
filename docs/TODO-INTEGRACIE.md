# Nehorázne — Integračný plán (frontend ↔ backend)

Stav k 11. 6. 2026. Web je statický (GitHub Pages), bez backendu. Toto je zoznam toho,
čo treba prepojiť, v poradí podľa priority.

---

## 🔴 1. BEZPEČNOSŤ — Brevo API kľúč (urob HNEĎ)

Pôvodný Brevo API kľúč bol zverejnený priamo v `index.html` a je v histórii git repozitára.
Ktokoľvek si ho mohol skopírovať a posielať cezeň e-maily / čítať kontakty.

1. Prihlás sa do Brevo → **Account → SMTP & API → API Keys** → starý kľúč **zmaž**.
2. Nový kľúč **nikdy nevkladaj do kódu**. Kód je už pripravený na proxy (premenná
   `BREVO_PROXY_URL` v `index.html`).
3. Kým proxy nie je nasadená, newsletter funguje cez pripravený e-mail (mailto) — nič nepadá.

### Odporúčaná proxy: Cloudflare Worker (zadarmo)

```js
// worker.js — jediný účel: prijať {email} a poslať do Brevo so skrytým kľúčom
export default {
  async fetch(request, env) {
    const cors = {
      'Access-Control-Allow-Origin': 'https://avolesnes-tech.github.io',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: cors });

    const { email } = await request.json().catch(() => ({}));
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      return new Response(JSON.stringify({ error: 'invalid email' }), { status: 400, headers: cors });

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'api-key': env.BREVO_API_KEY },
      body: JSON.stringify({ email, listIds: [2], updateEnabled: true }),
    });
    return new Response(null, { status: res.ok ? 204 : res.status, headers: cors });
  },
};
```

Nasadenie: `npx wrangler deploy`, kľúč ulož ako secret:
`npx wrangler secret put BREVO_API_KEY`. URL workera potom doplň do `BREVO_PROXY_URL`
v `index.html`.

---

## 🟠 2. Platby — e-shop a predplatné

Aktuálny stav: predobjednávky cez mailto (zámerne — bez živnosti sa predávať nedá,
pozri `docs/PRAVNA-ANALYZA.md`).

Odporúčané poradie po založení živnosti:

1. **Stripe Payment Links** — najrýchlejší štart pre statický web. Pre každý produkt
   a každú úroveň predplatného vytvoríš v Stripe odkaz; v `eshop/index.html` len
   vymeníš mailto za tieto URL (pole `PRODUCTS` môže dostať kľúč `stripeUrl`).
   Predplatné "Píšem Ti." rieš ako Stripe **recurring price** (6/12 mesiacov) alebo
   jednorazovú platbu — jednorazová je administratívne jednoduchšia.
2. Alternatíva pre SR trh: **GoPay / Besteron / Comgate** (podporujú slovenské banky),
   ale vyžadujú viac integrácie než Payment Links.
3. Pri platbách kartou cez Stripe **netreba eKasa** pre platby na účet — over s účtovníčkou
   (detail v právnej analýze).
4. Po zapnutí platieb: tlačidlo v objednávke MUSÍ mať text „Objednávka s povinnosťou
   platby" (zákonná povinnosť) a checkbox súhlasu s VOP.

---

## 🟠 3. Objednávkový formulár (medzikrok pred platbami)

Ak chceš zbierať záväznejšie predobjednávky než mailto:
- **Formspree** alebo **Web3Forms** (zadarmo, bez backendu) — formulár pošle objednávku
  na tvoj e-mail. Stačí vymeniť `action` formulára.
- Dáta = osobné údaje → uchovávaj len v e-maile, nezbieraj viac, než treba
  (meno, e-mail, adresa, produkt).

---

## 🟡 4. E-mail automatizácia (Brevo)

- Osobnostný test ukladá e-mail len do localStorage — po nasadení proxy ho posielaj
  do Brevo do samostatného zoznamu „Test" (segmentácia podľa výslednej rebelky cez
  atribút kontaktu `REBELKA`).
- Nastav double opt-in v Brevo (potvrdenie e-mailom) — čistejšia GDPR pozícia.
- Uvítacia automatizácia: výsledok testu + 1 príbeh zadarmo = dôvod nechať si newsletter.

---

## 🟡 5. Doména a hosting

- `nehorazne.sk` je vo footeri, ale web beží na `avolesnes-tech.github.io/nehorazne/`.
  Kúp doménu (~12 €/rok) a nastav GitHub Pages **custom domain** + HTTPS.
- Po prechode na vlastnú doménu: aktualizuj `og:url`, `canonical`, `sitemap.xml`, `robots.txt`
  a CORS origin v Cloudflare Workeri.
- Zváž presun na **Cloudflare Pages** — rovnaký git workflow, a Workers (newsletter proxy)
  budú v jednom účte.

## 🟡 6. Analytika (až po consent bannere — ten už je nasadený)

- Consent banner (`assets/js/consent.js`) ukladá voľbu do `localStorage.spn_consent`.
- Google Analytics 4 alebo súkromnejší **Plausible/Umami** načítaj LEN ak
  `localStorage.getItem('spn_consent') === 'all'`.
- Plausible (9 €/mes.) nepotrebuje ani consent banner — bezcookie alternatíva, odporúčam.

## 🟢 7. Drobnosti frontend

- [ ] Favicon + apple-touch-icon (zatiaľ chýba).
- [ ] Self-host Google Fonts (GDPR čistejšie + rýchlejšie LCP) — `google-webfonts-helper`.
- [ ] Obrázky mikín zjednotiť na .webp (mikina_soltesova_back je .jpeg, veľká).
- [ ] `sitemap.xml` doplniť o /eshop/, /obchodne-podmienky/, /cookies/.
- [ ] Zvyšné podstránky žien (timrava, vansova, gregorova) preklopiť na novú štruktúru
  podľa šablóny soltesova (timeline, Vtedy/Dnes, list, vzor a región).
- [ ] Podjavorinská — stránka v navigácii hlavnej stránky chýba, ale e-shop s ňou počíta;
  dorob subpage alebo ju z PRODUCTS dočasne vyraď.

## Súhrn architektúry (cieľový stav)

```
GitHub Pages / Cloudflare Pages  (statický web)
        │
        ├── Cloudflare Worker  →  Brevo (newsletter, kontakty)   [secret: API kľúč]
        ├── Stripe Payment Links  →  platby merch + predplatné
        └── Formspree  →  objednávkový/kontaktný formulár (medzikrok)
```

Žiadna databáza, žiadny server na údržbu — všetko spravovateľné jednou osobou.
