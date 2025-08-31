"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Portfolio3 = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Load Sour Gummy font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Sour+Gummy:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Check if font is loaded
    const checkFont = () => {
      if (document.fonts && document.fonts.check) {
        if (document.fonts.check('1em "Sour Gummy"')) {
          setFontLoaded(true);
        } else {
          setTimeout(checkFont, 100);
        }
      } else {
        // Fallback for browsers without font loading API
        setTimeout(() => setFontLoaded(true), 1000);
      }
    };

    checkFont();

    return () => {
      // Cleanup
      const existingLink = document.querySelector('link[href*="Sour+Gummy"]');
      if (existingLink && existingLink.parentNode) {
        existingLink.parentNode.removeChild(existingLink);
      }
    };
  }, []);

  const personalInfo = {
    name: "Aadil Sayyed",
    title: "Senior Software Engineer",
    subtitle: "React Native • Node.js • Payments",
    location: "Shirdi, India",
    email: "aadil_sayyed@outlook.com",
    phone: "+91 85518 90913",
    github: 'https://github.com/Aadil009',
    linkedin: 'https://www.linkedin.com/in/aadilsayyed'
  };

  const skills = [
    "JavaScript", "React", "React Native", "Node.js", "TypeScript", "Python",
    "MongoDB", "PostgreSQL", "AWS", "Docker", "Next.js", "Express",
    "HTML/CSS", "PHP", "MySQL", "Java", "Data Structures"
  ];

  const experiences = [
    {
      company: "Metadesign Software Services",
      role: "Software Engineer",
      period: "July 2021 - Present",
      description: "Worked on a range of payment solutions utilized by merchants, aiming to improve the efficiency and reliability of their transaction systems. Architected React Native payments core (NMI, GPay, Apple Pay) and scaled Node services to 1.5M MAU with zero-downtime deploys."
    },
    {
      company: "Metadesign Software Services",
      role: "Software Engineer Intern",
      period: "January 2021 - June 2021",
      description: "Developed a platform application to display live transaction data summaries to merchants in various formats and collaborated with the team to resolve issues in other projects. Built offline-first React Native app with geofencing capabilities."
    }
  ];

  const projects = [
    {
      name: "Post Enhancer",
      tech: "Node.js, Express, MongoDB, Anthropic AI, Google Cloud Shell",
      image: '/images/post-enhancer.png',
      description: "A platform for social media influencers to maximize their reach to active users across various platforms using post enhancement tool.",
      type: 'web',
      link: 'https://post-enhancer-app-dot-dailysync-backend-service.et.r.appspot.com/',
      repo: 'https://github.com/Aadil009/post-enhancer'
    },
    {
      name: "DailySync",
      tech: "React Native, Node.js, Express, MongoDB",
      image: '/images/daily-sync.png',
      description: "App which will give you news in 60-100 words format for quick consumption.",
      type: 'app',
      link: ''
    },
    {
      name: "SocioEscape",
      tech: "React Native",
      image: '/images/socioescape.png',
      description: "Escape from social media by using SocioEscape. Allows users to set limits to social media applications and blocks access when limit exceeds.",
      type: 'app',
      link: ''
    },
    {
      name: "AlhudaHajTours",
      tech: "HTML, CSS, PHP, MySQL",
      image: '/images/alhuda-haj-tours.png',
      description: "Tourism website where customers can book their haj umrah tours package from various packages.",
      type: 'web',
      link: 'https://www.alhudahajtours.com'
    },
    {
      name: "NightPDF",
      tech: "Next.js, Tailwind CSS",
      image: '/images/night-pdf.png',
      description: "Read PDFs in dark mode. Comfortable reading in low-light conditions.",
      type: 'web',
      link: 'https://nightpdf-dot-dailysync-backend-service.et.r.appspot.com/'
    },
    {
      name: 'Portfolio',
      tech: 'Next.js, Tailwind CSS',
      image: '/images/portfolio.png',
      description: 'My portfolio website showcasing my projects and experience.',
      type: 'web',
      link: 'https://portfolio-dot-dailysync-backend-service.et.r.appspot.com/'
    },
    {
      name: "Let's Go Punkar",
      tech: "React Native, Node.js, MySQL, Express",
      image: '/images/no-image.jpg',
      description: "Application where users can see PMPML (Pune Transportation) bus schedules, arrivals and search buses for indirect and direct routes.",
      type: 'app',
      link: 'https://github.com/Aadil009/LetsGoPunekar'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`portfolio3-container ${fontLoaded ? 'font-loaded' : ''}`}>
      <style jsx global>{`
        :root {
          --ink: #000;
          --sky-top: #bfeaff;
          --sky-bottom: #eaf7ff;
          --nav: #8ad4ff;
          --pastel-1: #fff69b;
          --pastel-2: #d9c4ff;
          --pastel-3: #ffbcbc;
          --pastel-4: #bfffcf;
          --pastel-5: #ffc39b;
          --pastel-6: #b8ffbc;
          --card: #fff;
          --ink-2: rgba(0,0,0,.75);
          --radius: 14px;
          --border: 3px;
          --shadow: 4px 4px 0 var(--ink);
          --shadow-sm: 3px 3px 0 var(--ink);
          --maxw: 1200px;
        }

        .portfolio3-container {
          font-family: "Sour Gummy", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          background: linear-gradient(to bottom, var(--sky-top), var(--sky-bottom));
          color: var(--ink);
          min-height: 100vh;
        }

        .portfolio3-container * {
          font-family: "Sour Gummy", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
        }

        .portfolio3-container.font-loaded {
          font-family: "Sour Gummy", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif !important;
        }

        .portfolio3-container.font-loaded * {
          font-family: "Sour Gummy", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif !important;
        }

        .container {
          max-width: var(--maxw);
          margin: 0 auto;
          padding: 0 16px;
        }

        /* Header */
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #FFFF5C;
          border-bottom: 4px solid var(--ink);
          box-shadow: var(--shadow-sm);
        }

        .nav-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 0;
        }

        .brand {
          font-weight: 700;
          font-size: clamp(18px, 2.8vw, 22px);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .brand-logo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid var(--ink);
          object-fit: cover;
        }

        .menu-toggle {
          display: none;
          border: var(--border) solid var(--ink);
          background: var(--pastel-1);
          border-radius: 10px;
          padding: 8px 12px;
          box-shadow: var(--shadow-sm);
          font-weight: 700;
          cursor: pointer;
        }

        .links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .nav-link {
          display: inline-block;
          padding: 10px 16px;
          border: var(--border) solid var(--ink);
          border-radius: 12px;
          box-shadow: var(--shadow-sm);
          font-weight: 700;
          transition: transform .15s;
          cursor: pointer;
        }

        .nav-link:hover {
          transform: translateY(-3px);
        }

        .nav-link:nth-child(1) { background: var(--pastel-1); }
        .nav-link:nth-child(2) { background: var(--pastel-2); }
        .nav-link:nth-child(3) { background: var(--pastel-3); }
        .nav-link:nth-child(4) { background: var(--pastel-4); }
        .nav-link:nth-child(5) { background: var(--pastel-5); }
        .nav-link:nth-child(6) { background: var(--pastel-6); }

        /* Mobile nav */
        @media (max-width: 820px) {
          .menu-toggle {
            display: inline-block;
          }
          
          .links {
            display: none;
            width: 100%;
          }
          
          .links.open {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
          }
          
          .nav-wrap {
            flex-wrap: wrap;
          }
        }

        /* Sections */
        .section {
          padding: 56px 0;
          border-bottom: 4px solid var(--ink);
        }

        .section-head {
          display: inline-block;
          margin: 0 auto 26px;
          padding: 8px 18px;
          background: var(--pastel-1);
          border: var(--border) solid var(--ink);
          border-radius: 12px;
          box-shadow: var(--shadow-sm);
          font-size: clamp(20px, 3vw, 26px);
          text-transform: uppercase;
          font-weight: 700;
        }

        .lead {
          max-width: 880px;
          margin: 0 auto;
          color: var(--ink-2);
          font-size: clamp(16px, 2.2vw, 18px);
          text-align: center;
        }

        /* Hero */
        .hero {
          padding: 70px 0 30px;
          text-align: center;
        }

        .hero h1 {
          font-size: clamp(32px, 9vw, 64px);
          margin: 0 0 6px;
          font-weight: 700;
        }

        .hero .sub {
          font-size: clamp(16px, 3vw, 22px);
          color: var(--ink-2);
        }

        .pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-top: 16px;
        }

        .pill {
          border: var(--border) solid var(--ink);
          border-radius: 999px;
          padding: 8px 14px;
          background: var(--pastel-4);
          box-shadow: var(--shadow-sm);
          font-weight: 700;
        }

        /* Cards */
        .grid {
          display: grid;
          gap: 18px;
        }

        .grid.auto {
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }

        .card {
          background: var(--card);
          border: var(--border) solid var(--ink);
          border-radius: var(--radius);
          padding: 18px;
          box-shadow: var(--shadow);
        }

        /* Project cards */
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 18px;
        }

        .project-card {
          background: var(--card);
          border: var(--border) solid var(--ink);
          border-radius: var(--radius);
          padding: 18px;
          box-shadow: var(--shadow);
          transition: transform .15s;
        }

        .project-card:hover {
          transform: translateY(-4px);
        }

        .project-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px;
          border: 2px solid var(--ink);
          margin-bottom: 12px;
        }

        .project-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .project-tech {
          font-size: 14px;
          color: var(--ink-2);
          margin-bottom: 8px;
        }

        .project-desc {
          font-size: 16px;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .project-links {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .project-link {
          padding: 6px 12px;
          border: 2px solid var(--ink);
          border-radius: 8px;
          background: var(--pastel-2);
          font-size: 14px;
          font-weight: 700;
          transition: transform .15s;
          text-decoration: none;
          color: var(--ink);
        }

        .project-link:hover {
          transform: translateY(-2px);
        }

        .project-link.github {
          background: var(--pastel-3);
        }

        /* Skills */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
        }

        .skill-card {
          background: var(--card);
          border: var(--border) solid var(--ink);
          border-radius: var(--radius);
          padding: 16px;
          box-shadow: var(--shadow);
          text-align: center;
          font-weight: 700;
          transition: transform .15s;
        }

        .skill-card:hover {
          transform: translateY(-3px);
        }

        .skill-card:nth-child(4n+1) { background: var(--pastel-1); }
        .skill-card:nth-child(4n+2) { background: var(--pastel-2); }
        .skill-card:nth-child(4n+3) { background: var(--pastel-3); }
        .skill-card:nth-child(4n+4) { background: var(--pastel-4); }

        /* Experience */
        .experience-card {
          background: var(--card);
          border: var(--border) solid var(--ink);
          border-radius: var(--radius);
          padding: 24px;
          box-shadow: var(--shadow);
        }

        .experience-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .experience-period {
          font-size: 16px;
          color: var(--ink-2);
          margin-bottom: 12px;
        }

        .experience-desc {
          font-size: 16px;
          line-height: 1.5;
        }

        /* Contact */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 18px;
        }

        .contact-card {
          background: var(--card);
          border: var(--border) solid var(--ink);
          border-radius: var(--radius);
          padding: 20px;
          box-shadow: var(--shadow);
          text-align: center;
          transition: transform .15s;
        }

        .contact-card:hover {
          transform: translateY(-3px);
        }

        .contact-card:nth-child(1) { background: var(--pastel-1); }
        .contact-card:nth-child(2) { background: var(--pastel-2); }
        .contact-card:nth-child(3) { background: var(--pastel-3); }
        .contact-card:nth-child(4) { background: var(--pastel-4); }

        .contact-card h3 {
          margin-bottom: 8px;
          font-weight: 700;
        }

        .contact-card a {
          color: var(--ink);
          text-decoration: none;
        }

        .contact-card a:hover {
          text-decoration: underline;
        }

        /* Footer */
        .footer {
          background: var(--nav);
          border-top: 4px solid var(--ink);
          box-shadow: var(--shadow-sm);
          padding: 24px 0;
          text-align: center;
        }

        /* Utilities */
        .text-center {
          text-align: center;
        }

        .mb-0 { margin-bottom: 0; }
        .mb-1 { margin-bottom: 8px; }
        .mb-2 { margin-bottom: 16px; }
        .mb-3 { margin-bottom: 24px; }
      `}</style>

      {/* Header */}
      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand">
            <Image
              src="/images/aadilsayyed.png"
              alt="Aadil Sayyed"
              width={50}
              height={50}
              className="brand-logo"
            />
          </div>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            Menu ☰
          </button>
          <nav className={`links ${isMenuOpen ? 'open' : ''}`}>
            <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
            <button className="nav-link" onClick={() => scrollToSection('projects')}>Projects</button>
            <button className="nav-link" onClick={() => scrollToSection('experience')}>Experience</button>
            <button className="nav-link" onClick={() => scrollToSection('skills')}>Skills</button>
            <button className="nav-link" onClick={() => scrollToSection('education')}>Education</button>
            <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>{personalInfo.name}</h1>
          <p className="sub">{personalInfo.title} — {personalInfo.subtitle}</p>
          <div className="pills">
            <span className="pill">React Native</span>
            <span className="pill" style={{ background: 'var(--pastel-2)' }}>JavaScript</span>
            <span className="pill" style={{ background: 'var(--pastel-3)' }}>Payments</span>
            <span className="pill" style={{ background: 'var(--pastel-5)' }}>Mobile & Web Apps</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container text-center">
          <h2 className="section-head">About Me</h2>
          <p className="lead">
            I'm a software engineer with 5+ years of experience shipping mobile & web products.
            I care about clean APIs, smooth UX, and reliable systems. Recently: payments flows with NMI + GPay/Apple Pay and agri-tech tooling.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="section-head">Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={index} className="project-card">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="project-image"
                />
                <h3 className="project-title">{project.name}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-desc">{project.description}</p>
                <div className="project-links">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {project.type === 'web' ? 'Live Demo' : 'View App'}
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="section-head">Experience</h2>
          </div>
          <div className="grid auto">
            {experiences.map((exp, index) => (
              <article key={index} className="experience-card">
                <h3 className="experience-title">{exp.role} — {exp.company}</h3>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-desc">{exp.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="section-head">Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="section-head">Education</h2>
          </div>
          <div className="grid auto">
            <div className="card">
              <h3 className="mb-1">B.E. Computer Science</h3>
              <p className="mb-0">Savitribai Phule Pune University (2016—2020)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="section-head">Contact</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>📧 Email</h3>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="contact-card">
              <h3>📱 Phone</h3>
              <p className="mb-0">{personalInfo.phone}</p>
            </div>
            <div className="contact-card">
              <h3>💼 LinkedIn</h3>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/aadilsayyed
              </a>
            </div>
            <div className="contact-card">
              <h3>🐙 GitHub</h3>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                github.com/Aadil009
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Aadil Sayyed
        </div>
      </footer>
    </div>
  );
};

export default Portfolio3;