# Nehorázne — Brief pre Claude Code

## Kontext projektu

Web `https://avolesnes-tech.github.io/nehorazne/` je živý.
Repozitár: `https://github.com/avolesnes-tech/nehorazne`

Homepage (`index.html`) je hotová a nahraná na GitHub. Teraz budujeme zvyšok stránok.

---

## Technický stack

- Čistý HTML / CSS / Vanilla JS — žiadny framework, žiadny build step
- GitHub Pages hosting (statický web)
- Google Fonts — Abril Fatface · Mrs Saint Delafield · Raleway 300/400/500
- Žiadny backend, žiadna databáza

---

## Dizajnový systém — CSS tokeny (skopírovať do každého súboru)

```css
:root {
  --earth:          #2E1A0E;
  --earth-deep:     #1A0D06;
  --warm-brown:     #5C3320;
  --clay:           #8B4513;
  --dust:           #B8845A;
  --blush:          #C9816A;
  --petal:          #E0B89E;
  --cream:          #F4EBE0;
  --cream-warm:     #FAF4EE;

  --violet:         #7B4F6E;
  --violet-light:   #A67896;
  --violet-muted:   #C4A0B5;
  --violet-pale:    #EDE0E8;

  --ink:            #180E08;
  --white:          #FAF7F4;
  --divider:        rgba(200,160,130,0.18);

  --font-display:   'Abril Fatface', Georgia, serif;
  --font-body:      'Raleway', system-ui, sans-serif;
  --font-lit:       'Mrs Saint Delafield', cursive;
}
```

**Google Fonts import (každá stránka):**
```html
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Mrs+Saint+Delafield&family=Raleway:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
```

**Pravidlá:**
- Čierna (`#000`, `--earth-deep`, `--ink`) NIKDY na pozadie sekcií — len nav a footer
- Pozadia sekcií: `--earth`, `--warm-brown`, `--cream`, `--cream-warm`, `--violet`, `--violet-pale`
- CTA buttony: `--violet` s hover `--violet-light`
- Abril Fatface má len jeden rez — nikdy `font-weight: 700/900`, vždy `font-weight: 400`
- Mrs Saint Delafield: používať väčšie veľkosti (min 2rem) — script font potrebuje priestor
- Botanický akvarel PNG vzor na pozadie: `assets/images/botanical-pattern.png` s `opacity: 0.06–0.12`

---

## Štruktúra URL (čo treba vybudovať)

```
/                              ✅ HOTOVO
/zeny-rebelky/                 ← TODO (prehľad 5 žien)
/zeny-rebelky/soltesova/       ← PRIORITA #1
/zeny-rebelky/timrava/         ← TODO
/zeny-rebelky/vansova/         ← TODO
/zeny-rebelky/gregorova/       ← TODO
/zeny-rebelky/podjavorinska/   ← TODO
/eshop/                        ← TODO (mockup)
/o-nas/                        ← TODO
/kontakt/                      ← TODO
/sukromie/                     ← TODO (GDPR)
```

---

## PRIORITA #1 — Subpage Šoltésová

### Súbor: `zeny-rebelky/soltesova/index.html`

### Obsah stránky (v tomto poradí):

**1. HERO sekcia** — tmavé pozadie (`--earth`), botanický vzor
- Breadcrumb: `Ženy rebelky / Elena Maróthy-Šoltésová`
- Vlastnosť badge: `POKORA`
- Meno: `Elena Maróthy-Šoltésová` — Abril Fatface, veľké
- Roky + región: `1855 – 1939 · Turiec / Novohrad`
- Placeholder ilustrácie: `[ILUSTRACIA_SOLTESOVA_HERO]` — 400×560px, vpravo od textu (split layout)
- Perex: *"Tridsaťtri rokov viedla Živenu. Prežila obe svoje deti. Nikdy sa nesťažovala. Len budovala — školy, časopisy, siete, budúcnosť. Bez fanfár. Bez titulkov. Presne tak, ako to robia silné ženy."*

**2. PULL QUOTE sekcia** — `--warm-brown` pozadie
- Citát v Mrs Saint Delafield:
  *„Duševný obzor slovenských žien bol tesno a jednostranne ohraničený — všetky pokusy vyšinúť sa ponadeň boli považované za pochabosť."*
