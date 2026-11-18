/* Buscar ERP — page behaviour. No dependencies. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* hairline under the header once scrolled */
  var hdr = document.getElementById('hdr');
  function onScroll() { if (hdr) hdr.classList.toggle('stuck', window.scrollY > 8); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* mobile menu */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function close() {
    if (!burger || !nav) return;
    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* scroll reveal */
  var items = document.querySelectorAll('.rv');
  if (reduced || !('IntersectionObserver' in window)) {
    for (var i = 0; i < items.length; i++) items[i].classList.add('in');
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* pause the looping widgets while off screen */
  if (!reduced && 'IntersectionObserver' in window) {
    var loops = document.querySelectorAll('.till, .stockcard, .off, .pscr, .flow__svg');
    var po = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var state = en.isIntersecting ? 'running' : 'paused';
        en.target.style.animationPlayState = state;
        var kids = en.target.querySelectorAll('*');
        for (var k = 0; k < kids.length; k++) kids[k].style.animationPlayState = state;
      });
    }, { threshold: 0 });
    loops.forEach(function (el) { po.observe(el); });
  }
})();
