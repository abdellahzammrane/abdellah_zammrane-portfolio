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
    title: "PIE - Soutenance de projet KeyTracker KagiTech",
    description: "KeyTracker presentation for the Project Integration and Enterprise module (PIE).",
    tech: ["HTML", "CSS", "JS"],
    image: "/images/kagitech-optimized.jpg",
    github: "https://github.com/abdellahzammrane/PIE-Project-the-final-version/blob/main/index.html",
    demo: "https://abdellahzammrane.github.io/PIE-Project-the-final-version/",
  }, {
    title: "Facilo — Modern E-Commerce & Service Marketplace",
    description: "A web marketplace for browsing products and services.",
    tech: ["HTML", "CSS", "JS","Git","Github","Vercel"],
    image: "/images/facilo-optimized.jpg",
    github: "https://github.com/abdellahzammrane/Facilo-Project-DEVWFS-202",
    demo: "https://abdellahzammrane.github.io/Facilo-Project-DEVWFS-202/home.html",
    reportUrl: "/docs/Rapport_projet_Facilo.pdf",
  },
];

const exercisesData = [
{ title: "All types of diagrams, Control", module: "M201", moduleName: "Préparer un projet Web", category: "m201", description: "UML diagrams for a real estate sales process.", codeUrl: "https://github.com/your-username/exercises/uml/ecommerce-class-diagram", downloadUrl: "/docs/les-diagrames.pdf" },
{title:"Figma Partie 1", module:"M201", moduleName:"Préparer un projet Web", category:"m201", description:"Three exercises covering Figma basics.", codeUrl:"https://github.com/your-username/exercises/figma/expense-tracker", downloadUrl:"/docs/figma-partie-1.pdf"},
{title:"Figma Partie 2", module:"M201", moduleName:"Préparer un projet Web", category:"m201", description:"An exercise on advanced Figma tools.", codeUrl:"https://github.com/your-username/exercises/figma/expense-tracker", downloadUrl:"/docs/figma-partie-2.png"},
{title:"Figma Ficilo application mobile", module:"M201", moduleName:"Préparer un projet Web", category:"m201", description:"Mobile app design practice in Figma.", codeUrl:"https://github.com/your-username/exercises/figma/expense-tracker", downloadUrl:"/docs/figma-facilo-app-mobile.pdf"},
{title:"Atelier 1: Gestion de projet", module:"M202", moduleName:"Gestion de Projets", category:"m202", description:"Project management fundamentals.", codeUrl:"https://github.com/your-username/exercises/figma/expense-tracker", downloadUrl:"/docs/Atelier1_GestionProjet.pdf"},
{title:"Atelier 2: Agile Scrum", module:"M202", moduleName:"Gestion de Projets", category:"m202", description:"Agile Scrum review questions.", codeUrl:"https://github.com/your-username/exercises/figma/expense-tracker", downloadUrl:"/docs/Atelier2_Agile_Scrum.pdf"},
{title:"Atelier 3: Les bases de Git", module:"M202", moduleName:"Gestion de Projets", category:"m202", description:"Git basics and essential commands.", codeUrl:"https://github.com/your-username/exercises/figma/expense-tracker", downloadUrl:"/docs/Atelier3_git.pdf"},
{title:"Atelier 4: Les commandes de Git", module:"M202", moduleName:"Gestion de Projets", category:"m202", description:"Advanced Git commands.", codeUrl:"https://github.com/your-username/exercises/figma/expense-tracker", downloadUrl:"/docs/Atelier4_Git.pdf"},
{title:"Atelier 5: Git (exemple EFM)", module:"M202", moduleName:"Gestion de Projets", category:"m202", description:"Git practice for the regional end-of-module exam.", codeUrl:"https://github.com/your-username/exercises/figma/expense-tracker", downloadUrl:"/docs/Atelier5_EFM_Régional.pdf"},
{title:"Atelier 6: Prérequis du Sprint 3", module:"M202", moduleName:"Gestion de Projets", category:"m202", description:"Sprint 3 setup with Aiven and Cloudinary.", liveDemoUrl:"https://atelier6stagiaires.vercel.app/", downloadUrl:"/docs/Atelier6_GitHub_aiven_cloudinary.pdf"},
{title:"Atelier 7: SonarQube dans une pipeline CI/CD GitLab", module:"M202", moduleName:"Gestion de Projets", category:"m202", description:"SonarQube integration in a GitLab CI/CD pipeline.", codeUrl:"https://atelier6stagiaires.vercel.app/", downloadUrl:"/docs/Atelier7_GitLab_SonarQube_Cloud.pdf"},
{title:"Atelier 1: SQL Complet – Requêtes, Calculs, Optimisation et Sécurité", module:"M203", moduleName:"Gestion des Données", category:"m203", description:"SQL queries, calculations, optimization, and security.", codeUrl:"https://atelier6stagiaires.vercel.app/", downloadUrl:"/docs/Atelier1_SQL_gestion_données.pdf"},
{title:"Atelier 2: Procédures et fonctions stockées (MySQL)", module:"M203", moduleName:"Gestion des Données", category:"m203", description:"MySQL stored procedures and functions.", codeUrl:"https://atelier6stagiaires.vercel.app/", downloadUrl:"/docs/Atelier_2_Procedures_et_Fonctions_Stockees_MySQL.pdf"},
{title:"Atelier 3: Gestion d'un centre de formation (MySQL)", module:"M203", moduleName:"Gestion des Données", category:"m203", description:"MySQL exercises for a training center database.", codeUrl:"https://atelier6stagiaires.vercel.app/", downloadUrl:"/docs/Atelier_3_Gestion_Centre_de_Formation_MySQL.pdf"},
{title:"Atelier 4: Les curseurs (MySQL)", module:"M203", moduleName:"Gestion des Données", category:"m203", description:"Using cursors in MySQL.", codeUrl:"https://atelier6stagiaires.vercel.app/", downloadUrl:"/docs/Atelier_4_Les_Curseurs_MySQL.pdf"},
{title:"Atelier 5: MySQL", module:"M203", moduleName:"Gestion des Données", category:"m203", description:"MySQL data management practice.", codeUrl:"https://atelier6stagiaires.vercel.app/", downloadUrl:"/docs/Atelier_5_MySQL.pdf"},
{title:"Atelier 6: Les triggers (MySQL)", module:"M203", moduleName:"Gestion des Données", category:"m203", description:"Creating and using MySQL triggers.", codeUrl:"https://atelier6stagiaires.vercel.app/", downloadUrl:"/docs/Atelier_6_Les_Triggers_MySQL.pdf"},

];

