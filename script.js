// ── FLOATING PARTICLES ────────────────────────────────────────────────────
(function spawnParticles() {
  const container = document.getElementById('particles');
  const colors = ['#00ff88', '#00d4ff', '#00ffcc', '#7b61ff', '#ff6b35'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left:${Math.random()*100}%;
      width:${1+Math.random()*3}px;
      height:${1+Math.random()*3}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${8+Math.random()*14}s;
      animation-delay:${Math.random()*10}s;
      box-shadow:0 0 6px currentColor;
    `;
    container.appendChild(p);
  }
})();

// ── NAVBAR SCROLL ─────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 80);
});

// ── SIMULATED HR COUNTER ──────────────────────────────────────────────────
(function hrFlicker() {
  const el = document.getElementById('hr-val');
  if (!el) return;
  const base = 72;
  setInterval(() => {
    el.textContent = base + Math.floor(Math.random() * 5 - 2);
  }, 1200);
})();

// ── CIRCUIT BOARD CANVAS ──────────────────────────────────────────────────
const canvas = document.getElementById('circuit-canvas');
const ctx    = canvas.getContext('2d');
let nodes    = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  buildCircuit();
}

function buildCircuit() {
  nodes = [];
  const cols = Math.floor(canvas.width  / 70);
  const rows = Math.floor(canvas.height / 70);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (Math.random() > 0.52) {
        nodes.push({
          x:     i * 70 + 35 + (Math.random() - 0.5) * 25,
          y:     j * 70 + 35 + (Math.random() - 0.5) * 25,
          pulse: Math.random(),
          speed: 0.004 + Math.random() * 0.009,
          size:  1.5 + Math.random() * 3
        });
      }
    }
  }
}

// Colour palette: green, teal, blue
const traceColors = ['0,255,136', '0,255,204', '0,212,255'];

function drawCircuit() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 0.7;

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx   = nodes[j].x - nodes[i].x;
      const dy   = nodes[j].y - nodes[i].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const alpha = (1 - dist / 120) * 0.55;
        const col   = traceColors[(i + j) % traceColors.length];
        ctx.strokeStyle = `rgba(${col},${alpha})`;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        // right-angle PCB trace
        const mx = nodes[i].x + dx * 0.5;
        ctx.lineTo(mx, nodes[i].y);
        ctx.lineTo(mx, nodes[j].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw nodes
  nodes.forEach((node, idx) => {
    node.pulse += node.speed;
    if (node.pulse > 1) node.pulse = 0;
    const glow  = Math.sin(node.pulse * Math.PI * 2) * 0.5 + 0.5;
    const col   = traceColors[idx % traceColors.length];
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
    ctx.fillStyle   = `rgba(${col},${0.35 + glow * 0.65})`;
    ctx.shadowBlur  = 6 + glow * 14;
    ctx.shadowColor = `rgba(${col},0.9)`;
    ctx.fill();
    ctx.shadowBlur  = 0;
  });

  requestAnimationFrame(drawCircuit);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawCircuit();

// ── TYPING EFFECT ─────────────────────────────────────────────────────────
const titles = [
  "Electronics & Embedded Systems",
  "Medical Electronics Student",
  "Healthcare Tech Enthusiast",
  "AI & Cloud Explorer",
  "Sensor & Microcontroller Dev"
];

let titleIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed-text');

function typeLoop() {
  const current = titles[titleIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      titleIdx = (titleIdx + 1) % titles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 38 : 68);
}
typeLoop();

// ── POPULATE FROM DATA ────────────────────────────────────────────────────
const d = portfolioData;

// About text
document.getElementById('about-text-content').textContent = d.about;

// Contact & social links
document.querySelectorAll('.social-chip')[0].href = d.linkedin;
document.querySelectorAll('.social-chip')[1].href = d.github;

// ── STAT COUNTER ANIMATION ────────────────────────────────────────────────
function animateCount(el, target, duration) {
  let start    = 0;
  const step   = target / (duration / 16);
  const timer  = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start);
    }
  }, 16);
}

// ── BUILD SKILLS ──────────────────────────────────────────────────────────
const skillsGrid = document.getElementById('skills-grid');
d.skills.forEach(cat => {
  const card = document.createElement('div');
  card.className = 'skill-card';
  card.style.borderColor = cat.color + '35';
  card.innerHTML = `
    <div class="skill-card-header">
      <span class="skill-icon">${cat.icon}</span>
      <span class="skill-category" style="color:${cat.color}">${cat.category}</span>
    </div>
    <div class="skill-tags">
      ${cat.items.map(item => `
        <span class="skill-tag" style="color:${cat.color};border-color:${cat.color}40;background:${cat.color}0f">
          ${item}
        </span>
      `).join('')}
    </div>
  `;
  card.addEventListener('mouseenter', () => {
    card.style.borderColor = cat.color;
    card.style.boxShadow   = `0 12px 40px ${cat.color}20`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.borderColor = cat.color + '35';
    card.style.boxShadow   = '';
  });
  skillsGrid.appendChild(card);
});

// ── BUILD EXPERIENCE TIMELINE ─────────────────────────────────────────────
const timeline = document.getElementById('timeline');
d.experience.forEach(exp => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
    <div class="timeline-dot" style="color:${exp.color};border-color:${exp.color}"></div>
    <div class="timeline-card" style="border-left:3px solid ${exp.color}">
      <div class="timeline-top">
        <span class="timeline-company" style="color:${exp.color}">${exp.company}</span>
        <span class="timeline-period">${exp.period}</span>
      </div>
      <div class="timeline-role">${exp.role}</div>
      <span class="timeline-type" style="color:${exp.color};border-color:${exp.color}45;background:${exp.color}12">
        ${exp.type}
      </span>
      <ul class="timeline-points">
        ${exp.points.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  `;
  timeline.appendChild(item);
});

// ── BUILD CERTIFICATIONS ──────────────────────────────────────────────────
const certsGrid = document.getElementById('certs-grid');
d.certifications.forEach((cert, i) => {
  const card = document.createElement('div');
  card.className = 'cert-card';
  card.style.transitionDelay = `${i * 0.06}s`;
  card.innerHTML = `
    <div class="cert-icon">${cert.icon}</div>
    <div>
      <div class="cert-name">${cert.name}</div>
      <div class="cert-issuer">${cert.issuer}</div>
      <div class="cert-date">${cert.date}</div>
    </div>
  `;
  certsGrid.appendChild(card);
});

// ── INTERSECTION OBSERVER ─────────────────────────────────────────────────
let statsDone = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');

    // Trigger stat counters once when about section appears
    if (entry.target.id === 'about' && !statsDone) {
      statsDone = true;
      setTimeout(() => {
        animateCount(document.getElementById('stat-internships'), d.stats.internships,    1000);
        animateCount(document.getElementById('stat-certs'),       d.stats.certifications, 1200);
        animateCount(document.getElementById('stat-skills'),      d.stats.skills,         1400);
      }, 200);
    }
  });
}, { threshold: 0.12 });

// Observe timeline cards, cert cards, and about section
document.querySelectorAll('.timeline-item, .cert-card').forEach(el => observer.observe(el));
const aboutSection = document.querySelector('#about');
if (aboutSection) observer.observe(aboutSection);
