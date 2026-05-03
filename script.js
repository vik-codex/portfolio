/* ============================================================
   script.js — Vikas M Portfolio
   Runs after data.js and index.html are both fully parsed.
   Uses inline <script> at bottom of body — no event listeners
   needed for DOM ready.
   ============================================================ */

/* ── Helpers ────────────────────────────────────────────────── */
function qs(sel) { return document.querySelector(sel); }
function escQ(s) { return (s||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'"); }

/* ── HR flicker ─────────────────────────────────────────────── */
(function() {
  var el = document.getElementById('hr-val');
  if (el) setInterval(function(){ el.textContent = 68 + Math.floor(Math.random()*10); }, 1400);
})();

/* ── Typed text ─────────────────────────────────────────────── */
(function() {
  var el = document.getElementById('typed');
  if (!el || typeof TITLES === 'undefined') return;
  var ti = 0, ci = 0, del = false;
  function tick() {
    var w = TITLES[ti];
    if (!del) {
      ci++;
      el.textContent = w.slice(0, ci);
      if (ci === w.length) { del = true; setTimeout(tick, 2000); return; }
    } else {
      ci--;
      el.textContent = w.slice(0, ci);
      if (ci === 0) { del = false; ti = (ti+1) % TITLES.length; }
    }
    setTimeout(tick, del ? 45 : 95);
  }
  tick();
})();

/* ── Background canvas ──────────────────────────────────────── */
(function() {
  var canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var W, H, nodes;

  function init() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    nodes = [];
    for (var i = 0; i < 22; i++) {
      nodes.push({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-0.5)*0.35,
        vy: (Math.random()-0.5)*0.35
      });
    }
  }

  function draw() {
    ctx.clearRect(0,0,W,H);
    nodes.forEach(function(n) {
      n.x += n.vx; n.y += n.vy;
      if (n.x<0||n.x>W) n.vx*=-1;
      if (n.y<0||n.y>H) n.vy*=-1;
    });
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i+1; j < nodes.length; j++) {
        var dx = nodes[i].x-nodes[j].x, dy = nodes[i].y-nodes[j].y;
        var d = Math.sqrt(dx*dx+dy*dy);
        if (d < 180) {
          ctx.strokeStyle = 'rgba(0,255,160,'+(0.12*(1-d/180))+')';
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
          ctx.fillStyle = 'rgba(0,255,160,0.4)';
          ctx.beginPath();
          ctx.arc(nodes[i].x, nodes[i].y, 1.5, 0, Math.PI*2);
          ctx.fill();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', init);
})();

/* ── Nav scroll effect ──────────────────────────────────────── */
window.addEventListener('scroll', function() {
  var nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

/* ── Smooth scroll ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

/* ── Counter animation ──────────────────────────────────────── */
function countUp(el, target, suffix) {
  var cur = 0;
  var step = Math.ceil(target / 50);
  var iv = setInterval(function() {
    cur = Math.min(cur + step, target);
    el.textContent = cur + (suffix||'');
    if (cur >= target) clearInterval(iv);
  }, 35);
}

/* ── ABOUT ──────────────────────────────────────────────────── */
(function() {
  var el = document.getElementById('about-text');
  if (el && typeof ABOUT_TEXT !== 'undefined') el.textContent = ABOUT_TEXT;

  var S = (typeof STATS !== 'undefined') ? STATS : {internships:4,certs:9,skills:30};
  var ei = document.getElementById('s-intern');
  var ec = document.getElementById('s-certs');
  var es = document.getElementById('s-skills');
  if (ei) countUp(ei, S.internships, '+');
  if (ec) countUp(ec, S.certs, '+');
  if (es) countUp(es, S.skills, '+');
})();

/* ── SKILLS ─────────────────────────────────────────────────── */
(function() {
  var grid = document.getElementById('skills-grid');
  if (!grid || typeof SKILLS === 'undefined') return;
  var html = '';
  SKILLS.forEach(function(cat) {
    html += '<div class="skill-card">';
    html += '<div class="skill-icon">'+cat.icon+'</div>';
    html += '<div class="skill-cat">'+cat.category+'</div>';
    html += '<div class="skill-tags">';
    cat.items.forEach(function(item) {
      html += '<span class="skill-tag">'+item+'</span>';
    });
    html += '</div></div>';
  });
  grid.innerHTML = html;
})();

/* ── TIMELINE ───────────────────────────────────────────────── */
(function() {
  var tl = document.getElementById('timeline');
  if (!tl || typeof TIMELINE === 'undefined') return;
  var html = '';
  TIMELINE.forEach(function(item, i) {
    var side = i % 2 === 0 ? 'tl-left' : 'tl-right';
    html += '<div class="tl-item '+side+'">';
    html += '<div class="tl-dot"></div>';
    html += '<div class="tl-card">';
    html += '<div class="tl-period">'+item.period+'</div>';
    html += '<div class="tl-role">'+item.role+'</div>';
    html += '<div class="tl-company">'+item.company+'</div>';
    html += '<p class="tl-desc">'+item.desc+'</p>';
    html += '<div class="tl-tags">';
    item.tags.forEach(function(t){ html += '<span class="tl-tag">'+t+'</span>'; });
    html += '</div></div></div>';
  });
  tl.innerHTML = html;
})();

/* ── PROJECTS ───────────────────────────────────────────────── */
(function() {
  var grid = document.getElementById('projects-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;
  var html = '';
  PROJECTS.forEach(function(p) {
    html += '<div class="proj-card">';
    html += '<div class="proj-icon-wrap">'+p.icon+'</div>';
    html += '<div class="proj-body">';
    html += '<div class="proj-title">'+p.title+'</div>';
    html += '<div class="proj-tags">';
    p.tags.forEach(function(t){ html += '<span class="proj-tag">'+t+'</span>'; });
    html += '</div>';
    html += '<p class="proj-desc">'+p.desc+'</p>';
    html += '</div></div>';
  });
  grid.innerHTML = html;
})();

/* ── CERTIFICATIONS ─────────────────────────────────────────── */
(function() {
  var grid = document.getElementById('certs-grid');
  if (!grid || typeof CERTS === 'undefined') return;
  var html = '';
  CERTS.forEach(function(c) {
    html += '<div class="cert-card" onclick="openModal(\''+escQ(c.img)+'\',\''+c.icon+'\',\''+escQ(c.name)+'\',\''+escQ(c.issuer)+'\',\''+c.date+'\')">';
    html += '<div class="cert-badge">'+c.icon+'</div>';
    html += '<div class="cert-info">';
    html += '<div class="cert-name">'+c.name+'</div>';
    html += '<div class="cert-issuer">'+c.issuer+'</div>';
    html += '<div class="cert-date">'+c.date+'</div>';
    html += '</div></div>';
  });
  grid.innerHTML = html;
})();

/* ── JOB SIMULATIONS ────────────────────────────────────────── */
(function() {
  var grid = document.getElementById('jobsims-grid');
  if (!grid || typeof JOB_SIMS === 'undefined') return;
  var html = '';
  JOB_SIMS.forEach(function(j) {
    var clickAttr = j.img
      ? 'onclick="openModal(\''+escQ(j.img)+'\',\''+j.icon+'\',\''+escQ(j.role)+'\',\''+escQ(j.company)+'\',\''+j.period+'\')"'
      : '';
    html += '<div class="js-card" style="--accent:'+j.color+'" '+clickAttr+'>';
    html += '<div class="js-top">';
    html += '<span class="js-icon">'+j.icon+'</span>';
    html += '<div class="js-head">';
    html += '<div class="js-company" style="color:'+j.color+'">'+j.company+'</div>';
    html += '<div class="js-role">'+j.role+'</div>';
    html += '<div class="js-period">'+j.period+'</div>';
    html += '</div></div>';
    html += '<p class="js-desc">'+j.desc+'</p>';
    html += '<ul class="js-learnings">';
    j.learnings.forEach(function(l){ html += '<li>'+l+'</li>'; });
    html += '</ul>';
    html += '<div class="js-footer">';
    html += '<span class="js-badge">JOB SIMULATION</span>';
    if (j.img) html += '<span class="js-view">View Certificate →</span>';
    html += '</div>';
    html += '</div>';
  });
  grid.innerHTML = html;
})();

/* ── MODAL ──────────────────────────────────────────────────── */
function openModal(imgSrc, icon, name, issuer, date) {
  document.getElementById('m-icon').textContent   = icon   || '';
  document.getElementById('m-name').textContent   = name   || '';
  document.getElementById('m-issuer').textContent = issuer || '';
  document.getElementById('m-date').textContent   = date   || '';
  var img = document.getElementById('m-img');
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
  if (e.target.id === 'cert-modal') closeModal();
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
(function() {
  var els = document.querySelectorAll(
    '.skill-card, .tl-item, .proj-card, .cert-card, .js-card, .about-grid, .contact-box'
  );
  if (!('IntersectionObserver' in window)) {
    els.forEach(function(el){ el.style.opacity='1'; el.style.transform='none'; });
    return;
  }
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(function(el) {
    el.classList.add('reveal');
    io.observe(el);
  });
})();
