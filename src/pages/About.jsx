import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaDatabase />, name: "MongoDB" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaGitAlt />, name: "Git/GitHub" },
    { icon: <FaFigma />, name: "Figma" },
  ];

  const experience = [
    {
      year: "2023 - Present",
      role: "Junior Developer",
      company: "XYZ Tech",
      desc: "Developed web apps using React and modern tools, focusing on user experience and performance optimization.",
    },
    {
      year: "2022 - 2023",
      role: "Frontend Intern",
      company: "ABC Startup",
      desc: "Worked on UI/UX enhancements and responsive layouts with CSS Flexbox and Grid.",
    },
    {
      year: "2021",
      role: "Freelancer",
      company: "Self",
      desc: "Built personal projects and contributed to open-source repositories on GitHub, gaining hands-on experience with JavaScript and APIs.",
    },
  ];

  return (
    <div className="about">

      {/* ===== HERO SECTION ===== */}
      <section className="about-hero" data-aos="fade-up">
        <div className="about-content">
          <img
            src="https://picsum.photos/300/300?random=4"
            alt="Profile"
            className="profile-img"
            data-aos="zoom-in"
            loading="lazy"
          />
          <div className="bio" data-aos="fade-left" data-aos-delay="200">
            <h1>About Me</h1>
            <p>
              I'm a passionate full-stack developer creating user-friendly web applications. My focus is clean code, interactive UI, and performance optimization.
            </p>
            <p>
              Education: Bachelor's in Computer Science, 2021. Let's connect to discuss projects or collaborations!
            </p>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section className="skills-section" data-aos="fade-up" data-aos-delay="300">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section className="experience-section" data-aos="fade-up" data-aos-delay="400">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="timeline-item"
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={idx * 200}
            >
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-content">
                <h3>{exp.role} at {exp.company}</h3>
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section" data-aos="fade-up">
        <h2>Let’s Work Together!</h2>
        <p>I’m open to discussing new projects, ideas, or collaborations.</p>
        <a href="/contact" className="cta-btn">Contact Me</a>
      </section>

    </div>
  );
};

export default About;