const presentationsData = [
  { title: "Presentation about The Project Of Facilo", subject: "Mini_Project", description: "An overview of the diagrams used in Facilo.", fileUrl: "/docs/Projet_FACILO.pptx", coverAlt: "Cover slide for the Projet Facilo presentation" },
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
      <div class="project-thumb">
      <img src="${project.image}" alt="${escapeHtml(project.title)}" class="project-img" loading="lazy" decoding="async" />
      </div>
      <div class="project-body">
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-desc">${escapeHtml(project.description)}</p>
        <div class="tag-row">
          ${project.tech.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
        </div>
        <div class="card-actions">
          <a class="btn btn-small" href="${project.github}" target="_blank" rel="noopener noreferrer"><i data-lucide="code-2" aria-hidden="true"></i>GitHub</a>
          <a class="btn btn-small" href="${project.demo}" target="_blank" rel="noopener noreferrer"><i data-lucide="arrow-up-right" aria-hidden="true"></i>Live Demo</a>
          ${project.reportUrl ? `<a class="btn btn-small" href="${project.reportUrl}" download><i data-lucide="download" aria-hidden="true"></i>Download Report</a>` : ""}
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
    <article class="exercise-card is-hidden" data-category="${ex.category}" data-index="${index}">
      <span class="exercise-module"><strong>${escapeHtml(ex.module)}</strong><span>${escapeHtml(ex.moduleName)}</span></span>
      <h3 class="exercise-title">${escapeHtml(ex.title)}</h3>
      <p class="exercise-desc">${escapeHtml(ex.description)}</p>
      <div class="card-actions">
        ${ex.liveDemoUrl
          ? `<a class="btn btn-small" href="${escapeHtml(ex.liveDemoUrl)}" target="_blank" rel="noopener noreferrer"><i data-lucide="arrow-up-right" aria-hidden="true"></i>Live Demo</a>`
          : `<button class="btn btn-small js-view-exercise" data-index="${index}"><i data-lucide="code-2" aria-hidden="true"></i>View Code</button>`}
        <a class="btn btn-small" href="${ex.downloadUrl}" download><i data-lucide="download" aria-hidden="true"></i>Download</a>
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
  const grid = $("#exerciseGrid");
  const note = $("#exerciseSelectionNote");
  if (!filterBar || !grid) return;

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".module-filter");
    if (!btn) return;

    $$(".module-filter", filterBar).forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");

    const filter = btn.dataset.filter;
    const cards = $$(".exercise-card", grid);
    let visibleCount = 0;
    cards.forEach((card) => {
      const matches = card.dataset.category === filter;
      card.classList.toggle("is-hidden", !matches);
      if (matches) visibleCount += 1;
    });
    grid.hidden = false;
    if (note) note.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "exercise" : "exercises"} for ${btn.querySelector("strong").textContent} · ${btn.querySelector(".module-card-title").textContent}.`;
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
      <div class="presentation-preview" role="img" aria-label="${escapeHtml(p.coverAlt || `${p.title} cover`)}">
        <img class="presentation-cover-wave" src="/images/facilo-cover-wave.png" alt="" loading="lazy" decoding="async" />
        <span class="presentation-cover-project" aria-hidden="true">Projet</span>
        <img class="presentation-cover-wordmark" src="/images/facilo-cover-wordmark.png" alt="" loading="lazy" decoding="async" />
      </div>
      <div class="presentation-body">
        <span class="presentation-subject">${escapeHtml(p.subject)}</span>
        <h3 class="presentation-title">${escapeHtml(p.title)}</h3>
        <p class="presentation-desc">${escapeHtml(p.description)}</p>
        <div class="card-actions">
          <button class="btn btn-small js-view-presentation" data-index="${index}"><i data-lucide="presentation" aria-hidden="true"></i>View Presentation</button>
          <a class="btn btn-small" href="${p.fileUrl}" download><i data-lucide="download" aria-hidden="true"></i>Download</a>
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
  if (!navbar || !navToggle || !navLinks) return;

  const mobileNav = window.matchMedia("(max-width: 920px)");
  const setMenuOpen = (isOpen, restoreFocus = false) => {
    navLinks.classList.toggle("is-open", isOpen);
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    navLinks.inert = mobileNav.matches && !isOpen;
    if (restoreFocus) navToggle.focus();
  };

  setMenuOpen(false);

  navToggle.addEventListener("click", () => {
    setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
  });

  $$(".nav-link", navLinks).forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("pointerdown", (event) => {
    if (mobileNav.matches && navToggle.getAttribute("aria-expanded") === "true" &&
        !navLinks.contains(event.target) && event.target !== navToggle && !navToggle.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false, true);
    }
  });

  mobileNav.addEventListener("change", () => {
    setMenuOpen(false);
  });
}

function initActiveSectionTracking() {
  const sections = $$("main section[id]");
  const navLinks = $$(".nav-link");
  let activeSection = null;

  const setActive = (id) => {
    if (id === activeSection) return;
    activeSection = id;
    navLinks.forEach((link) => {
      const isActive = link.dataset.section === id;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const initialSection = window.location.hash.slice(1);
  if (navLinks.some((link) => link.dataset.section === initialSection)) setActive(initialSection);

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
   9. SHARED SCROLL UI
   One passive listener updates the navbar, progress bar and back-to-top
   control once per frame. Document height is measured only on resize/content
   changes, never during a scroll frame.
   --------------------------------------------------------- */

function initScrollEffects() {
  const navbar = $("#navbar");
  const progress = $("#scrollProgressFill");
  const backToTop = $("#backToTop");
  const root = document.documentElement;
  let maxScroll = 0;
  let framePending = false;
  let previousScrolled = null;
  let previousVisible = null;
  let previousProgress = -1;

  const measureScrollRange = () => {
    maxScroll = Math.max(0, root.scrollHeight - root.clientHeight);
  };

  const update = () => {
    framePending = false;
    const scrollTop = Math.max(0, window.scrollY || root.scrollTop);
    const isScrolled = scrollTop > 12;
    const isBackToTopVisible = scrollTop > 500;
    const progressValue = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;

    if (navbar && isScrolled !== previousScrolled) {
      navbar.classList.toggle("is-scrolled", isScrolled);
      previousScrolled = isScrolled;
    }
    if (backToTop && isBackToTopVisible !== previousVisible) {
      backToTop.classList.toggle("is-visible", isBackToTopVisible);
      previousVisible = isBackToTopVisible;
    }
    if (progress && Math.abs(progressValue - previousProgress) > 0.001) {
      progress.style.transform = `scaleX(${progressValue})`;
      previousProgress = progressValue;
    }
  };

  const scheduleUpdate = () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(update);
  };

  const refreshScrollRange = () => {
    measureScrollRange();
    scheduleUpdate();
  };

  measureScrollRange();
  update();
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", refreshScrollRange, { passive: true });
  window.addEventListener("load", refreshScrollRange, { once: true });

  if ("ResizeObserver" in window && document.body) {
    const contentObserver = new ResizeObserver(refreshScrollRange);
    contentObserver.observe(document.body);
  }

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

/* ---------------------------------------------------------
   10. HERO STAT COUNTERS
   --------------------------------------------------------- */

function initHeroCounters() {
  const counters = $$(".hero-stat-num, .tilt-stat strong");
  if (counters.length === 0) return;

  // Real counts, pulled straight from the content data above —
  // no more hardcoded numbers to forget to update.
  const realCounts = {
    projects: projectsData.length,
    exercises: exercisesData.length,
    presentations: presentationsData.length,
  };

  counters.forEach((el) => {
    const stat = el.dataset.stat;
    if (stat && stat in realCounts) {
      el.dataset.count = realCounts[stat];
    }
  });

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

  const count = window.innerWidth < 760 ? 0 : 6;
  const fragment = document.createDocumentFragment();

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

    fragment.appendChild(bubble);
  }

  field.appendChild(fragment);
}

const aboutBubbleLabels = [
  "Gym", "Designer", "Decsipline", "HP EliteBook", "McDonalds", "Developer",
  "Stagiaire", "Poco", "MX570", "Triceps", "Handsome", "Dev104",
  "DEVOWFS202", "ISMONTIC", "Creatine", "DLTB", "LINE 20", "Flexible",
  "Passion", "Protien", "Eggs", "Taper Fade", "Belguim",
];

function initAboutBubbles() {
  const field = $("#aboutBubbleField");
  if (!field || prefersReducedMotion || window.innerWidth < 760) return;

  const fragment = document.createDocumentFragment();
  aboutBubbleLabels.slice(0, 8).forEach((label) => {
    const bubble = document.createElement("span");
    bubble.className = "bubble about-bubble";
    bubble.textContent = label;

    const duration = 18 + Math.random() * 14;
    const maxLeft = Math.max(4, ((window.innerWidth - 205) / window.innerWidth) * 100);
    bubble.style.left = `${4 + Math.random() * (maxLeft - 4)}%`;
    bubble.style.fontSize = `${0.67 + Math.random() * 0.1}rem`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${Math.random() * -duration}s`;
    bubble.style.setProperty("--drift", `${Math.round(Math.random() * 120 - 60)}px`);

    fragment.appendChild(bubble);
  });
  field.appendChild(fragment);
}

