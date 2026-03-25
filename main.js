import './style.css'

// ====== CORE INITIALIZATION ======
const initializeApp = () => {
  const app = document.querySelector('#app')
  if (!app) return

  // 1. Render Main UI
  renderLayout(app)

  // 2. Initialize Core Features
  initTheme()
  initNavigation()
  initProjectFilters()
  initAdvancedUI()
  initAOS()
  initClock()
  
  // Custom: Make Cert Cards Clickable
  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
      const link = card.querySelector('.cert-link');
      if (link && link.href !== '#' && link.href !== window.location.href + '#') {
        window.open(link.href, '_blank', 'noopener,noreferrer');
      }
    });
    card.style.cursor = 'pointer';
  });
  
  // 3. Initialize Advanced Interactive Features
  initParticles()
  initChatbot()
  initEmailJS()
  
  // 4. Final Polish
  initPageLoader()
}

// ====== RENDER LAYOUT ======
const renderLayout = (container) => {
  container.innerHTML = `
    <header id="header">
      <nav id="navbar" class="container">
        <a href="#" class="logo">Prince<span>.</span></a>
        <div class="nav-links">
          <div class="nav-indicator"></div>
          <a href="#hero" class="active">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="nav-actions">
          <button id="theme-toggle" aria-label="Toggle Theme">
            <i class="fa-solid fa-moon"></i>
          </button>
          <a href="#contact" class="btn btn-primary nav-cta">Let's Talk</a>
          <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero Section -->
      <section id="hero" class="hero-section">
        <div class="container hero-content">
          <div class="hero-text" data-aos="fade-right">
            <div class="status-bar-wrapper">
              <span class="badge">Available for Work</span>
              <div class="live-status">
                <span class="pulse-icon"></span>
                <span id="real-time-clock">00:00:00 PM</span>
              </div>
            </div>
            <h1>Hi, I'm <span>Prince</span></h1>
            <h2><span id="typing"></span></h2>
            <p>I build modern web applications with MERN stack, specializing in AI-driven solutions and clean UI/UX architecture.</p>
            <div class="hero-btns">
              <a href="#projects" class="btn btn-primary">View Projects</a>
              <a href="#contact" class="btn btn-secondary">Contact Me</a>
              <a href="/assets/Prince_Turkar_Resume.pdf" download class="btn btn-outline"><i class="fa-solid fa-download"></i> Resume</a>
            </div>
          </div>
          <div class="hero-visual" data-aos="fade-left">
            <div class="profile-card">
              <div class="profile-glow"></div>
              <div class="profile-decoration"></div>
              <div class="profile-image">
                <img src="/assets/profile.png" alt="Prince Turkar Profile">
              </div>
              <div class="tech-stack-float card-float">
                <div class="tech-icon"><i class="fa-brands fa-java" style="color: #007396"></i></div>
                <div class="tech-icon"><i class="fa-brands fa-react" style="color: #61DAFB"></i></div>
                <div class="tech-icon"><i class="fa-brands fa-node-js" style="color: #339933"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div class="scroll-indicator">
          <div class="mouse"></div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="about-section section-padding">
        <div class="container">
          <div class="section-header center" data-aos="fade-up">
            <span class="sub-title">My Story</span>
            <h2>About Me</h2>
          </div>
          <div class="about-grid">
            <div class="about-info" data-aos="fade-up" data-aos-delay="200">
              <p>I am a Java Full Stack Developer passionate about building scalable and user-friendly applications. With a strong foundation in both frontend and backend technologies, I bridge the gap between complex engineering and seamless user experience.</p>
              <p>I love exploring new technologies, especially in the realm of AI and interactive web design. When I'm not coding, you'll find me researching UI trends or contributing to open-source projects.</p>
              
              <div class="skills-grid">
                <h3>Core Tech Stack</h3>
                <div class="skill-cards">
                  <div class="skill-card tooltip" data-tooltip="C Language"><i class="fa-solid fa-c"></i></div>
                  <div class="skill-card tooltip" data-tooltip="Java Development"><i class="fa-brands fa-java"></i></div>
                  <div class="skill-card tooltip" data-tooltip="Spring Framework"><i class="fa-solid fa-leaf"></i></div>
                  <div class="skill-card tooltip" data-tooltip="Modern Javascript"><i class="fa-brands fa-js"></i></div>
                  <div class="skill-card tooltip" data-tooltip="React Library"><i class="fa-brands fa-react"></i></div>
                  <div class="skill-card tooltip" data-tooltip="Node.js Engine"><i class="fa-brands fa-node-js"></i></div>
                  <div class="skill-card tooltip" data-tooltip="MongoDB Database"><i class="fa-solid fa-database"></i></div>
                  <div class="skill-card tooltip" data-tooltip="Version Control"><i class="fa-brands fa-github"></i></div>
                </div>
              </div>
            </div>
            <div class="about-stats" data-aos="fade-up" data-aos-delay="400">
              <div class="stat-item">
                <h4 class="stat-number">10+</h4>
                <p>Projects Completed</p>
              </div>
              <div class="stat-item">
                <h4 class="stat-number">5+</h4>
                <p>Happy Clients</p>
              </div>
              <div class="stat-item">
                <h4 class="stat-number">24/7</h4>
                <p>Online Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="services-section section-padding">
        <div class="container">
          <div class="section-header center" data-aos="fade-up">
            <span class="sub-title">Expertise</span>
            <h2>Services</h2>
          </div>
          <div class="services-grid">
            <div class="service-card" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="fa-solid fa-laptop-code"></i></div>
              <h3>Web Development</h3>
              <p>Building high-performance, responsive websites with modern frameworks.</p>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="fa-solid fa-server"></i></div>
              <h3>Backend Solutions</h3>
              <p>Scalable server-side logic and database management using Java & Node.</p>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="fa-solid fa-palette"></i></div>
              <h3>UI/UX Design</h3>
              <p>Creating intuitive and visually stunning user interfaces.</p>
            </div>
            <div class="service-card" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="fa-solid fa-robot"></i></div>
              <h3>AI Integration</h3>
              <p>Empowering applications with AI capabilities using LLMs and APIs.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="projects-section section-padding">
        <div class="container">
          <div class="section-header center" data-aos="fade-up">
            <span class="sub-title">Portfolio</span>
            <h2>My Projects</h2>
          </div>
          
          <div class="filter-tabs" data-aos="fade-up">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="java-web">Java / Web</button>
            <button class="filter-btn" data-filter="spring-boot">Spring Boot</button>
          </div>

            <!-- Project 1: Online Banking System -->
            <div class="project-card tilt-card" data-aos="fade-up" data-aos-delay="100" data-category="java-web">
              <div class="project-img">
                <img src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800" alt="Online Banking System">
                <div class="project-overlay">
                  <div class="project-tags"><span>JDBC</span><span>Servlet</span><span>JSP</span><span>MySQL</span></div>
                  <div class="project-links">
                    <a href="#" target="_blank"><i class="fa-brands fa-github"></i></a>
                  </div>
                </div>
              </div>
              <div class="project-info">
                <h3>Online Banking System</h3>
                <p>A comprehensive online banking platform with account management, secure transactions, and balance tracking using Java EE technologies.</p>
              </div>
            </div>
            <!-- Project 2: Online Test Portal -->
            <div class="project-card tilt-card" data-aos="fade-up" data-aos-delay="200" data-category="spring-boot">
              <div class="project-img">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" alt="Online Test Portal">
                <div class="project-overlay">
                  <div class="project-tags"><span>Spring Boot</span><span>Security</span><span>JWT</span><span>MySQL</span></div>
                  <div class="project-links">
                    <a href="#" target="_blank"><i class="fa-brands fa-github"></i></a>
                  </div>
                </div>
              </div>
              <div class="project-info">
                <h3>Online Test Portal</h3>
                <p>A robust online examination system featuring secure JWT authentication, Spring Security, and real-time testing capabilities with MySQL integration.</p>
              </div>
            </div>
        </div>
      </section>

      <!-- Certificates Section -->
      <section id="certificates" class="certificates-section section-padding">
        <div class="container">
          <div class="section-header center" data-aos="fade-up">
            <span class="sub-title">Recognition</span>
            <h2>Certificates & Achievements</h2>
          </div>
          <div class="certificates-grid">
            <div class="cert-card" data-aos="fade-up" data-aos-delay="100">
              <div class="cert-icon"><i class="fa-brands fa-aws"></i></div>
              <h3>AWS Solutions Architecture</h3>
              <p>Completed AWS Solutions Architecture Job Simulation <b>by Forage</b>, focusing on scalable and reliable cloud infrastructure.</p>
              <a href="https://drive.google.com/file/d/17jMj2oFpsB2P86YjkfDVLSr5NZcULwD5/view?usp=drivesdk" class="cert-link" target="_blank" rel="noopener noreferrer">View Certificate <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="cert-card" data-aos="fade-up" data-aos-delay="200">
              <div class="cert-icon"><i class="fa-solid fa-brain"></i></div>
              <h3>Supervised and Unsupervised Machine Learning</h3>
              <p>Certified in Supervised and Unsupervised Machine Learning <b>by Simplilearn SkillUp</b>, covering core algorithms and data modeling.</p>
              <a href="https://drive.google.com/file/d/1GDIFOqzOVjVwsFKC2GadTon-nKVbJDif/view?usp=drivesdk" class="cert-link" target="_blank" rel="noopener noreferrer">View Certificate <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="cert-card" data-aos="fade-up" data-aos-delay="300">
              <div class="cert-icon"><i class="fa-solid fa-file-contract"></i></div>
              <h3>Research Paper Published</h3>
              <p>Successfully published a research paper in an International Journal, contributing to the field of Computer Science.</p>
              <a href="https://ijrpr.com/uploads/V6ISSUE4/IJRPR42307.pdf" class="cert-link" target="_blank" rel="noopener noreferrer">View Journal <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="cert-card" data-aos="fade-up" data-aos-delay="400">
              <div class="cert-icon"><i class="fa-solid fa-trophy"></i></div>
              <h3>Hackathon Excellence</h3>
              <p>Awarded for outstanding performance and innovation in a competitive Hackathon challenge.</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience & Education -->
      <section id="experience" class="experience-section section-padding">
        <div class="container">
          <div class="experience-education-grid">
            <div class="experience-col">
              <div class="section-header" data-aos="fade-up">
                <span class="sub-title">History</span>
                <h2>Experience</h2>
              </div>
              <div class="timeline">
                <div class="timeline-item" data-aos="fade-up" data-aos-delay="100">
                  <div class="timeline-dot"></div>
                  <div class="timeline-date">Feb 2026 - April 2026</div>
                  <div class="timeline-content">
                    <h3>Web Developer</h3>
                    <h4>Linkcode Private Limited</h4>
                    <p>Developed responsive web applications and enhanced digital experiences through modern frontend frameworks.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="education-col">
              <div class="section-header" data-aos="fade-up">
                <span class="sub-title">Learning</span>
                <h2>Education</h2>
              </div>
              <div class="timeline">
                <div class="timeline-item" data-aos="fade-up" data-aos-delay="100">
                  <div class="timeline-dot"></div>
                  <div class="timeline-date">2023 - 2025</div>
                  <div class="timeline-content">
                    <h3>MSc CA</h3>
                    <h4>MIT Arts, Commerce and Science College, Pune</h4>
                    <p>Master of Science in Computer Applications. <br><strong>CGPA: 8.23</strong> (2025 Passout)</p>
                  </div>
                </div>
                <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
                  <div class="timeline-dot"></div>
                  <div class="timeline-date">2020 - 2023</div>
                  <div class="timeline-content">
                    <h3>BCA</h3>
                    <h4>GH Raisoni Institute of Nagpur</h4>
                    <p>Bachelor of Computer Applications. <br><strong>CGPA: 8.49</strong> (2023 Passout)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact-section section-padding">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info" data-aos="fade-right">
              <span class="sub-title">Get in Touch</span>
              <h2>Let's build something <br>extraordinary together.</h2>
              <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
              
              <div class="contact-details">
                <div class="contact-item">
                  <div class="icon"><i class="fa-solid fa-envelope"></i></div>
                  <div>
                    <h4>Email Me</h4>
                    <p>princeturkar1@gmail.com</p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
                  <div>
                    <h4>Location</h4>
                    <p>Nagpur / Pune, India</p>
                  </div>
                </div>
              </div>

              <div class="social-links-large">
                <a href="https://github.com/princeturkar" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://linkedin.com/in/prince-turkar" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="mailto:princeturkar1@gmail.com"><i class="fa-solid fa-envelope"></i></a>
              </div>
            </div>
            
            <div class="contact-form-container" data-aos="fade-left">
              <form id="contact-form" class="contact-form">
                <div class="form-group">
                  <input type="text" name="from_name" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                  <input type="email" name="from_email" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                  <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Send Message <i class="fa-solid fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container">
        <div class="footer-bottom">
          <p>&copy; 2026 Prince. Built with passion & precision.</p>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `
}

