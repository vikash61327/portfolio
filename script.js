/* ===== Helpers ===== */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* ===== Mobile menu ===== */
const menuBtn = $('#menuBtn');
const navLinks = $('#navLinks');
function closeMenu() {
  menuBtn.classList.remove('open');
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
});
$$('#navLinks a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('click', e => {
  if (!e.target.closest('.navbar')) closeMenu();
});

/* ===== Navbar shadow, back-to-top, active link ===== */
const navbar = $('#navbar');
const toTop = $('#toTop');
const sections = $$('main, section[id]');
const links = $$('#navLinks a');

function onScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  toTop.classList.toggle('show', window.scrollY > 500);

  const pos = window.scrollY + 140;
  let current = 'home';
  sections.forEach(sec => { if (sec.offsetTop <= pos) current = sec.id; });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ===== Typing animation ===== */
const words = ['Full-Stack Developer', 'React Developer', 'ASP.NET Core Developer', 'Problem Solver'];
const typingEl = $('#typing');
let w = 0, c = 0, deleting = false;
function type() {
  const word = words[w];
  typingEl.textContent = word.slice(0, c);
  if (!deleting && c < word.length) { c++; setTimeout(type, 90); }
  else if (!deleting) { deleting = true; setTimeout(type, 1400); }
  else if (c > 0) { c--; setTimeout(type, 45); }
  else { deleting = false; w = (w + 1) % words.length; setTimeout(type, 300); }
}
type();

/* ===== Scroll reveal, skill bars & counters ===== */
function animateCount(el) {
  const target = +el.dataset.count;
  const start = performance.now();
  const dur = 1500;
  (function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * p) + (p === 1 ? '+' : '');
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add('visible');
    $$('.skill', el).forEach(s => { $('.bar i', s).style.width = s.dataset.level + '%'; });
    $$('[data-count]', el).forEach(animateCount);
    io.unobserve(el);
  });
}, { threshold: 0.15 });
$$('.reveal').forEach(el => io.observe(el));

/* ===== Footer year ===== */
$('#year').textContent = new Date().getFullYear();
