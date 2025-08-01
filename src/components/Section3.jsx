import React, { useEffect, useRef } from "react";
import { i18n } from "../i18n";
import webdevImage from "../images/webdev.jpg";


const Section3 = () => {
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
    <section className="section3">
      <img src={webdevImage} alt="Web Development" ref={imgRef} />
      <div className="section3-content" ref={contentRef}>
        <h2 className="section3-title">{i18n.section3.title}</h2>
        <p>{i18n.section3.description}</p>
      </div>
    </section>
  );
};

export default Section3;