- Atribúcia: `— Elena Maróthy-Šoltésová, 1898`

**3. PREČO BOLA REBELKA** — `--cream` pozadie, 3 stĺpce
- Stĺpec 1 — **Čo robila:** Predsedníčka Živeny 33 rokov. Zakladala ženské školy a kurzy. Spoluzakladala Lipu — výšivkársky spolok. Redigovala časopis Živena. Odmietla čestný doktorát.
- Stĺpec 2 — **Prečo to vtedy šokovalo:** Ženy nemali viesť spolky. Vzdelanie pre ženy bolo luxus. Verejná funkcia ženy bola pohoršením. Odmietnutie doktorátu bolo nepochopiteľné.
- Stĺpec 3 — **Dnes:** Syndróm impostorky. Sklenený strop. "Nie som dosť dobrá." Jej odpoveď: buduj bez potlesku.

**4. JEJ PRÍBEH — Timeline** — `--warm-brown` pozadie, vertikálna os
- `1855` — Narodila sa v Krupine v rodine štúrovského básnika
- `1875` — Vydala sa a presťahovala do Martina — centra slovenského kultúrneho života
- `1880` — Vstúpila do Živeny, začala literárnu činnosť
- `1894` — Stala sa predsedníčkou Živeny — funkciu zastávala 33 rokov
- `1910` — Spoluzakladala Lipu — výšivkársky spolok pre slovenské ženy (prepojenie na Šenšelovú!)
- `1923` — Vydala Moje deti — hlboká spomienka na dve stratené deti
- `1927` — Odišla z predsedníctva Živeny po 33 rokoch
- `1939` — Zomrela v Martine. Posledné slová boli pre Vansovú.

**5. ČO NÁS UČÍ DNES** — `--earth` pozadie, tabuľka Vtedy / Dnes
| Vtedy | Dnes |
|---|---|
| Ženy nemajú viesť spolky | Women don't belong in leadership |
| Vzdelanie pre ženy je luxus | Gender pay gap, sklenený strop |
| Nebuď príliš viditeľná | Syndróm impostorky |
| Odmietnutie titulu = slabosť | Pokora ako sila, nie slabosť |

**6. VZOR A REGIÓN** — `--cream-warm` pozadie
- Región: Martin (Turiec) + Novohrad / Krupina
- Vzor: Martinský geometrický ornament + výšivka Lipy
- Farby: hlbokofialová + biela výšivka
- Krátky text o prepojení Šoltésovej na výšivkárstvo a Lipu

**7. CTA — E-SHOP** — `--violet` pozadie
- Nadpis: *"Nos jej odkaz."*
- 2 produktové karty (mockup): Mikina POKORA + Tote bag POKORA
- Button: `Pozrieť produkty →` → `/eshop/?zena=soltesova`

**8. ĎALŠIA REBELKA** — prechod na Timravu
- *"Spoznaj Timravu →"* s ilustráciou placeholder a vlastnosťou UPRÍMNOSŤ

---

## Šablóna navigácie (rovnaká ako homepage)

```html
<nav class="nav" id="mainNav">
  <a href="/" class="nav__logo">Slovenky <span>pred nami</span></a>
  <ul class="nav__links">
    <li class="nav__dropdown">
      <button class="nav__dropdown-toggle">Ženy rebelky ▾</button>
      <ul class="nav__dropdown-menu">
        <li><a href="/zeny-rebelky/soltesova/">Elena Maróthy-Šoltésová <span class="vlastnost-tag">Pokora</span></a></li>
        <li><a href="/zeny-rebelky/timrava/">Božena Slančíková-Timrava <span class="vlastnost-tag">Uprímnosť</span></a></li>
        <li><a href="/zeny-rebelky/vansova/">Terézia Vansová <span class="vlastnost-tag">Múdrosť</span></a></li>
        <li><a href="/zeny-rebelky/gregorova/">Hana Gregorová <span class="vlastnost-tag">Odvaha</span></a></li>
        <li><a href="/zeny-rebelky/podjavorinska/">Ľudmila Podjavorinská <span class="vlastnost-tag">Sila</span></a></li>
      </ul>
    </li>
    <li><a href="/eshop/">E-shop</a></li>
    <li><a href="/o-nas/">O nás</a></li>
    <li><a href="/kontakt/">Kontakt</a></li>
  </ul>
</nav>
```

