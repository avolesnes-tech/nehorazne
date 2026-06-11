# Právna analýza projektu Nehorázne

**Interný dokument pre Annu Lockwoodovú · jún 2026**

> **Disclaimer:** Tento dokument nie je právnym poradenstvom. Je to praktický prehľad
> tém, ktoré treba pred spustením predaja vyriešiť, pripravený ako podklad na rozhovor
> s právnikom a účtovníkom. Pred spustením predaja si nechaj kľúčové body (najmä VOP,
> GDPR dokumentáciu a daňový režim) potvrdiť odborníkom. Zákony a limity sa menia —
> všetky sumy a lehoty uvedené nižšie si over k aktuálnemu dátumu.

---

## 1. Právna forma — kedy najneskôr treba živnosť alebo s.r.o.

**Stručne: pred prvým prijatím peňazí, nie pred mockupom.**

Tvorba webu, mockupy produktov, zbieranie e-mailov do newslettera a prijímanie
*nezáväzných* predobjednávok (bez platby) ešte nie je podnikanie v zmysle zákona.
Podnikaním sa činnosť stáva vo chvíli, keď ju vykonávaš **sústavne, samostatne,
vo vlastnom mene a za účelom dosiahnutia zisku** — prakticky teda v momente, keď
prvýkrát prijmeš platbu za tovar alebo predplatné.

**Najneskorší moment registrácie:** pred prijatím prvej platby / pred potvrdením prvej
záväznej objednávky. Predaj bez oprávnenia je neoprávnené podnikanie (pokuty, pri
väčšom rozsahu až trestnoprávna rovina) — netreba to riskovať, živnosť je lacná a rýchla.

### Odporúčaná forma na štart: živnosť (SZČO)

Pre tento projekt stačia **voľné živnosti**, napríklad:

- *Kúpa tovaru na účely jeho predaja konečnému spotrebiteľovi (maloobchod)* — merch
- *Vydavateľská činnosť* alebo *Služby súvisiace s produkciou filmov, videozáznamov a zvukových nahrávok* — podľa konkrétneho znenia zoznamu voľných živností; pre listy „Píšem Ti." sa hodí aj *Vydavateľská činnosť, polygrafická výroba a knihárske práce*
- *Reklamné a marketingové služby* — ak by si fakturovala spolupráce
- *Počítačové služby* — ak by si predávala digitálny obsah

**Náklady:** ohlásenie voľnej živnosti cez portál slovensko.sk je **zadarmo**
(elektronicky; osobne na okresnom úrade 5 € za každú voľnú živnosť). Potrebuješ
občiansky s čipom (eID). Živnosť vzniká spravidla do 3 pracovných dní.

**S.r.o. zatiaľ netreba.** Dáva zmysel až pri väčších obratoch, riziku alebo
spoločníkoch — náklady na založenie ~300–500 € (s právnikom), plus účtovníctvo
(podvojné, drahšie) a daňová licencia/administratíva. Pre štart s mikinami
a listami je živnosť jednoznačne jednoduchšia: paušálne výdavky 60 %, jednoduchá
evidencia, nízke vstupné náklady.

**Nezabudni:** do 30 dní od vzniku živnosti registrácia na daňovom úrade (dnes
prebieha väčšinou automaticky cez jednotné kontaktné miesto), prihlásenie do
zdravotnej poisťovne (tiež automaticky), sociálne odvody až po prvom roku podľa príjmu.

---

## 2. Povinné náležitosti webu pri predaji

Keď web začne predávať, musí (zákon č. 22/2004 Z. z., č. 102/2014 Z. z., č. 250/2007 Z. z.):

1. **Identifikácia predávajúceho** — obchodné meno, sídlo/miesto podnikania, IČO,
   DIČ, register a číslo zápisu, e-mail, telefón. Viditeľne, ľahko dostupné
   (typicky pätička + VOP + stránka kontakt). *Toto je dnes vo VOP ako placeholder —
   pred spustením predaja doplniť.*
2. **Všeobecné obchodné podmienky** — vrátane poučenia o práve odstúpiť od zmluvy
   do 14 dní a vzorového formulára na odstúpenie (už pripravené v
   `obchodne-podmienky/index.html`).
