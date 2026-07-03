// ============================================
// chon.dev Portfolio — Jimson Ilog
// Pure JavaScript — no frameworks
// ============================================

(function() {
  'use strict';

  // ============================================
  // TYPEWRITER EFFECT
  // ============================================
  const taglines = ['Student Web Developer', 'Front-End Dev', 'Creative Coder', 'ICT Student', 'Consistent With Honors', 'Willing to Adapt & Learn'];
  let taglineIndex = 0;
  let displayed = '';
  let isDeleting = false;
  const typewriterEl = document.getElementById('typewriter');

  function typeWriter() {
    const current = taglines[taglineIndex];
    if (!isDeleting && displayed === current) {
      setTimeout(() => { isDeleting = true; typeWriter(); }, 1800);
      return;
    }
    if (isDeleting && displayed === '') {
      isDeleting = false;
      taglineIndex = (taglineIndex + 1) % taglines.length;
      typeWriter();
      return;
    }
    const speed = isDeleting ? 60 : 100;
    displayed = isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1);
    if (typewriterEl) typewriterEl.textContent = displayed;
    setTimeout(typeWriter, speed);
  }

  // ============================================
  // NAVBAR SCROLL
  // ============================================
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['about', 'skills', 'projects', 'experience', 'certificates', 'contact'];

  function handleNavScroll() {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
    // Active section
    let current = '';
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        current = id;
        break;
      }
    }
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  // ============================================
  // MOBILE MENU
  // ============================================
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const icon = navToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      });
    });
  }

  // ============================================
  // SCROLL REVEAL
  // ============================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    revealObserver.observe(el);
  });

  // ============================================
  // SKILL BARS ANIMATION
  // ============================================
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  // ============================================
  // DATA RENDERERS
  // ============================================

  // Skills
  const skillsData = [
    { name: 'HTML', percent: 90, icon: 'fa-brands fa-html5', color: '#f97316' },
    { name: 'CSS', percent: 70, icon: 'fa-brands fa-css3-alt', color: '#60a5fa' },
    { name: 'JavaScript', percent: 55, icon: 'fa-brands fa-js', color: '#facc15' },
    { name: 'Front-End Development', percent: 70, icon: 'fa-brands fa-react', color: '#22d3ee' },
    { name: 'Responsive Web Design', percent: 70, icon: 'fa-solid fa-wind', color: '#2dd4bf' },
    { name: 'Basic Back-End', percent: 40, icon: 'fa-brands fa-node', color: '#4ade80' },
    { name: 'Microsoft Word', percent: 100, icon: 'fa-solid fa-file-word', color: '#3b82f6' },
    { name: 'Microsoft PowerPoint', percent: 100, icon: 'fa-solid fa-file-powerpoint', color: '#ea580c' },
  ];

  const skillList = document.getElementById('skillList');
  if (skillList) {
    skillList.innerHTML = skillsData.map((s, i) => `
      <div class="skill-item">
        <div class="skill-header">
          <span class="skill-name">
            <i class="${s.icon}" style="color:${s.color}"></i>
            ${s.name}
          </span>
          <span class="skill-percent">${s.percent}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-fill" style="--percent:${s.percent}%" data-delay="${i * 100}"></div>
        </div>

      </div>
    `).join('');
    document.querySelectorAll('.skill-fill').forEach(bar => {
      skillObserver.observe(bar);
    });
  }

  // Strengths
  const strengthsData = [
    'Fast Learner', 'Student Developer', 'Responsible & Reliable',
    'Ai-Assisted Workflow', 'Adaptable & Motivated', 'Willing to Learn'
  ];
  const strengthsGrid = document.getElementById('strengthsGrid');
  if (strengthsGrid) {
    strengthsGrid.innerHTML = strengthsData.map(s =>
      `<div class="strength-card reveal">${s}</div>`
    ).join('');
  }

  // Projects
  const projectsData = [
    {
      title: 'Personal Web Portfolio',
      desc: 'Designed and built a responsive personal portfolio site with ai-assisted workflow to showcase my skills and projects. Focused on clean layout, smooth animations, and mobile-friendly design — all crafted with pure HTML, CSS, and JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      icons: ['fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-js'],
      iconColors: ['#f97316', '#60a5fa', '#facc15'],
      featured: true,
    },
    {
      title: 'Responsive Landing Page',
      desc: 'Created a modern, fully responsive landing page with ai-assisted workflow and smooth scroll sections, interactive navigation, and engaging visual elements. Practiced implementing what I learned from online courses.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      icons: ['fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-js'],
      iconColors: ['#f97316', '#60a5fa', '#facc15'],
      featured: false,
    },
  ];

  const projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid) {
    projectsGrid.innerHTML = projectsData.map((p, i) => `
      <div class="project-card reveal">
        ${p.featured ? '<div class="project-featured">Featured</div>' : ''}
        <div class="project-header">
          <div class="project-icon"><i class="fa-solid fa-code"></i></div>
          <div class="project-tech-icons">
            ${p.icons.map((icon, j) => `<i class="${icon}" style="color:${p.iconColors[j]}"></i>`).join('')}
          </div>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-footer">
          <div class="project-tags">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="#"><i class="fa-brands fa-github"></i></a>
            <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Stats
  const statsData = [
    { icon: 'fa-solid fa-trophy', value: '4', label: 'Years with Honors', sub: 'Grade 7 to Grade 10', color: 'yellow', iconColor: '#facc15' },
    { icon: 'fa-solid fa-star', value: '94.30', label: 'Top Average', sub: 'Highest general average', color: 'red', iconColor: '#dc2626' },
    { icon: 'fa-solid fa-code', value: '13+', label: 'Projects Built', sub: 'HTML, CSS & JavaScript', color: 'blue', iconColor: '#60a5fa' },
    { icon: 'fa-solid fa-graduation-cap', value: 'SHS', label: 'Tech-Pro CSSNCII', sub: 'Cavite Community Academy', color: 'green', iconColor: '#4ade80' },
  ];

  const statsGrid = document.getElementById('statsGrid');
  if (statsGrid) {
    statsGrid.innerHTML = statsData.map(s => `
      <div class="stat-card ${s.color} reveal">
        <div class="stat-icon" style="color:${s.iconColor}">
          <i class="${s.icon}"></i>
        </div>
        <div class="stat-value" style="color:${s.iconColor}">${s.value}</div>
        <div class="stat-label">${s.label}</div>
        <div class="stat-sub">${s.sub}</div>
      </div>
    `).join('');
  }

  // Certificates
  const certificatesData = [
    {
      image: 'images/cert1.jpg',
      issuer: 'Cisco & DICT MIMAROPA',
      issuerClass: 'cisco',
      issuerIcon: 'fa-solid fa-network-wired',
      title: 'HTML Essentials with Cisco Skills for All Platform',
      date: 'May 2026',
      badge: 'Cisco',
    },
    {
      image: 'images/cert2.png',
      issuer: 'Springer Capital',
      issuerClass: 'springer',
      issuerIcon: 'fa-solid fa-building',
      title: 'Web Development Internship Program',
      date: 'May 2026',
      badge: 'Internship',
    },
    {
      image: 'images/cert3.png',
      issuer: 'CodeSignal',
      issuerClass: 'codesignal',
      issuerIcon: 'fa-solid fa-signal',
      title: 'Introduction to HTML',
      date: 'May 26, 2026',
      badge: 'Course',
    },
  ];

  const certificatesGrid = document.getElementById('certificatesGrid');
  if (certificatesGrid) {
    certificatesGrid.innerHTML = certificatesData.map((c, i) => `
      <div class="cert-card reveal" data-cert="${i}">
        <div class="cert-image-wrapper">
          <img src="${c.image}" alt="${c.title}" loading="lazy" />
          <div class="cert-image-overlay">
            <span class="cert-view-btn"><i class="fa-solid fa-expand"></i> Click to View</span>
          </div>
        </div>
        <div class="cert-content">
          <div class="cert-issuer">
            <div class="cert-issuer-icon ${c.issuerClass}">
              <i class="${c.issuerIcon}"></i>
            </div>
            <span class="cert-issuer-name">${c.issuer}</span>
          </div>
          <h3 class="cert-title">${c.title}</h3>
          <span class="cert-date"><i class="fa-regular fa-calendar"></i> ${c.date}</span>
        </div>
        <div class="cert-badge">${c.badge}</div>
      </div>
    `).join('');
  }

  // Lightbox for certificates
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close"><i class="fa-solid fa-xmark"></i></button>
    <img class="lightbox-img" src="" alt="Certificate" />
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = card.dataset.cert;
      lightboxImg.src = certificatesData[idx].image;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Credits
  const creditsData = [
    { icon: 'fa-solid fa-bolt', name: 'Replit', desc: 'Online IDE & deployment', color: '#F26207', bg: 'rgba(242, 98, 7, 0.12)' },
    { icon: 'fa-solid fa-code', name: 'VS Code', desc: 'Code editor by Microsoft', color: '#007ACC', bg: 'rgba(0, 122, 204, 0.12)' },
    { icon: 'fa-solid fa-cube', name: 'CodeSandbox', desc: 'Cloud dev environments', color: '#DCDDDE', bg: 'rgba(220, 221, 222, 0.12)' },
    { icon: 'fa-brands fa-youtube', name: 'Bro Code', desc: 'Programming tutorials', color: '#FF0000', bg: 'rgba(255, 0, 0, 0.12)' },
    { icon: 'fa-brands fa-github', name: 'GitHub', desc: 'Version control & open source', color: '#fff', bg: 'rgba(255, 255, 255, 0.08)' },
    { icon: 'fa-brands fa-firefox', name: 'MDN Web Docs', desc: 'Web documentation', color: '#FF7139', bg: 'rgba(255, 113, 57, 0.12)' },
    { icon: 'fa-solid fa-fire', name: 'freeCodeCamp', desc: 'Free coding courses', color: '#0A0A23', bg: 'rgba(10, 10, 35, 0.3)' },
    { icon: 'fa-solid fa-graduation-cap', name: 'Udemy', desc: 'Online learning platform', color: '#A435F0', bg: 'rgba(164, 53, 240, 0.12)' },
  ];

  const creditsGrid = document.getElementById('creditsGrid');
  if (creditsGrid) {
    creditsGrid.innerHTML = creditsData.map(c => `
      <a href="#" class="credit-card reveal" onclick="return false;">
        <div class="credit-icon" style="background:${c.bg}; color:${c.color}">
          <i class="${c.icon}"></i>
        </div>
        <p class="credit-name">${c.name}</p>
        <p class="credit-desc">${c.desc}</p>
        <span class="credit-arrow">↗</span>
      </a>
    `).join('');
  }

  // ============================================
  // CONTACT FORM
  // ============================================
  const contactForm = document.getElementById('contactForm');
  const btnSubmit = document.getElementById('btnSubmit');
  const btnText = document.getElementById('btnText');
  const formToast = document.getElementById('formToast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      btnSubmit.disabled = true;
      btnText.textContent = 'Sending...';

      setTimeout(() => {
        btnSubmit.disabled = false;
        btnText.textContent = 'Send Message';
        contactForm.reset();
        formToast.classList.add('show');
        setTimeout(() => formToast.classList.remove('show'), 3000);
      }, 1000);
    });
  }

  // ============================================
  // INIT
  // ============================================
  document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    handleNavScroll();
    window.addEventListener('scroll', handleNavScroll);
  });

})();