// ====== CORE HELPERS ======

const initTheme = () => {
  const toggle = document.querySelector('#theme-toggle')
  if (!toggle) return

  const applyTheme = (theme) => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    const icon = toggle.querySelector('i')
    if (icon) icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
  }

  const initialTheme = localStorage.getItem('theme') || 'light'
  applyTheme(initialTheme)

  toggle.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme')
    applyTheme(current === 'dark' ? 'light' : 'dark')
  })
}

const initNavigation = () => {
  // Mobile Hamburger
  const hamburger = document.getElementById('nav-hamburger')
  const navLinks = document.querySelector('.nav-links')
  const drawer = document.getElementById('mobile-drawer')
  const overlay = document.getElementById('drawer-overlay')
  const drawerClose = document.getElementById('drawer-close')

  if (hamburger && drawer && overlay) {
    const toggleMenu = (open) => {
      hamburger.classList.toggle('open', open)
      drawer.classList.toggle('open', open)
      overlay.classList.toggle('open', open)
      document.body.style.overflow = open ? 'hidden' : ''
    }

    hamburger.addEventListener('click', () => toggleMenu(!drawer.classList.contains('open')))
    drawerClose.addEventListener('click', () => toggleMenu(false))
    overlay.addEventListener('click', () => toggleMenu(false))
    
    document.querySelectorAll('.drawer-nav a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false))
    })
  }

  // Scroll Indicator & Active Links
  const indicator = document.querySelector('.nav-indicator')
  const header = document.querySelector('#header')
  const sections = document.querySelectorAll('section')
  const navItems = document.querySelectorAll('.nav-links a')

  const updateIndicator = () => {
    const activeLink = document.querySelector('.nav-links a.active')
    if (activeLink && indicator) {
      indicator.style.left = `${activeLink.offsetLeft}px`
      indicator.style.width = `${activeLink.offsetWidth}px`
    }
  }

  window.addEventListener('scroll', () => {
    // Header Blur
    header?.classList.toggle('scrolled', window.scrollY > 60)

    // Scroll Progress
    const progress = document.getElementById("progress")
    if (progress) {
      const scroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      progress.style.width = `${(scroll / height) * 100}%`
    }

    // Active Section Tracking
    let current = ''
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 200) current = section.getAttribute('id')
    })

    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('href').slice(1) === current)
    })
    
    updateIndicator()
  })

  // Initial call
  setTimeout(updateIndicator, 200)
}

