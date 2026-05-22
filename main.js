/* =============================================
   main.js — Salvatore Polise Space Homepage
   ============================================= */

/* ---- STAR CANVAS ---- */
(function () {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let stars = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        alpha: Math.random(),
        speed: Math.random() * 0.4 + 0.1,
        dir: Math.random() > 0.5 ? 1 : -1
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.alpha += s.speed * 0.01 * s.dir;
      if (s.alpha > 1 || s.alpha < 0.1) s.dir *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 210, 255, ${s.alpha})`;
      ctx.fill();
    }
    requestAnimationFrame(drawStars);
  }

  resize();
  createStars(160);
  drawStars();
  window.addEventListener('resize', () => { resize(); createStars(160); });
})();


/* ---- ROTATING WORD (index.html only) ---- */
(function () {
  const el = document.getElementById('rotating-word');
  if (!el) return;
  const words = ['Space', 'SpaceX', 'Starship', 'the Cosmos', 'Mars', 'Astronomy'];
  let i = 0;
  setInterval(() => {
    el.style.opacity = 0;
    setTimeout(() => {
      i = (i + 1) % words.length;
      el.textContent = words[i];
      el.style.opacity = 1;
    }, 300);
  }, 2000);
})();


/* ---- SCROLL FADE-IN ---- */
(function () {
  const targets = document.querySelectorAll('.fade-in');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(t => observer.observe(t));
})();


/* ---- COUNTER ANIMATION (spacex.html) ---- */
(function () {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const animateCount = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
})();


/* ---- GALLERY FILTER (gallery.html) ---- */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
})();


/* ---- RANDOM SPACE FACTS (gallery.html) ---- */
(function () {
  const btn  = document.getElementById('fact-btn');
  const text = document.getElementById('fact-text');
  if (!btn || !text) return;

  const facts = [
    "A day on Venus is longer than a year on Venus — it rotates slower than it orbits the Sun.",
    "There are more stars in the observable universe than grains of sand on all Earth's beaches.",
    "Neutron stars are so dense that a teaspoon of their material would weigh about 10 million tons.",
    "The footprints left by Apollo astronauts on the Moon will last for millions of years — there's no wind to erase them.",
    "Starship's Raptor engines burn liquid methane, a fuel that can be produced on Mars using local resources.",
    "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
    "The Milky Way galaxy is about 100,000 light-years across. At the speed of Starship, it would take billions of years to cross.",
    "SpaceX has reflown orbital-class rocket boosters over 20 times — a feat once considered impossible.",
    "One million Earths could fit inside the Sun.",
    "The International Space Station travels at about 28,000 km/h — it completes 16 sunrises per day.",
    "Saturn's rings are made mostly of ice particles and would fit almost entirely between Earth and the Moon.",
    "A black hole with the mass of Earth would be smaller than a marble."
  ];

  btn.addEventListener('click', () => {
    text.style.opacity = 0;
    setTimeout(() => {
      text.textContent = facts[Math.floor(Math.random() * facts.length)];
      text.style.opacity = 1;
    }, 250);
  });

  /* Show first fact immediately */
  text.textContent = facts[Math.floor(Math.random() * facts.length)];
})();
