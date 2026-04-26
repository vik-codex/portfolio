// ── PARTICLES ────────────────────────────────────────────────────────────
(function () {
  var container = document.getElementById('particles');
  if (!container) return;
  var colors = ['#00ff88', '#00d4ff', '#00ffcc', '#7b61ff', '#ff6b35'];
  for (var i = 0; i < 38; i++) {
    var p = document.createElement('div');
    p.className = 'particle';
    var color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = [
      'left:'              + Math.random() * 100 + '%',
      'width:'             + (1 + Math.random() * 3) + 'px',
      'height:'            + (1 + Math.random() * 3) + 'px',
      'background:'        + color,
      'box-shadow:0 0 5px '+ color,
      'animation-duration:'+ (9 + Math.random() * 13) + 's',
      'animation-delay:'   + Math.random() * 12 + 's'
    ].join(';');
    container.appendChild(p);
  }
})();

// ── NAVBAR SCROLL ─────────────────────────────────────────────────────────
window.addEventListener('scroll', function () {
  var nb = document.getElementById('navbar');
  if (nb) nb.classList.toggle('scrolled', window.scrollY > 80);
});

// ── HR FLICKER ────────────────────────────────────────────────────────────
(function () {
  var el = document.getElementById('hr-val');
  if (!el) return;
  setInterval(function () {
    el.textContent = 70 + Math.floor(Math.random() * 6);
  }, 1300);
})();

// ── CIRCUIT CANVAS ────────────────────────────────────────────────────────
var canvas = document.getElementById('circuit-canvas');
var ctx    = canvas.getContext('2d');
var nodes  = [];
var traceColors = ['0,255,136', '0,255,204', '0,212,255'];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  buildNodes();
}

function buildNodes() {
  nodes = [];
  var cols = Math.floor(canvas.width  / 72);
  var rows = Math.floor(canvas.height / 72);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (Math.random() > 0.53) {
        nodes.push({
          x:     i * 72 + 36 + (Math.random() - 0.5) * 24,
          y:     j * 72 + 36 + (Math.random() - 0.5) * 24,
          pulse: Math.random(),
          speed: 0.004 + Math.random() * 0.009,
          size:  1.4 + Math.random() * 2.8
        });
      }
    }
  }
}