const initProjectFilters = () => {
  const filterBtns = document.querySelectorAll('.filter-btn')
  const cards = document.querySelectorAll('.project-card[data-category]')

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      const filter = btn.dataset.filter
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter
        card.style.display = match ? '' : 'none'
        card.classList.toggle('hidden-card', !match)
      })
    })
  })
}

const initAdvancedUI = () => {
  // Typing Effect
  const typing = document.getElementById('typing')
  if (typing) {
    const phrases = ["MERN Stack Developer", "Java Expert", "AI Enthusiast", "UI/UX Designer"]
    let i = 0, j = 0, isDel = false
    const type = () => {
      const char = phrases[i]
      typing.textContent = isDel ? char.substring(0, j--) : char.substring(0, j++)
      if (!isDel && j > char.length) { isDel = true; setTimeout(type, 2000); return }
      if (isDel && j < 0) { isDel = false; i = (i + 1) % phrases.length }
      setTimeout(type, isDel ? 50 : 100)
    }
    type()
  }

  // Tilt Effect
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15
      card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateY(-10px) scale(1.02)`
    })
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)'
    })
  })

  // Stats Counter
  const stats = document.querySelectorAll('.stat-number')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const target = parseInt(el.textContent)
        let count = 0
        const interval = setInterval(() => {
          if (count < target) el.textContent = `${++count}${el.textContent.includes('+') ? '+' : ''}`
          else clearInterval(interval)
        }, 2000 / target)
        observer.unobserve(el)
      }
    })
  }, { threshold: 1 })
  stats.forEach(s => observer.observe(s))

  // Custom Cursor
  const dot = document.getElementById('cursor-dot')
  const ring = document.getElementById('cursor-ring')
  if (dot && ring) {
    let mx = 0, my = 0, rx = 0, ry = 0
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = `${mx}px`; dot.style.top = `${my}px` })
    const animate = () => { rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15; ring.style.left = `${rx}px`; ring.style.top = `${ry}px`; requestAnimationFrame(animate) }
    animate()
    document.querySelectorAll('a, button, .project-card, .service-card').forEach(el => {
      el.addEventListener('mouseenter', () => { dot.classList.add('hovering'); ring.classList.add('hovering') })
      el.addEventListener('mouseleave', () => { dot.classList.remove('hovering'); ring.classList.remove('hovering') })
    })
  }

  // Back to Top
  const backBtn = document.getElementById('back-to-top')
  if (backBtn) {
    window.addEventListener('scroll', () => backBtn.classList.toggle('visible', window.scrollY > 400))
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }
}

const initParticles = () => {
  const canvas = document.getElementById('particle-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let particles = []
  
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
  window.addEventListener('resize', resize); resize()

  class P {
    constructor() {
      this.reset()
    }
    reset() {
      this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height
      this.s = Math.random() * 2 + 1; this.vx = Math.random() * 0.5 - 0.25; this.vy = Math.random() * 0.5 - 0.25
    }
    update() {
      this.x += this.vx; this.y += this.vy
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset()
    }
    draw() {
      ctx.fillStyle = '#6366f1'; ctx.globalAlpha = 0.3; ctx.beginPath(); ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2); ctx.fill()
    }
  }

  for (let i = 0; i < 60; i++) particles.push(new P())
  const loop = () => { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.update(); p.draw() }); requestAnimationFrame(loop) }
  loop()
}

const initChatbot = () => {
  const toggle = document.getElementById('chatbot-toggle'); const bot = document.getElementById('ai-chatbot')
  const close = document.getElementById('close-chatbot'); const send = document.getElementById('send-chat')
  const input = document.getElementById('chat-input'); const messages = document.getElementById('chatbot-messages')

  const KEY = "YOUR_GEMINI_API_KEY" // User to fill

  if (!toggle || !bot) return
  toggle.addEventListener('click', () => bot.classList.toggle('open'))
  close.addEventListener('click', () => bot.classList.remove('open'))

  const add = (text, user = false) => {
    const div = document.createElement('div'); div.className = `message ${user ? 'user-message' : 'bot-message'}`; div.textContent = text
    messages.appendChild(div); messages.scrollTop = messages.scrollHeight
  }

  const handle = async () => {
    const text = input.value.trim(); if (!text) return
    add(text, true); input.value = ''
    if (KEY === "YOUR_GEMINI_API_KEY") {
      setTimeout(() => add("AI assistant is ready! Please add your Gemini API key in `main.js` to enable reflections."), 500); return
    }
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${KEY}`, {
        method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ contents: [{ parts: [{ text: `Assisting Prince's portfolio visitor. User says: ${text}` }] }] })
      })
      const data = await res.json()
      add(data.candidates[0].content.parts[0].text)
    } catch (e) { add("Connection error. Please check your API key.") }
  }
  send.addEventListener('click', handle); input.addEventListener('keypress', e => e.key === 'Enter' && handle())
}