3. **Reklamačný poriadok** — môže byť súčasťou VOP (je, článok 7).
4. **Informácia o ARS** — alternatívne riešenie sporov, subjekt SOI (je, článok 8).
5. **Odkaz na platformu RSO/ODR** — `ec.europa.eu/consumers/odr` (je, článok 8).
6. **Tlačidlo „objednávka s povinnosťou platby"** — pri online objednávke s platbou
   musí byť odosielacie tlačidlo takto (alebo rovnocenne) označené. Kým beží len
   e-mailový predobjednávkový režim, netýka sa ťa to — ale pri nasadení platobnej
   brány je to **povinnosť**, inak objednávka spotrebiteľa nezaväzuje.
7. **Orgán dozoru** — uviesť príslušný inšpektorát SOI podľa sídla (placeholder vo VOP).
8. **Zásady ochrany osobných údajov + cookies** — pripravené.
9. **Celková cena vrátane všetkých poplatkov** pred odoslaním objednávky — pri
   predplatnom celková cena za celé obdobie.

---

## 3. Predobjednávky vs. záväzné objednávky

**Právny rozdiel je zásadný:**

- **Nezáväzný dopyt (aktuálny režim):** zákazníčka napíše e-mail „mám záujem o mikinu".
  Nevzniká zmluva, nevzniká povinnosť platiť ani dodať. Riziko je minimálne — ale
  pozor na formulácie: na webe nesmie nič vyzerať ako záväzná ponuka s košíkom
  a platbou, ak ňou nie je. Jasne píš „predobjednávka — nezáväzná, ozveme sa ti".
- **Záväzná objednávka:** vzniká zmluva so všetkými povinnosťami — dodať do 30 dní,
  14-dňové odstúpenie, reklamácie, vrátenie platieb do 14 dní pri odstúpení.

**Riziká zle nastavených predobjednávok:**

1. **Prijatie platby = zmluva.** Ak by si pri „predobjednávke" prijala peniaze,
   právne už ide o záväznú zmluvu (resp. minimálne o bezdôvodné obohatenie, ak
   nedodáš). Preto: **žiadne platby pred registráciou živnosti a pred prepnutím
   do režimu záväzných objednávok.**
2. **Klamlivá obchodná praktika.** Ak by web vyvolával dojem, že produkt je skladom
   a kúpiteľný, hoci nie je, hrozí posúdenie ako nekalá praktika (zákon č. 250/2007 Z. z.).
   Pri každom produkte jasne: „predobjednávka", orientačný termín.
3. **Dodacia lehota.** Pri záväznej objednávke max. 30 dní, ak nie je dohodnuté inak.
   Ak budeš mikiny vyrábať na dopyt, dohodni si dlhšiu lehotu výslovne v objednávke.

**Odporúčanie:** súčasný režim (e-mail, bez platby) je v poriadku a VOP ho výslovne
popisujú. Prechod na záväzný predaj urob naraz: živnosť → doplniť identifikáciu →
platobná brána/IBAN → tlačidlo s povinnosťou platby → dátum účinnosti VOP.

---

## 4. eKasa a registračná pokladnica

**Kľúčové pravidlo:** povinnosť evidovať tržbu v eKase (online registračná pokladnica
alebo bezplatná virtuálna registračná pokladnica VRP od Finančnej správy) vzniká pri
prijímaní **hotovosti alebo platby kartou** (vrátane online platby kartou cez platobnú
bránu — toto je častý omyl!).

- **Platba prevodom na bankový účet (z účtu na účet)** — eKasa **netreba**. Stačí
  faktúra/doklad. Toto je pre štart najjednoduchší režim.
- **Online platba kartou cez bránu (GoPay, Stripe, Besteron…)** — platba kartou sa
  považuje za tržbu podľa zákona č. 289/2008 Z. z. → **eKasa treba** (postačí
  bezplatná aplikácia VRP, doklad sa posiela zákazníkovi e-mailom).
- **Dobierka vyplácaná prepravcom na tvoj účet prevodom** — spravidla netreba
  (peniaze prijíma prepravca, tebe chodia prevodom) — over si konkrétny model
  s účtovníkom.

**Praktické odporúčanie:** spusti predaj len s **platbou na účet (IBAN, QR kód)** —
nulové náklady, žiadna eKasa. Platobnú bránu pridaj, až keď objem predaja ospravedlní
administratívu s VRP. Toto si pri zapojení brány znovu over — výklady Finančnej
správy sa priebežne menia.

