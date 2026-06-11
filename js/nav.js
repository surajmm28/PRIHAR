/* Shared navigation & footer injector */
(function () {
  /* Works on file:// (double-click) AND on any web server */
  const isFile = location.protocol === 'file:';
  const inSubfolder = ['projects','portfolio'].includes(
    location.pathname.split('/').slice(-2,-1)[0]
  );
  const BASE = isFile
    ? (inSubfolder ? '..' : '.')
    : '/parihar-website';

  const LOGO = 'https://bcpparihar.org/wp-content/uploads/2022/09/2018-05-30-1.png';

  const page = document.body.dataset.page || '';

  function active(p) {
    return page === p ? ' class="active"' : '';
  }

  /* ── Top Bar ── */
  const topbar = `
<div class="topbar">
  <div class="container">
    <div class="topbar__inner">
      <span class="topbar__item">Bengaluru City Police · PARIHAR Initiative · Est. 1993 · Serving Karnataka</span>
      <div class="topbar__right">
        <span class="topbar__item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          <a href="tel:08022943225">080-22943225</a> &nbsp;/&nbsp; <a href="tel:08022943224">080-22943224</a>
        </span>
        <span class="topbar__item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <a href="mailto:pariharfcc.vsv@gmail.com">pariharfcc.vsv@gmail.com</a>
        </span>
        <div class="topbar__social">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://twitter.com/bcpPARIHAR" target="_blank" rel="noopener" aria-label="Twitter/X">
            <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;

  /* ── Navbar ── */
  const navbar = `
<nav class="navbar" id="navbar">
  <div class="container">
    <div class="navbar__inner">
      <a href="${BASE}/index.html" class="navbar__brand">
        <img src="${LOGO}" alt="PARIHAR Logo" class="navbar__logo" />
        <div class="navbar__brand-text">
          <div class="navbar__brand-name">PARIHAR</div>
          <div class="navbar__brand-sub">Bengaluru City Police</div>
        </div>
      </a>

      <ul class="navbar__menu">
        <li><a href="${BASE}/index.html"${active('home')}>Home</a></li>
        <li>
          <button>About Us <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg></button>
          <div class="dropdown">
            <a href="${BASE}/about.html#overview">Overview</a>
            <a href="${BASE}/about.html#services">Services</a>
            <a href="${BASE}/about.html#governing-body">Governing Body</a>
          </div>
        </li>
        <li>
          <button>Projects <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg></button>
          <div class="dropdown">
            <a href="${BASE}/projects/fcc.html">Family Counselling Centre – FCC</a>
            <a href="${BASE}/projects/vsv.html">Vanitha Sahayavani – VSV</a>
            <a href="${BASE}/projects/msv.html">Makkala Sahayavani – MSV</a>
          </div>
        </li>
        <li>
          <button>Portfolio <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg></button>
          <div class="dropdown">
            <a href="${BASE}/portfolio/skill-development.html">Skill Development Training Centre</a>
            <a href="${BASE}/portfolio/activities.html">Activities of PARIHAR</a>
            <a href="${BASE}/portfolio/feedback.html">Feedback</a>
            <a href="${BASE}/portfolio/reports.html">Reports</a>
          </div>
        </li>
        <li><a href="${BASE}/contact.html"${active('contact')}>Contact Us</a></li>
      </ul>

      <div class="navbar__right">
        <div class="navbar__tel">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          080-22943225
        </div>
        <a href="${BASE}/contact.html" class="btn-gold">Get Help</a>
      </div>

      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <div class="mobile-menu" id="mobile-menu">
    <a href="${BASE}/index.html">Home</a>
    <a href="${BASE}/about.html">About Us</a>
    <a href="${BASE}/about.html#overview" class="indent">— Overview</a>
    <a href="${BASE}/about.html#services" class="indent">— Services</a>
    <a href="${BASE}/about.html#governing-body" class="indent">— Governing Body</a>
    <a href="${BASE}/projects/fcc.html" class="indent">— FCC</a>
    <a href="${BASE}/projects/vsv.html" class="indent">— VSV</a>
    <a href="${BASE}/projects/msv.html" class="indent">— MSV</a>
    <a href="${BASE}/portfolio/skill-development.html" class="indent">— Skill Development</a>
    <a href="${BASE}/portfolio/activities.html" class="indent">— Activities</a>
    <a href="${BASE}/portfolio/feedback.html" class="indent">— Feedback</a>
    <a href="${BASE}/portfolio/reports.html" class="indent">— Reports</a>
    <a href="${BASE}/contact.html">Contact Us</a>
  </div>
</nav>`;

  /* ── Footer ── */
  const footer = `
<footer class="footer">
  <div class="footer__top">
    <div class="container">
      <div class="footer__grid">
        <div>
          <img src="${LOGO}" alt="PARIHAR" class="footer__brand-logo" />
          <div class="footer__brand-name">PARIHAR</div>
          <div class="footer__brand-sub">Bengaluru City Police</div>
          <p class="footer__desc">A charitable institution under the Karnataka Societies Registration Act of 1960. Providing free welfare services for women, children, and families since 1993.</p>
          <div class="footer__social">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://twitter.com/bcpPARIHAR" target="_blank" rel="noopener" aria-label="Twitter/X">
              <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <div class="footer__heading">Navigation</div>
          <div class="footer__links">
            <a href="${BASE}/index.html">Home</a>
            <a href="${BASE}/about.html">About Us</a>
            <a href="${BASE}/projects/fcc.html">FCC</a>
            <a href="${BASE}/projects/vsv.html">VSV</a>
            <a href="${BASE}/projects/msv.html">MSV</a>
            <a href="${BASE}/portfolio/skill-development.html">Skill Development</a>
            <a href="${BASE}/portfolio/activities.html">Activities</a>
            <a href="${BASE}/portfolio/reports.html">Reports</a>
            <a href="${BASE}/contact.html">Contact Us</a>
          </div>
        </div>
        <div>
          <div class="footer__heading">Quick Links</div>
          <div class="footer__links">
            <a href="${BASE}/about.html#governing-body">Governing Body</a>
            <a href="${BASE}/about.html#services">Our Services</a>
            <a href="${BASE}/portfolio/feedback.html">Feedback</a>
            <a href="${BASE}/portfolio/reports.html">Annual Reports</a>
            <a href="https://bengalurupolice.karnataka.gov.in/" target="_blank" rel="noopener">BCP Official Website</a>
          </div>
        </div>
        <div>
          <div class="footer__heading">Contact</div>
          <div class="footer__contact-item">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span><a href="tel:08022943225">080-22943225</a><br/><a href="tel:08022943224">080-22943224</a></span>
          </div>
          <div class="footer__contact-item">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <a href="mailto:pariharfcc.vsv@gmail.com">pariharfcc.vsv@gmail.com</a>
          </div>
          <div class="footer__contact-item">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span>Malleshwaram Police Station,<br/>Next to K.C. General Hospital,<br/>Bengaluru – 560 003</span>
          </div>
          <div class="footer__contact-item">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span>Basavangudi Police Station, K.R. Road,<br/>Bengaluru – 560 004</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer__bottom">
      <span>© 2024 PARIHAR – Bengaluru City Police. All rights reserved.</span>
      <span>Registered under Karnataka Societies Registration Act, 1960</span>
    </div>
  </div>
</footer>
<button id="btt" aria-label="Back to top">
  <svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
</button>`;

  /* Inject topbar + navbar immediately (prevents layout flash) */
  document.body.insertAdjacentHTML('afterbegin', topbar + navbar);

  /* Navbar interactivity — elements exist now */
  const navEl     = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* Defer footer + scroll-dependent code until full DOM is ready */
  document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', footer);

    const btt = document.getElementById('btt');

    window.addEventListener('scroll', () => {
      navEl.classList.toggle('scrolled', window.scrollY > 30);
      btt.classList.toggle('show', window.scrollY > 400);
    });

    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* Reveal on scroll */
    const revEls = document.querySelectorAll('.reveal');
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revEls.forEach(el => ro.observe(el));
  });
})();
