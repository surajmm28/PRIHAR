/* Page-specific interactions */
document.documentElement.classList.add('js-enhanced');

/* ── Police Gallery — auto-scroll on mobile, hover on desktop ── */
(function () {
  const gallery = document.getElementById('police-gallery');
  if (!gallery) return;

  const track = gallery.querySelector('.police-gallery__track');
  let scrollX = 0;
  let playing = false;
  const SPEED = 0.75;

  function isMobile() { return window.innerWidth <= 1024; }

  function halfWidth() { return track.scrollWidth / 2; }

  function wrap(x) {
    const hw = halfWidth();
    if (hw <= 0) return x;
    if (x >= hw) x -= hw;
    if (x < 0)   x += hw;
    return x;
  }

  function tick() {
    if (playing) scrollX = wrap(scrollX + SPEED);
    track.style.transform = `translateX(${-scrollX}px)`;
    requestAnimationFrame(tick);
  }

  // Desktop: hover to start/stop
  gallery.addEventListener('mouseenter', () => { if (!isMobile()) playing = true;  });
  gallery.addEventListener('mouseleave', () => { if (!isMobile()) playing = false; });

  // Mobile: pause while finger is down, resume on lift
  gallery.addEventListener('touchstart',  () => { playing = false; }, { passive: true });
  gallery.addEventListener('touchend',    () => { if (isMobile()) playing = true; }, { passive: true });
  gallery.addEventListener('touchcancel', () => { if (isMobile()) playing = true; }, { passive: true });

  // Wheel scroll (desktop)
  gallery.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollX = wrap(scrollX + e.deltaY * 0.6 + e.deltaX * 0.6);
  }, { passive: false });

  // Start immediately on mobile; re-evaluate on resize
  playing = isMobile();
  window.addEventListener('resize', () => {
    playing = isMobile();
  });

  requestAnimationFrame(tick);
})();

/* Contact form */
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.textContent = 'Sending…';
  setTimeout(() => {
    btn.style.display = 'none';
    const ok = document.getElementById('form-success');
    if (ok) ok.style.display = 'block';
    e.target.reset();
  }, 1200);
}

/* Lightbox for gallery images */
document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.gallery-grid img, .activity-card__img');
  if (!imgs.length) return;

  const lb = document.createElement('div');
  lb.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:9999;display:none;align-items:center;justify-content:center;cursor:zoom-out;';
  lb.innerHTML = '<img style="max-width:90vw;max-height:88vh;object-fit:contain;border-radius:2px;" />';
  document.body.appendChild(lb);

  imgs.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      lb.querySelector('img').src = img.src;
      lb.style.display = 'flex';
    });
  });

  lb.addEventListener('click', () => lb.style.display = 'none');
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.style.display = 'none'; });
});