---

## 5. GDPR povinnosti

### 5.1 Záznamy o spracovateľských činnostiach (čl. 30 GDPR)

Aj malý podnikateľ, ktorý spracúva osobné údaje pravidelne (newsletter, objednávky),
by mal viesť jednoduché záznamy o spracovateľských činnostiach: účel, kategórie
údajov, príjemcovia, doby uchovávania, opatrenia. Stačí tabuľka — obsahovo už
zodpovedá novej stránke `sukromie/`. Odporúčam vytvoriť interný dokument
(1–2 strany) a aktualizovať pri zmenách.

### 5.2 Sprostredkovateľská zmluva s Brevo

Brevo (Sendinblue SAS, Francúzsko) je **sprostredkovateľ** — spracúva e-maily
v tvojom mene. Podľa čl. 28 GDPR musí existovať sprostredkovateľská zmluva (DPA).
Brevo ju má štandardne ako súčasť podmienok (Data Processing Agreement) — **over si
v účte Brevo, že je akceptovaná, a ulož si jej kópiu/PDF.** To isté plati pre
prípadný Formspree na kontaktnom formulári (US firma — over DPF certifikáciu)
a v budúcnosti pre platobnú bránu.

### 5.3 ⚠️ BEZPEČNOSTNÝ INCIDENT: Brevo API kľúč je zverejnený v kóde

**Toto je najakútnejší problém celého projektu a treba ho riešiť IHNEĎ, ešte dnes.**

V súbore `index.html` (riadok ~1244) je natvrdo vpísaný Brevo API kľúč
(`xkeysib-…`). Web je verejný a repozitár tiež — **ktokoľvek si kľúč môže
skopírovať** a:

- stiahnuť celú databázu kontaktov (e-maily odberateliek) = únik osobných údajov,
- rozosielať spam v tvojom mene cez tvoj Brevo účet,
- mazať a meniť kontakty.

**Okamžité kroky:**

1. **Rotovať kľúč** — v Brevo: Settings → SMTP & API → API Keys → starý kľúč
   zmazať/deaktivovať, vygenerovať nový. **Nový kľúč NIKDY nevkladať do kódu.**
2. **Zmeniť architektúru:** statický web bez backendu nemôže bezpečne volať Brevo API.
   Riešenia: (a) Brevo **subscription form** (hostovaný formulár / form endpoint bez
   API kľúča), (b) malá serverless funkcia (Cloudflare Workers, Netlify Functions —
   zadarmo) ktorá kľúč drží na serveri, (c) doubleopt-in formulár Brevo vložený ako iframe.
3. **Posúdiť incident:** zisti v Brevo logoch, či kľúč niekto zneužil (neznáme API
   volania, exporty kontaktov). Ak došlo k úniku údajov dotknutých osôb, vzniká
   povinnosť **ohlásiť porušenie Úradu na ochranu osobných údajov do 72 hodín**
   (čl. 33 GDPR) a pri vysokom riziku informovať dotknuté osoby (čl. 34). Ak sa
   zneužitie nepotvrdí, incident aj tak interne zdokumentuj (dátum, zistenie, kroky).
4. **Vyčistiť git históriu** — kľúč zostáva v histórii repozitára aj po zmazaní
   z aktuálneho súboru. Po rotácii je starý kľúč neškodný, ale je dobré si tento
   návyk osvojiť (git filter-repo / nový repozitár).

### 5.4 Google Fonts

Načítavanie fontov z `fonts.googleapis.com` odosiela IP adresu návštevníčky Googlu.
Nemecká judikatúra (LG München 2022) to bez súhlasu posúdila ako porušenie GDPR.
**Odporúčanie: self-host** — stiahnuť WOFF2 súbory (google-webfonts-helper) do
`assets/fonts/` a načítavať lokálne. Vyrieši to právne riziko aj zrýchli web.
Kým sa tak nestane, Google Fonts sú transparentne uvedené v zásadách súkromia.

### 5.5 Ostatné

- **Súhlas pri teste:** email gate musí mať zreteľný súhlas (checkbox alebo
  jednoznačný text), nie skrytý — over aktuálnu implementáciu.
