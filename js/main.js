/* ═══════════════════════════════════════════
   PARIHAR — BCP Website Scripts
═══════════════════════════════════════════ */

// ── Navbar: transparent → solid on scroll ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('btt').classList.toggle('show', window.scrollY > 400);
}, { passive: true });

// ── Mobile menu toggle ──────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close menu when a nav link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── Scroll reveal (IntersectionObserver) ───
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -30px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Contact form submission ─────────────────
function handleSubmit(e) {
  e.preventDefault();

  const btn     = document.getElementById('submit-btn');
  const success = document.getElementById('form-success');

  btn.textContent = 'Sending…';
  btn.disabled    = true;

  // Simulate async send (replace with real API call if needed)
  setTimeout(() => {
    btn.textContent = 'Sent';
    success.classList.remove('hidden');
    e.target.reset();

    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled    = false;
      success.classList.add('hidden');
    }, 4000);
  }, 1000);
}

// ── Back to top button ──────────────────────
document.getElementById('btt').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
