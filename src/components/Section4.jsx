import React, { useEffect, useRef } from "react";
import { i18n } from "../i18n";
import reactImage from "../images/react.jpg";


const Section4 = () => {
  const contentRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const node = contentRef.current;
    const imgNode = imgRef.current;
    if (!node || !imgNode) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("fade-in-up");
          imgNode.classList.add("fade-in-up");
          observer.disconnect();
        }
      },
      { threshold: 1 }
    );
    observer.observe(node);
    observer.observe(imgNode);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section4">
      <img src={reactImage} alt="React Master" ref={imgRef} />
      <div className="section4-content" ref={contentRef}>
        <h2 className="section4-title">{i18n.section4.title}</h2>
        <p>{i18n.section4.description}</p>
      </div>
    </section>
  );
};

export default Section4;