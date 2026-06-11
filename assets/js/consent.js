/* ─── SÚHLAS S ÚLOŽISKOM / COOKIES ───────────────────────────
   Web zatiaľ nepoužíva analytické ani marketingové cookies.
   Banner informuje o lokálnom úložisku a pripravuje opt-in
   pre budúce analytické nástroje (Google Analytics a pod.).

   Hodnoty v localStorage pod kľúčom "neh_consent":
     "necessary" — len nevyhnutné úložisko
     "all"       — súhlas aj s budúcou analytikou

   Po pridaní analytiky: skript načítaj LEN ak
   localStorage.getItem('neh_consent') === 'all'.            */

(function () {
  var KEY = 'neh_consent';

  /* Koreň webu odvodíme z cesty k tomuto skriptu —
     funguje v každej hĺbke pod-stránky aj na GitHub Pages. */
  var script = document.currentScript || document.querySelector('script[src*="consent.js"]');
  var root = script ? script.getAttribute('src').replace('assets/js/consent.js', '') : '';

  function save(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* private mode */ }
    hide();
  }

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  var banner = null;

  function build() {
    if (banner) return banner;
    banner = document.createElement('div');
    banner.className = 'consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Nastavenie súkromia');
    banner.innerHTML =
      '<p class="consent-banner__title">Tvoje súkromie</p>' +
      '<p class="consent-banner__text">Tento web nepoužíva analytické ani marketingové cookies. ' +
      'Ukladáme len nevyhnutné údaje vo tvojom prehliadači (napr. výsledok osobnostného testu a túto voľbu). ' +
      'Viac v <a href="' + root + 'cookies/index.html">zásadách cookies</a> a ' +
      '<a href="' + root + 'sukromie/index.html">ochrane súkromia</a>.</p>' +
      '<div class="consent-banner__actions">' +
      '<button type="button" class="consent-banner__btn consent-banner__btn--accept" data-consent="all">Rozumiem, súhlasím</button>' +
      '<button type="button" class="consent-banner__btn consent-banner__btn--necessary" data-consent="necessary">Len nevyhnutné</button>' +
      '</div>';
    banner.querySelectorAll('[data-consent]').forEach(function (btn) {
      btn.addEventListener('click', function () { save(btn.getAttribute('data-consent')); });
    });
    document.body.appendChild(banner);
    return banner;
  }

  function show() {
    build();
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { banner.classList.add('visible'); });
    });
  }

  function hide() {
    if (banner) banner.classList.remove('visible');
  }

  /* Verejné API — odkaz "Nastavenia cookies" kdekoľvek na webe */
  window.spnOpenConsent = show;

  function init() {
    var trigger = document.getElementById('openConsentSettings');
    if (trigger) {
      trigger.addEventListener('click', function (e) { e.preventDefault(); show(); });
    }
    if (!stored()) show();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
