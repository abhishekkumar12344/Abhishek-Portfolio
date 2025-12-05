import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProJects.css"

const projectImages = {
  project1: "https://picsum.photos/400/300?random=1",
  project2: "https://picsum.photos/400/300?random=2",
  project3: "https://picsum.photos/400/300?random=3",
};

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "E-Commerce App",
      desc: "A full-stack e-commerce platform with user authentication, cart management, and payment integration built using React, Node.js, and MongoDB.",
      image: projectImages.project1,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demo: "#",
      repo: "#",
    },
    {
      title: "Weather Dashboard",
      desc: "An interactive weather app using React and OpenWeather API with real-time forecasts and data visualization using Chart.js.",
      image: projectImages.project2,
      tech: ["React", "API", "Chart.js", "CSS"],
      demo: "#",
      repo: "#",
    },
    {
      title: "Task Manager",
      desc: "A productivity tool for managing tasks with React hooks, local storage, and drag-and-drop functionality.",
      image: projectImages.project3,
      tech: ["React", "LocalStorage", "React DnD", "HTML/CSS"],
      demo: "#",
      repo: "#",
    },
  ];

  return (
    <div className="projects-page" data-aos="fade-up">
      {/* Hero Section */}
      <section className="projects-hero">
        <h1>My Projects</h1>
        <p>
          Explore some of my best work — modern, interactive, and fully
          responsive projects that showcase my front-end and full-stack skills.
        </p>
      </section>

      {/* Projects Grid Section */}
      <section className="projects-grid-section">
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
            >
              <div className="project-image-wrapper">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="tech-tags">
                  {proj.tech.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn demo-btn"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn repo-btn"
                  >
                    GitHub <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" data-aos="zoom-in">
        <h2>Interested in working together?</h2>
        <p>
          I’m always open to discussing new projects, creative ideas, or
          opportunities to collaborate. Let’s build something amazing!
        </p>
        <a href="/contact" className="cta-btn">
          Let’s Talk <FaArrowRight />
        </a>
      </section>
    </div>
  );
};

export default Projects;
