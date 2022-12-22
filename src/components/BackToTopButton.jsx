import React from "react";
import { useEffect, useState } from "react";
import "../style.css";

export default function BackToTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
        <>
          <button className="buttonScrollToTop" onClick={scrollUp}></button>
          <a href="https://api.whatsapp.com/send?phone=3516532134" target="_blank">
            <button className="btn-wsp"></button>
          </a>
        </>
      )}
    </div>
  );
}
