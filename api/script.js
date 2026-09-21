/* =========================================================
   ABDELLAH ZEMRAN — PORTFOLIO SCRIPT
   All content data lives at the top of this file so it can
   be edited without touching any rendering/UI logic below.
   ========================================================= */

/* ---------------------------------------------------------
   1. CONTENT DATA — edit these to update the site
   --------------------------------------------------------- */

const projectsData = [
  {
    title: "Student Management System",
    description: "A full CRUD web app to register students, manage classes and track grades, built as a semester capstone project.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/your-username/student-management-system",
    demo: "https://your-demo-link.example.com/student-management",
  },
  {
    title: "Restaurant Landing Page",
    description: "A responsive single-page site for a fictional restaurant, focused on layout, typography and CSS animation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/your-username/restaurant-landing",
    demo: "https://your-demo-link.example.com/restaurant-landing",
  },
  {
    title: "Task Tracker App",
    description: "A lightweight to-do / task tracker with local storage persistence, filters and drag-to-reorder tasks.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/your-username/task-tracker",
    demo: "https://your-demo-link.example.com/task-tracker",
  },
  {
    title: "Library Database System",
    description: "A relational database and query layer for managing book loans, members and due dates, plus a simple admin UI.",
    tech: ["MySQL", "PHP"],
    github: "https://github.com/your-username/library-database",
    demo: "https://your-demo-link.example.com/library-database",
  },
  {
    title: "Weather Dashboard",
    description: "A small dashboard that fetches and displays weather data with a clean, card-based interface.",
    tech: ["Python", "HTML", "CSS"],
    github: "https://github.com/your-username/weather-dashboard",
    demo: "https://your-demo-link.example.com/weather-dashboard",
  },
  {
    title: "E-Commerce Product Page",
    description: "A responsive product listing and detail page with cart interactions, built to practice component-style CSS.",
    tech: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/your-username/ecommerce-product-page",
    demo: "https://your-demo-link.example.com/ecommerce-product-page",
  },
];

const exercisesData = [
{ title: "All types of diagrams, Control", module: "UML", category: "uml", description: "L'atelier UML traite du processus de vente immobilière en utilisant tous les diagrammes principaux..", codeUrl: "https://github.com/your-username/exercises/uml/ecommerce-class-diagram", downloadUrl: "/docs/CC-des-diagrames.zip" },
{title:"Figma Partie 1", module:"Figma", category:"figma", description:"L'atelier Figma Partie 1, il contient trois exercices sur les bases de Figma.", codeUrl:"https://github.com/your-username/exercises/figma/expense-tracker", downloadUrl:"/docs/figma-partie-1.rar"},
{title:"Figma Partie 2", module:"Figma", category:"figma", description:"L'atelier_Figma_Partie 2_Outils avancés, il contient un seul exercice.", codeUrl:"https://github.com/your-username/exercises/figma/expense-tracker", downloadUrl:"/docs/figma-partie-2.zip"},

];

const presentationsData = [
  { title: "Introduction to Web Semantics", subject: "HTML/CSS Module", description: "A presentation on semantic HTML5 elements and why they matter for accessibility and SEO.", fileUrl: "#" },
  { title: "JavaScript Event Loop Explained", subject: "JavaScript Module", description: "A walkthrough of the call stack, task queue and how asynchronous JavaScript actually runs.", fileUrl: "#" },
  { title: "Relational Databases 101", subject: "SQL Module", description: "Core concepts of relational databases: tables, keys, normalization and relationships.", fileUrl: "#" },
  { title: "Building REST APIs with PHP", subject: "PHP Module", description: "An overview of REST principles and a live-coded example of a small PHP API.", fileUrl: "#" },
];

/* ---------------------------------------------------------
   2. UTILITIES
   --------------------------------------------------------- */

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------
   3. RENDER: PROJECTS
   --------------------------------------------------------- */

function renderProjects() {
  const grid = $("#projectGrid");
  if (!grid) return;

  grid.innerHTML = projectsData.map((project) => `
    <article class="project-card">
      <div class="project-thumb"><span>${escapeHtml(project.title)}</span></div>
      <div class="project-body">
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-desc">${escapeHtml(project.description)}</p>
        <div class="tag-row">
          ${project.tech.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
        </div>
        <div class="card-actions">
          <a class="btn btn-small" href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a class="btn btn-small" href="${project.demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </article>
  `).join("");
}

/* ---------------------------------------------------------
   4. RENDER + FILTER: EXERCISES
   --------------------------------------------------------- */

