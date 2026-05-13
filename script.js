/* ==========================================================
   Ian Wanderley — Portfolio
   Smooth scroll, scroll-spy nav, reveal animations, mobile menu.
   ========================================================== */

(() => {
  'use strict';

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Nav: scrolled state + mobile toggle ---------- */
  const nav = document.querySelector('.nav');
  const navMenu = document.querySelector('.nav__menu');
  const navToggle = document.querySelector('.nav__toggle');

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Scroll-spy: highlight current section in nav ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__menu a');

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const matches = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', matches);
    });
  };

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        // pick the entry currently most in view
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  const revealTargets = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealTargets.length) {
    const reveal = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    revealTargets.forEach((el) => reveal.observe(el));
  } else {
    // Fallback: just show everything
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }
})();