- **Double opt-in** pri newsletteri silne odporúčam (Brevo ho podporuje) — chráni
  pred zápisom cudzích e-mailov a je dôkazom súhlasu.
- **Prenos do USA (GitHub Pages):** pokrytý EU-US Data Privacy Framework — uvedené
  v zásadách. Sleduj, či DPF platí (už raz padli Safe Harbor aj Privacy Shield).

---

## 6. Autorské právo

### 6.1 Vlastné ilustrácie

Tvoje ilustrácie sú tvoje autorské diela — ochrana vzniká automaticky, registrácia
netreba. Odporúčania:

- Označuj ich `© Anna Lockwoodová / Nehorázne` (nie je podmienka ochrany,
  ale odrádza a uľahčuje vymáhanie).
- Uchovávaj zdrojové súbory s metadátami (dôkaz autorstva a dátumu).
- **Ochranná známka „Nehorázne":** zváž registráciu na
  **Úrade priemyselného vlastníctva SR (upv.sk)** — chráni názov a logo proti
  napodobeninám merchu. Náklady: správny poplatok za národnú prihlášku do 3 tried
  tovarov/služieb rádovo **100–200 €** (elektronicky lacnejšie; aktuálnu sadzbu over
  na upv.sk), platnosť 10 rokov. Relevantné triedy: 25 (oblečenie), 18 (tašky),
  16 (tlačoviny/listy), 41 (vzdelávanie/obsah). Pre celú EÚ je známka EUIPO
  (od ~850 €) — zatiaľ zbytočná, národná stačí.

### 6.2 Historické fotografie spisovateliek

**Pozor — častý omyl:** pri fotografii nie je rozhodujúce, kedy zomrela osoba na
fotke, ale **kedy zomrel fotograf**. Majetkové práva trvajú 70 rokov po smrti
**autora fotografie**.

- Fotky z 19. storočia a začiatku 20. storočia sú s vysokou pravdepodobnosťou voľné,
  ale **pri každej fotke si over zdroj a autora**: Wikimedia Commons uvádza licenčný
  stav; fototéky SNK/SNM/Matice majú vlastné podmienky použitia digitalizátov.
- Ak autor fotografie nie je známy (anonymné dielo), ochrana trvá 70 rokov od
  zverejnenia — pri portrétoch z prelomu storočí spravidla uplynula.
- Pre **komerčné použitie** (merch!) buď konzervatívna: používaj len fotky
  s jednoznačne doloženým public domain statusom, a aj tak uvádzaj zdroj.

### 6.3 Citáty z diel — kľúčové dátumy

Majetkové autorské práva zanikajú **70 rokov po smrti autorky**, počítané od
1. januára roka nasledujúceho po smrti:

| Autorka | Zomrela | Diela voľné od |
|---|---|---|
| Elena Maróthy-Šoltésová | 1939 | 1. 1. 2010 ✅ voľné |
| Terézia Vansová | 1942 | 1. 1. 2013 ✅ voľné |
| Božena Slančíková-Timrava | 1951 | 1. 1. 2022 ✅ voľné |
| Ľudmila Podjavorinská | 1951 | 1. 1. 2022 ✅ voľné |
| **Hana Gregorová** | **1958** | **1. 1. 2029 ❌ ešte chránené!** |

**⚠️ Hana Gregorová je problém.** Jej diela budú voľné až od 1. 1. 2029. Do toho dňa:

- **NEsmieš** bez licencie: priamo citovať jej texty na merchi, v listoch „Píšem Ti."
  ani vo väčšom rozsahu na webe; vytvárať odvodené diela z jej textov (úpravy,
  prepisovanie jej viet).
- **Smieš:** písať o jej živote a názoroch vlastnými slovami; krátke citácie na webe
  v rámci **citačnej výnimky** (§ 37 Autorského zákona č. 185/2015 Z. z.) — len
  v odôvodnenom rozsahu, s uvedením autorky a zdroja, na účel recenzie/kritiky/
  vyučovania — **citačná výnimka ale nepokrýva merch ani komerčné listy ako produkt**.
- **Listy „na motívy jej tvorby" písané úplne vlastnými slovami sú OK** — inšpirácia
  témami a životom nie je použitím diela. Hranica: žiadne prevzaté vety, verše ani
  parafrázy tesne kopírujúce jej text.