/* ---------------------------------------------------------
   12b-2. PURPLE FIREFLIES
   --------------------------------------------------------- */

function initFireflies() {
  const field = $("#fireflyField");
  if (!field) return;

  if (window.innerWidth < 760) return;
  const count = 6;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const firefly = document.createElement("span");
    firefly.className = "firefly";
    firefly.style.left = `${Math.random() * 100}%`;
    firefly.style.top = `${Math.random() * 100}%`;
    firefly.style.setProperty("--firefly-size", `${2 + Math.random() * 3}px`);
    fragment.appendChild(firefly);
  }
  field.appendChild(fragment);
}

function initPointerAura() {
  const aura = $("#pointerAura");
  if (!aura || prefersReducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  let framePending = false;
  let auraVisible = false;
  let pointerX = 0;
  let pointerY = 0;

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (framePending) return;

    framePending = true;
    requestAnimationFrame(() => {
      aura.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
      if (!auraVisible) {
        document.body.classList.add("has-pointer-aura");
        auraVisible = true;
      }
      framePending = false;
    });
  }, { passive: true });

  const hideAura = () => {
    if (!auraVisible) return;
    document.body.classList.remove("has-pointer-aura");
    auraVisible = false;
  };
  window.addEventListener("pointerleave", hideAura, { passive: true });
  window.addEventListener("blur", hideAura);
}

