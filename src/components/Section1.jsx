
import React from "react";
import { i18n } from "../i18n";
import linkedinIcon from "../images/linkedin-icon.png";
import githubIcon from "../images/github-icon.png";
import downArrow from "../images/down-arrow-thin.png";
import avatar from "../images/react.jpg"; // Replace with your own avatar if available

const Section1 = () => {
  const handleNavClick = () => {
    document.querySelector(".section2")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section1">
      <div className="overlay"></div>
      <div className="section1-main">
        <div className="section1-left">
          <img src={avatar} alt="Avatar" className="section1-avatar" />
          <div className="links-container">
            <a
              href="https://github.com/KaanKaramese"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} className="github" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaan-karame%C5%9Fe-ab63b81b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} className="linkedin" alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="section1-content">
          <h1 className="name">{i18n.section1.name}</h1>
          <p className="title">{i18n.section1.title}</p>
          <div className="division"></div>
          <div className="about">
            <p className="about-text">{i18n.section1.aboutText}</p>
            <div className="experience-card">
              <div className="exp-header">
                <span className="exp-dot"></span>
                <span className="exp-title">Current Position</span>
              </div>
              <div className="exp-role">{i18n.section1.currentJob}</div>
            </div>
          </div>
          <div className="download-container">
            <a
              className="download"
              href="/file/Kaan Karameşe Resume.pdf"
              download
            >
              <button className="download_btn up">
                {i18n.section1.downloadButton}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="navBtn-container">
        <img
          id="navBtn"
          src={downArrow}
          alt="Scroll"
          onClick={handleNavClick}
        />
      </div>
    </section>
  );
};

export default Section1;