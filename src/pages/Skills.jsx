import React, { useEffect } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { name: "React", icon: <FaReact />, level: 90, category: "Frontend" },
    { name: "HTML5", icon: <FaHtml5 />, level: 95, category: "Frontend" },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90, category: "Frontend" },
    { name: "JavaScript", icon: <FaJsSquare />, level: 85, category: "Frontend" },
    { name: "Node.js", icon: <FaNodeJs />, level: 80, category: "Backend" },
    { name: "Git", icon: <FaGitAlt />, level: 90, category: "Tools" },
    { name: "MongoDB", icon: <FaDatabase />, level: 75, category: "Backend" },
    { name: "Responsive Design", icon: <FaMobileAlt />, level: 95, category: "Design" },
  ];

  return (
    <div className="skills-page" id="skills">
      {/* === Header Section === */}
      <div className="skills-header" data-aos="fade-down">
        <h1>My Skills</h1>
        <p>
          I specialize in crafting modern, responsive, and high-performing web applications using
          these technologies and tools.
        </p>
      </div>

      {/* === Skills Grid === */}
      <div className="skills-container" data-aos="fade-up">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p className="category">{skill.category}</p>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="skill-level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