/* ---------------------------------------------------------
   12c. HERO TYPEWRITER
   --------------------------------------------------------- */

function initTypewriter() {
  const el = $("#typewriter");
  if (!el) return;

  const phrase = "Digital Development Student";
  if (prefersReducedMotion) {
    el.textContent = phrase;
    return;
  }

  let charIndex = 0;
  function tick() {
    charIndex += 1;
    el.textContent = phrase.slice(0, charIndex);
    if (charIndex < phrase.length) setTimeout(tick, 55);
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
   12g. COPY-TO-CLIPBOARD BUTTONS
   --------------------------------------------------------- */

function initCopyButtons() {
  $$(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const text = btn.dataset.copy || "";
      let copied = true;

      try {
        await navigator.clipboard.writeText(text);
      } catch {
        try {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        } catch {
          copied = false;
        }
      }

      if (copied) {
        btn.classList.add("is-copied");
        setTimeout(() => btn.classList.remove("is-copied"), 1500);
        showToast(`Copied: ${text}`);
      } else {
        showToast("Couldn't copy — please copy it manually.");
      }
    });
  });
}

/* ---------------------------------------------------------
   12h. GALAXY HOVER FOR PRIMARY CALLS TO ACTION
   --------------------------------------------------------- */

function initGalaxyButtons() {
  $$(".btn-galaxy").forEach((button) => {
    if (button.dataset.galaxyReady) return;
    button.dataset.galaxyReady = "true";

    const label = document.createElement("span");
    label.className = "galaxy-button-label";
    while (button.firstChild) label.appendChild(button.firstChild);

    const backdrop = document.createElement("span");
    backdrop.className = "galaxy-button-backdrop";
    backdrop.setAttribute("aria-hidden", "true");

    const spark = document.createElement("span");
    spark.className = "galaxy-button-spark";
    spark.setAttribute("aria-hidden", "true");

    const staticStars = document.createElement("span");
    staticStars.className = "galaxy__container";
    staticStars.setAttribute("aria-hidden", "true");

    for (let i = 0; i < 2; i++) {
      const star = document.createElement("span");
      star.className = "galaxy-star galaxy-star--static";
      star.style.setProperty("--size", `${2 + Math.random() * 2}`);
      star.style.setProperty("--duration", `${6 + Math.floor(Math.random() * 15)}`);
      star.style.setProperty("--delay", `${1 + Math.floor(Math.random() * 10)}`);
      staticStars.appendChild(star);
    }

    const galaxy = document.createElement("span");
    galaxy.className = "galaxy";
    galaxy.setAttribute("aria-hidden", "true");

    const ring = document.createElement("span");
    ring.className = "galaxy__ring";

    for (let i = 0; i < 10; i++) {
      const star = document.createElement("span");
      star.className = "galaxy-star";
      star.style.setProperty("--duration", `${6 + Math.floor(Math.random() * 15)}`);
      star.style.setProperty("--delay", `${1 + Math.floor(Math.random() * 10)}`);
      star.style.setProperty("--alpha", `${0.4 + Math.random() * 0.5}`);
      star.style.setProperty("--size", `${2 + Math.floor(Math.random() * 5)}`);
      star.style.setProperty("--distance", `${40 + Math.floor(Math.random() * 160)}`);
      ring.appendChild(star);
    }

    galaxy.appendChild(ring);
    button.append(backdrop, spark, staticStars, galaxy, label);
  });
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
  initScrollEffects();
  initHeroCounters();
  initContactForm();
  setFooterYear();

  initThemeToggle();
  initSkillBars();
  initCopyButtons();

  const initDecorativeEffects = () => {
    initBubbles();
    initAboutBubbles();
    initFireflies();
    initPointerAura();
    initTypewriter();
    initGalaxyButtons();
  };
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(initDecorativeEffects, { timeout: 1200 });
  } else {
    window.setTimeout(initDecorativeEffects, 180);
  }

  // Runs last so icons injected by the render functions above
  // (e.g. presentation cards) are converted too.
  if (window.lucide) lucide.createIcons();
}
);