function renderExercises() {
  const grid = $("#exerciseGrid");
  if (!grid) return;

  grid.innerHTML = exercisesData.map((ex, index) => `
    <article class="exercise-card" data-category="${ex.category}" data-index="${index}">
      <span class="exercise-module">${escapeHtml(ex.module)}</span>
      <h3 class="exercise-title">${escapeHtml(ex.title)}</h3>
      <p class="exercise-desc">${escapeHtml(ex.description)}</p>
      <div class="card-actions">
        <button class="btn btn-small js-view-exercise" data-index="${index}">View Code</button>
        <a class="btn btn-small" href="${ex.downloadUrl}" download>Download</a>
      </div>
    </article>
  `).join("");

  $$(".js-view-exercise", grid).forEach((btn) => {
    btn.addEventListener("click", () => {
      const ex = exercisesData[Number(btn.dataset.index)];
      openModal({
        title: ex.title,
        bodyHtml: `
          <p><strong>${escapeHtml(ex.module)}</strong> — ${escapeHtml(ex.description)}</p>
          <div class="modal-placeholder">
            Code preview placeholder.<br>
            Replace <code>codeUrl</code> in <code>script.js</code> with a real repository
            link, or embed a code snippet here directly.
          </div>
        `,
      });
    });
  });
}

function initExerciseFilters() {
  const filterBar = $("#exerciseFilters");
  if (!filterBar) return;

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    $$(".filter-btn", filterBar).forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    $$(".exercise-card").forEach((card) => {
      const matches = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !matches);
    });
  });
}

/* ---------------------------------------------------------
   5. RENDER: PRESENTATIONS
   --------------------------------------------------------- */

function renderPresentations() {
  const grid = $("#presentationGrid");
  if (!grid) return;

  grid.innerHTML = presentationsData.map((p, index) => `
    <article class="presentation-card">
      <div class="presentation-preview" aria-hidden="true"><i data-lucide="presentation"></i></div>
      <div class="presentation-body">
        <span class="presentation-subject">${escapeHtml(p.subject)}</span>
        <h3 class="presentation-title">${escapeHtml(p.title)}</h3>
        <p class="presentation-desc">${escapeHtml(p.description)}</p>
        <div class="card-actions">
          <button class="btn btn-small js-view-presentation" data-index="${index}">View Presentation</button>
          <a class="btn btn-small" href="${p.fileUrl}" download>Download</a>
        </div>
      </div>
    </article>
  `).join("");

  $$(".js-view-presentation", grid).forEach((btn) => {
    btn.addEventListener("click", () => {
      const p = presentationsData[Number(btn.dataset.index)];
      openModal({
        title: p.title,
        bodyHtml: `
          <p><strong>${escapeHtml(p.subject)}</strong> — ${escapeHtml(p.description)}</p>
          <div class="modal-placeholder">
            Presentation preview placeholder.<br>
            Replace <code>fileUrl</code> in <code>script.js</code> with a real slide file
            or embed link to show it here.
          </div>
        `,
      });
    });
  });
}

/* ---------------------------------------------------------
   6. MODAL
   --------------------------------------------------------- */

const modalOverlay = $("#modalOverlay");
const modalTitle = $("#modalTitle");
const modalBody = $("#modalBody");
let lastFocusedElement = null;

function openModal({ title, bodyHtml }) {
  modalTitle.textContent = title;
  modalBody.innerHTML = bodyHtml;
  lastFocusedElement = document.activeElement;
  modalOverlay.classList.add("is-open");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("#modalClose").focus();
}

function closeModal() {
  modalOverlay.classList.remove("is-open");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

function initModal() {
  $("#modalClose").addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("is-open")) closeModal();
  });
}

/* ---------------------------------------------------------
   7. NAVBAR: scroll state, active link, mobile menu
   --------------------------------------------------------- */

function initNavbar() {
  const navbar = $("#navbar");
  const navToggle = $("#navToggle");
  const navLinks = $("#navLinks");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
  }, { passive: true });

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$(".nav-link", navLinks).forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initActiveSectionTracking() {
  const sections = $$("main section[id]");
  const navLinks = $$(".nav-link");

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.section === id);
    });
  };

  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActive(visible.target.id);
  }, { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] });

  sections.forEach((section) => observer.observe(section));
}

/* ---------------------------------------------------------
   8. SCROLL REVEAL
   --------------------------------------------------------- */

