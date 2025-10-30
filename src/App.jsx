import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [name ,setName] = useState("")
  const [email , setEmail] = useState("")
  const [subject , setSubject] = useState("")
  const [msg, setMessage] = useState("")


  const sendEmail = ()=>{





const res =  fetch("https://osama7901.app.n8n.cloud/webhook/send_email", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: name,
    email: email,
    subject: subject,
    msg: msg,
  }),
});


  }


  const projects = [
    {
      title: "Coffee Shop Assistant",
      description:
        "AI-powered coffee shop website with integrated chatbot for customer interaction, supporting real-time chat and voice calling.",
      tech: ["React.js", "FastAPI", "AI/ML", "Telegram Bot"],
      link: "https://coffee-shop-theta-eight.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
    },
    {
      title: "Job Matcher",
      description:
        "Job recommendation system helping employers find the best candidates and job seekers find suitable positions.",
      tech: ["React.js", "FastAPI", "Chroma DB", "LLM", "SendGrid"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    },
    {
      title: "Instagram Bot Cleaner",
      description:
        "Automation tool for content moderation on Instagram, detecting and removing profane comments.",
      tech: ["FastAPI", "React.js", "Gemini AI", "instagramAPI"],
      link: "#",
      image:
        "https://cdn.prod.website-files.com/67164b123871e451cc470cea/67ea532b07f55ac994307494_alexander-shatov-71Qk8ODIBko-unsplash.jpg",
    },
    {
      title: "Workout Assistant",
      description:
        "Personalized AI fitness companion delivering custom workouts based on user goals and preferences.",
      tech: [ "FastAPI", "Gemini AI", "Python"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    },
  ];

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Next.js",level: 85 },
    { name: "Laravel", level: 88 },
    { name: "FastAPI", level: 85 },
    { name: "Flutter",level: 80 },
    { name: "Python", level: 90 },
    { name: "AI/ML", level: 82 },
    { name: "MySQL",  level: 85 },
  ];

  return (
    <div style={{ background: "#0a0a0a", color: "white" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        body {
          overflow-x: hidden;
        }
        
        .navbar-custom {
          background-color: rgba(10, 10, 10, 0.95) !important;
          backdrop-filter: blur(10px);
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(139, 92, 246, 0.1);
        }
        
        .nav-link-custom {
          color: #ffffff !important;
          margin: 0 1rem;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        
        .nav-link-custom:hover {
          color: #8B5CF6 !important;
        }
        
        .nav-link-custom::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: #8B5CF6;
          transition: width 0.3s;
        }
        
        .nav-link-custom:hover::after {
          width: 100%;
        }
        
        .btn-contact {
          background: linear-gradient(135deg, #8B5CF6 0%, #6B00E5 100%);
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .btn-contact:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
        }
        
        .hero-section {
          min-height: 80vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #6B00E5 0%, #1a1a1a 50%, #0a0a0a 100%);
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
        }
        
        .name-highlight {
          color: #8B5CF6;
          font-weight: 900;
          font-size: 1.1rem;
        }
        
        .title-main {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        
        .title-accent {
          color: #8B5CF6;
        }
        
        .subtitle {
          color: #B4B4B4;
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }
        
        .btn-action {
          background: transparent;
          border: 2px solid #8B5CF6;
          color: #8B5CF6;
          padding: 0.85rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          margin-right: 1rem;
          margin-bottom: 1rem;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        
        .btn-action:hover {
          background: #8B5CF6;
          color: white;
          transform: translateY(-2px);
        }
        
        .btn-primary-custom {
          background: linear-gradient(135deg, #8B5CF6 0%, #6B00E5 100%);
          border: none;
          color: white;
          padding: 0.85rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 1rem;
        }
        
        .btn-primary-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
          color: white;
        }
        
        .stats-box {
          display: inline-block;
          margin-right: 4rem;
          margin-top: 2rem;
        }
        
        .stats-number {
          font-size: 4rem;
          font-weight: 900;
          color: #8B5CF6;
          line-height: 1;
        }
        
        .stats-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #B4B4B4;
          margin-top: 0.5rem;
        }
        
        .profile-image-container {
          position: relative;
          
          display: inline-block;
        }
        
        .profile-image {
          width: 350px;
          height: 350px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid #8B5CF6;
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
        }
        
        .floating-badge {
          position: absolute;
          background: white;
          color: #6B00E5;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          font-size: 0.9rem;
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .badge-top-left {
          top: 50px;
          left: -30px;
        }
        
        .badge-top-right {
          top: 50px;
          right: -30px;
          animation-delay: 1s;
        }
        
        .badge-bottom {
          bottom: 80px;
          right: -50px;
          background: #8B5CF6;
          color: white;
          padding: 1rem 1.5rem;
          animation-delay: 2s;
        }
        
        .icon-circle {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: #6B00E5;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .icon-github {
          bottom: 150px;
          left: -50px;
        }
        
        .section-padding {
          padding: 100px 0;
        }
        
        .section-title {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #8B5CF6, #6B00E5);
          border-radius: 2px;
        }
        
        .section-subtitle {
          color: #B4B4B4;
          font-size: 1.1rem;
          margin-bottom: 4rem;
        }
        
        /* About Section */
        .about-section {
          background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
        }
        
        .about-card {
          background: rgba(26, 26, 26, 0.5);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          padding: 2rem;
          height: 100%;
        }
        
        .about-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .skill-item {
          background: rgba(26, 26, 26, 0.5);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 15px;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .skill-name {
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .skill-icon {
          font-size: 1.5rem;
        }
        
        .progress-bar-custom {
          height: 8px;
          background: rgba(139, 92, 246, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #8B5CF6, #6B00E5);
          border-radius: 10px;
          transition: width 1s ease-in-out;
        }
        
        /* Projects Section */
        .projects-section {
          background: #0a0a0a;
        }
        
        .project-card {
          background: rgba(26, 26, 26, 0.5);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s;
          height: 100%;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          border-color: #8B5CF6;
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
        }
        
        .project-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        
        .project-content {
          padding: 2rem;
        }
        
        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }
        
        .project-description {
          color: #B4B4B4;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .tech-tag {
          display: inline-block;
          background: rgba(139, 92, 246, 0.2);
          color: #8B5CF6;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .project-link {
          color: #8B5CF6;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }
        
        .project-link:hover {
          color: #6B00E5;
          text-decoration: underline;
        }
        
        /* Contact Section */
        .contact-section {
          background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
        }
        
        .contact-info-card {
          background: rgba(26, 26, 26, 0.5);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        
        .contact-icon {
          font-size: 2rem;
          color: #8B5CF6;
          margin-bottom: 1rem;
        }
        
        .contact-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .contact-detail {
          color: #B4B4B4;
        }
        
        .contact-detail a {
          color: #8B5CF6;
          text-decoration: none;
        }
        
        .contact-detail a:hover {
          text-decoration: underline;
        }
        
        .form-control-custom {
          background: rgba(26, 26, 26, 0.5);
          border: 1px solid rgba(139, 92, 246, 0.2);
          color: white;
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
        }
        
        .form-control-custom:focus {
          background: rgba(26, 26, 26, 0.8);
          border-color: #8B5CF6;
          color: white;
          box-shadow: 0 0 0 0.2rem rgba(139, 92, 246, 0.25);
        }
        
        .form-control-custom::placeholder {
          color: #666;
        }
        
        /* Footer */
        .footer {
          background: #1a1a1a;
          padding: 3rem 0;
          border-top: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .social-links a {
          color: #8B5CF6;
          font-size: 1.5rem;
          margin: 0 1rem;
          transition: all 0.3s;
        }
        
        .social-links a:hover {
          color: #6B00E5;
          transform: translateY(-5px);
        }
        
        .logo-brand {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }
        
        .logo-accent {
          color: #8B5CF6;
        }
        
        .partners-section {
          background-color: rgba(26, 26, 26, 0.8);
          padding: 3rem 0;
        }
        
        .partner-logo {
          opacity: 0.5;
          transition: opacity 0.3s;
          max-height: 40px;
          filter: grayscale(100%) brightness(200%);
        }
        
        .partner-logo:hover {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .title-main {
            font-size: 2.5rem;
          }
          
          .profile-image {
            width: 300px;
            height: 300px;
          }
          
          .stats-number {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .floating-badge {
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
          }
          
          .badge-bottom {
            right: -20px;
            bottom: 60px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand logo-brand" href="#home">
            Abdulrahman Abulail
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item ms-3">
                <a href="#contact" className="btn btn-contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-3">
                <span className="name-highlight text-light">Abdulrahman Abulail</span>
              </div>
              <h1 className="title-main">
                Full Stack Developer <span className="title-accent">&</span>
                <br />
                <span className="title-accent">AI Enthusiast.</span>
              </h1>
              <p className="subtitle">
                I specialize in Web Development, Mobile Development,
                <br />
                Artificial Intelligence, and Backend APIs.
              </p>

              <div className="mb-4">
                <a href="#projects" className="btn-action">
                  <span style={{ marginRight: "0.5rem" }}></span> View
                  Projects
                </a>
                <a href="#contact" className="btn-primary-custom">
                  <span style={{ marginRight: "0.5rem" }}></span> Get In Touch
                </a>
              </div>

              <div className="d-flex flex-wrap">
                <div className="stats-box">
                  <div className="stats-number">1+</div>
                  <div className="stats-label">
                    Years
                    <br />
                    Experience
                  </div>
                </div>
                <div className="stats-box">
                  <div className="stats-number">9+</div>
                  <div className="stats-label">
                    Projects
                    <br />
                    Completed
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center position-relative mt-5 mt-lg-0">
              <div className="profile-image-container">
                <img
                  src="./511185653_4042910925855675_7297309081807008373_n.jpg"
                  alt="Profile"
                  className="profile-image"
                />

                <div className="floating-badge badge-top-left">🎯 React.js</div>
                <div className="floating-badge badge-top-right">⚡ Laravel</div>
                <div className="floating-badge badge-bottom">
                  💬 Client Feedback
                  <br />
                  <small>
                    "Professional, talented, and dedicated developer."
                  </small>
                </div>

                <div className="icon-circle icon-github">
                  <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="partners-section">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-6 col-md-2 text-center mb-3 mb-md-0">
              <img
                src="https://cdn.worldvectorlogo.com/logos/fiverr-1.svg"
                alt="Fiverr"
                className="partner-logo"
              />
            </div>
            <div className="col-6 col-md-2 text-center mb-3 mb-md-0">
              <img
                src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"
                alt="Freelancer"
                className="partner-logo"
              />
            </div>
            <div className="col-6 col-md-2 text-center mb-3 mb-md-0">
              <img
                src="https://cdn.worldvectorlogo.com/logos/upwork-1.svg"
                alt="Upwork"
                className="partner-logo"
              />
            </div>
            <div className="col-6 col-md-2 text-center mb-3 mb-md-0">
              <img
                src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                alt="LinkedIn"
                className="partner-logo"
              />
            </div>
            <div className="col-6 col-md-2 text-center">
              <img
                src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                alt="GitHub"
                className="partner-logo"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="about-section section-padding" id="about">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle mt-3">
              Passionate developer dedicated to creating innovative solutions
            </p>
          </div>

          <div className="row mb-5">
            <div className="col-lg-4 mb-4">
              <div className="about-card">
                <div className="about-icon"><img width={30} src="./icons/graduation.png" alt="" /></div>
                <h3 className="h5 mb-3">Education</h3>
                <p className="text-secondary mb-2">
                  <strong>An-Najah National University</strong>
                </p>
                <p className="text-secondary">
                  Bachelor of Science in Computer Science (2021 - 2025)
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="about-card">
                <div className="about-icon"><img width={30} src="./icons/expertise.png" alt="" /></div>
                <h3 className="h5 mb-3">Experience</h3>
                <p className="text-secondary mb-2">
                  <strong>Freelance Software Developer</strong>
                </p>
                <p className="text-secondary">Remote (2022 - Present)</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="about-card">
                <div className="about-icon"><img width={30} src="./icons/location.png" alt="" /></div>
                <h3 className="h5 mb-3">Location</h3>
                <p className="text-secondary mb-2">
                  <strong>Burqa, Nablus</strong>
                </p>
                <p className="text-secondary">West Bank, Palestine</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <h3 className="h4 mb-4">Professional Summary</h3>
              <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                Computer Science graduate from An-Najah National University with
                hands-on experience in full-stack development, artificial
                intelligence, and backend APIs. Proficient in modern
                technologies such as Next.js, React.js, Laravel, FastAPI, and
                Flutter. Passionate about building real-world applications,
                intelligent systems, and automation workflows. Eager to
                contribute to dynamic teams and pursue freelance opportunities
                that foster technical and professional growth.
              </p>
            </div>
            <div className="col-lg-6">
              <h3 className="h4 mb-4">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="progress-bar-custom">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section section-padding" id="projects">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mt-3">
              A showcase of my recent work and achievements
            </p>
          </div>

          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="project-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="mb-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="contact-section section-padding">
  <div className="container">
    {/* Section Header */}
    <div className="text-center mb-5">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle mt-3">
        Let's work together on your next project
      </p>
    </div>

    <div className="row">
      {/* Contact Info (Left Column) */}
      <div className="col-lg-4 mb-4">
        {/* Email */}
        <div className="contact-info-card">
          <div className="contact-icon"><img width={30} src="./icons/gmail (1).png" alt="" /></div>
          <h3 className="contact-title">Email</h3>
          <p className="contact-detail">
            <a href="mailto:abulailabood7@gmail.com">
              abulailabood7@gmail.com
            </a>
          </p>
        </div>

        {/* Phone */}
        <div className="contact-info-card">
          <div className="contact-icon"><img width={30} src="./icons/phone.png" alt="" /></div>
          <h3 className="contact-title">Phone</h3>
          <p className="contact-detail">
            <a href="tel:+972594435028">+972 59-4435028</a>
          </p>
        </div>

        {/* Location */}
        <div className="contact-info-card">
          <div className="contact-icon"><img width={30} src="./icons/location.png" alt="" /></div>
          <h3 className="contact-title">Location</h3>
          <p className="contact-detail">
            Burqa, Nablus <br />
            West Bank, Palestine
          </p>
        </div>

        {/* LinkedIn */}
        <div className="contact-info-card">
          <div className="contact-icon"><img width={30} src="./icons/linkedin (3).png" alt="" /></div>
          <h3 className="contact-title">LinkedIn</h3>
          <p className="contact-detail">
            <a
              href="https://www.linkedin.com/in/abdulrahman-abulail-5192b8300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with me
            </a>
          </p>
        </div>
      </div>

      {/* Contact Form (Right Column) */}
      <div className="col-lg-8">
        <div className="contact-info-card h-100">
          <h3 className="h4 mb-4">Send me a message</h3>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-custom"
                placeholder="Your Name"
                value={name}
                onChange={(e)=>{
                  setName(e.target.value)
                }}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-custom"
                placeholder="Your Email"
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-custom"
                placeholder="Subject"
                value={subject}
                onChange={(e)=>{
                  setSubject(e.target.value)
                }}
              />
            </div>

            <div className="mb-4">
              <textarea
                className="form-control form-control-custom"
                rows="6"
                placeholder="Your Message"
                value={msg}
                onChange={(e)=>{
                  setMessage(e.target.value)
                }}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary-custom w-100" onClick={sendEmail}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0 text-secondary">
                © 2025 Abdulrahman Abulail. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="social-links text-center text-md-end">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulrahman-abulail-5192b8300/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="mailto:abulailabood7@gmail.com">
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