- Alternatíva: licencia od dedičov (komplikované dohľadávanie) alebo cez **LITA**
  (autorská spoločnosť, litacentrum.sk) — pre malý projekt pravdepodobne jednoduchšie
  počkať do 2029 alebo sa citáciám z Gregorovej vyhnúť.

**Odporúčanie:** pri Šoltésovej, Vansovej, Timrave a Podjavorinskej môžeš citovať
voľne (uvádzaj zdroj — je to slušnosť aj marketingová hodnota). Pri Gregorovej do
roku 2029 len vlastné texty o nej. Pozor aj na **moderné kritické vydania** — samotný
text autorky je voľný, ale predhovory, poznámky a edičné úpravy editorov chránené
byť môžu; cituj z pôvodných vydaní alebo z databáz ako zlatyfond.sme.sk.

### 6.4 Osobnostné práva

Osobnostné autorské práva (uvádzanie autorstva, nedotknuteľnosť diela) na Slovensku
smrťou autora čiastočne pretrvávajú — vždy uvádzaj autorku a nezasahuj do textov
spôsobom znižujúcim ich hodnotu. Pri „listoch na motívy" jasne komunikuj, že ide
o tvoju autorskú tvorbu inšpirovanú spisovateľkami, nie o ich skutočné listy —
inak hrozí aj výčitka klamlivosti voči spotrebiteľkám.

---

## 7. Použitie mena „Živena"

**Spolok Živena stále existuje** (obnovený 1990, zivena.sk) a názov môže byť chránený
ako názov právnickej osoby, prípadne ochranná známka.

