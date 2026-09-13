<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AbdellaH's Portfolio</title>
<meta name="description" content="Portfolio of Abdellah Zemran, Digital Development student at ISTA NTIC Tanger — academic projects, exercises, presentations and skills.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="grain" aria-hidden="true"></div>

<!-- ============ NAVBAR ============ -->
<header class="navbar" id="navbar">
  <nav class="nav-container">
    <a href="#home" class="nav-logo">
      <span class="nav-logo-bracket">&lt;</span>AZ<span class="nav-logo-bracket">/&gt;</span>
    </a>

    <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

    <ul class="nav-links" id="navLinks">
      <li><a href="#home" class="nav-link active" data-section="home">Home</a></li>
      <li><a href="#about" class="nav-link" data-section="about">About</a></li>
      <li><a href="#projects" class="nav-link" data-section="projects">Projects</a></li>
      <li><a href="#exercises" class="nav-link" data-section="exercises">Exercises</a></li>
      <li><a href="#presentations" class="nav-link" data-section="presentations">Presentations</a></li>
      <li><a href="#skills" class="nav-link" data-section="skills">Skills</a></li>
      <li><a href="#contact" class="nav-link" data-section="contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>

  <!-- ============ HERO ============ -->
  <section class="hero" id="home">
    <div class="hero-container">
      <div class="hero-text" data-reveal>
        <p class="hero-kicker">Digital Development — ISTA NTIC Tanger</p>
        <h1 class="hero-title">AbdellaH ZammRane</h1>
        <p class="hero-role">Digital Development Student &amp; Future Web Developer</p>
        <p class="hero-desc">
          I'm building my skills in web development one module at a time — turning classroom
          exercises, lab work and personal projects into a growing body of practical, working code.
          This portfolio brings that work together in one place, for my instructors and for anyone
          curious about what I'm building.
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">View My Work</a>
          <a href="#contact" class="btn btn-ghost">Contact Me</a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-num" data-count="12">0</span>
            <span class="hero-stat-label">Projects</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-num" data-count="20">0</span>
            <span class="hero-stat-label">Exercises</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-num" data-count="7">0</span>
            <span class="hero-stat-label">Technologies</span>
          </div>
        </div>
      </div>

      <div class="hero-visual" data-reveal>
        <div class="terminal-window">
          <div class="terminal-bar">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
            <span class="terminal-title">student@ista-ntic: ~/portfolio</span>
          </div>
          <div class="terminal-body">
            <p class="term-line"><span class="term-prompt">$</span> whoami</p>
            <p class="term-out">abdellah_zemran</p>
            <p class="term-line"><span class="term-prompt">$</span> cat profile.json</p>
