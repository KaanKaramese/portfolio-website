import React, { useState, useEffect, useRef } from "react";
import { i18n } from "../i18n";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import redirectArrow from "../images/redirect-arrow.png";
import slidesData from "../data/slidesData";

const Section2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slidesData.length;
  const timeoutRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(slideCount / 3));
    }, 5000);
    timeoutRef.current = timeout;
    return () => clearTimeout(timeout);
  }, [currentSlide, slideCount]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    clearTimeout(timeoutRef.current);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    clearTimeout(timeoutRef.current);
  };

  const slidesToShow = 3;
  const totalSlides = Math.ceil(slideCount / slidesToShow);

  const getVisibleSlides = () => {
    const start = currentSlide * slidesToShow;
    return slidesData.slice(start, start + slidesToShow);
  };

  return (
    <section className="section2">
      <div className="section2-content">
        <h1 className="section-title">{i18n.section2.title}</h1>
        <div className="carousel-outer" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <button
            className="arrow-btn prev-slide"
            onClick={currentSlide > 0 ? handlePrev : undefined}
            disabled={currentSlide === 0}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              margin: 0,
              cursor: currentSlide > 0 ? "pointer" : "not-allowed",
              opacity: currentSlide > 0 ? 1 : 0.5,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Previous slide"
          >
            <FaChevronLeft size={30} color="black" className="arrow-icon" />
          </button>
          <div className="carousel-container" style={{ width: "100%", overflow: "hidden" }}>
            <div className="center" style={{ flex: 1 }}>
              <div className="wrapper">
                <div
                  className="inner"
                  style={{
                    display: "flex",
                    transition: "all 0.5s ease-in-out",
                  }}
                >
                  {getVisibleSlides().map((slide, index) => (
                    <div
                      className="card"
                      key={index}
                      style={{ flex: `0 0 ${100 / slidesToShow}%` }}
                    >
                      <div className="card-img-container">
                        <img className="cardImg" src={slide.image} alt={slide.title} />
                      </div>
                      <div className="content">
                        <h1>{slide.title}</h1>
                        <h3>{slide.description}</h3>
                      </div>
                      <a href={slide.link} target="_blank" rel="noopener noreferrer">
                        <img
                          src={redirectArrow}
                          alt="Redirect"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            className="arrow-btn next-slide"
            onClick={currentSlide < totalSlides - 1 ? handleNext : undefined}
            disabled={currentSlide === totalSlides - 1}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              margin: 0,
              cursor: currentSlide < totalSlides - 1 ? "pointer" : "not-allowed",
              opacity: currentSlide < totalSlides - 1 ? 1 : 0.5,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Next slide"
          >
            <FaChevronRight size={30} color="black" className="arrow-icon" />
          </button>
        </div>
        {/* Carousel indicators */}
        <div className="carousel-indicators" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.7em", marginTop: "1.2em" }}>
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot${currentSlide === idx ? " active" : ""}`}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: currentSlide === idx ? "var(--orange)" : "#e5e7eb",
                border: "none",
                outline: currentSlide === idx ? "2px solid var(--orange)" : "none",
                cursor: "pointer",
                transition: "background 0.2s, outline 0.2s",
                boxShadow: currentSlide === idx ? "0 0 8px 2px var(--orange)" : "none",
              }}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;