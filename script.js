/* ============================================================
   script.js — Vikas M Portfolio
   ============================================================ */

/* ── Particles ─────────────────────────────────────────────── */
(function buildParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      width:${2+Math.random()*3}px;
      height:${2+Math.random()*3}px;
      animation-delay:${Math.random()*8}s;
      animation-duration:${6+Math.random()*6}s;
    `;
    container.appendChild(p);
  }
})();

/* ── Circuit canvas ─────────────────────────────────────────── */
(function initCircuit() {
  const canvas = document.getElementById('circuit-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  const nodes = Array.from({length: 18}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4
  }));
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
    });
    nodes.forEach((a, i) => {
      nodes.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 160) {
          ctx.strokeStyle = `rgba(0,255,180,${0.15 * (1 - d/160)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      });
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── Typed text ─────────────────────────────────────────────── */
(function initTyped() {
  const el = document.getElementById('typed-text');
  if (!el || typeof TITLES === 'undefined' || !TITLES.length) return;
  let ti = 0, ci = 0, deleting = false;
  function tick() {
    const word = TITLES[ti];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(tick, 1800); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; ti = (ti + 1) % TITLES.length; }
    }
    setTimeout(tick, deleting ? 55 : 100);
  }
  tick();
})();

/* ── HR bpm flicker ─────────────────────────────────────────── */
(function initHR() {
  const el = document.getElementById('hr-val');
  if (!el) return;
  setInterval(() => { el.textContent = 68 + Math.floor(Math.random() * 10); }, 1200);
})();

/* ── Navbar scroll ──────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  if (nb) nb.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Smooth anchor links ────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});

/* ── Escape helper ──────────────────────────────────────────── */
function escQ(str) {
  return (str || '').replace(/'/g, "\\'");
}

/* ── About text ─────────────────────────────────────────────── */
function fillAbout() {
  const el = document.getElementById('about-text');
  if (el && typeof ABOUT_TEXT !== 'undefined') el.textContent = ABOUT_TEXT;
}

/* ── Animated stat counters ─────────────────────────────────── */
function animateCounter(el, target, suffix) {
  let cur = 0;
  const step = Math.ceil(target / 40);
  const iv = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = cur + (suffix || '');
    if (cur >= target) clearInterval(iv);
  }, 40);
}

function initCounters() {
  const s = (typeof STATS !== 'undefined') ? STATS : {internships:4, certs:9, skills:30};
  [
    { id: 'stat-internships', val: s.internships, suffix: '+' },
    { id: 'stat-certs',       val: s.certs,       suffix: '+' },
    { id: 'stat-skills',      val: s.skills,      suffix: '+' }
  ].forEach(({id, val, suffix}) => {
    const el = document.getElementById(id);
    if (el) animateCounter(el, val, suffix);
  });
}

