// Burak Fidan — Portfolio App JS
// burakfidan.com.tr
// Apple Human Interface Standards & Spring Physics

// ── Console Easter Egg ───────────────────────────────────────
console.log(
  "%c 👋 Burak Fidan — Digital Creator & Founder",
  "color: #F59E0B; font-size: 20px; font-weight: 700; font-family: -apple-system, sans-serif;"
);
console.log(
  "%c Inquiries & Collaboration: contact@burakfidan.com.tr",
  "color: #6B6560; font-size: 13px;"
);

// ── Nav active state on scroll ───────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[data-section]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => navObserver.observe(s));

// ═══════════════════════════════════════════════════════════════
// 3D SPATIAL MEMOJI STAGE — PHYSICS ENGINE (LERP + DAMPING)
// ═══════════════════════════════════════════════════════════════
const spatialCard = document.getElementById('memojiSpatialCard');
const memojiHero  = document.getElementById('memoji-hero');
const groundShadow = document.getElementById('memojiShadow');
const ambientGlow = document.querySelector('.memoji-ambient-glow');
const stageContainer = document.getElementById('memojiStage');

let targetRotX = 0;
let targetRotY = 0;
let currentRotX = 0;
let currentRotY = 0;

let isHoveringStage = false;
let idleTime = 0;

// Mouse coordinates tracker with wide smooth response
function handlePointerMove(clientX, clientY) {
  if (!stageContainer) return;
  const rect = stageContainer.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Normalized distance from center (-1 to 1)
  const deltaX = (clientX - centerX) / (window.innerWidth * 0.45);
  const deltaY = (clientY - centerY) / (window.innerHeight * 0.45);

  // Clamped max angles (18 deg max tilt for refined realism)
  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
  targetRotY = clamp(deltaX * 16, -18, 18);
  targetRotX = clamp(-deltaY * 16, -18, 18);
  isHoveringStage = true;
}

window.addEventListener('mousemove', (e) => {
  handlePointerMove(e.clientX, e.clientY);
}, { passive: true });

window.addEventListener('mouseleave', () => {
  isHoveringStage = false;
  targetRotX = 0;
  targetRotY = 0;
});

// Mobile gyroscope support (gentle tilt)
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (e) => {
    if (e.gamma !== null && e.beta !== null) {
      targetRotY = Math.min(Math.max(e.gamma * 0.4, -14), 14);
      targetRotX = Math.min(Math.max((e.beta - 45) * 0.35, -14), 14);
    }
  }, { passive: true });
}

// 60-120fps Animation Loop with LERP Damping (Spring factor: 0.075)
function animate3DStage() {
  idleTime += 0.02;

  // If pointer is idle, inject a subtle natural breathing motion
  let idleOffsetY = 0;
  if (!isHoveringStage) {
    idleOffsetY = Math.sin(idleTime) * 3;
    targetRotX = Math.sin(idleTime * 0.8) * 1.5;
    targetRotY = Math.cos(idleTime * 0.6) * 2;
  }

  // Linear Interpolation (Butter-smooth spring dampening — 0.05 for silky momentum)
  const lerpFactor = 0.05;
  currentRotX += (targetRotX - currentRotX) * lerpFactor;
  currentRotY += (targetRotY - currentRotY) * lerpFactor;

  if (spatialCard && memojiHero && groundShadow) {
    // 3D Card tilt + idle float
    spatialCard.style.transform = 
      `perspective(900px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) translateY(${idleOffsetY.toFixed(1)}px)`;

    // Counter-directional optical shadow (moves opposite to tilt for realistic elevation)
    const shadowOffsetX = (-currentRotY * 1.6).toFixed(1);
    const shadowOffsetY = (currentRotX * 0.9).toFixed(1);
    const shadowScale = (1 - Math.abs(currentRotX) * 0.012 - idleOffsetY * 0.015).toFixed(3);
    const shadowOpacity = (0.22 - Math.abs(currentRotX) * 0.005).toFixed(3);

    groundShadow.style.transform = 
      `translateX(calc(-50% + ${shadowOffsetX}px)) translateY(${shadowOffsetY}px) scale(${shadowScale})`;
    groundShadow.style.opacity = shadowOpacity;

    // Ambient glow follows subtly
    if (ambientGlow) {
      ambientGlow.style.transform = 
        `translate(calc(-50% + ${(currentRotY * 0.9).toFixed(1)}px), ${(-currentRotX * 0.9).toFixed(1)}px)`;
    }
  }

  requestAnimationFrame(animate3DStage);
}

// Launch physics loop
requestAnimationFrame(animate3DStage);

// ═══════════════════════════════════════════════════════════════
// BUTTER-SMOOTH CARD SPOTLIGHT (THROTTLED WITH RAF)
// ═══════════════════════════════════════════════════════════════
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  let rafId = null;

  card.addEventListener('mousemove', (e) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + '%';
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1) + '%';
      card.style.setProperty('--mx', x);
      card.style.setProperty('--my', y);
    });
  });

  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
  });
});

// ── Stack Pills micro-tilt / interactive hover is CSS-powered

// ── Filter Tabs for All Projects ─────────────────────────────
const filterTabs = document.querySelectorAll('.filter-tab');
const projectsMini = document.querySelectorAll('.project-card-mini');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    projectsMini.forEach(card => {
      const cat = card.dataset.category;
      if (filter === 'all' || cat === filter) {
        card.style.display = 'flex';
        card.style.animation = 'none';
        card.offsetHeight; // force reflow
        card.style.animation = 'fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ── Fade-up reveal on scroll ─────────────────────────────────
const fadeTargets = document.querySelectorAll('[data-fade]');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeTargets.forEach(el => fadeObserver.observe(el));

// Injected silky fade-up stylesheet
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
  [data-fade] {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  [data-fade].is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(fadeStyle);
