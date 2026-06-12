/* nav-transitions.js — shared across every page.
   Two jobs:
   1. Mobile hamburger menu (bind on load).
   2. When barba.js is present, re-initialise the swapped-in container after
      every transition — otherwise .reveal content stays at opacity:0 (brown
      screen) and the persistent <nav> keeps links fixed to the first page's
      depth. Each fetched page already ships a depth-correct <nav>, so we copy
      it in after the swap. */
(function () {
  'use strict';

  function initHamburger() {
    var nav = document.getElementById('mainNav');
    var btn = document.getElementById('navHamburger');
    if (!btn || !nav) return;
    // Clone to drop any listeners bound to a previous (now stale) button.
    var fresh = btn.cloneNode(true);
    btn.parentNode.replaceChild(fresh, btn);
    fresh.addEventListener('click', function () {
      var open = nav.classList.toggle('menu-open');
      fresh.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('menu-open');
        fresh.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  function revealAll() {
    var els = document.querySelectorAll('.reveal:not(.visible)');
    if (!els.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.04 });
    els.forEach(function (el) { obs.observe(el); });
    // Safety net: force-reveal anything still hidden (e.g. below the fold on a
    // short page that never scrolls).
    setTimeout(function () {
      document.querySelectorAll('.reveal:not(.visible)').forEach(function (el) {
        el.classList.add('visible');
      });
    }, 2500);
  }

  function bindHover() {
    document.querySelectorAll('a, button').forEach(function (el) {
      el.addEventListener('mouseenter', function () { document.body.classList.add('hovering'); });
      el.addEventListener('mouseleave', function () { document.body.classList.remove('hovering'); });
    });
  }

  function syncNav(data) {
    try {
      if (!data || !data.next || !data.next.html) return;
      var doc = new DOMParser().parseFromString(data.next.html, 'text/html');
      var inc = doc.getElementById('mainNav');
      var cur = document.getElementById('mainNav');
      if (inc && cur) cur.innerHTML = inc.innerHTML;
    } catch (e) { /* keep the existing nav on any parse failure */ }
  }

  // Initial load.
  initHamburger();

  // Universal post-transition re-init, registered on whichever page's
  // barba.init() is in control. Idempotent, so harmless if a page also has
  // its own afterEnter hook.
  // The transition curtain (#pageCurtain) is a full-screen brown overlay that
  // lifts after the swap. If a transition ever errors mid-flight the curtain
  // can stay raised — a solid brown screen. Force it back down after every
  // successful swap so the page is never left covered.
  function resetCurtain() {
    var curtain = document.getElementById('pageCurtain');
    if (curtain) {
      if (typeof gsap !== 'undefined') gsap.set(curtain, { scaleY: 0 });
      else curtain.style.transform = 'scaleY(0)';
    }
    document.documentElement.classList.remove('is-transitioning');
  }

  if (typeof barba !== 'undefined' && barba.hooks) {
    barba.hooks.afterEnter(function (data) {
      syncNav(data);
      revealAll();
      bindHover();
      initHamburger();
      resetCurtain();
      window.scrollTo(0, 0);
    });
  }
})();
