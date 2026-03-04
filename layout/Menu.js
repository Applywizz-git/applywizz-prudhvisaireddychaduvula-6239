import Link from "next/link";
import { useState } from "react";

const DropdownBtn = () => (
  <div className="dropdown-btn">
    <span className="fas fa-chevron-down" />
  </div>
);

const scrollToPosition = (y) => {
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

const MultiMenu = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleClick = (tabName, scrollY) => {
    scrollToPosition(scrollY);
    setActiveTab(tabName);
  };

  return (
    <>
      <ul className="navigation clearfix">
        <li className="dropdown">
          {/* <a href="#">Home</a> */}
          <button
            onClick={() => handleClick("Home", 0)}
            className={`nav-button-link ${activeTab === "Home" ? "active" : ""}`}
          >
            Home
          </button>

          {/* <DropdownBtn /> */}
        </li>

        <li>
          <button
            onClick={() => handleClick("about", 1100)}
            className={`nav-button-link ${activeTab === "about" ? "active" : ""}`}
          >
            About
          </button>
        </li>

        <li>
          <button
            onClick={() => handleClick("services", 3000)}
            className={`nav-button-link ${activeTab === "services" ? "active" : ""}`}
          >
            Experience
          </button>
        </li>

        <li className="dropdown">
          <button
            onClick={() => handleClick("skills", 4300)}
            className={`nav-button-link ${activeTab === "skills" ? "active" : ""}`}
          >
            Skills
          </button>
        </li>

        <li>
          <button
            onClick={() => handleClick("contact", 8250)}
            className={`nav-button-link ${activeTab === "contact" ? "active" : ""}`}
          >
            Contact
          </button>
        </li>

        <li className="dropdown">
          <button

            className={`nav-button-link ${activeTab === "blog" ? "active" : ""}`}
          >
            <a href="/assets/pdfs/prudhvisaireddy_resume.pdf" download="Prudhvisaireddy_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </button>
        </li>
      </ul>

      <style jsx>{`
        .nav-button-link {
          background: none;
          border: none;
          color: white;
          font: inherit;
          cursor: pointer;
          padding: 0 10px;
          text-transform: capitalize;
        }

        .nav-button-link.active {
          color: yellow;
        }
      `}</style>
    </>
  );
};

export default MultiMenu;



export const OnePageMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">about</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
      <li>
        <a href="#services">services</a>
      </li>
      <li>
        <a href="#skills">skills</a>
      </li>
      <li>
        <a href="#portfolio">projects</a>
      </li>
      <li>
        <a href="#blog">blog</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};
