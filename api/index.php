<?php
// Vercel PHP Static Asset Router
$request = $_SERVER['REQUEST_URI'];
$filePath = __DIR__ . parse_url($request, PHP_URL_PATH);

if (file_exists($filePath) && !is_dir($filePath) && $request !== '/') {
    $ext = pathinfo($filePath, PATHINFO_EXTENSION);
    $mimes = [
        'css' => 'text/css',
        'js'  => 'text/javascript',
        'png' => 'image/png',
        'jpg' => 'image/jpeg',
        'ico' => 'image/x-icon',
        'svg' => 'image/svg+xml'
    ];
    if (isset($mimes[$ext])) {
        header("Content-Type: " . $mimes[$ext]);
        readfile($filePath);
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AbdellaH's Portfolio</title>
<meta name="description" content="Portfolio of Abdellah Zemran, Digital Development student at ISTA NTIC Tanger — academic projects, exercises, presentations and skills.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Cabin:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<link rel="icon" type="image/png" href="/images/Favicon.png">
</head>
<body>

<div class="grain" aria-hidden="true"></div>

<div class="aurora-bg" aria-hidden="true">
  <span class="aurora-blob b1"></span>
  <span class="aurora-blob b2"></span>
  <span class="aurora-blob b3"></span>
  <span class="aurora-blob b4"></span>
</div>

<!-- ============ NAVBAR ============ -->
<header class="navbar" id="navbar">
  <nav class="nav-container">
    <a href="#" class="nav-logo">
      <span class="nav-logo-bracket">&lt;</span>AZ<span class="nav-logo-bracket">/&gt;</span>
    </a>

    <div class="nav-right">
      <ul class="nav-links" id="navLinks">
        <li><a href="#home" class="nav-link active" data-section="home">Home</a></li>
        <li><a href="#about" class="nav-link" data-section="about">About</a></li>
        <li><a href="#projects" class="nav-link" data-section="projects">Projects</a></li>
        <li><a href="#exercises" class="nav-link" data-section="exercises">Exercises</a></li>
        <li><a href="#presentations" class="nav-link" data-section="presentations">Presentations</a></li>
        <li><a href="#skills" class="nav-link" data-section="skills">Skills</a></li>
        <li><a href="#contact" class="nav-link" data-section="contact">Contact</a></li>
      </ul>

      <div class="nav-actions">
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle light and dark theme">
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>
        </button>

        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
</header>

<main>

  <!-- ============ HERO ============ -->
  <section class="hero" id="home">
    <div class="bubble-field" id="bubbleField" aria-hidden="true"></div>
    <div class="hero-container">
      <div class="hero-text" data-reveal>
        <p class="hero-kicker">Digital Development — ISTA NTIC Tanger</p>
        <h1 class="hero-title">AbdellaH <span class="family_name">ZammRane</span></h1>
        <p class="hero-role"><span id="typewriter"></span><span class="typewriter-cursor">&nbsp;</span></p>
        <p class="hero-desc">
          Where I spend 20% of my time writing code and 80% wondering why the code doesn't work.
          I tell computers what to do for a living.
          They don't always listen.
          So I debug.
          They break again.
          I debug again.
          And somehow, we call that a career.
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
            <span class="terminal-title">2007082100112@ofppt-edu.ma: ~/portfolio</span>
          </div>
          <div class="terminal-body">
            <p class="term-line"><span class="term-prompt">$</span> whoami</p>
            <p class="term-out">abdellah_zammrane</p>
            <p class="term-line"><span class="term-prompt">$</span> cat profile.json</p>
<pre class="term-code"><span class="tk-punc">{</span>
    <span class="tk-key">"role"</span><span class="tk-punc">:</span> <span class="tk-str">"Digital Development Stagiare"</span><span class="tk-punc">,</span>
    <span class="tk-key">"school"</span><span class="tk-punc">:</span> <span class="tk-str">"ISTA NTIC Tanger"</span><span class="tk-punc">,</span>
    <span class="tk-key">"birth date"</span><span class="tk-punc">:</span> <span class="tk-str">"2007-08-21"</span><span class="tk-punc">,</span>
    <span class="tk-key">"location"</span><span class="tk-punc">:</span> <span class="tk-str">"Morocco,Tanger,ibn Khaldoun"</span><span class="tk-punc">,</span>
    <span class="tk-key">"class"</span><span class="tk-punc">:</span> <span class="tk-str">"DEVWFS-202"</span><span class="tk-punc">,</span>
    <span class="tk-key">"training year"</span><span class="tk-punc">:</span> <span class="tk-str">"2026-2027"</span><span class="tk-punc">,</span>
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
        <div class="about-text" data-reveal><p>
              I'm <strong>ABDELLAH ZEMRAN</strong>, a Digital Development student at
              <strong>ISTA NTIC Tanger</strong>, based in Tangier, Morocco. I'm learning
              web development from front to back — building interfaces, writing logic,
              working with databases, and figuring out why something suddenly stopped working.
          </p>
          <p>
              I like learning by actually building things, whether it's a school project,
              a small experiment, or something completely unnecessary but fun to make.
              I'm still learning, still making mistakes, and still improving with every project.
              My goal is simple: <strong>keep building, keep learning, and become a developer
              capable of creating things that actually work.</strong>
          </p>
          <div class="about-taglist">
            <span class="about-tag"><i data-lucide="graduation-cap"></i>Digital Development</span>
            <span class="about-tag"><i data-lucide="puzzle"></i>Problem Solver</span>
            <span class="about-tag"><i data-lucide="bug"></i>Professional Debugger</span>
            <span class="about-tag"><i data-lucide="map-pin"></i>Tangier, Morocco</span>
          </div>
        </div>

        <div class="about-cards" data-reveal>
          <span class="about-orbit-icon">JS</span>
          <span class="about-orbit-icon">PHP</span>
          <span class="about-orbit-icon">SQL</span>
          <span class="about-orbit-icon">CSS</span>

          <div class="tilt-card" id="tiltCard">
            <div class="tilt-card-inner">
              <div class="tilt-card-avatar">AZ</div>
              <h3>Abdellah Zemran</h3>
              <p class="tilt-role">Digital Development Student</p>

              <div class="tilt-stats">
                <div class="tilt-stat"><strong data-count="12">0</strong><span>Projects</span></div>
                <div class="tilt-stat"><strong data-count="20">0</strong><span>Exercises</span></div>
                <div class="tilt-stat"><strong data-count="7">0</strong><span>Tech</span></div>
              </div>

              <div class="tilt-info-row">
                <i data-lucide="graduation-cap"></i>
                <span>ISTA NTIC Tanger</span>
              </div>
              <div class="tilt-info-row">
                <i data-lucide="code-2"></i>
                <span>Web Development &amp; Programming</span>
              </div>
              <div class="tilt-info-row">
                <i data-lucide="map-pin"></i>
                <span>Morocco, Tangier, Ibn Khaldoun</span>
              </div>
            </div>
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
        <button class="filter-btn" data-filter="figma">Figma</button>
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
      <div class="section-head skills-head-row" data-reveal>
        <div>
          <h2 class="section-title">Skills</h2>
          <p class="section-sub">Technologies I use and am actively developing.</p>
        </div>
        <a href="public/cv/Abdellah_Zemran_CV.pdf" class="btn btn-cv" download>
          <i data-lucide="download"></i>
          <span>Download CV</span>
        </a>
      </div>

      <div class="skills-grid" data-reveal id="skillsGrid">
        <div class="skill-category" data-skill-category>
          <div class="skill-cat-head">
            <i data-lucide="layout-panel-left"></i>
            <h3 class="skill-cat-title">Front-End</h3>
          </div>
          <div class="skill-item" style="--level:88%">
            <div class="skill-item-head"><span>HTML5</span><span>88%</span></div>
            <div class="skill-bar-track"><div class="skill-bar-fill"></div></div>
          </div>
          <div class="skill-item" style="--level:82%">
            <div class="skill-item-head"><span>CSS3</span><span>82%</span></div>
            <div class="skill-bar-track"><div class="skill-bar-fill"></div></div>
          </div>
          <div class="skill-item" style="--level:75%">
            <div class="skill-item-head"><span>JavaScript</span><span>75%</span></div>
            <div class="skill-bar-track"><div class="skill-bar-fill"></div></div>
          </div>
          <div class="skill-item" style="--level:65%">
            <div class="skill-item-head"><span>Bootstrap</span><span>65%</span></div>
            <div class="skill-bar-track"><div class="skill-bar-fill"></div></div>
          </div>
        </div>

        <div class="skill-category" data-skill-category>
          <div class="skill-cat-head">
            <i data-lucide="server"></i>
            <h3 class="skill-cat-title">Back-End</h3>
          </div>
          <div class="skill-item" style="--level:70%">
            <div class="skill-item-head"><span>PHP</span><span>70%</span></div>
            <div class="skill-bar-track"><div class="skill-bar-fill"></div></div>
          </div>
          <div class="skill-item" style="--level:68%">
            <div class="skill-item-head"><span>MySQL</span><span>68%</span></div>
            <div class="skill-bar-track"><div class="skill-bar-fill"></div></div>
          </div>
        </div>

        <div class="skill-category" data-skill-category>
          <div class="skill-cat-head">
            <i data-lucide="terminal"></i>
            <h3 class="skill-cat-title">Programming</h3>
          </div>
          <div class="skill-item" style="--level:60%">
            <div class="skill-item-head"><span>Python</span><span>60%</span></div>
            <div class="skill-bar-track"><div class="skill-bar-fill"></div></div>
          </div>
        </div>

        <div class="skill-category" data-skill-category>
          <div class="skill-cat-head">
            <i data-lucide="wrench"></i>
            <h3 class="skill-cat-title">Tools</h3>
          </div>
          <div class="skill-badges">
            <span class="skill-badge">Git / GitHub</span>
            <span class="skill-badge">VS Code</span>
            <span class="skill-badge">Pycharm</span>
            <span class="skill-badge">UML</span>
            <span class="skill-badge">Figma</span>
            <span class="skill-badge">Claude / IA</span>
            <span class="skill-badge">CapCut</span>
            <span class="skill-badge">Canva</span>
            <span class="skill-badge">...</span>
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
          <a class="contact-link" href="mailto:zamrannabbdlah@gmail.com" aria-label="Email" rel="noopener noreferrer">
            <span class="contact-icon" aria-hidden="true">
              <i data-lucide="mail"></i>
            </span>
            <span>
              <span class="contact-label">Email</span>
              <span class="contact-value">zamrannabbdlah@gmail.com</span>
            </span>
          </a>
          <a class="contact-link" href="tel:+212684829800" aria-label="Phone" rel="noopener noreferrer">
            <span class="contact-icon" aria-hidden="true">
              <i data-lucide="phone"></i>
            </span>
            <span>
              <span class="contact-label">Phone</span>
              <span class="contact-value">+212-684829800</span>
            </span>
          </a>
          <a class="contact-link" href="https://www.instagram.com/abdellah_zamrane/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <span class="contact-icon" aria-hidden="true">
              <svg role="img" viewBox="0 0 24 24" aria-label="Instagram" width="30" height="30" xmlns="http://www.w3.org/2000/svg" style="fill: var(--cyan);">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
              </svg>
            </span>
            <span>
              <span class="contact-label">Instagram</span>
              <span class="contact-value">abdellah_zamrane</span>
            </span>
          </a>
          <a class="contact-link" href="https://github.com/abdellahzammrane" target="_blank" rel="noopener noreferrer">
            <span class="contact-icon" aria-hidden="true">
              <svg role="img" viewBox="0 0 24 24" aria-label="GitHub" width="29" height="29" xmlns="http://www.w3.org/2000/svg" style="fill: var(--cyan);">
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
              </svg>
            </span>
            <span>
              <span class="contact-label">GitHub</span>
              <span class="contact-value">abdellahzammrane</span>
            </span>
          </a>
          <a class="contact-link" href="https://www.linkedin.com/in/abdellah-zammrane-23b0373a4/" target="_blank" rel="noopener noreferrer">
            <svg role="img" viewBox="0 0 24 24" aria-label="LinkedIn" width="30" height="30" xmlns="http://www.w3.org/2000/svg" style="color: var(--cyan);">
              <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" stroke-width="1.8"/>
              <path fill="currentColor" d="M8.2 9.4H5.8V18h2.4V9.4ZM7 5.3a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM18.2 13.1c0-2.6-1.4-3.8-3.3-3.8-1.5 0-2.2.8-2.6 1.3V9.4H9.9V18h2.4v-4.3c0-1.1.2-2.2 1.6-2.2 1.4 0 1.4 1.3 1.4 2.2V18h2.4l.5-4.9Z"/>
            </svg>
            </span>
            <span>
              <span class="contact-label">LinkedIn</span>
              <span class="contact-value">AbdellaH ZammRane</span>
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
            <textarea id="cf-message" name="message" rows="3" required></textarea>
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
      <p class="footer-name">AbdellaH ZammRane</p>
      <p class="footer-sub">Digital Development Stagiaire · Tangier, Morocco</p>
    </div>
    <div class="footer-socials">
      <a href="https://github.com/abdellahzammrane" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
      <a href="https://www.linkedin.com/in/abdellah-zammrane-23b0373a4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
      <a href="mailto:zamrannabbdlah@gmail.com" aria-label="Email">Email</a>
    </div>
    <p class="footer-copy">&copy; <span id="year"></span> AbdellaH ZammRane. Built Line By Line, Word By Word.</p>
  </div>
</footer>

<button class="back-to-top" id="backToTop" aria-label="Back to top">
  <i data-lucide="arrow-up"></i>
</button>

<!-- ============ MODAL (shared: code / presentation preview) ============ -->
<div class="modal-overlay" id="modalOverlay" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <button class="modal-close" id="modalClose" aria-label="Close preview">
      <i data-lucide="x"></i>
    </button>
    <div class="modal-content" id="modalContent">
      <h3 id="modalTitle"></h3>
      <div id="modalBody"></div>
    </div>
  </div>
</div>

<div class="toast" id="toast" role="status" aria-live="polite"></div>

<script src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/index.min.js"></script>
<script src="https://unpkg.com/lucide@latest"></script>
<script src="script.js"></script>
</body>
</html>