function drawNodes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 0.7;

  for (var i = 0; i < nodes.length; i++) {
    for (var j = i + 1; j < nodes.length; j++) {
      var dx   = nodes[j].x - nodes[i].x;
      var dy   = nodes[j].y - nodes[i].y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 118) {
        var alpha = (1 - dist / 118) * 0.55;
        var col   = traceColors[(i + j) % traceColors.length];
        ctx.strokeStyle = 'rgba(' + col + ',' + alpha + ')';
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        var mx = nodes[i].x + dx * 0.5;
        ctx.lineTo(mx, nodes[i].y);
        ctx.lineTo(mx, nodes[j].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  for (var k = 0; k < nodes.length; k++) {
    var n    = nodes[k];
    n.pulse += n.speed;
    if (n.pulse > 1) n.pulse = 0;
    var glow  = Math.sin(n.pulse * Math.PI * 2) * 0.5 + 0.5;
    var ncol  = traceColors[k % traceColors.length];
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
    ctx.fillStyle   = 'rgba(' + ncol + ',' + (0.35 + glow * 0.65) + ')';
    ctx.shadowBlur  = 6 + glow * 14;
    ctx.shadowColor = 'rgba(' + ncol + ',0.9)';
    ctx.fill();
    ctx.shadowBlur  = 0;
  }

  requestAnimationFrame(drawNodes);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawNodes();

// ── TYPING EFFECT ─────────────────────────────────────────────────────────
var titles   = [
  'Electronics & Embedded Systems',
  'Medical Electronics Student',
  'Healthcare Tech Enthusiast',
  'AI & Cloud Explorer',
  'Sensor & Microcontroller Dev'
];
var tIdx = 0, cIdx = 0, deleting = false;
var typedEl = document.getElementById('typed-text');

function typeLoop() {
  var current = titles[tIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, cIdx + 1);
    cIdx++;
    if (cIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, cIdx - 1);
    cIdx--;
    if (cIdx === 0) {
      deleting = false;
      tIdx = (tIdx + 1) % titles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 38 : 68);
}
typeLoop();

// ── POPULATE DATA ─────────────────────────────────────────────────────────
var d = portfolioData;
document.getElementById('about-text').textContent = d.about;

// ── STAT COUNTER ──────────────────────────────────────────────────────────
function animateCount(el, target, duration) {
  var start = 0;
  var step  = target / (duration / 16);
  var timer = setInterval(function () {
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
var skillsGrid = document.getElementById('skills-grid');
d.skills.forEach(function (cat) {
  var card = document.createElement('div');
  card.className = 'skill-card';
  card.style.borderColor = cat.color + '38';
  card.innerHTML =
    '<div class="skill-card-header">' +
      '<span class="skill-icon">' + cat.icon + '</span>' +
      '<span class="skill-category" style="color:' + cat.color + '">' + cat.category + '</span>' +
    '</div>' +
    '<div class="skill-tags">' +
      cat.items.map(function (item) {
        return '<span class="skill-tag" style="color:' + cat.color +
               ';border-color:' + cat.color + '44;background:' + cat.color + '0e">' +
               item + '</span>';
      }).join('') +
    '</div>';
  card.addEventListener('mouseenter', function () {
    card.style.borderColor = cat.color;
    card.style.boxShadow   = '0 12px 38px ' + cat.color + '1e';
  });
  card.addEventListener('mouseleave', function () {
    card.style.borderColor = cat.color + '38';
    card.style.boxShadow   = '';
  });
  skillsGrid.appendChild(card);
});

// ── BUILD EXPERIENCE TIMELINE ─────────────────────────────────────────────
var timeline = document.getElementById('timeline');
d.experience.forEach(function (exp) {
  var item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML =
    '<div class="timeline-dot" style="color:' + exp.color + ';border-color:' + exp.color + '"></div>' +
    '<div class="timeline-card" style="border-left:3px solid ' + exp.color + '">' +
      '<div class="timeline-top">' +
        '<span class="timeline-company" style="color:' + exp.color + '">' + exp.company + '</span>' +
        '<span class="timeline-period">' + exp.period + '</span>' +
      '</div>' +
      '<div class="timeline-role">' + exp.role + '</div>' +
      '<span class="timeline-type" style="color:' + exp.color +
            ';border-color:' + exp.color + '44;background:' + exp.color + '12">' +
            exp.type + '</span>' +
      '<ul class="timeline-points">' +
        exp.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') +
      '</ul>' +
    '</div>';
  timeline.appendChild(item);
});

// ── BUILD PROJECTS ────────────────────────────────────────────────────────
var projectsList = document.getElementById('projects-list');
if (projectsList && d.projects && d.projects.length > 0) {
  d.projects.forEach(function (proj) {
    var card = document.createElement('div');
    card.className = 'project-card';

    // Build image thumbnails HTML
    var imagesHtml = '';
    if (proj.images && proj.images.length > 0) {
      imagesHtml = '<div class="project-images">' +
        proj.images.map(function (img) {
          return '<div class="project-img-thumb" onclick="openLightbox(\'' +
            encodeURIComponent(img.src) + '\',\'' +
            encodeURIComponent(img.caption) + '\')">' +
            '<img src="' + img.src + '" alt="' + img.caption + '" loading="lazy"/>' +
            '<div class="img-overlay">' +
              '<div class="img-caption">' + img.caption + '</div>' +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>';
    }

    // Build tags HTML
    var tagsHtml = (proj.tags || []).map(function (tag) {
      return '<span class="project-tag" style="color:' + proj.color +
             ';border-color:' + proj.color + '44;background:' + proj.color + '0e">' +
             tag + '</span>';
    }).join('');

    card.innerHTML =
      '<div class="project-header" style="border-left:4px solid ' + proj.color + '">' +
        '<div class="project-icon">' + proj.icon + '</div>' +
        '<div class="project-title-wrap">' +
          '<div class="project-title" style="color:' + proj.color + '">' + proj.title + '</div>' +
          '<div class="project-tags">' + tagsHtml + '</div>' +
        '</div>' +
        '<a href="' + proj.github + '" target="_blank" class="project-github">⚡ GitHub ↗</a>' +
      '</div>' +
      '<p class="project-desc">' + proj.desc + '</p>' +
      imagesHtml;

    projectsList.appendChild(card);
  });
}

// ── BUILD CERTIFICATIONS ──────────────────────────────────────────────────
var certsGrid = document.getElementById('certs-grid');
d.certifications.forEach(function (cert, i) {
  var card = document.createElement('div');
  card.className = 'cert-card';
  card.style.transitionDelay = (i * 0.055) + 's';
  card.innerHTML =
    '<div class="cert-icon">' + cert.icon + '</div>' +
    '<div>' +
      '<div class="cert-name">'   + cert.name   + '</div>' +
      '<div class="cert-issuer">' + cert.issuer + '</div>' +
      '<div class="cert-date">'   + cert.date   + '</div>' +
    '</div>';
  card.addEventListener('click', function () { openCertModal(cert); });
  certsGrid.appendChild(card);
});

// ── BUILD JOB SIMULATIONS ─────────────────────────────────────────────────
var jobsimsGrid = document.getElementById('jobsims-grid');
if (jobsimsGrid && d.jobSimulations && d.jobSimulations.length > 0) {
  d.jobSimulations.forEach(function (sim, i) {
    var card = document.createElement('div');
    card.className = 'jobsim-card';
    card.style.transitionDelay = (i * 0.1) + 's';
    card.style.borderTop = '3px solid ' + sim.color;

    var footerRight = sim.certImage
      ? '<span class="jobsim-view">🔍 VIEW CERT</span>'
      : '<span class="jobsim-no-cert">Certificate pending</span>';

    card.innerHTML =
      '<div class="jobsim-header">' +
        '<div class="jobsim-icon">' + sim.icon + '</div>' +
        '<div>' +
          '<div class="jobsim-company" style="color:' + sim.color + '">' + sim.company + '</div>' +
          '<div class="jobsim-role">' + sim.role + '</div>' +
          '<div class="jobsim-period">' + sim.period + '</div>' +
        '</div>' +
      '</div>' +
      '<p class="jobsim-desc">' + sim.desc + '</p>' +
      '<div class="jobsim-footer">' +
        '<span class="jobsim-badge" style="color:' + sim.color +
              ';border-color:' + sim.color + '55;background:' + sim.color + '12">' +
              'Job Simulation' +
        '</span>' +
        footerRight +
      '</div>';

    // Only open modal if there is a cert image
    if (sim.certImage) {
      card.addEventListener('click', function () {
        openCertModal({
          icon:      sim.icon,
          name:      sim.role,
          issuer:    sim.company,
          date:      sim.period,
          certImage: sim.certImage
        });
      });
    }

    jobsimsGrid.appendChild(card);
  });
}

// ── CERT MODAL ────────────────────────────────────────────────────────────
var certModal = document.getElementById('cert-modal');

function openCertModal(cert) {
  document.getElementById('m-icon').textContent   = cert.icon;
  document.getElementById('m-name').textContent   = cert.name;
  document.getElementById('m-issuer').textContent = cert.issuer;
  document.getElementById('m-date').textContent   = cert.date;
  var img = document.getElementById('m-img');
  if (cert.certImage) {
    img.src          = cert.certImage;
    img.style.display = 'block';
  } else {
    img.src          = '';
    img.style.display = 'none';
  }
  certModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function handleModalClick(e) {
  if (e.target === certModal) closeModal();
}

function closeModal() {
  certModal.classList.remove('open');
  document.body.style.overflow = '';
}

// ── IMAGE LIGHTBOX ────────────────────────────────────────────────────────
var lightbox = document.getElementById('img-lightbox');

function openLightbox(encodedSrc, encodedCaption) {
  var src     = decodeURIComponent(encodedSrc);
  var caption = decodeURIComponent(encodedCaption);
  document.getElementById('lb-img').src         = src;
  document.getElementById('lb-caption').textContent = caption;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e.target === lightbox) closeLightboxBtn();
}

function closeLightboxBtn() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

// ── ESCAPE KEY closes any open modal ─────────────────────────────────────
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
    closeLightboxBtn();
  }
});

// ── INTERSECTION OBSERVER ─────────────────────────────────────────────────
var statsDone = false;

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');

    // Trigger stat counters once when about section appears
    if (entry.target.id === 'about' && !statsDone) {
      statsDone = true;
      setTimeout(function () {
        animateCount(document.getElementById('stat-internships'), d.stats.internships,    1000);
        animateCount(document.getElementById('stat-certs'),       d.stats.certifications, 1200);
        animateCount(document.getElementById('stat-skills'),      d.stats.skills,         1400);
      }, 200);
    }
  });
}, { threshold: 0.12 });

// Observe all animated elements
document.querySelectorAll('.timeline-item, .cert-card, .project-card, .jobsim-card').forEach(function (el) {
  observer.observe(el);
});

var aboutEl = document.getElementById('about');
if (aboutEl) observer.observe(aboutEl);