<pre class="term-code"><span class="tk-punc">{</span>
  <span class="tk-key">"role"</span><span class="tk-punc">:</span> <span class="tk-str">"Digital Development Student"</span><span class="tk-punc">,</span>
  <span class="tk-key">"school"</span><span class="tk-punc">:</span> <span class="tk-str">"ISTA NTIC Tanger"</span><span class="tk-punc">,</span>
  <span class="tk-key">"stack"</span><span class="tk-punc">:</span> <span class="tk-punc">[</span><span class="tk-str">"HTML"</span><span class="tk-punc">,</span> <span class="tk-str">"CSS"</span><span class="tk-punc">,</span> <span class="tk-str">"JS"</span><span class="tk-punc">,</span> <span class="tk-str">"PHP"</span><span class="tk-punc">,</span> <span class="tk-str">"MySQL"</span><span class="tk-punc">]</span><span class="tk-punc">,</span>
  <span class="tk-key">"status"</span><span class="tk-punc">:</span> <span class="tk-str">"learning &amp; building"</span>
<span class="tk-punc">}</span></pre>
            <p class="term-line"><span class="term-prompt">$</span> <span class="term-cursor" aria-hidden="true">_</span></p>
          </div>
        </div>
        <div class="deco-ring deco-ring-1" aria-hidden="true"></div>
        <div class="deco-ring deco-ring-2" aria-hidden="true"></div>
      </div>
    </div>
    <a href="#about" class="scroll-cue" aria-label="Scroll to About section">
      <span></span>
    </a>
  </section>

  <!-- ============ ABOUT ============ -->
  <section class="section" id="about">
    <div class="section-container">
      <div class="section-head" data-reveal>
        <h2 class="section-title">About Me</h2>
        <p class="section-sub">A bit of context on who I am and where I'm headed.</p>
      </div>

      <div class="about-grid">
        <div class="about-text" data-reveal>
          <p>
            I'm <strong>Abdellah Zemran</strong>, a Digital Development student at
            <strong>ISTA NTIC Tanger</strong>, in Tangier, Morocco. My training covers the full
            web stack — from front-end structure and styling to server-side logic and databases —
            and I use every assignment as a chance to write cleaner, more deliberate code than the
            last one.
          </p>
          <p>
            Outside of class, I spend time experimenting with small personal projects to reinforce
            what I'm learning. My goal is straightforward: keep improving as a developer, build a
            portfolio of real, working projects, and be ready for a junior web development role
            once I graduate.
          </p>
        </div>

        <div class="about-cards" data-reveal>
          <div class="info-card">
            <div class="info-card-icon" aria-hidden="true">🎓</div>
            <h3>Education</h3>
            <p>Digital Development — ISTA NTIC Tanger</p>
          </div>
          <div class="info-card">
            <div class="info-card-icon" aria-hidden="true">💻</div>
            <h3>Focus</h3>
            <p>Web Development &amp; Programming</p>
          </div>
          <div class="info-card">
            <div class="info-card-icon" aria-hidden="true">📍</div>
            <h3>Location</h3>
            <p>Tangier, Morocco</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ PROJECTS ============ -->
  <section class="section" id="projects">
    <div class="section-container">
      <div class="section-head" data-reveal>
        <h2 class="section-title">Academic Projects</h2>
        <p class="section-sub">Larger builds from coursework and self-directed practice.</p>
      </div>

      <div class="project-grid" id="projectGrid" data-reveal>
        <!-- injected by script.js from projectsData -->
      </div>
    </div>
  </section>

  <!-- ============ EXERCISES & LABS ============ -->
  <section class="section" id="exercises">
    <div class="section-container">
      <div class="section-head" data-reveal>
        <h2 class="section-title">Exercises &amp; Labs</h2>
        <p class="section-sub">Smaller, focused work organized by module.</p>
      </div>

      <div class="filter-bar" id="exerciseFilters" data-reveal>
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="html-css">HTML/CSS</button>
        <button class="filter-btn" data-filter="javascript">JavaScript</button>
        <button class="filter-btn" data-filter="php">PHP</button>
        <button class="filter-btn" data-filter="sql">SQL</button>
        <button class="filter-btn" data-filter="python">Python</button>
        <button class="filter-btn" data-filter="uml">UML</button>
      </div>

      <div class="exercise-grid" id="exerciseGrid" data-reveal>
        <!-- injected by script.js from exercisesData -->
      </div>
    </div>
  </section>

  <!-- ============ PRESENTATIONS ============ -->
  <section class="section" id="presentations">
    <div class="section-container">
      <div class="section-head" data-reveal>
        <h2 class="section-title">Presentations</h2>
        <p class="section-sub">Slide decks prepared for class presentations.</p>
      </div>

      <div class="presentation-grid" id="presentationGrid" data-reveal>
        <!-- injected by script.js from presentationsData -->
      </div>
    </div>
  </section>

  <!-- ============ SKILLS ============ -->
  <section class="section" id="skills">
    <div class="section-container">
      <div class="section-head" data-reveal>
        <h2 class="section-title">Skills</h2>
        <p class="section-sub">Technologies I use and am actively developing.</p>
      </div>

      <div class="skills-grid" data-reveal>
        <div class="skill-category">
          <h3 class="skill-cat-title">Front-End</h3>
          <div class="skill-badges">
            <span class="skill-badge">HTML5</span>
            <span class="skill-badge">CSS3</span>
            <span class="skill-badge">JavaScript</span>
            <span class="skill-badge">Bootstrap</span>
          </div>
        </div>
        <div class="skill-category">
          <h3 class="skill-cat-title">Back-End</h3>
          <div class="skill-badges">
            <span class="skill-badge">PHP</span>
            <span class="skill-badge">MySQL</span>
          </div>
        </div>
        <div class="skill-category">
          <h3 class="skill-cat-title">Programming</h3>
          <div class="skill-badges">
            <span class="skill-badge">Python</span>
          </div>
        </div>
        <div class="skill-category">
          <h3 class="skill-cat-title">Tools</h3>
          <div class="skill-badges">
            <span class="skill-badge">Git / GitHub</span>
            <span class="skill-badge">VS Code</span>
            <span class="skill-badge">UML</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CONTACT ============ -->
  <section class="section" id="contact">
    <div class="section-container">
      <div class="section-head" data-reveal>
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-sub">Questions about my work, or an opportunity to collaborate? Reach out.</p>
      </div>

      <div class="contact-grid">
        <div class="contact-info" data-reveal>
          <a class="contact-link" href="mailto:abdellah.zemran@example.com">
            <span class="contact-icon" aria-hidden="true">✉</span>
            <span>
              <span class="contact-label">Email</span>
              <span class="contact-value">abdellah.zemran@example.com</span>
            </span>
          </a>
          <a class="contact-link" href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <span class="contact-icon" aria-hidden="true">⌥</span>
            <span>
              <span class="contact-label">GitHub</span>
              <span class="contact-value">github.com/your-username</span>
            </span>
          </a>
          <a class="contact-link" href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <span class="contact-icon" aria-hidden="true">in</span>
            <span>
              <span class="contact-label">LinkedIn</span>
              <span class="contact-value">linkedin.com/in/your-profile</span>
            </span>
          </a>
        </div>

        <form class="contact-form" id="contactForm" data-reveal novalidate>
          <div class="form-row">
            <label for="cf-name">Name</label>
            <input type="text" id="cf-name" name="name" required autocomplete="name">
          </div>
          <div class="form-row">
            <label for="cf-email">Email</label>
            <input type="email" id="cf-email" name="email" required autocomplete="email">
          </div>
          <div class="form-row">
            <label for="cf-message">Message</label>
            <textarea id="cf-message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary form-submit">
            <span class="btn-label">Send Message</span>
          </button>
          <p class="form-note">This form has no backend yet — messages aren't actually sent.</p>
        </form>
      </div>
    </div>
  </section>

</main>

<!-- ============ FOOTER ============ -->
<footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <p class="footer-name">Abdellah Zemran</p>
      <p class="footer-sub">Digital Development Student · Tangier, Morocco</p>
    </div>
    <div class="footer-socials">
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
      <a href="mailto:abdellah.zemran@example.com" aria-label="Email">Email</a>
    </div>
    <p class="footer-copy">&copy; <span id="year"></span> Abdellah Zemran. Built line by line.</p>
  </div>
</footer>

<button class="back-to-top" id="backToTop" aria-label="Back to top">↑</button>

<!-- ============ MODAL (shared: code / presentation preview) ============ -->
<div class="modal-overlay" id="modalOverlay" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <button class="modal-close" id="modalClose" aria-label="Close preview">&times;</button>
    <div class="modal-content" id="modalContent">
      <h3 id="modalTitle"></h3>
      <div id="modalBody"></div>
    </div>
  </div>
</div>

<div class="toast" id="toast" role="status" aria-live="polite"></div>

<script src="script.js"></script>
</body>
</html>
