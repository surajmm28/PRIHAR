/* Page-specific interactions */
document.documentElement.classList.add('js-enhanced');

/* ── Police Gallery — hover + wheel horizontal scroll ── */
(function () {
  const gallery = document.getElementById('police-gallery');
  if (!gallery) return;

  const track = gallery.querySelector('.police-gallery__track');
  let scrollX   = 0;
  let hovering  = false;
  const SPEED   = 0.6; // px per frame while hovering

  function halfWidth() {
    return track.scrollWidth / 2;
  }

  function wrap(x) {
    const hw = halfWidth();
    if (hw <= 0) return x;
    if (x >= hw) x -= hw;
    if (x < 0)   x += hw;
    return x;
  }

  function tick() {
    if (hovering) scrollX = wrap(scrollX + SPEED);
    track.style.transform = `translateX(${-scrollX}px)`;
    requestAnimationFrame(tick);
  }

  gallery.addEventListener('mouseenter', () => { hovering = true;  });
  gallery.addEventListener('mouseleave', () => { hovering = false; });

  gallery.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollX = wrap(scrollX + e.deltaY * 0.6 + e.deltaX * 0.6);
  }, { passive: false });

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