function initScrollReveal() {
  const targets = $$("[data-reveal]");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------
   9. BACK TO TOP
   --------------------------------------------------------- */

function initBackToTop() {
  const btn = $("#backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

/* ---------------------------------------------------------
   10. HERO STAT COUNTERS
   --------------------------------------------------------- */

function initHeroCounters() {
  const counters = $$(".hero-stat-num, .tilt-stat strong");
  if (counters.length === 0) return;

  const animateCounter = (el) => {
    const target = Number(el.dataset.count);
    if (prefersReducedMotion) {
      el.textContent = target;
      return;
    }
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((el) => observer.observe(el));
}


/* ---------------------------------------------------------
   11. CONTACT FORM (front-end only — no backend)
   --------------------------------------------------------- */

function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;

  const fields = ["name", "email", "message"];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    fields.forEach((field) => {
      const input = $(`#cf-${field}`, form);
      const row = input.closest(".form-row");
      const valid = input.checkValidity() && input.value.trim().length > 0;
      row.classList.toggle("has-error", !valid);
      if (!valid) isValid = false;
    });

    if (!isValid) {
      showToast("Please fill in all fields correctly.");
      return;
    }

    const submitBtn = $(".form-submit", form);
    const label = $(".btn-label", submitBtn);
    submitBtn.disabled = true;
    label.textContent = "Sending…";

    // No backend is connected — simulate a brief send delay, then confirm.
    setTimeout(() => {
      submitBtn.classList.add("is-success");
      label.textContent = "Message Ready ✓";
      showToast("This form has no backend yet — nothing was actually sent.");
      form.reset();
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.classList.remove("is-success");
        label.textContent = "Send Message";
      }, 2600);
    }, 700);
  });

  fields.forEach((field) => {
    const input = $(`#cf-${field}`, form);
    input.addEventListener("input", () => {
      input.closest(".form-row").classList.remove("has-error");
    });
  });
}

/* ---------------------------------------------------------
   12b. FLOATING LANGUAGE BUBBLES
   --------------------------------------------------------- */

const bubbleLanguages = ["HTML", "CSS", "JS", "PHP", "SQL", "Python", "MySQL", "Bootstrap", "Git", "UML", "</>", "{}"];

function initBubbles() {
  const field = $("#bubbleField");
  if (!field || prefersReducedMotion) return;

  const count = window.innerWidth < 760 ? 0 : 16;

  for (let i = 0; i < count; i++) {
    const bubble = document.createElement("span");
    bubble.className = "bubble";
    bubble.textContent = bubbleLanguages[i % bubbleLanguages.length];

    const size = 34 + Math.random() * 34;
    const left = Math.random() * 100;
    const duration = 14 + Math.random() * 14;
    const delay = Math.random() * -duration;
    const drift = (Math.random() * 80 - 40).toFixed(0) + "px";
    const fontSize = size < 46 ? "0.68rem" : "0.78rem";

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.fontSize = fontSize;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;
    bubble.style.setProperty("--drift", drift);

    field.appendChild(bubble);
  }
}

/* ---------------------------------------------------------
   12c. HERO TYPEWRITER
   --------------------------------------------------------- */

const typewriterPhrases = [
  "Digital Development Student",
  "Future Web Developer",
  "Curious Problem Solver",
  "Professional Bug Creator (and Fixer)",
];

function initTypewriter() {
  const el = $("#typewriter");
  if (!el) return;

  if (prefersReducedMotion) {
    el.textContent = typewriterPhrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const current = typewriterPhrases[phraseIndex];

    if (!isDeleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
      }
    }

    const speed = isDeleting ? 35 : 65;
    setTimeout(tick, speed);
  }

  tick();
}

/* ---------------------------------------------------------
   12d. THEME TOGGLE (light / dark)
   --------------------------------------------------------- */

function initThemeToggle() {
  const toggle = $("#themeToggle");
  if (!toggle) return;

  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initial = stored || (prefersLight ? "light" : "dark");

  if (initial === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }

  toggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
}

/* ---------------------------------------------------------
   12e. ABOUT TILT CARD
   --------------------------------------------------------- */

function initTiltCard() {
  const card = $("#tiltCard");
  if (!card || prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;

  const maxTilt = 10;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * maxTilt * 2}deg) rotateX(${-y * maxTilt * 2}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
}

/* ---------------------------------------------------------
   12f. SKILL BARS — animate fill when scrolled into view
   --------------------------------------------------------- */

function initSkillBars() {
  const categories = $$("[data-skill-category]");
  if (categories.length === 0) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    categories.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  categories.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------
   12. TOAST
   --------------------------------------------------------- */

let toastTimeout;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

/* ---------------------------------------------------------
   13. MISC
   --------------------------------------------------------- */

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function setFooterYear() {
  const el = $("#year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------
   14. INIT
   --------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderExercises();
  renderPresentations();

  initNavbar();
  initActiveSectionTracking();
  initExerciseFilters();
  initModal();
  initScrollReveal();
  initBackToTop();
  initHeroCounters();
  initContactForm();
  setFooterYear();

  initThemeToggle();
  initBubbles();
  initTypewriter();
  initTiltCard();
  initSkillBars();

  // Runs last so icons injected by the render functions above
  // (e.g. presentation cards) are converted too.
  lucide.createIcons();
}
);