- **V poriadku:** faktické zmienky v biografickom obsahu („Šoltésová viedla Živenu
  33 rokov") — to je historický fakt, nikto ho nevlastní.
- **Rizikové:** použitie „Živena" na produktoch, v názvoch produktových radov,
  v marketingu spôsobom naznačujúcim spojenie či partnerstvo so spolkom.
- **Odporúčanie:** ak plánuješ čokoľvek nad rámec biografických zmienok (napr.
  kolekciu inšpirovanú výšivkami Živeny/Lipy), **napíš spolku a vyžiadaj si súhlas**.
  Je to právne bezpečnejšie — a úprimne, pre projekt o ženskej solidarite je to aj
  jediný slušný postup. Bonus: môže z toho byť pekná spolupráca.

---

## 8. Marketingové tvrdenia a influencer marketing

- **Nekalé obchodné praktiky (zákon č. 250/2007 Z. z., smernica UCPD):** netvrď nič,
  čo nevieš doložiť — „limitovaná edícia" len ak je naozaj limitovaná, „ručne robené
  na Slovensku" len ak to platí, recenzie len skutočné.
- **Spolupráce s influencerkami:** platený alebo barterový obsah musí byť **označený
  ako reklama/spolupráca** (#reklama, #spolupráca, „platené partnerstvo") — povinnosť
  je na oboch stranách. Pri budúcich spoluprácach to daj do jednoduchej zmluvy.
- **Newsletter:** posielaj len ľuďom so súhlasom (máš), vždy s funkčným odhlásením
  (Brevo rieši automaticky).
- Súčasný tón webu (príbehy, historické fakty, vlastné produkty) je z pohľadu
  marketingového práva v poriadku.

---

## 9. Dane

- **Príjem z podnikania (živnosť):** daň z príjmov 15 % pri zdaniteľných príjmoch
  do ~100 000 € ročne (znížená sadzba pre malých podnikateľov; hranicu a sadzbu si
  over k aktuálnemu roku), inak 19/25 %. **Paušálne výdavky 60 %** z príjmov
  (strop 20 000 €/rok) — pre teba pravdepodobne najvýhodnejšie, minimálna evidencia.
- **Nezdaniteľná časť a odvody:** zdravotné odvody od začiatku (minimálny preddavok),
  sociálne odvody až od júla druhého roka, ak príjem za prvý rok presiahne hranicu
  (~7 800 €+, mení sa každý rok — over).
- **DPH:** povinná registrácia až po prekročení obratu — historicky **49 790 €**
  za 12 po sebe nasledujúcich mesiacov; **POZOR, od roku 2025 sa limity menili
  (50 000 € / 62 500 € v novom režime)** — pri približovaní sa obratu ~50 000 €
  si aktuálny limit a mechanizmus bezpodmienečne over s účtovníkom. Pre začiatok
  je to vzdialená starosť.
- **Predaj do EÚ (OSS):** pri zásielkovom predaji spotrebiteľom do iných štátov EÚ
  nad 10 000 €/rok vzniká povinnosť odvádzať DPH štátu zákazníka (režim OSS) —
  relevantné, až keď budeš platiteľka DPH alebo prekročíš tento limit; len vedieť,
  že existuje.
- **Evidencia:** odkladaj všetky bločky a faktúry (materiál, tlač, poštovné, Brevo,
  doména) — aj pri paušálnych výdavkoch sa hodia na rozhodnutie, či sa neoplatia
  skutočné výdavky.

---

## 10. Checklist PRED SPUSTENÍM PREDAJA

**Hneď teraz (nezávisle od predaja):**

1. ☐ **ROTOVAŤ Brevo API kľúč** a odstrániť ho z kódu (viď 5.3) — *dnes*.
2. ☐ Posúdiť v Brevo logoch možné zneužitie kľúča; incident zdokumentovať,
   pri potvrdenom úniku ohlásiť ÚOOÚ do 72 hodín.
3. ☐ Prerobiť newsletter/test na riešenie bez API kľúča v prehliadači
   (Brevo formulár alebo serverless funkcia) + zapnúť double opt-in.
4. ☐ Self-hostnúť Google Fonts (assets/fonts/).
5. ☐ Doplniť Formspree ID v kontaktnom formulári (teraz je tam `YOUR_FORM_ID` —
   formulár nefunguje) a overiť DPA/DPF Formspree.

**Pred prvou záväznou objednávkou / platbou:**

6. ☐ Ohlásiť voľné živnosti (slovensko.sk, zadarmo elektronicky).
7. ☐ Zriadiť podnikateľský bankový účet (IBAN do VOP).
8. ☐ Doplniť všetky `[DOPLNIŤ:]` placeholdery: VOP (IČO, DIČ, sídlo, register,
   telefón, inšpektorát SOI, IBAN, poštovné, lehoty, dátum účinnosti),
   zásady súkromia (identifikácia, doručovateľ), pätičky webu.
9. ☐ Rozhodnúť platobný režim: štart len s platbou na účet (bez eKasy);
   pri platobnej bráne najprv aktivovať VRP.
10. ☐ Pri zapnutí platieb: tlačidlo **„objednávka s povinnosťou platby"**,
    automatický e-mail s potvrdením zmluvy + VOP + poučením o odstúpení.
11. ☐ Vytvoriť interné záznamy o spracovateľských činnostiach (čl. 30 GDPR)
    a uložiť DPA s Brevo (a ďalšími nástrojmi).
12. ☐ Skontrolovať obsah produktov: žiadne citáty Gregorovej na merchi/listoch
    do 1. 1. 2029; pri fotkách doložený public domain; uvádzanie zdrojov citátov.
13. ☐ Zvážiť ochrannú známku „Nehorázne" na ÚPV SR (triedy 16, 18, 25, 41).
14. ☐ Pri použití „Živena" nad rámec biografie — písomný súhlas spolku.
15. ☐ Nájsť účtovníčku/účtovníka (paušálne výdavky, eKasa otázky, DPH limit).
16. ☐ Finálnu verziu VOP a GDPR dokumentov nechať prejsť právnikovi
    (1–2 hodiny konzultácie postačia, podklady sú pripravené).

**Po spustení:**

17. ☐ Pri pridaní Google Analytics: opt-in cez consent banner, aktualizovať
    `cookies/` a `sukromie/`.
18. ☐ Sledovať obrat voči DPH limitu (~50 000 €) a hranici sociálnych odvodov.
19. ☐ Raz ročne revízia právnych textov (zákony sa menia — najmä spotrebiteľské
    právo prešlo v 2024 veľkou novelou, zákon č. 108/2024 Z. z. o ochrane
    spotrebiteľa nahradil časť starších predpisov — nechaj právnika overiť
    aktuálne odkazy vo VOP).

---

*Pripravené ako interný podklad, jún 2026. Nie je to právne poradenstvo — pred
spustením predaja konzultuj s právnikom a účtovníkom.*
