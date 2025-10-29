import React, { useState } from "react";
import "./Project.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// ✅ Importing images from assets folder (adjust path as per your structure)
import pr1 from "../../assets/pr1.png";
import pr2 from "../../assets/pr2.png";
import pr3 from "../../assets/pr3.png";

const Projects = () => {
  // ✅ Project data array
  const projectData = [
    {
      title: "Crate & Barrel",
      description:
        "Crate & Barrel sells home essentials and houseware, from furniture and kitchen appliances to decor and lighting.",
      link: "#",
      image: pr1,
    },
    {
      title: "Black Star Pastry",
      description:
        "Black Star Pastry online store has a fun and child-like web design, from the logo to typography and icons.",
      link: "#",
      image: pr2,
    },
    {
      title: "Zeuss",
      description:
        "Zeuss sells personalized weight loss, hair, and skin care treatments.",
      link: "#",
      image: pr3,
    },
  ];

  // ✅ State and handlers for slider
  const [current, setCurrent] = useState(0);
  const length = projectData.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  // ✅ Render
  return (
    <section className="projects" id="projects">
      <h1 className="section-title">My Projects</h1>

      <div className="project-slider">
        {/* Left arrow */}
        <button className="arrow-btn left" onClick={prevSlide}>
          <FaArrowLeft />
        </button>

        {/* Mapping projects */}
        {projectData.map((project, index) => (
          <div
            key={index}
            className={index === current ? "project-card active" : "project-card"}
          >
            {index === current && (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Right arrow */}
        <button className="arrow-btn right" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;