---

## Šablóna footera (rovnaká ako homepage)

```html
<footer class="footer">
  <div class="footer__grid">
    <div class="footer__brand">
      <a href="/" class="nav__logo">Slovenky <span>pred nami</span></a>
      <p class="footer__tagline">„Ona tu bola prvá."</p>
      <div class="footer__social">
        <a href="https://instagram.com/nehorazne">IG</a>
        <a href="https://facebook.com/nehorazne">FB</a>
      </div>
    </div>
    <div>
      <p class="footer__col-title">Ženy rebelky</p>
      <ul class="footer__links">
        <li><a href="/zeny-rebelky/soltesova/">Elena Maróthy-Šoltésová</a></li>
        <li><a href="/zeny-rebelky/timrava/">Božena Slančíková-Timrava</a></li>
        <li><a href="/zeny-rebelky/vansova/">Terézia Vansová</a></li>
        <li><a href="/zeny-rebelky/gregorova/">Hana Gregorová</a></li>
        <li><a href="/zeny-rebelky/podjavorinska/">Ľudmila Podjavorinská</a></li>
      </ul>
    </div>
    <div>
      <p class="footer__col-title">Ďalšie</p>
      <ul class="footer__links">
        <li><a href="/eshop/">E-shop</a></li>
        <li><a href="/o-nas/">O nás</a></li>
        <li><a href="/kontakt/">Kontakt</a></li>
        <li><a href="/sukromie/">Ochrana súkromia</a></li>
      </ul>
    </div>
  </div>
  <div class="footer__bottom">
    <span>© 2025 Anna Lockwoodová · nehorazne.sk</span>
    <span>Vytvorené s láskou k ženám, ktoré boli pred nami.</span>
  </div>
</footer>
```

---

## Ilustrácie — placeholdery

Kým nie sú hotové vlastné ilustrácie, použiť CSS placeholder:
```css
.illustration-placeholder {
  background: linear-gradient(160deg, var(--warm-brown), var(--earth));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 6rem;
  color: rgba(250,244,238,0.15);
}
/* Text obsahu: iniciála ženy — pre Šoltésovú "E" */
```

**Rozmery ilustrácií:**
- Hero (subpage): `400×560px` — `[ILUSTRACIA_SOLTESOVA_HERO]`
- Karta (homepage grid): `300×400px` — `[ILUSTRACIA_SOLTESOVA_KARTA]`

---

## Botanický vzor pozadia

Súbor: `assets/images/botanical-pattern.png` (akvarel, točité vetvičky s lístkami)

CSS použitie:
```css
.section::before {
  content: '';
  position: absolute; inset: 0;
  background-image: url('/assets/images/botanical-pattern.png');
  background-size: 300px;
  background-repeat: repeat;
  opacity: 0.07;
  pointer-events: none;
}
```
Opacity podľa sekcie: tmavé pozadia `0.08–0.12`, svetlé `0.05–0.08`

---

## Tone of voice — písanie textov

- Priamy, silný, ženský hlas
- Nie akademický, nie múzeálny
- Moderná slovenčina, žiadne arhaizmy
- Krátke vety. Razantné. Bez zbytočných prídavných mien.
- ✓ *"Tridsaťtri rokov viedla Živenu. Prežila obe svoje deti. Nikdy sa nesťažovala."*
- ✗ *"Táto významná osobnosť slovenských dejín sa vyznačovala..."*

---

## Súbory v repozitári

```
avolesnes-tech/nehorazne/
├── index.html                ✅ hotovo
├── README.md                 ✅ hotovo
└── zeny-rebelky/
    └── soltesova/
        └── index.html        ← VYTVORIŤ
```

---

## Poznámky

- Web je v slovenčine, žiadna anglická verzia zatiaľ
- Osobnostný test na homepage je funkčný (vanilla JS, email gate)
- E-shop je zatiaľ mockup — bez skutočnej platby
- Projekt súvisí so sesterskou stránkou: https://avolesnes-tech.github.io/anna-senselova/
- Zakladateľka: Anna Lockwoodová · senselovaanna@gmail.com
