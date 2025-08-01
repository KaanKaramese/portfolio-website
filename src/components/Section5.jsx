import React, { useState } from "react";
import { i18n } from "../i18n";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = i18n.section5.cardTitles.length;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  return (
    <section className="section5">
      <div className="section5-content">
        <h1 className="section-title" id="section5-title">
          {i18n.section5.title}
        </h1>
        <div className="carousel-container">
          <div
            className="prev-slide"
            onClick={currentSlide > 0 ? handlePrev : null}
            style={{
              cursor: currentSlide > 0 ? "pointer" : "not-allowed",
              opacity: currentSlide > 0 ? 1 : 0.5,
            }}
          >
            <FaChevronLeft size={25} color="white" className="arrow-icon" />
          </div>
          <div className="center">
            <div className="wrapper">
              <div
                className="inner"
                style={{
                  transform: `translateX(-${currentSlide * 33.33333333333333}%)`,
                  transition: "all 0.5s ease-in-out",
                  display: "flex",
                }}
              >
                {i18n.section5.cardTitles.map((title, index) => (
                  <div
                    className="card card2"
                    key={index}
                    style={{ flex: "0 0 33.33333333333333%" }}
                  >
                    <img alt={title} />
                    <div className="content">
                      <h1>{title}</h1>
                      <h3>{i18n.section5.cardDescriptions[index]}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="next-slide"
            onClick={currentSlide < slideCount - 1 ? handleNext : null}
            style={{
              cursor: currentSlide < slideCount - 1 ? "pointer" : "not-allowed",
              opacity: currentSlide < slideCount - 1 ? 1 : 0.5,
            }}
          >
            <FaChevronRight size={25} color="white" className="arrow-icon" />
          </div>
        </div>
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {Array.from({ length: slideCount }).map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot${currentSlide === idx ? " active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;