const initEmailJS = () => {
  const form = document.getElementById('contact-form')
  if (!form) return

  const PK = "YOUR_PUBLIC_KEY"; const SID = "YOUR_SERVICE_ID"; const TID = "YOUR_TEMPLATE_ID"

  form.addEventListener('submit', (e) => {
    e.preventDefault(); const btn = form.querySelector('button'); const orig = btn.innerHTML
    btn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>'; btn.disabled = true

    if (PK === "YOUR_PUBLIC_KEY") {
      setTimeout(() => { alert("Config ready! Add your EmailJS keys in `main.js`."); btn.innerHTML = orig; btn.disabled = false; form.reset() }, 1000); return
    }

    emailjs.init(PK)
    emailjs.sendForm(SID, TID, form).then(() => { alert("Sent!"); form.reset() }, () => alert("Error.")).finally(() => { btn.innerHTML = orig; btn.disabled = false })
  })
}

const initAOS = () => {
  if (window.AOS) {
    window.AOS.init({ duration: 1000, once: true, offset: 100 })
  }
}

const initPageLoader = () => {
  const loader = document.getElementById('page-loader')
  if (loader) setTimeout(() => loader.classList.add('hidden'), 1500)
}

const initClock = () => {
  const clock = document.getElementById('real-time-clock')
  if (!clock) return
  const update = () => {
    const now = new Date()
    clock.textContent = now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })
  }
  setInterval(update, 1000)
  update()
}

// ====== START APPLICATION ======
document.addEventListener('DOMContentLoaded', initializeApp)
if (document.readyState === 'complete' || document.readyState === 'interactive') initializeApp()
