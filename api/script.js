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
  { title: "Responsive Card Layout", module: "HTML/CSS", category: "html-css", description: "Practicing CSS Grid and Flexbox to build a responsive card layout with breakpoints.", codeUrl: "https://github.com/your-username/exercises/html-css/card-layout", downloadUrl: "#" },
  { title: "Form Validation Basics", module: "HTML/CSS", category: "html-css", description: "Custom form styling with native HTML5 validation states and accessible error messages.", codeUrl: "https://github.com/your-username/exercises/html-css/form-validation", downloadUrl: "#" },
  { title: "DOM Manipulation Drills", module: "JavaScript", category: "javascript", description: "A set of exercises covering querySelector, event delegation and dynamic element creation.", codeUrl: "https://github.com/your-username/exercises/js/dom-drills", downloadUrl: "#" },
  { title: "Array Methods Practice", module: "JavaScript", category: "javascript", description: "Solving small problems using map, filter, reduce and sort to reinforce array fundamentals.", codeUrl: "https://github.com/your-username/exercises/js/array-methods", downloadUrl: "#" },
  { title: "Login System with Sessions", module: "PHP", category: "php", description: "A basic login/logout flow using PHP sessions and server-side form validation.", codeUrl: "https://github.com/your-username/exercises/php/login-sessions", downloadUrl: "#" },
  { title: "CRUD with PDO", module: "PHP", category: "php", description: "Create, read, update and delete records from a MySQL table using PHP's PDO extension.", codeUrl: "https://github.com/your-username/exercises/php/crud-pdo", downloadUrl: "#" },
  { title: "Joins & Subqueries Lab", module: "SQL", category: "sql", description: "A set of queries practicing INNER/LEFT joins, subqueries and aggregate functions.", codeUrl: "https://github.com/your-username/exercises/sql/joins-subqueries", downloadUrl: "#" },
  { title: "Database Normalization Exercise", module: "SQL", category: "sql", description: "Redesigning an unnormalized schema into 1NF, 2NF and 3NF with an ER diagram.", codeUrl: "https://github.com/your-username/exercises/sql/normalization", downloadUrl: "#" },
  { title: "File Handling Scripts", module: "Python", category: "python", description: "Small scripts for reading, writing and parsing text/CSV files using Python's standard library.", codeUrl: "https://github.com/your-username/exercises/python/file-handling", downloadUrl: "#" },
  { title: "Basic Algorithms Set", module: "Python", category: "python", description: "Implementations of sorting and searching algorithms with complexity notes.", codeUrl: "https://github.com/your-username/exercises/python/algorithms", downloadUrl: "#" },
  { title: "Use Case Diagram — Library System", module: "UML", category: "uml", description: "A use case diagram modeling actors and interactions for a library management system.", codeUrl: "https://github.com/your-username/exercises/uml/library-use-case", downloadUrl: "#" },
  { title: "Class Diagram — E-Commerce", module: "UML", category: "uml", description: "A class diagram covering entities, attributes and relationships for an online store.", codeUrl: "https://github.com/your-username/exercises/uml/ecommerce-class-diagram", downloadUrl: "#" },
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
      <div class="presentation-preview" aria-hidden="true">📊</div>
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
  const counters = $$(".hero-stat-num");
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
});
