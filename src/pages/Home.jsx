import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaLaptopCode,
  FaProjectDiagram,
  FaClock,
  FaCertificate,
  FaUsers,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { name: "React", icon: <FaReact size={30} />, color: "#61DBFB" },
    { name: "Node.js", icon: <FaNodeJs size={30} />, color: "#3C873A" },
    { name: "Express.js", icon: <FaNodeJs size={30} />, color: "#303030" },
    { name: "MongoDB", icon: <FaDatabase size={30} />, color: "#4DB33D" },
    { name: "JavaScript", icon: <FaJsSquare size={30} />, color: "#F7DF1E" },
    { name: "HTML", icon: <FaHtml5 size={30} />, color: "#E44D26" },
    { name: "CSS", icon: <FaCss3Alt size={30} />, color: "#2965F1" },
    { name: "Git & GitHub", icon: <FaGitAlt size={30} />, color: "#F1502F" },
    { name: "Responsive Design", icon: <FaLaptopCode size={30} />, color: "#8B5CF6" },
  ];

  const projects = [
    {
      title: "E-Commerce App",
      desc: "Full-stack shopping platform with React, Node.js, and MongoDB integration.",
    },
    {
      title: "Weather Dashboard",
      desc: "Real-time weather tracker using OpenWeather API and React hooks.",
    },
    {
      title: "Task Manager",
      desc: "A productivity app built with React and Local Storage.",
    },
  ];

  return (
    <div className="home">
      {/* ===== HERO SECTION ===== */}
      <section className="hero" data-aos="fade-up">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Abhishek Kumar</span>
          </h1>
          <p>
            A Passionate Full Stack Developer Crafting Modern, Scalable, and
            User-Friendly Web Experiences.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="cta-btn">
              View My Work <FaArrowRight />
            </Link>
            <a
              href="/Abhishek_Resume.pdf"
              className="cv-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:youremail@example.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image" data-aos="zoom-in">
          <img
            src="https://imgs.search.brave.com/nI494MOawmUfdlzpWpmyO3-pvib6SZLi6guc7m4s_U4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8w/OC8wNC8xMy8wNi9z/b2Z0d2FyZS1kZXZl/bG9wZXItNjUyMTcy/MF82NDAuanBn"
            alt="Developer illustration"
          />
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about-preview" data-aos="fade-right">
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            I’m a dedicated Full Stack Developer specializing in building
            responsive, interactive web apps using React, Node.js, and MongoDB.
            I enjoy creating efficient, visually appealing solutions that help
            people and businesses succeed online.
          </p>
          <Link to="/about" className="more-btn">
            Learn More <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section className="skills-section" data-aos="fade-up">
        <h2>Core Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div
              className="skill-card"
              key={idx}
              style={{ backgroundColor: skill.color }}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <Link to="/skills" className="core-skill-btn">
          View All Skills <FaArrowRight />
        </Link>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="projects-section" data-aos="fade-up">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div
              className="project-card"
              key={idx}
              data-aos="flip-left"
              data-aos-delay={idx * 200}
            >
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/projects" className="more-btn">
          See All Projects <FaArrowRight />
        </Link>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats-section" data-aos="fade-up">
        <div className="stat" data-aos-delay="100">
          <FaProjectDiagram size={40} />
          <h3>15+</h3>
          <p>Completed Projects</p>
        </div>
        <div className="stat" data-aos-delay="200">
          <FaClock size={40} />
          <h3>3+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat" data-aos-delay="300">
          <FaCertificate size={40} />
          <h3>5+</h3>
          <p>Certifications</p>
        </div>
        <div className="stat" data-aos-delay="400">
          <FaUsers size={40} />
          <h3>10+</h3>
          <p>Happy Clients</p>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="contact-cta" data-aos="zoom-in">
        <h2>Let's Build Something Amazing Together</h2>
        <p>
          Want to collaborate or discuss a project idea? Feel free to reach out!
        </p>
        <Link to="/contact" className="cta-btn">
          Contact Me <FaArrowRight />
        </Link>
      </section>
    </div>
  );
};

export default Home;