/* ── Skills grid ────────────────────────────────────────────── */
function buildSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid || typeof SKILLS === 'undefined') return;
  grid.innerHTML = SKILLS.map(cat => `
    <div class="skill-card">
      <div class="skill-cat-icon">${cat.icon}</div>
      <div class="skill-cat-name">${cat.category}</div>
      <div class="skill-tags">
        ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ── Timeline ───────────────────────────────────────────────── */
function buildTimeline() {
  const tl = document.getElementById('timeline');
  if (!tl || typeof TIMELINE === 'undefined') return;
  tl.innerHTML = TIMELINE.map((item, i) => `
    <div class="tl-item ${i % 2 === 0 ? 'tl-left' : 'tl-right'}">
      <div class="tl-dot"></div>
      <div class="tl-card">
        <div class="tl-period">${item.period}</div>
        <div class="tl-role">${item.role}</div>
        <div class="tl-company">${item.company}</div>
        <p class="tl-desc">${item.desc}</p>
        <div class="tl-tags">
          ${item.tags.map(t => `<span class="tl-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Projects ───────────────────────────────────────────────── */
function buildProjects() {
  const list = document.getElementById('projects-list');
  if (!list || typeof PROJECTS === 'undefined') return;
  list.innerHTML = PROJECTS.map(p => `
    <div class="project-card">
      <div class="proj-icon">${p.icon}</div>
      <div class="proj-body">
        <div class="proj-title">${p.title}</div>
        <div class="proj-tags">
          ${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
        </div>
        <p class="proj-desc">${p.desc}</p>
        ${p.outputs && p.outputs.length ? `
          <div class="proj-outputs">
            ${p.outputs.map((img, idx) => `
              <img src="${img}" alt="Output ${idx+1}" class="proj-thumb"
                   onclick="openLightbox('${img}','${p.title} — Output ${idx+1}')"/>
            `).join('')}
          </div>` : ''}
      </div>
    </div>
  `).join('');
}

/* ── Certifications ─────────────────────────────────────────── */
function buildCerts() {
  const grid = document.getElementById('certs-grid');
  if (!grid || typeof CERTS === 'undefined') return;
  grid.innerHTML = CERTS.map(c => `
    <div class="cert-card" onclick="openModal('${c.img}','${c.icon}','${escQ(c.name)}','${escQ(c.issuer)}','${c.date}')">
      <div class="cert-icon">${c.icon}</div>
      <div class="cert-info">
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-date">${c.date}</div>
      </div>
    </div>
  `).join('');
}

/* ── Job Simulations ────────────────────────────────────────── */
function buildJobSims() {
  const grid = document.getElementById('jobsims-grid');
  if (!grid || typeof JOB_SIMS === 'undefined') return;
  grid.innerHTML = JOB_SIMS.map(j => `
    <div class="jobsim-card" style="border-top:3px solid ${j.color}"
         onclick="${j.img ? `openModal('${j.img}','${j.icon}','${escQ(j.role)}','${escQ(j.company)}','${j.period}')` : ''}">
      <div class="js-header">
        <span class="js-icon">${j.icon}</span>
        <div>
          <div class="js-company" style="color:${j.color}">${j.company}</div>
          <div class="js-role">${j.role.toUpperCase()}</div>
          <div class="js-period">${j.period}</div>
        </div>
      </div>
      <p class="js-desc">${j.desc}</p>
      <div class="js-footer">
        <span class="js-tag">${j.tag}</span>
        ${!j.img ? '<span class="js-pending">Certificate pending</span>' : ''}
      </div>
    </div>
  `).join('');
}

/* ── Modal ──────────────────────────────────────────────────── */
function openModal(imgSrc, icon, name, issuer, date) {
  document.getElementById('m-icon').textContent   = icon   || '';
  document.getElementById('m-name').textContent   = name   || '';
  document.getElementById('m-issuer').textContent = issuer || '';
  document.getElementById('m-date').textContent   = date   || '';
  const img = document.getElementById('m-img');
  img.src = imgSrc || '';
  img.style.display = imgSrc ? 'block' : 'none';
  document.getElementById('cert-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('cert-modal').classList.remove('active');
  document.body.style.overflow = '';
}

function handleModalClick(e) {
  if (e.target === document.getElementById('cert-modal')) closeModal();
}

/* ── Lightbox ───────────────────────────────────────────────── */
function openLightbox(src, caption) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-caption').textContent = caption || '';
  document.getElementById('img-lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e.target === document.getElementById('img-lightbox')) closeLightboxBtn();
}

function closeLightboxBtn() {
  document.getElementById('img-lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

/* ── Keyboard ───────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeLightboxBtn(); }
});

/* ── MAIN INIT ──────────────────────────────────────────────── */
/* Runs after full page load so all data.js variables are ready */
window.addEventListener('load', function() {

  /* 1. Fill all sections with data */
  fillAbout();
  buildSkills();
  buildTimeline();
  buildProjects();
  buildCerts();
  buildJobSims();

  /* 2. Fire counters immediately — no need to wait for scroll */
  initCounters();

  /* 3. Simple fade-in on scroll — set up AFTER content exists */
  const fadeEls = document.querySelectorAll(
    '.section, .skill-card, .cert-card, .project-card, .jobsim-card, .tl-item'
  );

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07 });

  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    io.observe(el);
  });

});
