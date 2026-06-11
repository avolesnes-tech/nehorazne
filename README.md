# Nehorázne

> *Ich posolstvo stále žije. Bojovali aj za nás. Žijú v nás naďalej.*

Kultúrno-komerčný web projekt, ktorý oživuje príbehy historicky silných slovenských žien a pretavuje ich do moderného obsahu, merchu a vzdelávacích materiálov.

**Live:** `https://[username].github.io/nehorazne/`

---

## O projekte

Nehorázne nie je historický archív. Je to zrkadlo — držíme ho pred ženami, ktoré tu boli pred nami, aby sme v ňom videli seba. Päť rebeliek. Päť vlastností. Stále aktuálnych.

| Žena | Vlastnosť | Región |
|---|---|---|
| Elena Maróthy-Šoltésová | Skromnosť | Turiec / Novohrad |
| Božena Slančíková-Timrava | Uprímnosť | Novohrad |
| Terézia Vansová | Odhodlanie | Gemer |
| Hana Gregorová | Odvaha | Martin |
| Ľudmila Podjavorinská | Vytrvalosť | Javorina |

---

## Štruktúra projektu

```
nehorazne/
│
├── index.html                      ← Homepage
├── README.md
│
├── zeny-rebelky/
│   ├── index.html                  ← Prehľad žien
│   ├── soltesova/index.html
│   ├── timrava/index.html
│   ├── vansova/index.html
│   ├── gregorova/index.html
│   └── podjavorinska/index.html
│
├── eshop/
│   └── index.html
│
├── o-nas/
│   └── index.html
│
├── kontakt/
│   └── index.html
│
├── sukromie/
│   └── index.html
│
└── assets/
    ├── css/
    ├── js/
    └── images/
        ├── illustrations/          ← Ilustrácie žien (PNG, WebP)
        ├── products/               ← Mockupy produktov
        └── patterns/               ← Botanické vzory (SVG, PNG)
```

---

## Technológie

- **HTML / CSS / Vanilla JS** — žiadny framework, žiadny build step
- **GitHub Pages** — hosting zadarmo, deploy z `main` branche
- **Google Fonts** — Abril Fatface · Mrs Saint Delafield · Raleway
- **Fourthwall + Printful** — e-shop a print-on-demand (plánované)
- **Substack** — newsletter integrácia

---

## Fonty

| Font | Použitie |
|---|---|
| Abril Fatface | Hlavné nadpisy, H1, H2 |
| Mrs Saint Delafield | Logo "pred nami", citáty, tagline |
| Raleway 300 / 400 | Body text, navigácia, UI prvky |

---

## Farebnú paleta

| Názov | HEX | Použitie |
|---|---|---|
| Earth | `#2E1A0E` | Hero pozadie |
| Warm Brown | `#5C3320` | Sekcie, karty |
| Violet | `#7B4F6E` | CTA, nadpisy akzenty |
| Violet Light | `#A67896` | Hover stavy |
| Cream | `#F4EBE0` | Svetlé pozadia |
| Petal | `#E0B89E` | Subtexty na tmavom |
| Dust | `#B8845A` | Dekoratívne prvky |

---

## Lokálny vývoj

Žiadna inštalácia nie je potrebná — stačí otvoriť `index.html` v prehliadači:

```bash
git clone https://github.com/[username]/nehorazne.git
cd nehorazne
open index.html
```

Alebo s live-serverom (voliteľné):

```bash
npx live-server
```

---

## Deploy na GitHub Pages

1. Choď do **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Ulož — web je živý za 1–2 minúty

### Vlastná doména

Po zakúpení `nehorazne.sk` pridaj do **Settings → Pages → Custom domain** a vytvor súbor `CNAME`:

```
nehorazne.sk
```

---

## Roadmap

- [x] Homepage s osobnostným testom
- [ ] Subpages — 5 žien (Šoltésová, Timrava, Vansová, Gregorová, Podjavorinská)
- [ ] E-shop (Fourthwall integrácia)
- [ ] O nás stránka
- [ ] GDPR / Ochrana súkromia
- [ ] Newsletter (Substack)
- [ ] Vlastné ilustrácie žien
- [ ] Botanický vzor pozadia (PNG)
- [ ] Vlastná doména nehorazne.sk
- [ ] Anglická verzia

---

## Obsah a autorstvo

Texty, ilustrácie a celkový koncept: **Anna Lockwoodová**

Projekt je inšpirovaný predchádzajúcim výskumom pre [Annu Šenšelovú — Vyšívané poklady](https://avolesnes-tech.github.io/anna-senselova/).

---

## Kontakt

**senselovaanna@gmail.com**  
Instagram: [@nehorazne](https://instagram.com/nehorazne)

---

*„Ona tu bola prvá."*

© 2025 Anna Lockwoodová
